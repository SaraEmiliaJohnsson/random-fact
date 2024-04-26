import { createAction, createReducer } from "@reduxjs/toolkit";

export enum FactStatus {
    NORMAL,
    FETCHING,
    SUCCESS,
    FAILURE
}

interface Fact {
    fact: string | null;
    status: FactStatus;
}

const initialState: Fact = {
    fact: null,
    status: FactStatus.NORMAL
}

const isfetching = createAction('is fetching fact');
const success = createAction<string>('success fact');
const failure = createAction('failure fact');

const fatchActions = { isfetching, success, failure }


const randomFactReducer = createReducer(initialState, builder => {
    builder
        .addCase(isfetching, (state, action) => ({
            status: FactStatus.FETCHING,
            fact: state.fact
        }))
})

export { fatchActions, randomFactReducer }