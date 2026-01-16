/* 
 TRUTHY/FALSY
 ============
 I ett logiskt villkor (i t.ex. en if-sats) kan ett uttryck tolkas som sant eller falskt
 även om det inte har värdet true eller false. Det här kallas för att uttryck kan vara 
 TRUTHY eller FALSY.
*/

// Exempel på saker som är TRUTHY
const enSträngMedInnehåll = "Kalle Anka"
const heltalet42 = 42
const flyttalet37komma0 = 37.0
const enTomArray = []
const ettTomtObjekt = {}

if (enSträngMedInnehåll) {
  console.log("Variabeln är truthy")
} else {
  console.log("Variabeln är falsy")
}

// Exempel på saker som är FALSY
const enTomSträng = ""
const heltaletNoll = 0
const värdetNull = null // null är ett "tomt värde"
let någotSomÄrUndefined // den här variablen kommer ha "värdet" undefined

if (enTomSträng) {
  console.log("Variabeln är truthy")
} else {
  console.log("Variabeln är falsy")
}