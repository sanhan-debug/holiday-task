import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function FloristSection() {
  const posts = [
    {
      title: '8 Romantic Gifts to Celebrate Your Wedding Anniversary',
      date: 'May 22, 2020',
      category: 'Trend News',
      image: 'https://preview.colorlib.com/theme/florist/img/categories/categories-1.jpg.webp',
    },
    {
      title: 'Red Rose - Flower of love of Greek Mythology',
      date: 'May 22, 2020',
      category: 'Tips & Idea',
      image: 'https://preview.colorlib.com/theme/florist/img/categories/categories-2.jpg.webp',
    },
    {
      title: 'Beautiful Mandalas Made From Flowers by Kathy Klein',
      date: 'May 22, 2020',
      category: 'DIY & Crafts',
      image: 'https://preview.colorlib.com/theme/florist/img/categories/categories-3.jpg.webp',
    },
  ];

  return (
    <Container className="my-5">
     
      <div
        className="text-center py-5"
        style={{
          backgroundImage: 'url(https://preview.colorlib.com/theme/florist/img/call-bg.jpg.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
        }}
      >
        <h4 className="mb-3">CUSTOM FLOWER</h4>
        <h1 className="mb-4">Let our flowers make your party more perfect</h1>
        <Button variant="light" className="mx-2">Order Now</Button>
        <Button variant="outline-light" className="mx-2">Contact Us</Button>
      </div>

     
      <div className="my-5">
        <Row>
          <Col>
            <h3>Latest Posts</h3>
          </Col>
          <Col className="text-end">
            <Button variant="link">View All Posts</Button>
          </Col>
        </Row>
        <Row>
          {posts.map((post, index) => (
            <Col key={index} md={4} className="my-3">
              <Card>
                <Card.Img variant="top" src={post.image} />
                <Card.Body>
                  <small className="text-muted">{post.category}</small>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.date}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default FloristSection;
