// Kom ihåg: begreppet "falsy"
let x = 0; // talet noll utvärderas som false, fastän det strikt talat inte är ett logiskt värde
if (x) {
  console.log("talet noll är 'truthy'");
} else {
  console.log("talet noll är 'falsy'");
}
// detsamma gäller t.ex. tomma strängar
x = "";
if (x) {
  console.log("en tom sträng är 'truthy'");
} else {
  console.log("en tom sträng är 'falsy'");
}

// paradox
console.log("" == 0); // true, eftersom 0 och "" har samma sanningsvärde (false)
console.log(0 == "0"); // true, strängen "0" typas automatiskt om till talet noll och därmed gäller likhet
console.log("" == "0"); // false, tom sträng är inte lika med strängen "0"
