import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function FormComponent() {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    job: "",
    phoneNumber: "",
    website: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    // You can use the formData object to access the entered values
    console.log(formData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formImage">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formJob">
              <Form.Label>Job</Form.Label>
              <Form.Control
                type="text"
                name="job"
                value={formData.job}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formWebsite">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Card
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          {formData.image && (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={formData.image} />
              <Card.Body>
                <Card.Title>{formData.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {formData.job}
                </Card.Subtitle>
                <Card.Text>Phone: {formData.phoneNumber}</Card.Text>
                <Card.Link href={formData.website} target="_blank">
                  Visit Website
                </Card.Link>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default FormComponent;
