import { Col, Layout, Row } from 'antd'
import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import ItemList from '../components/ItemList'

function Homepage() {
    const itemData = [
        {id:1 ,name: "Krabby Patty", price: 20000, image: "image" },
        {id:2 ,name: "Krabby Patty", price: 20000, image: "image" }
    ]
    return (
        <DefaultLayout>
            <div className='block-head'>
                <p>Choose Categori</p>
                <input className='search-input' placeholder='Search Item'></input>
            </div>
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