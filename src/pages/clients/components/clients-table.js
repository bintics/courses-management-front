import React from "react";
import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function ClientsTable({items}) {
  
  const { t } = useTranslation('translation', { keyPrefix: 'clients.home' });

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>{ t('table.name') }</th>
          <th>{ t('table.surname') }</th>
          <th>{ t('table.secondSurname') }</th>
          <th>{ t('table.createdAt') }</th>
          <th>{ t('table.updatedAt') }</th>
        </tr>
      </thead>
      <tbody>
        {
          items?.map((item, index) => (
            <tr key={index}>
              <td>{ item.id }</td>
              <td>{ item.name }</td>
              <td>{ item.surname }</td>
              <td>{ item.secondSurname }</td>
              <td>{ item.createdAt }</td>
              <td>{ item.updatedAt }</td>
            </tr>    
          ))
        }
      </tbody>
    </Table>
  );
}