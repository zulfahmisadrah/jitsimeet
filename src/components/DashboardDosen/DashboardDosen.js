import React, { useState } from "react";
// import Nav from './Sidebar';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import classNames from "classnames";
import Reminder from "./Reminder";
import { Route } from "react-router-dom";
import ListKuliah from "../Kuliah/ListKuliah/ListKuliah";
import Read from "../Kuliah/Read/Read";
// import Calendar from "./Calendar";
// import Info from './Info';
import "./DashboardDosen.css";

function DashboardDosen(props) {
  const dataInfo = [
    {
      title: "Mata Kuliah",
      total: 4,
    },
    {
      title: "Kelas",
      total: 24,
    },
  ];

  const dataReminder = [
    {
      inisialMatkul: "kj",
      matkul: "Keamanan Jaringan",
      pertemuan: 4,
      jadwal: "Selasa, 24 November 2021",
      isDone: false,
    },
    {
      inisialMatkul: "m",
      matkul: "Multimedia",
      pertemuan: 5,
      jadwal: "Rabu, 23 November 2021",
      isDone: false,
    },
    {
      inisialMatkul: "pw",
      matkul: "Pemrograman Website",
      pertemuan: 4,
      jadwal: "Kamis, 25 November 2021",
      isDone: false,
    },
    {
      inisialMatkul: "pm",
      matkul: "Pemrograman Mobile",
      pertemuan: 4,
      jadwal: "Senin, 21 November 2021",
      isDone: false,
    },
  ];

  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  console.log(props);
  return (
    <div>
      <div className="AppDashboardDosen wrapper">
        <Sidebar toggle={toggleSidebar} isOpen={sidebarIsOpen} />

        {props.location.pathname === "/DashboardDosen" && (
          <div className={`content ${!sidebarIsOpen ? "is-open" : ""} w-100`}>
            <div className="dashboard-dosen-topbar">
              <div className="dash-avatar">
                <div className="dash-img-avatar">
                  <img
                    className="image-user"
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                    alt="dummy"
                  />
                </div>

                <div className="dash-desc">
                  <p className="username mb-0">Jhon Doe</p>
                  <p className="job-title mb-0">UI/UX Desainer</p>
                </div>
              </div>

              <div className="dash-icon">
                <div className="hamburger-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => toggleSidebar()}
                    style={{ marginRight: 0, marginLeft: 0, cursor: "pointer" }}
                  >
                    {!sidebarIsOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    )}
                  </svg>
                </div>

                <div className="notifikasi">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ width: 24, cursor: "pointer" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>

                <div className="setting">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ width: 24, cursor: "pointer" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <Row className="mb-3">
              <Col>
                <h3>Info</h3>
              </Col>
            </Row>

            <Row lg={3}>
              {dataInfo.map((data, i) => (
                <Col className="mb-4">
                  <div className="dash-card-wrapper">
                    <div className="initial-matkul-wrapper mb-0">
                      <div className="initial-matkul">
                        <span className="data-info-dosen">{data.total}</span>
                      </div>

                      <div className="desc-matkul">
                        <p className="mata-kuliah mb-0">Jumlah</p>
                        <p className="total-data-dosen mb-0">{data.title}</p>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            <Row className="mb-3">
              <Col>
                <h3>Reminder Pertemuan</h3>
              </Col>
            </Row>

            <Row lg={3}>
              {dataReminder.map((data, i) => (
                <Col className="mb-4">
                  <div className="dash-card-wrapper">
                    <div className="initial-matkul-wrapper">
                      <div className="initial-matkul">
                        <span className="">{data.inisialMatkul}</span>
                      </div>

                      <div className="desc-matkul">
                        <p className="mata-kuliah mb-0">{data.matkul}</p>
                        <p className="pertemuan-kuliah mb-0">
                          Pertemuan {data.pertemuan}
                        </p>
                        <p className="jadwal-kuliah mb-0">{data.jadwal}</p>
                        <p
                          className={`${
                            data.isDone ? "isDone" : "isNotDone"
                          } mb-0`}
                        >
                          &bull;{" "}
                          {data.isDone ? "Terlaksana" : "Belum Terlaksana"}
                        </p>
                      </div>
                    </div>

                    <div className="mb-0">
                      <Button variant="primary" className="mb-2" size="sm">
                        Meet
                      </Button>
                      <Button
                        variant="secondary"
                        className="mx-lg-2 mb-2"
                        size="sm"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            {/* <Reminder isOpen={!sidebarIsOpen} /> */}
            {/* <Calendar/> */}
            {/* <Info/> */}
          </div>
        )}

        <Route
          path="/DashboardDosen/kelas-dosen"
          render={(props) => (
            <ListKuliah isShowSidebar={toggleSidebar} isOpen={sidebarIsOpen} />
          )}
        />

        <Route
          path="/DashboardDosen/read/:id"
          render={(props) => (
            <Read
              isShowSidebar={toggleSidebar}
              isOpen={sidebarIsOpen}
              {...props}
            />
          )}
        />
      </div>
    </div>
  );
}

export default DashboardDosen;
