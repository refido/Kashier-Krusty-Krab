import React, { useState } from 'react';
import { Button, Modal, InputNumber, Space } from 'antd';
import '../styles/ModalPayment.css';

const ModalDetailProduct = () => {
    const [openModalDetailProduct, setOpenModalDetailProduct] = useState(true);
    return (
        <Modal
            centered
            open={openModalDetailProduct}
            okText="Submit"
            cancelText="Cancel"
            onOk={() => { setOpenModalDetailProduct(false) }}
            onCancel={() => setOpenModalDetailProduct(false)}
            width={450}
        >
            <div className='center-div'>
                <h3>Add Product</h3>

                <img src={process.env.PUBLIC_URL + '/image/productdetail.png'} style={{ width: 130, height: 116 }} />
                <form >
                    <div className="container-form">
                        <div className="input-form">
                            <label>Category</label>
                            <select name="category">
                                <option disabled selected>Choose category</option>
                                <option value="Food">Food</option>
                                <option value="Drink">Drink</option>
                                <option value="Snack">Snack</option>
                            </select>
                        </div>
                        <div className="input-form">
                            <label>Product Name</label>
                            <input
                                type="text"
                                name="total" />
                        </div>
                        <div className="input-form">
                            <label>Product Price</label>
                            <input
                                type="number"
                                name="total" />
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
                </form>
            </div>
        </Modal>
    );
};

export default ModalDetailProduct;