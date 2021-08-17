import React from "react";
import { Link } from "react-router-dom";
import { NavItem, NavLink, Nav } from "reactstrap";
import SubMenu from "./SubMenu";
import "./Sidebar.css";
import MediaQuery from "react-responsive";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={`sidebar ${isOpen ? "is-open" : "show-sidebar"}`}>
      <div className="sidebar-header">
          <MediaQuery maxDeviceWidth={767}>
            <div className="sidebar-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{
                  color: "#fff",
                  position: "absolute",
                  right: 10,
                  top: 10,
                  width: 24,
                }}
                onClick={toggle}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </MediaQuery>
          
          <div className="d-flex justify-content-center">
            <div className="dash-img-avatar" style={{ marginTop: 25 }} >
              <img
                className="image-user"
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                alt="dummy"
              />
            </div>
          </div>
          <h5
            className="mb-0 text-white text-center"
            style={{ padding: "20px 20px 0 20px" }}
          >
            Jhon Doe
          </h5>
          <p
            className="text-white text-center"
            style={{ fontSize: 14, paddingBottom: 20 }}
          >
            UI/UX Desainer
          </p>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <SubMenu title="Home" items={submenus[0]} />
          <NavItem>
            <NavLink tag={Link} to={"/DashboardDosen"}>
              <i class="bi bi-columns-gap" style={{fontWeight: "bold", paddingRight: 7}}></i> Beranda
            </NavLink>
          </NavItem>
          <SubMenu title="Pages" items={submenus[1]} />
          <NavItem>
            <NavLink tag={Link} to={"/DashboardDosen/kelas-dosen"}>
              <i class="bi bi-book" style={{fontWeight: "bold", paddingRight: 7}}></i> Kuliah
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/"}>
              <i class="bi bi-box-arrow-left" style={{fontWeight: "bold", paddingRight: 7}}></i> Keluar
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
};

const submenus = [
  [
    {
      title: "Home 1",
      target: "Home-1",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      itle: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "Page 1",
      target: "Page-1",
    },
    {
      title: "Page 2",
      target: "Page-2",
    },
  ],
];

export default Sidebar;
