import { Row, Col, Divider, Typography, Tag, Avatar } from 'antd'
import { useEffect, useContext, useState } from 'react'
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import { UserContext } from '../../contexts/user'
import './style.css'

export default function ProileDisplay() {
    const [user, setUser] = useContext(UserContext);
    const [ProfileData, setProfileData] = useState()

    const userData = JSON.parse(user);
    useEffect(() => {
        var axios = require('axios');

        var config = {
            method: 'get',
            url: `https://m3j6kmp129.execute-api.us-east-1.amazonaws.com/d1/items?email=${userData['email']}`,
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('id_token')}`
            }
        };

        axios(config)
            .then(function (response) {
                const temp = JSON.parse(response.data)
                setProfileData(temp.body)
                console.log((temp.body))
            })
            .catch(function (error) {
                console.log(error);
            });


    }, [])

    return (
        <>
            <Row style={{ marginTop: '1.2em' }}>
                <Col span={24}>
                    <Typography.Title level={3}> Your Profile</Typography.Title>

                    <Divider />
                </Col>
            </Row>
            <Row>
                <Col span={10}>
                    <Avatar shape="square" size={200} icon={<UserOutlined />} />

                </Col>
                <Col span={14}>
                    <div className="ProfileDataRender">
                        <Typography.Title level={5}> Name : {ProfileData != undefined ? ProfileData.name : ''}</Typography.Title>

                    </div>
                    <div className="ProfileDataRender">
                        <Typography.Title level={5}>Date Of Birth : {ProfileData != undefined ? ProfileData.dob : ''}</Typography.Title>
                    </div>
                    <div className="ProfileDataRender">
                        <Typography.Title level={5}>Email : {ProfileData != undefined ? ProfileData.email : ''}</Typography.Title>
                    </div>
                    <div className="ProfileDataRender">
                        <Typography.Title level={5}>Gender : {ProfileData != undefined ? ProfileData.gender : ''}</Typography.Title>
                    </div>
                    <div className="ProfileDataRender">
                        <Typography.Title level={5}>Nationality : {ProfileData != undefined ? ProfileData.nationality : ''}</Typography.Title>
                    </div>
                    <div className="ProfileDataRender">
                        <Typography.Title level={5}>Phone Number  : {ProfileData != undefined ? ProfileData.phone : ''}</Typography.Title>
                    </div>
                    <div className="ProfileDataRender">
                        <Tag color="magenta">No. Of Application : 5</Tag>
                        <Tag color="red">Queries : 3</Tag>
                        <Tag color="volcano">Pending : 7</Tag>
                        <Tag color="orange">Solved Queries : 10</Tag>
                        <Tag color="gold">No. Of Documents uploaded : 3</Tag>
                        <Tag color="lime">No. Of Notices : 11</Tag>
                    </div>
                </Col>
            </Row>
        </>
    )
}
