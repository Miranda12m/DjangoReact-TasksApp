import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";

function Header() {
  return (
    <Navbar bg="primary" variant="primary" expand="lg" collapseOnSelect>
      <Container>
        <Link to="/main" className="nav-link">
          <Navbar.Brand>
            <img src={logo2} alt="Hapag-Lloyd Logo" style={{ width: "70px" }} />
            <span style={{ color: "Azure" }}>
              <strong>Main</strong>
            </span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/tasks" className="nav-link">
              <img
                src={logo}
                alt="Hapag-Lloyd Logo"
                style={{ width: "70px" }}
              />
              <span style={{ color: "Azure" }}>
                <strong>Tasks</strong>
              </span>
            </Link>
            <Link to="/tasks-create" className="nav-link">
              <img
                src={logo3}
                alt="Hapag-Lloyd Logo"
                style={{ width: "70px" }}
              />
              <span style={{ color: "Azure" }}>
                <strong>Create</strong>
              </span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
