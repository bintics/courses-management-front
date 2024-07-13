import { createSlice } from "@reduxjs/toolkit"

const clientsSlice = createSlice({
    name: 'clientsSlice',
    initialState: {
        clients: {
            items: [],
            total: 0,
            loading: false,
            error: null
        }
    },
    reducers: {
        fetchInit(state, action) {
            state.clients.items = [];
            state.clients.loading = true;
        },
        fetchSuccess(state, action) {
            state.clients.loading = false;
            state.clients = action.payload;
        },
        fetchFailure(state, action) {
            state.clients.loading = false;
            state.clients.error = action.payload;
        }
    }
  });
  
  export const { fetchInit, fetchSuccess, fetchFailure } = clientsSlice.actions
  export default clientsSlice.reducer