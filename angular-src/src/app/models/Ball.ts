export class Ball {
  private x: any;
  private y: any;
  private velocity: {
    x: number;
    y: number
  };
  private radius: any;
  private color: any;
  private mass: number;
  private lives: number;
  private score: number;

  constructor(private ctx: CanvasRenderingContext2D) {
    this.spawn();
  }

  spawn(): void{
    this.x = this.ctx.canvas.width/2;
    this.y = this.ctx.canvas.height-30;
    this.velocity = {
      x: 2,
      y: -2
    };
    // this.velocity = {
    //   x: Math.random() * (5 - 2) + 2,
    //   y: -Math.random() * (5 - 2) - 2
    // };
    this.radius = 10;
    this.color = 'red';
    this.mass = 1;
    this.lives = 3;
    this.score = 0;
  }

  draw(): void{
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius,0, Math.PI*2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();

    // this.ctx.beginPath();
    // this.ctx.fillStyle = this.color;
    // this.ctx.fill();
    // this.ctx.arc(this.x, this.y, this.radius,0, Math.PI*2);
    // this.ctx.closePath();
  }

  update(): void{
    // if (this.score === bricks.length){
    //
    //   alert("YOU WIN, CONGRATULATIONS!!");
    //   document.location.reload();
    // } else{
    //   this.draw();
    //
    // }

    // collision detection with screen
    if (this.x - this.radius <= 0 || this.x + this.radius >= this.ctx.canvas.width){
      this.velocity.x = -this.velocity.x;
      // this.x = -this.x;
    }

    if (this.y - this.radius <= 0 || this.y + this.radius >= this.ctx.canvas.height){
      this.velocity.y = -this.velocity.y;
      // this.y = -this.y;
    }

    // // handle lives
    // else if (this.y + this.velocity.y > this.ctx.canvas.height - this.radius){
    //   if (this.x > paddle.paddleX && this.x < paddle.paddleX + paddle.paddleWidth && (this.y + this.velocity.y > this.ctx.canvas.height - this.radius - paddle.paddleHeight || this.y + this.velocity.y < this.radius + paddle.paddleHeight)){//if ball hits paddle, reverse direction
    //     // adjust angle of ball coming off paddle by modifying x value
    //     this.velocity.x = this.velocity.x * paddleCollision(this, paddle);
    //
    //     // reflect y velocity
    //     this.velocity.y = -this.velocity.y;
    //   }
    //   else{
    //     this.lives--;
    //     if (this.lives == -1){ // updated logic from '!lives' to allow lives to hit 0 before game over is given
    //       alert("GAME OVER"); //if ball hits bottom of screen, alert GAME OVER
    //       document.location.reload();
    //     }
    //     else{
    //       this.x = canvas.width / 2;
    //       this.y = canvas.height - 30;
    //       this.velocity = {
    //         x: Math.random() * (5-2) + 2,
    //         y: -Math.random() * (5-2) - 2
    //       };
    //       paddle.paddleX = (canvas.width - paddle.paddleWidth) / 2;
    //     }
    //   }
    // }
    //
    //
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    this.draw();
  }
}
