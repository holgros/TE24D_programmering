/* 
 Arrow functions
 ============
 Arrow functions är ett alterativt sätt att beskriva funktioner 
 med hjälp av en sk. "Fat Arrow" (=>).
*/

// Så här deklareras en funktion på klassiskt sätt.
function add(a, b) {
  return a + b
}

// Så här kan samma funktion deklareras med en fat arrow. Det man egentligen gör
// är att skapa en funktion och tilldela den till en variabel. Funktionen anropas sedan
// genom att ange variabelnamnet med parenteser med argument i. Se nedan.
const addFatArrow = (a, b) => {
  return a + b
}

// Funktionen kan i det här fallet skrivas ännu kompaktare!
const addCompact = (a, b) => a + b

// Funktionerna används sedan på samma sätt.
console.log(add(2, 3)) // Output: 5
console.log(addFatArrow(2, 3)) // Output: 5
console.log(addCompact(2, 3)) // Output: 5