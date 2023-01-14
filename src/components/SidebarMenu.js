import React from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import logoKrustyKrab from '../logo/logoKrustyKrab.png';
import cashier from '../logo/cashier.png';
import product from '../logo/product.png';
import transaction from '../logo/transaction.png';
import logout from '../logo/logout.png';
import setting from '../logo/settings.png';
import profile from '../logo/profile.png';
import avatar from '../logo/avatar.png';
import '../styles/SidebarMenu.css';
import { Link } from 'react-router-dom'

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem(<img src={logoKrustyKrab} style={{ width: 30, height: 30, }} />),
    getItem(<img src={product} style={{ width: 38, height: 35 }} />, '2'),
    getItem(<img src={cashier} style={{ width: 35, height: 35 }} />, '3'),
    getItem(<img src={transaction} style={{ width: 35, height: 33 }} />, '4'),
    getItem(<img src={setting} style={{ width: 33, height: 35 }} />, '5'),
    getItem(<img src={logout} style={{ width: 33, height: 35 }} />, '6'),
];

const App = () => {
    const onClick = (e) => {
        console.log('click ', e);
    };
    const navigate = useNavigate();

    return (
        <div className='sidebar-container'>
            <div>
                <Menu className='side-menu'
                    
                    mode="inline">
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img alt="" src={logoKrustyKrab} style={{ width: 65, height: 57, marginTop: 10 }} />
                    </div>
                    <Menu.Item key="/1" style={{ paddingLeft: 10, marginTop: 10 }}>
                        <img alt="" src={cashier} style={{ width: 42, height: 37 }} />
                        <Link to='/cashier' />
                    </Menu.Item>
                    <Menu.Item key="/2" style={{ paddingLeft: 10, marginTop: 10 }}>
                        <img alt="" src={product} style={{ width: 45, height: 37 }} />
                        <Link to='/menu-item' />
                    </Menu.Item>
                    <Menu.Item key="/3" style={{ paddingLeft: 9, marginTop: 10 }}>
                        <img alt="" src={transaction} style={{ width: 39, height: 35 }} />
                        <Link to='/history-payment' />
                    </Menu.Item>
                </Menu>
            </div>
            <div>
                <Menu
                className='side-menu2'
                    onClick={onClick}
                    mode="inline">
                    <Menu.Item key="/4" style={{ paddingLeft: 12, marginTop: 5 }}>
                        <img alt="" src={setting} style={{ width: 34, height: 38 }} />
                        {/* <Link to='/admin/login' /> */}
                    </Menu.Item>
                    <Menu.Item key="/5" style={{ paddingLeft: 12, marginTop: 5 }}
                        onClick={() => {
                            localStorage.removeItem("auth");
                            navigate("/");
                        }}>
                        <img alt="" src={logout} style={{ width: 34, height: 37 }} />
                    </Menu.Item>
                    <Menu.Divider />

                    <Menu.Item key="/profile" style={{ paddingLeft: 12, paddingRight:0, marginTop: 5 }}>
                        <img src={avatar} style={{ width: 36, height: 35 }} />
                        {/* <Link to='/admin/login' /> */}
                    </Menu.Item>
                    <div style={{ paddingLeft: 0, display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
                        <img src={profile} style={{ width: 23, height: 9 }} />
                    </div>
                </Menu>
            </div>
        </div>
    );
};

export default App;