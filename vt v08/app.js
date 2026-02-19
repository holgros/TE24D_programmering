const generator = require("./numberGenerator.js")
const quicksort = require("./quicksort.js")
const selectionsort = require("./selectionsort.js")

let aLotOfNumbers = generator.generateArrayWithRandomNumbers(100000)

/**
 * Först testar vi den inbyggda sorteringen i JavaScript.
 */
let start = new Date().valueOf()
let sorted = aLotOfNumbers.sort((a, b) => {
  return a - b
})
let end = new Date().valueOf()
console.log(`.sort() took ${end - start} milliseconds`)
console.log(sorted)

/**
 * Sedan testar vi selection sort.
 */
start = new Date().valueOf()
sorted = selectionsort.sort(aLotOfNumbers)
end = new Date().valueOf()
console.log(`selectionsort took ${end - start} milliseconds`)
console.log(sorted)

/**
 * Sedan testar vi quicksort.
 */
start = new Date().valueOf()
sorted = quicksort.sort(aLotOfNumbers, 0, aLotOfNumbers.length - 1)
end = new Date().valueOf()
console.log(`quicksort took ${end - start} milliseconds`)
console.log(sorted)
