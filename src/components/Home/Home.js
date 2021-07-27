import React from "react";
import Header from "./Header";
import Feature from "./Features";
import About from "./About";
import aboutimage from "../../images/contact.svg";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="Home" id="home">
      <Header />
      <Feature />
      {/* <About image={aboutimage} title='Come yoo' button='Get The Contact'/> */}
      <Footer />
    </div>
  );
};
export default Home;
