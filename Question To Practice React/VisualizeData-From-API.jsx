import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const Dashboard = () => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v4/launches")
      .then((response) => setLaunches(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <h1>SpaceX Launches</h1>
        </Col>
      </Row>
      <Row className="mt-3">
        {launches.map((launch) => (
          <Col key={launch.id} md={4} className="mb-3">
            <Card>
              <Card.Img variant="top" src={launch.links.patch.small} />
              <Card.Body>
                <Card.Title>{launch.name}</Card.Title>
                <Card.Text>{launch.details}</Card.Text>
              </Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Mission:</strong> {launch.mission_name}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Rocket:</strong> {launch.rocket.name}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Launch Date:</strong>{" "}
                  {new Date(launch.date_unix * 1000).toLocaleDateString()}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Dashboard;
