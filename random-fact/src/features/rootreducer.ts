

import { combineReducers } from "@reduxjs/toolkit";
import { randomFactReducer } from "./randomfact";


const rootReducer = combineReducers({
    RandomFact: randomFactReducer,
});

export { rootReducer };