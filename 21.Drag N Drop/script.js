const emptyBoxes = document.querySelectorAll(".empty")
const picture = document.querySelector(".picture")
console.log(picture)
//Make pictrue draggable
picture.addEventListener('dragstart', dragStart); //Bat dau
picture.addEventListener('dragend', dragEnd); //Ket thuc

emptyBoxes.forEach(emptyBox => {
    emptyBox.addEventListener('dragover', dragOver) 
    emptyBox.addEventListener('dragenter', dragEnter) 
    emptyBox.addEventListener('dragleave', dragLeave)
    emptyBox.addEventListener('drop', dragDrop)
});

function dragStart() {
    this.className += ' hold'
    setTimeout(() => this.className = ' invisible',0)
}

function dragEnd() {
    this.className = 'picture'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter() {
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'empty'
}

function dragDrop() {
    this.className = 'empty'
    this.append(picture)
}


