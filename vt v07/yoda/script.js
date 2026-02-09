// identifiera HTML-element
let textarea = document.getElementById("input");
let runBtn = document.getElementById("run");
let outputElement = document.getElementById("output");

// händelselyssnare som körs när man klickar på knappen
runBtn.addEventListener("click", function() {
    // läs in input och organisera i en array
    let input = textarea.value;
    let input_array = input.split("\n");    // splitta de båda raderna (\n = ny rad)
    let input1 = input_array[0];
    let input2 = input_array[1];

    // loopa igenom input
    let nbrDigits = Math.min(input1.length, input2.length);
    let output = ["", ""];
    for (let i = 0; i < nbrDigits; i++) {
        let nbr1 = Number(input1[input1.length-i-1]);
        let nbr2 = Number(input2[input2.length-i-1]);
        if (nbr1 >= nbr2) {
            output[0] = String(nbr1) + output[0];
        }
        if (nbr2 >= nbr1) {
            output[1] = String(nbr2) + output[1];
        }
    }
    
    // hantera fall där strängarna är olika långa
    if (nbrDigits < input1.length) {
        output[0] = input1.slice(0, input1.length-nbrDigits) + output[0];
    }

    // hantera fallet YODA
    if (!output[0]) {
        output[0] = "YODA";
    }

    // hantera fall där output börjar på noll
    if (output [0] != "YODA") {
        output[0] = Number(output[0]);
    }
    output[1] = Number(output[1]);
    
    // skriv till HTML
    outputElement.innerHTML = output[0] + "<br>" + output[1];
});