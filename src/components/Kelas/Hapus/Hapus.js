import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { KelasContext } from "../KelasContext/KelasContext";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import "./Hapus.css";

const Hapus = () => {
  const [kelass, setKelas] = useContext(KelasContext); 
  const { id } = useParams();

  const hapusKelas = (id) => {
    const kelas = kelass.filter((kelas) => kelas.id != id);
    setKelas([...kelas]);
  };

  return (
    <div>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Link to="/LihatKelas">
            <Button className="delete__btn" variant="info">Cancel</Button>
            <Button onClick={() => hapusKelas (id)} variant="danger">
              Delete
            </Button>
          </Link>
        </Modal.Footer>
        
    </div>
  );
};

export default Hapus;