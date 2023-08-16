import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

const pages = [
  "Destinations",
  "Hotels",
  "Flights",
  "Bookings",
  "Login",
  "Sign up",
];

function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="mb-3 mt-4">
        <Container>
          <Navbar.Brand href="#">
            <Image src={require("../../assets/img/Logo.png")} alt="Jaddo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {pages.map((page) => (
                  <Nav.Link
                    key={page}
                    href="#action1"
                    className="link-text-size nav-menu-link"
                  >
                    {page}
                  </Nav.Link>
                ))}
                <NavDropdown
                  title="EN"
                  id={`offcanvasNavbarDropdown-expand-lg`}
                  className="link-text-size"
                >
                  <NavDropdown.Item href="#action3">EN</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">RU</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">UR</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
