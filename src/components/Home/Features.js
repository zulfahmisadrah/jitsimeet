import React from "react";
import FeaturesBox from "./FeaturesBox";
import featureimage from "../../images/box1.svg";
import featureimage1 from "../../images/box2.svg";
import featureimage2 from "../../images/box3.svg";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CardFourItemMhs from "../DashboardMhs/CardFourItemMhs";
import CardFeatures from "./CardFeature";

function Feature() {
  return (
    <div id="features">
      <h1>Features</h1>
      <Container>
        <Row lg={3} className="d-flex justify-content-center">
          <CardFeatures
            img={featureimage1}
            title="Manajemen Kuliah Mahasiswa"
            desc="Membantu Mahasiswa Untuk Memonitoring Mata Kuliah Yang Diprogramkan"
          />
          <CardFeatures
            img={featureimage2}
            title="Manajemen Mata Kuliah Dosen"
            desc="Membantu Dosen Untuk Mengelola Mata Kuliah Yang Diajarkan"
          />
        </Row>
      </Container>
    </div>
  );
}

export default Feature;
