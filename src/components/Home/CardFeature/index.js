import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';


export default function CardFeatures(props) {
  return (
    <Col>
      <Card style={{ height: "max-content", marginTop: 24, backgroundColor:"#FFFFFF"}}>
        <Card.Img variant="top" src={props.img} className="p-4" style={{height: 230}} />
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
          <Link to='/Signin' className='btn btn-primary' style={{ textDecoration: 'none', backgroundColor: '#125D98' }}>Sign In</Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
