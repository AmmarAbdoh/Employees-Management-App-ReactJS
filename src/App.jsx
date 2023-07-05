import { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./App.css";
import FormComponent from "./form";

function AddCardForm() {
  const [cardImg, setCardImage] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardJob, setCardJob] = useState("");
  const [cardEmail, setCardEmail] = useState("");
  const [cardSite, setCardSite] = useState("");

  function handleChange(e) {
    setCardName(e.target.value);
    setCardJob(e.target.value);
    setCardEmail(e.target.value);
    setCardSite(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new contact"
        onChange={handleChange}
        value={card}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function IdentityCard(props) {
  const img = props.img;
  const name = props.name;
  const job = props.job;
  const phone = props.phone;
  const email = props.email;
  const website = props.website;

  return (
    <div>
      {website ? (
        <Card className="bg-primary text-white text-center fixed-card">
          <Card.Img variant="top" src={img} className="card-image" />
          <Card.Body>
            <Card.Title>
              <p className="fs-3 font-size-xs font-size-md">{name}</p>
            </Card.Title>
            <Card.Text>
              <p className="fs-3 font-size-xs font-size-md">{job}</p>
              <p className="fs-5 font-size-xs font-size-md">Phone : {phone}</p>
              <p className="fs-5 font-size-xs font-size-md">Email : {email}</p>
              <p className="fs-5 font-size-xs font-size-md">
                Website : {website}
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <Card className="bg-danger text-white text-center fixed-card">
          <Card.Img variant="top" src={img} className="card-image" />
          <Card.Body>
            <Card.Title>
              <h2>{name}</h2>
            </Card.Title>
            <Card.Text>
              <p className="fs-3">{job}</p>
              <p className="fs-5">Phone : {phone}</p>
              <p className="fs-5">Email : {email}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

function App() {
  const columnSizes = {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
  };
  return (
    <>
      <Container>
        <Row>
          <Col {...columnSizes}>
            <IdentityCard
              img="/public/images/ammar.png"
              name="Ammar Abdo"
              job="Fullstack Developer"
              phone="0777777777"
              email="ammar@gmail.com"
              website="www.ammar.com"
            />
          </Col>

          <Col {...columnSizes}>
            <IdentityCard
              img="/public/images/messi.jpg"
              name="Lionel Messi"
              job="Footballer"
              phone="0777777777"
              email="messi@gmail.com"
            />
          </Col>

          <Col {...columnSizes}>
            <IdentityCard
              img="/public/images/messi.jpg"
              name="Lionel Messi"
              job="Footballer"
              phone="0777777777"
              email="messi@gmail.com"
              website="www.messi.com"
            />
          </Col>

          <Col {...columnSizes}>
            <IdentityCard
              img="/public/images/messi.jpg"
              name="Lionel Messi"
              job="Footballer"
              phone="0777777777"
              email="messi@gmail.com"
              website="www.messi.com"
            />
          </Col>

          <Col {...columnSizes}>
            <IdentityCard
              img="/public/images/messi.jpg"
              name="Lionel Messi"
              job="Footballer"
              phone="0777777777"
              email="messi@gmail.com"
              website="www.messi.com"
            />
          </Col>

          <Col {...columnSizes}>
            <IdentityCard
              img="/public/images/messi.jpg"
              name="Lionel Messi"
              job="Footballer"
              phone="0777777777"
              email="messi@gmail.com"
              website="www.messi.com"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
