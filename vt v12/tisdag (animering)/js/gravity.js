let canvas = document.querySelector("canvas")

/** @type {CanvasRenderingContext2D} */
let c = canvas.getContext("2d")

// Startläge kvadrat
let xPosRed = 200
let yPosRed = 0
const sizeRed = 30

// Grundhastighet
let speed = 1
// Grundhastighet i y-led
let dyRed = speed
let gravity = 0.2 // en graviationskonstant, ju större ju högre gravitation

window.requestAnimationFrame(drawRect)

// Ritar upp kvadraterna
function drawRect() {
  // Rensar gammalt visuellt innehåll
  c.clearRect(0, 0, canvas.width, canvas.height)

  // Kolla om kvadraten fallit längst ned.
  if (isOnGround()) {
    // Placera kvadraten på botten (om den hamnat några pixlar utanför)
    yPosRed = canvas.height - sizeRed
  } else {
    // Beräkna nytt läge genom att lägga till gravitation
    dyRed = dyRed + speed * gravity
    yPosRed += dyRed
  }

  // Den röda kvadraten ritas i sitt nya läge
  c.fillStyle = "red"
  c.fillRect(xPosRed, yPosRed, sizeRed, sizeRed)

  requestAnimationFrame(drawRect)
}

// Då kvadraten är längst ned.
function isOnGround() {
  // Längst ned
  if (yPosRed >= canvas.height - sizeRed) {
    return true
  }
  return false
}

// en eventhanterare som hanterar change-eventet på slidern för gravitationen
// och sätter om ett nytt värde på gravitationen
document.getElementById("rngGravity").addEventListener("change", function (e) {
  console.log(e.target.value) // Detta innehåller sliderns värde
  dyRed = 1
  gravity = e.target.value / 10
})

// en eventhanterare som startar om animationen genom att
// placera kvadraten högst upp igen.
document.getElementById("btnRestart").addEventListener("click", function (e) {
  yPosRed = 0
})
