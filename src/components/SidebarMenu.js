import React from 'react';
import { Menu } from 'antd';
import logoKrustyKrab from '../logo/logoKrustyKrab.png';
import cashier from '../logo/cashier.png';
import product from '../logo/product.png';
import transaction from '../logo/transaction.png';
import logout from '../logo/logout.png';
import setting from '../logo/settings.png';
import profile from '../logo/profile.png';
import avatar from '../logo/avatar.png';
import { Link } from 'react-router-dom'

const App = () => {
    const onClick = (e) => {
        console.log('click ', e);
    };
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '100%' }}>
            <div>
                <Menu
                    onClick={onClick}
                    style={{
                        height: '65vh',
                        width: 72,
                        left: 0,
                        top: 0,
                        background: '#FEF56D',
                    }}
                    mode="inline">
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={logoKrustyKrab} style={{ width: 65, height: 57, marginTop: 10 }} />
                    </div>
                    <Menu.Item key="/1" style={{ paddingLeft: 10, marginTop: 10 }}>
                        <img src={cashier} style={{ width: 42, height: 37 }} />
                        <Link to='/cashier' />
                    </Menu.Item>
                    <Menu.Item key="/2" style={{ paddingLeft: 10, marginTop: 10 }}>
                        <img src={product} style={{ width: 45, height: 37 }} />
                        <Link to='/menu-item' />
                    </Menu.Item>
                    <Menu.Item key="/3" style={{ paddingLeft: 9, marginTop: 10 }}>
                        <img src={transaction} style={{ width: 39, height: 35 }} />
                        <Link to='/history-payment' />
                    </Menu.Item>
                </Menu>
            </div>
            <div>
                <Menu
                    onClick={onClick}
                    style={{
                        height: '35vh',
                        width: 72,
                        left: 0,
                        background: '#FEF56D',
                        marginBottom: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'end',
                    }}
                    mode="inline">
                    <Menu.Item key="/4" style={{ paddingLeft: 12, marginTop: 5 }}>
                        <img src={setting} style={{ width: 34, height: 38 }} />
                        {/* <Link to='/admin/login' /> */}
                    </Menu.Item>
                    <Menu.Item key="/5" style={{ paddingLeft: 12, marginTop: 5 }}>
                        <img src={logout} style={{ width: 34, height: 37 }} />
                        {/* <Link to='/admin/login' /> */}
                    </Menu.Item>
                    <Menu.Divider />

                    <Menu.Item key="/profile" style={{ paddingLeft: 12, marginTop: 5 }}>
                        <img src={avatar} style={{ width: 36, height: 35 }} />
                        {/* <Link to='/admin/login' /> */}
                    </Menu.Item>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 10 }}>
                        <img src={profile} style={{ width: 29, height: 10 }} />
                    </div>
                </Menu>
            </div>
        </div>
    );
};

export default App;