import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import "../styles/KashierItemComponent.css"

function DefaultLayout({ children }) {
  return (
    <Layout>
      <div className='background'>
        <div className='flower'>

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

        </div>
      </div>
    </Layout>
  )
}

export default DefaultLayout