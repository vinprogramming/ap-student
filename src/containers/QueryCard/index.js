/*
This is query card container, 
accepts querydata and renders a card with data.
Written by Shrey Makwana
*/
import React from "react";
import { Typography, Row, Col, Card } from "antd";
export default function QueryCard({ queryCarddata }) {

  console.log("Hello");
  console.log(queryCarddata);
  return (
    <div className="querycard">
      <Card size="small">
        <Row>
          <Col span={12}>
            <Typography.Title level={4}>{queryCarddata.subject}</Typography.Title>
          </Col>
          <Col span={4}>
            <Typography.Text>Status: </Typography.Text>
            <Typography.Text keyboard type={queryCarddata.querystatus.keyboardtype}>
              {queryCarddata.querystatus.tag}
            </Typography.Text>
          </Col>
          <Col span={6} offset={2}>
            <Typography.Title level={5}>
              Created On : {queryCarddata.querydate} {queryCarddata.querytime}
            </Typography.Title>
          </Col>
        </Row>
        <details>
          <Row>
            <Col span={24}>
              <Typography.Text italic>Query ID: {queryCarddata.queryid}</Typography.Text>
            </Col>
            <Col span={18}>
              <Typography.Text >Description : {queryCarddata.querydesc}</Typography.Text>
            </Col>

            {/* <Col span={4} offset={2}>
              <Typography.Text>Assigned To: </Typography.Text>
              <Typography.Text type="secondary">{queryCarddata.assignee}</Typography.Text>
            </Col> */}
          </Row>
        </details>
        <details>
          <summary>Responses</summary>
        </details>
      </Card>
    </div>
  );
}
