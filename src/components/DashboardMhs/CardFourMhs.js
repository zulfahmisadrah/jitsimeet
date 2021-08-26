import React from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import CardFourItemMhs from "../DashboardMhs/CardFourItemMhs";
import aljabarlinear from "../../images/aljabarlinear.svg";
import multimedia from "../../images/multimedia_mhs.svg";
import keamananjaringan from "../../images/keamananjaringan.svg";
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

import cardMhs3 from "../../images/card3-mhs.svg";

function CardFourMhs(props) {
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
          isDone: false,
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
          isDone: false,
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
  ];

  const history = useHistory();

  return (
    <div className="cardmhs-wrapper-four" id="kuliah-mhs">
      <Container className="py-5">
        <h3 className="">Kuliah</h3>
        <p
          className="text-primary d-flex justify-content-end"
          style={{ cursor: "pointer" }}
          onClick={() => history.push("/list-kelas-mhs")}
        >
          <span>Selengkapnya</span> &nbsp;
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
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </p>
        <Row xs={1} md={2} lg={3} className="g-4">
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

          {/* <CardFourItemMhs
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
            text="Pertemuan ke-4"
            text2="Selasa, 13 Maret, 10:30 WIB"
            label="Aljabar"
            path="/ListkuliahMhs"
          />
          <CardFourItemMhs
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
            text="Pertemuan ke-4"
            text2="Selasa, 13 Maret, 10:30 WIB"
            label="Aljabar"
            path="/ListkuliahMhs"
          />
          <CardFourItemMhs
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
            text="Pertemuan ke-4"
            text2="Selasa, 13 Maret, 10:30 WIB"
            label="Aljabar"
            path="/ListkuliahMhs"
          />
          <CardFourItemMhs
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
            text="Pertemuan ke-4"
            text2="Selasa, 13 Maret, 10:30 WIB"
            label="Aljabar"
            path="/ListkuliahMhs"
          /> */}
        </Row>
      </Container>
      {/* <div class="container">
        <h1>Kuliah</h1>
            <div className='cards'>
                <div className="card-columns">
                    <CardFourItemMhs
                      src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
                      text='Pertemuan ke-4'
                      text2= 'Selasa, 13 Maret, 10:30 WIB'
                      label='Aljabar'
                      path='/ListKulaihMhs'
                    />
                    <CardFourItemMhs
                      src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
                      text='Pertemuan ke-4'
                      text2= 'Selasa, 13 Maret, 10:30 WIB'
                      label='Aljabar'
                      path='/ListKulaihMhs'
                    />
                    <CardFourItemMhs/>
                    <CardFourItemMhs/>
                    <CardFourItemMhs/>
                    <CardFourItemMhs/>
                </div>
            </div>
        </div> */}
    </div>
  );
}

export default CardFourMhs;
