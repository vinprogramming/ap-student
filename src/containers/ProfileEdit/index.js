/**
 * Serves as the Profile component for the student as well as admin user.
 * uses ProfilePicCard, FormComp
 * 
 * Written By: Tejas Ladhani
 */

import { Row, Col, Typography } from 'antd';
import { FormComp } from '../../components';
import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/user'
import { ProfilePicCard } from '..';
const { Title } = Typography;

export default function ProfileEdit() {
  const [user, setUser] = useContext(UserContext);
  const userData = JSON.parse(user)
  const apiFunc = (val) => {
    // console.log(val);
    if (sessionStorage.getItem('id_token') != null) {
      const id_token = sessionStorage.getItem('id_token')
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${id_token}`);
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "id": Math.floor(Math.random() * 100000),
        "nationality": val.nationality,
        "dob": "20-9-2005",
        "sex": val.Gender,
        "email": userData['email'],
        "name": val.firstname,
        "phone": val.phone,
      });

      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("https://m3j6kmp129.execute-api.us-east-1.amazonaws.com/d1/items", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

      document.getElementById('ProfileForm').reset();
    }
    else {
      alert("Token Not Present !")
    }

  }
  const data = [
    {
      name: 'firstname',
      label: 'First Name',
      rules: [
        {
          type: 'string',
          message: 'Must not contain numbers and special characters',
        },
        {
          required: true,
          message: 'Please input your name!',
        },
      ],
      haveOption: false,

    },
    {
      name: 'lastname',
      label: 'Last Name',
      rules: [
        {
          type: 'string',
          message: 'Must not contain numbers and special characters',
        },
        {
          required: true,
          message: 'Please input your name!',
        },
      ],
      haveOption: false,
    },
    {
      name: 'dateofbirth',
      label: 'Date of Birth',
      rules: [
        {
          type: 'date',
          message: 'Enter the DOB',
        },
        {
          required: false,
          message: 'DOb is required!',
        },
      ],
      haveOption: false,
    },
    {
      name: 'gender',
      label: 'Gender',
      rules: [
        {
          required: false,
          message: 'Please select gender!',
        },
      ],
      haveOption: true,
      options: ['Male', 'Female', 'Other'],

    },
    {
      name: 'phone',
      label: 'Phone Number',
      rules: [
        {
          required: true,
          message: 'Please input your phone number!',
        },
      ],
      haveOption: false,
    },
    {
      name: 'Nationality',
      label: 'Nationality',
      rules: [
        {
          type: 'string',
          message: 'Must not contain numbers and special characters',
        },
        {
          required: true,
          message: 'Please input your nationality!',
        },
      ],

    },

  ]


  return (
    <>
      <Row style={{ marginTop: '1.2em' }}>
        <Title level={3}>Edit Profile</Title>
      </Row>
      <Row style={{ marginTop: '1.2em' }}>
        <Col xl={7} xs={24}>
          <ProfilePicCard />
        </Col>
        <Col xl={1} xs={0}>
          <div />
        </Col>
        <Col xl={16} xs={24}>
          <FormComp from={'profile'} data={data} apiFunc={apiFunc} formState={{
            FirstName: '',
            LastName: '',
            Phone: '',
            DOB: '',
            Gender: '',
            Nationality: '',
            Address: '',

          }} />
        </Col>
      </Row>
    </>
  )
}
