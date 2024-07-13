import { createSlice } from "@reduxjs/toolkit"

const classRoomReservationsSlice = createSlice({
    name: 'classRoomReservations',
    initialState: {
        reservations: {
            items: [],
            loaded: false
        }
    },
    reducers: {
        getReservations(state, action) {
            // TODO: deberíamos tirar un effect para hacer la petición al back
            state.reservations = 
            {
                items: [
                    {
                        id: 'd2eb9007-eaf9-44ed-b856-7e6c312b41b5',
                        name: 'Aula A105',
                        reservationDate: '03/05/2024 13:00:00',
                        status: 'reserved'
                    },
                    {
                        id: 'aa6f05aa-ef9f-46d8-abdd-e280bda69173',
                        name: 'Aula D203',
                        reservationDate: '03/05/2024 13:00:00',
                        status: 'free'
                    }
                ],
                loaded: true
            };
        },
        classRoomAdd(state, action) {
            state.push({
                id: action.payload.id,
                text: action.payload.text,
                completed: false
            })
        },
        classRoomGet(state, action) {
            const todo = state.find(todo => todo.id === action.payload)
            todo.completed = !todo.completed
        }
    }
  });
  
  export const { classRoomAdd, classRoomGet, getReservations } = classRoomReservationsSlice.actions
  export default classRoomReservationsSlice.reducer