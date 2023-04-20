import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>Welcome to our Product App</h1>
          <p>
            We offer a wide range of products to suit your needs. Whether you're
            looking for something specific or just browsing, we have what you
            need.
          </p>
          <Link to="/products">
            <Button variant="primary">View Products</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
