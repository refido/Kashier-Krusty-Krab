import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import '../styles/ModalPayment.css';

const ButtonPayment = () => {
    const [open, setOpen] = useState(false);
    const [secondOpen, setSecondOpen] = useState(false);

    const onOk = () => { setOpen(false); setSecondOpen(true) }
    const onCancel = () => setOpen(false)
    return (
        <>
            <Button type="primary" onClick={() => setOpen(true)}>
                Open Modal of 1000px width
            </Button>
            <Modal
                centered
                open={open}
                okText="Submit"
                cancelText="Cancel"
                onOk={() => { setOpen(false); setSecondOpen(true) }}
                onCancel={() => setOpen(false)}
                width={400}
                footer={null}
            >
                <div className='center-div'>
                    <h3>Payment</h3>

                    <img src={process.env.PUBLIC_URL + '/image/payment.png'} style={{ width: 200, height: 150.5 }} />
                    <form >
                        <div className="container-form">
                            <div className="input-form">
                                <label>Costumer Name</label>
                                <input
                                    type="text"
                                    name="name" />
                            </div>
                            <div className="input-form">
                                <label>Input Total Money</label>
                                <input
                                    type="number"
                                    name="total" />
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button type="button" className='modal-cancel-button' onClick={() => setOpen(false)}>
                                <span className='modal-button-span'>Cancel</span>
                            </button>
                            <button type="button" className='modal-submit-button' onClick={() => { setOpen(false); setSecondOpen(true) }}>
                                <span className='modal-button-span'>Submit</span>
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>


            <Modal
                centered
                open={secondOpen}
                okText="Make another transaction"
                cancelText="Print invoice"
                onOk={() => setSecondOpen(false)}
                onCancel={() => setSecondOpen(false)}
                width={400}
                footer={null}
            >
                <div className='center-div'>
                    <h3>Payment</h3>

                    <img src={process.env.PUBLIC_URL + '/image/payment2.png'} style={{ width: 150, height: 150 }} />
                    <h6><span className='custName'>ABC's</span> change amount</h6>
                    <h4>Rp 12.000</h4>

                    <div className='modal-footer payment'>
                        <button type="button" className='modal-other-button' onClick={() => setSecondOpen(false)}>
                            <span className='modal-button-span'>Make another transaction</span>
                        </button>
                        <button type="button" className='modal-print-button' onClick={() => setSecondOpen(false)}>
                            <span className='modal-button-span'>Print invoice</span>
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};
export default ButtonPayment;