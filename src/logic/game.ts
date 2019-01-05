import {
    Ball,
    BatOrder, BatResult, Direction,
    FieldPlayer,
    Game, HittingType, HitType,
    InningType,
    OUT,
    PlayerWithScore,
    Position,
    Score,
    Strike
} from "../types/game";
import { Bat, Player, Throw } from "../types/player";
import { Team } from "../types/team";


export const initializeTeam = (): Team => (
    {
        players: []
    }
)

export const initializeFieldPlayer = (): FieldPlayer => (
    {
        batOrder: BatOrder.ONE,
        position: Position.PITCHER,
        player: initializePlayerWithScore()
    }
)

const initializeScore = (): Score => (
    {
        count: 0,
        result: initializeBatResult()
    }
)

const initializeBatResult = (): BatResult => (
    {
        hittingType: HittingType.GROUND_BALL,
        hitType: HitType.OUT,
        direction: Direction.PITCHER
    }
)

export const initializePlayerWithScore = (): PlayerWithScore => (
    {
        player: initializePlayer(),
        score: initializeScore()
    }
)


export const initializePlayer = (): Player => (
    {
        name: "hoge",
        age: 0,
        grade: 1,
        throws: Throw.RIGHT,
        bats: Bat.RIGHT,
        catcherD: 0,
        pitcherD: 0,
        firstD: 0,
        secondD: 0,
        thirdD: 0,
        shortstopD: 0,
        leftD: 0,
        centerD: 0,
        rightD: 0,
        power: 0,
        meet: 0,
        run: 0,
        shoulder: 0,
        catch: 0,
        fastBall: 0,
        control: 0,
        stamina: 0,
        recovery: 0,
        mental: 0,
        breakingBalls: [],
        ballPower: 0,
        growth: 0,
        toughness: 0,
        fatigue: 0
    }
)

export const initializeGame = () => (
    {
        inning: 0,
        inningType: InningType.TOP,
        outs: OUT.NO,
        topRun: 0,
        bottomRun: 0,
        runnerFirst: null,
        runnerSecond: null,
        runnerThird: null,
        strike: Strike.NO,
        ball: Ball.NO,
        topBatOrder: BatOrder.ONE,
        bottomBatOrder: BatOrder.ONE,
        topFieldPlayers: [initializeFieldPlayer()],
        bottomFieldPlayers: [initializeFieldPlayer()],
        topBenchPlayers: [],
        bottomBenchPlayers: [],
        topOutFieldPlayers: [],
        bottomOutFieldPlayers: []
    }
)

export const proceed = (game: Game): Game => {

    const currentBatter = getCurrentBatter(game);
    const currentPitcher = getCurrentPitcher(game);
    console.log(currentBatter);
    console.log(currentPitcher);

    return Object.assign({}, game, {
        bottomRun: game.bottomRun + 1,
        outs: game.outs + 1
    }
    )
}

/*function battle(batter: FieldPlayer,pitcher: FieldPlayer) {

}*/

const getCurrentBatter = (game: Game): FieldPlayer | undefined => {
    if (game.inningType === InningType.TOP) {
        return game.topFieldPlayers.find((player) => player.batOrder === game.topBatOrder)
    } else {
        return game.bottomFieldPlayers.find((player) => player.batOrder === game.bottomBatOrder)
    }
}

const getCurrentPitcher = (game: Game): FieldPlayer | undefined => {
    if (game.inningType === InningType.TOP) {
        return findFieldPlayerByPosition(game.topFieldPlayers, Position.PITCHER)
    } else {
        return findFieldPlayerByPosition(game.bottomFieldPlayers, Position.PITCHER)
    }
}

const findFieldPlayerByPosition = (fieldPlayers: FieldPlayer[], position: Position): FieldPlayer | undefined => {
    return fieldPlayers.find((player) => player.position === position)
}

export const autoGame = (game: Game): Game => {
    console.log(game);
    if (isGameSet(game)) {
        return game
    } else {
        const nextState = game.outs === OUT.THREE ? changeOffence(game) : game;
        return autoGame(proceed(nextState))
    }
}

export const isGameSet = (game: Game): boolean => {
    if (game.outs !== OUT.THREE) {
        return false
    }
    if (game.inning < 9) {
        return false
    }
    if (game.inning === 13) {
        return true
    }
    switch (game.inningType) {
        case InningType.TOP:
            return game.topRun < game.bottomRun;
        case InningType.BOTTOM:
            return game.bottomRun < game.topRun;
        default:
            return false
    }
}

export const changeOffence = (game: Game): Game => (
    Object.assign({}, game, {
        inning: game.inningType === InningType.BOTTOM ? game.inning + 1 : game.inning,
        inningType: game.inningType === InningType.TOP ? InningType.BOTTOM : InningType.TOP,
        outs: OUT.NO,
        runnerFirst: null,
        runnerSecond: null,
        runnerThird: null,
        strike: Strike.NO,
        ball: Ball.NO
    })
)