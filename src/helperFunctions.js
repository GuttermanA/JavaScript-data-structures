const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

const generateRandomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * max) + min
}

const generateDataPoints = (n) => {
  //Array from 1 to 100
  const range = Array.from({length: 100}, (v, k) => k+1)

  const shuffledRange = shuffleArray(range)
  return shuffledRange.slice(0, n)
}

const removeElement = (array, index) => {
  if(index > -1) {
    array.splice(index, 1)
  }
  return array
}

module.exports = {
  generateRandomNumberBetween,
  generateDataPoints,
  removeElement
}
