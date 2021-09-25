import { FormComp, AppSider } from '../../../components';
import {ProfilePicCard} from '../../../containers';
import {
  EditFilled,
  SafetyCertificateFilled,
  SettingFilled,
} from '@ant-design/icons';
import { Layout, Typography, Row, Col } from 'antd';
import './style.css';
const { Title } = Typography;

let studentProfileData = [
  { title: 'Edit Profile', linkTo: '/Profile/edit', icon: <EditFilled /> },
  { title: 'Password & Security', linkTo: '/Profile/passAndsecurity', icon: <SafetyCertificateFilled /> },
  { title: 'Other Settings', linkTo: '/Profile/other', icon: <SettingFilled /> },
]
export default function Profile() {

  return (
    <div className="Profile" style={{ marginTop: '2em' }}>
      <Layout>
        <Layout style={{ minHeight: '100vh' }}>
          <AppSider data={studentProfileData} haveSubMenu={false} isCollapsible={false} />
          <Layout style={{ minHeight: '100vh' }}>
            <Layout.Content style={{ margin: '0 16px', backgroundColor: 'white' }}>
              <Row style={{marginTop:'1.2em'}}>
                <Title level={3}>Edit Profile</Title>
              </Row>
              <Row style={{marginTop:'1.2em'}}>
                <Col xl={7} xs={24}>
                    <ProfilePicCard />
                </Col>
                <Col xl={1} xs={0}>
                  <div/>
                </Col>
                <Col xl={16} xs={24}>
                  <FormComp />
                </Col>
              </Row>
            </Layout.Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}


