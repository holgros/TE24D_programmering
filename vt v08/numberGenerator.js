module.exports = {
  generateArrayWithRandomNumbers: (n) => {
    const randomArray = []
    for (let i = 0; i < n; i++) {
      randomArray.push(Math.round(Math.random() * n))
    }
    return randomArray
  },
}
