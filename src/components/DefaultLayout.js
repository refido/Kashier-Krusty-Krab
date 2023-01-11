import { Col, Layout, Row } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import "../styles/KashierItemComponent.css"
import "../styles/ListOrder.css"
import ListOrder from "./ListOrder";
function DefaultLayout({ children }) {
  return (
    <Layout>
      <Row>
        <ListOrder />
        <Col span={16} pull={8}>
          <Layout className='site-layout'>
            <Content
              className='site-layout-background'
              style={{
                margin: "24px 16px",
                left: 0,
                top: 0,
              }}
            >
              Choose Category
              {children}
            </Content>
          </Layout>
        </Col>
      </Row>
    </Layout>
  )
}

export default DefaultLayout