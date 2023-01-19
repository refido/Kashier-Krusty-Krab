import React from 'react';
import { Menu, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import logoKrustyKrab from '../logo/logoKrustyKrab.png';
import cashier from '../logo/cashier.png';
import product from '../logo/product.png';
import transaction from '../logo/transaction.png';
import logout from '../logo/logout.png';
import '../styles/SidebarMenu.css';
import { Link } from 'react-router-dom'

const App = () => {

    const onClick = (e) => {
        console.log('click ', e);
    };
    const navigate = useNavigate();

    return (
        <div className='sidebar-container'>
            <div>
                <Menu className='side-menu' mode="inline">
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img alt="" src={logoKrustyKrab} style={{ width: 65, height: 57, marginTop: 10 }} />
                    </div>
                    <Menu.Item key="/cashier" style={{ paddingLeft: 10, marginTop: 10, paddingRight: 0 }}>
                        <img alt="" src={cashier} style={{ width: 42, height: 37 }} />
                        <Link to='/cashier' />
                    </Menu.Item>
                    <Menu.Item key="/menu-item" style={{ paddingLeft: 10, marginTop: 10, paddingRight: 0 }}>
                        <img alt="" src={product} style={{ width: 42, height: 37 }} />
                        <Link to='/menu-item' />
                    </Menu.Item>
                    <Menu.Item key="/history-payment" style={{ paddingLeft: 7, marginTop: 10, paddingRight: 0 }}>
                        <img alt="" src={transaction} style={{ width: 42, height: 37 }} />
                        <Link to='/history-payment' />
                    </Menu.Item>
                </Menu>
            </div>
            <div>
                <Menu
                    className='side-menu2'
                    onClick={onClick}
                    mode="inline">
                    <Menu.Item key="/logout" style={{ paddingLeft: 12, marginTop: 5 }}
                        onClick={() => {
                            localStorage.removeItem("auth");
                            message.success('Success logout!')
                            navigate("/");
                        }}>
                        <img alt="" src={logout} style={{ width: 34, height: 37 }} />
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    );
};

export default App;