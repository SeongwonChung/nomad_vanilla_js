const form = document.querySelector(".js-form")
const input = form.querySelector("input")
const greetings = document.querySelector(".js-greetings")
const USER_LS = 'currentUser',
    SHOWING_CN = 'showing'

const saveName = function(name){
    localStorage.setItem(USER_LS, name)
}

const handleSubmit = function(event){
    event.preventDefault()
    const currentValue = input.value
    saveName(currentValue)
    paintGreeting(currentValue)
}

const getName = function(){
    form.classList.add(SHOWING_CN)
    form.addEventListener("submit", handleSubmit)
}

const loadName = function(){
    const currentUser = localStorage.getItem(USER_LS)
    if (currentUser === null) {
        getName()
    } else {
        paintGreeting(currentUser)
    }
}
const paintGreeting = function(name){
    form.classList.remove(SHOWING_CN)
    greetings.classList.add(SHOWING_CN)
    greetings.textContent = `Hello, ${name}`
}

function init() {
    loadName()
}

init()