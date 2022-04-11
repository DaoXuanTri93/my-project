
let emailkey = 'email';

var address = 'address';
var myInfo = {
    name : 'Xuan Tri',
    age : 16,
    address: 'Hue, VN',
    [emailkey]: 'day la email @',
    [address]: 'la new',
    getName: function(){
        return myInfo.name;
    }
var tong = sum(30,2);
console.log(tong);


// var isConfirm = confirm('hello word');
// console.log(isConfirm);


        //  test Arguments
// function showMessage() {
//     var myString = '';
//     for(var a of arguments){
//     myString = myString + a + '-'
//     }
//     console.log(myString);
// }

// showMessage('test1','test2',1);