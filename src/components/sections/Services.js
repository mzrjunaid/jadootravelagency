import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";

import Weather from "../../assets/img/weather.svg";
import Flight from "../../assets/img/flight.svg";
import Event from "../../assets/img/Events.svg";
import Stars from "../../assets/img/stars.svg";

import Customization from "../../assets/img/customization.svg";

const Services = () => {
  return (
    <Container className="services section p-md-5 my-3">
      <Row>
        <Col className="services-title mb-5 sec-title-container text-center position-relative">
          <Image
            className="position-absolute top-0 end-0"
            src={Stars}
            style={{ zIndex: -1 }}
          />
          <h6 className="sec-subtitle fs-5 lh-base fw-semibold text-uppercase">
            Category
          </h6>
          <h2 className="sec-title fw-bold lh-base text-capitalize">
            We Offer Best Services
          </h2>
        </Col>
      </Row>
      <Row className="grid gap-2 row-gap-5">
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
                We deliver outsourced aviation services for military customers
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
