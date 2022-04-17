
var congTac = true;
function clickImg1() {
    // var img = document.querySelector('.imgGau1');
    // img.src = 'anhMeo1.png';
    if (congTac) {
        var img = document.querySelector('.imgGau1');
        img.src = 'anhMeo1.png';
        return congTac = false;
    } else {
        var img = document.querySelector('.imgGau1');
        img.src = 'anhGau1.png';
        return congTac = true;
    }
}
function clickImg2() {
    if (congTac) {
        var img1 = document.querySelector('.imgGau2');
        img1.src = 'anhMeo2.png';
        return congTac = false;
    } else {
        var img1 = document.querySelector('.imgGau2');
        img1.src = 'anhGau2.png';
        return congTac = true;
    }

}
function btnClick(){
    if(img = img1){
        alert('dung');
    }
}
