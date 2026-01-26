// strängar har attribut och metoder
let text = "Detta är en sträng";
console.log(text.length); // skriver ut längden (18) hos strängen, motsvarar len(text) i Python
console.log(text.charAt(7)); // skriver ut tecknet på position 7 (r)
console.log(text.indexOf("ä")); // skriver ut positionen för första förekomsten av tecknet "ä" (6)

// strängar kan konkateneras (klistras ihop)
let merText = "Detta är en annan text";
let ännuMerText = text + merText;
console.log(ännuMerText); // Detta är en strängDetta är en annan text
// strängar kan även konkateneras med andra variabler
x = 5;
console.log("x=" + x); // x=5

// string literal är en relativt ny funktion i JavaScript, kännetecknas av backticks (grav accent)
let stringLiteral = `Detta är också en sträng.
Vi kan ha radbrytningar i strängen.
Vi kan också lägga in variabler, t.ex. ${x} och "${text}" utan att behöva krångla med plustecken och konkatenering.`;
console.log(stringLiteral);

/*
Referenslänkar om strängar:
https://www.w3schools.com/js/js_strings.asp
https://www.w3schools.com/js/js_string_methods.asp
https://www.w3schools.com/js/js_string_search.asp
https://www.w3schools.com/js/js_string_templates.asp
*/