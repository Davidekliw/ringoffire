import { Component, OnInit, ɵgenerateStandaloneInDeclarationsError } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string | undefined = '';
  game!: Game;

  constructor() {
    this.game = new Game();
  }

  ngOnInit(): void {
    this.newGame;
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    this.currentCard = this.game.stack.pop();
    this.game.playedCards.push(this.currentCard!);
  }
}
