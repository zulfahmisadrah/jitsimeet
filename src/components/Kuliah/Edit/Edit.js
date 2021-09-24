import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Edit.css";
import { useState } from "react";

const Edit = (props) => {
  const matkul =  props.data;

  const [name, setName] = useState(matkul.name);
  const [position, setPosition] = useState(matkul.position);
  const [idMatakuliah, setId] = useState(matkul.id);

  const editName = (e) => {
    setName(e.target.value);
    const edited_name = name;
    matkul.name = edited_name;
  };

  const editId = (e) => {
    setId(e.target.value);
    const edited_id = idMatakuliah;
    matkul.id = edited_id;
  };

  const editPosition = (e) => {
    setPosition(e.target.value);
    const edited_position = position;
    matkul.position = edited_position;
  };

  const editUser = (e) => {
    e.preventDefault();
    matkul.id = idMatakuliah;
    matkul.name = name;
    matkul.position = position;
  };

  return (
    <div className="">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Kode Matakuliah</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={idMatakuliah}
            onChange={editId}
            placeholder={matkul.id}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nama Matakuliah</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={editName}
            placeholder={matkul.name}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Jumlah Peserta</Form.Label>
          <Form.Control
            type="text"
            name="position"
            value={position}
            onChange={editPosition}
            placeholder={matkul.position}
          />
        </Form.Group>

        <div className="mt-4 modal-edit-matkul">
          <Button
            onClick={(e) => {
              editUser(e);
              return props.onHide();
            }}
            className="btn btn-primary btn-edit-matkul"
            variant="success"
            type="submit"
          >
            Simpan
          </Button>
          <Button
            className="btn btn-secondary "
            variant="danger"
            onClick={() => props.closeModal()}
          >
            Batal
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Edit;
