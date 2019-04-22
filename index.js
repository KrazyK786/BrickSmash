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
        
        //define paddle
        // let paddleHeight = 10;
        // let paddleWidth = 75;
        // let paddleX = (canvas.width - paddleWidth) / 2;

        //keyboard control letiables
        let rightPressed = false;
        let leftPressed = false;

        //brick variables
        // let brickRowCount = 3;
        // let brickcolumnCount = 5;
        // let brickWidth = 75;
        // let brickHeight = 20;
        // let brickPadding = 10;
        // let brickOffsetTop = 30;
        // let brickOffsetLeft = 30;

        //two-dimensional array to hold bricks
        // let bricks = [];
        // for (let c = 0; c < brickcolumnCount; c++){
        //     bricks[c] = [];
        //     for (let r = 0; r < brickRowCount; r++){
        //         bricks[c][r] = { x:0, y:0, status: 1 };
        //     }
        // }

        //score letiable
        let score = 0;

        //lives letiable
        let lives = 2;

        // //EventListener for key presses
        // document.addEventListener("keydown",keyDownHandler, false);
        // document.addEventListener("keyup", keyUpHandler, false);

        // //EventLister for mouse
        // document.addEventListener("mousemove", mouseMoveHandler, false);

        // // EventListener for touch controls
        // document.addEventListener("touchstart", touchHandler);
        // document.addEventListener("touchmove", touchHandler);

        // // touch handler function
        // function touchHandler(e){
        //     let relativeX = e.touches[0].clientX - canvas.offsetLeft; 
        //     if (e.touches){
        //         if (relativeX > 0 && relativeX < canvas.width){
        //             paddle.paddleX = relativeX - paddle.paddleWidth / 2;
        //             e.preventDefault();
        //         }
        //     }
        // }

        // function mouseMoveHandler(e){
        //     let relativeX = e.clientX - canvas.offsetLeft;
        //     if (relativeX > 0 && relativeX < canvas.width){
        //         paddle.paddleX = relativeX - paddle.paddleWidth / 2;
        //     }
        // }

        // function keyDownHandler(e){
        //     if (e.keyCode == 39 || e.which == 39){
        //         rightPressed = true;
        //         console.log(rightPressed);
        //     }

        //     else if (e.keyCode == 37 || e.which == 37){
        //         leftPressed = true;
        //     }
        // }

        // function keyUpHandler(e){
        //     if (e.keyCode == 39 || e.which == 39){
        //         rightPressed = false;
        //     }

        //     else if (e.keyCode == 37 || e.which == 37){
        //         leftPressed = false;
        //     }
        // }

        //Brick collision detection

        // function collisionDetection (bricks, ball){
        //     bricks.forEach(brick =>{
                
        //         if (brick.status == 1){
    
        //             if (ball.x > brick.x && x < ball.x + brick.width && ball.y > brick.y && ball.y < brick.y + brick.height){
        //                 ball.velocity.y = -ball.velocity.y; //if the center of the brick in question is within a brick, then a collission is considered to have occured
        //                 brick.status = 0;
        //                 score++;
        //                 if (score == brickRowCount * brickcolumnCount){
        //                     alert("YOU WIN, CONGRATULATIONS!!");
        //                     document.location.reload();
        //                 }
        //             }
        //         }
        //     });
        // }

        // function collisionDetection (){
        //     for (let c = 0; c < brickcolumnCount; c++){
        //         for (let r = 0; r < brickRowCount; r++){
        //             let b = bricks[c][r]; //b is the brick in question
        //             if (b.status == 1){

        //                 if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight){
        //                     dy = -dy; //if the center of the brick in question is within a brick, then a collission is considered to have occured
        //                     b.status = 0;
        //                     score++;
        //                     if (score == brickRowCount * brickcolumnCount){
        //                         alert("YOU WIN, CONGRATULATIONS!!");
        //                         document.location.reload();
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }

        //paint current score onto the canvas
        function drawScore(){
            ctx.font = "16px Arial";
            ctx.fillstyle = ballOne.color;
            ctx.fillText("Score: " + score, 8, 20); //last two values are the coordinates on the canvas
        }

        //paint number of lives on to canvas
        function drawLives(){
            ctx.font = "16px Arial";
            ctx.fillStyle = "#0095DD";
            ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
        }

        function drawBall(){
            ctx.beginPath();
            ctx.arc(x,y,ballRadius,0, Math.PI*2);
            ctx.fillStyle = ballOne.color;
            ctx.fill();
            ctx.closePath();
        }

        // function drawPaddle(){
        //     ctx.beginPath();
        //     ctx.rect(paddleX,canvas.height - paddleHeight, paddleWidth, paddleHeight);
        //     ctx.fillStyle = "#0095DD";
        //     ctx.fill();
        //     ctx.closePath();
        // }

        // function drawBricks(){
        //     for(let c = 0; c < brickcolumnCount; c++){
        //         for(let r=0; r < brickRowCount; r++){
        //             if (bricks[c][r].status == 1){

        //                 let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
        //                 let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
        //                 bricks[c][r].x = brickX;
        //                 bricks[c][r].y = brickY;
        //                 ctx.beginPath();
        //                 ctx.rect(brickX, brickY, brickWidth, brickHeight);
        //                 ctx.fillStyle = "#0095DD";
        //                 ctx.fill();
        //                 ctx.closePath();
        //             }
        //         }
        //     }
        // }
        
        // let animate = null;
        
        function change(){
            let elem = document.getElementById("startButton");
            if (elem.value == "Pause") elem.value = "Start";
            else elem.value = "Pause";
        }
        
        // function stop(){
        //     clearTimeout(animate);
        //     animate = null;
        // }

        // add event listener for start button click (better than using onclick method)
        let startButton = document.getElementById('startButton');
        
        startButton.addEventListener('click', togglePause);
        function togglePause(){
            if (!paused) paused = true;
            else if (paused) paused = false;
            change();
            // loop();
            animate();
        }
        
        // function draw(){

        //     ctx.clearRect(0,0, canvas.width, canvas.height);
        //     drawBricks();
        //     drawBall();
        //     drawPaddle();
        //     drawScore();
        //     drawLives();
        //     collisionDetection();
            
        //     // x += dx;
        //     // y += dy;
        //     dx = ballOne.velocity.x;
        //     dy = ballOne.velocity.y;

        //     x += dx;
        //     y += dy;

        //     //detect border collisions and reverse the direction of the ball
        //     if (x + dx > canvas.width - ballRadius || x + dx < ballRadius){
        //         dx = -ballOne.velocity.x;
        //     }

        //     if (y + dy < ballRadius){
        //         dy = -ballOne.velocity.y;
        //     }
        //     else if (y + dy > canvas.height - ballRadius){
        //         if (x > paddleX && x < paddleX + paddleWidth && (y + dy > canvas.height - ballRadius - paddleHeight || y + dy < ballRadius + paddleHeight)){//if ball hits paddle, reverse direction
        //             dy = -ballOne.velocity.y;
        //         }
        //         else{
        //             lives--;
        //             if (lives == -1){ // updated logic from '!lives' to allow lives to hit 0 before game over is given
        //                 alert("GAME OVER"); //if ball hits bottom of screen, alert GAME OVER
        //                 document.location.reload();
        //             }
        //             else{
        //                 x = canvas.width / 2;
        //                 y = canvas.height - 30;
        //                 dx = 2;
        //                 dy = -2;
        //                 paddleX = (canvas.width - paddleWidth) / 2;
        //             }
        //         }
        //     }
            
        //     //detect whether the paddle is off the screen and move accordingly
        //     if (rightPressed && paddleX < canvas.width - paddleWidth){
        //         paddleX += 7;
        //     }

        //     if (leftPressed && paddleX > 0){
        //         paddleX -= 7;
        //     }

        //     // loop();

        // }

        // function loop(){
        //     if (!paused){
        //         globalID = requestAnimationFrame(draw);
        //     }else {
        //         cancelAnimationFrame(globalID);
        //     }
        // }

        function animate(){
            if (!paused){
                ctx.clearRect(0,0, canvas.width, canvas.height);
                
                paddle.update();
                bricks.forEach(brick => {
                    brick.update(ballOne);
                });
                ballOne.update();
                globalID = requestAnimationFrame(animate);

            }else {
                cancelAnimationFrame(globalID);
            }
        }
        
        // function startStop(){
        //     if (paused !== false){
        //         stop();
        //     } else{
        //         draw();
        //     }
        //     togglePause();
        //     change();
            
        // }
        
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

                    // const brickx = 
                    const brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                    const brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                    // tmpBricks[c][r].x = brickX;
                    // tmpBricks[c][r].y = brickY;

                    bricks.push(new Brick(brickX, brickY, 1, brickHeight, brickWidth));

                    // tmpBricks[c][r] = { x:0, y:0, status: 1 };
                }


            }
            
        }

        // draw();
        init();
        animate();