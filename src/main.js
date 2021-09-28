
import { AppHeader, AppSider, AppFooter } from './components';
import { SDashBoard, Documents, Calendar, MyApplications, MyQueries } from './pages/student';
import { Profile } from './pages/common';
import {
  BrowserRouter, Route, Switch,useHistory
} from 'react-router-dom';
import { Layout } from 'antd';
import {
    ProfileOutlined,
    PieChartOutlined,
    FileOutlined,
    UserOutlined,
    CalendarOutlined,
    QuestionOutlined,
  } from '@ant-design/icons';
  
const { Content } = Layout;

export default function Main() {
const history=useHistory();
const loc=history.location['pathname']
let studentSiderData = [
  { title: 'Dashboard', linkTo: `/s/`, icon: <PieChartOutlined />, },
  { title: 'My Applications', linkTo: `/s/myapplications`, icon: <ProfileOutlined />, },
  { title: 'Documents', linkTo: `/s/docs`, icon: <FileOutlined />, },
  { title: 'Calendar', linkTo: `/s/calendar`, icon: <CalendarOutlined />, },
  { title: 'My Queries', linkTo: `/s/myqueries`, icon: <QuestionOutlined />, },
  { title: 'Profile', linkTo: `/s/Profile`, icon: <UserOutlined />, },
]

return (
        <Layout style={{ minHeight: '100vh' }}>
        <AppHeader />

        <Layout className="site-layout">
          <AppSider data={studentSiderData} haveSubMenu={true} isCollapsible={true} />
          <Layout style={{ minHeight: '100vh' }}>
            <Content style={{ margin: '0 16px' }}>
              <Switch>
                <Route path={`/s/myapplications`} component={MyApplications} exact />
                <Route path={`/s/docs`} component={Documents} exact />
                <Route path={`/s/calendar`} component={Calendar} exact />
                <Route path={`/s/myqueries`} component={MyQueries} exact />
                <Route path={`/s/profile`} component={Profile} exact />
                <Route path={`/s`} component={SDashBoard} exact />            
              </Switch>
            </Content>
            <AppFooter />
          </Layout>
        </Layout>
      </Layout>
    )
}