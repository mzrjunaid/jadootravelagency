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
    <Container className="subscribe section position-relative pb-5">
      <Row className="sub-box">
        <Image
          className="position-absolute"
          src={SubIcon}
          style={{
            width: "4.375rem",
            height: "4.375rem",
            flexShrink: 0,
            right: "-1.5rem",
            top: "-1.5rem",
          }}
        />
        <Col className="p-5 text-center">
          <Row className="d-flex justify-content-center">
            <Col className="col-9">
              <h4 className="fs-4">
                Subscribe to get information, latest news and other interesting
                offers about Cobham
              </h4>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mt-5">
            <Col className="col-5">
              <InputGroup>
                <InputGroup.Text id="email" className="bg-white border-0 pl-3">
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
            <Col className="col-2">
              <Button className="p-3 px-5" id="email-button">
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
