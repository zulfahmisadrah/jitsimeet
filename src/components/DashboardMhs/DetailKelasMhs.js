import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import NavbarDashboardMhs from "../NavbarDashboardMhs";
import CardFourItemMhs from "./CardFourItemMhs";
import CardThreeItemMhs from "./CardThreeItemMhs";

function DetailKelasMhs(props) {
  console.log(props);
  const { state } = useLocation();
  console.log(state);

  return (
    <div className="daftar-kelas-wrapper" style={{ position: "relative" }}>
      <NavbarDashboardMhs isDark />
      <Container>
        <h1 className="my-4">List Kelas</h1>
        <Row xs={1} md={2} lg={3}>
          {state.dataKuliah.pertemuan.map((data, i) => (
            <CardFourItemMhs
              withBadge
              detaiKuliah
              terlaksana={data.isDone}
              src={data.src}
              text={data.text}
              text2={data.text2}
              path={data.path}
              terlaksana={data.isDone}
            />
          ))}
        </Row>
      </Container>
    </div>
    // <div className="cards">
    //   <h1>List Kelas</h1>
    //   <div className="cards__container">
    //     <div className="cards__wrapper">
    //       <ul className="cards__items">
    //         <CardThreeItemMhs
    //           src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
    //           text="Pertemuan ke-4"
    //           text2="Selasa, 13 Maret, 10:30 WIB"
    //           label="Aljabar"
    //           path="/ListKulaihMhs"
    //         />
    //         <CardThreeItemMhs
    //           src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
    //           text="Pertemuan ke-3"
    //           text2="Selasa, 13 Maret, 10:30 WIB"
    //           label="Multimedia"
    //           path="/ListKuliahMhs"
    //         />
    //         <CardThreeItemMhs
    //           src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
    //           text="Pertemuan ke-9"
    //           text2="Selasa, 13 Maret, 10:30 WIB"
    //           label="Keamanan internet"
    //           path="/ListKuliahMhs"
    //         />
    //         <CardThreeItemMhs
    //           src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
    //           text="Pertemuan ke-9"
    //           text2="Selasa, 13 Maret, 10:30 WIB"
    //           label="Keamanan internet"
    //           path="/ListKuliahMhs"
    //         />
    //       </ul>
    //       <ul className="cards__items">
    //         <CardThreeItemMhs
    //           src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
    //           text="Pertemuan ke-4"
    //           text2="Selasa, 13 Maret, 10:30 WIB"
    //           label="Aljabar"
    //           path="/ListKulaihMhs"
    //         />
    //         <CardThreeItemMhs
    //           src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
    //           text="Pertemuan ke-3"
    //           text2="Selasa, 13 Maret, 10:30 WIB"
    //           label="Multimedia"
    //           path="/ListKuliahMhs"
    //         />
    //         <CardThreeItemMhs
    //           src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
    //           text="Pertemuan ke-9"
    //           text2="Selasa, 13 Maret, 10:30 WIB"
    //           label="Keamanan internet"
    //           path="/ListKuliahMhs"
    //         />
    //         <CardThreeItemMhs
    //           src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
    //           text="Pertemuan ke-9"
    //           text2="Selasa, 13 Maret, 10:30 WIB"
    //           label="Keamanan internet"
    //           path="/ListKuliahMhs"
    //         />
    //       </ul>
    //       <ul className="cards__items">
    //         <CardThreeItemMhs
    //           src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
    //           text="Pertemuan ke-4"
    //           text2="Selasa, 13 Maret, 10:30 WIB"
    //           label="Aljabar"
    //           path="/ListKulaihMhs"
    //         />
    //         <CardThreeItemMhs
    //           src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
    //           text="Pertemuan ke-3"
    //           text2="Selasa, 13 Maret, 10:30 WIB"
    //           label="Multimedia"
    //           path="/ListKuliahMhs"
    //         />
    //         <CardThreeItemMhs
    //           src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
    //           text="Pertemuan ke-9"
    //           text2="Selasa, 13 Maret, 10:30 WIB"
    //           label="Keamanan internet"
    //           path="/ListKuliahMhs"
    //         />
    //         <CardThreeItemMhs
    //           src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
    //           text="Pertemuan ke-9"
    //           text2="Selasa, 13 Maret, 10:30 WIB"
    //           label="Keamanan internet"
    //           path="/ListKuliahMhs"
    //         />
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
}

export default DetailKelasMhs;
