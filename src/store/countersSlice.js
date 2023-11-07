import { createSlice } from '@reduxjs/toolkit';

const initialState = [{ id: Date.now(), count: 0, name: "Tally Counter" }];

const counterSlice = createSlice({
    name: 'counters',
    initialState: initialState,
    reducers: {
        createCounter: (state) => {
            state.push({ id: Date.now(), count: 0, name: "Tally Counter" });
        },
        deleteCounter: (state, action) => {
            return state.filter(counter => counter.id !== action.payload);
        },
        incrementCount: (state, action) => {
            const counter = state.find(counter => counter.id === action.payload);
            if (counter) {
                counter.count++;
            }
        },
        decrementCount: (state, action) => {
            const counter = state.find(counter => counter.id === action.payload);
            if (counter) {
                counter.count--;
            }
        },
        setCount: (state, action) => {
            const counter = state.find(counter => counter.id === action.payload.id);
            if (counter) {
                counter.count = action.payload.value;
            }
        },
        setName: (state, action) => {
            const counter = state.find(counter => counter.id === action.payload.id);
            if (counter) {
                counter.name = action.payload.name;
            }
        },
    },
});

export const {
    createCounter,
    deleteCounter,
    incrementCount,
    decrementCount,
    setCount,
    setName
} = counterSlice.actions;

export default counterSlice.reducer;
