import DefaultLayout from '../components/DefaultLayout'
import '../styles/itempage.css'
import React, { useRef, useState } from 'react';
import { Button, Input, Modal, Space, Table } from 'antd';
import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

function Itempage() {
    const [modalData, setModalData] = useState(null)
    const [open, setOpen] = useState(false)
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
            category: 'Food',
            product: "Krabby Patty",
            price: 230000,
            status: false,
        },
        {
            key: '2',
            category: 'Drink',
            product: "Orange Soda",
            price: 230000,
            status: true,
        },
        {
            key: '3',
            category: 'Drink',
            product: "Orange Soda",
            price: 230000,
            status: false,
        },
        {
            key: '4',
            category: 'Drink',
            product: "Orange Soda",
            price: 230000,
            status: true,
        },
        {
            key: '5',
            category: 'Food',
            product: "Krabby Patty",
            price: 230000,
            status: true,
        },
        {
            key: '6',
            category: 'Food',
            product: "Krabby Patty",
            price: 230000,
            status: false,
        },
        {
            key: '7',
            category: 'Drink',
            product: "Orange Soda",
            price: 230000,
            status: false,
        },
        {
            key: '8',
            category: 'Drink',
            product: "Orange Soda",
            price: 230000,
            status: true,
        },
        {
            key: '9',
            category: 'Food',
            product: "Krabby Patty",
            price: 230000,
            status: false,
        },
        {
            key: '10',
            category: 'Snack',
            product: "French Fries",
            price: 230000,
            status: false,
        },
        {
            key: '11',
            category: 'Food',
            product: "Krabby Patty",
            price: 230000,
            status: true,
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
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            filters: [
                {
                    text: 'Food',
                    value: 'Food',
                },
                {
                    text: 'Drink',
                    value: 'Drink',
                },
                {
                    text: 'Snack',
                    value: 'Snack',
                },
            ],
            filterMode: 'tree',
            filterSearch: false,
            onFilter: (value, record) => record.category.includes(value),
            width: '30%',
        },
        {
            title: 'Product',
            dataIndex: 'product',
            key: 'product',
            ...getColumnSearchProps('product')
        },
        {
            title: 'Price',
            key: 'price',
            dataIndex: 'price',
            sorter: (a, b) => a.price - b.price,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            sorter: (a, b) => {
                if (a.status === b.status) {
                    return 0;
                }
                return a.status ? 1 : -1;
            },
            render: (status) => {
                if (status === false) {
                    return <span style={{ color: 'red' }}> Out of stock </span>
                } else {
                    return <span style={{ color: 'green' }}> Available</span>
                }
            }
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <span style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setOpen(true)}><EditOutlined />Edit</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setOpen(true)}><DeleteOutlined />Remove</span>
                </Space>
            ),
        },
    ];

    return (
        <DefaultLayout>
            <div className='block-head'>
                <p style={{ fontSize: 25 }}>Transaction History</p>
            </div>
            <div className='block-head'>
                <button className='add-button' onClick={() => setOpen(true)}><span>&#43;</span> Add Product</button>
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
                        {modalData.product}
                    </div>
                )}
            </Modal>
        </DefaultLayout>
    )
}

export default Itempage