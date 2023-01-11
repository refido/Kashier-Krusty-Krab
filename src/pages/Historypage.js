import DefaultLayout from '../components/DefaultLayout'
import React, { useRef, useState } from 'react';
import { Button, Input, Modal, Space, Table } from 'antd';
import { ProfileOutlined, SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

function Historypage() {

    const [open, setOpen] = useState(false)
    const [modalData, setModalData] = useState(null)

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

    const data = [
        {
            key: '1',
            custName: 'Ali',
            totItem: 3,
            tax: 2300,
            price: 230000
        },
        {
            key: '2',
            custName: 'Ali',
            totItem: 3,
            tax: 2300,
            price: 230000
        },
        {
            key: '3',
            custName: 'Ali',
            totItem: 3,
            tax: 2300,
            price: 230000
        },
        {
            key: '4',
            custName: 'Ali',
            totItem: 3,
            tax: 2300,
            price: 230000
        },
        {
            key: '5',
            custName: 'Ali',
            totItem: 3,
            tax: 2300,
            price: 230000
        },
        {
            key: '6',
            custName: 'Ali',
            totItem: 3,
            tax: 2300,
            price: 230000
        },
        {
            key: '7',
            custName: 'Ali',
            totItem: 3,
            tax: 2300,
            price: 230000
        },
        {
            key: '8',
            custName: 'Ali',
            totItem: 3,
            tax: 2300,
            price: 230000
        },
        {
            key: '9',
            custName: 'Ali',
            totItem: 3,
            tax: 2300,
            price: 230000
        },
        {
            key: '10',
            custName: 'Ali',
            totItem: 3,
            tax: 2300,
            price: 230000
        },
        {
            key: '11',
            custName: 'Ali',
            totItem: 3,
            tax: 2300,
            price: 230000
        },
    ];

    const columns = [
        {
            title: 'ID Transaction',
            dataIndex: 'key',
            key: 'key',
            sorter: (a, b) => a.key - b.key,
        },
        {
            title: 'Customer Name',
            dataIndex: 'custName',
            key: 'custName',
            ...getColumnSearchProps('custName')
        },
        {
            title: 'Total Item',
            dataIndex: 'totItem',
            key: 'totItem',
            sorter: (a, b) => a.totItem - b.totItem,
        },
        {
            title: 'Tax',
            dataIndex: 'tax',
            key: 'tax',
            sorter: (a, b) => a.tax - b.tax,
        },
        {
            title: 'Total Price',
            key: 'price',
            dataIndex: 'price',
            sorter: (a, b) => a.price - b.price,
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
                dataSource={data}
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
                        {modalData.key}
                    </div>
                )}
            </Modal>
        </DefaultLayout>
    )
}

export default Historypage