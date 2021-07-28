import React, { useEffect, useState } from "react";
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

const Sidebar = ({ isOpen, toggle, tesValue }) => {
  console.log(tesValue);
  return (
    // <div className={classNames("sidebar", { "is-open ": isOpen })}>
    <div className={`sidebar ${!tesValue ? "is-open" : "show-sidebar"}`}>
      <div className="sidebar-header">
        {/* <span
          color="info"
          onClick={toggle}
          style={{ color: "#fff", position: "fixed", right: 0 }}
        >
          &times;
        </span> */}
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
          onClick={() => isOpen(!tesValue)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <div className="d-flex justify-content-center">
          <img src={Logo} alt="" style={{ width: 100, marginTop: 25 }} />
        </div>
        <h5
          className="mb-0 text-white text-center"
          style={{ padding: "20px 20px" }}
        >
          Universitas Hasanuddin
        </h5>
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
              Keluar
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
