import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { Paddle } from "../../../models/Paddle";
import {KEY} from "../../../models/constants";
import {Ball} from "../../../models/Ball";
import {Brick} from "../../../models/Brick";

import { BricksmashService } from "../../../services/games/bricksmash/bricksmash.service";
import {UserData} from "../../../models/UserData";
import {AuthService} from "../../../services/auth.service";
import {GameService} from "../../../services/games/game.service";
import {User} from "../../../models/User";

@Component({
  selector: 'app-bricksmash',
  templateUrl: './bricksmash.component.html',
  styleUrls: ['./bricksmash.component.css']
})
export class BricksmashComponent implements OnInit {
  // Set User
  user: UserData;

  // Get reference to canvas
  @ViewChild('brickSmashCanvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  ctx: CanvasRenderingContext2D;

  highscoreUserArray: UserData[];

  requestId: any;
  paddle: Paddle;
  ball: Ball;
  bricks: Brick[];
  score: number;
  lives: number;
  paused: boolean;
  gameStarted: boolean;
  highScore: number;
  pauseButtonText: string;
  pauseButtonClass: string;
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
    if (this.gameStarted){
      if (this.moves[event.code]){
        event.preventDefault();
        this.moves[event.code](this.paddle);
      }

      // console.log(event.code);

      this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
      // this.paddle.draw();
      this.paddle.update()
    }
  }

  // // hacky 'debugging' for x/y coordinates
  // @HostListener('document:mouseup', ['$event'])
  // onMouseUp(e){
  //   console.log(e);
  // }

  @HostListener('document:mousemove', ['$event'])
    onMouseMove(e){
    if (this.gameStarted) {
      let relativeX = e.clientX - this.ctx.canvas.offsetLeft;
      if (relativeX > 0 && relativeX < this.ctx.canvas.width) {
        this.paddle.x = relativeX - this.paddle.width / 2;
      }
      // console.log(e);
    }
  }

  constructor(
    private bricksmashService: BricksmashService,
    private authService: AuthService,
    private gameService: GameService
              ) {
  }

  ngOnInit(): void {
    // TODO: use local storage?
    this.authService.getProfile().subscribe(profile => {
      console.log(profile);
      this.user = profile.user;

      // set highscore on page load
      // this.highScore = this.user.bricksmashscore;
      this.highScore = this.user.games.bricksmash.highscore;
    },
    err => {
    console.log(err);
    return false;
    }
    );
    this.gameService.getHighScores().subscribe( resArray => {
      console.log(resArray);
      this.highscoreUserArray = resArray;
    })

    this.initBrickSmash();
   // this.resetGame();
    // this.x = this.ctx.canvas.width/2;
    // this.y = this.ctx.canvas.height-30;
  }

  initBrickSmash(): void{
    // Get the 2D context that we draw on
    this.ctx = this.canvas.nativeElement.getContext('2d');

    this.resetGame();
    // this.initBricks();

    // Calculate size of canvas from constants..?
  }

  // initialize objects for game (maybe move to init method to draw canvas before start?
  startGame(): void{
    this.resetGame();
    this.paddle = new Paddle(this.ctx);
    this.ball = new Ball(this.ctx);
    this.bricks = this.initBricks();
    // this.drawBricks();

    // if game already running, canc
    if (this.requestId){
      cancelAnimationFrame(this.requestId);
    }
    this.gameStarted = true;

    this.animate();


    // if (this.paused){
    //   this.paused = false;
    //   this.animate();
    // }
    //
    // else {
    //   this.paddle = new Paddle(this.ctx);
    //   this.ball = new Ball(this.ctx);
    //   this.bricks = this.initBricks();
    //   // this.drawBricks();
    //
    //   // if game already running, canc
    //   if (this.requestId){
    //     cancelAnimationFrame(this.requestId);
    //   }
    //   this.gameStarted = true;
    //
    //   this.animate();
    //
    // }


    // console.log("now were cooking with oil!");
  }

  animate(): void {
    if (this.paused){
      return;
    }

    this.updateBall();

    if (this.gameStarted === false){
      return;
    }

    this.updateBricks();

    this.drawBrickSmash();

    // requestAnimationFrame(this.animate.bind(this));
    this.requestId = requestAnimationFrame(this.animate.bind(this));
  }

  pause(): void{
    this.paused = !this.paused;

    if (this.paused){
      this.pauseButtonText = 'Play';
      this.pauseButtonClass = 'btn btn-success';
      cancelAnimationFrame(this.requestId);
      return;
    }

    else {
      this.pauseButtonText = 'Pause';
      this.pauseButtonClass = 'btn btn-warning';
      this.animate();
    }


  }

  resetGame(): void{
    this.score = 0;

    // Development purposes
    this.lives = 0;
    // this.lives = 3;

    this.paused = false;

    this.pauseButtonText = 'Pause';
    this.pauseButtonClass = 'btn btn-warning';

    // this.highScore = this.user.bricksmashscore;

    // if (!this.highScore){
    //   this.highScore = 0;
    // }
  }

  // Reset game
  respawn(): void {
    this.ball.spawn();
    // this.paddle = new Paddle(this.ctx);
    this.paddle.spawn();
    this.paused = true;
    cancelAnimationFrame(this.requestId);
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
      if (this.lives === -1){
        this.gameOver();
        // return;
      }
      else{
        this.respawn();
        // return;
      }
      // return;
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

  gameOver(): void {
    this.gameStarted = false;
    cancelAnimationFrame(this.requestId);

    // update highscore
    if (this.score > this.highScore){
      this.gameService.updateScore('bricksmash', this.score).subscribe( res => {
        // console.log(res);
        if (res.success === true){
          // TODO: add this.authService.updateUserData(res.user) ?
          // this.highScore = res.user.bricksmashscore;
          this.highScore = res.user.games.bricksmash.highscore;
        }
      });
    }
    // this.highScore = this.score > this.highScore ? this.score : this.highScore;


    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, this.ctx.canvas.height/3, this.ctx.canvas.width, this.ctx.canvas.height/3);
    // this.ctx.fillRect(1, 3, 8, 1.2);
    this.ctx.font = '25px "Press Start 2P", Arial';
    // this.ctx.font = '50px Arial';
    // this.ctx.font = '1px Arial';
    this.ctx.fillStyle = 'red';
    this.ctx.fillText('GAME OVER', this.ctx.canvas.width/5, this.ctx.canvas.height/2);
    // this.ctx.fillText('GAME OVER', 1.8, 4);
    console.log('Game over');
    // return;
  }
}
