import { RootState, initializeRootState } from "./states/root";
import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import { createLogger } from "redux-logger";
import { game } from "./reducers/game"
import { common } from "./reducers/common"

export function store(): Store<RootState> {
    const logger = createLogger();
    const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
    return createStoreWithMiddleware(
        combineReducers({
            common,
            game
        })
        , initializeRootState());
}