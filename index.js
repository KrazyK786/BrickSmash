/*jslint node: true */
"use strict";

import {Ball, Brick, Paddle} from "./objects.js";

//JS code goes here
let paused = true;
let globalID;
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let ballRadius = 10;

// //define starting x and y coordinates of ball
let x = canvas.width/2;
let y = canvas.height-30;

let ballOne = new Ball(x,y,ballRadius,"#0095DD");
let paddle = new Paddle();


//define movement/speed of ball by adding dx or dy
let dx = 2;
let dy = -2;

//score letiable
let score = 0;

//lives letiable
let lives = 2;

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
            paddle.paddleX = relativeX - paddle.paddleWidth / 2;
            e.preventDefault();
        }
    }
}

function mouseMoveHandler(e){
    let relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width){
        paddle.paddleX = relativeX - paddle.paddleWidth / 2;
    }
}

function keyDownHandler(e){
    if (e.keyCode == 39 || e.which == 39){
        paddle.rightPressed = true;
        console.log(paddle.rightPressed);
    }

    else if (e.keyCode == 37 || e.which == 37){
        paddle.leftPressed = true;
    }
}

function keyUpHandler(e){
    if (e.keyCode == 39 || e.which == 39){
        paddle.rightPressed = false;
    }

    else if (e.keyCode == 37 || e.which == 37){
        paddle.leftPressed = false;
    }
}

//paint current score onto the canvas
function drawScore(ball){
    ctx.font = "16px Arial";
    ctx.fillstyle = ball.color;
    ctx.fillText("Score: " + ball.score, 8, 20); //last two values are the coordinates on the canvas
}

//paint number of lives on to canvas
function drawLives(ball){
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: " + ball.lives, canvas.width - 65, 20);
}

function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y,ballRadius,0, Math.PI*2);
    ctx.fillStyle = ballOne.color;
    ctx.fill();
    ctx.closePath();
}

function change(){
    let elem = document.getElementById("startButton");
    if (elem.value == "Pause") elem.value = "Start";
    else elem.value = "Pause";
}

// add event listener for start button click (better than using onclick method)
let startButton = document.getElementById('startButton');

startButton.addEventListener('click', togglePause);
function togglePause(){
    if (!paused) paused = true;
    else if (paused) paused = false;
    change();
    animate();
}

function animate(){
    if (!paused){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        
        drawLives(ballOne);
        drawScore(ballOne);
        paddle.update();
        bricks.forEach(brick => {
            brick.update(ballOne);
        });
        ballOne.update(paddle,bricks);
        globalID = requestAnimationFrame(animate);

    }else {
        cancelAnimationFrame(globalID);
    }
}

// Implementation
let bricks;

function init(){

    bricks = [];
    let tmpBricks = [];

    let brickRowCount = 3;
    let brickcolumnCount = 5;
    

    for (let c = 0; c < brickcolumnCount; c++){
        tmpBricks[c] = [];
        for (let r = 0; r < brickRowCount; r++){
            const brickWidth = 75;
            const brickHeight = 20;
            const brickPadding = 10;
            const brickOffsetTop = 30;
            const brickOffsetLeft = 30;

            const brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
            const brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;

            bricks.push(new Brick(brickX, brickY, 1, brickHeight, brickWidth));
        }


    }
    
}

init();
animate();