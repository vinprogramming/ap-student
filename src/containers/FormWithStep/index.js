import React, { useEffect, useState } from "react";
import "./style.css";
import { Form, Steps, Button, message } from "antd";
import { FormComp } from "../../components";
import { Row, Col } from "antd";
import axios from "axios";
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

export default function FormWithStep({ application }) {
//   console.log("from form step", application);
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
  let ApplicationID = application["ApplicationID"];
  const fields = application["GlobalLabels"];

  let PersonalDetails = fields["Personal Details"];
  let SchoolDetails = fields["Education/School Details"];
  let EntranceExam = fields["Entrance Exam"];
  let EdDetails = fields["Ed-Level Details"];
  let DocumentUploads = fields["Document Uploads"];
  
  const [formdata, setFormdata] = useState({
	ApplicationID : ApplicationID,
	PersonalDetails: PersonalDetails,
    SchoolDetails: SchoolDetails,
    EntranceExam: EntranceExam,
    EdDetails: EdDetails,
    DocumentUploads: DocumentUploads,
  });
  // console.log(formdata.PersonalDetails);
  const useremail = JSON.parse(sessionStorage.getItem("u_decoded"));
  const getTodaysDate = () => {
    const timestamp = (Date.now());
    return timestamp;
  }
  const ApiFunction = (val) => {
	console.log("val", val);
    var data = {
	  "applicationid": val["ApplicationID"],
      "email": useremail.email,
      "submission": {
        "submissiontimestamp": getTodaysDate(),
		"submissiondata": val,
      }
    };
	console.log(data);
    var config = {
      method: 'put',
      url: `https://d4z2bizxa5.execute-api.us-east-1.amazonaws.com/s1/putapplication`,
      headers: {
        'Authorization': `Bearer ${sessionStorage.getItem('id_token')}`,
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

  }

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

              {/* Personal Details */}
              {current === 0 &&
                PersonalDetails.map((item, index) => (
                  <div className="personaldetails">
                    <br /> {<label>{item.title}</label>}
                    <br />
                    {item.type !== "option" && (
                      <input
                        type={item.type}
                        value={PersonalDetails[index].value}
                        onChange={(e) => {
                          PersonalDetails[index].value = e.target.value;
                          setFormdata({
                            ...formdata,
                            PersonalDetails: [{ ...PersonalDetails }],
                          });
                        }}
                        required
                        disabled={ClickedOnEdit}
                      />
                    )}

                    {item.type === "option" && item.title === "Gender" && (
                      <select
                        value={PersonalDetails[index].value}
                        onChange={(e) => {
                          PersonalDetails[index].value = e.target.value;
                          setFormdata({
                            ...formdata,
                            PersonalDetails: [{ ...PersonalDetails }],
                          });
                        }}
                        required
                        disabled={ClickedOnEdit}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                      </select>
                    )}
                  </div>
                ))}
            
              {/* School Details */}
              {current === 1 &&
                SchoolDetails.map((item, index) => (
                  <div className="schooldetails">
                    <br /> {<label>{item.title}</label>}
                    <br />
                    <input
                      type="text"
                      value={SchoolDetails[index].value}
                      onChange={(e) => {
                        SchoolDetails[index].value = e.target.value;
                        setFormdata({
                          ...formdata,
                          SchoolDetails: [{ ...SchoolDetails }],
                        });
                      }}
                      required
                      disabled={ClickedOnEdit}
                    />
                  </div>
                ))}
            
              {/* Entrance Exam */}
              {current === 2 &&
                EntranceExam.map((item, index) => (
                  <div className="entaranceexamdetails">
                    <br /> {<label>{item.title}</label>}
                    <br />
                    {item.type !== "option" && (
                      <input
                        type={item.type}
                        value={EntranceExam[index].value}
                        onChange={(e) => {
                          EntranceExam[index].value = e.target.value;
                          setFormdata({
                            ...formdata,
                            EntranceExam: [{ ...EntranceExam }],
                          });
                        }}
                        required
                        disabled={ClickedOnEdit}
                      />
                    )}
                    {item.type === "option" && item.title === "Status" && (
                      <select
                        value={PersonalDetails[index].value}
                        onChange={(e) => {
                          PersonalDetails[index].value = e.target.value;
                          setFormdata({
                            ...formdata,
                            PersonalDetails: [{ ...PersonalDetails }],
                          });
                        }}
                        required
                        disabled={ClickedOnEdit}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Results Declared">
                          Results declared
                        </option>
                      </select>
                    )}
                  </div>
                ))}
            
              {/* Education Details */}
              {current === 3 &&
                EdDetails.map((item, index) => (
                  <div>
                    <br /> {<label>{item.title}</label>}
                    <br />
                    <input
                      type="text"
                      value={EdDetails[index].value}
                      onChange={(e) => {
                        EdDetails[index].value = e.target.value;
                        setFormdata({
                          ...formdata,
                          EdDetails: [{ ...EdDetails }],
                        });
                      }}
                      required
                      disabled={ClickedOnEdit}
                    />
                  </div>
                ))}
            
              {/* Document Upload Details */}
              {current === 4 &&
                DocumentUploads.map((item, index) => (
                  <div>
                    <br /> {<label>{item.title}</label>}
                    <br />
                    <input
                      type="file"
                      value={DocumentUploads[index].value}
                      onChange={(e) => {
                        DocumentUploads[index].value = e.target.value;
                        setFormdata({
                          ...formdata,
                          DocumentUploads: [{ ...DocumentUploads }],
                        });
                      }}
                      required
                      disabled={ClickedOnEdit}
                    />
                  </div>
                ))}
            </form>
          </Col>
        </Row>
      </div>

      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={
			  () => {
				  next();
		  		  ApiFunction(formdata);}}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => {
				message.success("Processing complete!")
				}}
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
