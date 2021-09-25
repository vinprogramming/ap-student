import React from 'react'
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
// import FormItem from 'antd/lib/form/FormItem';
const formItemLayout = {
  labelCol: {
    xs: {
      span: 8,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 8,
    },
    sm: {
      span: 8,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
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
export default function Profile() {
  return (
    <div>
      <Form {...formItemLayout}>
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
          <Input placeholder="First Name" />
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
            I have read the <a href="">Agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}


