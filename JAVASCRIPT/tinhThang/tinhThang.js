


function ngayThang(){
    let ngay = Number(document.getElementById('ngay').value);

    switch(ngay){
        case 1 :
        case 3 :
        case 5 :
        case 7 :
        case 8 :
        case 10 :
        case 12 : 
            ngay = `thang ${ngay} co 31 ngay`;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            ngay = ` thang ${ngay} co 30 ngay`;
            break;
        case 2:
            ngay = `thang ${ngay} co 28 ngay hoac 29 ngay`;
            break;
        default:
            ngay = 'thang ngay ko hop le';
    }
    document.getElementById('hienThiSoNgay').innerHTML = ngay;
}




// let day;

// switch(new Date().getmo()){
//     case 0 :
//         day = 'ngay 1';
//         break;
//     case 1 :
//         day = 'ngay 2';
//         break;
//     case 2 :
//         day = 'ngay 3';
//         break;
//     case 3 :
//         day = 'ngay 4';
//         break;
//     case 4 :
//         day = 'ngay 5';
//         break;
//     case 5 :
//         day = 'ngay 6';
//         break;
//     case 6 :
//         day = 'ngay 7';
//         break;
// }
// console.log(day);

