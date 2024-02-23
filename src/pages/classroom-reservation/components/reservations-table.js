import React from "react";
import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function ClassRoomsReservationsTable({reservations}) {
  const items = reservations
  
  const { t } = useTranslation('translation', { keyPrefix: 'classRoomReservations.home' });

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>{ t('table.classRoomName') }</th>
          <th>{ t('table.reservationStatus') }</th>
          <th>{ t('table.reservationDate') }</th>
        </tr>
      </thead>
      <tbody>
        {
          items?.map((item, index) => (
            <tr key={index}>
              <td>{ item.id }</td>
              <td>{ item.name }</td>
              <td>{ item.status }</td>
              <td>{ item.reservationDate }</td>
            </tr>    
          ))
        }
      </tbody>
    </Table>
  );
}