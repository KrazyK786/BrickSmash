import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { Paddle } from "../../../models/Paddle";
import {KEY} from "../../../models/constants";
import {Ball} from "../../../models/Ball";
import {Brick} from "../../../models/Brick";

import { BricksmashService } from "../../../services/games/bricksmash/bricksmash.service";

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
  ball: Ball;
  bricks: Brick[];
  score: number;
  lives: number;
  paused: boolean;
  moves = {
    [KEY.RIGHT]: (paddle: Paddle) => {
      paddle.rightPressed = true;
      paddle.leftPressed = false;
    },
    [KEY.LEFT]: (paddle: Paddle) => {
      paddle.leftPressed = true;
      paddle.rightPressed = false;
    }
  };

  @HostListener('window: keydown', ['$event'])
  keyEvent(event: KeyboardEvent){
    if (this.moves[event.code]){
      event.preventDefault();
      this.moves[event.code](this.paddle);
    }

    console.log(event.code);

    this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
    // this.paddle.draw();
    this.paddle.update()
  }

  constructor(private bricksmashService: BricksmashService) {
  }

  ngOnInit(): void {
   this.initBrickSmash();
   // this.resetGame();
    // this.x = this.ctx.canvas.width/2;
    // this.y = this.ctx.canvas.height-30;
  }

  initBrickSmash(): void{
    // Get the 2D context that we draw on
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.score = 0;
    this.lives = 3;
    this.paused = false;
    // this.initBricks();

    // Calculate size of canvas from constants..?
  }

  // initialize objects for game (maybe move to init method to draw canvas before start?
  startGame(): void{
    if (this.paused){
      this.animate();
    }

    this.paddle = new Paddle(this.ctx);
    this.ball = new Ball(this.ctx);
    this.bricks = this.initBricks();
    // this.drawBricks();

    // if game already running, canc
    if (this.requestId){
      cancelAnimationFrame(this.requestId);
    }

    this.animate();


    // console.log("now were cooking with oil!");
  }

  animate(): void {
    this.updateBall();
    this.updateBricks();

    this.drawBrickSmash();

    // requestAnimationFrame(this.animate.bind(this));
    this.requestId = requestAnimationFrame(this.animate.bind(this));
  }

  // Reset game
  resetGame(): void {
    this.ball.spawn();
    this.paddle = new Paddle(this.ctx);
    cancelAnimationFrame(this.requestId);
    this.paused = true;
    // this.bricks = this.initBricks();
  }

  updateBall(): void{
    // this.bricksmashService.screenCollision(this.ball, this.ctx);
    // this.bricksmashService.paddleCollision(this.ball, this.paddle, this.ctx);

    this.bricksmashService.paddleCollision(this.ball, this.paddle, this.ctx);
    // update lives
    if (this.bricksmashService.screenCollision(this.ball, this.ctx)){
      this.lives--;
      console.log('lives: ' + this.lives);
      this.resetGame();
    }
  }

  updateBricks(): void{
    for (let i = 0; i < this.bricks.length; i++){
      let tmpBrick = this.bricks[i];
      if (this.bricksmashService.brickCollision(tmpBrick, this.ball)){
        this.score += 1;
        tmpBrick.status = 0;
      }
    }
  }


  drawBrickSmash(): void {
    this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.paddle.draw();
    this.ball.draw();
    this.drawBricks();
  }

  initBricks(): Brick[]{
    let tmpBricks = [];

    let brickRowCount = 3;
    let brickColumnCount = 5;

    for (let c = 0; c < brickColumnCount; c++){
      // let tmpBricks = [c];
      for (let r = 0; r < brickRowCount; r++){

        const brickWidth = 75;
        const brickHeight = 20;
        const brickPadding = 10;
        const brickOffsetTop = 30;
        const brickOffsetLeft = 30;

        let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
        let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;

        let newBrick = new Brick(this.ctx, brickX, brickY);
        tmpBricks.push(newBrick);
        // tmpBricks.push(new Brick(this.ctx, brickX, brickY));

      }
    }
    return tmpBricks;
  }

  drawBricks(): void{
    this.bricks.forEach((brick) => {
      if (brick.status === 1){
        brick.draw();
      }
    });
  }
}
