/* 
 Ternary operatorn (?)
 ============
 Det finns ett kortare sätt att skriva vissa if-satser. 
 Sättet är egentligen en operator som kallas ternary operator. 
 Det är en konstruktion som återfinns även i andra programmeringsspråk. 
 Det är inte en konstruktion som ersätter alla if-satser, men i vissa fall är den behändig. 
 Speciellt bra är den när man vill ge en variabel ett värde beroende på ett villkor.
 Så här fungerar principen för ternary operatorn som består av ?:.
 (villkor) ? (värde om villkoret är sant/truthy) : (värde om villkoret är falskt/falsy)
*/

// Exempel 1: Tilldelning av värde till variabel
const age = 18
const isAdult = age >= 18 ? true : false
/*
Ger samma resultat som följande:
if (age == 18) {
    isAdult = true
}
else {
    isAdult = false    
}
*/
console.log(isAdult) // Output: true

// Exempel 2: Returnera ett värde beroende på ett villkor.
function getGreeting(isMorning) {
  const greeting = isMorning ? "Good morning!" : "Hello!"
  return greeting
}

console.log(getGreeting(true)) // Output: Good morning!
console.log(getGreeting(false)) // Output: Hello!