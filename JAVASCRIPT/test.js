// // var array = [
// //   {
// //     id : 1,
// //     name : 'java',
// //     coin : 0
// //   },
// //   {
// //     id : 2,
// //     name : 'PHP',
// //     coin : 3
// //   },
// //   {
// //     id : 3,
// //     name : 'RUBY',
// //     coin : 1
// //   },
// //   {
// //     id : 4,
// //     name : 'JS',
// //     coin : 4
// //   },
// //   {
// //     id : 5,
// //     name : 'RUBY',
// //     coin : 10
// //   },
// // ];

// // // ham forEach() : duyet qua tung phan tu cua mang

// // /* array.forEach(function(list,index){
// //   console.log(index,list);
// // });
// // */

// // // ham every , tra ve kieu bolean
// // var newCoin = array.map(function(value){
// //  console.log(value.coin);
// // });

// // console.log(newCoin);


// // let dtb = 4;

// // let a = (`0<= ${dtb} >= 5 ? yeu : 5 < ${dtb} >= 7 ? trung binh : 7 < ${dtb} >= 8 ? kha : 8 < ${dtb} >=9 ? gioi : 9 < ${dtb} <= 10 ? Xuat sac : khong hop le`);

// // console.log(a);

// var heading = document.querySelector('.heading');
// // heading.style.width = '100px';
// // heading.style.height = '200px';
// // heading.style.backgroundColor = 'red';

// Object.assign(heading.style, {
//   width: '100px',
// height :'200px',
// backgroundColor :'green'

// });

// console.log(heading.style.backgroundColor);


let classlist = document.querySelector('.heading');
classlist.classList.add('heading-1');


console.log(classlist.classList.contains('heading-1'));