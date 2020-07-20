const toDoForm = document.querySelector(".js-toDoForm")
const toDoInput = toDoForm.querySelector("input")
const ul = document.querySelector(".js-toDoList")

const TODOS_LS = "toDos"
let toDos = []

const deleteToDo = function(event){
    const btn = event.target
    const li = btn.parentNode

    ul.removeChild(li)

    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id)
    })

    toDos = cleanToDos
    saveToDos()
}

const saveToDos = function() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}

const paintToDo = function(text){
    const li = document.createElement("li")
    const delBtn = document.createElement("button")
    const span = document.createElement("span")
    const newID = toDos.length + 1

    delBtn.textContent = 'X'
    delBtn.addEventListener("click", deleteToDo)
    span.textContent = text
    
    li.appendChild(delBtn)
    li.appendChild(span)
    li.id = newID
    ul.appendChild(li)

    const toDoObj = {
        "text": text,
        "id" : newID
    }

    toDos.push(toDoObj)
    saveToDos()
}

const OnSubmit = function(event){
    event.preventDefault()
    const currentValue = toDoInput.value

    paintToDo(currentValue)
    toDoInput.value = ""
}

const loadToDos = function() {
    const loadedToDos = localStorage.getItem(TODOS_LS)

    if (loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos)
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text)
        })
    }
}

function init(){
    loadToDos()
    toDoForm.addEventListener("submit", OnSubmit)
}

init()