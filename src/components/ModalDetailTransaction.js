import React, { useState } from 'react';
import { Modal, } from 'antd';
import '../styles/ModalDetailTransaction.css';

const ModalDetailTransaction = () => {
    const [openModalDetailTransaction, setOpenModalDetailTransaction] = useState(true);
    return (
        <div className='detail'>
            <Modal
                className="detail"
                centered
                open={openModalDetailTransaction}
                okText="Print"
                onOk={() => { setOpenModalDetailTransaction(false) }}
                width={490}
                footer={null}
            >
                <div className='center-div'>
                    <h3 className='detailTitle'>Detail Transaction</h3>
                    <table className='transaction-table'>
                        <tr>
                            <td>ID Transaction</td>
                            <td className='value'>03012023001</td>
                        </tr>
                        <tr>
                            <td>Date & Time</td>
                            <td className='value'>{Date.now()}</td>
                        </tr>
                        <tr>
                            <td>Customer Name</td>
                            <td className='value'>Ali</td>
                        </tr>
                    </table>
                    <p className='purchasingList'>Purchasing List</p>

                    <table className='purchase'>
                        <tr>
                            <th>No</th>
                            <th>Items</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Total Price</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Krabby Patty</td>
                            <td>1</td>
                            <td>Rp 20.000</td>
                            <td>Rp 20.000</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Krabby Patty</td>
                            <td>1</td>
                            <td>Rp 20.000</td>
                            <td>Rp 20.000</td>
                        </tr>
                        <tr className='prow'>
                            <td colSpan={4}>Subtotal</td>
                            <td>Rp 20.000</td>
                        </tr>
                        <tr>
                            <td colSpan={4}>Discount</td>
                            <td>Rp -</td>
                        </tr>
                        <tr>
                            <td colSpan={4}>Tax</td>
                            <td>Rp -</td>
                        </tr>
                        <tr>
                            <th colSpan={4}>Total Price</th>
                            <th>Rp 20.000</th>
                        </tr>
                    </table>

                    <div className='transactiondetail-footer'>
                        <button type="button" className='modal-submit-button' onClick={() => setOpenModalDetailTransaction(false)}>
                            <span className='modal-button-span'>Print</span>
                        </button>
                    </div>
                </div>
            </Modal></div>
    );
};

export default ModalDetailTransaction;