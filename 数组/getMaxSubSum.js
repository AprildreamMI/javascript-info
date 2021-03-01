/**
 * alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
   alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
   alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
   alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
   alert( getMaxSubSum([1, 2, 3]) ); // 6
   alert( getMaxSubSum([-1, -2, -3]) ); // 0
 * @param {*} array 
 */
function getMaxSubSum (array) {
  let maxValue = 0
  for (let i = 0; i < array.length; i++) {
    let he = 0
    for (let j = i; j < array.length; j++) {
      he += array[j]
      maxValue = Math.max(maxValue, he)
    }
  }
  console.log(maxValue)
  return maxValue
}

getMaxSubSum([-1, 2, 3, -9])
getMaxSubSum([-1, 2, 3, -9, 11])
getMaxSubSum([-2, -1, 1, 2])
getMaxSubSum([100, -9, 2, -3, 5])
getMaxSubSum([1, 2, 3])
getMaxSubSum([-1, -2, -3])

/**
 * alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
   alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
   alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
   alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
   alert( getMaxSubSum([1, 2, 3]) ); // 6
   alert( getMaxSubSum([-1, -2, -3]) ); // 0
 * @param {*} array 
 */
function getMaxSubSum2 (array) {
  let maxValue = 0
  let he = 0
  for (let item of array) {
    he += item
    if (he < 0) {
      he = 0
    }
    maxValue = Math.max(maxValue, he)
  }
  console.log(maxValue)
  return maxValue
}

getMaxSubSum2([-1, 2, 3, -9])
getMaxSubSum2([-1, 2, 3, -9, 11])
getMaxSubSum2([-2, -1, 1, 2])
getMaxSubSum2([100, -9, 2, -3, 5])
getMaxSubSum2([1, 2, 3])
getMaxSubSum2([-1, -2, -3])