import React from "react";
import "./Read.css";
import LihatKelas from "../../Kelas/LihatKelas/LihatKelas";

const Read = (props) => {
  return (
    <div className={`${props.isOpen ? "read-container" : "w-100"}`}>
      <LihatKelas
        isShowSidebar={props.isShowSidebar}
        isOpen={props.isOpen}
        {...props}
      />
    </div>
  );
};

export default Read;
