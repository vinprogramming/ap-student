
import { AppHeader, AppSider, AppFooter, FormComp, } from './components';
import { SDashBoard, Documents, Calendar, MyApplications, MyQueries, Application } from './pages/student';
import { Profile } from './pages/common';
import ProtectedRoute from './Routes/ProtectedRoute'
import { Layout } from 'antd';
import {
  BrowserRouter, Switch, Redirect,
} from 'react-router-dom';
import {
    ProfileOutlined, PieChartOutlined,FileOutlined,
    UserOutlined, CalendarOutlined,QuestionOutlined,
} from '@ant-design/icons';
  
const { Content } = Layout;

export default function Main() {

let studentSiderData = [
  { title: 'Dashboard', linkTo: `/s/`, icon: <PieChartOutlined />, },
  { title: 'My Applications', linkTo: `/s/myapplications`, icon: <ProfileOutlined />, },
  { title: 'Documents', linkTo: `/s/docs`, icon: <FileOutlined />, },
  { title: 'Calendar', linkTo: `/s/calendar`, icon: <CalendarOutlined />, },
  { title: 'My Queries', linkTo: `/s/myqueries`, icon: <QuestionOutlined />, },
  { title: 'Profile', linkTo: `/s/Profile`, icon: <UserOutlined />, },
]

return (
  <BrowserRouter>
        <Layout style={{ minHeight: '100vh' }}>
        <AppHeader />

        <Layout className="site-layout">
          <AppSider data={studentSiderData} haveSubMenu={true} isCollapsible={true} />
          <Layout style={{ minHeight: '100vh' }}>
            <Content style={{ margin: '0 16px' }}>
              <Switch>
                <ProtectedRoute path={`/s/myapplications`} component={MyApplications} exact />
                <ProtectedRoute path={`/s/docs`} component={Documents} exact />
                <ProtectedRoute path={`/s/calendar`} component={Calendar} exact />
                <ProtectedRoute path={`/s/myqueries`} component={MyQueries} exact />
                <ProtectedRoute path={`/s/Profile`} component={Profile} exact />
                <ProtectedRoute path="/s/myapplications/:ApplicationId" component={Application} />
                <ProtectedRoute path={`/s`} component={SDashBoard} exact />            
                <Redirect to="/" />
              </Switch>
            </Content>
            <AppFooter />
          </Layout>
        </Layout>
      </Layout>
      </BrowserRouter>
    )
}