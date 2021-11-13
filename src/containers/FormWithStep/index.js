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

  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://9qj3u7alhc.execute-api.us-east-1.amazonaws.com/s1/applications",
      headers: {
        Authorization:'eyJraWQiOiJ0TEY5aXBDYTdZMFpnSnR4R1g0eFNTZUlaMVY1S05LdWRvSGVqS3JJRUEwPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiN2tmWWpsczY1SmtJVjJOWXFUMkVRdyIsInN1YiI6IjJjNmJkYWUyLWNkMWUtNGIzNi1iZjc5LWFjZDE2ZGY5NjYyMyIsImF1ZCI6IjR2OXMwcm51M2dnYWF1YWdjaWtibDJiNDZsIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjM2NzQzNDgyLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9LMWp4b2NrWlciLCJjb2duaXRvOnVzZXJuYW1lIjoic2hyZXkiLCJleHAiOjE2MzY3NTA2ODIsImlhdCI6MTYzNjc0MzQ4MiwianRpIjoiZmIwNzkzZDgtODQ0Zi00YmQ4LTg1NWQtMDczZTljN2NkZjZhIiwiZW1haWwiOiIxOWl0MDU5QGNoYXJ1c2F0LmVkdS5pbiJ9.sid8iO4zcWJzw1RccyKnXUrI8cuLooUkOOYTgewXmj4baQ-JF4rJms-VFqa5UJfRuh-QoEwUhLY5V4wpPkH0ARVHR_7jARA7U5AUEL6cB3-pxhEbRgu64E5-3Ak6TFGx0QnvPRdgv2v1NCaAYJ1oaJTaGgfC1TnDaT5Z20uhwV5M5qBfp7JIZep6Qp0mdZkdU9hq-NNB_NDKYNOh5rE0bka30Y7AS3dkWk5kBkJAmeI2kItZ2h0JIjrMeTbGot90UqA_6TMibGMypTAFGRdRwdPKEAJLncK3-oz1AihFCcg-PyT_fQlXH4G0PLLTx6jYiBE_XYCRFlQzYF3eUZkmeQ,'
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [current]);

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
