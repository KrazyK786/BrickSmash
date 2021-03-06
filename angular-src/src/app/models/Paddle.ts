export class Paddle {
  height: number;
  width: number;
  x: number;
  velocity: { x: number; y: number };
  rightPressed: boolean;
  leftPressed: boolean;
  color: string;

  constructor(
    private ctx: CanvasRenderingContext2D
  ) {
      this.spawn();
  }

  spawn(): void{
    this.color = 'blue';

    this.height = 10;
    this.width = 75;
    this.x = (this.ctx.canvas.width - this.width) / 2;

    this.rightPressed = false;
    this.leftPressed = false;

    //testingggg
    this.velocity = {
      x: Math.random() * (5 - 2) + 2,
      y: -Math.random() * (5 - 2) - 2
    }
  }

  draw(): void{
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x,this.ctx.canvas.height - this.height, this.width, this.height);
    // this.ctx.rect(this.x,this.ctx.canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);


    // this.ctx.beginPath();
    // this.ctx.fill();
    // this.ctx.closePath();
  }

  update(): void{
    this.draw();

    //detect whether the paddle is off the screen and move accordingly
    if (this.rightPressed && this.x < this.ctx.canvas.width - this.width){
      this.x += 7;
    }

    if (this.leftPressed && this.x > 0){
      this.x -= 7;
    }

  }
}
