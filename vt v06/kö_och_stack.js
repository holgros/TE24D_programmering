let myArray = [];
myArray.push("först");
myArray.push("senare");
myArray.push("sist");
console.log(myArray); // så här ser listan ut från början

// varje lista (array) har metoden shift, som gör följande:
// (1) tar bort det första elementet i listan
// (2) returnerar det första elementet i listan
console.log(myArray.shift()); // först
console.log(myArray); // ["senare", "sist"]
console.log(myArray.shift()); // senare
console.log(myArray); // ["sist"]
console.log(myArray.shift()); // sist
console.log(myArray); // []

// Återskapa listan
myArray.push("först");
myArray.push("senare");
myArray.push("sist");
console.log(myArray);

// varje lista (array) har metoden pop, som gör följande:
// (1) tar bort det sista elementet i listan
// (2) returnerar det sista elementet i listan
console.log(myArray.pop()); // sist
console.log(myArray); // ["först", "senare"]
console.log(myArray.pop()); // senare
console.log(myArray); // ["först"]
console.log(myArray.pop()); // först
console.log(myArray); // []

// Återskapa listan igen
myArray.push("först");
myArray.push("senare");
myArray.push("sist");
console.log(myArray);

// varje lista (array) har metoden splice, som gör följande:
// (1) tar bort ett givet antal element från ett givet index
// (2) returnerar dessa element
console.log(myArray.splice(1, 1)); // OBS: två argument - det ena är antalet element och det andra är index
console.log(myArray);
