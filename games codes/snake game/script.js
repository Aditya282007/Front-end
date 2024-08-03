document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('game-canvas');
    var context = canvas.getContext('2d');
    var gridSize = 20;
    var gridCount = 20;
    var snake = [{ x: 10, y: 10 }];
    var direction = 'right';
    var food = generateFood();
    var score = 0;

    setInterval(gameLoop, 100);

    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 37 && direction !== 'right') {
            direction = 'left';
        } else if (event.keyCode === 38 && direction !== 'down') {
            direction = 'up';
        } else if (event.keyCode === 39 && direction !== 'left') {
            direction = 'right';
        } else if (event.keyCode === 40 && direction !== 'up') {
            direction = 'down';
        }
    });

    function gameLoop() {
        moveSnake();
        if (isGameOver()) {
            endGame();
            return;
        }
        clearCanvas();
        drawSnake();
        drawFood();
    }

    function moveSnake() {
        var head = { x: snake[0].x, y: snake[0].y };

        if (direction === 'right') {
            head.x++;
        } else if (direction === 'left') {
            head.x--;
        } else if (direction === 'up') {
            head.y--;
        } else if (direction === 'down') {
            head.y++;
        }

        snake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            score++;
            food = generateFood();
        } else {
            snake.pop();
        }
    }

    function isGameOver() {
        var head = snake[0];
        if (
            head.x < 0 || head.x >= gridCount ||
            head.y < 0 || head.y >= gridCount ||
            isCollidingWithSelf(head)
        ) {
            return true;
        }
        return false;
    }

    function isCollidingWithSelf(head) {
        for (var i = 1; i < snake.length; i++) {
            if (head.x === snake[i].x && head.y === snake[i]
                .y) {
                    return true;
                }
            }
            return false;
        }
    
        function generateFood() {
            var foodX = Math.floor(Math.random() * gridCount);
            var foodY = Math.floor(Math.random() * gridCount);
            return { x: foodX, y: foodY };
        }
    
        function clearCanvas() {
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
    
        function drawSnake() {
            snake.forEach(function (segment) {
                context.fillStyle = '#333';
                context.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
            });
        }
    
        function drawFood() {
            context.fillStyle = 'red';
            context.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
        }
    
        function endGame() {
            alert('Game Over! Your score is: ' + score);
            snake = [{ x: 10, y: 10 }];
            direction = 'right';
            score = 0;
            food = generateFood();
        }
    });
    