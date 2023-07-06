import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function IdentityCard({ info }) {
  const { name, position, email, phone, img } = info;

  const renderImage = () => {
    if (img) {
      return <Card.Img src={img} alt="EMPLOYEE" className="card-image" />;
    }
    return null;
  };

  return (
    <div>
      {phone ? (
        <Card className="text-white text-center fixed-card card-bg card-text">
          {renderImage()}
          <Card.Body>
            <Card.Title>
              <p className="fs-4 font-size-xs font-size-md">{name}</p>
            </Card.Title>
            <Card.Text>
              <p className="fs-5 font-size-xs font-size-md">{position}</p>
              <p className="fs-6 font-size-xs font-size-md">Phone : {phone}</p>
              <p className="fs-6 font-size-xs font-size-md">Email : {email}</p>
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
              <p className="fs-3">{position}</p>
              <p className="fs-5">Email : {email}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default IdentityCard;
