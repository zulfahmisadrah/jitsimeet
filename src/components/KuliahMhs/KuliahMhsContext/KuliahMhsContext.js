import React, { useState, createContext } from "react";
import { kuliah } from '../../../data';
export const KuliahMhsContext = createContext();

export const KuliahMhsProvider = (props) => {
  
    const [users, setUsers] = useState(kuliah);

  return (
    <KuliahMhsContext.Provider value={[users, setUsers]}>
      {props.children}
    </KuliahMhsContext.Provider>
  );
};