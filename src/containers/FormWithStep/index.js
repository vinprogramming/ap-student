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
        Authorization:
          "Bearer eyJraWQiOiJ0TEY5aXBDYTdZMFpnSnR4R1g0eFNTZUlaMVY1S05LdWRvSGVqS3JJRUEwPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoibTZrS3g3eEFTZzdDTTRPNGFQQmNVdyIsInN1YiI6IjJjNmJkYWUyLWNkMWUtNGIzNi1iZjc5LWFjZDE2ZGY5NjYyMyIsImF1ZCI6IjR2OXMwcm51M2dnYWF1YWdjaWtibDJiNDZsIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjM2NzE3MzQ0LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9LMWp4b2NrWlciLCJjb2duaXRvOnVzZXJuYW1lIjoic2hyZXkiLCJleHAiOjE2MzY3MjQ1NDQsImlhdCI6MTYzNjcxNzM0NCwianRpIjoiNmZiZGJmZWQtN2JhMS00YTNmLWJmM2YtZmNkOTc3OTMxNThjIiwiZW1haWwiOiIxOWl0MDU5QGNoYXJ1c2F0LmVkdS5pbiJ9.gd_sP-uATSF56HZJO9Kdk-tSIXXIqF232PMTCKTd8ccI-2Ctr_JJwW7DylWkvt9qrdzkBroLusoMSS3oCF5M_PDOtwqj6HqdBAT1_KCU6AVRnZIaq-CQwdrUu1JxQxKSwGJzkUyEK8S9QsueXtTM1mImLDThinUO0cq6p_GNu47oJ6N0yOgofBOT-bzWLhcadBH_rxJEmjAqLJXJxGDm0xeZLFWUiojsq15eQ0eyygoJ58bGb5Ui-WGPkCxjswTI6D9pWnalRtPJjRgeqWpC4Zl67XVjRdu9WfWPLf9FK0cxQIEzKUArFRigVgib5lrAypXd1yJsnmicgJPxrSRUDw",
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
