import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import SubMenu from "./SubMenu";
import "./Sidebar.css";
import Logo from "../../images/logo2.png";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      <div className="sidebar-header">
        <span
          color="info"
          onClick={toggle}
          style={{ color: "#fff", position: "absolute", right: 0 }}
        >
          &times;
        </span>
        <div className="d-flex justify-content-center">
          <img src={Logo} alt="" style={{ width: 150, marginTop: 25 }} />
        </div>
        <h4
          className="mb-0 text-white text-center"
          style={{ paddingBottom: 25 }}
        >
          Universitas Hasanuddin
        </h4>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <SubMenu title="Home" items={submenus[0]} />
          <NavItem>
            <NavLink tag={Link} to={"/DashboardDosen"}>
              {/* <FontAwesomeIcon className="mr-2" /> */}
              Beranda
            </NavLink>
          </NavItem>
          <SubMenu title="Pages" items={submenus[1]} />
          <NavItem>
            <NavLink tag={Link} to={"/DashboardDosen/kelas-dosen"}>
              {/* <FontAwesomeIcon className="mr-2" /> */}
              Kuliah
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/"}>
              {/* <FontAwesomeIcon className="mr-2" /> */}
              Logout
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
