"use strict";

// import * as variables from './Variables.js';

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let rightPressed = false;
let leftPressed = false;

//EventListener for key presses
document.addEventListener("keydown",keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//EventLister for mouse
document.addEventListener("mousemove", mouseMoveHandler, false);

// EventListener for touch controls
document.addEventListener("touchstart", touchHandler);
document.addEventListener("touchmove", touchHandler);

// touch handler function
function touchHandler(e){
    let relativeX = e.touches[0].clientX - canvas.offsetLeft; 
    if (e.touches){
        if (relativeX > 0 && relativeX < canvas.width){
            Paddle.prototype.paddleX = relativeX - Paddle.prototype.paddle.paddleWidth / 2;
            e.preventDefault();
        }
    }
}

function mouseMoveHandler(e){
    let relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width){
        Paddle.prototype.paddleX = relativeX - Paddle.prototype.paddleWidth / 2;
    }
}

function keyDownHandler(e){
    if (e.keyCode == 39 || e.which == 39){
        rightPressed = true;
        console.log(rightPressed);
    }

    else if (e.keyCode == 37 || e.which == 37){
        leftPressed = true;
    }
}

function keyUpHandler(e){
    if (e.keyCode == 39 || e.which == 39){
        rightPressed = false;
    }

    else if (e.keyCode == 37 || e.which == 37){
        leftPressed = false;
    }
}


function collisionDetection (brick, ball){
        
    if (brick.status == 1){

            if (ball.x > brick.x && ball.x < brick.x + brick.width && ball.y > brick.y && ball.y < brick.y + brick.height){
                ball.velocity.y = -ball.velocity.y; //if the center of the brick in question is within a brick, then a collission is considered to have occured
                brick.status = 0;
                // score++;
                // if (score == brickRowCount * brickcolumnCount){
                //     alert("YOU WIN, CONGRATULATIONS!!");
                //     document.location.reload();
                // }
            }
        }
}

// Create paddle object
class Paddle {
    constructor(){
        this.paddleHeight = 10;
        this.paddleWidth = 75;
        this.paddleX = (canvas.width - this.paddleWidth) / 2;

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
             if (rightPressed && this.paddleX < canvas.width - this.paddleWidth){
                this.paddleX += 7;
            }

            if (leftPressed && this.paddleX > 0){
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

        this.update = (paddle) => {
            if (this.lives == -1){
                
                // alert("YOU WIN, CONGRATULATIONS!!");
                // document.location.reload();
                alert("GAME OVER");
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
            else if (this.y + this.velocity.y > canvas.height - this.ballRadius){
                if (this.x > paddle.paddleX && x < paddle.paddleX + paddle.paddleWidth && (this.y + this.velocity.y > canvas.height - this.ballRadius - paddle.paddleHeight || this.y + this.velocity.y < this.ballRadius + paddle.paddleHeight)){//if ball hits paddle, reverse direction
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



// export class Ball{}
// export default Ball;
export {Ball,Brick,Paddle};