import React from "react";
import {
  Col,
  Container,
  FormControl,
  InputGroup,
  Pagination,
  Row,
} from "react-bootstrap";
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
        <Row className="my-5 d-flex align-items-center">
          <Col>
            <h1 className="" style={{ textAlign: "left" }}>
              Kelas&nbsp;{state.dataKuliah.text}
            </h1>
          </Col>
          <Col lg={4}>
            <InputGroup className="">
              <InputGroup.Text id="basic-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ width: 24 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </InputGroup.Text>
              <FormControl
                placeholder="Pencarian..."
                aria-label="Pencarian..."
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Row>
        {/* <h1 className="my-4">Kelas&nbsp;{state.dataKuliah.text}</h1> */}
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

        <Row>
          <Col className="d-flex justify-content-center my-5">
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Col>
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
