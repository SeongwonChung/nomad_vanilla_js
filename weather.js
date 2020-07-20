import {SECRET} from "./config.js"

const weather = document.querySelector(".js-weather")

const API_KEY = SECRET["openWeatherAPI"]
const COORDS = 'coords'

function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function(response) {
        return response.json()
    }).then(function(json){
        console.log(json)
        const temp = json.main.temp
        const place = json.name
        weather.textContent = `${temp}℃ @ ${place}`
    })
}
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj)
    getWeather()
}

function handleGeoError(){
    console.log('error')
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS)
    if(loadedCoords === null){
        askForCoords()
    } else {
        const parseCoords = JSON.parse(loadedCoords)
        getWeather(parseCoords.latitude, parseCoords.longitude)
    }
}

function init(){
    loadCoords()
}

init()