import React, {useState, useEffect} from "react";
import {
  Col,
  Container,
  Form,
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
  const listData = state?.dataKuliah.pertemuan || []
  const [filteredData, setFilteredData] = useState([]);
  const [active, setActive] = useState(1);

  useEffect(() => {
    setFilteredData(listData)
  }, [listData])

  const totalPages = Math.ceil(listData.length/10)
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
    const filteredData = listData.filter(item => item.text.toLowerCase().includes(keyword))
    setFilteredData(filteredData)
  }

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
        {/* <h1 className="my-4">Kelas&nbsp;{state.dataKuliah.text}</h1> */}
        <Row xs={1} md={2} lg={3}>
        {filteredData.slice(offset, limit).map((data, i) => (
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
              <Pagination.Prev onClick={() => active > 1 ? setActive(active-1) : setActive(active)}></Pagination.Prev>
              {items}
              <Pagination.Next onClick={() => active < totalPages ? setActive(active+1) : setActive(active)}></Pagination.Next>
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
