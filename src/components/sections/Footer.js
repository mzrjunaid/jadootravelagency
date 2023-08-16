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
import BgFooter from "../../assets/img/bg-footer.svg";

const Footer = () => {
  return (
    <Container className="footer section position-relative overflow-hidden">
      <Row>
        <Col className="col-3">
          <h3 className="fw-bold">Jadoo.</h3>
          <small style={{ fontSize: "0.8125rem" }}>
            Book your trip in minute, get full Control for much longer.
          </small>
        </Col>
        <Col>
          <h5 className="fw-bold">Company</h5>
          <ListGroup>
            <ListGroup.Item className="border-0 p-0">About</ListGroup.Item>
            <ListGroup.Item className="border-0 p-0">Careers</ListGroup.Item>
            <ListGroup.Item className="border-0 p-0">Mobile</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <h5 className="fw-bold">Contact</h5>
          <ListGroup>
            <ListGroup.Item className="border-0 p-0">Help/FAQ</ListGroup.Item>
            <ListGroup.Item className="border-0 p-0">Press</ListGroup.Item>
            <ListGroup.Item className="border-0 p-0">Affilates</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <h5 className="fw-bold">More</h5>
          <ListGroup>
            <ListGroup.Item className="border-0 p-0">Airline fees</ListGroup.Item>
            <ListGroup.Item className="border-0 p-0">Airline</ListGroup.Item>
            <ListGroup.Item className="border-0 p-0">Low Fare tips</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className="col-3 text-center p-2">
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
              <Image src={PlayStore} />
              <Image src={AppleStore} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="text-center mt-5">
        <Col>
          <p>All rights reserved@jadoo.co</p>
        </Col>
      </Row>
      <Image src={BgFooter} className="position-absolute bg-footer" />
    </Container>
  );
};

export default Footer;
