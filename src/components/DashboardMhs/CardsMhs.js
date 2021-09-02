import React from "react";
import "./CardsMhs.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import keamananinternet from "../../images/keamananinternet.svg";
import multimedia from "../../images/multimedia.svg";
import website from "../../images/website.svg";
import pemrogramanmobile from "../../images/pemrogramanmobile.svg";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function CardsMhs(props) {
  const dataReminderMhs = [
    {
      icon: keamananinternet,
      matkul: "Keamanan Internet",
      pertemuan: 4,
      jadwal: "Senin, 20 September 2021",
      isDone: false,
      id: "1DE2231"
    },
    {
      icon: multimedia,
      matkul: "Multimedia",
      pertemuan: 5,
      jadwal: "Selasa, 21 September 2021",
      isDone: false,
      id: "32DD432"
    },
    {
      icon: website,
      matkul: "Pemrograman Website",
      pertemuan: 4,
      jadwal: "Rabu, 22 September 2021",
      isDone: false,
      id: "32DD434"
    },
    {
      icon: pemrogramanmobile,
      matkul: "Pemrograman Mobile",
      pertemuan: 4,
      jadwal: "Kamis, 23 September 2021",
      isDone: false,
      id: "32DD435"
    },
  ];

  const markedDate = [
    new Date(2021, 8, 20), 
    new Date(2021, 8, 21),
    new Date(2021, 8, 22),
    new Date(2021, 8, 23)
  ];

  return (
    <div className="py-5 bg-white cardmhs-wrapper">
      <Container>
        <h3 className="mb-5">Reminder Pertemuan</h3>
        <Row>
              <Col md={8}>
                <Row>
                  {dataReminderMhs.map((data, i) => (
                    <Col md={6} className="mb-4">
                      <div className="dash-card-wrapper">
                        <div className="initial-matkul-wrapper">
                          <div className="initial-matkul">
                            <div className="dash-img-matkul">
                              <img
                                className="image-matkul"
                                src={data.icon}
                                alt={data.matkul}
                              />
                            </div>
                          </div>

                          <div className="desc-matkul">
                            <p className="mata-kuliah mb-0">{data.matkul}</p>
                            <p className="pertemuan-kuliah mb-0">
                              Pertemuan {data.pertemuan}
                            </p>
                            <p className="jadwal-kuliah mb-0">{data.jadwal}</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col md={4}>
                <Calendar 
                  value={new Date()} 
                  tileClassName={({ date }) => {
                    if(markedDate.find(x => x.getTime()===date.getTime()))
                      return 'highlight'
                    }
                  }
                />
              </Col>
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
