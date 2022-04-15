

function loveYes(){
   alert('OK, Toi dong y');

}
function loveNo() {
    x = Math.round(Math.random() * window.innerWidth);
    y = Math.round(Math.random() * window.innerHeight);

    // alert ('aaaaaaaaaaa')
  
    // console.log(window.innerHeight);


    let love = document.getElementById('loveNo');
    love.style.left = x + 'px';
    love.style.top = y + 'px';

}