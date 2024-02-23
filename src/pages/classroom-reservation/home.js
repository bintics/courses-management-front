//import i18n from 'i18next';
import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ClassRoomsReservationsTable from './components/reservations-table';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations } from '../../core/reducers/classroomReservationsReducer';
//import { useParams } from 'react-router-dom';

export default function ClassRoomReservationPage() {
  /*
  const { lang } = useParams();
  i18n.changeLanguage(lang);
  */
  const { t } = useTranslation('translation', { keyPrefix: 'classRoomReservations' });
  const dispatch = useDispatch();

  let reservations = useSelector((state) => state.classRoomReservations.reservations);

  useEffect(() => {
    dispatch(getReservations());
  }, []);

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
          <ClassRoomsReservationsTable reservations={ reservations.items } />
        </Col>
      </Row>
    </>
  );
}