import { configureStore } from "@reduxjs/toolkit";
import classroomReservationsReducer from "./reducers/classroomReservationsReducer";
import clientsReducer from "./reducers/clientsReducer";

export const store = configureStore({
    reducer: {
        classRoomReservations: classroomReservationsReducer,
        clients: clientsReducer
    }
});