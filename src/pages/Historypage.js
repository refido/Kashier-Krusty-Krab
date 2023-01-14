import DefaultLayout from '../components/DefaultLayout'
import React, { useEffect, useRef, useState } from 'react';
import { Button, Input, Modal, Space, Table } from 'antd';
import { ProfileOutlined, SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import axios from 'axios';

function Historypage() {

    const [open, setOpen] = useState(false)
    const [modalData, setModalData] = useState(null)

    const [billsData, setBillsData] = useState([]);
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

    const getAllBills = async () => {
        try {
            const { data } = await axios.get("https://kashier-krusty-krab-server.azurewebsites.net/bill/");
            setBillsData(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    //useEffect
    useEffect(() => {
        getAllBills();
        //eslint-disable-next-line
    }, []);

    const columns = [
        {
            title: 'ID Transaction',
            dataIndex: '_id',
            key: '_id',
            sorter: (a, b) => a.key - b.key,
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
                    <a style={{ display: 'inline-flex', alignItems: 'center' }} onClick={() => setOpen(true)}><ProfileOutlined style={{ marginRight: 8 }} />Detail</a>
                </Space>
            ),
        },
    ];

    return (
        <DefaultLayout>
            <div className='block-head'>
                <p style={{ fontSize: 25 }}>Transaction History</p>
            </div>
            <Table
                columns={columns}
                dataSource={billsData}
                onRow={(record) => {
                    return {
                        onClick: () => {
                            setModalData(record);
                            setOpen(true);
                        }
                    };
                }} />
            <Modal open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>
                {modalData && (
                    <div>
                        {modalData._id}
                    </div>
                )}
            </Modal>
        </DefaultLayout>
    )
}

export default Historypage