import { Status } from './game-status';

export class GameLogic {

    gameField: Array<number> = [];

    currentTurn: number;

    gameStatus: Status;

    public constructor(){
        this.gameStatus = Status.STOP;
        this.gameField = [0, 0, 0, 0, 0, 0, 0, 0];
        this.currentTurn = this.randomPlayerStart();
    }

    gameStart(): void {
        this.gameField = [0, 0, 0, 0, 0, 0, 0, 0];
        this.currentTurn = this.randomPlayerStart();
        this.gameStatus = Status.START;
    }

    randomPlayerStart(): number{
        const startingPlayer = Math.floor(Math.random() * 2) + 1
        return startingPlayer
    }

    setField(position: number, value: number): void{
        this.gameField[position] = value;
    }

    getPlayerColorClass(): string {
        const colorClass = (this.currentTurn === 2) ? 'player-two' : 'player-one';
        return colorClass;
    }

    changePlayer(): void {
        this.currentTurn = (this.currentTurn === 2) ? 1 : 2;
    }
}

