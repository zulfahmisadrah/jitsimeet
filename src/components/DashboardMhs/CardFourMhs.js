import React from "react";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import CardFourItemMhs from "../DashboardMhs/CardFourItemMhs";
import image1 from "../../images/box1.svg";
import image2 from "../../images/box2.svg";
import image3 from "../../images/box3.svg";

import cardMhs3 from "../../images/card3-mhs.svg";

function CardFourMhs(props) {
  const data = [
    {
      src: image1,
      text: "Aljabar",
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
      src: image2,
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
      src: image3,
      text: "Keamanan Jaringan",
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
