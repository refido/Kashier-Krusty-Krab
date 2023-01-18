import DefaultLayout from '../components/DefaultLayout'
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Button, Input, Modal, Space, Table } from 'antd';
import { ProfileOutlined, SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import axios from 'axios';
import moment from 'moment';
import { useReactToPrint } from 'react-to-print';
import { useDispatch } from 'react-redux';
import '../styles/ModalDetailTransaction.css';

function Historypage() {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [modalData, setModalData] = useState(null)
    const [billsData, setBillsData] = useState([]);
    const [subTotal, setSubTotal] = useState()
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const getAllBills = useCallback(async () => {
        try {
            dispatch({ type: "SHOW_LOADING" })
            const { data } = await axios.get("https://kashier-krusty-krab-server.azurewebsites.net/bill/");
            setBillsData(data);
            dispatch({ type: "HIDE_LOADING" })
        } catch (error) {
            console.log(error);
        }
    }, [dispatch])
    //useEffect
    useEffect(() => {
        getAllBills();
    }, [getAllBills]);

    const columns = [
        {
            title: 'No',
            dataIndex: 'number',
            key: 'number',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Customer Name',
            dataIndex: 'customerName',
            key: 'customerName',
            ...getColumnSearchProps('customerName')
        },
        {
            title: 'Subtotal',
            dataIndex: 'subTotal',
            key: 'subTotal',
            sorter: (a, b) => a.subTotal - b.subTotal,
        },
        {
            title: 'Tax',
            dataIndex: 'tax',
            key: 'tax',
            sorter: (a, b) => a.tax - b.tax,
        },
        {
            title: 'Total Price',
            key: 'totalAmount',
            dataIndex: 'totalAmount',
            sorter: (a, b) => a.totalAmount - b.totalAmount,
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <a href='##' style={{ display: 'inline-flex', alignItems: 'center' }} onClick={() => setOpen(true)}><ProfileOutlined style={{ marginRight: 8 }} />Detail</a>
                </Space>
            ),
        },
    ];

    const countSubTotal = (record) => {
        let temp = 0;
        (record.cartItems).forEach((item) => (temp = temp + item.price * item.quantity));
        setSubTotal(temp);
    }


    return (
        <DefaultLayout listOrder={false}>
            <div className='block-head'>
                <p style={{ fontSize: 25 }}>Transaction History</p>
            </div>
            <Table
                rowKey={record => record._id}
                columns={columns}
                dataSource={billsData.map((item, index) => ({ ...item, number: index + 1 }))}
                onRow={(record) => {
                    return {
                        onClick: () => {
                            setModalData(record);
                            countSubTotal(record)
                            setOpen(true);
                        }
                    };
                }} />

            {modalData && (
                <div className='detail'>
                    <Modal
                        className="detail"
                        centered
                        open={open}
                        okText="Print"
                        onOk={() => { setOpen(false) }}
                        onCancel={() => setOpen(false)}
                        footer={null}
                        width={490}
                    >
                        <div className='center-div' ref={componentRef}>
                            <div>
                                <h3 className='detailTitle'>Detail Transaction</h3>
                                <table className='transaction-table'>
                                    <tr>
                                        <td>ID Transaction</td>
                                        <td className='value'>{modalData._id}</td>
                                    </tr>
                                    <tr>
                                        <td>Date & Time</td>
                                        <td className='value'>{moment(modalData.date).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                    </tr>
                                    <tr>
                                        <td>Customer Name</td>
                                        <td className='value'>{modalData.customerName}</td>
                                    </tr>
                                </table>
                                <p className='purchasingList'>Purchasing List</p>
                                <table className='purchase'>
                                    <tr>
                                        <th>Items</th>
                                        <th>Qty</th>
                                        <th>Price</th>
                                        <th>Total Price</th>
                                    </tr>
                                    {
                                        (modalData.cartItems).map(item => (
                                            <tr>
                                                <td>{item.name}</td>
                                                <td>{item.quantity}</td>
                                                <td>$ {item.price.toLocaleString().replace(',', '.')}</td>
                                                <td>$ {item.price * item.quantity}</td>
                                            </tr>
                                        ))
                                    }
                                    <tr className='prow'>
                                        <td colSpan={4}>Subtotal</td>
                                        <td>$ {subTotal}</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4}>Tax</td>
                                        <td>$ {(subTotal / 100) * 10}</td>
                                    </tr>
                                    <tr>
                                        <th colSpan={4}>Total Price</th>
                                        <th>$ {Number(subTotal) + Number(((subTotal / 100) * 10).toFixed(2))}</th>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className='transactiondetail-footer'>
                            <button type="button" className='modal-submit-button' onClick={handlePrint}>
                                <span className='modal-button-span'>Print</span>
                            </button>
                        </div>
                    </Modal>
                </div>
            )}

        </DefaultLayout>
    )
}

export default Historypage