let canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
canvas.style.width = "100%"
canvas.style.height = "100%"

// Startläge kvadrat
// Slumpas fram med lite marginal från kanterna
// (minst 200 px till vänstermarginal, max 20 % av bredd till högermarginal)
let xPos = Math.floor(Math.random() * (0.8 * canvas.width - 200) + 200)
let yPos = Math.floor(Math.random() * (0.8 * canvas.height - 200) + 200)

// Hastighet för kvadrat
let speed = 5
let xSpeed = 0
let ySpeed = 0

// Sidlängd för kvadrat
const size = 30

// Reagerar på tangenttryckningar
// Varje tangent har sin keycode, se https://keycosde.info
// När en tangent trycks ned så sätts hastigheten i x- eller y-led.
document.onkeydown = function (e) {
  console.log(e) //Inparametern e innehåller ett event-objekt med information om eventet.
  const key = e.key
  switch (key) {
    case "w":
      // w-tangenten ska göra att kvadraten rör sig uppåt (negativ y-led).
      console.log("Going up")
      ySpeed = -speed
      break
    case "a":
      // a-tangenten ska göra att kvadraten rör sig åt vänster (negativ x-led).
      console.log("Going left")
      xSpeed = -speed
      break
    case "s":
      // s-tangenten ska göra att kvadraten rör sig nedåt (positiv y-led).
      console.log("Going down")
      ySpeed = speed
      break
    case "d":
      // d-tangenten ska göra att kvadraten rör sig åt höger (positiv x-led).
      console.log("Going right")
      xSpeed = speed
      break
    case " ": // Mellanslag
      console.log(`Mellanslag`)
      break
    default: // alla övriga tangenter
      console.log("Tangenten används inte")
  }
}

// När en tangent släpps upp så vill vi stoppa rörelsen i den riktningen.
document.onkeyup = function (e) {
  const key = e.key
  switch (key) {
    case "w":
      console.log("Stop up")
      ySpeed = 0
      break
    case "a":
      console.log("Stop left")
      xSpeed = 0
      break
    case "s":
      console.log("Stop down")
      ySpeed = 0
      break
    case "d":
      console.log("Stop right")
      xSpeed = 0
      break
  }
}

let ctx = canvas.getContext("2d")

// Animeringsloopen
function animate() {
  // Rensar gammalt visuellt innehåll
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // Sätt nya läget.
  xPos += xSpeed
  yPos += ySpeed

  // Den röda kvadraten ritas i sitt nya läge
  ctx.fillStyle = "red"
  ctx.fillRect(xPos, yPos, size, size)

  window.requestAnimationFrame(animate)
}

window.requestAnimationFrame(animate)
