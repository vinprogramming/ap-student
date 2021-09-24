import React, { useState } from 'react'
import {
    ProfileOutlined,
    PieChartOutlined,
    FileOutlined,
    UserOutlined,
    CalendarOutlined,
    QuestionOutlined,
    LaptopOutlined,
    NotificationOutlined
} from '@ant-design/icons';

import { BrowserRouter as Router, Link } from "react-router-dom";
import { Layout, Menu } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;
function AppSider() {
    const [collapsed, setcollapsed] = useState(false)
    let keyCounter = 1;
    const onCollapse = collapsed => {
        console.log(collapsed);
        setcollapsed(collapsed);
    };
    return (
        <Sider width={200}
         className="site-layout-background" collapsible collapsed={collapsed} onCollapse={() => onCollapse(!collapsed)}>
            <Menu
                // mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >

                <SubMenu key="sub3" icon={<NotificationOutlined />} title="Notifications">
                    <Menu.Item key="9">notice1</Menu.Item>
                    <Menu.Item key="10">notice2</Menu.Item>
                    <Menu.Item key="11">notice3</Menu.Item>
                    <Menu.Item key="12">notice4</Menu.Item>
                </SubMenu>
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
                    <Link to="/profile" />
                </Menu.Item>
            </Menu>
        </Sider>

        // <Router>
        //     <Sider collapsible collapsed={collapsed} onCollapse={() => onCollapse(!collapsed)}
        //     >
        //         <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        //             <Menu.Item key={keyCounter++} icon={<PieChartOutlined />}>
        //                 <span>Dashboard</span>
        //                 <Link to="/" />
        //             </Menu.Item>
        //             <Menu.Item key={keyCounter++} icon={<ProfileOutlined />}>
        //                 <span>Applications</span>
        //                 <Link to="/myapplications" />
        //             </Menu.Item>
        //             <Menu.Item key={keyCounter++} icon={<FileOutlined />}>
        //                 <span>Documents</span>
        //                 <Link to="/docs" />
        //             </Menu.Item>
        //             <Menu.Item key={keyCounter++} icon={<CalendarOutlined />} >
        //                 <span>Calendar</span>
        //                 <Link to="/calendar" />
        //             </Menu.Item>
        //             <Menu.Item key={keyCounter++} icon={<QuestionOutlined />} >
        //                 <span> My Queries</span>
        //                 <Link to="/myqueries" />
        //             </Menu.Item>
        //             <Menu.Item key={keyCounter++} icon={<UserOutlined />}>
        //                 Profile
        //                 <Link to="/profile" />
        //             </Menu.Item>
        //         </Menu>
        //     </Sider>

        // </Router>
    )
}

export default AppSider;
