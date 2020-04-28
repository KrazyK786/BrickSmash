import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { Paddle } from "../../../models/Paddle";

@Component({
  selector: 'app-bricksmash',
  templateUrl: './bricksmash.component.html',
  styleUrls: ['./bricksmash.component.css']
})
export class BricksmashComponent implements OnInit {
  // Get reference to canvas
  @ViewChild('brickSmashCanvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  ctx: CanvasRenderingContext2D;

  // experimenting
  // x: number;
  // y: number;
  // ballRadius: number = 10;
  requestId: any;
  paddle: Paddle;

  @HostListener('window: keydown', ['$event'])
  keyEvent(event: KeyboardEvent){
    console.log(event.code);
  }

  constructor() {
  }

  ngOnInit(): void {
   this.initBrickSmash();
    // this.x = this.ctx.canvas.width/2;
    // this.y = this.ctx.canvas.height-30;
  }

  initBrickSmash(): void{
    // Get the 2D context that we draw on
    this.ctx = this.canvas.nativeElement.getContext('2d');

    // Calculate size of canvas from constants..?
  }

  startGame(): void{
    // // clears canvas
    // this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.paddle = new Paddle(this.ctx);

    if (this.requestId){
      cancelAnimationFrame(this.requestId);
    }

    this.animate();


    console.log("now were cooking with oil!");
  }

  animate(): void {

    this.drawBrickSmash();

    // this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
    // this.drawBall(this.x,this.y,this.ballRadius);
    // this.moveBall();

    requestAnimationFrame(this.animate);
    // this.requestId = requestAnimationFrame(this.animate.bind(this));
  }


  drawBrickSmash(): void {
    this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.paddle.draw();
  }
}
