import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import Weather from "../../assets/img/weather.svg";
import Flight from "../../assets/img/flight.svg";
import Event from "../../assets/img/Events.svg";
import Customization from "../../assets/img/customization.svg";

const Services = () => {
  return (
    <Container className="services section">
      <Row>
        <div className="services-title sec-title-container">
          <h6 className="sec-subtitle" style={{ textTransform: "uppercase" }}>
            Category
          </h6>
          <h2 className="sec-title">We Offer Best Services</h2>
        </div>
      </Row>
      <Row>
        <Container>
          <Row>
            <Col style={{ zIndex: 1 }}>
              <Card>
                <Card.Img variant="top" src={Weather} />
                <Card.Body>
                  <Card.Title>Calculated Weahter</Card.Title>
                  <Card.Text>
                    Built Wicket longer admire do barton vanity itself do in it.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ zIndex: 1 }}>
              <Card>
                <Card.Img variant="top" src={Flight} />
                <Card.Body>
                  <Card.Title>Best Flights</Card.Title>
                  <Card.Text>
                    Engrossed listening. Park gate sell they west hard for the.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ zIndex: 1 }}>
              <Card>
                <Card.Img variant="top" src={Event} />
                <Card.Body>
                  <Card.Title>Local Events</Card.Title>
                  <Card.Text>
                    Barton vanity itself do in it. Preferd to men it engrossed
                    listening.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ zIndex: 1 }}>
              <Card>
                <Card.Img variant="top" src={Customization} />
                <Card.Body>
                  <Card.Title>Customization</Card.Title>
                  <Card.Text>
                    We deliver outsourced aviation services for military
                    customers
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default Services;
