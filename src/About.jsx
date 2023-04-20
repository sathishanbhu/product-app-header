import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>About Us</h1>
          <p>
            We are a company dedicated to providing high-quality products to
            our customers. Our team of experts carefully selects and tests each
            product to ensure that it meets our high standards.
          </p>
          <p>
            At our core, we believe in customer satisfaction and strive to
            exceed expectations with every order. Thank you for choosing us for
            your product needs!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
