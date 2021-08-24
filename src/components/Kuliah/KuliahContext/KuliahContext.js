import React, { useState, createContext } from "react";
import { kuliah } from '../../../data';
export const KuliahContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([
    { id: "332D4E3", name: "Aljabar", position: "20"},
    { id: "32DD432", name: "Multimedia", position: "30"},
    { id: "1DE2231", name: "Keamanan Internet", position: "40"},
    { id: "32DD433", name: "Keamanan Jaringan", position: "30"},
    { id: "32DD434", name: "Pemrograman Website", position: "30"},
    { id: "32DD435", name: "Pemrograman Mobile", position: "30"},
  ]);

  return (
    <KuliahContext.Provider value={[users, setUsers]}>
      {props.children}
    </KuliahContext.Provider>
  );
};