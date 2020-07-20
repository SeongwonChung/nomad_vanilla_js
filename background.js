
const IMG_NUM = 6
const body = document.querySelector("body")

const paintImage = function(imgNum){
    const image = new Image()
    image.src = `images/${imgNum + 1}.jpg`
    image.classList.add("background")
    body.prepend(image)
}

const genRandom = function(){
    const number = Math.floor(Math.random() * IMG_NUM)
    return number
}   
function init(){

    const randomNum = genRandom()
    paintImage(randomNum)
}

init()