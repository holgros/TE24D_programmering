// en klass är en "mall" för att skapa flera, snarlika objekt
class Person {
  // Konstruktorn är en speciell metod som körs när en instans av klassen ska skapas.
  // Den motsvarar __init__() i Python.
  constructor(namn, alder) {
    // Attribut skapas och får värden tilldelade.
    this.name = namn;
    this.age = alder;
  }

  // En metod (kommer finnas i alla instanser av klassen)
  sayHi() {
    console.log(
      "Hej, jag heter " + this.name + " och är " + this.age + " år gammal!"
    );
  }
}

// för att skapa en instans av en klass används nyckelordet new.
let holger = new Person("Holger", 18); // Variabeln holger tilldelas en instans av klassen Person.
console.log(holger); // skriver ut det nyskapade objektet

// Man kommer åt det nya objektets attribut med . eller [], såsom vi har sett i tidigare exempel
console.log(holger.age);
console.log(holger["name"]);
// Attribut kan ändras efter att man har skapat objektet
holger.name = "Golgrr";
holger["age"] = 81;
// Anropar en metod.
holger.sayHi();

// Teacher är ett specialfall av Person, s.k. subklass
class Teacher extends Person {
  // för att skapa en ny Teacher måste vi först skapa en ny Person
  constructor(name, alder, undervisningsAmnen) {
    // med nyckelordet super skapar vi en ny instans av superklassen Person
    super(name, alder); // alla lärare har namn och ålder, eftersom alla lärare är personer
    this.undervisningsAmnen = undervisningsAmnen; // lärare har dessutom undervisningsämnen
  }
}

// skapa en ny Teacher
let johanna = new Teacher("Johanna", 50, ["kemi", "teknik"]);
johanna.sayHi(); // vi har tillgång till samma metoder som för superklassen Person, s.k. ärvning
console.log(johanna.undervisningsAmnen);