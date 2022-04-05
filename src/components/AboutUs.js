import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about.css";
export default class AboutUs extends Component {
  render() {
    return (
      <div>        
        <Container className="container">
          <Row className="row">
            <Col xs={6}>
              <p style={{fontWeight: 'bold'}}>ABOUT US</p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Col>
            <Col className="resim" xs={4}>
              <img
                src="https://images01.nicepage.com/8f/4a/8f4aca92-a5f2-4aae-b37d-480f3b52de91.jpg"
                alt="demo"
                
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
