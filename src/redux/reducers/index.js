import { combineReducers } from "redux";
import producer from "./producer";
import { connectRouter } from "connected-react-router";

const reducers = (history) =>
    combineReducers({
        router: connectRouter(history), // Router history
        producer
    });

export default reducers;