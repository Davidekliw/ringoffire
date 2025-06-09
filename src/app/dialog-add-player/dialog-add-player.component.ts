import { Component, OnInit } from '@angular/core';
import { addToDebugVariable, ownDebugLogger } from '../../assets/debug';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogContent } from '@angular/material/dialog';
import { MatDialogActions } from '@angular/material/dialog';
import { MatDialogClose } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatInputModule, MatFormFieldModule, MatDialogContent, MatDialogActions, MatDialogClose],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent implements OnInit {
  name: string = 'Max Mustermann';
  constructor() { };

  onClick() {
    console.log(this.name);

  };

  onNoClick() {
    console.log(this.name);

  };

  ngOnInit(): void {
    addToDebugVariable('dialogAddPlayerComponent', this);
    ownDebugLogger('DialogAddPlayerComponent initialized with name:', this.name);
  }

}
