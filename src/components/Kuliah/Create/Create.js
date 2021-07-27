import React, { useState, useContext } from "react";
import "./Create.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { KuliahContext } from "../KuliahContext/KuliahContext";

const Create = (props) => {
  // console.log('dataUser', dataUser)
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const history = useHistory()

  const [users, setUser] = useContext(KuliahContext);

  const updateId = (e) => {
    setId(e.target.value);
    console.log(id)
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePosition = (e) => {
    setPosition(e.target.value);
  };

  const addUser = (e) => {
      e.preventDefault();
      setUser([...users, {id:id, name:name, position:position}])
  }

  return (
      <Container className="bg-white buat-matkul-wrapper px-4">
        <Row className="">
          <Col>
            <Form onSubmit={addUser}>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="kode">Kode Matakuliah</Form.Label>
                <Form.Control
                  id="kode"
                  type="text"
                  name="id"
                  value={id}
                  onChange={updateId}
                  placeholder="Enter Kode"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="matkul">Nama Matakuliah</Form.Label>
                <Form.Control
                  id="matkul"
                  type="text"
                  name="name"
                  value={name}
                  onChange={updateName}
                  placeholder="Enter Nama Matakuliah"
                />
              </Form.Group>

              <Form.Group className="">
                <Form.Label htmlFor="jml-peserta">Jumlah Peserta</Form.Label>
                <Form.Control
                  id="jml-peserta"
                  type="text"
                  name="position"
                  value={position}
                  onChange={updatePosition}
                  placeholder="Enter Jumlah"
                />
              </Form.Group>

              <div className="mt-4">

                <Button className="" onClick={props.closeModal} variant="primary" type="submit">
                  Tambah Kuliah
                </Button>

                <Button className="btn-batal" onClick={() => history.goBack()} variant="secondary" type="submit">
                  Batal
                </Button>
              </div>
              
              
            </Form>
          </Col>
        </Row>
      </Container>
  );
};

export default Create;