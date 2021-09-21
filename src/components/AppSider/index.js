import React, { useState } from 'react'
import {
    ProfileOutlined,
    PieChartOutlined,
    FileOutlined,
    UserOutlined,
    CalendarOutlined,
    QuestionOutlined,
} from '@ant-design/icons';
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
        <Sider collapsible collapsed={collapsed} onCollapse={() => onCollapse(!collapsed)}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key={keyCounter++} icon={<PieChartOutlined />}>
                    Dashboard
                </Menu.Item>
                <Menu.Item key={keyCounter++} icon={<ProfileOutlined />}>
                    Applications
                </Menu.Item>
                <Menu.Item key={keyCounter++} icon={<FileOutlined />}>
                    Documents
                </Menu.Item>
                <Menu.Item key={keyCounter++} icon={<CalendarOutlined />} title="User">
                    Calendar
                </Menu.Item>
                <Menu.Item key={keyCounter++} icon={<QuestionOutlined />} title="User">
                    My Queries
                </Menu.Item>
                <Menu.Item key={keyCounter++} icon={<UserOutlined />} title="User">
                    Profile
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default AppSider;
