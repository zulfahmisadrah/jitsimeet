import React from "react";
import Header from "./Header";
import Feature from "./Features";
import Footer from "./Footer";
import './Style.css'

const Home = () => {
  return (
    <div className="Home" id="home">
      <Header />
      <Feature />
      <Footer />
    </div>
  );
};
export default Home;
