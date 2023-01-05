import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import "../styles/KashierItemComponent.css"

function DefaultLayout({ children }) {
  return (
    <Layout>
      <Layout className='site-layout'>
        <Content
          className='site-layout-background'
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default DefaultLayout