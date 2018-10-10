import {Player} from "./player";

export enum OFFENCE{
    TEAM_1,
    TEAM_2
}

export enum InningType {
    TOP, // 表
    BOTTOM  // 裏
}

export enum OUT {
    NO,
    ONE,
    TWO,
    THREE
}

export enum Strike {
    NO,
    ONE,
    TWO,
    THREE
}

export enum Ball {
    NO,
    ONE,
    TWO,
    THREE,
    Four
}

// 打順
export enum BatOrder {
    ONE,
    TWO,
    THREE,
    Four,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE
}

export enum Position {
    PITCHER,
    CATCHER,
    FIRST,
    SECOND,
    THIRD,
    SHORTSTOP,
    LEFT,
    CENTER,
    RIGHT
}

export enum Direction {
    PITCHER,
    CATCHER,
    FIRST,
    SECOND,
    THIRD,
    SHORTSTOP,
    LEFT,
    CENTER,
    RIGHT,
    NONE
}


export interface BatResult {
    hitType: HitType
    hittingType: HittingType
    direction: Direction
}

export enum HitType {
    SINGLE,
    TWO_BASE,
    THREE_BASE,
    HIOMERUN,
    BUNT,
    SACRIFICE_FLY,
    OUT
}

export enum HittingType {
    GROUND_BALL,
    LINER,
    FLY,
    NONE
}

export interface Score{
    count: number
    result: BatResult
}

export interface PlayerWithScore {
    player: Player
    score: Score
}


export interface FieldPlayer {
    batOrder: BatOrder
    position: Position
    player: PlayerWithScore
}

export interface Game {
    inning: number
    inningType: InningType
    outs: OUT
    topRun: number // 先攻得点
    bottomRun: number  // 後攻得点
    runnerFirst: FieldPlayer | null
    runnerSecond: FieldPlayer | null
    runnerThird: FieldPlayer | null
    strike: Strike
    ball: Ball
    topBatOrder: BatOrder
    bottomBatOrder: BatOrder
    topFieldPlayers: FieldPlayer[] // 先攻出場選手
    bottomFieldPlayers: FieldPlayer[] // 後攻出場選手
    topBenchPlayers: PlayerWithScore[]
    bottomBenchPlayers: PlayerWithScore[]
    topOutFieldPlayers: PlayerWithScore[] // 先攻出場選手
    bottomOutFieldPlayers: PlayerWithScore[] // 後攻出場選手
}