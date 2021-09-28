import { AppSider } from '../../../components';
import {
  EditFilled,
  SafetyCertificateFilled,
  SettingFilled,
} from '@ant-design/icons';
import { Layout } from 'antd';
import {ProfileEdit,ProfileOther,ProfilePassAndSec} from '../../../containers';
import {BrowserRouter,Switch,Route,useHistory} from 'react-router-dom';
import './style.css';

let studentProfileData = [
  { title: 'Edit Profile', linkTo: '/Profile/edit', icon: <EditFilled /> },
  { title: 'Password & Security', linkTo: '/Profile/passAndsecurity', icon: <SafetyCertificateFilled /> },
  { title: 'Other Settings', linkTo: '/Profile/other', icon: <SettingFilled /> },
]
export default function Profile() {
  const history =useHistory();
  console.log(history.location['pathname']);
  
  return (
    <div className="Profile" style={{ marginTop: '2em' }}>
              {/* <BrowserRouter> */}

      <Layout>
        <Layout style={{ minHeight: '100vh' }}>
          <AppSider data={studentProfileData} haveSubMenu={false} isCollapsible={false} />
          <Layout style={{ minHeight: '100vh' }}>
            <Layout.Content style={{ margin: '0 16px', backgroundColor: 'white' }}>
              <ProfileEdit/>
              <Switch>
                {/* TODO:This is not working !! */}
                <Route path="/Profile/edit" component={ProfileEdit} exact />
                <Route path="/Profile/passAndsecurity" component={ProfilePassAndSec} exact />
                <Route path="/Profile/other" component={ProfileOther} exact />

              </Switch>

            </Layout.Content>
          </Layout>
        </Layout>
      </Layout>
    {/* </BrowserRouter> */}

    </div>
  )
}


