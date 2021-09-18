import React from "react";
import { useState } from "react";
import {
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import Logo from "../../images/logo.png";
import "./index.css";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function NavbarDashboardMhs(props) {
  const [showSearch, setShowSearch] = useState(false);

  console.log(props);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={`${props.isDark ? "dark" : props.scrolling}`}
      variant="light"
      fixed={`${props.scrolling === "light" ? "top" : ""}`}
      className="navbar-dashboard-mhs-container"
    >
      <Container>
        <Navbar.Brand><Link to="/DashboardMhs"></Link>
          {/* <img src={Logo} alt="" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="px-4 collapse-bg"
        >
          <Nav className="me-auto" />
          <Nav className="d-flex align-items-center">
            <Nav.Link><Link to="/DashboardMhs">Beranda</Link></Nav.Link>
            <Nav.Link><HashLink to="/DashboardMhs/#kuliah-mhs">Kuliah</HashLink></Nav.Link>
            {props.withSearch && (
              <div
                className={`d-flex align-items-center justify-content-center bg-dark`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mx-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ width: 24, color: "#C0C1B9", cursor: "pointer" }}
                  onClick={() => setShowSearch(!showSearch)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                {showSearch && (
                  <InputGroup size="sm" className="mx-2">
                    <FormControl
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      placeholder="Pencarian..."
                    />
                  </InputGroup>
                )}
              </div>
            )}

            <NavDropdown
              title={localStorage.getItem("username")}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item><Link to="/">Keluar</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
