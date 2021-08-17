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

  const [filteredData, setFilteredData] = useState([]);
  const [active, setActive] = useState(1);

  useEffect(() => {
    setFilteredData(data)
  }, [])

  const totalPages = Math.ceil(filteredData.length/10)
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={() => setActive(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  const itemsPerPage = 10
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
      <NavbarDashboardMhs isDark />
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
