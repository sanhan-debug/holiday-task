import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
import { SlBasket } from "react-icons/sl";
import { MdFavoriteBorder } from "react-icons/md";

function Cards() {

  const products = [
    { title: 'Fresh Flower', items: 25, image: 'https://preview.colorlib.com/theme/florist/img/categories/categories-1.jpg.webp' },
    { title: 'Succulent plants', items: 162, image: 'https://preview.colorlib.com/theme/florist/img/categories/categories-2.jpg.webp' },
    { title: 'Cactus plants', items: 58, image: 'https://preview.colorlib.com/theme/florist/img/categories/categories-3.jpg.webp' },
    { title: 'Furniture tree', items: 25, image: 'https://preview.colorlib.com/theme/florist/img/categories/categories-4.jpg.webp' },
    { title: 'Furniture tree', items: 25, image: 'https://preview.colorlib.com/theme/florist/img/categories/categories-4.jpg.webp' },
    { title: 'Furniture tree', items: 25, image: 'https://preview.colorlib.com/theme/florist/img/categories/categories-4.jpg.webp' },
    { title: 'Furniture tree', items: 25, image: 'https://preview.colorlib.com/theme/florist/img/categories/categories-4.jpg.webp' },
    { title: 'Furniture tree', items: 25, image: 'https://preview.colorlib.com/theme/florist/img/categories/categories-4.jpg.webp' },
  ];
  return (

    <>
      <Container>
        <Row>
          {products.map((product, index) => (
            <Col key={index} sm={6} md={3} className="my-1">
              <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <SlBasket style={{margin:'10px',fontSize:'25px'}} />
                  <MdFavoriteBorder style={{fontSize:'25px'}} />
                  <Card.Text>({product.items} items)</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Cards