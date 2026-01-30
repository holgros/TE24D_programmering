/*
Referensmaterial på w3schools:
https://www.w3schools.com/js/js_errors_intro.asp
och de närmast följande rubrikerna
*/

// undantagshantering med try-catch-finally
try {
    // här skriver vi något som vi hoppas att programmet klarar av
    // men vi är osäkra
    // det kan vara t.ex. input från användare, läsa fil eller beroende av internetuppkoppling
}
catch (error) {
    // här skriver vi kod som körs ifall något går fel
    // catch-blocket är obligatoriskt ifall vi har ett try-block
}
finally {
    // här skriver vi kod som körs oavsett om något går fel eller inte
    // finally-blocket är inte obligatoriskt, utan frivilligt
}

// Exempel 1: läsa ett attribut som inte finns
try {   // här skriver vi "farlig" kod
    let a;  // definiera en variabel, men tilldela inget värde
    let b = a.ett_attribut_som_inte_finns;  // här blir det fel! attributet finns ju inte!
    console.log("Hit kommer programmet aldrig att nå, eftersom det blir fel i raden ovanför.");
}
catch (error) { // denna kod körs ifall något går fel
    console.log(`Något gick fel: ${error.message}`)
}
finally {   // den här koden körs oavsett om det blir fel eller ej
    console.log("Programmet fortsätter...")
    console.log("Slut på exempel 1")
}

// Exempel 2: generera ("kasta") ett eget fel, ifall vi har ett variabelvärde som vi inte vill tillåta
try {
    let x = 0;
    if (x == 0) {
        throw new Error("x får inte vara lika med noll!")
    }
    let y = 1/x;    // ...eftersom vi vill genomföra division med x
    console.log(y);
    console.log("Hit kommer programmet aldrig att nå, eftersom vi får ett fel redan på rad 34.")
}
catch (error) {
    console.log(`Något gick fel: ${error.message}`);
}
finally {
    console.log("Programmet fortsätter...");
    console.log("Slut på exempel 2")
}