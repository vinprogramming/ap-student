/**
 * TODO: need to define the proper breakpoints and its design
 * TODO: onClick behaviour 
 * 
 * Flow: MyApplications -> ApplicationCard -> other smmall components.
 * Written By: Tejas Ladhani
 */
import './style.css';
import { Layout, Row, Col, Typography, Tabs } from 'antd';
import { ApplicationCard } from '../../../containers';
import { useEffect,useState } from 'react';

const { TabPane } = Tabs;

const ApplicationCardData = [
    {
        title: 'BTech Application Form',
        subCard: [
            { title: 'Appication No.', subtitle: 'BTECH156EW' },
            { title: 'Applcation Fee', subtitle: '1200' },
            { title: 'Last Date', subtitle: '12-08-2021' },
            { title: 'Payment Mode', subtitle: 'online' },],
        downloadPanelData: [],
        setpsData: []
    },
    {
        title: 'MBA Application Form',
        subCard: [
            { title: 'Appication No.', subtitle: 'MBA156EW' },
            { title: 'Applcation Fee', subtitle: '1500' },
            { title: 'Last Date', subtitle: '12-12-2021' },
            { title: 'Payment Mode', subtitle: 'online' },],
        downloadPanelData: [],
        setpsData: []
    },
    {
        title: 'BSC Application Form',
        subCard: [
            { title: 'Appication No.', subtitle: 'BSCCH156EW' },
            { title: 'Applcation Fee', subtitle: '1000' },
            { title: 'Last Date', subtitle: '1-11-2021' },
            { title: 'Payment Mode', subtitle: 'online' },],
        downloadPanelData: [],
        setpsData: []
    },
]
export default function MyApplications() {
    const [count, setcount] = useState(0);
    const [applicationcarddetails, setapplicationcarddetails] = useState(ApplicationCardData);
      useEffect(() => {
        var axios = require('axios');

        var config = {
          method: 'get',
          url: 'https://9qj3u7alhc.execute-api.us-east-1.amazonaws.com/s1/applications',
          headers: { 
            'Authorization': 'Bearer eyJraWQiOiJ0TEY5aXBDYTdZMFpnSnR4R1g0eFNTZUlaMVY1S05LdWRvSGVqS3JJRUEwPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoibTZrS3g3eEFTZzdDTTRPNGFQQmNVdyIsInN1YiI6IjJjNmJkYWUyLWNkMWUtNGIzNi1iZjc5LWFjZDE2ZGY5NjYyMyIsImF1ZCI6IjR2OXMwcm51M2dnYWF1YWdjaWtibDJiNDZsIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjM2NzE3MzQ0LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9LMWp4b2NrWlciLCJjb2duaXRvOnVzZXJuYW1lIjoic2hyZXkiLCJleHAiOjE2MzY3MjQ1NDQsImlhdCI6MTYzNjcxNzM0NCwianRpIjoiNmZiZGJmZWQtN2JhMS00YTNmLWJmM2YtZmNkOTc3OTMxNThjIiwiZW1haWwiOiIxOWl0MDU5QGNoYXJ1c2F0LmVkdS5pbiJ9.gd_sP-uATSF56HZJO9Kdk-tSIXXIqF232PMTCKTd8ccI-2Ctr_JJwW7DylWkvt9qrdzkBroLusoMSS3oCF5M_PDOtwqj6HqdBAT1_KCU6AVRnZIaq-CQwdrUu1JxQxKSwGJzkUyEK8S9QsueXtTM1mImLDThinUO0cq6p_GNu47oJ6N0yOgofBOT-bzWLhcadBH_rxJEmjAqLJXJxGDm0xeZLFWUiojsq15eQ0eyygoJ58bGb5Ui-WGPkCxjswTI6D9pWnalRtPJjRgeqWpC4Zl67XVjRdu9WfWPLf9FK0cxQIEzKUArFRigVgib5lrAypXd1yJsnmicgJPxrSRUDw'
          }
        };
        
        axios(config)
        .then(function (response) {
            console.log(response);
            const ApplicationCardData_v1 = (response.data.Items);
            setapplicationcarddetails(ApplicationCardData_v1);
            console.log(ApplicationCardData_v1);
            applicationcarddetails.map((item) => {
                console.log(item.ApplicationID,item.fees,item.lastDate,item.paymentMode);
            })
        })
        .catch(function (error) {
          console.log(error);
        });        
    },[count]);

    return (
        <div className="myApplications" style={{ marginTop: '1.5em' }}>
            <Layout style={{ minHeight: '85vh' }}>
                <Row>
                    <Col span={24}>
                        <div className="myApplications_TopTitle">
                            <Typography.Title level={2}>
                                My Applications
                            </Typography.Title>
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
                                    ApplicationCardData.map((data) => <ApplicationCard key={data.subCard[0].subtitle} title={data.title} subCardData={data.subCard} downloadPanelData={data.downloadPanelData} setpsData={data.setpsData} />)
                                }

                            </TabPane>
                            <TabPane tab="2 Application(s) completed" key="2">
                                Completed Applications
                            </TabPane>

                        </Tabs>
                    </Col>
                </Row>
            </Layout>
        </div>
    )
}
