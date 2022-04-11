// function tongHaiSo() {
//     var a = Number(document.getElementsByClassName('number')[0].value);
//     var b = Number(document.getElementsByClassName('number')[1].value);
//     var c = a + b;
//     document.getElementById('result').value = c;
// // }
// var date = 9;
// switch (date) {
//     case 2: break;
//     case 3:
//         console.log('hom nay la thu 3');
//         break;
//     case 4:
//         console.log('hom nay la thu 4');
//         break;
//     case 5:
//         console.log('hom nay la thu 5');
//         break;
//     default:
//     console.log('khong biet');
// }

// function ngayThang(){
//     document.getElementById('demo').innerHTML= Date();
// }
// function ngayThangCu(){
//     document.getElementById('demo').innerHTML;
// }
// var languages = [
//     'java',
//     'php',
//     'ruby'
// ]
// function loop(start,end,cb){
//     if(start >= end){

//     }
// }

// loop(0,languages.length-1,function(index){
//     console.log('index' + index);
// });

// function giaiThua(value){
//     var output = 1;
//     for(var i = value; i > 0; i--){
//         output = output * i
//     }
//     return output;
// }
// console.log(giaiThua(6));
// var myArray = [
//     [1,2],
//     [3,4],
//     [5,6]
// ]

// let number = 5;
// number++;
// number = number - 1;
// console.log(number);

// // console.log(myArray[2][0]);
// // for(var i in myArray){
// //     console.log(myArray[i][0,1]);
// // }
// var myArrayLenght = myArray.length;
// for(var i = 0 ; i < myArrayLenght; i++){
//     // console.log(myArray[i]);
//     for(var j = 0; j < myArray[i].length; j++){
//         console.log(myArray[i][j]);
//     }
// }
let day = "Mon";
let message = "";

switch (day) {
  case "Mon": message = "Ngày đầu tuần";
  break;
  case "Wed": message = "Ngày giữa tuần";
  break;
  case "Sat":
  case "Sun":
    // message = "Ngày nghỉ";
    // console.log(message);
}

console.log(message);