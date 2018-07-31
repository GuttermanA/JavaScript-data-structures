export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

export const generateRandomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * max) + min
}

export const generateDataPoints = (n) => {
  //Array from 1 to 100
  const range = Array.from({length: 100}, (v, k) => k+1)

  const shuffledRange = shuffleArray(range)
  return shuffledRange.slice(0, n)
}

export const removeElement = (array, index) => {
  if(index > -1) {
    array.splice(index, 1)
  }
  return array
}

export const checkEqualityOfArrays = (arr1, arr2) => {
  if(arr1.length !== arr2.length) {
    return false
  }

  for(let i = 0;i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false
    }
  }

  return true
}

export const checkEqualityOfSets = (set1, set2) => {
  if(set1.size !== set2.size) {
    return false
  }
  const arr1 = [...set1]
  const arr2 = [...set2]

  return checkEqualityOfArrays(arr1, arr2)
}

export const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array
}
