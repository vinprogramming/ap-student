import React from 'react'
import './style.css'
import { Steps, Button, message } from 'antd';
const { Step } = Steps;

const steps = [
    {
        title: 'Personal Details',
        content: 'First-content',
    },
    {
        title: 'Schools and Results',
        content: 'Second-content',
    },
    {
        title: 'Upload Documents',
        content: 'Last-content',
    },
    {
        title: 'Fees Payment',
        content: 'Last-content',
    },
];

export default function FormWithStep() {
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <div className="FormWithSteps">
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </div>
    );
}
