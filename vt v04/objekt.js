let minBil = {
  // ett objekt har oftast en uppsättning "attribut", dvs. egenskaper (variabler) som hör till objektet
  tillverkare: "Volkswagen",
  maxHastighet: 190,
  passagerare: ["Holger", "Maria", "Ylva", "Ture", "Irma"],
  taklucka: false,
  // ett objekt har ofta även "metoder", dvs. beteende (funktioner) som hör till objektet
  // metod utan inparameter
  tuta: function () {
    console.log("TUUUT!!");
  },
  // metod med en inparameter hastighet
  köra: function (hastighet) {
    // nyckelordet "this" hänvisar i detta fall till objektet som metoden tillhör, dvs. minBil
    //console.log("Maxhastigheten är " + this.maxHastighet);
    if (this.maxHastighet > hastighet) {
      console.log(`Bilen kör i ${hastighet} km/h.`);
    } else {
      console.log("Du kan inte köra snabbare än maxhastigheten!");
    }
  },
};
console.log(minBil); // skriver ut hela objektet
console.log(minBil.tillverkare); // skriver ut Volkswagen
console.log(minBil["tillverkare"]); // samma som ovan, dvs. Volkswagen
console.log(minBil.passagerare[2]); // Ylva
minBil.tuta();
minBil.köra(120); // Bilen kör i 120 km/h!
minBil.köra(200); // Du får inte köra snabbare än maxhastigheten!
