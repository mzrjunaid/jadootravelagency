import React from "react";
import { Button, Col, Container, Image, ListGroup, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import PlayStore from "../../assets/img/playStore.svg";
import AppleStore from "../../assets/img/appleStore.svg";

const Footer = () => {
  return (
    <Container className="footer section position-relative p-5 overflow-hidden">
      <Row className="grid row-gap-4">
        <Col className="col-12 col-md-3">
          <h3 className="fw-bold">Jadoo.</h3>
          <small style={{ fontSize: "0.8125rem" }}>
            Book your trip in minute, get full Control for much longer.
          </small>
        </Col>
        <Col>
          <h5 className="fw-bold">Company</h5>
          <ListGroup>
            <ListGroup.Item className="border-0 p-0 bg-transparent">
              About
            </ListGroup.Item>
            <ListGroup.Item className="border-0 p-0 bg-transparent">
              Careers
            </ListGroup.Item>
            <ListGroup.Item className="border-0 p-0 bg-transparent">
              Mobile
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <h5 className="fw-bold">Contact</h5>
          <ListGroup>
            <ListGroup.Item className="border-0 p-0 bg-transparent">
              Help/FAQ
            </ListGroup.Item>
            <ListGroup.Item className="border-0 p-0 bg-transparent">
              Press
            </ListGroup.Item>
            <ListGroup.Item className="border-0 p-0 bg-transparent">
              Affilates
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <h5 className="fw-bold">More</h5>
          <ListGroup>
            <ListGroup.Item className="border-0 p-0 bg-transparent">
              Airline fees
            </ListGroup.Item>
            <ListGroup.Item className="border-0 p-0 bg-transparent">
              Airline
            </ListGroup.Item>
            <ListGroup.Item className="border-0 p-0 bg-transparent">
              Low Fare tips
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className="mx-auto col-12 col-md-3 text-center p-2">
          <Row>
            <Col className="d-flex justify-content-evenly">
              <Button className="rounded-circle bg-white border-0 text-black shadow-sm">
                <FontAwesomeIcon icon={faFacebookF} />
              </Button>
              <Button className="rounded-circle bg-white border-0 text-black shadow-sm">
                <FontAwesomeIcon icon={faInstagram} />
              </Button>
              <Button className="rounded-circle bg-white border-0 text-black shadow-sm">
                <FontAwesomeIcon icon={faTwitter} />
              </Button>
            </Col>
          </Row>
          <Row>
            <p className="my-3">Discover our app</p>
          </Row>
          <Row>
            <Col className="d-flex justify-content-evenly">
              <Button variant="link" className="p-0">
                <Image src={PlayStore} />
              </Button>
              <Button variant="link" className="p-0">
                <Image src={AppleStore} />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="text-center mt-5">
        <Col>
          <p>All rights reserved@jadoo.co</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
