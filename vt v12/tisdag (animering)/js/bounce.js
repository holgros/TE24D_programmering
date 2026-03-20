let canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
canvas.style.width = "100%"
canvas.style.height = "100%"

let c = canvas.getContext("2d")

// Startläge kvadraterna
// Slumpas fram med lite marginal från kanterna
// (minst 200 px till vänstermarginal, max 20 % av bredd till högermarginal)
let xPosRed = Math.floor(Math.random() * (0.8 * canvas.width - 200) + 200)
let yPosRed = Math.floor(Math.random() * (0.8 * canvas.height - 200) + 200)
let xPosYellow = Math.floor(Math.random() * (0.8 * canvas.width - 100) + 100)
let yPosYellow = Math.floor(Math.random() * (0.8 * canvas.height - 100) + 100)

// Hastighet för respektive kvadrat, i x- och y-led
// kan slumpas fram inom lämpligt intervall enl. samma metod som startläget.
let dxRed = 3
let dyRed = 4
let dxYellow = 5
let dyYellow = 3

// Sidlängd för respektive kvadrat
const sizeRed = 30
const sizeYellow = 30

// Variabler som håller reda på respektive kvadrats mittkoordinat
let xCenterRed = (xPosRed + xPosRed + sizeRed) / 2
let yCenterRed = (yPosRed + yPosRed + sizeRed) / 2
let xCenterYellow = (xPosYellow + xPosYellow + sizeYellow) / 2
let yCenterYellow = (yPosYellow + yPosYellow + sizeYellow) / 2

window.requestAnimationFrame(drawRect)

// Ritar upp kvadraterna
function drawRect() {
  // Rensar gammalt visuellt innehåll
  c.clearRect(0, 0, canvas.width, canvas.height)

  // Kolla om riktningsändring ska göras pga kant
  isOnGround()

  // Beräkna nytt läge
  xPosRed += dxRed
  yPosRed += dyRed
  xPosYellow += dxYellow
  yPosYellow += dyYellow

  // Den röda kvadraten ritas i sitt nya läge
  c.fillStyle = "red"
  c.fillRect(xPosRed, yPosRed, sizeRed, sizeRed)

  // Den gula kvadraten ritas i sitt nya läge
  c.fillStyle = "yellow"
  c.fillRect(xPosYellow, yPosYellow, sizeYellow, sizeYellow)

  // Variablerna för mittenkoordinaten för respektive
  // kvadrat uppdateras
  xCenterRed = (xPosRed + xPosRed + sizeRed) / 2
  yCenterRed = (yPosRed + yPosRed + sizeRed) / 2
  xCenterYellow = (xPosYellow + xPosYellow + sizeYellow) / 2
  yCenterYellow = (yPosYellow + yPosYellow + sizeYellow) / 2

  requestAnimationFrame(drawRect)
}

// Då respektive kvadrat kommer till en ytterkant ska de studsa
function isOnGround() {
  if (xPosRed < 0 || xPosRed > canvas.width - sizeRed) {
    dxRed = -dxRed
  }

  if (xPosYellow < 0 || xPosYellow > canvas.width - sizeYellow) {
    dxYellow = -dxYellow
  }

  if (yPosRed < 0 || yPosRed > canvas.height - sizeRed) {
    dyRed = -dyRed
  }
  if (yPosYellow < 0 || yPosYellow > canvas.height - sizeYellow) {
    dyYellow = -dyYellow
  }
}
