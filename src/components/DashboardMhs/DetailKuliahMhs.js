import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardFourItemMhs from "./CardFourItemMhs";

function DetailKuliahMhs(props) {
  console.log(props);
  return (
    <Container className="bg-white">
      <h1 className="py-4">Detail Kuliah</h1>
      <Row>
        <Col>
          <CardFourItemMhs
            withIcon
            detaiKuliah
            src={props.location.state.detailKuliah.src}
            text={props.location.state.detailKuliah.text}
            text2={props.location.state.detailKuliah.text2}
            label={props.location.state.detailKuliah.label}
            // path={`${item.path}/${i}`}
          />
        </Col>
      </Row>
    </Container>
    // <>
    //   <div class="container">
    //     <h1>List Kuliah</h1>
    //     <div className="cards">
    //       <div className="card-columns">
    //         <CardFourItemMhs
    //           src=""
    //           title="Kuliah Sistem Komputer"
    //           button="/LihatKelasMhs"
    //         />
    //         <CardFourItemMhs
    //           src=""
    //           title="Kuliah Sistem Komputer"
    //           button="/LihatKelasMhs"
    //         />
    //         <CardFourItemMhs
    //           src=""
    //           title="Kuliah Sistem Komputer"
    //           button="/LihatKelasMhs"
    //         />
    //         <CardFourItemMhs
    //           src=""
    //           title="Kuliah Sistem Komputer"
    //           button="/LihatKelasMhs"
    //         />
    //         <CardFourItemMhs
    //           src=""
    //           title="Kuliah Sistem Komputer"
    //           button="/LihatKelasMhs"
    //         />
    //         <CardFourItemMhs
    //           src=""
    //           title="Kuliah Sistem Komputer"
    //           button="/LihatKelasMhs"
    //         />
    //         <CardFourItemMhs
    //           src=""
    //           title="Kuliah Sistem Komputer"
    //           button="/LihatKelasMhs"
    //         />
    //         <CardFourItemMhs
    //           src=""
    //           title="Kuliah Sistem Komputer"
    //           button="/LihatKelasMhs"
    //         />
    //         <CardFourItemMhs
    //           src=""
    //           title="Kuliah Sistem Komputer"
    //           button="/LihatKelasMhs"
    //         />
    //         <CardFourItemMhs
    //           src=""
    //           title="Kuliah Sistem Komputer"
    //           button="/LihatKelasMhs"
    //         />
    //         <CardFourItemMhs
    //           src=""
    //           title="Kuliah Sistem Komputer"
    //           button="/LihatKelasMhs"
    //         />
    //         <CardFourItemMhs
    //           src=""
    //           title="Kuliah Sistem Komputer"
    //           button="/LihatKelasMhs"
    //         />
    //         <CardFourItemMhs
    //           src=""
    //           title="Kuliah Sistem Komputer"
    //           button="/LihatKelasMhs"
    //         />
    //         <CardFourItemMhs
    //           src=""
    //           title="Kuliah Sistem Komputer"
    //           button="/LihatKelasMhs"
    //         />
    //         <CardFourItemMhs
    //           src=""
    //           title="Kuliah Sistem Komputer"
    //           button="/LihatKelasMhs"
    //         />
    //         <CardFourItemMhs
    //           src=""
    //           title="Kuliah Sistem Komputer"
    //           button="/LihatKelasMhs"
    //         />
    //         <CardFourItemMhs
    //           src=""
    //           title="Kuliah Sistem Komputer"
    //           button="/LihatKelasMhs"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}

export default DetailKuliahMhs;
