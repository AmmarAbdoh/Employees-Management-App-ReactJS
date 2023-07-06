import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import "./App.css";
import FormComponent from "./form";

function IdentityCard({ info }) {
  const { name, job, email, phone, img } = info;

  const renderImage = () => {
    if (img) {
      return <Card.Img src={img} alt="EMPLOYEE" className="card-image" />;
    }
    return null;
  };

  return (
    <div>
      {phone ? (
        <Card className="bg-primary text-white text-center fixed-card">
          {renderImage()}
          <Card.Body>
            <Card.Title>
              <p className="fs-3 font-size-xs font-size-md">{name}</p>
            </Card.Title>
            <Card.Text>
              <p className="fs-3 font-size-xs font-size-md">{job}</p>
              <p className="fs-5 font-size-xs font-size-md">Phone : {phone}</p>
              <p className="fs-5 font-size-xs font-size-md">Email : {email}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <Card className="bg-danger text-white text-center fixed-card">
          {renderImage()}
          <Card.Body>
            <Card.Title>
              <h2>{name}</h2>
            </Card.Title>
            <Card.Text>
              <p className="fs-3">{job}</p>
              <p className="fs-5">Email : {email}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

function App() {
  const [employees, setEmployee] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    job: "",
    email: "",
    phone: "",
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({ ...formData, image: reader.result });
        };
        reader.readAsDataURL(file);
      } else {
        setFormData({ ...formData, image: null });
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: generateId(),
      ...formData,
      img: formData.image,
    };
    setEmployee([...employees, newEmployee]);
    setFormData({
      name: "",
      job: "",
      email: "",
      phone: "",
      image: null,
    });
  };

  const generateId = () => {
    // Logic to generate a unique ID (e.g., using a library like uuid)
    // For simplicity, we'll use a random number for the ID in this example
    return Math.floor(Math.random() * 1000);
  };

  const columnSizes = {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
    className: "mb-3 mt-3",
  };
  return (
    <>
      <Container className="mx-auto text-center mb-5">
        <h1 className="mt-4 mb-3">Employees Form</h1>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formJob" className="mb-3">
                <Form.Label>Job:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="job"
                  value={formData.job}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formPhone" className="mb-3">
                <Form.Label>Phone:</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formImage" className="mb-3">
                <Form.Label>Image:</Form.Label>
                <Form.Control
                  required
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add Employee
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Container className="mx-auto">
        <Row className="justify-content-center">
          {employees.map((employee) => (
            <Col {...columnSizes} key={employee.id}>
              <IdentityCard info={employee} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
