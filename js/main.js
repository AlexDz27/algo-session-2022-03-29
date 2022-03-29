function findThreeLargestNumbers(array) {
  // find largest and put in arr
  const arr = []
  let indicesToSkip = []
  while (arr.length !== 3) {
    let candidateLargestNumber = array[0]
    for (let i = 1; i < array.length; i++) {
      const number = array[i]

      if (candidateLargestNumber < number) {
        candidateLargestNumber = number
      }
    }

    arr.push(candidateLargestNumber)
  }

  // sort arr
  arr.sort((a, b) => a - b)

  array = arr

  return array
}

// console.log(findThreeLargestNumbers(exampleArr))
// console.log(findThreeLargestNumbers(exampleArr2))
// console.log(findThreeLargestNumbers(exampleArrSmaller1))

console.log(findThreeLargestNumbers(testCase11Smaller1))
