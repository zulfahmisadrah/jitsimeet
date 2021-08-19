import React, { useState, useContext } from "react";
import "./Tambah.css";
import { Button, Form } from "react-bootstrap";
import { KelasContext } from "../KelasContext/KelasContext";

const Tambah = (props) => {
  // const [id, setId] = useState(props.dataUser[0].id);
  // const [name, setName] = useState(props.dataUser[0].name);
  // const [position, setPosition] = useState(props.dataUser[0].position);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const [kelass, setKelas] = useContext(KelasContext);

  const updateId = (e) => {
    setId(e.target.value);
    console.log(id);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePosition = (e) => {
    setPosition(e.target.value);
  };

  const addKelas = (e) => {
    e.preventDefault();
    const data = {
      id,
      idMataKuliah: "332D4E3",
      name,
      position,
    };
    props.newValue(data);
    return props.onHide();
  };

  console.log(props.dataUser);

  return (
    <div className="Tambah">
      <Form onSubmit={addKelas}>
        <Form.Group className="mb-3">
          <Form.Label>Judul Pertemuan</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={id}
            onChange={updateId}
            placeholder="Enter Judul"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Waktu pertemuan</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={updateName}
            placeholder="Enter Waktu"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Jumlah Pertemuan</Form.Label>
          <Form.Control
            type="text"
            name="position"
            value={position}
            onChange={updatePosition}
            placeholder="Enter Jumlah"
          />
        </Form.Group>
        <Button
          variant="success"
          onClick={(e) => addKelas(e)}
          style={{marginRight: 12}}
        >
          Simpan
        </Button>
        <Button
          className="btn btn-secondary "
          variant="danger"
          onClick={() => props.onHide()}
        >
          Batal
        </Button>
      </Form>
    </div>
  );
};

export default Tambah;
