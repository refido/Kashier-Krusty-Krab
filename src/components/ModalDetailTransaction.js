import React, { useState } from 'react';
import { Button, Modal,} from 'antd';
import '../styles/ModalDetailTransaction.css';

const ModalDetailTransaction = () => {
    const [openModalDetailTransaction, setOpenModalDetailTransaction] = useState(true);
    return (
        <Modal
            centered
            open={openModalDetailTransaction}
            okText="Submit"
            cancelText="Cancel"
            onOk={() => { setOpenModalDetailTransaction(false) }}
            onCancel={() => setOpenModalDetailTransaction(false)}
            width={632}
            className="detail"
        >
            <div className='center-div'>
                <h3>Add Product</h3>
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
                <p style={{display: 'flex', flexDirection: 'row', width:'80vh'}}>Purchasing List</p>
                
                <table className='purchase-item'>
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
            </div>
        </Modal>
    );
};

export default ModalDetailTransaction;