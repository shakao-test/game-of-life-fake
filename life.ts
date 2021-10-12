// Add your code here
//% color="#AA278D" weight=100
namespace life {
    export enum Direction {
        //% block="north"
        North,
        //% block="north east"
        NorthEast,
        //% block="north west"
        NorthWest,
        //% block="south"
        South,
        //% block="south east"
        SouthEast,
        //% block="south west"
        SouthWest,
        //% block="east"
        East,
        //% block="west"
        West
    }

    //% block="is alive at x $x y $y"
    export function getIsAlive(x: number, y: number) {
        return true;
    }

    //% block="set is alive $alive at x $x y $y"
    export function setIsAlive(alive: boolean, x: number, y: number) {

    }

    //% block="is alive to direction $direction of x $x y $y"
    export function getIsAliveDirection(direction: Direction, x: number, y: number) {
        return true;
    }

    //% block="$d"
    export function direction(d: Direction = Direction.North) {
        return d;
    }
}