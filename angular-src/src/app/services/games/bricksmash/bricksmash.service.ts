import { Injectable } from '@angular/core';
import {Brick} from "../../../models/Brick";
import {Paddle} from "../../../models/Paddle";
import {Ball} from "../../../models/Ball";

@Injectable({
  providedIn: 'root'
})
export class BricksmashService {

  constructor() { }

  // hasCollision(ball: Ball, paddle: Paddle, bricks: Brick[]): void{
  //   for (let i = 0; i < bricks.length; i++){
  //     this.brickCollision(bricks[i], ball);
  //   }
  // }

  // detect if ball has collided with paddle
  paddleCollision(ball: Ball, paddle: Paddle, ctx: CanvasRenderingContext2D): boolean{

    if ((ball.x > paddle.x) &&
      (ball.x < paddle.x + paddle.width) &&
      (
        (ball.y + ball.velocity.y > ctx.canvas.height - ball.radius - paddle.height) ||
        (ball.y + ball.velocity.y < ball.radius + paddle.height)
      )){//if ball hits paddle, reverse direction
      // adjust angle of ball coming off paddle by modifying x value
      // ball.velocity.x = ball.velocity.x * paddleCollision(ball, paddle);

      // reflect y velocity
      ball.velocity.y = -ball.velocity.y;

      return true;
    }
    else{
      // ball.lives--;
      // console.log('lives: ' + ball.lives);
      return false;
      // if (ball.lives == -1){ // updated logic from '!lives' to allow lives to hit 0 before game over is given
      //   alert("GAME OVER"); //if ball hits bottom of screen, alert GAME OVER
      //   document.location.reload();
      // }
      // else{
      //   ball.x = ctx.canvas.width / 2;
      //   ball.y = ctx.canvas.height - 30;
      //   ball.velocity = {
      //     x: Math.random() * (5-2) + 2,
      //     y: -Math.random() * (5-2) - 2
      //   };
      //   paddle.paddleX = (canvas.width - paddle.paddleWidth) / 2;
      // }
    }


    // //TODO figure out how to handle x becoming 0 causing ball not to change direction :(
    // let ballPos = ball.x - paddle.x;
    // let relativePos = ( paddle.width - ballPos );
    // let angle = relativePos * ( Math.PI / paddle.width ); //translate to radians - this finds the number of radians per paddle pixel
    //
    // // Once you got the angle, take the cos of it to grab the direction.
    // //Multiply the direction times the ball's vel, and you got the ball's new velocity
    // let newXvel = Math.cos( angle ) * ball.velocity.x;
    //
    // return newXvel;

  }



  // detect if ball has collided with brick
  brickCollision(brick: Brick, ball: Ball): boolean{

    if (brick.status === 1){
      if (
        (ball.x > brick.x) &&
        (ball.x < brick.x + brick.width) &&
        (ball.y > brick.y) &&
        (ball.y < brick.y + brick.height)
      ){
        ball.velocity.y = -ball.velocity.y; //if the center of the brick in question is within a brick, then a collision is considered to have occurred
        brick.status = 0;
        ball.score++;

        console.log('collision detected!');
        return true;
      }

    }

    return false;

  }

  // Did ball 'collide' with bottom of screen
  screenCollision(ball: Ball, ctx: CanvasRenderingContext2D): boolean{
    let collisionOccurred = false;
    // collision detection with screen
    if (ball.x - ball.radius <= 0 || ball.x + ball.radius >= ctx.canvas.width){
      ball.velocity.x = -ball.velocity.x;
      // this.x = -this.x;
      // collisionOccurred = true;
    }

    if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= ctx.canvas.height){
      // ball.velocity.y = -ball.velocity.y;
      // this.y = -this.y;
      collisionOccurred = true;
    }


    ball.x += ball.velocity.x;
    ball.y += ball.velocity.y;

    return collisionOccurred;
  }
}
