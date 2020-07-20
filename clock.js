const clock = document.querySelector(".js-clock")
const clockNum = clock.querySelector(".js-title")

const setTime = function(){
    const date = new Date()

    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    hours = hours < 10 ? `0${hours}` : hours
    minutes = minutes < 10 ? `0${minutes}` : minutes
    seconds = seconds < 10 ? `0${seconds}` : seconds
    
    clockNum.textContent = `${hours} : ${minutes} : ${seconds}`
}
function init() {
    setTime() //시작하자마자 실행
    setInterval(setTime, 1000)//1초간격으로 실행
}

init()