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

function formsave(val) { }
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
  let PersonalDetails = fields["Personal Details"];
  let SchoolDetails = fields["Education/School Details"];
  let EntranceExam = fields["Entrance Exam"];
  let EdDetails = fields["Ed-Level Details"];
  let DocumentUploads = fields["Document Uploads"];
  // console.log(PersonalDetails, SchoolDetails, EntranceExam, EdDetails, DocumentUploads);
  const [formdata, setFormdata] = useState({
    PersonalDetails: PersonalDetails,
    SchoolDetails: SchoolDetails,
    EntranceExam: EntranceExam,
    EdDetails: EdDetails,
    DocumentUploads: DocumentUploads,
  });
  // console.log(formdata.PersonalDetails);
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

              {current == 0 && PersonalDetails.map((item, index) =>
                <div>
                  <br /> {<label>{item.title}</label>}
                  <br />
                  {
                    item.type != "option" && <input
                      type={item.type}
                      value={PersonalDetails[index].value}
                      onChange={(e) => {
                        PersonalDetails[index].value = e.target.value;
                        setFormdata({ ...formdata, PersonalDetails: [{ ...PersonalDetails }] });
                      }}
                      required
                      disabled={ClickedOnEdit}
                    />
                  }
                  {
                    item.type == "option" && item.title == "Gender" &&
                    <select value={PersonalDetails[index].value}
                      onChange={(e) => {
                        PersonalDetails[index].value = e.target.value;
                        setFormdata({ ...formdata, PersonalDetails: [{ ...PersonalDetails }] });
                      }}
                      required
                      disabled={ClickedOnEdit}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                  }
                </div>
              )}
              {current == 1 && SchoolDetails.map((item, index) =>
                <div>
                  <br /> {<label>{item.title}</label>}
                  <br />
                  <input
                    type="text"
                    value={SchoolDetails[index].value}
                    onChange={(e) => {
                      SchoolDetails[index].value = e.target.value;
                      setFormdata({ ...formdata, SchoolDetails: [{ ...SchoolDetails }] });
                    }}
                    required
                    disabled={ClickedOnEdit}
                  />
                </div>
              )}
              {current == 2 && EntranceExam.map((item, index) =>
                <div>
                  <br /> {<label>{item.title}</label>}
                  <br />
                  {
                    item.type != "option" && <input
                      type={item.type}
                      value={EntranceExam[index].value}
                      onChange={(e) => {
                        EntranceExam[index].value = e.target.value;
                        setFormdata({ ...formdata, EntranceExam: [{ ...EntranceExam }] });
                      }}
                      required
                      disabled={ClickedOnEdit}
                    />
                  }
                  {
                    item.type == "option" && item.title == "Status" &&
                    <select value={PersonalDetails[index].value}
                      onChange={(e) => {
                        PersonalDetails[index].value = e.target.value;
                        setFormdata({ ...formdata, PersonalDetails: [{ ...PersonalDetails }] });
                      }}
                      required
                      disabled={ClickedOnEdit}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Results Declared">Results declared</option>
                    </select>
                  }
                </div>
              )}
              {current == 3 && EdDetails.map((item, index) =>
                <div>
                  <br /> {<label>{item.title}</label>}
                  <br />
                  <input
                    type="text"
                    value={EdDetails[index].value}
                    onChange={(e) => {
                      EdDetails[index].value = e.target.value;
                      setFormdata({ ...formdata, EdDetails: [{ ...EdDetails }] });
                    }}
                    required
                    disabled={ClickedOnEdit}
                  />
                </div>
              )}
              {current == 4 && DocumentUploads.map((item, index) =>
                <div>
                  <br /> {<label>{item.title}</label>}
                  <br />
                  <input
                    type="file"
                    value={DocumentUploads[index].value}
                    onChange={(e) => {
                      DocumentUploads[index].value = e.target.value;
                      setFormdata({ ...formdata, DocumentUploads: [{ ...DocumentUploads }] });
                    }}
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
            Submit Application
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
