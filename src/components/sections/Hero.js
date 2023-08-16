import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../ui/NavBar";
import Plane from "../../assets/img/plane.svg";
import CustomButton from "../ui/Button";
import SVG from "../ui/SVG";




const Hero = () => {
  return (
    <section style={{ position: "relative" }}>
      <div className="hero-content">
        <Container>
          <Row>
            <NavBar />
          </Row>
          <Row>
            <Col>
              <Container>
                <div className="hero-text">
                  <h4 className="hero-subtitle">
                    Best Destinations around the world
                  </h4>
                  <h2 className="hero-title">
                    Travel, <span>enjoy</span> and live a new and full life
                  </h2>
                  <p className="hero-paragraph">
                    Built Wicket longer admire do barton vanity itself do in it.
                    Preferred to sportsmen it engrossed listening. Park gate
                    sell they west hard for the.
                  </p>
                  <div>
                    <CustomButton className="hero-button">
                      Find out more
                    </CustomButton>
                    <CustomButton
                      className="hero-play-button rounded-circle"
                      style={{ marginLeft: "2rem" }}
                    >
                      <FontAwesomeIcon icon={faPlay} />
                    </CustomButton>
                    <span className="play-button-text">Play Demo</span>
                  </div>
                </div>
              </Container>
            </Col>
            <Col style={{ position: "relative" }}>
              <Image
                src={Plane}
                alt="Plane"
                style={{
                  top: "2rem",
                  left: "2rem",
                  position: "absolute",
                }}
              />
              <Image
                src={require("../../assets/img/actress.png")}
                alt="Test"
                style={{
                  position: "absolute",
                  height: "40rem",
                  right: "5rem",
                  zIndex: 999,
                }}
              />
              <Image
                src={Plane}
                alt="Plane"
                style={{
                  top: "5rem",
                  right: "8%",
                  position: "absolute",
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="hero-background">
        <SVG width={"100%"} height={"100%"} />
      </div>
    </section>
  );
};

export default Hero;
