import React, {useState, useEffect} from "react";
import {
  Col,
  Container,
  Form,
  InputGroup,
  Pagination,
  Row,
} from "react-bootstrap";
import NavbarDashboardMhs from "../NavbarDashboardMhs";
import CardFourItemMhs from "./CardFourItemMhs";
import "./ListKelasMhs.css";

import aljabarlinear from "../../images/aljabarlinear.svg";
import multimedia from "../../images/multimedia_mhs.svg";
import keamananjaringan from "../../images/keamananjaringan.svg";
import kecerdasanbuatan from "../../images/kecerdasanbuatan.svg";
import programmobile from "../../images/programmobile.svg";
import programwebsite from "../../images/programwebsite.svg";
import datamining from "../../images/datamining.svg";
import cloudcomputing from "../../images/cloudcomputing.svg";
import aljabarlinear1 from "../../images/aljabarlinear1.jpeg";
import aljabarlinear2 from "../../images/aljabarlinear2.jpeg";
import aljabarlinear3 from "../../images/aljabarlinear3.jpeg";
import aljabarlinear4 from "../../images/aljabarlinear4.jpeg";
import multimedia1 from "../../images/multimedia1.jpeg";
import multimedia2 from "../../images/multimedia2.jpeg";
import multimedia3 from "../../images/multimedia3.jpeg";
import multimedia4 from "../../images/multimedia4.jpeg";
import kemananinternet1 from "../../images/kemananinternet1.jpeg";
import kemananinternet2 from "../../images/kemananinternet2.jpeg";
import kemananinternet3 from "../../images/kemananinternet3.jpeg";
import kemananinternet4 from "../../images/kemananinternet4.jpeg";


export default function ListKelasMhs(props) {
  const data = [
    {
      src: aljabarlinear,
      text: "Aljabar Linear",
      path: "/DetailKelasMhs",
      pertemuan: [
        {
          src: aljabarlinear1,
          text: "Pertemuan ke-1",
          text2: "Selasa, 13 Maret, 10:30 WIB",
          path: "/ListkuliahMhs",
          isDone: true,
        },
        {
          src: aljabarlinear2,
          text: "Pertemuan ke-2",
          text2: "Rabu, 14 Maret, 12:30 WIB",
          path: "/ListkuliahMhs",
          isDone: false,
        },
        {
          src: aljabarlinear3,
          text: "Pertemuan ke-3",
          text2: "Senin, 12 Maret, 07:30 WIB",
          path: "/ListkuliahMhs",
          isDone: false,
        },
        {
          src: aljabarlinear4,
          text: "Pertemuan ke-3",
          text2: "Senin, 12 Maret, 09:30 WIB",
          path: "/ListkuliahMhs",
          isDone: false,
        },
      ],
    },
    {
      src: multimedia,
      text: "Multimedia",
      path: "/DetailKelasMhs",
      pertemuan: [
        {
          src: multimedia1,
          text: "Pertemuan ke-1",
          text2: "Selasa, 13 Maret, 10:30 WIB",
          path: "/ListkuliahMhs",
          isDone: false,
        },
        {
          src: multimedia2,
          text: "Pertemuan ke-2",
          text2: "Rabu, 14 Maret, 12:30 WIB",
          path: "/ListkuliahMhs",
          isDone: false,
        },
        {
          src: multimedia3,
          text: "Pertemuan ke-3",
          text2: "Senin, 12 Maret, 07:30 WIB",
          path: "/ListkuliahMhs",
          isDone: false,
        },
        {
          src: multimedia4,
          text: "Pertemuan ke-4",
          text2: "Senin, 12 Maret, 09:30 WIB",
          path: "/ListkuliahMhs",
          isDone: false,
        },
      ],
    },
    {
      src: keamananjaringan,
      text: "Keamanan Internet",
      path: "/DetailKelasMhs",
      pertemuan: [
        {
          src: kemananinternet1,
          text: "Pertemuan ke-1",
          text2: "Selasa, 13 Maret, 10:30 WIB",
          path: "/ListkuliahMhs",
          isDone: true,
        },
        {
          src: kemananinternet2,
          text: "Pertemuan ke-2",
          text2: "Rabu, 14 Maret, 12:30 WIB",
          path: "/ListkuliahMhs",
          isDone: false,
        },
        {
          src: kemananinternet3,
          text: "Pertemuan ke-3",
          text2: "Senin, 12 Maret, 07:30 WIB",
          path: "/ListkuliahMhs",
          isDone: false,
        },
        {
          src: kemananinternet4,
          text: "Pertemuan ke-4",
          text2: "Senin, 12 Maret, 09:30 WIB",
          path: "/ListkuliahMhs",
          isDone: false,
        },
      ],
    },
    {
      src: programmobile,
      text: "Pemrograman Mobile",
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
      src: programwebsite,
      text: "Pemrograman Web",
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
      src: datamining,
      text: "Data Mining",
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
      src: cloudcomputing,
      text: "Cloud Computing",
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
  ];

  const [filteredData, setFilteredData] = useState([]);
  const [active, setActive] = useState(1);

  useEffect(() => {
    setFilteredData(data)
  }, [])

  const totalPages = Math.ceil(filteredData.length/6)
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={() => setActive(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  const itemsPerPage = 6
  const offset = (active-1)*itemsPerPage
  const limit = offset+itemsPerPage

  const handleSubmit = (e) => {
    e.preventDefault()
    const keyword = e.target.keyword.value.toLowerCase()
    const filteredData = data.filter(item => item.text.toLowerCase().includes(keyword))
    setFilteredData(filteredData)
  }

  return (
    <div className="">
      <NavbarDashboardMhs />
      <Container className="daftar-kelas-wrapper">
        <Row className="my-5 d-flex align-items-center">
          <Col>
            <h1 className="" style={{ textAlign: "left" }}>
              Daftar Kelas Mahasiswa
            </h1>
          </Col>
          <Col lg={4}>
            <Form noValidate onSubmit={handleSubmit}>
              <InputGroup className="mb-3">
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
                <Form.Control
                  name="keyword"
                  placeholder="Pencarian..."
                  aria-label="Pencarian..."
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={3}>
        {filteredData.slice(offset, limit).map((item, i) => (
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
              <Pagination.Prev onClick={() => active > 1 ? setActive(active-1) : setActive(active)}></Pagination.Prev>
              {items}
              <Pagination.Next onClick={() => active < totalPages ? setActive(active+1) : setActive(active)}></Pagination.Next>
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
