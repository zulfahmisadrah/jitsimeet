import React, { useState, useContext } from "react";
import "./Tambah.css";
import { Button, Form } from "react-bootstrap";
import { KelasContext } from "../KelasContext/KelasContext";

const Tambah = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const [kelass, setKelas] = useContext(KelasContext);

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

  const addKelas = (e) => {
      e.preventDefault();
      setKelas([...kelass, {id:id, name:name, position:position}])

  }

  return (
    <div className="Tambah">
      <Form onSubmit={addKelas}>
        <Form.Group className="mb-3">
          <Form.Label>Judul Pertemuan a</Form.Label>
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
        <Button className="btn btn-primary" variant="primary" type="submit">
          Tambah Kelas
        </Button>
      </Form>
    </div>
  );
};

export default Tambah;