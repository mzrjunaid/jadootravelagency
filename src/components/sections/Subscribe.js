import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";

import SubIcon from "../../assets/img/icon-sub.svg";

const Subscribe = () => {
  return (
    <Container className="subscribe section position-relative p-0 p-md-5">
      <Row className="sub-box position-relative">
        <Image
          className="position-absolute top-0 translate-middle"
          src={SubIcon}
          style={{
            width: "4.375rem",
            height: "4.375rem",
            right: "-2.90rem",
          }}
        />
        <Col className="p-0 p-md-5 text-center">
          <Row className="d-flex justify-content-center">
            <Col className="col-8 pt-3">
              <h4 className="fs-5 lh-base">
                Subscribe to get information, latest news and other interesting
                offers about Cobham
              </h4>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center py-3 mt-md-5 grid">
            <Col className="col-6 col-md-5">
              <InputGroup>
                <InputGroup.Text id="email" className="bg-white border-0 ps-3">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="lg"
                    style={{ color: "#39425D" }}
                  />
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  className="border-0 py-3"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  aria-describedby="email"
                />
              </InputGroup>
            </Col>
            <Col className="col-2 col-md-2">
              <Button className="py-3 px-md-5" id="email-button">
                Subscribe
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Subscribe;
