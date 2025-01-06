import React, { useContext } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { productContext } from '../../../../../contexts/ProductContext';

function Product() {
 
  let {products} = useContext(productContext)

  return (
    <Container>
      <Row>
        {products.map((product, index) => (
          <Col key={index} sm={6} md={3} className="my-1">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>({product.items} items)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Product;
