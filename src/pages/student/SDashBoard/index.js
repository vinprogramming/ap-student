/**
 * SDashboard , is dashboard which will be displayed to the users which are having role===student
 * can be re-utilised by other components.
 * 
 * TODO:  break it into resuable small components.
 * TODO:  Move notificationContainer to seperate component (already there)
 * 
 * Written By : Tejas Ladhani
 */

import { Row, Col, Layout, Typography,Steps } from 'antd';
import { DashBoardCard } from '../../../components';
import { UpdateContainer } from '../../../containers';
import './style.css';
export default function SDashBoard() {

    return (
        <div className="SDashboard" style={{ marginTop: '1.5em' }}>
            <Layout style={{ minHeight: '85vh' }}>
                <Row >
                    <Col xs={24} xl={24}>
                        <div className="SDashboard_TopTitle">
                            <Typography.Title level={3}>
                                Greetings [Username] !
                            </Typography.Title>
                        </div>
                    </Col>
                    <Col xs={24} xl={24}>
                        <div className="SDashboard_SubTitle">
                            <Typography.Text type="secondary">Welcome to Admission Portal of XYZ university.Choose form any of the below options, to continue your at XYZ university.</Typography.Text>
                        </div>
                    </Col>
                </Row>
                <Row gutter={[16, 8]}>
                    <Col md={16}>
                        <Row gutter={[8, 8]}>
                            <Col md={12} className="gutter-row">
                                <DashBoardCard title="Last Active Form" subSpan={['Continue']} />
                            </Col>
                            <Col md={12} className="gutter-row">
                                <DashBoardCard title="My Applications" subSpan={['3 in progress', '2 completed']} />
                            </Col>
                            <Col md={24} className="gutter-row">
                                <DashBoardCard title="My Queries" subSpan={['12 open', '8 in progress', '20 closed']} />
                            </Col>
                            <Col md={24} className="gutter-row">
                                <DashBoardCard title="Program Finder" subSpan={['22 programs available']} />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={8}>
                        <div className="SDashboard_NotificationContainer">
                            <div style={{ paddingTop: '0.6em', paddingLeft: '0.6em' }}>
                                <Typography.Title level={4}>Latest Notifications</Typography.Title>
                            </div>
                            <div style={{paddingLeft:'1.5em'}} className="SDashboard_NotificationContainer_Body">
                                <Steps direction="vertical" progressDot  current={101}>
                                    <Steps.Step title="Join our experts in an exclusive webinar on 'Careers after BTECH'" description=" 15 Oct 2021" />
                                    <Steps.Step title="results of Aptitude Test phase 1 is out" description="12 Oct 2021" />
                                    <Steps.Step title="Last date to submit your Application form has been extended till 31st Oct 2021." description="12 Oct 2021" />
                                    <Steps.Step title="Join our experts in an exclusive webinar on 'Careers after BTECH'" description=" 15 Oct 2021" />
                                    <Steps.Step title="results of Aptitude Test phase 1 is out" description="12 Oct 2021" />
                                </Steps>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Layout>
        </div>
    )
}