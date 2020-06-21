import { Component, OnInit } from '@angular/core';
import { TimerService } from './services/timer.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'puzzles5';
  time = '';
  constructor(public timerApi: TimerService) {

  }
  ngOnInit() {
    this.timerApi.startTimer();
    setInterval(() => {
      this.time = this.timerApi.getTime();
    }, 1000);
  }
}
