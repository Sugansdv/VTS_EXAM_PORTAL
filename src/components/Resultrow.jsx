import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

const Resultrow = () => {
  const data = [
    { label: "Total Trainees", value: 15 },
    { label: "Total Marks", value: 100 },
    { label: "No of Student Present", value: 10 },
    { label: "No of Student Absent", value: 5 },
  ];

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        {data.map((item, index) => (
          <Col key={index} xs={6} sm={4} md={3} className="mb-3">
            <Card
              className="text-center"
              style={{
                backgroundColor: "#e7f98f", // light lime
                border: "none",
                borderRadius: "8px",
                padding: "10px",
              }}
            >
              <Card.Body>
                <Card.Text style={{ fontWeight: "500" }}>{item.label}</Card.Text>
                <Card.Title style={{ fontWeight: "700" }}>{item.value}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Resultrow;
