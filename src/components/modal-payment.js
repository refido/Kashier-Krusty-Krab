import React, { useCallback, useEffect, useState } from 'react';
import { Button, message, Modal } from 'antd';
import '../styles/ModalPayment.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ButtonPayment = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { cartItems } = useSelector((state) => state.rootReducer)
    const [subTotal, setSubTotal] = useState();
    const [open, setOpen] = useState(false);
    const [secondOpen, setSecondOpen] = useState(false);

    const onOk = () => { setOpen(false); setSecondOpen(true) }
    const onCancel = () => setOpen(false)
    const [custName, setCustName] = useState('')
    const [money, setMoney] = useState(null)



    useEffect(() => {
        let temp = 0;
        cartItems.forEach((item) => (temp = temp + item.price * item.quantity));
        setSubTotal(temp);
    }, [cartItems]);


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
            // console.log(newObject);
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
            <Button 
                type="primary" 
                onClick={() => setOpen(true)}
                disabled={cartItems.length === 0}
                >
                Confirm
            </Button>
            <Modal
                centered
                open={open}
                okText="Submit"
                cancelText="Cancel"
                okButtonProps={{ disabled: (money < (subTotal + ((subTotal / 100) * 10))) }}
                onOk={() => {  setOpen(false); setSecondOpen(true) }}
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
                            <button type="button" className='modal-submit-button' onClick={() => { setOpen(false); setSecondOpen(true) }}>
                                <span className='modal-button-span'>Submit</span>
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>


            <Modal
                maskClosable={false}
                centered
                open={secondOpen}
                okText="Make another transaction"
                cancelText="Print invoice"
                onOk={() => {
                    handleSubmit()
                    setSecondOpen(false)
                    setCustName('')
                    setMoney('')
                    dispatch({ type: "RESET_CART" })
                }}
                onCancel={() => setSecondOpen(false)}
                width={400}
                footer={null}
            >
                <div className='center-div'>
                    <h3>Payment</h3>
                    <img alt="" src={process.env.PUBLIC_URL + '/image/payment2.png'} style={{ width: 150, height: 150 }} />
                    <h6><span className='custName'>{custName}'s</span> change amount</h6>
                    <h4>Rp. {(money - (subTotal + ((subTotal / 100) * 10))).toFixed(2)} </h4>

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