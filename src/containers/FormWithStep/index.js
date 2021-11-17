import React, { useEffect, useState } from "react";
import "./style.css";
import { Form, Steps, Button, message } from "antd";
import { FormComp } from "../../components";
import { Row, Col } from "antd";
const { Step } = Steps;

const steps = [
  {
    title: "Personal Details",
  },
  {
    title: "School Details",
  },
  {
    title: "Entrance Exam",
    
  },
  {
    title: "Ed Details",
  },
  {
    title: "Documents Upload",
  },
];

function formsave(val) {}
export default function FormWithStep({ application }) {
  console.log("from form step", application);
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const [ClickedOnEdit, setClickedOnEdit] = useState(false);

  const fields = application["GlobalLabels"];
  console.log("fields", fields);
  const PersonalDetails = fields["Personal Details"];
  const SchoolDetails = fields["Education/School Details"];
  const EntranceExam = fields["Entrance Exam"];
  const EdDetails = fields["Ed-Level Details"];
  const DocumentUploads = fields["Document Uploads"];
  console.log(PersonalDetails, SchoolDetails, EntranceExam, EdDetails, DocumentUploads);
  
  return (
    <div className="FormWithSteps">
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">
        <Row>
          <Col span={24}>
              
              <form autoComplete="off" onSubmit={onSubmit} id="DetailForm">
              
              {current==0&&PersonalDetails.map((item) =>
                <div>
                <br /> {<label>{item.title}</label>}
                <br />
                <input
                  type={item.type}
                  value={""}
                  onChange={(e) => {}}
                  required
                  disabled={ClickedOnEdit}
                />
                </div>
               )}
              {current==1&&SchoolDetails.map((item) =>
                <div>
                <br /> {<label>{item.title}</label>}
                <br />
                <input
                  type={item.type}
                  value={""}
                  onChange={(e) => {}}
                  required
                  disabled={ClickedOnEdit}
                />
                </div>
               )}
              {current==2&&EntranceExam.map((item) =>
                <div>
                <br /> {<label>{item.title}</label>}
                <br />
                <input
                  type={item.type}
                  value={""}
                  onChange={(e) => {}}
                  required
                  disabled={ClickedOnEdit}
                />
                </div>
              )}
              {current==3&&EdDetails.map((item) =>
                <div>
                <br /> {<label>{item.title}</label>}
                <br />
                <input
                  type={item.type}
                  value={""}
                  onChange={(e) => {}}
                  required
                  disabled={ClickedOnEdit}
                />
                </div>
              )}
              {current==4&&DocumentUploads.map((item) =>
                <div>
                <br /> {<label>{item.title}</label>}
                <br />
                <input
                  type={item.type=='pdf'?'file':''}
                  value={""}
                  onChange={(e) => {}}
                  required
                  disabled={ClickedOnEdit}
                />
                </div>
              )}
                
              </form>
          </Col>
        </Row>
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
