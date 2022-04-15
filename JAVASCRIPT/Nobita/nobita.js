

function moveRight() {
    let moveRight = document.getElementById('nobita');
    // moveRight.style.left = parseInt(moveRight.style.left) + 50 + 'px';
    moveRight.style.left = parseInt(moveRight.style.left) + 50 + 'px';
}
function moveLeft() {
    let moveLeft = document.getElementById('nobita');
    moveLeft.style.left = parseInt(moveLeft.style.left) - 50 + 'px';
}
function moveTop() {
    let moveRight = document.getElementById('nobita');
    moveRight.style.top = parseInt(moveRight.style.top) - 50 + 'px';
}
function moveDown() {
    let moveRight = document.getElementById('nobita');
    moveRight.style.top = parseInt(moveRight.style.top) + 50 + 'px';
}

// let x = window.innerWidth ;
// console.log(x);
function controlNobita(value) {
    // alert(value.keyCode)
    switch (value.keyCode) {
        // phai
        case 39:
        case 68:
            moveRight();
            break;
        // trai
        case 37:
        case 65:
            moveLeft();
            break;
        // xuong
        case 40:
        case 83:
            moveDown();
            break;
        // len
        case 38:
        case 87:
            moveTop();
            break;
    }
}
window.addEventListener("keydown", controlNobita);
