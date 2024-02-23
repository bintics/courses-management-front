import React from 'react';
import { 
  Route, 
  Routes
} from 'react-router-dom';
import HomePage from './pages/home/home-page';
import ClassRoomReservationPage from './pages/classroom-reservation/home';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function AppRouter() {

  const { t } = useTranslation('translation', { keyPrefix: 'nav' });

  return (
  <>
    <Container fluid className='App2'>
      <Row>
        <Col md="2">
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/">{ t('homeLink') }</Nav.Link>
            <Nav.Link href='/classroom-reservations' eventKey="link-1">{ t('classRoomReservationsLink') }</Nav.Link>
          </Nav>
        </Col>
        <Col md="10" style={{ backgroundColor: 'white'}}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/classroom-reservations' element={<ClassRoomReservationPage/>} />
        </Routes>
        </Col>
      </Row>
    </Container>
  </>
  );
}

export default AppRouter;
