let canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
canvas.style.width = "100%"
canvas.style.height = "100%"

/** @type {CanvasRenderingContext2D} */
let c = canvas.getContext("2d")

// Startläge kvadrat
let xPosRed = 200
let yPosRed = 0
const sizeRed = 30

// Grundhastighet
let speed = 1
let dyRed = speed
let gravity = 0.2 // en graviationskonstant, ju större ju högre gravitation

window.requestAnimationFrame(drawRect)

// Ritar upp kvadraterna
function drawRect() {
  // Rensar gammalt visuellt innehåll
  c.fillStyle = "white"
  c.fillRect(0, 0, canvas.width, canvas.height)
  drawGround()
  // Kolla om kvadraten fallit längst ned.
  if (isOnGround()) {
    // Placera kvadraten på botten (om den hamnat några pixlar utanför)
    yPosRed = groundLevel - sizeRed
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
  // Längst ned, och på väg nedåt.
  if (yPosRed >= groundLevel - sizeRed && dyRed > 0) {
    return true
  }
  return false
}

/**
 * Eventlyssnare för att "hoppa".
 * Ett "hopp" är att plötsligt få en negativ hastighet i y-led.
 * Man kan bara hoppa om man är på botten.
 */
document.addEventListener("keydown", function (e) {
  console.log(e)
  if (e.code === "Space" && isOnGround()) {
    console.log("Jumping!!!")
    dyRed = -10
  }
})

/**
 * Kod för att rita "marken".
 */
const tileWidth = 76
const tileHeight = 64
// GroundLevel blir canvasens höjd minus tilens höjd
const groundLevel = canvas.height - tileHeight

// hämtar ut den "osynliga" bilden ur sidan för att måla den på canvasen.
const img = document.getElementById("tile")

function drawGround() {
  // en loop som lägger ut tiles i x-led på y-koordinaten groundLEvel
  for (let index = 0; index < canvas.width / tileWidth; index++) {
    c.drawImage(img, index * tileWidth, groundLevel)
  }
}
