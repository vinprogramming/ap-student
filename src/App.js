import './App.css';
import { Layout } from 'antd';
import { AppHeader, AppSider, AppFooter, AppBreadcrumb } from './components';
const { Content } = Layout;

function App() {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppSider />
      <Layout className="site-layout">
        <AppHeader />
        <Content style={{ margin: '0 16px' }}>
          <AppBreadcrumb keys={['App', 'Dashboard']} />
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <AppFooter />
      </Layout>

    </Layout>
  );
}

export default App;
