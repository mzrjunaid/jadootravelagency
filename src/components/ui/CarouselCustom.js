import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card } from "react-bootstrap";

const CarouselCustom = () => {
  return (
    <div className="customCarousel position-relative p-3">
      <Card className="border-0 p-2">
        <Card.Img
          className="rounded-circle position-absolute fixed-top"
          src="https://s3-alpha-sig.figma.com/img/7243/5153/7059b05297b2de0c67e18d6509eef339?Expires=1693180800&Signature=biIolXy1z9uXkTvA3TPtuSfSUc1ThpunY3DcDayqzbk5XkLcPWE~pwLVmU-7DT6sX8k1QQgjzdckoRuT-27dFBcOv6KRramIUTk4IFkKb7EPzJV17IkrTrFabOr3fdpyKJKZl-DlvN2a-dtPseRwFeQDg3Y6FZ07vkN9sLeDmy5XKjg2YZPiWqekQYn5niX1en3-E5~QPkOP-Ds9dCbiFoyxQvnpwKB9on2v9i27L87FFbpjNo~IIUJ5Nerp-KRJ-64ADtVTdn1cd8leXafTumdNRmtSZOTci17zZirXMuefD6nSk0yELBBmQTzWZh~eKMs45RLyYWEDFD8qOOGIYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <Card.Body className="bg-white border-0 m-2">
          <Card.Text className="mt-2">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </Card.Text>
        </Card.Body>
        <Card.Footer className="bg-white border-0 m-2">
          <Card.Text className="h5 mb-0 lh-2">Mike taylor</Card.Text>
          <small>Lahore, Pakistan</small>
        </Card.Footer>
      </Card>
      <Card className="p-2 position-absolute">
        <Card.Img
          className="rounded-circle position-absolute fixed-top"
          src="https://s3-alpha-sig.figma.com/img/7243/5153/7059b05297b2de0c67e18d6509eef339?Expires=1693180800&Signature=biIolXy1z9uXkTvA3TPtuSfSUc1ThpunY3DcDayqzbk5XkLcPWE~pwLVmU-7DT6sX8k1QQgjzdckoRuT-27dFBcOv6KRramIUTk4IFkKb7EPzJV17IkrTrFabOr3fdpyKJKZl-DlvN2a-dtPseRwFeQDg3Y6FZ07vkN9sLeDmy5XKjg2YZPiWqekQYn5niX1en3-E5~QPkOP-Ds9dCbiFoyxQvnpwKB9on2v9i27L87FFbpjNo~IIUJ5Nerp-KRJ-64ADtVTdn1cd8leXafTumdNRmtSZOTci17zZirXMuefD6nSk0yELBBmQTzWZh~eKMs45RLyYWEDFD8qOOGIYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        />
        <Card.Body className="bg-white border-0 m-2">
          <Card.Text className="mt-2">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </Card.Text>
        </Card.Body>
        <Card.Footer className="bg-white border-0 m-2">
          <Card.Text className="h5 mb-0 lh-2">Chris Thomas</Card.Text>
          <small>CEO of Red Button</small>
        </Card.Footer>
      </Card>
      <div className="carousel-control position-absolute">
        <Button variant="link" className="d-block mb-3 disabled">
          <FontAwesomeIcon icon={faChevronUp} />
        </Button>
        <Button variant="link" className="d-block">
          <FontAwesomeIcon icon={faChevronDown} />
        </Button>
      </div>
    </div>
  );
};

export default CarouselCustom;
