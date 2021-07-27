import React from "react";
import { Container, Row } from "react-bootstrap";
import NavbarDashboardMhs from "../NavbarDashboardMhs";
import CardFourItemMhs from "./CardFourItemMhs";
import "./ListKelasMhs.css";

import kelas3 from "../../images/card3-mhs.svg";
import kelas1 from "../../images/card1-mhs.svg";
import kelas2 from "../../images/card2-mhs.svg";
import kelas4 from "../../images/card4-mhs.svg";

export default function ListKelasMhs() {
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
        <h1 className="my-4">Daftar Kelas Mahasiswa</h1>
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
      </Container>
    </div>
    // <div>
    //   <h1>daftar kelas mahasiswa</h1>
    // </div>
  );
}
