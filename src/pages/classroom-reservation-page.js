//import i18n from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
//import { useParams } from 'react-router-dom';

export default function ClassRoomReservationPage() {
  /*
  const { lang } = useParams();
  i18n.changeLanguage(lang);
  */

  const { t } = useTranslation('translation', { keyPrefix: 'classRoomReservations' });
  return (
    <div>
      <h1>{ t('title') }</h1>
      <p>Reservación de aulas</p>
    </div>
  );
}