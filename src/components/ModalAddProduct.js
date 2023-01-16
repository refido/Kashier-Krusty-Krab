import React, { useState } from 'react';
import { Modal } from 'antd';
import '../styles/ModalPayment.css';

const ModalAddProduct = (open) => {
    const [openModalAddProduct, setOpenModalAddProduct] = useState(open.setOpen);
    return (
        <Modal
            centered
            open={openModalAddProduct}
            okText="Submit"
            cancelText="Cancel"
            onOk={() => { setOpenModalAddProduct(false) }}
            onCancel={() => setOpenModalAddProduct(false)}
            width={450}
            footer={null}
        >
            <div className='center-div'>
                <h3>Add Product</h3>

                <img alt="" src={process.env.PUBLIC_URL + '/image/productadd.png'} style={{ width: 150, height: 116 }} />
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
                    <div className='modal-footer'>
                        <button type="button" className='modal-cancel-button' onClick={() => setOpenModalAddProduct(false)}>
                            <span className='modal-button-span'>Cancel</span>
                        </button>
                        <button type="button" className='modal-submit-button' onClick={() => setOpenModalAddProduct(false)}>
                            <span className='modal-button-span'>Submit</span>
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default ModalAddProduct;