const inputChoice = document.querySelector("textarea")
const choiceBoxes = document.querySelector(".tags")
inputChoice.focus()
inputChoice.onkeyup = (e) => {
    let texts = inputChoice.value
    createTag(texts)

    if (e.key == "Enter") {
        setTimeout(() => {
            inputChoice.value = ""
        },10)
        randomizeTags()
    }
}


function createTag(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    choiceBoxes.innerHTML = ""
    tags.forEach(tag => {
        let choiceBox = document.createElement("div")
        choiceBox.classList.add("tag")
        choiceBox.innerHTML = tag
        choiceBoxes.appendChild(choiceBox)
    });
}

function randomizeTags() {
    const times = 3000
    
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        hightlightTags(randomTag)

        setTimeout(() => {
            unhightlightTags(randomTag)
        }, 100);
    }, 100);
    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()
            hightlightTags(randomTag)
        },100)
    }, times);
}

function pickRandomTag() {
    const tagList = document.querySelectorAll(".tag")
    return tagList[Math.floor(Math.random()*(tagList.length))]

}

function hightlightTags(tag) {
    tag.classList.add("highlight")
}

function unhightlightTags(tag) {
    tag.classList.remove("highlight")
}


   
