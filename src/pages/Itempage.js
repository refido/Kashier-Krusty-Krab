import DefaultLayout from '../components/DefaultLayout'
import '../styles/itempage.css'
import React, { useEffect, useRef, useState } from 'react';
import { Button, Input, message, Modal, Space, Table } from 'antd';
import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function Itempage() {
    const dispatch = useDispatch()


    const [modalData, setModalData] = useState(null)
    const [itemsData, setItemsData] = useState([])
    const [open, setOpen] = useState(false)
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');

    const [idProduct, setIdProduct] = useState()
    const [nameProduct, setNameProduct] = useState()
    const [priceProduct, setPriceProduct] = useState()
    const [categoryProduct, setCategoryProduct] = useState()
    const [imageProduct, setImageProduct] = useState()


    const searchInput = useRef(null);


    const getAllItems = async () => {
        try {
            dispatch({ type: "SHOW_LOADING" })
            const { data } = await axios.get("https://kashier-krusty-krab-server.azurewebsites.net/item/get-item/");
            setItemsData(data);
            dispatch({ type: "HIDE_LOADING" })
        } catch (error) {
            console.log(error);
        }
    };
    //useEffect
    useEffect(() => {
        getAllItems();
        //eslint-disable-next-line
        if (modalData) {
            setIdProduct(modalData._id)
            setNameProduct(modalData.name);
            setPriceProduct(modalData.price);
            setCategoryProduct(modalData.category);
            setImageProduct(modalData.image);
        } else if (modalData === null) {
            setIdProduct('');
            setNameProduct('');
            setPriceProduct('');
            setCategoryProduct('');
            setImageProduct('');
        }
    }, [modalData]);

    const handleSubmit = async () => {
        if (idProduct) {
            const data = {
                itemId: idProduct,
                name: nameProduct,
                price: priceProduct,
                category: categoryProduct,
                image: imageProduct
            }
            try {
                dispatch({ type: "SHOW_LOADING" });
                await axios.put("https://kashier-krusty-krab-server.azurewebsites.net/item/update-item", data);
                message.success("Item Updated Succesfully");
                getAllItems();
                dispatch({ type: "HIDE_LOADING" });
            } catch (error) {
                dispatch({ type: "HIDE_LOADING" });
                message.error("Something Went Wrong");
                console.log(error);
            }
        } else {
            const data = {
                name: nameProduct,
                price: priceProduct,
                category: categoryProduct,
                image: imageProduct
            }
            try {
                dispatch({ type: "SHOW_LOADING" });
                await axios.post("https://kashier-krusty-krab-server.azurewebsites.net/item/add-item", data);
                message.success("Item Added Succesfully");
                getAllItems();
                dispatch({ type: "HIDE_LOADING" });
            } catch (error) {
                dispatch({ type: "HIDE_LOADING" });
                message.error("Something Went Wrong");
                console.log(error);
            }
        }
    }



    const handleDelete = async (record) => {
        try {
            dispatch({
                type: "SHOW_LOADING",
            });
            await axios.post("https://kashier-krusty-krab-server.azurewebsites.net/item/delete-item", { itemId: record._id });
            message.success("Item Deleted Succesfully");
            getAllItems();
            dispatch({ type: "HIDE_LOADING" });
        } catch (error) {
            dispatch({ type: "HIDE_LOADING" });
            message.error("Something Went Wrong");
            console.log(error);
        }
    }

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

    const columns = [
        {
            title: 'No',
            dataIndex: 'number',
            key: 'number',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Picture',
            dataIndex: 'image',
            render: (image, record) => (
                <img src={image} alt={record.name} height="60" width="60" />
            )
        },
        {
            title: 'Category',
            dataIndex: 'category',
            // key: 'category',
            filters: [
                {
                    text: 'Food',
                    value: 'food',
                },
                {
                    text: 'Drink',
                    value: 'drink',
                },
                {
                    text: 'Snack',
                    value: 'snack',
                },
            ],
            filterMode: 'tree',
            filterSearch: false,
            onFilter: (value, record) => record.category.includes(value),
            width: '30%',
        },
        {
            title: 'Product',
            dataIndex: 'name',
            // key: 'name',
            ...getColumnSearchProps('name')
        },
        {
            title: 'Price',
            // key: 'price',
            dataIndex: 'price',
            sorter: (a, b) => a.price - b.price,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            // key: 'status',
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
            render: (_id, record) => (
                <Space size="middle">
                    <span style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setOpen(true)}><EditOutlined />Edit</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleDelete(record)}><DeleteOutlined />Remove</span>
                </Space>
            ),
        },
    ];

    return (
        <DefaultLayout>
            <div className='block-head'>
                <p style={{ fontSize: 25 }}>List Product</p>
            </div>
            <div className='block-head'>
                <button
                    className='add-button'
                    onClick={() => {
                        setOpen(true)
                        setModalData(null)
                    }}
                >
                    <span>&#43;</span> Add Product</button>
            </div>
            <Table
                columns={columns}
                dataSource={itemsData.map((item, index) => ({...item, number: index + 1}))}
                rowKey={record => record._id}
                onRow={(record) => {
                    return {
                        onClick: () => {
                            setModalData(record);
                        }
                    };
                }} />
            <Modal
                centered
                open={open}
                okText="Submit"
                cancelText="Cancel"
                onOk={() => { setOpen(false) }}
                onCancel={() => setOpen(false)}
                width={450}
                footer={null}
            >
                <div className='center-div'>
                    <h3>{idProduct ? "Update" : "Add"} Product</h3>

                    <img alt="" src={process.env.PUBLIC_URL + '/image/productadd.png'} style={{ width: 150, height: 116 }} />
                    <form >
                        <div className="container-form">
                            <div className='input-form'>
                                <label>Image source</label>
                                <input
                                    type="text"
                                    name="image"
                                    value={imageProduct}
                                    onChange={(e) => setImageProduct(e.target.value)}
                                />
                            </div>
                            <div className="input-form">
                                <label>Category</label>
                                <select name="category" value={categoryProduct} onChange={(e) => setCategoryProduct(e.target.value)}>
                                    <option disabled selected value="">Choose category</option>
                                    <option value="foods">Food</option>
                                    <option value="drinks">Drink</option>
                                    <option value="snacks">Snack</option>
                                </select>
                            </div>
                            <div className="input-form">
                                <label>Product Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={nameProduct}
                                    onChange={(e) => setNameProduct(e.target.value)} />
                            </div>
                            <div className="input-form">
                                <label>Product Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={priceProduct}
                                    onChange={(e) => setPriceProduct(e.target.value)} />
                                {/* <InputNumber className='input-price '
                                formatter={(value) => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                            /> */}
                            </div>
                            <div className="input-form">
                                <label>Status</label>
                                <select name="status">
                                    <option disabled>Choose status</option>
                                    <option value="Available">Available</option>
                                    <option value="Out of Stock">Out of Stock</option>
                                </select>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button type="button" className='modal-cancel-button' onClick={() => setOpen(false)}>
                                <span className='modal-button-span'>Cancel</span>
                            </button>
                            <button type="button" className='modal-submit-button' disabled={nameProduct === '' && priceProduct === '' && categoryProduct === '' && imageProduct === ''} onClick={() => { handleSubmit(); setOpen(false) }}>
                                <span className='modal-button-span'>Submit</span>
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </DefaultLayout>
    )
}

export default Itempage