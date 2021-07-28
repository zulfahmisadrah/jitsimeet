import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { KuliahContext } from "../KuliahContext/KuliahContext";
import "./Edit.css";
import { useState } from "react";

const Edit = (props) => {
  const [users, setUser] = useContext(KuliahContext);
  const { id } = useParams();
  const user = users.filter((user) => user.id == id);

  const [name, setName] = useState(users[0].name);
  const [position, setPosition] = useState(users[0].position);
  const [idMatakuliah, setId] = useState(users[0].id);

  const editName = (e) => {
    setName(e.target.value);
    const edited_name = name;
    users[0].name = edited_name;
  };

  const editId = (e) => {
    setName(e.target.value);
    const edited_id = idMatakuliah;
    users[0].id = edited_id;
  };

  const editPosition = (e) => {
    users[0].position = e.target.value;
  };

  const editUser = (e) => {
    e.preventDefault();
    setUser([...users]);
  };

  return (
    <div className="">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Kode Matakuliah</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={id}
            onChange={editId}
            placeholder={users[0].id}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nama Matakuliah</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={editName}
            placeholder={users[0].name}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Jumlah Peserta</Form.Label>
          <Form.Control
            type="text"
            name="position"
            // value={position}
            onChange={editPosition}
            placeholder={users[0].position}
          />
        </Form.Group>

        <div className="mt-4 modal-edit-matkul">
          <Button
            onClick={(e) => {
              editUser(e);
              return props.onHide();
            }}
            className="btn btn-primary btn-edit-matkul"
            variant="primary"
            type="submit"
          >
            Simpan
          </Button>
          <Button
            className="btn btn-secondary "
            variant="secondary"
            onClick={() => props.closeModal()}
          >
            Kembali
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Edit;
