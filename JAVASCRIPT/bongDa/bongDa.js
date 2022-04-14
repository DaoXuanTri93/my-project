

var imgObj = null;
// imgObj = document.getElementById('myImg');
function init(){
    // debugger
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '100px';
}
function moveRight(){
    // debugger

    // imgObj = document.getElementById('myImage').style.backgroundColor = 'red';

   imgObj.style.left = parseInt(imgObj.style.left) + 100 + 'px';
}
window.onload = init();