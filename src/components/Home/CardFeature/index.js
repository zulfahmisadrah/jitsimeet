import React from "react";
import { Card, Col } from "react-bootstrap";


export default function CardFeatures(props) {
  return (
    <Col>
      <Card style={{ height: "max-content", marginTop: 24, backgroundColor:"#F9FEFB"}}>
        <Card.Img variant="top" src={props.img} className="p-4" />
        <Card.Body
          className="px-4"
          style={{
            textAlign: "center",
          }}
        >
          <Card.Title
            style={{
              fontWeight: "bold",
              fontSize: 32,
              textAlign: "center",
            }}
          >
            {props.title}
          </Card.Title>
          <Card.Text
            style={{
              fontSize: 16,
              paddingBottom: 20,
            }}
          >
            {props.desc}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
