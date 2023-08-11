import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const Topsellings = () => {
  return (
    <Container className="selling section">
      <Row>
        <div className="sec-title-container">
          <h6 className="sec-subtitle">Top Selling</h6>
          <h2 className="sec-title">We Offer Best Services</h2>
        </div>
      </Row>
      <Row>
        <Container>
          <Row>
            <Col style={{ zIndex: 1 }}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://s3-alpha-sig.figma.com/img/32e1/459a/e49e57046b9c9bf320fe245919168bb0?Expires=1692576000&Signature=lpV3JKr6PnV2i~GYmhhRTjeL7cFFgs6CAtFw2kECzCTy5JyDERC5Cv~gB8MSsz~Vh2nbIonG-rQwzdoRkWBUPWn~npVPGyY-3crP31lZtQtJsTFamoLvknLfr5~imko2W-XgH5842x5mJUfLGCuejuP4nF4Z-hKvnD9fN4wCWNpuCrucc641nIbTI~3GDHS3-s6Ym8RLrPk4FZ-dN8RHO~BY~9X9kHlSxUewu8-d3Lfm4xlEWZosW-fAhMWZaElzeJ6RjWCqH6IraQ-11zhvTrRO3Bc-MIMQT0BmE1JB9pY-5x00Zgp9lSzUx6eHshSIgQBMK-HpG6-UvMZA-WUBYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
                <Card.Body>
                  <Card.Title>
                    <Row>
                      <Col>
                        <span>Rome, Italy</span>
                      </Col>
                      <Col style={{ textAlign: "right" }}>
                        <span>$5.42k</span>
                      </Col>
                    </Row>
                  </Card.Title>
                  <Card.Text>
                    <FontAwesomeIcon icon={faLocationArrow} />
                    <span>10 Days Trip</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ zIndex: 1 }}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://s3-alpha-sig.figma.com/img/599d/5437/ff6f71a7522170940c3ac66332ac8d2f?Expires=1692576000&Signature=pd1PiQApxJfFyYd~jxX1Uy0Zot-UALewTKjd9eT4LJ6NAVx~rpmylViUcHfwyeEvDD116Lc0INxPpdKKg8Iq0cniNZK6oLQ~fimbu1XS~lYDWffpmjyhKOCN-QcJDeOmD371ssUKRPTv06rucmQZmfWztcjfKPRmxRWUmaU3AYFbmciyqATtYM6a8XadrHYZ87zCeEUHfYzITc-S1qUhPtp66AGGCTbswgHprQ80jT7HDgj-wqbTP4KmmXntSnQyMOAvza6jTzrKCw9ZquoUJfWI~-T~RJTpohKc4gkr0ySx6L2tjUW-bxRwPo~5Zqzcmp9wxEBUfv49L9J0mGhH6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
                <Card.Body>
                  <Card.Title>
                    <Row>
                      <Col>
                        <span>London, UK</span>
                      </Col>
                      <Col style={{ textAlign: "right" }}>
                        <span>$4.2k</span>
                      </Col>
                    </Row>
                  </Card.Title>
                  <Card.Text>
                    <FontAwesomeIcon icon={faLocationArrow} />
                    <span>12 Days Trip</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="decore">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://s3-alpha-sig.figma.com/img/1119/f8e8/79b2e4cb46bd33155639a62530f9a579?Expires=1692576000&Signature=ghHy2hUIJxnR2CFELAoXb1-Ga-Zn-D5kuU2Xcf9wD6BrNxygzI3lIpa-DUpV-d6O2RVHdVHCXhxQMhSbrfhtq0-LYAxPSlrKtVL1AYUVyO87leArLmDumoeQR5T3WJU3dwqwkIYqUKlT-GQJWIiCJI1pUiQ345Gcj~4ZHjZ~bgPxVfnz0f~KMJeyhuIMcMMTKwOp6I5-e189i0vw-fnmMxJNdufwri5Gpir71tj5i1Pv-C38HVY9WvrUMtwqEXSNF4pwIrWpQ2u3yqaXnaMR19kpfN-j-GXsJe5OllSKMsK2s-JUb-krTKPP9lalFk0F7r~LUokF~mufIjnJ~B1Wng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
                <Card.Body>
                  <Card.Title>
                    <Row>
                      <Col>
                        <span>Full Europe</span>
                      </Col>
                      <Col style={{ textAlign: "right" }}>
                        <span>$15k</span>
                      </Col>
                    </Row>
                  </Card.Title>
                  <Card.Text>
                    <FontAwesomeIcon icon={faLocationArrow} />
                    <span>28 Days Trip.</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default Topsellings;
