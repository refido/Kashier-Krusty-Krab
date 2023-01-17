import React, { useCallback, useRef, useEffect, useState } from 'react';
import { Button, message, Modal } from 'antd';
import '../styles/ModalPayment.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import moment from 'moment';

const ButtonPayment = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { cartItems } = useSelector((state) => state.rootReducer)
    const [subTotal, setSubTotal] = useState();
    const [open, setOpen] = useState(false);
    const [secondOpen, setSecondOpen] = useState(false);
    const [custName, setCustName] = useState('')
    const [money, setMoney] = useState(null)
    const [openModalDetailTransaction, setOpenModalDetailTransaction] = useState(false);

    useEffect(() => {
        let temp = 0;
        cartItems.forEach((item) => (temp = temp + item.price * item.quantity));
        setSubTotal(temp);
    }, [cartItems]);

    const componentRef = useRef();
    const HandlePrint =  useReactToPrint({
        content: () => componentRef.current
    });



    //handleSubmit
    const handleSubmit = async () => {
        try {
            const newObject = {
                paymentMethod: "cash",
                customerName: custName,
                cartItems,
                subTotal,
                tax: Number(((subTotal / 100) * 10).toFixed(2)),
                totalAmount: Number(
                    Number(subTotal) + Number(((subTotal / 100) * 10).toFixed(2))
                ),
                userId: JSON.parse(localStorage.getItem("auth"))._id,
            };
            await axios.post("https://kashier-krusty-krab-server.azurewebsites.net/bill/", newObject);
            message.success("Bill Generated");
            navigate("/");
        } catch (error) {
            message.error("Something went wrong");
            console.log(error);
        }
    };
    return (
        <>
            <button type="button" className='modal-submit-button'
                onClick={() => setOpen(true)}
                disabled={cartItems.length === 0}
            >
                <span className='modal-button-span'>Confirm</span>
            </button>
            <Modal
                className='primary'
                centered
                open={open}
                okText="Submit"
                cancelText="Cancel"
                okButtonProps={{ disabled: (money < (subTotal + ((subTotal / 100) * 10))) }}
                onOk={() => {
                    setOpen(false)
                    setSecondOpen(true)
                }}
                onCancel={() => setOpen(false)}
                width={400}
                footer={null}
            >
                <div className='center-div'>
                    <h3>Payment</h3>
                    <img alt="" src={process.env.PUBLIC_URL + '/image/payment.png'} style={{ width: 200, height: 150.5 }} />
                    <form >
                        <div className="container-form">
                            <div className="input-form">
                                <label>Costumer Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={custName}
                                    onChange={(e) => setCustName(e.target.value)} />
                            </div>
                            <div className="input-form">
                                <label>Input Total Money</label>
                                <input
                                    type="number"
                                    name="money"
                                    value={money}
                                    onChange={(e) => setMoney(e.target.value)} />
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button type="button" className='modal-cancel-button' onClick={() => setOpen(false)}>
                                <span className='modal-button-span'>Cancel</span>
                            </button>
                            <button
                                type="button"
                                className='modal-submit-button'
                                onClick={() => {
                                    setOpen(false);
                                    setSecondOpen(true)
                                }}
                                disabled={money < (subTotal + ((subTotal / 100) * 10))}
                            >
                                <span className='modal-button-span'>Submit</span>
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>

            <Modal
                className='primary'
                maskClosable={false}
                centered
                open={secondOpen}
                okText="Make another transaction"
                cancelText="Print invoice"
                onOk={() => {
                    setSecondOpen(false)
                }}
                onCancel={() => {
                    setSecondOpen(false)
                }}
                width={400}
                footer={null}
            >
                <div className='center-div'>
                    <h3>Payment</h3>
                    <img alt="" src={process.env.PUBLIC_URL + '/image/payment2.png'} style={{ width: 150, height: 150 }} />
                    <h6><span className='custName'>{custName}'s</span> change amount</h6>
                    <h4>$. {(money - (subTotal + ((subTotal / 100) * 10))).toFixed(2)} </h4>

                    <div className='modal-footer payment'>
                        <button type="button" className='modal-other-button' onClick={() => {
                            handleSubmit()
                            setCustName('')
                            setMoney('')
                            dispatch({ type: "RESET_CART" })
                            setSecondOpen(false)
                        }}>
                            <span className='modal-button-span'>Make another transaction</span>
                        </button>
                        <button type="button" className='modal-print-button' onClick={() => {
                            // handleSubmit()
                            // setCustName('')
                            // setMoney('')
                            // dispatch({ type: "RESET_CART" })
                            setSecondOpen(false)
                            setOpenModalDetailTransaction(true)
                        }}>
                            <span className='modal-button-span'>Print invoice</span>
                        </button>
                    </div>
                </div>
            </Modal>

            <Modal
                centered
                maskClosable={false}
                className="detail"
                open={openModalDetailTransaction}
                onCancel={() => setOpenModalDetailTransaction(false)}
                width={490}
                footer={null}
            >
                <div className='center-div' ref={componentRef}>
                    <h3 className='detailTitle'>Bill</h3>
                    <table className='transaction-table'>
                        <tr>
                            <td>Date & Time</td>
                            <td className='value'>{moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')}</td>
                        </tr>
                        <tr>
                            <td>Customer Name</td>
                            <td className='value'>{custName}</td>
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
                        {
                            (cartItems).map(item => (
                                <tr>
                                    <td>{custName}</td>
                                    <td>{item.quantity}</td>
                                    <td>Rp {item.price.toLocaleString().replace(',', '.')}</td>
                                    <td>Rp {item.price * item.quantity}</td>
                                </tr>
                            ))
                        }
                        <tr className='prow'>
                            <td colSpan={4}>Subtotal</td>
                            <td>Rp. {subTotal}</td>
                        </tr>
                        <tr>
                            <td colSpan={4}>Tax</td>
                            <td>Rp. {(subTotal / 100) * 10}</td>
                        </tr>
                        <tr>
                            <th colSpan={4}>Total Price</th>
                            <th>Rp. {Number(subTotal) + Number(((subTotal / 100) * 10).toFixed(2))}</th>
                        </tr>
                    </table>
                </div>
                <div className='transactiondetail-footer'>
                    <button type="button" className='modal-close-button' onClick={() => setOpenModalDetailTransaction(false)}>
                        <span className='modal-button-span'>Close</span>
                    </button>
                    <button
                        type="button"
                        className='modal-submit-button'
                        onClick={() => {
                            HandlePrint()
                            handleSubmit()
                            setCustName('')
                            setMoney('')
                            dispatch({ type: "RESET_CART" })
                        }}

                    >
                        <span className='modal-button-span'>Print</span>
                    </button>
                </div>
            </Modal>
        </>
    );
};
export default ButtonPayment;