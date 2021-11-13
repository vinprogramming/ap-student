/**
 * TODO: need to define the proper breakpoints and its design
 * TODO: onClick behaviour
 *
 * Flow: MyApplications -> ApplicationCard -> other smmall components.
 * Written By: Tejas Ladhani
 */
import "./style.css";
import { Layout, Row, Col, Typography, Tabs } from "antd";
import { ApplicationCard } from "../../../containers";
import { useEffect, useState } from "react";

const { TabPane } = Tabs;

const ApplicationCardData = [
  {
    title: "BTech Application Form",
    subCard: [
      { title: "Appication No.", subtitle: "BTECH156EW" },
      { title: "Applcation Fee", subtitle: "1200" },
      { title: "Last Date", subtitle: "12-08-2021" },
      { title: "Payment Mode", subtitle: "online" },
    ],
    downloadPanelData: [],
    setpsData: [],
  },
  {
    title: "MBA Application Form",
    subCard: [
      { title: "Appication No.", subtitle: "MBA156EW" },
      { title: "Applcation Fee", subtitle: "1500" },
      { title: "Last Date", subtitle: "12-12-2021" },
      { title: "Payment Mode", subtitle: "online" },
    ],
    downloadPanelData: [],
    setpsData: [],
  },
  {
    title: "BSC Application Form",
    subCard: [
      { title: "Appication No.", subtitle: "BSCCH156EW" },
      { title: "Applcation Fee", subtitle: "1000" },
      { title: "Last Date", subtitle: "1-11-2021" },
      { title: "Payment Mode", subtitle: "online" },
    ],
    downloadPanelData: [],
    setpsData: [],
  },
];
export default function MyApplications() {
  const [count, setcount] = useState(0);
  const [applicationcarddetails, setapplicationcarddetails] =
    useState(ApplicationCardData);
  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://9qj3u7alhc.execute-api.us-east-1.amazonaws.com/s1/applications",
      headers: {
        Authorization: sessionStorage.getItem("id_token")
          ? sessionStorage.getItem("id_token")
          : "",
      },
    };

    axios(config)
      .then(function (response) {
        const ApplicationCardData_v1 = response.data.Items;
        setapplicationcarddetails(ApplicationCardData_v1);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [count]);

  return (
    <div className="myApplications" style={{ marginTop: "1.5em" }}>
      <Layout style={{ minHeight: "85vh" }}>
        <Row>
          <Col span={24}>
            <div className="myApplications_TopTitle">
              <Typography.Title level={2}>My Applications</Typography.Title>
            </div>
          </Col>
          <Col span={24}>
            <div className="myApplications_SubTitle">
              <Typography.Text type="secondary">
                Track all your applications for XYZ university from here.
              </Typography.Text>
            </div>
          </Col>
          <Col span={24}>
            <Tabs defaultActiveKey="1" onChange={() => { }}>
              <TabPane tab="3 Application(s) in progress" key="1">
                {
                  applicationcarddetails.map((data) => (
                    <ApplicationCard
                      key={data.ApplicationID}
                      title={data.title}
                      subCardData={[
                        { title: "Appication No.", subtitle: data.ApplicationID },
                        { title: "Applcation Fee", subtitle: data.fees },
                        { title: "Last Date", subtitle: data.lastDate },
                        { title: "Payment Mode", subtitle: "online" },
                      ]}
                      downloadPanelData={data.downloadPanelData}
                      setpsData={data.setpsData}
                    />
                  ))}
              </TabPane>
              <TabPane tab="2 Application(s) completed" key="2">
                Completed Applications
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Layout>
    </div>
  );
}
