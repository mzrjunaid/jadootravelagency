import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CarouselCustom from "../ui/CarouselCustom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <Container className="booking section position-relative p-5 my-5">
      <Row>
        <Col className="col-12 col-sm-5">
          <Row>
            <div className="sec-title-container text-left mb-3 pb-2">
              <h6 className="sec-subtitle text-left text-uppercase">
                Testimonials
              </h6>
              <h2 className="sec-title text-left">What People Say About Us</h2>
            </div>
          </Row>
          <Row>
            <Col className="col-4 mx-auto mx-sm-0 mt-5 d-flex justify-content-around indicators">
              <FontAwesomeIcon icon={faCircle} size="xs" className="active" />
              <FontAwesomeIcon icon={faCircle} size="xs" />
              <FontAwesomeIcon icon={faCircle} size="xs" />
            </Col>
          </Row>
        </Col>
        <Col className="col-12 col-sm-6 d-flex align-items-center justify-content-center">
          <CarouselCustom />
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
