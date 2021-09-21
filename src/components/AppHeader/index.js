import React from 'react'
import {
    LogoutOutlined,
  } from '@ant-design/icons';
import {Layout} from 'antd';

  function AppHeader() {
    const {  Header } = Layout;

    return (
        <Header className="site-layout-background Header">
            <div className="logout"><LogoutOutlined/></div>
        </Header>
    )
}

export default AppHeader;
