import React, { useState, createContext } from "react";

export const KelasContext = createContext();

export const KelasProvider = (props) => {
  
    const [kelass, setKelas] = useState([
    { id: 1, idMataKuliah: '332D4E3', name: "Selasa, 10 juli jam 10.00", position: "20"},
    { id: 2, idMataKuliah: '32DD432', name: "Rabu, 11 juli jam 11.00", position: "30"},
    { id: 3, idMataKuliah: '1DE2231', name: "Senin, 09 juli jam 09.00", position: "40"},
    { id: 5, idMataKuliah: '1DE2231', name: "kamis, 12 juli jam 09.00", position: "40"},
    { id: 6, idMataKuliah: '32DD434', name: "jumat, 13 juli jam 09.00", position: "40"},
    { id: 7, idMataKuliah: '32DD435', name: "senin, 16 juli jam 09.00", position: "40"},
    { id: 8, idMataKuliah: '1DE2231', name: "rabu, 18 juli jam 09.00", position: "40"},
  ]);

  return (
    <KelasContext.Provider value={[kelass, setKelas]}>
      {props.children}
    </KelasContext.Provider>
  );
};