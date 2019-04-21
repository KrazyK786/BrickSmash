"use strict";

// import * as variables from './Variables.js';

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

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
export default Ball;