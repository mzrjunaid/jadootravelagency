import React from "react";
import { Col, Container, Image } from "react-bootstrap";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Container className="portfolio section p-5">
      <Slider {...settings}>
        <Col className="d-flex justify-content-center company-logo">
          <Image src="https://s3-alpha-sig.figma.com/img/e499/9d7b/87bf0ba2e08c05efed7641869188b98d?Expires=1693180800&Signature=M3SC3YKGCYc3GKZrQyBQHOGmLJnaMWfHqMzsCtevTPbdreIKDQxYU0~RXG~IfNvmWEX3o6g8D0u~xyhp4cupocqSQzu5PXf60u964iyCyzsmOZwUb3SLRnK69X0qj7gMwP3eITq5S1oEJoJv5CMT-EsuhEsy7-3WNLhYVSnw4mN3PXbskwqIg~bcSNc45E5ZlFjrfjxvcJytpnXunpytuzlBgdk-f364gCtfAuY5pcGpm95P163F3l~rz-Dzxy~AlUQxFaA3dxZ0JG1e5Uu9k~xYmRLjciPq1nLu1MSwprKo33XSGHyqR-CdXdZ9iXTACGd5h74~O9p49vLAB8VEKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        </Col>
        <Col className="d-flex justify-content-center company-logo">
          <Image src="https://s3-alpha-sig.figma.com/img/3e44/cc82/c69df7b9e4b510c71fff0a209463d571?Expires=1693180800&Signature=Jjr3K-77nzQu-CwxVE3AgZT1q-zyCUnL0Sgwuj8yF8S~adwBiw0pZgdy5T~yPGLK9-3h25w3QtDfyf-2lWpLaF3lRpxZWcGImAwl0OtM6Rf0LJFmyVlAPPnfZ6cVZAYWnQ6ENtyr-WCZdJEoUPQog~lfEoXs2wiTkfAe8t-OI6S3CTh--m~iZOVMokvt8TIaLw5CW~bVlFmwA7ooJ1UmnFGTerrl9l31AANSEWC3X-iSHPDPM9HnwxrHh2PelS5JrOaNCfsBRqKSpWhhXvPtITFRnyvNQL4MU7MJjIjXinrzYXwJWTCIEyuuYUJbS2mppwF8O8VK8xk0xzcINeDIcA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        </Col>
        <Col className="d-flex justify-content-center company-logo">
          <Image src="https://s3-alpha-sig.figma.com/img/c127/6ba9/d23d15d72c08f90bd37ca7760de78ffd?Expires=1693180800&Signature=DajA7~QVokUyifA2Y8DGNhOjkVFfcdlJ2w3yuVQ5qTZw4qazcCDtpGjssjFVQ~fhSToZ-x60IPD2wyUo8kIaUjTP2COZ7AJvt2PblOCq4Bo--ez~DOhfnBFCUp6BC7~lKTehaeo9fD7MkIuwMaGOFNnACmRAF8WAN3ZSo5nUUuATGhPLCfvU4lRHWOKVklo0O422YHKPT2LrIWStsqU9jh1qn3XYUIyjPVwhgGTSzXOBuADW~mbLm~mQEFNc5lkPyqoaHYa~k0tvPOWxOgJ01RSTADeMkPqomm6fzDaSVYOQW7pD7Ihbkdu9gfZ4ETLZMYgWPg-BY~LaFhBVxzRevQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        </Col>
        <Col className="d-flex justify-content-center company-logo">
          <Image src="https://s3-alpha-sig.figma.com/img/57ea/ef5a/daa8321be310b9ee6dd1ec4fa9fc5f6d?Expires=1693180800&Signature=DACGSwAw1rSpRUZtwuXspBTPiPnM~LSA1LjKr1LsVyxcqcMKTLfcTOLbdOeSKGrdwutt3FZcrqmoiO9jgDpFeoKrmFZ~-rqt2poVrSF2QW6IlxV~0MNSyRLTaBKHu8lPnEMAkSl86GyMHS5fYNUECxyMfX50pteQPpr4zqjumTkQyLLWkWQ5DxzUC~1M9ySqYtp8Y84PdFBgEqEWQBRpVxPnkdo4m2xwG45eo4iZQpA8byAB747k0qQBvRD9ALTIF~WuMnwxY5-JNs9KjVERrCqTUpSikghUrpgzv8nk7dZDyMs-c9fud5CGxoyen3uVg1-GEIyKHbUpYkuR~nnWJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        </Col>
        <Col className="d-flex justify-content-center company-logo">
          <Image src="https://s3-alpha-sig.figma.com/img/4364/6813/7024a8d7addca2d992111688160b4909?Expires=1693180800&Signature=MUzrlNtLsDBfKii-AL61xdPRZpuqxb~30AG1dwT6AtVErHq1-AETEyACZRot-P1yelsxvxe8fqLCSJqXHJn4APX50~gfhB81zXbHU~ic7D9~P7UQZwIkP9UMRAlc3Xf36W89ulZdRQrhh4bIjdfvs7WVilGUi69VNvWcCe15nMAjikvKJxti9wiBUUxwJWncyUU78m0uDhBDX3-JOJ5kv9LXF~8lG~~JfmkO8q-zdsx2CqhKdtUlS81uPYFG45V0TXdP3tBlwSk-6fRT5i~TSIAiLBheRn0f-bBLiLWD-Z4-84t0XkDjBVLZESfBrpZGXIb8rEF7F-nNRq1USsRNIw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        </Col>
      </Slider>
    </Container>
  );
};

export default Portfolio;
