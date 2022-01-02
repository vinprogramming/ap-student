// import { PageHeader } from '../../components'
import { Row, Col,Spin } from 'antd'
import { Skeleton, Switch, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, DeleteOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'
const { Meta } = Card;

export default function ViewNotices() {
    const [Notices, setNotices] = useState()
    // const [IsLoading, setIsLoading] = useState(true)

    useEffect(() => {

        var config = {
            method: 'get',
            url: 'https://d4z2bizxa5.execute-api.us-east-1.amazonaws.com/s1/notices',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('id_token')}`
            }
        };

        axios(config)
            .then(function (response) {
                let result = JSON.parse(response.data)
                if (result.ResponseMetadata.HTTPStatusCode == 200)
                    setNotices(result.Items)
                else
                    console.log("Error!")
                console.log(result);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])
    return (
        <div className="ViewNotices">
            {/* <PageHeader title="View Notices" /> */}
            <Row sm={24} md={12} lg={6} xl={6} gutter={24}>
                {Notices == undefined ? <Spin/> : Notices.map((item, index) =>
                        <Col key={index}>
                            <Card
                                style={{ width: 300, marginTop: 16 }}
                                actions={[
                                    <EditOutlined key="edit" />,
                                    <DeleteOutlined key="delete" />,
                                    <EllipsisOutlined key="ellipsis" />,
                                ]}
                                // hoverable
                                extra={item.NoticeID}
                            >
                                <Skeleton loading={false} avatar active>
                                    <Meta
                                        title={item.title}
                                        description={<>{item.description}</>}
                                    />
                                </Skeleton>
                            </Card>
                        </Col>
                    )}

            </Row>
        </div>
    )
}
