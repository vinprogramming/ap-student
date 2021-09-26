import './App.css';
import { Layout } from 'antd';
import { AppHeader, AppSider, AppFooter, AppBreadcrumb } from './components';
import { SDashBoard, Documents, Calendar, MyApplications, MyQueries } from './pages/student';
import { Profile } from './pages/common';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import {
  ProfileOutlined,
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
  CalendarOutlined,
  QuestionOutlined,
} from '@ant-design/icons';
import { ProfilePassAndSec } from './containers';
const { Content } = Layout;

let studentSiderData = [
  { title: 'Dashboard', linkTo: '/', icon: <PieChartOutlined />, },
  { title: 'My Applications', linkTo: '/myapplications', icon: <ProfileOutlined />, },
  { title: 'Documents', linkTo: '/docs', icon: <FileOutlined />, },
  { title: 'Calendar', linkTo: '/calendar', icon: <CalendarOutlined />, },
  { title: 'My Queries', linkTo: '/myqueries', icon: <QuestionOutlined /> ,},
  { title: 'Profile', linkTo: '/Profile', icon: <UserOutlined />, },
]

function App() {

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <AppHeader />

        <Layout className="site-layout">
          <AppSider data={studentSiderData} haveSubMenu={true} isCollapsible={true} />
          <Layout style={{ minHeight: '100vh' }}>
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
      </Layout>
    </BrowserRouter>
  );
}

export default App;
