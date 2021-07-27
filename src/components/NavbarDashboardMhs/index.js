import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../../images/logo.png";
import "./index.css";

export default function NavbarDashboardMhs(props) {
  console.log(props);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={`${props.isDark ? "dark" : props.scrolling}`}
      variant="dark"
      fixed={`${props.scrolling === "dark" ? "top" : ""}`}
      className="navbar-dashboard-mhs-container"
    >
      <Container>
        <Navbar.Brand href="/DashboardMhs">
          <img src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="px-4 collapse-bg"
        >
          <Nav className="me-auto" />
          <Nav>
            <Nav.Link href="/DashboardMhs">Beranda</Nav.Link>
            <Nav.Link href="#kuliah-mhs">Kuliah</Nav.Link>
            <Nav.Link href="#kelas-mhs">kelas</Nav.Link>
            <NavDropdown
              title={localStorage.getItem("username")}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#Logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
