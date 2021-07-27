import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { KelasContext } from "../KelasContext/KelasContext";
import "./Edit.css";
import { useState } from "react";

const EditKelas = () => {
  const [kelass, setKelas] = useContext(KelasContext);
  const { id } = useParams();
  const kelas = kelass.filter((kelas) => kelas.id == id);

  const [name, setName] = useState(kelas[0].name);
  const [position, setPosition] = useState(kelas[0].position);
  const [salary, setSalary] = useState(kelas[0].salary);
  
  
  const editName = (e) => {
    setName(e.target.value);
    const edited_name = name;
    kelas[0].name = edited_name;
  };

  const editPosition = (e) => {
    setPosition(e.target.value);
    const edited_position = position;
    kelas[0].position = edited_position;
  };

  const editSalary = (e) => {
    setSalary(e.target.value);
    const edited_salary = salary;
    kelas[0].salary = edited_salary;
  };

  const editKelas = (e) => {
    e.preventDefault();
    setKelas([...kelass]);
  };

  return (
    <div className="EditKelas">
      <Form>
        <Form.Group>
          <Form.Label>
            <h1>ID NO: {kelas[0].id}</h1>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={editName}
            placeholder={kelas[0].name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            name="position"
            // value={position}
            onChange={editPosition}
            placeholder={kelas[0].position}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="text"
            name="salary"
            // value={salary}
            onChange={editSalary}
            placeholder={kelas[0].salary}
          />
        </Form.Group>
        <Link to="/LihatKelas">
          <Button onSubmit={editKelas} variant="primary" type="submit">
            Edit Kelas
          </Button>
          </Link>
          <Link to="/LihatKelas">
          <Button className="action_btn" variant="info">
            Back to List Kelas
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default EditKelas;