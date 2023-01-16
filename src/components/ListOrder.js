import { Col, Layout, Row, Button, Space } from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { Content } from 'antd/es/layout/layout'
import React, { useEffect, useState } from 'react'
import "../styles/ListOrder.css"
import ButtonPayment from '../components/modal-payment';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const ListOrder = () => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.rootReducer);

    const [subTotal, setSubTotal] = useState(0);

    //handle increament
    const handleIncreament = (record) => {
        dispatch({
            type: "UPDATE_CART",
            payload: { ...record, quantity: record.quantity + 1 },
        });
    };
    const handleDecreament = (record) => {
        if (record.quantity !== 1) {
            dispatch({
                type: "UPDATE_CART",
                payload: { ...record, quantity: record.quantity - 1 },
            });
        } else {
            dispatch({
                type: "DELETE_FROM_CART",
                payload: record
            })
        }
    };

    useEffect(() => {
        let temp = 0;
        cartItems.forEach((item) => (temp = temp + item.price * item.quantity));
        setSubTotal(temp);
    }, [cartItems]);

    return (
        <Col span={6} push={16}>
            <Layout className='list-order'>
                <Content className='site-layout-background'
                    style={{
                        padding: 24,
                    }}
                >
                    <Row>
                        <Col span={12}>
                            <div className='block-head'>
                                <p>List Order</p>
                            </div>
                        </Col>
                        <Col span={12}>
                            0000000000000
                        </Col>
                    </Row>
                    <div className='list-order-item'>
                        {cartItems.map(item => (
                            <Row>
                                <Col flex="50px">
                                    <div className='bubble-card-order'>
                                        <p><img src={item.image} alt={item.name} height="30" width="30" /></p>
                                    </div>
                                </Col>
                                <Col flex="auto">
                                    <div className='wooden-card-order'>
                                        <Space wrap className='wooden-content'>
                                            <p className='wooden-item'>{item.name}</p>
                                            <Button type="default" shape="circle" icon={<MinusOutlined />} onClick={() => handleDecreament(item)} size='small' />
                                            <p className='wooden-font'>{item.quantity}</p>
                                            <Button type="default" shape="circle" icon={<PlusOutlined />} onClick={() => handleIncreament(item)} size='small' />
                                        </Space>
                                    </div>
                                </Col>
                            </Row>
                        ))}

                    </div>
                    <div className='price-order'>
                        <Row>
                            <Col className='subtotal'>
                                Subtotal
                            </Col>
                            <Col className='subtotal-price'>
                                Rp. {subTotal.toLocaleString().replace(',', '.')}
                            </Col>
                        </Row>
                        {/* <Row>
                            <Col className='subtotal'>
                                Discount
                            </Col>
                            <Col className='subtotal-price'>
                                Rp.123
                            </Col>
                        </Row> */}
                        <Row>
                            <Col className='subtotal'>
                                Tax
                            </Col>
                            <Col className='subtotal-price'>
                                Rp. {((subTotal / 100) * 10).toFixed(2).toLocaleString().replace(',', '.')}
                            </Col>
                        </Row>
                        <Row>
                            <Col className='horizontal-line'>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='subtotal'>
                                Total Price
                            </Col>
                            <Col className='subtotal-price'>
                                Rp. {Number(subTotal) + Number(((subTotal / 100) * 10).toFixed(2))}
                            </Col>
                        </Row>
                    </div>
                    <div className='button-confirm'>
                        <ButtonPayment />
                    </div>
                    <div className='starfish'>
                    </div>
                </Content>
            </Layout>
        </Col>
    );
};
export default ListOrder;