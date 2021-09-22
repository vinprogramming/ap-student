import React, { useState } from 'react'
import {
    ProfileOutlined,
    PieChartOutlined,
    FileOutlined,
    UserOutlined,
    CalendarOutlined,
    QuestionOutlined,
} from '@ant-design/icons';

import { BrowserRouter as Router, Link } from "react-router-dom";
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

function AppSider() {
    const [collapsed, setcollapsed] = useState(false)
    let keyCounter = 1;
    const onCollapse = collapsed => {
        console.log(collapsed);
        setcollapsed(collapsed);
    };
    return (
        <Router>
            <Sider collapsible collapsed={collapsed} onCollapse={() => onCollapse(!collapsed)}
            >
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key={keyCounter++} icon={<PieChartOutlined />}>
                        <span>Dashboard</span>
                        <Link to="/" />
                    </Menu.Item>
                    <Menu.Item key={keyCounter++} icon={<ProfileOutlined />}>
                        <span>Applications</span>
                        <Link to="/myapplications" />
                    </Menu.Item>
                    <Menu.Item key={keyCounter++} icon={<FileOutlined />}>
                        <span>Documents</span>
                        <Link to="/docs" />
                    </Menu.Item>
                    <Menu.Item key={keyCounter++} icon={<CalendarOutlined />} >
                        <span>Calendar</span>
                        <Link to="/calendar" />
                    </Menu.Item>
                    <Menu.Item key={keyCounter++} icon={<QuestionOutlined />} >
                        <span> My Queries</span>
                        <Link to="/myqueries" />
                    </Menu.Item>
                    <Menu.Item key={keyCounter++} icon={<UserOutlined />}>
                        Profile
                        <span> Profile</span>
                        <Link to="/profile" />
                    </Menu.Item>
                </Menu>
            </Sider>

        </Router>
    )
}

export default AppSider;
