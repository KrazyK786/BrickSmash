//JS code goes here
        var paused = true;
        var globalID;
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");

        var ballRadius = 10;

        //define starting x and y coordinates of ball
        var x = canvas.width/2;
        var y = canvas.height-30;

        //define movement/speed of ball by adding dx or dy
        var dx = 2;
        var dy = -2;

        //define paddle
        var paddleHeight = 10;
        var paddleWidth = 75;
        var paddleX = (canvas.width - paddleWidth) / 2;

        //keyboard control variables
        var rightPressed = false;
        var leftPressed = false;

        //brick variables
        var brickRowCount = 3;
        var brickcolumnCount = 5;
        var brickWidth = 75;
        var brickHeight = 20;
        var brickPadding = 10;
        var brickOffsetTop = 30;
        var brickOffsetLeft = 30;

        //two-dimensional array to hold bricks
        var bricks = [];
        for (c = 0; c < brickcolumnCount; c++){
            bricks[c] = [];
            for (r = 0; r < brickRowCount; r++){
                bricks[c][r] = { x:0, y:0, status: 1 };
            }
        }

        //score variable
        var score = 0;

        //lives variable
        var lives = 2;

        //EventListener for key presses
        document.addEventListener("keydown",keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);

        //EventLister for mouse
        document.addEventListener("mousemove", mouseMoveHandler, false);

        function mouseMoveHandler(e){
            var relativeX = e.clientX - canvas.offsetLeft;
            if (relativeX > 0 && relativeX < canvas.width){
                paddleX = relativeX - paddleWidth / 2;
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

        //Brick collision detection
        function collisionDetection (){
            for (c = 0; c < brickcolumnCount; c++){
                for (r = 0; r < brickRowCount; r++){
                    var b = bricks[c][r]; //b is the brick in question
                    if (b.status == 1){

                        if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight){
                            dy = -dy; //if the center of the brick in question is within a brick, then a collission is considered to have occured
                            b.status = 0;
                            score++;
                            if (score == brickRowCount * brickcolumnCount){
                                alert("YOU WIN, CONGRATULATIONS!!");
                                document.location.reload();
                            }
                        }
                    }
                }
            }
        }

        //paint current score onto the canvas
        function drawScore(){
            ctx.font = "16px Arial";
            ctx.fillstyle = "#0095DD";
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
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }

        function drawPaddle(){
            ctx.beginPath();
            ctx.rect(paddleX,canvas.height - paddleHeight, paddleWidth, paddleHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }

        function drawBricks(){
            for(c = 0; c < brickcolumnCount; c++){
                for(r=0; r < brickRowCount; r++){
                    if (bricks[c][r].status == 1){

                        var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                        var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                        bricks[c][r].x = brickX;
                        bricks[c][r].y = brickY;
                        ctx.beginPath();
                        ctx.rect(brickX, brickY, brickWidth, brickHeight);
                        ctx.fillStyle = "#0095DD";
                        ctx.fill();
                        ctx.closePath();
                    }
                }
            }
        }
        
        var animate = null;
        
        function change(){
            var elem = document.getElementById("startButton");
            if (elem.value == "Pause") elem.value = "Start";
            else elem.value = "Pause";
        }
        
        function stop(){
            clearTimeout(animate);
            animate = null;
        }

        function togglePause(){
            if (!paused) paused = true;
            else if (paused) paused = false;
            change();
            loop();
        }
        
        function draw(){
            //pause boolean
            //drawing code
            ctx.clearRect(0,0, canvas.width, canvas.height);
            drawBricks();
            drawBall();
            drawPaddle();
            drawScore();
            drawLives();
            collisionDetection();
            // animate = setTimeout(draw, 30000);
            
            x += dx;
            y += dy;

            //detect border collisions and reverse the direction of the ball
            if (x + dx > canvas.width - ballRadius || x + dx < ballRadius){
                dx = -dx;
            }

            if (y + dy < ballRadius){
                dy = -dy;
            }
            else if (y + dy > canvas.height - ballRadius){
                if (x > paddleX && x < paddleX + paddleWidth && (y + dy > canvas.height - ballRadius - paddleHeight || y + dy < ballRadius + paddleHeight)){//if ball hits paddle, reverse direction
                    dy = -dy;
                }
                else{
                    lives--;
                    if (lives < 0){ // updated logic from '!lives' to allow lives to hit 0 before game over is given
                        alert("GAME OVER"); //if ball hits bottom of screen, alert GAME OVER
                        document.location.reload();
                    }
                    else{
                        x = canvas.width / 2;
                        y = canvas.height - 30;
                        dx = 2;
                        dy = -2;
                        paddleX = (canvas.width - paddleWidth) / 2;
                    }
                }
            }
            
            //detect whether the paddle is off the screen and move accordingly
            if (rightPressed && paddleX < canvas.width - paddleWidth){
                paddleX += 7;
            }

            if (leftPressed && paddleX > 0){
                paddleX -= 7;
            }

            // requestAnimationFrame(draw);
            // globalID = requestAnimationFrame(draw);
            loop();

        }

        function loop(){
            if (!paused){
                globalID = requestAnimationFrame(draw);
                // draw();
            }else {
                cancelAnimationFrame(globalID);
            }
            // draw();
        }
        
        function startStop(){
            if (paused !== false){
                stop();
            } else{
                draw();
            }
            togglePause();
            change();
            
        }
        
        draw();
        // requestAnimationFrame(draw);
        // loop();

        //setInterval(draw,10); requestAnimationFrame helps the browser render the game better