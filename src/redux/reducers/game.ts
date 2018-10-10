import {GameState, initializeGameState} from "../states/game";
import {ActionType, GameAction} from "../actions/types";


export function game(state: GameState = initializeGameState(),action: GameAction) : GameState {
    switch (action.type) {
        case ActionType.NEXT_BATTER:
            return state;
        default:
            return state
    }
}