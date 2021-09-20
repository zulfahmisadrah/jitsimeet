import React from "react";
import { Badge, Button, Card, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import CardItemMhs from "../DashboardMhs/CardItemMhs";
import "./CardFourItemMhs.css";

function CardFourItemMhs(props) {
  const history = useHistory();

  return (
    <Col>
      <Card
        style={{ height: 400, marginBottom: 24 }}
        className={`${
          props.noHover ? "card-wrapper with-shadow" : "card-wrapper"
        }`}
        onClick={
          props.textBtn
            ? () =>
                history.push({
                  pathname: props.path,
                  state: {
                    dataKuliah: props.data,
                  },
                })
            : () => {}
        }
      >
        <div className="card-avatar">
          <Card.Img
            className={`${
              props.noHover ? "card-avatar-illustration" : "card-avatar-img"
            }`}
            variant="top"
            src={props.src}
          />
          {props.withBadge && (
            <Badge
              bg={`${props.terlaksana ? "success" : "primary"} bagde-card`}
            >
              {props.label
                ? `${props.label}`
                : `${props.terlaksana ? "Terlaksana" : "Belum Terlaksana"}`}
            </Badge>
          )}
        </div>
        <Card.Body>
          <div className={props.textBtn ? "w-100 text-center" : ""}>
            <Card.Title className="card-header-title text-bold">
              {props.withIcon && <i className="fa fa-home ml-2 icon-card"></i>}
              <span className="">{props.text}</span>
            </Card.Title>
          </div>
          <Card.Text className="card-header-sub-title text-bold">
            {props.withIcon && <i className="fa fa-calendar icon-card"></i>}
            <span className="">{props.text2}</span>
          </Card.Text>
          {props.detaiKuliah ? (
            <div className="">
              <Button variant="primary" className={props.terlaksana ? "invisible" : ""}>
                <Link to="/Meet/10">Meet</Link>
              </Button>

              {props.noCancelBtn && (
                <Button
                  variant="danger"
                  className="mx-0 mx-lg-2"
                  onClick={() => history.goBack()}
                >
                  Batal
                </Button>
              )}
            </div>
          ) : (
            <Button
              variant={`${props.textBtn ? "transparent" : "primary"}`}
              className={props.textBtn ? "w-100" : ""}
              onClick={
                props.textBtn
                  ? () => {}
                  : () =>
                      history.push({
                        pathname: props.path,
                        state: {
                          detailKuliah: props.data,
                        },
                      })
              }
            >
              {props.textBtn ? props.textBtn : "Detail"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
    // <>
    //     <div class="card">
    //         <img class="card-img-top" src={props.src} alt="Card image cap"/>
    //             <div class="card-body">
    //                 <h5 class="cardtitle">{props.src}</h5>
    //                 <p class="card-texbal"></p>
    //                 <a href="#" class="btn btn-primary">Detail</a>
    //             </div>
    //     </div>

    // </>
  );
}

export default CardFourItemMhs;
