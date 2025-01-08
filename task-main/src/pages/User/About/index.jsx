import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function AboutUs() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h2>About Us</h2>
          <h3>We provide all kinds of fresh flower services</h3>
          <p>
            For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada,
            growing flowers that can be dried and incorporated into late fall
            and winter floral arrangements has been a game-changer. During her
            growing season, this farmer-florist relies on a vivid palette of
            annuals, perennials and ornamental grasses to supply her studio.
          </p>
        </Col>
        <Col md={6} className="d-flex justify-content-center align-items-center">
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={6} className="d-none d-md-block">
        <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/mk48xRzuNvA"
              allowFullScreen
              title="Florist Video"
            ></iframe>
        </Col>
        <Col md={6}>
          <h4>Slow Flowers’ Floral Insights</h4>
          <h3>Dried flowers are having a renaissance</h3>
          <p>
            This awareness has been stimulated by sustainable sourcing practices
            and the desire on the part of North American flower growers to
            “extend the season” beyond the last frost.
          </p>
          <Button variant="primary">Contact Us</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
