import './App.css';
import { Layout } from 'antd';
import { AppHeader, AppSider, AppFooter, AppBreadcrumb } from './components';

import { SDashBoard, Documents, Calendar,MyApplications, MyQueries  } from './pages/student';
import { Profile } from './pages/common';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
const { Content } = Layout;


function App() {

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <AppSider />
        <Layout className="site-layout">
          <AppHeader />
          <Content style={{ margin: '0 16px' }}>
            <Switch>
              <Route path="/myapplications" component={MyApplications} exact />
              <Route path="/docs" component={Documents} exact />
              <Route path="/calendar" component={Calendar} exact />
              <Route path="/myqueries" component={MyQueries} exact />
              <Route path="/profile" component={Profile} exact />
              <Route path="/" component={SDashBoard} exact />
              {/* 
                <AppBreadcrumb keys={['App', 'Dashboard']} />
                
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  Bill is a cat.
                </div> */}
            </Switch>
          </Content>
          <AppFooter />
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
