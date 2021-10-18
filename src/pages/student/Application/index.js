import { FormWithStep } from '../../../containers';
import { Layout, Typography } from 'antd'
import './style.css';

export default function Appplication() {
    return (
        <div className="Application" >

            <Layout style={{ padding: '2em' }}>
                <Typography.Title level={3}>
                    BTech Application Form
                </Typography.Title>
                <FormWithStep />
            </Layout>

        </div>
    )
}
