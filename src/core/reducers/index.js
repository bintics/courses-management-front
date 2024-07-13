import { combineReducers } from "redux";
import classRoomReducer from "./classroomReservationsReducer";
import clientsReducer from "./clientsReducer";

const rootReducer = combineReducers({
    classRoomReservations: classRoomReducer,
    clients: clientsReducer
});

export default rootReducer;