"use strict";

// import * as variables from './Variables.js';

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

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
        
        this.draw = () =>{
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius,0, Math.PI*2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        };

        this.update = () => {
            this.draw();

            if (this.x - this.radius <= 0 || this.x + this.radius >= canvas.width){
                this.velocity.x = -this.velocity.x;
            }

            if (this.y - this.radius <= 0 || this.y + this.radius >= canvas.height){
                this.velocity.y = -this.velocity.y;
            }

            this.x += this.velocity.x;
            this.y += this.velocity.y;
        };

    }
}



// export class Ball{}
// export default Ball;
export {Ball,Brick};