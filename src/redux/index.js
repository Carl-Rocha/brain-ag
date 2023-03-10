import { createStore, applyMiddleware, compose } from "redux";
import { createRouterMiddleware } from '@lagunovsky/redux-react-router'
import { createBrowserHistory } from "history";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./reducers";

export const history = createBrowserHistory();

const persistConfig = {
    key: "root",
    storage,
    blacklist: ['loading']
};

const persistedReducer = persistReducer(persistConfig, reducers(history));

// para ativar plugin do redux no Chorme
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
    persistedReducer,
    composeEnhancer(
        applyMiddleware(
            createRouterMiddleware(history),
        )
    )
);

const persistor = persistStore(store);

export { store, persistor };