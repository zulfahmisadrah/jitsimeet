import React, { useState } from "react";
import "./DashboardMhs.css";
import CardsMhs from "./CardsMhs";
import CardFourMhs from "./CardFourMhs";
import NavbarDashboardMhs from "../NavbarDashboardMhs";

const DashboardMhs = () => {
  const [checkScrollOnTop, setCheckScrollOnTop] = useState("transparent");

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setCheckScrollOnTop("light");
    } else {
      setCheckScrollOnTop("transparent");
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div className="dashboard-mhs-wrapper">
      <NavbarDashboardMhs scrolling={checkScrollOnTop} />
      <div className="background-image-dashboard-mhs" id="beranda">
        <h2>Selamat Datang</h2>
        <p>Ulfah</p>
      </div>
      <section>
        <CardsMhs />
      </section>
      <section>
        <CardFourMhs />
      </section>
    </div>
  
  );
};
export default DashboardMhs;
