import { CommonModule } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GameComponent } from "../game/game.component";
import { Game } from '../../models/game';
import { addToDebugVariable, ownDebugLogger } from '../../assets/debug';
import { Title } from 'chart.js';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  @Input() name: string = "Max Mustermann";
  @Input() playerActive: boolean = false;

  constructor() {
    
  }
}
