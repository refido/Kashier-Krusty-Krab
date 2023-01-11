import { Col, Layout, Row, Button, Space } from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import "../styles/ListOrder.css"
const ListOrder = () => {
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
                            List Order
                        </Col>
                        <Col span={12}>
                            0000000000000
                        </Col>
                    </Row>
                    <div className='list-order-item'>
                        <Row>
                            <Col flex="50px">
                                <div className='bubble-card-order'>
                                    <p>image</p>
                                </div>
                            </Col>
                            <Col flex="auto">
                                <div className='wooden-card-order'>
                                    <Space wrap className='wooden-content'>
                                        <p className='wooden-item'>Krabby Patty</p>
                                        <Button type="default" shape="circle" icon={<MinusOutlined />} size='small' />
                                        <p className='wooden-font'>123</p>
                                        <Button type="default" shape="circle" icon={<PlusOutlined />} size='small' />
                                    </Space>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='price-order'>
                        <Row>
                            <Col className='subtotal'>
                                Subtotal
                            </Col>
                            <Col className='subtotal-price'>
                                Rp.123
                            </Col>
                        </Row>
                        <Row>
                            <Col className='subtotal'>
                                Discount
                            </Col>
                            <Col className='subtotal-price'>
                                Rp.123
                            </Col>
                        </Row>
                        <Row>
                            <Col className='subtotal'>
                                Tax
                            </Col>
                            <Col className='subtotal-price'>
                                Rp.123
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
                                Rp.123
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <button className='button-confirm'>Confirm</button>
                    </div>
                    <div className='starfish'>

                    </div>
                </Content>
            </Layout>
        </Col>
    );
};
export default ListOrder;