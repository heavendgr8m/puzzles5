import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  seconds = 0;
  minutes = 0;
  hours = 0;
  time = '';
  timer: any;

  constructor() { }

  startTimer() {
    this.timer = setInterval(() => { this.addSeconds(); }, 1000);
  }
  addSeconds() {
    this.seconds++;
    if (this.seconds >= 60) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes >= 60) {
        this.minutes = 0;
        this.hours++;
      }
    }
  }
  stopTimer() {
    clearTimeout(this.timer);
    this.timer = 0;
  }
  getTime() {
    this.time = this.hours.toString() + ' HR ' + this.minutes.toString() + ' M ' + this.seconds.toString() + ' S';
    return this.time;
  }
}
