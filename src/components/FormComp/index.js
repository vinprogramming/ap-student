/**
 * TODO: Dynamic content
 * TODO: Make it resuable
 * TODO: save, edit & display.   
 * Written By: Shrey Makwana
 */
import {
    Form,
    Input,
    Select,
    Button,
} from 'antd';
import { useState } from 'react';

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


// helper function
function camelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}


export default function FormComp({ from, data, apiFunc, formState }) {
    const [form, setform] = useState(formState);

    const handleformchange = event => {
        setform({
            ...form,
        });
    };


    return (
        <div>
            <Form onFinish={apiFunc} id="ProfileForm">
                {
                    data.map((item) => {
                        return (
                            <Form.Item
                                name={item.name}
                                label={item.label}
                                rules={item.rules}
                            >
                                {!item.haveOption ?
                                    <Input placeholder={item.label} value={form[camelCase(item.name)]} onChange={handleformchange} />
                                    :
                                    <Select placeholder="select your gender" value={form.Gender} onChange={handleformchange}>
                                        {
                                            item.options.map((i) => <Option value={i}>{i}</Option>)
                                        }
                                    </Select>
                                }

                            </Form.Item>
                        )
                    })
                }
                {/* <Form.Item
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
                        <DatePicker format={dateFormatList} value={form.DOB} onPanelChange={handleformchange} />
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
                </Form.Item> */}

                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </div>

    )
}
