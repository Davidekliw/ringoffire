import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {
  constructor(private router: Router) {

  }

  newGame() {
    // Start Game
    // this.router.navigate(['/game'], { skipLocationChange: true });
    this.router.navigateByUrl('/game', { skipLocationChange: true }); //ändert die URL man kann aber nicht zurück drücken
    this.router.navigateByUrl('/game'); //ändert die URL und man kann zurück drücken
  }
}
