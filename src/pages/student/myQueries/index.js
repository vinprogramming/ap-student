import React from "react";
import "./style.css";
import { Layout, Row, Tabs, Col, Card, Typography, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
// import QueryTabs from '../../../components/QueryTabs';
import Querycard from '../../../containers/QueryCard';
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
const carddata = [
  {
    subject: "Regarding Fee Payment",
    queryid : 10,
    querydate : "2020-06-01",
    querytime : "10:00:00",
    querydesc : "I have to pay the fee for the Application but it shows falied",
    querystatus : {
      keyboardtype: "danger",
      tag : "Pending"
    },
    assignee: "Alex",
  }
]
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
    
          <Col span={23}>
            <Tabs tabBarExtraContent={createnewQuery}>
              <TabPane tab="All Queries" key={tabkey++}>
                <Row>
                  <Col span={24}>
                   
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
                      <Card size='small'>
                        <Row>
                          <Col span={24}>
                            <div className="">
                              <Typography.Title level={4}>
                                Subject
                              </Typography.Title>
                            </div>
                          </Col>
                        </Row>
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
                        
                              <Typography.Text type='secondary'>Assigned TO</Typography.Text>
            
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
