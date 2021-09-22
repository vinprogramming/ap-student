import './App.css';
import { Layout } from 'antd';
import { AppHeader, AppSider, AppFooter, AppBreadcrumb } from './components';

import { SDashBoard, Documents, Calendar,MyApplications, MyQueries  } from './pages/student';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
const { Content } = Layout;


function App() {

  return (
    <>

      <Layout style={{ minHeight: '100vh' }}>
        <AppSider />
        <Layout className="site-layout">
          <AppHeader />
          <Content style={{ margin: '0 16px' }}>
            <BrowserRouter>
              <Switch>
                <Route path="/" component={SDashBoard} exact />
                <Route path="/myapplications" component={MyApplications} exact />
                <Route path="/docs" component={Documents} exact />
                <Route path="/calendar" component={Calendar} exact />
                <Route path="/myqueries" component={MyQueries} exact />
                <AppBreadcrumb keys={['App', 'Dashboard']} />
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  Bill is a cat.
                </div>
              </Switch>
            </BrowserRouter>
          </Content>
          <AppFooter />
        </Layout>
      </Layout>

    </>
  );
}

export default App;
