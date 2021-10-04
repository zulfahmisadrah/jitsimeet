import React, { useContext, useState, useEffect } from "react";
import "./ListKuliah.css";
import {
  Button,
  Col,
  Form,
  InputGroup,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { KuliahContext } from "../KuliahContext/KuliahContext";
import { Modal } from "react-bootstrap";
import Create from "../Create/Create";

import Edit from "../Edit/Edit";

const ListKuliah = (props) => {
  const [users, setUser] = useContext(KuliahContext);
  const [filteredData, setFilteredData] = useState([]);
  const [active, setActive] = useState(1);

  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    setFilteredData(users)
  }, [users])

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleShowEdit = (data) => {
    setSelectedData(data)
    setShowEdit(true);
  }
  const handleCloseEdit = () => setShowEdit(false);
  const handleCloseDelete = () => setShowDelete(true);

  const confirmDeleteAction = (id) => {
    console.log("id", id);
    const user = users.filter((user) => user.id !== id);
    setUser([...user]);
    setShowDelete(false);
  };

  const itemsPerPage = 8
  const totalPages = Math.ceil(filteredData.length/itemsPerPage)
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={() => setActive(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  const offset = (active-1)*itemsPerPage
  const limit = offset+itemsPerPage

  const handleSubmit = (e) => {
    e.preventDefault()
    const keyword = e.target.keyword.value.toLowerCase()
    const filteredData = users.filter(item => item.name.toLowerCase().includes(keyword))
    setFilteredData(filteredData)
  }

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
          {!props.isOpen ? (
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

        <h4 className="mb-0">Daftar Mata Kuliah</h4>
      </div>
      <Row className="d-flex align-items-center">
        <Col>
          <Button
            onClick={handleShow}
            className="d-flex"
            data-toggle="modal"
            variant="primary"
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
        <Col lg={3}>
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

      <div className="d-flex flex-column justify-content-between">
        <Row>
          <Col>
            <Table responsive striped bordered>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Kode Matakuliah</th>
                  <th>Nama Matakuliah</th>
                  <th>Jumlah Peserta</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.slice(offset, limit).map((user, index) => (
                  <tr>
                    <td className="text-center">{offset+index+1}</td>
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
                        onClick={() => handleShowEdit(user)}
                        variant="warning"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          style={{ width: 24, marginRight: 4}}
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
                      <Button onClick={() => handleCloseDelete(user.id)}
                        className="m-2"
                        variant="danger">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                          </svg>
                          <span> Hapus</span>
                      </Button>

                      <Modal show={showDelete} onHide={() => setShowDelete(false)}>
                      <Modal.Header closeButton>
                        <Modal.Title>Hapus</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <p>Yakin Mau Hapus ?</p>
                        <Button onClick={() => confirmDeleteAction(user.id)}>
                          Ya
                        </Button>{" "}
                        <Button
                          class="btn btn-secondary"
                          variant="danger"
                          onClick={() => setShowDelete(false)}
                        >
                          Tidak
                        </Button>
                      </Modal.Body>
                    </Modal>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-end">
            <Pagination>
              <Pagination.Prev onClick={() => active > 1 ? setActive(active-1) : setActive(active)}></Pagination.Prev>
              {items}
              <Pagination.Next onClick={() => active < totalPages ? setActive(active+1) : setActive(active)}></Pagination.Next>
            </Pagination>
          </Col>
        </Row>
      </div>

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
          <Edit closeModal={handleCloseEdit} data={selectedData} onHide={handleCloseEdit}/>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ListKuliah;
