import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  userName: string;
  isProd = environment.production;
  completionTime: string;
  constructor(public timerApi: TimerService) { }

  ngOnInit(): void {
    this.timerApi.stopTimer();
    this.completionTime = this.timerApi.getTime();
    // console.log(this.timerApi.getTime());
    this.userName = prompt('Please enter your Name');
  }

}
