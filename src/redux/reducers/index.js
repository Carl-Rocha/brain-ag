import { combineReducers } from "redux";
import producer from "./producer";
import { createRouterReducer } from '@lagunovsky/redux-react-router'

const reducers = (history) =>
    combineReducers({
        router: createRouterReducer(history), // Router history
        producer
    });

export default reducers;