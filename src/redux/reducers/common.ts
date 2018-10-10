
import {ActionType, CommonAction} from "../actions/types";
import {CommonState, initializeCommonState} from "../states/common";

export function common(state: CommonState = initializeCommonState(),action: CommonAction) : CommonState {
    switch (action.type) {
        case ActionType.TRANSITION:
            return state;
        default:
            return state
    }
}