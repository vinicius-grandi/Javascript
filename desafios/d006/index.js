let con = document.getElementById('con')
let res = document.getElementById('res')

function converter() {
    let cel = Number(prompt('Digite uma temperatura em °C (Celsius)'))
    let kel = cel + 273.15
    let fah = (cel * 9/5) + 32
    
    res.innerHTML = `
    <h2>A temperatura de ${cel}°C, corresponde a...</h2>
    ${kel.toFixed(2)}K (Kelvin) <br>
    ${fah}°F (Fahrenheit)
    `

}