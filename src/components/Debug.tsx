import * as React from 'react';
import {autoGame, initializeGame} from "../logic/game";


export const Debug: React.SFC<{}> = (props: {}) => {

    const auto = () => autoGame(initializeGame());

    return (
        <div>
            <div onClick={auto}>
                かいし
            </div>
        </div>
    )
};