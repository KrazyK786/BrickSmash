/*jslint node: true */
"use strict";

// import * as variables from './Variables.js';

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function paddleCollision(ball, paddle){
    //TODO figure out how to handle x becoming 0 causing ball not to change direction :(
    var ballPos = ball.x - paddle.paddleX;
    var relativePos = ( paddle.paddleWidth - ballPos );
    var angle = relativePos * ( Math.PI / paddle.paddleWidth ); //translate to radians - this finds the number of radians per paddle pixel 

    // Once you got the angle, take the cos of it to grab the direction. 
    //Multiply the direction times the ball's vel, and you got the ball's new velocity
    var newXvel = Math.cos( angle ) * ball.velocity.x;

    return newXvel;

}



function collisionDetection (brick, ball){
        
    if (brick.status == 1){

            if (ball.x > brick.x && ball.x < brick.x + brick.width && ball.y > brick.y && ball.y < brick.y + brick.height){
                ball.velocity.y = -ball.velocity.y; //if the center of the brick in question is within a brick, then a collission is considered to have occured
                brick.status = 0;
                ball.score++;
            }
        }
}

// Create paddle object
class Paddle {
    constructor(){
        this.paddleHeight = 10;
        this.paddleWidth = 75;
        this.paddleX = (canvas.width - this.paddleWidth) / 2;

        //testingggg
        this.velocity = {
            x: Math.random() * (5-2) + 2,
            y: -Math.random() * (5-2) - 2
        };

        this.rightPressed = false;
        this.leftPressed = false;

        this.draw = () =>{
            ctx.beginPath();
            ctx.rect(this.paddleX,canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        };

        this.update = () =>{
            this.draw();
             //detect whether the paddle is off the screen and move accordingly
             if (this.rightPressed && this.paddleX < canvas.width - this.paddleWidth){
                this.paddleX += 7;
            }

            if (this.leftPressed && this.paddleX > 0){
                this.paddleX -= 7;
            }

        };
    }
}

// Create brick object
class Brick {
    constructor(x, y, status, height, width){
        this.x = x;
        this.y = y;
        this.status = status;
        this.height = height;
        this.width = width;

        //testingggg
        this.velocity = {
            x: Math.random() * (5-2) + 2,
            y: -Math.random() * (5-2) - 2
        };

        this.draw = () =>{
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();

        };

        this.update = (ball) =>{
            if (this.status == 1){
                    this.draw();

            }
            collisionDetection(this,ball);
        };
    }
}

// Create ball object
class Ball {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.velocity = {
            x: Math.random() * (5-2) + 2,
            y: -Math.random() * (5-2) - 2
        };
        this.radius = radius;
        this.color = color;
        this.mass = 1;
        this.lives = 3;
        this.score = 0;
        
        this.draw = () =>{
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius,0, Math.PI*2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        };

        this.update = (paddle, bricks) => {
            if (this.score == bricks.length){
                
                alert("YOU WIN, CONGRATULATIONS!!");
                document.location.reload();
            } else{
                this.draw();

            }

            // collision detection with screen
            if (this.x - this.radius <= 0 || this.x + this.radius >= canvas.width){
                this.velocity.x = -this.velocity.x;
            }

            if (this.y - this.radius <= 0 || this.y + this.radius >= canvas.height){
                this.velocity.y = -this.velocity.y;
            }

            // handle lives
            else if (this.y + this.velocity.y > canvas.height - this.radius){
                if (this.x > paddle.paddleX && this.x < paddle.paddleX + paddle.paddleWidth && (this.y + this.velocity.y > canvas.height - this.radius - paddle.paddleHeight || this.y + this.velocity.y < this.radius + paddle.paddleHeight)){//if ball hits paddle, reverse direction
                    // adjust angle of ball coming off paddle by modifying x value
                    this.velocity.x = this.velocity.x * paddleCollision(this, paddle);

                    // reflect y velocity
                    this.velocity.y = -this.velocity.y;
                }
                else{
                    this.lives--;
                    if (this.lives == -1){ // updated logic from '!lives' to allow lives to hit 0 before game over is given
                        alert("GAME OVER"); //if ball hits bottom of screen, alert GAME OVER
                        document.location.reload();
                    }
                    else{
                        this.x = canvas.width / 2;
                        this.y = canvas.height - 30;
                        this.velocity = {
                            x: Math.random() * (5-2) + 2,
                            y: -Math.random() * (5-2) - 2
                        };
                        paddle.paddleX = (canvas.width - paddle.paddleWidth) / 2;
                    }
                }
            }


            this.x += this.velocity.x;
            this.y += this.velocity.y;
        };

    }
}

export {Ball,Brick,Paddle};
// module.exports = objects;
