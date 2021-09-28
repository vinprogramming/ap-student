import { AppSider } from '../../../components';
import {
  EditFilled,
  SafetyCertificateFilled,
  SettingFilled,
} from '@ant-design/icons';
import { Layout } from 'antd';
import { ProfileEdit, ProfileOther, ProfilePassAndSec } from '../../../containers';
import { Switch, Route, useHistory } from 'react-router-dom';
import './style.css';
import { useState, useEffect } from 'react';

let studentProfileData = [
  { title: 'Edit Profile', linkTo: '/s/Profile/edit', icon: <EditFilled /> },
  { title: 'Password & Security', linkTo: '/s/Profile/passAndsecurity', icon: <SafetyCertificateFilled /> },
  { title: 'Other Settings', linkTo: '/s/Profile/other', icon: <SettingFilled /> },
]
export default function Profile() {
  const history = useHistory();
  console.log(history.location['pathname']);
  const [RouteState, setRouteState] = useState(history.location['pathname']);
  useEffect(() => {
    setRouteState(history.location['pathname']);
  }, [history.location])

  const handleRouteChange = () => {
    switch (RouteState) {
      case '/s/Profile/edit':
        return <ProfileEdit />
      case '/s/Profile/passAndsecurity':
        return <ProfilePassAndSec />
      case '/s/Profile/other':
        return <ProfileOther />
      default:
        return <div/>;
    }
  }
  let compToBeRendered = handleRouteChange();
  return (
    <div className="Profile" style={{ marginTop: '2em' }}>
      <Layout>
        <Layout style={{ minHeight: '100vh' }}>
          <AppSider data={studentProfileData} haveSubMenu={false} isCollapsible={false} />
          <Layout style={{ minHeight: '100vh' }}>
            <Layout.Content style={{ margin: '0 16px', backgroundColor: 'white' }}>
              {/* <ProfileEdit /> */}
              {compToBeRendered}
              <Switch>
                {/* TODO:This is not working !! */}
                <Route path="/s/Profile/edit" component={ProfileEdit} exact />
                <Route path="/s/Profile/passAndsecurity" component={ProfilePassAndSec} exact />
                <Route path="/s/Profile/other" component={ProfileOther} exact />

              </Switch>

            </Layout.Content>
          </Layout>
        </Layout>
      </Layout>

    </div>
  )
}


