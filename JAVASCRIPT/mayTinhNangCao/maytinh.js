
var selectedOperator = false;
var ketqua = document.querySelector('#ketqua');


function bangMayTinh(number) {

   ketqua.value += number;

   console.log(typeof ketqua.value);
}

// function phepTinh(tinh){
//     if (tinh == '+'){
//         ketqua.value = eval(tinh)
//     }
// }
function key_operand(number){
    ketqua.value += number;
}
// function phepTinh(operand){
//     if(operand == "C"){
//         screen.value = "";
//         return;
//     }
//     if(operand == "=" && screen.value != ""){
//         screen.value = eval(screen.value);
//         return;
//     }
//     if(!selectedOperator && screen.value != ""){
//         screen.value += operand
//         selectedOperator = true;
//     }
// }

            
         