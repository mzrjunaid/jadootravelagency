import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CarouselCustom from "../ui/CarouselCustom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <Container className="booking section position-relative pb-5">
      <Row>
        <Col className="col-5">
          <Row>
            <div className="sec-title-container text-left mb-3 pb-2">
              <h6 className="sec-subtitle text-left text-uppercase">
                Testimonials
              </h6>
              <h2 className="sec-title text-left">What People Say About Us</h2>
            </div>
          </Row>
          <Row>
            <Col className="col-4 mt-5 d-flex justify-content-around indicators">
              <FontAwesomeIcon icon={faCircle} size="xs" className="active" />
              <FontAwesomeIcon icon={faCircle} size="xs" />
              <FontAwesomeIcon icon={faCircle} size="xs" />
            </Col>
          </Row>
        </Col>
        <Col className="col d-flex align-items-center justify-content-center">
          <CarouselCustom />
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
