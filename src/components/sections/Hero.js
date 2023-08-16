import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../ui/NavBar";
import Plane from "../../assets/img/plane.svg";
import BgHeader from "../../assets/img/bg-header.svg";

import CustomButton from "../ui/Button";

const Hero = () => {
  return (
    <Container className="position-relative p-0 pb-5 overflow-hidden">
      <Image className="img-fluid position-absolute" src={BgHeader} />
      <Row className="mx-2 mx-sm-5">
        <NavBar />
        <Col className="position-relative hero-text">
          <h4 className="hero-subtitle fw-bold text-uppercase">
            Best Destinations around the world
          </h4>
          <h2 className="hero-title fw-bold lh-sm">
            Travel, <span>enjoy</span> and live a new and full life
          </h2>
          <p className="hero-paragraph fs-6 lh-base">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="py-5">
            <CustomButton className="hero-button">Find out more</CustomButton>
            <CustomButton className="hero-play-button rounded-circle ms-5 me-3 text-white">
              <FontAwesomeIcon icon={faPlay} />
            </CustomButton>
            <span className="play-button-text">Play Demo</span>
          </div>
        </Col>
        <Col className="position-relative d-none d-sm-none d-md-block">
          <Image
            src={Plane}
            alt="Plane"
            className="img-fluid"
            style={{
              top: "2rem",
              left: "2rem",
              position: "absolute",
            }}
          />
          <Image
            src={require("../../assets/img/actress.png")}
            alt="Test"
            className="img-fluid w-100 w-md-75 d-none d-sm-none d-md-block"
            style={{
              position: "absolute",
              height: "40rem",
              right: "5rem",
              zIndex: 999,
            }}
          />
          <Image
            src={Plane}
            alt="Plane img-fluid"
            style={{
              top: "5rem",
              right: "8%",
              position: "absolute",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
