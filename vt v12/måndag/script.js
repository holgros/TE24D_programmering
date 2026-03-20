// Hämta canvas och kontext
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 1. Rita en linje
ctx.beginPath();
ctx.moveTo(50, 50); // Startpunkt
ctx.lineTo(200, 50); // Slutpunkt
ctx.strokeStyle = "red"; // Linjefärg
ctx.lineWidth = 3; // Linjetjocklek
ctx.stroke(); // Rita linjen

// 2. Rita en rektangel (kontur)
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.strokeRect(50, 80, 150, 100);

// 3. Rita en rektangel (fylld med helfärg)
ctx.fillStyle = "rgba(0, 255, 0, 0.5)"; // Grön med 50% opacitet
ctx.fillRect(220, 80, 150, 100);

// 4. Rita en cirkel (eller båge)
ctx.beginPath();
ctx.arc(400, 130, 50, 0, Math.PI * 2); // x, y, radie, startvinkel, slutvinkel
ctx.fillStyle = "purple";
ctx.fill();

// 5. Rita en triangel (polygon)
ctx.beginPath();
ctx.moveTo(50, 250);
ctx.lineTo(150, 350);
ctx.lineTo(50, 350);
ctx.closePath(); // Stänger triangeln
ctx.fillStyle = "orange";
ctx.fill();

// 6. Rita en kvadratisk kurva
ctx.beginPath();
ctx.moveTo(200, 250);
ctx.quadraticCurveTo(250, 200, 300, 250); // Kontrollpunkt och slutpunkt
ctx.strokeStyle = "brown";
ctx.lineWidth = 3;
ctx.stroke();

// 7. Rita en Bézier-kurva
ctx.beginPath();
ctx.moveTo(350, 250);
ctx.bezierCurveTo(380, 200, 430, 300, 450, 250); // Två kontrollpunkter och slutpunkt
ctx.strokeStyle = "darkblue";
ctx.lineWidth = 3;
ctx.stroke();

// 8. Linjär gradient
const linearGradient = ctx.createLinearGradient(50, 380, 250, 380);
linearGradient.addColorStop(0, "red");
linearGradient.addColorStop(0.5, "yellow");
linearGradient.addColorStop(1, "green");

ctx.fillStyle = linearGradient;
ctx.fillRect(50, 360, 200, 30);

// 9. Radiell gradient
const radialGradient = ctx.createRadialGradient(400, 380, 10, 400, 380, 50);
radialGradient.addColorStop(0, "white");
radialGradient.addColorStop(1, "blue");

ctx.fillStyle = radialGradient;
ctx.beginPath();
ctx.arc(400, 380, 50, 0, Math.PI * 2);
ctx.fill();

// 10. Infoga bild
let image = document.getElementById("bildpåholger");

ctx.drawImage(image, 500, 250);

// 11. Infoga text
ctx.font = "50px Arial";
ctx.fillText("Hallåj!", 800, 350);
