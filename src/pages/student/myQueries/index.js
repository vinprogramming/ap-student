import React from "react";
import "./style.css";
import { Layout, Row, Tabs, Col, Card, Typography, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { QueryCard } from '../../../containers';
import CreateQuery from '../../../containers/CreateQuery';
import { Switch, Route, useHistory, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
var tabkey = 0;
const { TabPane } = Tabs;




const Carddata = [
  {
    subject: "Regarding Fee Payment",
    queryid: 10,
    querydate: "2020-06-01",
    querytime: "10:00:00",
    querydesc: "I have to pay the fee for the Application but it shows falied",
    querystatus: {
      keyboardtype: "danger",
      tag: "Solved",
      status: 1
    },
    assignee: "Alex",
  },
  {
    subject: "Regarding Application submission",
    queryid: 20,
    querydate: "2021-06-01",
    querytime: "10:50:00",
    querydesc: "I have tried to submit Application but it shows falied",
    querystatus: {
      keyboardtype: "danger",
      tag: "Pending",
      status: 0,
    },
    assignee: "Alex",
  }
];

export default function MyQueries() {
  const history = useHistory();
  const [QueryList, setQueryList] = useState()

  useEffect(() => {

    var config = {
      method: 'get',
      url: 'https://m3j6kmp129.execute-api.us-east-1.amazonaws.com/d1/studentqueries?email=19it058@charusat.edu.in',
      headers: {
        'email': '19it058@charusat.edu.in',
        'Authorization': 'Bearer eyJraWQiOiJ0TEY5aXBDYTdZMFpnSnR4R1g0eFNTZUlaMVY1S05LdWRvSGVqS3JJRUEwPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiRUJOWE1GYWN0VW9HZWcwSHVRU2E5ZyIsInN1YiI6IjZjZDE4NjNlLWFlZDItNGI2YS1iOTg5LTZmOGM5MDVlMTM1YSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9LMWp4b2NrWlciLCJjb2duaXRvOnVzZXJuYW1lIjoidGVqIiwiYXVkIjoiNHY5czBybnUzZ2dhYXVhZ2Npa2JsMmI0NmwiLCJldmVudF9pZCI6IjM3ZWFhNjM3LTJjYWYtNGU5OS1hMjk4LWQxY2M5YzRmZDk5MyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjM0NjE4NDYyLCJleHAiOjE2MzQ2MjU2NjIsImlhdCI6MTYzNDYxODQ2MiwianRpIjoiODc2MjVmNmMtMDU5ZS00YTE4LWEwYmItY2YxNjI0NzBlNWRkIiwiZW1haWwiOiIxOWl0MDU4QGNoYXJ1c2F0LmVkdS5pbiJ9.S_YFoPYclL2jJ_g3Dky9pIooZqmaoOy09_zOpiNovC9zfHak1SWGy0Le67tOTAOCdyjJEDBxW7TSgwY9hbMiy17CuAJeZmd_sirpBe9Nsu4roTPBDHrT1eOSHlPHJkk7N6Q8PEkdfhhyBWXUQIKAPAJx95GCD4ZLtEwyXAI7NMG-1uz48PjYxAvELmA6gqrVvIeFS1pXINYePBsEYmZM4KGVZ9nmDdBPqf5dHfxBCA8uCv4jwl5MaEWk1s5tHLvnZwGLGRF-tBTQm-1hHoDwZHumdS_lRTklODNpkl_e-0-UScSyftk8I6ZBwKaaQHwQvCFfsgHEeH6eoFQY8CumjQ'
      }
    };

    axios(config)
      .then(function (response) {
        setQueryList(response.data.response.queries)
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])
  const createnewQuery = (
    <Button
      id="createquery"
      type="primary"
      shape="round"
      icon={<PlusCircleOutlined />}
      size="medium"
      onClick={() => {
        history.push('/s/myqueries/createquery'); //redirect to create query page
      }}
    >
      Create a Query
    </Button>
  );
  console.log(QueryList);

  return (
    <div className="myquery">
      <BrowserRouter>
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
                      {QueryList.map(data => <QueryCard queryCarddata={data} />)}
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tab="Solved" key={tabkey++}>
                  <Row>
                    <Col span={24}>
                      {QueryList.map(data => data.querystatus.status ? <QueryCard queryCarddata={data} /> : null)}
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tab="Pending" key={tabkey++}>
                  <Row>
                    <Col span={24}>
                      {QueryList.map(data => data.querystatus.status ? null : <QueryCard queryCarddata={data} />)}
                    </Col>
                  </Row>
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
