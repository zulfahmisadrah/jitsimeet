import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { KuliahContext } from "../KuliahContext/KuliahContext";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import "./Delete.css";

const Delete = () => {
  const [users, setUser] = useContext(KuliahContext); 
  const { id } = useParams();

  const deleteUser = (id) => {
    const user = users.filter((user) => user.id != id);
    setUser([...user]);
  };

  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Link to="/ListKuliah">
            <Button onClick={() => deleteUser(id)} className="btn btn-danger" variant="danger">
              Delete
            </Button>
            <Button className="btn btn-secondary btn-delete-matkul" variant="secondary">Cancel</Button>
          </Link>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default Delete;