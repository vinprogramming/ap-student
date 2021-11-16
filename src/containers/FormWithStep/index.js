import React, { useEffect } from "react";
import "./style.css";
import { Form, Steps, Button, message } from "antd";
import { FormComp } from "../../components";
const { Step } = Steps;

const steps = [
  {
    title: "Personal Details",
    content: [
      {
        name: "firstname",
        label: "First Name",
        rules: [
          {
            type: "string",
            message: "Must not contain numbers and special characters",
          },
          {
            required: true,
            message: "Please input your name!",
          },
        ],
        haveOption: false,
      },
      {
        name: "lastname",
        label: "Last Name",
        rules: [
          {
            type: "string",
            message: "Must not contain numbers and special characters",
          },
          {
            required: true,
            message: "Please input your name!",
          },
        ],
        haveOption: false,
      },
    ],
  },
  {
    title: "Schools and Results",
    content: [
      {
        name: "scoolname",
        label: "School Name",
        rules: [
          {
            type: "string",
            message: "Must not contain numbers and special characters",
          },
          {
            required: true,
            message: "Please input your name!",
          },
        ],
        haveOption: false,
      },
      {
        name: "School Address",
        label: "School address",
        rules: [
          {
            type: "string",
            message: "Must not contain numbers and special characters",
          },
          {
            required: true,
            message: "Please input your name!",
          },
        ],
        haveOption: false,
      },
      {
        name: "dateofbirth",
        label: "Date of Birth",
        rules: [
          {
            type: "date",
            message: "Enter the DOB",
          },
          {
            required: false,
            message: "DOb is required!",
          },
        ],
        haveOption: false,
      },
      {
        name: "Nationality",
        label: "Nationality",
        rules: [
          {
            type: "string",
            message: "Must not contain numbers and special characters",
          },
          {
            required: true,
            message: "Please input your nationality!",
          },
        ],
      },
    ],
  },
  {
    title: "Upload Documents",
    content: "Last-content",
  },
  {
    title: "Fees Payment",
    content: "Last-content",
  },
];

function formsave(val) {}
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
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">
        <FormComp
          from={"profile"}
          data={steps[current].content}
          apiFunc={formsave}
          formState={{
            FirstName: "",
            LastName: "",
            Phone: "",
            DOB: "",
          }}
        />
      </div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
}
