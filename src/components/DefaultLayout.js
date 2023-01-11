import { Col, Layout, Row } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import "../styles/KashierItemComponent.css"
import "../styles/ListOrder.css"
import ListOrder from "./ListOrder";
function DefaultLayout({ children }) {
  return (
    <Layout>
      <div className='background'>
        <div className='flower'>
      <Row>
        <ListOrder />
        <Col span={16} pull={8}>
          <Layout className='site-layout'>
            <Content
              className='site-layout-background'
              style={{
                // top: 20,
                padding: 24,
                // margin: "24px 16px",
                // padding: 24,
                // minHeight: 280,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Col>
      </Row>
        </div>
      </div>
    </Layout>
  )
}

export default DefaultLayout