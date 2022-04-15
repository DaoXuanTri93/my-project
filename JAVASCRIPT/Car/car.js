
let step = 10;

console.log(window.innerWidth);
function moveRight() {
    let move = document.getElementById('imgCar');
    // console.log(typeof parseInt(move.style.width));
    // console.log(typeof window.innerWidth);
    move.style.width = '100px';
    move.style.height = '50px';
    move.style.transform  = 'rotate(360deg)';
    if (parseInt(move.style.left) + 110 < window.innerWidth) {
        move.style.left = parseInt(move.style.left) + step + 'px';
    }
}
function moveLeft() {
    let move = document.getElementById('imgCar');
    // move.style = 'transform: rotate(-180deg);width : 100px; height = 50px;'
    // move.style.width = '100px';
    // move.style.height = '50px';
    move.style.transform  = 'rotate(-180deg)';
    if (parseInt(move.style.left) + 10 > 10) {
        move.style.left = parseInt(move.style.left) - step + "px";
    }

}
function moveDown() {
    let car = document.getElementById('imgCar');
    car.style.transform  = 'rotate(90deg)';
    if (parseInt(car.style.top) + 100 < window.innerHeight) {
        car.style.top = parseInt(car.style.top) + step + 'px';
    }
}
function moveUp() {
    let car = document.getElementById('imgCar');
    car.style.transform = 'rotate(-90deg)';
    // console.log(car.style.top);
    if(parseInt(car.style.top) - 30 > 0){
        // console.log(car.style.top);

        car.style.top = parseInt(car.style.top) - step + 'px'
        console.log(car.style.top);
    }
    ;
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
                // let img = document.querySelector('img');
                // img.src = 'right.jpg'
                // img.style = "width: 100px; height: 50px";
                break;
            }
        case 37:
        case 65:
            {
                moveLeft();
                // let img = document.querySelector('img');
                // img.src = 'left.jpg'
                // img.style = "width: 100px; height: 50px";
                break;
            }
        case 40:
        case 83:
            {
                moveDown();
                // let img = document.querySelector('img');
                // img.src = 'down.jpg'
                // img.style = "width: 50px; height: 100px";
                break;
            }
        case 38:
        case 87:
            {
                moveUp();
                // let img = document.querySelector('img');
                // img.src = 'top.jpg'
                // img.style = "width: 50px; height: 100px";

                break;
            }
    }
}







