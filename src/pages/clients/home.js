//import i18n from 'i18next';
import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ClientsTable from './components/clients-table';
import { useDispatch, useSelector } from 'react-redux';
import { getClients } from '../../core/axios/clients';
import { fetchFailure, fetchInit, fetchSuccess } from '../../core/reducers/clientsReducer';
//import { getClients } from '../../core/reducers/clientsReducer';
//import { useParams } from 'react-router-dom';

export default function ClientsPage() {
  /*
  const { lang } = useParams();
  i18n.changeLanguage(lang);
  */
  const { t } = useTranslation('translation', { keyPrefix: 'clients' });
  const dispatch = useDispatch();

  let clients = useSelector((state) => state.clients.clients);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchInit());
      try {
        const result = await getClients();
        dispatch(fetchSuccess(result));
      } catch(error) {
        dispatch(fetchFailure(error));
      }
    };
    fetchData();
  }, []);

  if (clients.loading) {
    return (
      <>
      <h1>Cargando!</h1>
      </>
    );
  }

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
          <ClientsTable items={ clients?.items } />
        </Col>
      </Row>
    </>
  );
}