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
const Carddata = [
  {
    subject: "Regarding Fee Payment",
    queryid : 10,
    querydate : "2020-06-01",
    querytime : "10:00:00",
    querydesc : "I have to pay the fee for the Application but it shows falied",
    querystatus : {
      keyboardtype: "danger",
      tag : "Solved",
      status : 1
    },
    assignee: "Alex",
  },
  {
    subject: "Regarding Application submission",
    queryid : 20,
    querydate : "2021-06-01",
    querytime : "10:50:00",
    querydesc : "I have tried to submit Application but it shows falied",
    querystatus : {
      keyboardtype: "danger",
      tag : "Pending",
      status : 0,
    },
    assignee: "Alex",
  }
];
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
                  { Carddata.map(data => <Querycard querycarddata={data}/>)}
                  </Col>
                </Row>
              </TabPane>

              <TabPane tab="Solved" key={tabkey++}>
                <Row>
                  <Col span={24}>
                    {Carddata.map(data => data.querystatus.status ?<Querycard querycarddata={data}/>: null)}
                  </Col> 
                </Row>
              </TabPane>

              <TabPane tab="Pending" key={tabkey++}>
                <Row>
                  <Col span={24}>
                    {Carddata.map(data => data.querystatus.status ?null :<Querycard querycarddata={data}/>)}
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
