import React from "react";
import './home-page.css';
import { Col, Row } from "react-bootstrap";

function HomePage() {
    return (
      <Row>
        <Col md="12" style={{ backgroundColor: 'white'}}>
          <h1>Home</h1>
        </Col>
      </Row>
    );
  }
  
  export default HomePage;