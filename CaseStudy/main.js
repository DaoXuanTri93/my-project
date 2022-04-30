
class Products {
    constructor(id,name, date) {
        this.id = id;
        this.name = name;
        // this.content = content;
        this.date = date;
    }
}

let products = [new Products(1,'thu2'),
                new Products(2,'thu3'),
                new Products(3,'thu4'),
            ];
function renderProducts() {
    let product = document.querySelector('.box-group');
    let map = products.map(function (product,id) {
        return ` 
        <div class="box-text" onclick="hideEdit(${id})" draggable="true" id="${product.id}">
            ${product.name}
            <div class="box-text-color"></div>
            <div class="box-text-date"></div>
        </div>    
        `
    })
    product.innerHTML = map.join('');
}
function addProducts() {
    let maxId = getId() + 1;
    let area = document.querySelector('#textarea').value;
    if (area.trim() != '') {
        products.push(new Products(maxId,area));
        // showTextArea();
        renderProducts();
        resetProducts();
    } else {
        alert('xin nhap ten')
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
function hideEdit(id) {
    console.log(id);
    let hideEdit = document.querySelector('.box-edit').classList.remove('d-none-edit');
}
function showEdit() {
    let hideEdit = document.querySelector('.box-edit').classList.add('d-none-edit');
}
// ket thuc phan an/hien

// change color tags
function changeColor() {
    let color = document.querySelector('.box-edit-color').value;
    let changeColor = document.querySelector('.box-text-color');
    if (color == 'Red') {
        changeColor.classList.add('box-text-color-red');
        changeColor.classList.remove('box-text-color-yellow');
        changeColor.classList.remove('box-text-color-blue');
    } else if (color == 'Yellow') {
        changeColor.classList.add('box-text-color-yellow');
        changeColor.classList.remove('box-text-color-red');
        changeColor.classList.remove('box-text-color-blue');

    } else if (color == 'Blue') {
        changeColor.classList.add('box-text-color-blue');
        changeColor.classList.remove('box-text-color-yellow');
        changeColor.classList.remove('box-text-color-red');
    }
}
// ----------------- end color

function addComment(){
    let addComment = document.querySelector('.box-edit-comment').value;
    document.querySelector('.comment').innerHTML = addComment;
}
function getId(){
    let productID = [...products];
    // console.log(productID);
    let maxId = productID.sort(function(pdt1,pdt2){
        return pdt2.id - pdt1.id
    })[0].id
    // console.log(maxId);
    return maxId;
}
function removeProduct(id){
    // alert(id)
    // let remove = products.filter(function(pdt1,idex){
    //     return  products.id
    // })
    console.log(id);
    // products.splice(remove,1);
    
    // renderProducts();
}
renderProducts();
resetProducts();



