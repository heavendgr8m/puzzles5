import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level4',
  templateUrl: './level4.component.html',
  styleUrls: ['./level4.component.scss']
})
export class Level4Component implements OnInit {
  morsecode = '. ..--- / .- .---- / . ---.. / .- ...--';
  rows = 'e2a1e8a3';
  key: string;
  lvl5unlocked = false;
  constructor() {
    this.key = '';
  }

  ngOnInit(): void {
  }
  appendRows(cellval: string) {
    this.key = this.key.concat(cellval);
    console.log(cellval, this.key);
    if (this.key === this.rows) {
      this.lvl5unlocked = true;
      // console.log('Unlocked Level 5');
    } else if (this.key.length >= 8) {
      this.key = '';
    }
  }
}
