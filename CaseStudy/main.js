
class Products {
    constructor(id, name, date,date2) {
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
        <div class="box-text" onclick="hideEdit(${product.id})" draggable="true" id="${product.id}">
            ${product.name}
            <div class="box-text-color color-${product.id}" ></div>
            <div class="box-text-date add-date-${product.id}">${product.date} ${product.date2}</div>
        </div>    
        `
    })
    product.innerHTML = map.join('');
}

function init(){
    if(getData(key_data) == null){
        products = [
            new Products(1, 'thu2', '', ''),
            new Products(2, 'thu3', '', ''),
            new Products(3, 'thu4', '', ''),
        ];
        setData(key_data,products);
    } else {
        products = getData(key_data);
    }
}
function getData(key){
    return JSON.parse(localStorage.getItem(key))
}
function setData(key,data){
    return localStorage.setItem(key, JSON.stringify(data));

}

function addProducts() {
    let maxId = getId() + 1;
    let area = document.querySelector('#textarea').value;
    if (area.trim() != '') {
        products.push(new Products(maxId, area));
        // showTextArea();
        setData(key_data,products);
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
function hideEdit(productsId) {
    // console.log(productsId);
    // console.log(name);
    let product = getProductById(productsId);

    let str = `
    <div class="box-edit d-none-edit" >
    <div class="box-edit-name">
        <h2 class="productEdit"></h2>
    </div>
    <div class="box-edit-stick">
        <div class="box-edit-products">
            <h2>Name</h2>
            <textarea name="" id="" cols="30" rows="2" class ="edit-name" >${product.name}</textarea>
            <div></div>
                <button onclick="editProduct(${productsId})">Edit</button>
            <h2>Tags</h2>
            <hr>
            <h2>Add comment</h2>
            <textarea name="" id="" cols="30" rows="2" class="box-edit-comment" onkeydown="pressEnterEdit(event)"></textarea>
            <div></div>
            <button onclick="editProduct(${productsId})" >Update</button>
            <button onclick="removeProduct(${productsId})">Delete</button>
            <div class="box-edit-comment">
                <h2>Comment</h2>
            </div>
            <p class="comment"></p>
        </div>
        <div class="box-edit-delete">
            <h2>Color</h2>
            <select class="box-edit-color" onchange="changeColor(${productsId})">
                <option >--Color--</option>
                <option value="Blue" class="box-edit-blue">Blue</option>
                <option value="Yellow" class="box-edit-option" >yellow</option>
                <option value="Red" class="box-edit-option">red</option>
            </select>
            <div>
                <div >
                    <label for="">Start time</label>
                </div>
                <div >
                    <input type="date" class="box-edit-date-start" >
                </div>
                <div>
                    <label for="">End time</label>
                </div>
                <div >
                    <input type="date" class="box-edit-date-end">
                </div>
                <div>
                    <div>dat thoi gian</div>
                    <select name="" id="" class="box-edit-date">
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
    let hideEdit = document.querySelector('.box-edit').remove('d-none-edit');
console.log(hideEdit);
}
function showEdit() {
    let hideEdit = document.querySelector('.box-edit').classList.add('d-none-edit');
}
// ket thuc phan an/hien

// change color tags
function changeColor(pdtId) {
    // let changeColor = document.getElementById(`color-${pdtId}`);
    // let changeId = products.find(function(pdt){
    //     return pdt.id;
    // })
    // console.log(changeId);
    let changeColor = document.querySelector(`.color-${pdtId}`);
    // console.log(changeColor);
    let color = document.querySelector('.box-edit-color').value;
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
    // setData(key_data,products);
}
// ----------------- end color

function addComment() {
    let addComment = document.querySelector('.box-edit-comment').value;
    document.querySelector('.comment').innerHTML = addComment;
}
function getId() {
    let productID = [...products];
    // console.log(productID);
    let maxId = productID.sort(function (pdt1, pdt2) {
        return pdt2.id - pdt1.id
    })[0].id
    // console.log(maxId);
    return maxId;
}
function removeProduct(pdtId) {
    // alert(id)
    // let remove = products.filter(function(pdt1){
    //     return  pdt1.id;
    // })
    console.log(pdtId);
    // console.log(remove);
    let remove = products.findIndex(function (pdt1) {
        return pdt1.id == pdtId;
    })
    // console.log(remove);
    // console.log(id);
    products.splice(remove, 1);
    setData(key_data,products);
    // console.log(products);
    renderProducts();
}
function addDate(pdtId) {
    let addDate = document.querySelector(`.add-date-${pdtId}`).value;
    console.log(addDate);

    document.querySelector('.box-text-date').innerHTML = addDate;
    renderProducts();
}
function getProductById(pdtId){
    return products.find(function(pdt){
        return pdt.id == pdtId;
    })
}
function editProduct(pdtId){
    document.querySelector('.box-edit').classList.remove('d-none-edit');
    let product = getProductById(pdtId);
    let productName = document.querySelector('.edit-name').value;
    let productDate = document.querySelector('.box-edit-date-start').value;
    let productDate2 = document.querySelector('.box-edit-date-end').value;
    product.name = productName;
    product.date = productDate;
    product.date2 = productDate2;
    setData(key_data,products)
    renderProducts();
}
init();
renderProducts();
resetProducts();



