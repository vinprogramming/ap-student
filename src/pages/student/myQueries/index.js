import React from "react";
import "./style.css";
import { Layout, Row, Tabs, Col, Card, Typography, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { QueryCard } from '../../../containers';
import CreateQuery from '../../../containers/CreateQuery';
import { Switch, Route, useHistory, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/user'

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
  const [user, setUser] = useContext(UserContext);
  const userData = JSON.parse(user);
  const history = useHistory();
  const [QueryList, setQueryList] = useState()


  useEffect(() => {
    
      
      var config = {
        method: 'get',
        url: `https://m3j6kmp129.execute-api.us-east-1.amazonaws.com/d1/studentqueries?email=${userData['email']}`,
        headers: {
          'email': userData['email'],
          'Authorization':sessionStorage.getItem('id_token')?sessionStorage.getItem('id_token'):'',
      }};

      axios(config)
        .then(function (response) {
          console.log(response)
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
                      {QueryList!==undefined?QueryList.map(data => <QueryCard queryCarddata={data} />):<div/>}
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tab="Solved" key={tabkey++}>
                  <Row>
                    <Col span={24}>
                      {QueryList!==undefined?QueryList.map(data => data.querystatus.status ? <QueryCard queryCarddata={data} />:<div/>) : <div/>}
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tab="Pending" key={tabkey++}>
                  <Row>
                    <Col span={24}>
                      {QueryList!==undefined?QueryList.map(data => data.querystatus.status ? null : <QueryCard queryCarddata={data} />):<div/>}
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
