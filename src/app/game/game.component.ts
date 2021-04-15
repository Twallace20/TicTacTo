import { Component, OnInit } from '@angular/core';
import { GameLogic } from '../game-logic';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [GameLogic]
})
export class GameComponent implements OnInit {

  constructor(public game: GameLogic) { }
  ngOnInit(): void {
  }

  startGame(): void {
    this.game.gameStart();
    const currentPlayer = 'Current turn: ' + this.game.currentTurn;
    const currentTurn = this.game.currentTurn
    const information = document.querySelector('.current-status')
    // information.innerHTML = currentPlayer 
  }

  async clickSubfield( subfield: any ): Promise<void> {
    if ( this.game.gameStatus === 1 ) {
      const position = subfield.currentTarget.getAttribute('position');

      this.game.setField(position, this.game.currentTurn);
      const color = this.game.getPlayerColorClass();
      subfield.currentTarget.classList.add(color)
    }

    this.game.changePlayer();
  }
}

