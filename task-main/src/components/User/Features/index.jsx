import React from 'react'
import { FaLeaf, FaPaintBrush, FaTruck, FaCertificate } from 'react-icons/fa';
import {  Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Features() {
    return (
        <Container className="text-center my-5">
          <Row>
            <Col><FaLeaf size={40} /><p>100% Freshness</p><span>Most people are unaware of the less common flower</span></Col>
            <Col><FaPaintBrush size={40} /><p>Made by artist</p><span>Most people are unaware of the less common flower</span></Col>
            <Col><FaTruck size={40} /><p>Own courier</p><span>Most people are unaware of the less common flower</span></Col>
            <Col><FaCertificate size={40} /><p>100% Freshness</p><span>Most people are unaware of the less common flower</span></Col>
          </Row>
        </Container>
      );
}

export default Features