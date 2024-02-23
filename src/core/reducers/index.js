import { combineReducers } from "redux";
import classRoomReducer from "./classroomReservationsReducer";

const rootReducer = combineReducers({
    classRoomReservations: classRoomReducer
});

export default rootReducer;