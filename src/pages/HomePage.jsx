import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
// import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  // const navigate = useNavigate();
  return (
    <div>
      <Card style={{ width: "100%" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Why do we need Test ?</Card.Title>
          <Card.Text>
            To guarantee our code quality. And to show the people that we also care about i t and wish to give something that already proven, at least by ourself
          </Card.Text>
          {/* <Button onClick={() => navigate('/users')} variant="primary">Users List</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomePage;
