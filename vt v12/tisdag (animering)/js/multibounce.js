/**
 * I filen bounce.js finns kod för två kvadrater som studsar mot canvasens väggar.
 * Det går lätt att se att kod är duplicerad i den filen.
 *
 * För att undvika duplicerad kod så ska vi skapa en klass för kvadraterna som
 * vi sedan kan skapa många instanser av.
 */

class BouncingSquare {
  constructor(x, y, size, color, canvas) {
    this.x = x
    this.y = y
    this.size = size
    this.color = color
    this.canvas = canvas
    this.drawingContext = canvas.getContext("2d")
    this.xSpeed = 5
    this.ySpeed = 3
  }

  move() {
    this.x += this.xSpeed
    this.y += this.ySpeed
  }

  draw() {
    this.drawingContext.fillStyle = this.color
    this.drawingContext.fillRect(this.x, this.y, this.size, this.size)
  }

  checkBounce() {
    if (this.x < 0 || this.x > this.canvas.width - this.size) {
      this.xSpeed = -this.xSpeed
    }

    if (this.y < 0 || this.y > this.canvas.height - this.size) {
      this.ySpeed = -this.ySpeed
    }
  }
}

let canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
canvas.style.width = "100%"
canvas.style.height = "100%"

let c = canvas.getContext("2d")

// skapa några instanser av BouncingSquare
let green = new BouncingSquare(100, 100, 40, "green", canvas)
let yellow = new BouncingSquare(200, 100, 30, "yellow", canvas)
let red = new BouncingSquare(300, 100, 30, "red", canvas)

// Variabeln squares är en array som innehåller alla kvadrater som ska ritas upp.
let squares = [green, yellow, red]

window.requestAnimationFrame(drawRect)

// Ritar upp kvadraterna
function drawRect() {
  // Rensar gammalt visuellt innehåll
  c.clearRect(0, 0, canvas.width, canvas.height)

  // loopar igenom alla squares och uppdaterar dem
  squares.forEach((square) => {
    square.checkBounce()
    square.move()
    square.draw()
  })

  requestAnimationFrame(drawRect)
}

/**
 * Lägger till en eventlyssnare som lyssnar efter ett klick-event på canvasen
 * och skapar en ny BouncingSquare varje gång, ungefär där musen var placerad vid klicket.
 */
canvas.addEventListener("click", (e) => {
  console.log(e)
  var rect = canvas.getBoundingClientRect() // används för att beräkna x och y i canvasen, men funkar inte 100%
  let x = e.clientX - rect.left
  let y = e.clientY - rect.top
  squares.push(new BouncingSquare(x, y, 30, "blue", canvas))
})
