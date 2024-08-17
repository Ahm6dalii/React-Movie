import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-body-secondary   py-3">
      <Container>
        <Row>
          <Col md={6}>
            <p className="mb-0">© {new Date().getFullYear()} Your Company</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-0">Privacy Policy | Terms of Service</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );

  
}
