import React from "react";
import { Carousel, Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const FloristComponent = () => {
  return (
    <Container className="my-5 florist-component">
      <style jsx>{`
        .slider-container {
          position: relative;
          text-align: center;
          background: url("https://preview.colorlib.com/theme/florist/img/testimonial/left-bg.png") left top no-repeat,
            url("https://preview.colorlib.com/theme/florist/img/testimonial/right-bg.png") right top no-repeat;
          background-size: auto;
        }
        blockquote {
          font-style: italic;
          color: #555;
        }
        .image-card {
          position: relative;
          overflow: hidden;
          border: none;
        }
        .image-card img {
          transition: transform 0.3s ease;
        }
        .image-card:hover img {
          transform: scale(1.1);
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          color: #fff;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .image-card:hover .overlay {
          opacity: 1;
        }
        .instagram-icon {
          font-size: 2rem;
        }
        .footer-section {
          background-color: #f8f9fa;
          padding: 40px 0;
          text-align: center;
        }
        .footer-section h5 {
          font-weight: bold;
          margin-bottom: 20px;
        }
        .footer-section ul {
          list-style: none;
          padding: 0;
        }
        .footer-section ul li {
          margin-bottom: 10px;
        }
        .footer-section ul li a {
          text-decoration: none;
          color: #333;
        }
        .footer-section ul li a:hover {
          text-decoration: underline;
        }
        .social-icons a {
          color: #333;
          margin: 0 10px;
          font-size: 1.5rem;
        }
        .social-icons a:hover {
          color: #007bff;
        }
        .newsletter-input {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .newsletter-input input {
          flex: 1;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px 0 0 4px;
          outline: none;
        }
        .newsletter-input button {
          padding: 10px 20px;
          border: none;
          background-color: #007bff;
          color: #fff;
          border-radius: 0 4px 4px 0;
        }
        .newsletter-input button:hover {
          background-color: #0056b3;
        }
      `}</style>
   
      <div className="slider-container position-relative">
        <Carousel>
          <Carousel.Item>
            <blockquote className="text-center">
              <p>
                "I just wanted to say thank you for making such gorgeous
                arrangements for our birthday celebration. I couldn't get over
                how perfect they were for the party. You did a fantastic job,
                and I appreciate it very much."
              </p>
              <footer className="blockquote-footer">
                Alejandro Houston <cite>Businessman</cite>
              </footer>
            </blockquote>
          </Carousel.Item>
          <Carousel.Item>
            <blockquote className="text-center">
              <p>
                "Amazing service and attention to detail. The flowers brought
                life to our event and everyone couldn't stop complimenting."
              </p>
              <footer className="blockquote-footer">
                Maria Simmons <cite>Event Planner</cite>
              </footer>
            </blockquote>
          </Carousel.Item>
        </Carousel>
      </div>

      <Row className="mt-5">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx} sm={6} md={3} className="mb-4">
            <Card className="image-card">
              <Card.Img
                variant="top"
                src="https://preview.colorlib.com/theme/florist/img/instagram/insta-3.jpg.webp"
                alt="Instagram"
              />
              <div className="overlay d-flex justify-content-center align-items-center">
                <FaInstagram className="instagram-icon" />
              </div>
            </Card>
          </Col>
        ))}
      </Row>

  
      <div className="footer-section">
        <Container>
          <Row>
            <Col md={3} sm={6} className="mb-4">
              <h5>Company</h5>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <h5>Account</h5>
              <ul>
                <li><a href="#">My cart</a></li>
                <li><a href="#">Wishlist</a></li>
                <li><a href="#">Login/Register</a></li>
              </ul>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <h5>Newsletter</h5>
              <p>Subscribe to our newsletter to get more free tips. No Spam, Promise.</p>
              <div className="newsletter-input">
                <input type="email" placeholder="Email" />
                <button>SUBSCRIBE</button>
              </div>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <h5>Get in touch</h5>
              <ul>
                <li>69 North Cleveland Street, Memphis, USA</li>
                <li>(123) 8111 9210 - (012) 1111 6868</li>
                <li><a href="mailto:Florist@supportthem.com">Florist@supportthem.com</a></li>
              </ul>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="d-flex justify-content-center social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="text-center">
              <p>Copyright &copy; 2025 All rights reserved | This template is made with <span style={{ color: "#e25555" }}>&hearts;</span> by Colorlib</p>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default FloristComponent;
