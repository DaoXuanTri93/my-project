
class Products {
    href = '';
    color = '';
    comment = '';
    constructor(id, name, date, date2) {
        this.id = id;
        this.name = name;
        // this.content = content;
        this.date = date;
        this.date2 = date2;
    }
}
const key_data = 'product-data';
let products = [];
function renderProducts() {
    let product = document.querySelector('.box-group');
    let map = products.map(function (product) {
        return ` 
        <div class="box-text" onclick="hideEdit(${product.id})" ondragstart="drag(event)"  draggable="true" id="${product.id}">
            ${product.name}
            <div class="box-text-color color-${product.id} box-text-color-${product.color}" ></div>
            <div class="box-text-date add-date-${product.id}">${product.date} ${product.date2}</div>
        </div>    
        `
    })
    product.innerHTML = map.join('');
}

function init() {
    if (getData(key_data) == null) {
        products = [
            new Products(1, 'khoa hoc', ' ', ' '),
            new Products(2, 'java', ' ', ' '),
            new Products(3, 'php', ' ', ' '),
        ];
        setData(key_data, products);
    } else {
        products = getData(key_data);
    }
}
function getData(key) {
    return JSON.parse(localStorage.getItem(key))
}
function setData(key, data) {
    return localStorage.setItem(key, JSON.stringify(data));

}

function addProducts() {
    
    let maxId = getId() + 1;
    let area = document.querySelector('#textarea').value;
    if (area.trim() != '') {
        products.push(new Products(maxId, area, '', ''));
        // showTextArea();
        setData(key_data, products);
        renderProducts();
        resetProducts();
    } else {
        alert('Xin Nhập Tên !!!')
    }
}
// phim enter
function pressEnter(e) {
    if (e.keyCode == 13) {
        addProducts();
    }
}

function pressEnterEdit(e) {
    if (e.keyCode == 13) {
        addComment();
    }
}

//  ket thuc phim enter
function resetProducts() {
    let area = document.querySelector('#textarea').value = '';
}

