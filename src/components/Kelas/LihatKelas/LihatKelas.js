import React, { useContext, useState, useEffect } from "react";
import "./LihatKelas.css";
import {
  Button,
  Col,
  Form,
  InputGroup,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { KelasContext } from "../KelasContext/KelasContext";
import { Modal } from "react-bootstrap";
import Tambah from "../Tambah/Tambah";
import EditDetailMatkul from "../EditDetailMatkul";

const LihatKelas = (props) => {
  const [kelass, setKelas] = useContext(KelasContext);
  const [listKelas, setListKelas] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const { id } = useParams();
  const [active, setActive] = useState(1);

  console.log(props);

  useEffect(() => {
    const getKelasYangDifilter = kelass.filter(
      (data) => data.idMataKuliah === id
    );
    setListKelas(getKelasYangDifilter);
    setFilteredData(getKelasYangDifilter)
  }, []);

  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [selectKelas, setSelectKelas] = useState(null);
  const history = useHistory();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleShowEdit = (id) => {
    setShowEdit(true);
    const kelasSelect = listKelas.filter((data) => data.id === id);
    setSelectKelas(kelasSelect);
  };

  const handleCloseEdit = () => setShowEdit(false);
  const handleCloseDelete = () => setShowDelete(true);

  const handleKembali = () => {
    console.log("dipanggil 1");
    setListKelas(kelass);
  };

  const confirmDeleteAction = (id) => {
    console.log("id", id);
    const kelasSelect = filteredData.filter((data) => data.id !== id);
    console.log("kelasSelect", kelasSelect);
    setFilteredData(kelasSelect);
    setShowDelete(false);
  };

  console.log(selectKelas);
  
  const totalPages = Math.ceil(listKelas.length/10)
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
    const filteredData = listKelas.filter(item => item.name.toLowerCase().includes(keyword))
    setFilteredData(filteredData)
  }

  return (
    <>
      <div className="bg-white read-wrapper">
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

          <h4 className="mb-0">Detail Mata Kuliah</h4>
        </div>

        <Row className="d-flex align-items-center">
          <Col>
            <Button
              onClick={handleShow}
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
              <span>Tambah Pertemuan</span>
            </Button>

            <Button
              onClick={() => history.goBack()}
              className="btn-read-kembali"
              data-toggle="modal"
              variant="secondary"
            >
              <span>Kembali</span>
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

        <Row>
          <Col>
            <Table responsive striped bordered>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Judul Pertemuan</th>
                  <th>Waktu Pertemuan</th>
                  <th>Jumlah Siswa</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.slice(offset, limit).map((kelas, index) => (
                  <tr>
                    <td className="text-center">{offset+index+1}</td>
                    <td>{kelas.id}</td>
                    <td>{kelas.name}</td>
                    <td>{kelas.position}</td>
                    <td>
                      <Link to={"/Meet/" + kelas.id}>
                        <Button
                          className="btn btn-primary  mb-0 m-2"
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
                              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                          <span>Meet</span>
                        </Button>
                      </Link>

                      <Button
                        onClick={() => handleShowEdit(kelas.id)}
                        className="mb-0 m-2"
                        variant="warning"
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

                      <Button
                        onClick={() => handleCloseDelete(kelas.id)}
                        className="btn btn-danger mb-0 m-2"
                        variant="danger"
                      >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                          </svg>
                        <span> Hapus</span>
                      </Button>
                    </td>

                    <Modal show={showDelete} onHide={() => setShowDelete(false)}>
                      <Modal.Header closeButton>
                        <Modal.Title>Hapus</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <p>Yakin Mau Hapus ?</p>
                        <Button onClick={() => confirmDeleteAction(kelas.id)}>
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

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Tambah Pertemuan</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tambah
              dataUser={listKelas}
              newValue={(value) => {
                setListKelas([...listKelas, value]);
              }}
              onHide={handleClose}
            />
          </Modal.Body>
        </Modal>

        <Modal show={showEdit} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Pertemuan</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditDetailMatkul
              dataUser={selectKelas}
              isEdit={true}
              onHide={() => handleCloseEdit()}
            />
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default LihatKelas;
