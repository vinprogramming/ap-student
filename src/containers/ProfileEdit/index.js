/**
 * Serves as the Profile component for the student as well as admin user.
 * uses ProfilePicCard, FormComp
 * 
 * Written By: Tejas Ladhani
 */

import {Row,Col,Typography} from 'antd';
import { FormComp } from '../../components';
import {ProfilePicCard} from '..';
const { Title } = Typography;

export default function ProfileEdit() {
    return (
        <>
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
        </>
    )
}
