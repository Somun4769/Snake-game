const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;

const rows = canavs.height / scale;
const columns= canvas.width/ scale

var snake;

(function setup(){
    snake = new Snake();
    Fruit= new Fruit();

    Fruit.pickLocation();

    


    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        Fruit.draw(); 
        snake.update();
        snake.draw();
    }, 250);
    
}());

window.addEventListener('keydown', ((evt) => {
    console.log(evt);
    const direction= evt.key.replace('arrow' , '');
    snake.changeDirection(direction);
}))