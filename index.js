/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const numBtn = document.getElementById("num-box")
const convertBtn = document.getElementById("btn-convert")
const converted = document.getElementById("converted")
const convertedOne = document.getElementById("converted1")
const convertedTwo = document.getElementById("converted2")

function length() {
    let number = parseFloat(numBtn.value)
    let conNum = number * 3.281
    converted.textContent = `${number} meters = ${conNum.toFixed(2)} 
    feet | ${number} feet = ${(0.3048 * number).toFixed(2)}`
}

function volume() {
    let number = parseFloat(numBtn.value)
    let conNum = number * 0.264
    convertedOne.textContent = `${number} liters = ${conNum.toFixed(2)} 
    gallons | ${number} gallons = ${(3.78541 * number).toFixed(2)}`
}

function mass() {
    let number = parseFloat(numBtn.value)
    let conNum = number * 2.204
    convertedTwo.textContent = `${number} kilos = ${conNum.toFixed(2)} 
    pounds | ${number} pounds = ${(0.453592 * number).toFixed(2)}`
}

convertBtn.addEventListener('click', length)
convertBtn.addEventListener('click', volume)
convertBtn.addEventListener('click', mass)