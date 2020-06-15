import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.scss']
})
export class Level3Component implements OnInit, AfterViewInit {

  @ViewChild('mycanvas', { static: false }) mycanvas: ElementRef<HTMLCanvasElement>;
  public ctx: CanvasRenderingContext2D;
  public raf;
  pixelInterval: any;
  unlocked: boolean;
  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    console.log(event, this.pixelInterval);
    this.unlocked = true;
    if (this.pixelInterval) {
      clearTimeout(this.pixelInterval);
      this.pixelInterval = 0;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    const width = this.mycanvas.nativeElement.width = window.innerWidth;
    const height = this.mycanvas.nativeElement.height = window.innerHeight;
    this.ctx = this.mycanvas.nativeElement.getContext('2d');
    let i = 0;
    let j = 0;
    this.pixelInterval = setInterval(() => {
      this.animate(i, j);
      this.animate(i + 5, j);
      j += 2;
      console.log(i + '/' + j);
      if (j >= 140) {
        i += 2;
        j = 0;
        if (i >= 140) {
          cancelAnimationFrame(this.raf);
        }
      }
      this.raf = requestAnimationFrame(() => {
        this.animate(i, j);
      });
      // this.animate(width, height);
      console.log('Adding Pixel');
      // i += 10;
    }, 5);
  }
  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  animate(i, j) {
    this.ctx.beginPath();
    this.ctx.fillRect(10 * j, 10 * i, 10, 10);
    this.ctx.fillStyle = 'black';
    this.ctx.fill();
    this.ctx.closePath();
    // // update

  }

}
