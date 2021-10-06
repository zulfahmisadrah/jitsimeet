import React, { useState, useContext } from "react";
// import "./Tambah.css";
import { Button, Form } from "react-bootstrap";
import { KelasContext } from "../KelasContext/KelasContext";

const EditDetailMatkul = (props) => {
  const pertemuan = props.data;

  const [id, setId] = useState(pertemuan.id);
  const [name, setName] = useState(pertemuan.name);
  const [position, setPosition] = useState(pertemuan.position);

  const [kelass, setKelas] = useContext(KelasContext);

  const updateId = (e) => {
    setId(e.target.value);
    const edited_id = id;
    pertemuan.id = edited_id;
  };

  const updateName = (e) => {
    setName(e.target.value);
    const edited_name = name;
    pertemuan.name = edited_name;
  };

  const updatePosition = (e) => {
    setPosition(e.target.value);
    const edited_position = position;
    pertemuan.position = edited_position;
  };

  const addKelas = (e) => {
    e.preventDefault();
    pertemuan.id = id;
    pertemuan.name = name;
    pertemuan.position = position;

    return props.onHide();
  };

  console.log(props);

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

export default EditDetailMatkul;
