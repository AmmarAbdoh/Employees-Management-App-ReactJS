import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function MyForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    email: "",
    phone: "",
    img: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "img") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({ ...formData, img: reader.result });
        };
        reader.readAsDataURL(file);
      } else {
        setFormData({ ...formData, img: null });
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
      img: formData.img,
    };
    props.setEmployees([...props.employees, newEmployee]);
    setFormData({
      name: "",
      position: "",
      email: "",
      phone: "",
      img: null,
    });
    document.getElementById("formImg").value = "";
  };

  const generateId = () => {
    const maxId = props.employees.reduce((max, employee) => {
      return employee.id > max ? employee.id : max;
    }, 0);

    const newId = maxId + 1;

    return newId;
  };

  return (
    <Container
      className="form-background d-flex align-items-center vh-100"
      fluid
    >
      <Container>
        <h1 className="text-center mb-5 fw-bold card-text">
          Adding Employees Form
        </h1>
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6} lg={4}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="text-box"
                />
              </Form.Group>
              <Form.Group controlId="formPosition" className="mb-3">
                <Form.Label>Position:</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="text-box"
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
                  className="text-box"
                />
              </Form.Group>
              <Form.Group controlId="formPhone" className="mb-3">
                <Form.Label>Phone:</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="text-box"
                />
              </Form.Group>
              <Form.Group controlId="formImg" className="mb-3">
                <Form.Label>Image:</Form.Label>
                <Form.Control
                  required
                  type="file"
                  name="img"
                  accept="img/*"
                  onChange={handleChange}
                  className="text-box"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add Employee
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default MyForm;
