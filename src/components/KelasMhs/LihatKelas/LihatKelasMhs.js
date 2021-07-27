import React, { useContext, useState, useEffect } from "react";
import "./LihatKelas.css";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { KelasContext } from "../KelasContext/KelasContext";

const LihatKelasMhs = () => {
  // const [kelass, setKelas] = useContext(KelasContext);
  const kelass = useContext(KelasContext);
  const [listKelas, setListKelas] = useState([]);
  console.log("kelass", KelasContext);

  useEffect(() => {
    console.log("dipanggil");
    const pathUrl = window.location.pathname.split("/");
    const getIdUser = Array.isArray(pathUrl) ? pathUrl[2] : "";
    const getKelasYangDifilter = kelass?.filter(
      (data) => data.idMataKuliah === getIdUser
    );
    setListKelas(getKelasYangDifilter);
    // effect
  }, []);

  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <Table striped bordered>
            <thead>
              <tr>
                <th>Judul Pertemuan</th>
                <th>Waktu Pertemuan</th>
                <th>Jumlah Siswa</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {listKelas?.map((kelas) => (
                <tr>
                  <td>{kelas.id}</td>
                  <td>{kelas.name}</td>
                  <td>{kelas.position}</td>
                  <td>
                    <Link to={"/Meet/" + kelas.id}>
                      <Button className="action__btn" variant="primary">
                        Meet
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default LihatKelasMhs;
