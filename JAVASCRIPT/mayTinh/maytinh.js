


function phepCong(){
    let input1 = Number(document.getElementById('input1').value);
    let input2 = Number(document.getElementById('input2').value);
    let cong = input1 + input2;
    // let tru = input1 - input2;
    // let nhan = input1 * input2;
    // let chia = input1/input2;
    return (document.getElementById('ketqua').value = cong);
         (document.getElementById('ketqua').value = tru);
         (document.getElementById('ketqua').value = nhan);
         (document.getElementById('ketqua').value = chia);
}
function phepTru(){
    let input1 = Number(document.getElementById('input1').value);
    let input2 = Number(document.getElementById('input2').value);
    // let cong = input1 + input2;
    let tru = input1 - input2;
    // let nhan = input1 * input2;
    // let chia = input1/input2;
    // return (document.getElementById('ketqua').value = cong);
        return (document.getElementById('ketqua').value = tru);
        //  (document.getElementById('ketqua').value = nhan);
        //  (document.getElementById('ketqua').value = chia);
}
function phepNhan(){
    let input1 = Number(document.getElementById('input1').value);
    let input2 = Number(document.getElementById('input2').value);
    // let cong = input1 + input2;
    // let tru = input1 - input2;
    let nhan = input1 * input2;
    // let chia = input1/input2;
    // return (document.getElementById('ketqua').value = cong);
    // return (document.getElementById('ketqua').value = tru);
     return (document.getElementById('ketqua').value = nhan);
        //  (document.getElementById('ketqua').value = chia);
}
function phepChia(){
    let input1 = Number(document.getElementById('input1').value);
    let input2 = Number(document.getElementById('input2').value);
    // let cong = input1 + input2;
    // let tru = input1 - input2;
    // let nhan = input1 * input2;
    let chia = input1 / input2;
    // return (document.getElementById('ketqua').value = cong);
    // return (document.getElementById('ketqua').value = tru);
    //  return document.getElementById('ketqua').value = nhan);
        return (document.getElementById('ketqua').value = chia);
}


var i = 1;
var j = '2';
 var k = i + j; 
 console.log(k);
