import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-level5',
  templateUrl: './level5.component.html',
  styleUrls: ['./level5.component.scss']
})
export class Level5Component implements OnInit {
  success = false;
  key = 'SESAME';
  word1: string;
  word2: string;
  word3: string;
  word4: string;
  word5: string;
  word6: string;
  isProd = environment.production;
  constructor() {
    this.word1 = '';
    this.word2 = '';
    this.word3 = '';
    this.word4 = '';
    this.word5 = '';
    this.word6 = '';
  }

  ngOnInit(): void {
  }
  unlock() {
    console.log(this.word1 + this.word2 + this.word3 + this.word4 + this.word5 + this.word6);
    if (this.word1 + this.word2 + this.word3 + this.word4 + this.word5 + this.word6 === this.key) {
      this.success = true;
    }
  }
}
