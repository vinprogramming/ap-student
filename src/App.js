import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {useState} from 'react';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  const [collapsed, setcollapsed] = useState(false)

  const onCollapse = collapsed => {
    console.log(collapsed);
    setcollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
    <Sider collapsible collapsed={collapsed} onCollapse={()=> onCollapse(!collapsed)}>
      <div className="logo"/>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Monitor applications
        </Menu.Item>
        <Menu.Item key="3" icon={<FileOutlined />}>
          Documents
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />} title="User">
         Profile  
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          Bill is a cat.
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
  );
}

export default App;
