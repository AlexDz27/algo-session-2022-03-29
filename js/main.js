function findThreeLargestNumbers(array) {
  // find largest and put in arr
  const arr = []
  while (arr.length !== 3) {
    let candidateLargestNumber = array[0]
    let idxToRemove = 0
    for (let i = 1; i < array.length; i++) {
      const number = array[i]

      if (candidateLargestNumber < number) {
        candidateLargestNumber = number

        idxToRemove = i
      }
    }

    arr.push(candidateLargestNumber)
    array[idxToRemove] = 0
  }

  // sort arr
  arr.sort((a, b) => a - b)

  array = arr

  return array
}

// console.log(findThreeLargestNumbers(exampleArr))
console.log(findThreeLargestNumbers(exampleArr2))
// console.log(findThreeLargestNumbers(exampleArrSmaller1))
