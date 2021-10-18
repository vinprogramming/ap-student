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

            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>
        </Form>


    )
}
