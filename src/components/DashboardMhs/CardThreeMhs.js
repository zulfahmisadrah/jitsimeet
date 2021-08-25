import React from "react";
import { Container, Row } from "react-bootstrap";
import CardFourItemMhs from "./CardFourItemMhs";
import CardThreeItemMhs from "./CardThreeItemMhs";

import cardMhs3 from "../../images/card3-mhs.svg";
import cardMhs4 from "../../images/card4-mhs.svg";
import cardMhs5 from "../../images/card5-mhs.svg";
import cardMhs6 from "../../images/card6-mhs.svg";

function CardThreeMhs() {
  const dataKelasMhs = [
    {
      src: cardMhs4,
      text: "Pertemuan ke-2",
      text2: "Selasa, 13 Maret, 10:30 WIB",
      label: "Aljabar",
      path: "/ListkuliahMhs",
      isDone: false,
    },
    {
      src: cardMhs5,
      text: "Pertemuan ke-4",
      text2: "Rabu, 14 Maret, 12:30 WIB",
      label: "Multimedia",
      path: "/ListkuliahMhs",
      isDone: false,
    },
    {
      src: cardMhs6,
      text: "Pertemuan ke-1",
      text2: "Senin, 12 Maret, 07:30 WIB",
      label: "Keamanan Jaringan",
      path: "/ListkuliahMhs",
      isDone: false,
    },
  ];

  return (
    <div className="bg-white cardmhs-wrapper" id="kelas-mhs">
      <Container className="py-5 bg-white">
        <h3 className="mb-5">Kelas</h3>
        <Row xs={1} md={2} lg={3} className="g-4">
          {dataKelasMhs.map((data, i) => (
            <CardFourItemMhs
              withBadge
              detaiKuliah
              terlaksana={data.isDone}
              src={data.src}
              text={data.text}
              text2={data.text2}
              path={data.path}
            />
          ))}
        </Row>
      </Container>
    </div>
    // <>
    //     <div className='cards'>
    //         <h1>Kelas</h1>
    //             <div className='cards__container'>
    //                 <div className='cards__wrapper'>
    //                     <ul className='cards__items'>
    //                         <CardThreeItemMhs
    //                         src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
    //                         text='Pertemuan ke-4'
    //                         text2= 'Selasa, 13 Maret, 10:30 WIB'
    //                         label='Aljabar'
    //                         path='/ListKulaihMhs'
    //                         />
    //                         <CardThreeItemMhs
    //                         src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
    //                         text='Pertemuan ke-3'
    //                         text2= 'Selasa, 13 Maret, 10:30 WIB'
    //                         label='Multimedia'
    //                         path='/ListKuliahMhs'
    //                         />
    //                         <CardThreeItemMhs
    //                         src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
    //                         text='Pertemuan ke-9'
    //                         text2= 'Selasa, 13 Maret, 10:30 WIB'
    //                         label='Keamanan internet'
    //                         path='/ListKuliahMhs'
    //                         />
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
    // </>
  );
}

export default CardThreeMhs;
