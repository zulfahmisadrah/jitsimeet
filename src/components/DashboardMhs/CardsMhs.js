import React from "react";
import "./CardsMhs.css";
import CardItemMhs from "../DashboardMhs/CardItemMhs";
import CardFourItemMhs from "./CardFourItemMhs";
import { Container, Row } from "react-bootstrap";
import cardMhs1 from "../../images/card1-mhs.svg";
import cardMhs2 from "../../images/card2-mhs.svg";
import cardMhs3 from "../../images/card3-mhs.svg";
import cardMhs7 from "../../images/card7-mhs.svg";
import cardMhs8 from "../../images/card8-mhs.svg";

function CardsMhs(props) {
  const dataReminderMhs = [
    {
      src: cardMhs3,
      text: "Pertemuan ke-2",
      text2: "Selasa, 13 Maret, 10:30 WIB",
      label: "Aljabar",
      path: "/ListkuliahMhs",
      isDone: false,
    },
    {
      src: cardMhs7,
      text: "Pertemuan ke-4",
      text2: "Rabu, 14 Maret, 12:30 WIB",
      label: "Multimedia",
      path: "/ListkuliahMhs",
      isDone: false,
    },
    {
      src: cardMhs8,
      text: "Pertemuan ke-1",
      text2: "Senin, 12 Maret, 07:30 WIB",
      label: "Keamanan Jaringan",
      path: "/ListkuliahMhs",
      isDone: false,
    },
  ];

  return (
    <div className="py-5 bg-white cardmhs-wrapper">
      <Container>
        <h1 className="mb-5">Reminder Pertemuan</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {dataReminderMhs.map((data, i) => (
            <CardFourItemMhs
              key={i}
              withBadge
              detaiKuliah
              src={data.src}
              text={data.text}
              text2={data.text2}
              label={data.label}
              path={data.path}
            />
          ))}
        </Row>
      </Container>
    </div>

    // <div className='cards'>
    //   <h1>Reminder Pertemuan</h1>
    //   <div className='cards__container'>
    //     <div className='cards__wrapper'>
    //       <ul className='cards__items'>
    //         <CardItemMhs
    //           src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
    //           text='Pertemuan ke-4'
    //           text2= 'Selasa, 13 Maret, 10:30 WIB'
    //           label='Aljabar'
    //           path='/ListKulaihMhs'
    //         />
    //         <CardItemMhs
    //           src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
    //           text='Pertemuan ke-3'
    //           text2= 'Selasa, 13 Maret, 10:30 WIB'
    //           label='Multimedia'
    //           path='/ListKuliahMhs'
    //         />
    //         <CardItemMhs
    //           src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
    //           text='Pertemuan ke-9'
    //           text2= 'Selasa, 13 Maret, 10:30 WIB'
    //           label='Keamanan internet'
    //           path='/ListKuliahMhs'
    //         />
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
}

export default CardsMhs;
