/**
 * -TEJAS LADHANI
 */

import { useState, useEffect } from 'react';
import { Layout, Row, Tabs, Col, Modal, Typography, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import axios from 'axios';
import { QueryCard } from '../../../containers';
import { FormComp } from "../../../components";
import { data } from './ModalConfig';
import "./style.css";


const { TabPane } = Tabs;
var tabkey = 0;

const getTodaysDate = () => {
  /**
   * *Helper Funtion.
   * FUnction to get to current time => used as timestamp in data that is being passed via API call, to the database.
   */

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  return today = dd + '-' + mm + '-' + yyyy;
}

export default function MyQueries() {

  // state to maintain the list of all the queries reciveing after the API CALL.
  const [QueryList, setQueryList] = useState()

  /**
   * temporary state
   *            to have REMOUNTING of the component so that,
   *            on re-mounting the useEffect will be executed => that will execute the API call.
   */
  const [countUpdate, setcountUpdate] = useState(0)

  /**
   * state to control the visibility of the MODAL.
   * MODAL is used to submit/create the query.
   */
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    // sets the modal's state to ON => MODAL visible.
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // handles the  behavior of onClick of OK button of createQuery Modal.
    // sets he modal's state to false => modal not visible.
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    // handles the  behavior of onClick of X(CANCEL) button of createQuery Modal.
    // sets he modal's state to false => modal not visible.
    setIsModalVisible(false);
  };

  const useremail = JSON.parse(sessionStorage.getItem("u_decoded"));

  const onCreateQuery = (val) => {
    /**
     * Being called on OnSubmit of the Create Query Form.
     * Function is passed as prop to {FormComp} component.
     * {FormComp} componet is being used by multiple components. => Hail Reusuability. 
     */
    var data = JSON.stringify({
      "email": useremail.email,
      "qObj": {
        "querydate": getTodaysDate(),
        "querystatus": {
          "keyboardtype": "danger",
          "tag": "UnSolved",
          "status": 0
        },
        "subject": val.subject,
        "assignee": "Alex",
        "querytimestamp": new Date().toLocaleTimeString(),
        "querydesc": val.description,
        "queryid": 10
      }
    });

    var config = {
      method: 'put',
      url: 'https://m3j6kmp129.execute-api.us-east-1.amazonaws.com/d1/studentqueries',
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('id_token')}`,
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        // As soon as the API CALL is SUCCESSFULL , reset the CreateQuery Form => set the fields to empty state.
        document.getElementById('ProfileForm').reset();

        // changing the CountUpdate state , just to remount component => re-calling of api => updated query list.
        setcountUpdate(countUpdate + 1)

        // After the succefull submission, we need to close the modal that is beinged popped up.
        handleCancel()
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  useEffect(() => {
    /**
     * Defines the Effect on first-mount & re-mount of the component.
     * Depends on the CountUpdate state.
     */
    var config = {
      method: 'get',
      url: `https://m3j6kmp129.execute-api.us-east-1.amazonaws.com/d1/studentqueries?email=${useremail.email}`,
      headers: {
        'Authorization': sessionStorage.getItem('id_token') ? sessionStorage.getItem('id_token') : '',
      }
    };

    axios(config)
      .then(function (response) {
        // Received the List of queries , now storing this list in QueryList state.
        setQueryList(response.data.response.queries)
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [countUpdate])

  /**
   * COMPONENT : createQuery Button
   */
  const createnewQuery = (
    <Button
      id="createquery"
      type="primary"
      shape="round"
      icon={<PlusCircleOutlined />}
      size="medium"
      onClick={showModal}
    >
      Create a Query
    </Button>
  );


  return (
    /**
     * Returns a Div containing:
     *                + A Page header.
     *                + Have three tabs [component of antD, have TabPane + Body] , named "All" ,"Pending" & "Solved", represents the "state" of   particular query.
     *                + A Modal containing {FormComp} for CreateQuery.
     */
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
              <TabPane tab="All" key={tabkey++}>
                <Row>
                  <Col span={24}>
                    {QueryList !== undefined ? QueryList.map(data => <QueryCard queryCarddata={data} />) : <div />}
                  </Col>
                </Row>
              </TabPane>

              <TabPane tab="Solved" key={tabkey++}>
                <Row>
                  <Col span={24}>
                    {QueryList !== undefined ? QueryList.map(data => data.querystatus.status ? <QueryCard queryCarddata={data} /> : <div />) : <div />}
                  </Col>
                </Row>
              </TabPane>

              <TabPane tab="Pending" key={tabkey++}>
                <Row>
                  <Col span={24}>
                    {QueryList !== undefined ? QueryList.map(data => data.querystatus.status ? null : <QueryCard queryCarddata={data} />) : <div />}
                  </Col>
                </Row>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Layout>

      {/* CreateQuery Modal */}
      <Modal title="Create Your Query" visible={isModalVisible} m footer={null} onOk={handleOk} onCancel={handleCancel}>
        <FormComp
          from={'myQueries'}
          data={data}
          apiFunc={onCreateQuery}
          formState={{
            Subject: '',
            Description: '',
          }} />
      </Modal>

    </div>
  );
}
