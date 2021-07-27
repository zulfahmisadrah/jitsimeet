import React, { useState } from "react";
import "./DashboardMhs.css";

import CardsMhs from "./CardsMhs";
import CardFourMhs from "./CardFourMhs";
import FooterMhs from "./FooterMhs";
import CardThreeMhs from "./CardThreeMhs";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import NavbarDashboardMhs from "../NavbarDashboardMhs";

const DashboardMhs = () => {
  const [checkScrollOnTop, setCheckScrollOnTop] = useState("transparent");

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setCheckScrollOnTop("dark");
    } else {
      setCheckScrollOnTop("transparent");
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div className="dashboard-mhs-wrapper">
      <NavbarDashboardMhs scrolling={checkScrollOnTop} />
      <div className="background-image-dashboard-mhs">
        <h2>Selamat Datang</h2>
        <p>Ulfah Rojiyyah</p>
      </div>
      <CardsMhs />
      <CardFourMhs />
      <CardThreeMhs />
      <FooterMhs />
    </div>
    // <div className="dashboard-mhs-wrapper">
    //   <NavbarDashboardMhs />
    //   <div className="dashboardmhs-wrapper">
    //     <div className="dashboardmhs">
    //       <h2>Selamat Datang</h2>
    //       <p>Ulfah Rojiyyah</p>
    //     </div>
    //   </div>
    //   <div className="features-wrapper">
    //     <CardsMhs />
    //     <CardFourMhs />
    //     <CardThreeMhs />
    //     <FooterMhs />
    //   </div>
    // </div>
  );
};
export default DashboardMhs;
