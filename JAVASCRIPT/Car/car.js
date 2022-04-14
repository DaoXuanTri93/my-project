
let step = 10;

function moveRight() {
    let move = document.getElementById('imgCar');
    // move.style.left = parseInt(move.style.left) + step + "px";
    console.log(move.style.left = parseInt(move.style.left) + 10 + 'px');
    // console.log(move);
}
function moveLeft() {
    let move = document.getElementById('imgCar');
    move.style.left = parseInt(move.style.left) - step + "px";
}
function moveDown() {
    let car = document.getElementById('imgCar');
    car.style.top = parseInt(car.style.top) + step + 'px';
}
function moveUp() {
    let car = document.getElementById('imgCar');
    car.style.top = parseInt(car.style.top) - step + 'px';
}


window.addEventListener("keydown", controlCar);
// window.addEventListener("onekeydown", controlCar)
// function init(){
//     window.addEventListener("keydown", controlCar);
// }
function controlCar(e) {
    // alert(e.keyCode);
    switch (e.keyCode) {
        case 39:
        case 68:
            {
                moveRight();
                let img = document.querySelector('img');
                img.src = 'right.jpg'
                break;
            }
        case 37:
        case 65:
            {
                moveLeft();
                let img = document.querySelector('img');
                img.src = 'left.jpg'
                break;
            }
        case 40:
        case 83:
            {
                moveDown();
                let img = document.querySelector('img');
                img.src = 'down.jpg'
                break;
            }
        case 38:
        case 87:
            {
                moveUp();
                let img = document.querySelector('img');
                img.src = 'up.jpg'
                break;
            }
    }
}







