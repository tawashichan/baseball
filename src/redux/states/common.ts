import {Location} from "../../types/common";

export interface CommonState {
    location: Location
}

export function initializeCommonState() : CommonState {
    return {
        location: Location.MAIN
    }
}