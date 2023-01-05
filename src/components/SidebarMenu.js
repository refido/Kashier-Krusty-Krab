import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import logoKrustyKrab from '../logo/logoKrustyKrab.png';
import cashier from '../logo/cashier.png';
import product from '../logo/product.png';
import transaction from '../logo/transaction.png';
import logout from '../logo/logout.png';
import setting from '../logo/settings.png';
import profile from '../logo/profile.png';
import avatar from '../logo/avatar.png';
import MenuItem from 'antd/es/menu/MenuItem';

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
    return (
        <div style={{ height: "100vh"}}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '100%'}}>
                <div>
                    <Menu
                        onClick={onClick}
                        style={{
                            height: '70vh',
                            width: 90,
                            left: 0,
                            top: 0,
                            background: '#FEF56D',
                        }}
                        mode="inline">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={logoKrustyKrab} style={{ width: 38, height: 38, marginTop: 10 }} />
                        </div>
                        <Menu.Item key="/2">
                            <img src={product} style={{ width: 39, height: 35 }} />
                            {/* <Link to='/admin/login' /> */}
                        </Menu.Item>
                        <Menu.Item key="/3">
                            <img src={cashier} style={{ width: 33, height: 35 }} />
                            {/* <Link to='/admin/login' /> */}
                        </Menu.Item>
                        <Menu.Item key="/4">
                            <img src={transaction} style={{ width: 39, height: 35 }} />
                            {/* <Link to='/admin/login' /> */}
                        </Menu.Item>
                    </Menu>
                </div>
                <div>
                    <Menu
                        onClick={onClick}
                        style={{
                            height: '30vh',
                            width: 90,
                            left: 0,
                            background: '#FEF56D',
                            marginBottom: 'auto',
                            display: 'flex', 
                            flexDirection: 'column',
                            justifyContent: 'end', 
                        }}
                        mode="inline">
                        <Menu.Item key="/5">
                            <img src={setting} style={{ width: 31, height: 34 }} />
                            {/* <Link to='/admin/login' /> */}
                        </Menu.Item>
                        <Menu.Item key="/6">
                            <img src={logout} style={{ width: 31, height: 33 }} />
                            {/* <Link to='/admin/login' /> */}
                        </Menu.Item>
                        <Menu.Divider />

                        <Menu.Item key="/profile">
                            <img src={avatar} style={{ width: 35, height: 30 }} />
                            {/* <Link to='/admin/login' /> */}
                        </Menu.Item>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={profile} style={{ marginLeft: 0, width: 25, height: 10 }} />
                        </div>
                    </Menu>
                </div>
            </div>
        </div>
    );
};


export default App;