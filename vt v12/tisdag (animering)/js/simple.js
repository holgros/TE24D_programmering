let canvas = document.getElementById("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
canvas.style.width = "100%"
canvas.style.height = "100%"

/** @type {CanvasRenderingContext2D} */
let c = canvas.getContext("2d")

// Ett objekt som är vår kvadrat
let square = {
  x: 10,
  y: 10,
  side: 40,
  xSpeed: 5, //hastighet i x-led
  ySpeed: 5, //hastighet i y-led
}

function draw() {
  //Flytta square med hjälp av hastigheten
  square.x += square.xSpeed // Ökar x-koordinaten med hastigheten i x-led
  square.y += square.ySpeed // Ökar y-koordinaten med hastigheten i y-led

  // Töm canvasen så vi kan rita om
  c.clearRect(0, 0, canvas.width, canvas.height)

  // Ritar en röd rektangel på square.x, square.y
  c.fillStyle = "red"
  c.fillRect(square.x, square.y, square.side, square.side)

  requestAnimationFrame(draw) //Kör den här funktionen igen.
}
requestAnimationFrame(draw)