// phan an/hien cua text area va edit
function hideTextArea() {
    let hideTextArea = document.querySelector('.box-textarea').classList.remove('d-none');
}
function showTextArea() {
    let hideTextArea = document.querySelector('.box-textarea').classList.add('d-none');
}
function hideEdit(productsId) {
    if (productsId != null) {
        let product = getProductById(productsId);
        // console.log(product)
        let str = `
        <div class="box-edit" >
        <div class="box-edit-stick">
            <div class="box-edit-products">
            <h2 class="box-edit-h2">Name</h2>
                <textarea cols="30" rows="2" class ="edit-name textarea" >${product.name}</textarea>
                   <h2 class="box-edit-h2">Link</h2>
                    <div><a class="link" target="_blank" href="${product.href}">${product.href.replace("https://", "").replace("http://", "")}</a>
                    </div>
                    <textarea  cols="30" rows="2" class ="edit-link textarea" ></textarea>
                    <div><button onclick=" editLink(${productsId})" class="btn btn-changelink"> Change Link </button></div>
    
                <h2 class="box-edit-h2">Add Note</h2>
                <div><textarea cols="30" rows="2" class="box-edit-comment textarea" onkeydown="pressEnterEdit(event)"></textarea>
               </div>
               <button onclick="removeProduct(${productsId})" class="btn btn-delete">Delete</button>
                <button onclick="editProduct(${productsId})" class="btn btn-update">Update</button>
                <div class="box-edit-comment">
                    <h2 class="box-edit-h2">Note</h2>
                </div>
                <p class="comment">${product.comment}</p>
            </div>
            <div class="box-edit-delete">
                <button class="btn btn-x" onclick="showEdit()">X</button>
                <h2  class="box-edit-h2">Color</h2>
                <select class="box-edit-color input" onchange="changeColor(${productsId})">
                    <option >--Color--</option>
                    <option value="Green" class="box-edit-option green1">Green</option>
                    <option value="Yellow" class="box-edit-option yellow">yellow</option>
                    <option value="Red" class="box-edit-option" red>red</option>
                </select>
                <div>
                    <h2 class="box-edit-h2">Star Time</h2>
                    <div >
                        <input type="date" class="box-edit-date-start input" >
                    </div>
                    <h2 class="box-edit-h2">End Time</h2>
    
                    <div >
                        <input type="date" class="box-edit-date-end input">
                    </div>
                    <div>
                    <h2 class="box-edit-h2">Set Time</h2>
    
                        <select name="" id="" class="box-edit-date input">
                            <option value="minutes">minutes</option>
                            <option value="hours">hours</option>
                            <option value="days">days</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
        document.getElementById('editContainer').innerHTML = str;
    }

    // console.log(hideEdit);
}
function showEdit() {
    let hideEdit = document.querySelector('.box-edit').classList.add('d-none-edit');
}
// ket thuc phan an/hien

// change color tags
function changeColor(pdtId) {
    let product = getProductById(pdtId);
    let changeColor = document.querySelector(`.color-${pdtId}`);
    let color = document.querySelector('.box-edit-color').value;
    if (color == 'Red') {
        product.color = 'red';
        changeColor.classList.add('box-text-color-red');
        changeColor.classList.remove('box-text-color-yellow');
        changeColor.classList.remove('box-text-color-green');
    } else if (color == 'Yellow') {
        product.color = 'yellow';

        changeColor.classList.add('box-text-color-yellow');
        changeColor.classList.remove('box-text-color-red');
        changeColor.classList.remove('box-text-color-green');
    } else if (color == 'Green') {
        product.color = 'green';

        changeColor.classList.add('box-text-color-green');
        changeColor.classList.remove('box-text-color-yellow');
        changeColor.classList.remove('box-text-color-red');
    }
    setData(key_data, products);
}
// ----------------- end color

function addComment() {
    let addComment = document.querySelector('.box-edit-comment').value;
    document.querySelector('.comment').innerHTML = addComment;
}
function getId() {
    let productID = [...products];
    let maxId = productID.sort(function (pdt1, pdt2) {
        return pdt2.id - pdt1.id
    })[0].id
    return maxId;
}
function removeProduct(pdtId) {
    document.querySelector('.box-edit').classList.add('d-none-edit');
    let remove = products.findIndex(function (pdt1) {
        return pdt1.id == pdtId;
    })
    products.splice(remove, 1);
    setData(key_data, products);
    renderProducts();
}
function addDate(pdtId) {
    let addDate = document.querySelector(`.add-date-${pdtId}`).value;
    console.log(addDate);

    document.querySelector('.box-text-date').innerHTML = addDate;
    renderProducts();
}
function getProductById(pdtId) {
    return products.find(function (pdt) {
        return pdt.id == pdtId;
    })
}
function editProduct(pdtId) {
    document.querySelector('.box-edit').classList.add('d-none-edit');
    let product = getProductById(pdtId);
    let productName = document.querySelector('.edit-name').value;
    let productDate = document.querySelector('.box-edit-date-start').value;
    let productDate2 = document.querySelector('.box-edit-date-end').value;
    let comments = document.querySelector('.box-edit-comment').value;
    product.comment = comments;
    document.querySelector('.comment').innerHTML = product.comment;
    product.name = productName;
    product.date = productDate;
    product.date2 = productDate2;
    setData(key_data, products)
    renderProducts();
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
function editLink(pdtId) {
    let product = getProductById(pdtId);
    let link = document.querySelector('.edit-link').value;
    product.href = link;
    document.querySelector('.link').innerHTML = product.href;
    document.querySelector('.edit-link').value = '';
    setData(key_data, products)
}



// keo thả


// function run(){
//     let boxs = document.querySelector('.box-column');
//     boxs.addEventListener("click",function(){
//     e.dataTransfer.setData("text", e.target.id);
//     console.log(boxs);
// });
// }
// run();
// function drag() {
//     ev.dataTransfer.setData("text", ev.target.id);
//     console.log('aaa');
//   }

//   function allowDrop(ev) {
//     ev.preventDefault();
//   }
//   function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
//   } 

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
init();
renderProducts();
resetProducts();
hideEdit(null);
                            // dragDrop();
                            // function dragDrop(pdtId) {
                            //     const list_items = document.querySelectorAll('.box-text');
                            //     const lists = document.querySelectorAll('.box-column');
                            //     let drop = getProductById();
                            //     let draggedItem = null;

                            //     for (let i = 0; i < list_items.length; i++) {
                            //         const item = list_items[i];

                            //         item.addEventListener('dragstart', function () {
                            //             console.log("advav")
                            //             draggedItem = item;
                            //             setTimeout(function () {
                            //                 item.style.display = 'none';
                            //             }, 0)
                            //         });

                            //         item.addEventListener('dragend', function () {
                            //             setTimeout(function () {
                            //                 draggedItem.style.display = 'block';
                            //                 draggedItem = null;
                            //             }, 0);
                            //         })

                            //         for (let j = 0; j < lists.length; j++) {
                            //             const list = lists[j];

                            //             list.addEventListener('dragover', function (e) {
                            //                 e.preventDefault();
                            //             });

                            //             list.addEventListener('dragenter', function (e) {
                            //                 e.preventDefault();
                            //                 this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
                            //             });

                            //             list.addEventListener('dragleave', function (e) {
                            //                 this.style.backgroundColor = 'rgb(7 129 154)';
                            //             });

                            //             list.addEventListener('drop', function (e) {
                            //                 console.log('drop');
                            //                 this.append(draggedItem);
                            //                 this.style.backgroundColor = 'rgb(7 129 154)';
                            //             });
                            //         }
        
                             // renderProducts();
                                    // }
                                // }

                              






