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

function DefaultLayout({ listOrder, children }) {
  const { loading } = useSelector((state) => state.rootReducer);
  let setting = 0;
  if(listOrder){
    setting = 6;
  }else{
    setting = 0;
  }

  return (
    <Layout>
      {loading && <Spinner />}
      <div className='background'>
        <div className='flower'>
          <Row>
            <SideBar>
              <SidebarMenu />
            </SideBar>
            {/* <ListOrder />   */}
            {
              listOrder == false
                ? null
                : (
                  <ListOrder />
                )
            }
            <Col span={16} pull={setting}>
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