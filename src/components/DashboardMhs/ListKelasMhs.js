import React from "react";
import {
  Col,
  Container,
  FormControl,
  InputGroup,
  Pagination,
  Row,
} from "react-bootstrap";
import NavbarDashboardMhs from "../NavbarDashboardMhs";
import CardFourItemMhs from "./CardFourItemMhs";
import "./ListKelasMhs.css";

import kelas3 from "../../images/card3-mhs.svg";
import kelas1 from "../../images/card1-mhs.svg";
import kelas2 from "../../images/card2-mhs.svg";
import kelas4 from "../../images/card4-mhs.svg";

export default function ListKelasMhs(props) {
  const data = [
    {
      src: kelas3,
      text: "Aljabar",
      path: "/DetailKelasMhs",
      pertemuan: [
        {
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
          text: "Pertemuan ke-1",
          text2: "Selasa, 13 Maret, 10:30 WIB",
          path: "/ListkuliahMhs",
          isDone: true,
        },
        {
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
          text: "Pertemuan ke-2",
          text2: "Rabu, 14 Maret, 12:30 WIB",
          path: "/ListkuliahMhs",
          isDone: false,
        },
        {
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
          text: "Pertemuan ke-3",
          text2: "Senin, 12 Maret, 07:30 WIB",
          path: "/ListkuliahMhs",
          isDone: false,
        },
        {
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
          text: "Pertemuan ke-3",
          text2: "Senin, 12 Maret, 07:30 WIB",
          path: "/ListkuliahMhs",
          isDone: false,
        },
      ],
    },
    {
      src: kelas1,
      text: "Multimedia",
      path: "/DetailKelasMhs",
      pertemuan: [
        {
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
          text: "Pertemuan ke-1",
          text2: "Selasa, 13 Maret, 10:30 WIB",
          path: "/ListkuliahMhs",
          isDone: false,
        },
        {
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
          text: "Pertemuan ke-2",
          text2: "Rabu, 14 Maret, 12:30 WIB",
          path: "/ListkuliahMhs",
          isDone: false,
        },
        {
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
          text: "Pertemuan ke-3",
          text2: "Senin, 12 Maret, 07:30 WIB",
          path: "/ListkuliahMhs",
          isDone: false,
        },
      ],
    },
    {
      src: kelas2,
      text: "Keamanan Jaringan",
      path: "/DetailKelasMhs",
      pertemuan: [
        {
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
          text: "Pertemuan ke-1",
          text2: "Selasa, 13 Maret, 10:30 WIB",
          path: "/ListkuliahMhs",
          isDone: true,
        },
        {
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
          text: "Pertemuan ke-2",
          text2: "Rabu, 14 Maret, 12:30 WIB",
          path: "/ListkuliahMhs",
          isDone: false,
        },
        {
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
          text: "Pertemuan ke-3",
          text2: "Senin, 12 Maret, 07:30 WIB",
          path: "/ListkuliahMhs",
          isDone: false,
        },
      ],
    },
    {
      src: kelas4,
      text: "Kecerdasan Buatan",
      path: "/DetailKelasMhs",
      pertemuan: [
        {
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
          text: "Pertemuan ke-1",
          text2: "Selasa, 13 Maret, 10:30 WIB",
          path: "/ListkuliahMhs",
          isDone: true,
        },
        {
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
          text: "Pertemuan ke-2",
          text2: "Rabu, 14 Maret, 12:30 WIB",
          path: "/ListkuliahMhs",
          isDone: false,
        },
        {
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
          text: "Pertemuan ke-3",
          text2: "Senin, 12 Maret, 07:30 WIB",
          path: "/ListkuliahMhs",
          isDone: false,
        },
        {
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
          text: "Pertemuan ke-3",
          text2: "Senin, 12 Maret, 07:30 WIB",
          path: "/ListkuliahMhs",
          isDone: false,
        },
        {
          src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
          text: "Pertemuan ke-3",
          text2: "Senin, 12 Maret, 07:30 WIB",
          path: "/ListkuliahMhs",
          isDone: false,
        },
      ],
    },
  ];

  return (
    <div className="">
      <NavbarDashboardMhs isDark />
      <Container className="daftar-kelas-wrapper">
        <Row className="my-5 d-flex align-items-center">
          <Col>
            <h1 className="" style={{ textAlign: "left" }}>
              Daftar Kelas Mahasiswa
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
        <Row xs={1} md={2} lg={3}>
          {data.map((item, i) => (
            <CardFourItemMhs
              noHover
              key={i}
              data={item}
              src={item.src}
              text={item.text}
              // text2={item.text2}
              textBtn=" "
              label={item.label}
              path={`${item.path}/${item.text}`}
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
    // <div>
    //   <h1>daftar kelas mahasiswa</h1>
    // </div>
  );
}
