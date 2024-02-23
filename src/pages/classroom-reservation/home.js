//import i18n from 'i18next';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ClassRoomsReservationsTable from './components/reservations-table';
//import { useParams } from 'react-router-dom';

export default function ClassRoomReservationPage() {
  /*
  const { lang } = useParams();
  i18n.changeLanguage(lang);
  */

  const { t } = useTranslation('translation', { keyPrefix: 'classRoomReservations' });

  return (
    <>
      <Row>
        <Col md="12">
          <h1>{ t('title') }</h1>
        </Col>
      </Row>
      <Row>
        <Col md="12">
          <p>{ t('home.description') }</p>
          <ClassRoomsReservationsTable />
        </Col>
      </Row>
    </>
  );
}