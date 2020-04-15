import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-bricksmash',
  templateUrl: './bricksmash.component.html',
  styleUrls: ['./bricksmash.component.css']
})
export class BricksmashComponent implements OnInit {
  // Get reference to canvas
  @ViewChild("canvas", { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  ctx: CanvasRenderingContext2D;

  // experimenting
  x: number;
  y: number;
  ballRadius: number = 10;

  constructor() {
  }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.x = this.ctx.canvas.width/2;
    this.y = this.ctx.canvas.height-30;
  }

  startGame(): void{
    // // clears canvas
    // this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.animate();


    console.log("now were cooking with oil!");
  }

  animate(): void {
    this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.drawBall(this.x,this.y,this.ballRadius);
    this.moveBall();

    requestAnimationFrame(this.animate.bind(this));
  }

  drawBall(x,y,ballRadius):void {

    this.ctx.beginPath();
    this.ctx.arc(x,y,ballRadius,0, Math.PI*2);
    this.ctx.fillStyle = 'red'; // ballOne.color;
    this.ctx.fill();
    this.ctx.closePath();
  }

  moveBall(): void {
    let dx = 2;
    let dy = -2;

    // collision detection with screen
    if (this.x - this.ballRadius <= 0 || this.x + this.ballRadius >= this.ctx.canvas.width){
      this.x = -this.x;
    }

    if (this.y - this.ballRadius <= 0 || this.y + this.ballRadius >= this.ctx.canvas.height){
      this.y = -this.y;
    }

    this.x += dx;
    this.y += dy;
  }

}
