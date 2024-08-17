import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function Footer() {
  const translate=useSelector(state=>state.lang.translation)
  return (
    <footer className="bg-opacity-20   py-3">
      <Container>
        <Row>
          <Col md={6}>
            <p className="mb-0">© {new Date().getFullYear()} {translate.footerTitle}</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-0">{translate.footer}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );

  
}
