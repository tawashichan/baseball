import {OFFENCE} from "../../types/game";

export interface GameState {
    offence: OFFENCE
}

export function initializeGameState() : GameState{
    return {
        offence: OFFENCE.TEAM_1
    }
}

