import React, { useContext, useState, useEffect } from "react";
import "./ListKuliah.css";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { KuliahContext } from "../KuliahContext/KuliahContext";
import { Modal } from "react-bootstrap";
import Create from "../Create/Create";

import Edit from "../Edit/Edit";

const ListKuliah = (props) => {
  const [users, setUser] = useContext(KuliahContext);

  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleShowEdit = () => setShowEdit(true);
  const handleCloseEdit = () => setShowEdit(false);

  console.log(props);

  return (
    <div
      className={`bg-white p-4 ${
        props.isOpen ? "list-matkul-wrapper" : "w-100"
      }`}
    >
      <div className="hamburger-icon mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={props.isShowSidebar}
          style={{ cursor: "pointer" }}
        >
          {props.isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>

        <h4 className="">Tabel Daftar Mata Kuliah</h4>
      </div>
      <Row>
        <Col>
          <Button
            onClick={handleShow}
            className="btn btn-success d-flex"
            data-toggle="modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ width: 24, marginRight: 4 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span>Tambah Kuliah</span>
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Table responsive striped bordered>
            <thead>
              <tr>
                <th>Kode Matakuliah</th>
                <th>Nama Matakuliah</th>
                <th>Jumlah Peserta</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.position}</td>
                  <td>
                    <Link to={"read/" + user.id}>
                      <Button className="m-2" variant="success">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          style={{ width: 24, marginRight: 4 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        <span>Detail</span>
                      </Button>
                    </Link>
                    {/* <Link to={"/edit/"+user.id}> */}
                    <Button
                      className="m-2"
                      onClick={handleShowEdit}
                      variant="info"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        style={{ width: 24, marginRight: 4 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      <span>Edit</span>
                    </Button>
                    {/* </Link> */}
                    <Link to={"/delete/" + user.id}>
                      <Button className="m-2" variant="danger">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          style={{ width: 24, marginRight: 4 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        <span>Delete</span>
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Kuliah</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Create closeModal={handleClose} />
        </Modal.Body>
      </Modal>

      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Mata Kuliah</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Edit closeModal={handleCloseEdit} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ListKuliah;
