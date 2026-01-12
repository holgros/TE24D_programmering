/*
En kommentar (jämför med """ i Python)
På flera rader (allt mellan stjärna-snedstreck-sekvenserna ignoreras)
*/

// Kommentar på en rad (jämför med # i Python)

// console.log() används för att skriva ut något, likt print() i Python
console.log("Tjena!")

// tilldelning av värde till en variabel
const x = 10    // en konstant som inte ändras under programmets gång
let enAnnanVariabel = 7 // let används för värden som ska ändras under programmets gång
console.log(x)  // 10
console.log(enAnnanVariabel)    // 7
enAnnanVariabel = enAnnanVariabel+1 // ändra värdet på en variabel
console.log(enAnnanVariabel)    // 8
// x = x+1  FEL - konstanter får inte ändras!

// if-else, kodblock skapas med "måsvingar"
if (x == 10) {  // två likhetstecken vid jämförelser, precis som i Python
    console.log("x är 10")
}
else {
console.log("x är inte 10") // JavaScript bryr sig inte om indentering, men det kan vara bra att ha ändå för läsbarhetens skull
}

// === strikt likhet, jämför även datatyp
if ("5" == 5) { // jämför textsträngen "5" med talet 5
    console.log("'5' är 5")
}
if ("5" === 5) {    // kollar inte bara att textsträngen "5" är lika med talet 5, utan även att de är samma datatyp (vilket de ju inte är)
    console.log("'5' är strikt 5")
}
else {
    console.log("'5' är inte strikt 5")
}

// != eller !== anända för att avgöra om något INTE GÄLLER

// Logiska operatorer
// && är logiskt OCH (motsvarar "and" i Python)
// || (två pipe-tecken) är logiskt ELLER (motsvarar "or" i Python)
if (x === 10 && enAnnanVariabel != 10) {
    console.log("x är tio men enAnnanVariabel är INTE 10")
}
if (x > 15 || enAnnanVariabel === 8) {
    console.log("x är större än 15, enAnnanVariabel är lika med 8 eller både och")
}

// Dynamisk typning, en variabel kan byta datatyp under programmets gång utan att det blir fel
let y = 7
console.log("y=" + y)   // y=7 (klistra ihop en textsträng och ett tal i utskriften)
y = "något annat"   // nu är variabeln y en textsträng istället för ett tal
console.log("y=" + y)   // y=något annat

// en funktion som tar två tal som inparametrar och returnerar summan av dem
// nyckelordet "function" motsvarar "def" i Python
function add(tal1, tal2) {
    return tal1+tal2
}
let summa = add(2, 3)   // anropa funktionen och spara resutatet i en variabel med namn "summa"
console.log(summa) // skriv ut resultatet (5)

// en array (eller "fält" på svenska) motsvarar en lista i Python
let arr = [1, 2, 3, 4, "hej"]
console.log(arr[2]) // 3

// loopa igenom en array med en for-loop
for (let index = 0; index < arr.length; index = index+1) {  // motsvarar i Python "for index in range(len(arr))"
    console.log(arr[index])
}

// objekt i JavaScript
let obj = {
    klass: "TE24D",
    antalElever: 29,
    mentorer: ["Holger", "Filip"],
    skola: "Åva"
}
console.log(obj.skola)  // Åva
console.log(obj.antalElever)    // 29