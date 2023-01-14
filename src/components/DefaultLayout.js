import { Col, Layout, Row } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import "../styles/KashierItemComponent.css"
import "../styles/ListOrder.css"
import ListOrder from "./ListOrder";
import SidebarMenu from '../components/SidebarMenu';
import Spinner from "./Spinner";
import styled from 'styled-components';
import { useSelector } from 'react-redux'

function DefaultLayout({ children }) {
  const { loading } = useSelector((state) => state.rootReducer);
  return (
    <Layout>
      {loading && <Spinner />}
      <div className='background'>
        <div className='flower'>
          <Row>
            <SideBar>
              <SidebarMenu />
            </SideBar>
            <ListOrder />
            <Col span={16} pull={6}>
              <Layout className='site-layout'>
                <Content
                  className='site-layout-background'
                  style={{
                    padding: 24,
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

const SideBar = styled.div`
   padding: 10;
`;

export default DefaultLayout