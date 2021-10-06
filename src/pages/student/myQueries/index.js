import React from "react";
import "./style.css";
import { Layout, Row, Tabs, Col, Card, Typography, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
// import QueryTabs from '../../../components/QueryTabs';
var tabkey = 0;
const { TabPane } = Tabs;
const createnewQuery = (
  <Button
    id="createquery"
    type="primary"
    shape="round"
    icon={<PlusCircleOutlined />}
    size="medium"
  >
    Create a Query
  </Button>
);
export default function MyQueries() {
  return (
    <div className="myquery">
      <Layout>
        <Row>
          <Col span={20}>
            <div className="myquery_TopTitle">
              <Typography.Title level={2}>My Queries</Typography.Title>
            </div>
          </Col>
          {/* <Col span={4} offset={18}>
            <Button
              id="createquery"
              type="primary"
              shape="round"
              icon={<PlusCircleOutlined />}
              size="large"
            >
              Create a Query
            </Button>
          </Col> */}
          <Col span={23}>
            <Tabs tabBarExtraContent={createnewQuery}>
              <TabPane tab="All Queries" key={tabkey++}>
                <Row>
                  <Col span={24}>
                    <div className="querycard">
                      <Card>
                        <Row>
                          <Col span={24}>
                            <div className="">
                              <Typography.Title level={4}>
                                Query 2
                              </Typography.Title>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={24}>
                            <div className="">
                              <Typography.Title level={5}>
                                Query 2 Description
                              </Typography.Title>
                            </div>
                          </Col>
                        </Row>
                      </Card>
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Solved" key={tabkey++}>
                <Row>
                  <Col span={24}>
                    <div className="querycard">
                      <Card>
                        <Row>
                          <Col span={24}>
                            <div className="">
                              <Typography.Title level={4}>
                                Solved
                              </Typography.Title>
                            </div>
                          </Col>
                        </Row>
                      </Card>
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="Pending" key={tabkey++}>
                <Row>
                  <Col span={24}>
                    <div className="querycard">
                      <Card title='Subject' size='small'>
                        <Row>
                          <Col span={12}>
                            <div className="cardcontent">
                              <Typography.Text strong>this is the description of the query that you have submitted</Typography.Text>
                            </div>
                          </Col>
                          <Col span={4} offset={2}>
                            <div className="cardcontent">
                              <Typography.Text keyboard type='danger' >Status</Typography.Text>
                            </div>
                          </Col>
                          <Col span={4} offset={2}>
                            <div className="cardcontent">
                              <Typography.Text type='secondary'>Assigned TO</Typography.Text>
                            </div>
                          </Col>
                        </Row>
                      </Card>
                    </div>
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Layout>
    </div>
  );
}
