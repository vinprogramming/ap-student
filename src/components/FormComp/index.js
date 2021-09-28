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
import { useState } from 'react';
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




export default function FormComp() {
    const [form, setform] = useState({
        FirstName: '',
        LastName: '',
        Phone: '',
        DOB: '',
        Gender: '',
        nationality: '',
        address: '',

    });
    const [AggrementCheck, setAggrementCheck] = useState({})

    const handleformchange = event => {
        setform({
            ...form,
        });
    };

    const apiFunc = (val) => {
        console.log(val);
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJraWQiOiJ0TEY5aXBDYTdZMFpnSnR4R1g0eFNTZUlaMVY1S05LdWRvSGVqS3JJRUEwPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiWTVhZnlabGhDTWFrYnl2WGlXbm5XUSIsInN1YiI6IjJjNmJkYWUyLWNkMWUtNGIzNi1iZjc5LWFjZDE2ZGY5NjYyMyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9LMWp4b2NrWlciLCJjb2duaXRvOnVzZXJuYW1lIjoic2hyZXkiLCJhdWQiOiI0djlzMHJudTNnZ2FhdWFnY2lrYmwyYjQ2bCIsImV2ZW50X2lkIjoiMGQ4NDkyZWItYjMyOC00ODA3LTlhNWUtYjUyY2IzMzBjYzEzIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MzI4MzU3NDAsImV4cCI6MTYzMjg0Mjk0MCwiaWF0IjoxNjMyODM1NzQwLCJqdGkiOiI3Nzk1Nzc1ZC00MTQ3LTQxZmEtOTIzYS00MTY2Njc4N2ZiNGQiLCJlbWFpbCI6IjE5aXQwNTlAY2hhcnVzYXQuZWR1LmluIn0.BWb-MaihUYybJURuWI68QY6YYveBIdV7HqUvHntx_cF1GKTrGDlf5WfrJFMuoZOnEkkC0NeJ84K_-BZbyi2Vb3e0CbVEn7e-9wVDAwNYVkHGOZhtBqwhpZDrJHL6pS8txBQzCyh1YJrL93QSoH4x2NuUzLj810-sG_ruCAz3jqBsZVoCiwZQQHatXAxs_7Difh-wnojsd49C70POe78MXtmnCmVpzodH_egC3pErGR_Z3OrfDPASBwqSmn9-42y7OLNTvE7dJSg-eaBZnwWLWGN71v7gqMgk49jn647e9N5kns0OqYDDFZeOLdcfhZDbvTQxlCvahzNvZW5X43K6mQ");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": Math.floor(Math.random() * 100000),
            "nationality": val.nationality,
            "dob": "20-9-2005",
            "sex": val.Gender,
            "email": "alexa.contact4@gmail.com",
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
    return (
        <div>
            <Form {...formItemLayout} onFinish={apiFunc} id="ProfileForm">
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
                    <Input placeholder="First Name" value={form.FirstName} onChange={handleformchange} />
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
                    <Input placeholder="Last Name" value={form.LastName} onChange={handleformchange} />
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
                            required: false,
                            message: 'DOb is required!',
                        },
                    ]}
                >
                    <Space direction="vertical" size={10}>
                        <DatePicker defaultValue={moment('01/01/2001', dateFormatList[0])} format={dateFormatList} value={form.DOB} onPanelChange={handleformchange} />
                    </Space>
                </Form.Item>
                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[
                        {
                            required: false,
                            message: 'Please select gender!',
                        },
                    ]}
                >
                    <Select placeholder="select your gender" value={form.Gender} onChange={handleformchange}>
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
                        value={form.Phone}
                        onChange={handleformchange}
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
                    <Input placeholder="Eg. Indian" value={form.nationality} onChange={handleformchange} />
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
