import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Profile from '../../images/Profile.png'
import '../Styles/Home.css'

function Home() {
  return (
    <div className="Seconddiv">
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="hero-title">
                The <span className="highlight">Easiest Way</span><br /> to Get Your New Job
              </h1>
              <p className="hero-description">
                Each month, more than 3 million job seekers turn to <br></br> our website in their search for work, making over 140,000 <br></br> applications every single day.
              </p>
              <Row className="mt-4">
            <Col md={3}>
              <Form.Select aria-label="Industry" className="my-custom-select">
                <option>Industry</option>
                <option value="1">Technology</option>
                <option value="2">Finance</option>
                <option value="3">Health</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <Form.Select aria-label="Location" className="my-custom-select">
                <option>Location</option>
                <option value="1">New York</option>
                <option value="2">San Francisco</option>
                <option value="3">Chicago</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <Form.Control type="text" placeholder="Keyword" className="my-custom-selected" />
            </Col>
            <Col md={3}>
              <Button variant="primary" className="w-100">Search</Button>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <p className="text-muted">
                Popular Searches: <a href="#">Content Writer</a>, <a href="#">Finance</a>, <a href="#">Human Resource</a>, <a href="#">Management</a>
              </p>
            </Col>
          </Row>
            </Col>
            <Col md={6}>
              <div className="hero-images">
                <img src={Profile} alt="Team Working" className="img-fluid mb-3 rounded" />
              </div>
            </Col>
          </Row>
          
        </Container>
      </section>
    </div>
  );
}

export default Home;
