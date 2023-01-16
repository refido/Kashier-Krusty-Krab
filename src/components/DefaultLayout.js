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
  let setPull = 0;
  let setSpan = 22;
  let setwidth = 91;
  if (listOrder) {
    setPull = 6;
    setSpan = 16;
    setwidth = 65;
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
            <Col span={setSpan} pull={setPull}>
              <Layout className='site-layout'>
                <Content
                  className='site-layout-background'
                  style={{
                    padding: 24, width: `${setwidth}vw`
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