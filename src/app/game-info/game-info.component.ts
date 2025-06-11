import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ownDebugLogger } from '../../assets/debug';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule, MatButtonToggleModule],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent implements OnInit, OnChanges {
  cardAction = {
    en: [
      { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
      { title: 'You', description: 'You decide who drinks.' },
      { title: 'Me', description: 'Congrats! Drink a shot!' },
      { title: 'Category', description: 'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.' },
      { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one. The next player repeats both and adds a third, and so on.' },
      { title: 'Chicks', description: 'All girls drink.' },
      { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
      { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
      { title: 'Thumbmaster', description: 'You can place your thumb on the table at any time. The last person to follow drinks. You remain Thumbmaster until a new one is drawn.' },
      { title: 'Men', description: 'All men drink.' },
      { title: 'Quizmaster', description: 'You are the Quizmaster. If anyone answers your questions, they drink. Stay Quizmaster until a new one is drawn.' },
      { title: 'Never have I ever...', description: 'Say something you never did. Everyone who did it has to drink.' },
      { title: 'Rule', description: 'Make a rule. Everyone needs to drink when they break the rule.' },
    ],
    de: [
      { title: 'Wasserfall', description: 'Alle müssen gleichzeitig anfangen zu trinken. Sobald Spieler 1 aufhört, darf Spieler 2 aufhören. Spieler 3 darf aufhören, sobald Spieler 2 aufhört, und so weiter.' },
      { title: 'Du', description: 'Du entscheidest, wer trinken muss.' },
      { title: 'Ich', description: 'Glückwunsch! Trink einen Shot!' },
      { title: 'Kategorie', description: 'Denk dir eine Kategorie aus (z. B. Farben). Jeder Spieler muss einen Begriff aus der Kategorie nennen.' },
      { title: 'Tanzmove', description: 'Spieler 1 macht einen Tanzmove. Spieler 2 wiederholt ihn und fügt einen weiteren hinzu. Der nächste Spieler wiederholt beide und fügt einen dritten hinzu usw.' },
      { title: 'Mädels', description: 'Alle Mädchen trinken.' },
      { title: 'Himmel', description: 'Hände hoch! Der letzte Spieler muss trinken.' },
      { title: 'Trinkpartner', description: 'Wähle einen Trinkpartner. Immer wenn du trinkst, muss er auch trinken – und umgekehrt.' },
      { title: 'Daumenmeister', description: 'Du kannst jederzeit deinen Daumen auf den Tisch legen. Der letzte, der folgt, muss trinken. Du bleibst Daumenmeister, bis ein neuer gezogen wird.' },
      { title: 'Jungs', description: 'Alle Männer trinken.' },
      { title: 'Quizmaster', description: 'Du bist der Quizmaster. Wer deine Fragen beantwortet, muss trinken. Du bleibst Quizmaster, bis ein neuer gezogen wird.' },
      { title: 'Ich habe noch nie...', description: 'Sage etwas, das du noch nie getan hast. Wer es schon getan hat, muss trinken.' },
      { title: 'Regel', description: 'Erfinde eine Regel. Jeder, der sie bricht, muss trinken.' }
    ]
  };
  @Input() card: string | undefined = "Das ist nur ein Beispiel";
  title: string = 'Please pick a card';
  description: string = 'Please pick a card to see the action description.';
  speak: 'de' | 'en' = 'de';
  cardsToShow = this.cardAction[this.speak];

  changeLanguage(lang: 'de' | 'en') {
    this.speak = lang;
    this.cardsToShow = this.cardAction[this.speak];
    ownDebugLogger('Language changed to', this.speak);
    ownDebugLogger('Language changed to', this.cardsToShow);
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.card && this.card !== 'card_cover' && this.card !== undefined) {
      // console.log('Current card is:', this.card);
      console.log('Current card speak:', this.speak);
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardsToShow[cardNumber - 1].title;
      this.description = this.cardsToShow[cardNumber - 1].description;
    }
  }
}
