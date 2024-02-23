import { configureStore } from "@reduxjs/toolkit";
import classroomReservationsReducer from "./reducers/classroomReservationsReducer";

export const store = configureStore({
    reducer: {
        classRoomReservations: classroomReservationsReducer,
    }
});