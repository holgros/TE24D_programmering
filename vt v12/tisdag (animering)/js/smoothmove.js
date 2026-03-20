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

//Det här objektet håller reda på vilka tangenter som är nedtryckta.
//Om värdet är true är knappen nedtryckt.
let keys = {
  w: false,
  a: false,
  s: false,
  d: false,
}

// Reagerar på tangenttryckningar
// Varje tangent har sin keycode, se https://keycosde.info
// När en tangent trycks ned så får attributet med knappens värde i keys värdet true.
document.onkeydown = function (e) {
  console.log(e) //Inparametern e innehåller ett event-objekt med information om eventet.
  const key = e.key
  keys[key] = true // Sätter t.ex. keys.w till true
}

// När en tangent släpps upp så vill vi stoppa rörelsen i den riktningen.
// Då sätts värdet i keys till false.
document.onkeyup = function (e) {
  const key = e.key
  keys[key] = false
}

let ctx = canvas.getContext("2d")

// Animeringsloopen
function animate() {
  // Rensar gammalt visuellt innehåll
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // Sätt nya läget genom att kolla vilka knappar som är nedtryckta.
  if (keys.a) {
    xPos -= speed
  }
  if (keys.d) {
    xPos += speed
  }
  if (keys.w) {
    yPos -= speed
  }
  if (keys.s) {
    yPos += speed
  }

  // Den röda kvadraten ritas i sitt nya läge
  ctx.fillStyle = "red"
  ctx.fillRect(xPos, yPos, size, size)

  window.requestAnimationFrame(animate)
}

window.requestAnimationFrame(animate)
