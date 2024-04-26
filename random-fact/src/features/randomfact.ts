import { createAction, createReducer } from "@reduxjs/toolkit";

enum Status {
    NORMAL,
    FETCHING,
    SUCCESS,
    FAILURE
}

interface Fact {
    fact: string | null;
    status: Status;
}

const initialState: Fact = {
    fact: null,
    status: Status.NORMAL
}

const isfetching = createAction('is fetching fact');
const success = createAction<string>('success fact');
const failure = createAction('failure fact');

const fatchActions = { isfetching, success, failure }


const randomFactReducer = createReducer(initialState, builder => {
    builder
        .addCase(isfetching, (state, action) => ({
            status: Status.FETCHING,
            fact: state.fact
        }))
})

export { fatchActions, randomFactReducer }