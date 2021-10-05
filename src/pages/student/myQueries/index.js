import React from "react";
import "./style.css";
import { Layout, Row, Tabs, Col, Card, Typography,Button } from "antd";
import {PlusOutlined} from '@ant-design/icons';
// import QueryTabs from '../../../components/QueryTabs';
var tabkey = 0;
const { TabPane } = Tabs;
export default function MyQueries() {
  return (
    <div className="myquery">
      <Layout>
        <Row>
          <Col span={24}>
            <div className="">
              <Typography.Title level={1}>My Queries</Typography.Title>
            </div>
          </Col>
        </Row>
        
        <Tabs>
          <TabPane tab="All Queries" key={tabkey++}>
            <Row>
              <Col span={24}>
                <div className="">
                  <Card>
                    <Row>
                      <Col span={24}>
                        <div className="">
                          <Typography.Title level={4}>Query 2</Typography.Title>
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
                <div className="">
                  <Card>
                    <Row>
                      <Col span={24}>
                        <div className="">
                          <Typography.Title level={4}>Solved</Typography.Title>
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
                <div className="">
                  <Card>
                    <Row>
                      <Col span={24}>
                        <div className="">
                          <Typography.Title level={4}>Query 2</Typography.Title>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
        
      </Layout>
    </div>
  );
}
