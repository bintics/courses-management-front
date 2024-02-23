import React from "react";
import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function ClassRoomsReservationsTable() {
    const { t } = useTranslation('translation', { keyPrefix: 'classRoomReservations.home' });

    return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>{ t('table.classRoomName') }</th>
              <th>{ t('table.reservationDate') }</th>
              <th>{ t('table.reservationStatus') }</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Aula A150</td>
              <td>03/05/2024 13:00:00</td>
              <td>Aprovado</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      );
}