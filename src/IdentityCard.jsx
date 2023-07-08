import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function IdentityCard(props) {
  const { id, name, position, email, phone, img } = props.employee;
  const renderImage = () => {
    if (img) {
      return <Card.Img src={img} alt="EMPLOYEE" className="card-image" />;
    }
    return null;
  };

  const deleteCard = (id) => {
    let newEmployee = props.employees.filter((card) => card.id !== id);
    props.setEmployees(newEmployee);
  };

  return (
    <div>
      {phone ? (
        <Card className="text-center fixed-card card-bg card-text">
          {renderImage()}
          <Card.Body>
            <Card.Title>
              <p className="fs-4 font-size-xs font-size-md fw-bold">{name}</p>
            </Card.Title>
            <Card.Text>
              <p className="fs-5 font-size-xs font-size-md fw-bold">
                {position}
              </p>
              <p className="fs-6 font-size-xs font-size-md">Phone : {phone}</p>
              <p className="fs-6 font-size-xs font-size-md">Email : {email}</p>
            </Card.Text>
            <Button
              style={{ backgroundColor: "#4191fc" }}
              onClick={() => deleteCard(id)}
              className="fw-bold"
            >
              Remove Card
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <Card className="text-center fixed-card card2-bg card-text">
          {renderImage()}
          <Card.Body>
            <Card.Title>
              <p className="fs-4 font-size-xs font-size-md fw-bold">{name}</p>
            </Card.Title>
            <Card.Text>
              <p className="fs-5 font-size-xs font-size-md fw-bold">
                {position}
              </p>
              <p className="fs-6 font-size-xs font-size-md">Email : {email}</p>
              <p className="fs-6 font-size-xs font-size-md">&nbsp;</p>
            </Card.Text>
            <Button
              style={{ backgroundColor: "#b5d3e1" }}
              onClick={() => deleteCard(id)}
              className="fw-bold"
            >
              Remove Card
            </Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default IdentityCard;
