import {
  Form,
  Input,
  DatePicker,
  Space,
  Select,
  Checkbox,
  Button,
} from 'antd';
import moment from 'moment';
import {useState} from 'react';
const formItemLayout = {
//   labelCol: {
//     xs: {
//       span: 8,
//     },
//     sm: {
//       span: 8,
//     },
//   },
//   wrapperCol: {
//     xs: {
//       span: 16,
//     },
//     sm: {
//       span: 8,
//     },
//   },
};
const tailFormItemLayout = {
//   wrapperCol: {
//     xs: {
//       span: 24,
//       offset: 0,
//     },
//     sm: {
//       span: 16,
//       offset: 8,
//     },
//   },
};
const { Option } = Select;
const dateFormatList = ['DD/MM/YYYY'];
const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 70,
      }}
    >
      <Option value="91">+91</Option>
    </Select>
  </Form.Item>
);

const apiFunc=()=>{
    var myHeaders = new Headers();
    myHeaders.append("id", "2");
    myHeaders.append("Authorization", "Bearer eyJraWQiOiJ0TEY5aXBDYTdZMFpnSnR4R1g0eFNTZUlaMVY1S05LdWRvSGVqS3JJRUEwPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiU1VNMl9UaHF5Um9GeGdjV3AxWnJJUSIsInN1YiI6IjJjNmJkYWUyLWNkMWUtNGIzNi1iZjc5LWFjZDE2ZGY5NjYyMyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9LMWp4b2NrWlciLCJjb2duaXRvOnVzZXJuYW1lIjoic2hyZXkiLCJhdWQiOiI0djlzMHJudTNnZ2FhdWFnY2lrYmwyYjQ2bCIsImV2ZW50X2lkIjoiMDljNmNmYjQtMjNjYy00YTY1LTkyMjQtNjk1NDA0YzcyYWI3IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MzI1NjY5MDcsImV4cCI6MTYzMjU3NDEwNywiaWF0IjoxNjMyNTY2OTA3LCJqdGkiOiJmYTYzZGVhYy00MjVmLTRhZTAtOTkyYy1kOTdlM2ZmYWM1YjEiLCJlbWFpbCI6IjE5aXQwNTlAY2hhcnVzYXQuZWR1LmluIn0.Uvezi6WfVUjI5PhCCW1Jg8WfOyeyNNZh-tQ38rXtGrq6GfEFyoKxnmF9Btb6wjqeZ2g01CAtFncJpJNeBNxrxHyNAdKBvdTxsY5HqrdH8qFwz9vVKjWPJ9ljYRdjC0yYdMSGSsU6v3nFnuQl5f9QMf93nJqd5-UeT_fUMiVM07pJmrfqzr7uvGWkttE-0O9qVxsxkeOxBEbDYcULbuoLsr5JOsCvngXL_KTQJyIs-2yb6w5bGd7EzERGAvq2VSnc2xeoYk62sE-T5YTwdH8AUepR0CTDsREIQJKY-sVxJDqYhjEWA7CdafXxmup7oEod7_Wpbl-k2JcsC34kVRh2dw");
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "id": 10,
      "nationality": "Caucasian",
      "dob": "20-9-2001",
      "sex": "Female",
      "email": "alexa.contact4@gmail.com",
      "name": "Alexa",
      "phone": "9144790514"
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
}
export default function FormComp() {
    const [fname,setFname]=useState('')
    return (
        <div>
            <Form {...formItemLayout} onSubmit={apiFunc}>
                <Form.Item
                    name="firstname"
                    label="First Name"
                    rules={[
                        {
                            type: 'string',
                            message: 'Must not contain numbers and special characters',
                        },
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input placeholder="First Name" onChange={(e)=>{console.log(e.target.value);setFname(e.target.value)}} />
                </Form.Item>

                <Form.Item
                    name="lastname"
                    label="Last Name"
                    rules={[
                        {
                            type: 'string',
                            message: 'Must not contain numbers and special characters',
                        },
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input placeholder="Last Name" />
                </Form.Item>
                <Form.Item
                    name="dateofbirth"
                    label="Date of Birth"
                    rules={[
                        {
                            type: 'date',
                            message: 'Enter the DOB',
                        },
                        {
                            required: true,
                            message: 'DOb is required!',
                        },
                    ]}
                >
                    <Space direction="vertical" size={10}>
                        <DatePicker defaultValue={moment('01/01/2001', dateFormatList[0])} format={dateFormatList} />
                    </Space>
                </Form.Item>
                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[
                        {
                            required: true,
                            message: 'Please select gender!',
                        },
                    ]}
                >
                    <Select placeholder="select your gender">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input
                        addonBefore={prefixSelector}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name="Nationality"
                    label="Nationality"
                    rules={[
                        {
                            type: 'string',
                            message: 'Must not contain numbers and special characters',
                        },
                        {
                            required: true,
                            message: 'Please input your nationality!',
                        },
                    ]}>
                    <Input placeholder="Eg. Indian" />
                </Form.Item>
                <Form.Item
                    name="address"
                    label="Address"
                    rules={[
                        {
                            type: 'string',
                        },
                        {
                            required: true,
                            message: 'Please input your address!',
                        }
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name="Agreement"
                    valuePropName="checked"
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                        I have read the <a href="/">Agreement</a>
                    </Checkbox>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </div>

    )
}
