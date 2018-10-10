
export enum Throw {
    RIGHT,
    LEFT,
    BOTH
}

export enum Bat {
    RIGHT,
    LEFT,
    BOTH
}

interface BrakingBall {
    name: string
}

export interface Player {
    name: string
    age: number
    grade: number // 一軍か二軍か
    throws: Throw // どっち投げか
    bats: Bat // どっち打ちか
    catcherD: number // 各ポジションの守備適正
    pitcherD: number
    firstD: number
    secondD: number
    thirdD: number
    shortstopD: number
    leftD: number
    centerD: number
    rightD: number
    power: number
    meet: number
    run: number
    shoulder: number
    catch: number // エラーしにくさ
    fastBall: number // 球速
    control: number
    stamina: number
    recovery: number // 回復力
    mental: number
    breakingBalls: BrakingBall[] // 変化球
    ballPower: number // 球威
    growth: number // 伸び代
    toughness: number // 怪我しにくさ
    fatigue: number // 疲労
}