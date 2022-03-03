import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TwilioLogo } from "../../Icons";
import NavbarItem from "./NavbarItem";

export default function Header() {

  return (
    <Navbar bg="white" expand="md">
      <Container fluid>
        <Navbar.Brand>
          <div
            className="navbar-logo d-inline-block align-top">
            <TwilioLogo />
          </div>
          <Link className="navbar-brand" to='/'>Twilio React App</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <NavbarItem to="/" title="Home" />
            <NavbarItem to="/page1" title="Page 1" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}