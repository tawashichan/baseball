import {GameState, initializeGameState} from "./game";
import {CommonState, initializeCommonState} from "./common";

export interface RootState {
    common: CommonState,
    game: GameState
}

export function initializeRootState() : RootState {
    return {
        common: initializeCommonState(),
        game: initializeGameState()
    }
}