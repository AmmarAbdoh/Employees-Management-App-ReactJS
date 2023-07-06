import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import IdentityCard from "./IdentityCard.jsx";

function EmployeeList(props) {
  const columnSizes = {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
    className: "mb-3 mt-3",
  };
  return (
    <Container className="mx-auto employees-bg" fluid>
      {props.employees.length > 0 && (
        <h1
          className="text-center fw-bold mb-3 pt-4"
          style={{ color: "darkblue" }}
        >
          Employees Cards
        </h1>
      )}
      <Row className="justify-content-center">
        {props.employees.map((employee) => (
          <Col {...columnSizes} key={employee.id}>
            <IdentityCard info={employee} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default EmployeeList;
