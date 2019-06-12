import {applyMiddleware, combineReducers, createStore as reduxCreateStore} from "redux";
import * as reducers from './reducers';
import {connectRouter, routerMiddleware} from "connected-react-router";
import logger from "redux-logger";
import thunk from "redux-thunk";

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            ...reducers,
            router: connectRouter(history)
        }),
        applyMiddleware(
            logger,
            thunk,
            routerMiddleware(history)
        )
    );
}