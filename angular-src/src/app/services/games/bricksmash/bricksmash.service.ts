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

  paddleCollision(ball: Ball, paddle: Paddle): void{



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
}
