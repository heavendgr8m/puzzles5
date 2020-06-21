import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  userName: string;
  isProd = environment.production;
  constructor() { }

  ngOnInit(): void {
    // this.userName = prompt('Please enter your Name');
  }

}
