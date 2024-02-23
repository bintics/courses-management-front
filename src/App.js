import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import { Link, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Nav } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation('translation', { keyPrefix: 'nav' });

  return (
    <Container fluid className='App2'>
      <Row>
        <Col md="2">
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/">{ t('homeLink') }</Nav.Link>
            <Nav.Link href='/classroom-reservations' eventKey="link-1">{ t('classRoomReservationsLink') }</Nav.Link>
          </Nav>
        </Col>
        <Col md="10" style={{ backgroundColor: 'white'}}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
