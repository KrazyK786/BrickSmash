"use strict";

// Create ball object
class Ball {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.velocity = {
            x: Math.random() - 0.5,
            y: Math.random() - 0.5
        };
        this.radius = radius;
        this.color = color;
        //  
    }
}

// export class Ball{};
export default Ball;