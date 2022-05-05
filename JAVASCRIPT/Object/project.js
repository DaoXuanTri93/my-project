
let boxes = document.querySelectorAll('.box');
let targetList = document.querySelectorAll('.target');

//su kien dragover
//su kien drop
let currentTarget = null

targetList.forEach(function(target){
    target.addEventListener('dragstart', function(e){
        this.classList.add('dragging');
        console.log('aaaa');
        currentTarget = this;
    })
    target.addEventListener('dragend', function(e){
        this.classList.remove('dragging');
    })
    
})
boxes.forEach(function(box){
    box.addEventListener('dragover',function(e){
        // e.preventDefault(); // trả về sự kiện nguyên thủy
        // console.log('over');
        // if(!box.querySelector('.target')){
        //     this.appendChild(currentTarget);
        // }
        this.appendChild(currentTarget);
    })
    box.addEventListener('drop',function(e){
        // if(!box.querySelector('.target')){
        //     this.appendChild(currentTarget);
        // }
        this.appendChild(currentTarget);
    })
})