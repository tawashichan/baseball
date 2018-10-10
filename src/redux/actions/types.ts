import {Location} from "../../types/common";

export enum ActionType {
    NEXT_BATTER = "NEXT_BATTER",
    TRANSITION = "TRANSITION"
}

export type CommonAction = LocationAction
export type GameAction = NextBatterAction

export interface LocationAction {
    type: ActionType.TRANSITION,
    location: Location
}

export interface NextBatterAction {
    type: ActionType.NEXT_BATTER
}