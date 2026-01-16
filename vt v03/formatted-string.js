// I JavaScript kan man klistra ihop (konkatenerar) strängar
let myString = "Hej"
let myNewString = myString + " på dig!"
console.log(myNewString)

// Vill man skriva ut en sträng tillsammans med en variabel så finns det olika möjligheter
// (1) konkatenera enligt ovan
x = 5   // OBS: x är ett heltal
console.log("x="+x) // x=5, OBS att det går utmärkt att konkatenera en sträng med en annan datatyp (som automatiskt typas om till sträng)
// (2) särskild syntax, s.k. "formaterad sträng"
console.log(`Variabeln x är lika med ${x}.`)    // Variabeln x är lika med 5, OBS användandet av grav accent `