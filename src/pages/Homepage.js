import { Col, Row } from 'antd'
import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import ItemList from '../components/ItemList'

function Homepage() {
    const itemData = [
        {id:1 ,name: "Krabby Patty", price: 20000, image: "image" },
        {id:2 ,name: "Krabby Patty", price: 20000, image: "image" },
        {id:3 ,name: "Krabby Patty", price: 20000, image: "image" },
        {id:4 ,name: "Krabby Patty", price: 20000, image: "image" },
        {id:5 ,name: "Krabby Patty", price: 20000, image: "image" },
        {id:6 ,name: "Krabby Patty", price: 20000, image: "image" },
        {id:7 ,name: "Krabby Patty", price: 20000, image: "image" },
        {id:8 ,name: "Krabby Patty", price: 20000, image: "image" },
    ]
    return (
        <DefaultLayout>
            <Row>
                {
                    itemData.map((item => (
                        <Col key={item.id} xs={24} lg={6} md={12} sm={6}>
                            <ItemList item={item} />
                        </Col>
                    )))
                }
            </Row>
        </DefaultLayout>
    )
}

export default Homepage