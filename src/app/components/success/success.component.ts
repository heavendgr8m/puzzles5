import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TimerService } from 'src/app/services/timer.service';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';


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
  share() {
    html2canvas(document.getElementById('success')).then((canvas) => {
      // const tempcanvas = document.createElement('canvas');
      // tempcanvas.width = 350;
      // tempcanvas.height = 350;
      // const context = tempcanvas.getContext('2d');
      // context.drawImage(canvas, 112, 0, 288, 200, 0, 0, 350, 350);
      // const link = document.createElement('a');
      // link.href = tempcanvas.toDataURL('image/jpg');
      saveAs(canvas.toDataURL('image/jpg'), this.userName + '.jpg');
    });
  }
}
