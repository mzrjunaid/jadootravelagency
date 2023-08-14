import React from "react";
import { Card, Col, Container, Image, ProgressBar, Row } from "react-bootstrap";

import BgShadoow from "../../assets/img/bg-shadow.svg";
import Building from "../../assets/img/building.svg";
import Leaf from "../../assets/img/LEAF.svg";
import Map from "../../assets/img/map icon.svg";
import Send from "../../assets/img/send.svg";
import Destination from "../../assets/img/destination.svg";
import Payment from "../../assets/img/payment.svg";
import ReachAirport from "../../assets/img/reachAirport.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Booking = () => {
  return (
    <Container className="booking section position-relative">
      <Row>
        <Col>
          <Row>
            <div className="sec-title-container text-left mb-3 pb-2">
              <h6 className="sec-subtitle text-left">Easy and Fast</h6>
              <h2 className="sec-title text-left">
                Book Your Next Trip <br /> In 3 Easy Steps
              </h2>
            </div>
          </Row>
          <Row className="mt-5">
            <Col className="col-2">
              <Card className="border-0">
                <img src={Destination} alt="destination-icon" />
              </Card>
            </Col>
            <Col>
              <Card.Title className="booking-title">
                Choose Destination
              </Card.Title>
              <Card.Text className="hero-paragraph lh-base fs-6 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </Card.Text>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="col-2">
              <Card className="border-0">
                <img src={Payment} alt="destination-icon" />
              </Card>
            </Col>
            <Col>
              <Card.Title className="booking-title">Make Payment</Card.Title>
              <Card.Text className="hero-paragraph lh-base fs-6 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </Card.Text>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="col-2">
              <Card className="border-0">
                <img src={ReachAirport} alt="destination-icon" />
              </Card>
            </Col>
            <Col>
              <Card.Title className="booking-title">
                Reach Airport on Selected Date
              </Card.Title>
              <Card.Text className="hero-paragraph lh-base fs-6 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </Card.Text>
            </Col>
          </Row>
        </Col>
        <Col className="col d-flex align-items-center justify-content-center">
          <Image className="position-absolute" src={BgShadoow} />
          <Card className="border-0 bg-white trip">
            <Card.Img
              className="mb-4"
              src="https://s3-alpha-sig.figma.com/img/bdc4/e9e7/98bb7e15ae87fe31c13c5b3cc6d31461?Expires=1693180800&Signature=JSPP1ckMa7USt~fB7JaFN327~URs7D~brKP~QQOZWgh7LY6Smvi0MHcVytIYop-tOEjdpUHAYcBZDSvcNYcJPsndYe57r9Fo--tQfME8sT~KkOarL~ibv~ksp5UTzVGU~tXRGfELXONg9-ZvvTVedODkN13VCqz~7GLOu4QLSa5Y6rM6ziNmQHS2IwDjlVqU-1WDEfxALFDcJjh1YdUZtG761DI-bUP-m~mNc30NuRY1XFfrqBWOEz7uytJbAZRTZn99F40DE~iTHPtMCEbzUA5uaMrHZdKE~rUQy9276v8y0jDBMfMwGHA-5YAQ8n6M2yL1eg4KLqjTTXjBTrDLog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            />
            <Card.Header className="border-0 p-0 bg-white ">
              <Card.Text className="title mb-3">Trip To Greece</Card.Text>
              <Card.Text className="text-small m-0">
                14-29 June | by Robbin joseph
              </Card.Text>
            </Card.Header>
            <Card.Body className="p-0 mt-4">
              <Image src={Leaf} alt="icon-leaf" />
              <Image src={Map} alt="icon-map" />
              <Image src={Send} alt="icon-send" />
            </Card.Body>
            <Card.Footer className="border-0 p-0 bg-white">
              <Row>
                <Col>
                  <Image src={Building} alt="icon-building" />
                  <span className="text-small">24 people going</span>
                </Col>
                <Col style={{ textAlign: "right" }}>
                  <a href="#test">
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ color: "#4152CA" }}
                    />
                  </a>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
          <Card className="position-absolute ongoing-trip border-0 p-3">
            <Row className="no-gutters">
              <Col className="col-4">
                <Card.Img
                  className="rounded-circle"
                  src="https://s3-alpha-sig.figma.com/img/0936/a746/69c796b13d6446c8177e79c2a2249ca6?Expires=1693180800&Signature=TvZdcGcGpfQ9N3ravM4VL3GetUhFQ2FZLUFCbx6Exd4d0CHe86cXdtDo~GOMbMcNmzaO~8r8dxDDcYtoMMZqLokbdz8XGMDt85B1udgEbhBaEdKXbBNqnnoRJGWFVMf4ultWxnK0yKLyri1a9U2677aqDuJj7c57QJW8DRfuTGZxln4TdpHD4rSHS8uo9n1oaHFhr3RGV6TKxgOrYoiY2c1HBU~cZ4Ndn160D8jdyRfCc20tfe6S9jtnnjFaNr4K2LRMUv5dK~O6Y6BeiQcZn0TaXBMqN24LSpeLlvs15Qvs4KjVRv1dSfgarme0AJl~BGpwq6X46L2BthJsgUjXqw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  style={{
                    width: "4rem",
                    height: "4rem",
                  }}
                />
              </Col>
              <Col>
                <Card.Header className="border-0 p-0 bg-white">
                  <Card.Text className="text-small m-0 mb-2">Ongoing</Card.Text>
                  <Card.Text className="title mb-3">Trip To rome</Card.Text>
                  <Row>
                    <Col>
                      <Card.Text className="text-small m-0 mb-2">
                        <span style={{ color: "#8a79df" }}>40% </span>
                        completed
                      </Card.Text>
                      <ProgressBar
                        now={40}
                        style={{
                          height: "0.3125rem",
                        }}
                      />
                    </Col>
                  </Row>
                </Card.Header>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Booking;
