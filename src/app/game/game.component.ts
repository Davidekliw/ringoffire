import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';
import { addToDebugVariable, ownDebugLogger } from '../../assets/debug';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from "../game-info/game-info.component";


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule, MatDialogModule, MatFormFieldModule, GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string | undefined = 'card_cover';
  game!: Game;
  flyCard = false;
  // name: string = 'Max Mustermann';

  constructor(public dialog: MatDialog) {
    this.game = new Game();
  }

  ngOnInit(): void {
    this.newGame();
    addToDebugVariable('game', this.game);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.trim() !== '') {
        this.game.players.push(name);
        console.log('The dialog was closed', name);
        // this.name = result;
      }
    });
  }

  newGame() {
    this.game = new Game();
    ownDebugLogger(`game`, this.game);
  }

  takeCard() {
    this.currentCard = this.game.stack.pop();
    this.flyCard = true;
    this.game.currentPlayer = (this.game.currentPlayer + 1) % this.game.players.length;
    setTimeout(() => {
      this.flyCard = false;
      this.game.playedCards.push(this.currentCard!);
      this.pickCardAnimation = true
      ownDebugLogger(`this.currentCard`, this.currentCard);
    }, 1000);
  }
}
