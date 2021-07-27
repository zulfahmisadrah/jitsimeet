import React, { useContext, useState, useEffect } from "react";
import "./ListKuliah.css";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { KuliahMhsContext } from "../KuliahMhsContext/KuliahMhsContext";


const ListKuliahMhs = () => {
  const [users, setUser] = useContext(KuliahMhsContext);
  console.log('users', users);

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // effect
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [])
    
  return (
    <div>
      
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">

      <Table striped bordered>
        <thead>
          <tr>
            <th>Kode Matakuliah</th>
            <th>Nama Matakuliah</th>
            <th>Jumlah Peserta</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && <div>loading</div>}
          {!isLoading && users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.position}</td>
              <td>
                <Link to={"/read/"+user.id}>
                  <Button className="action__btn" variant="success">
                    Read
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
    </div>
  );
};

export default ListKuliahMhs;