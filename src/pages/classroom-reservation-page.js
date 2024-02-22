import React from 'react';
import { useRouteError } from "react-router-dom";

export default function ClassRoomReservationPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Reservación de aulas</h1>
      <p>Reservación de aulas</p>
    </div>
  );
}