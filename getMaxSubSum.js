/**
 * getMaxSubSum([-1, 2, 3, -9]) == 5（高亮项的加和）
   getMaxSubSum([2, -1, 2, 3, -9]) == 6
   getMaxSubSum([-1, 2, 3, -9, 11]) == 11
   getMaxSubSum([-2, -1, 1, 2]) == 3
   getMaxSubSum([100, -9, 2, -3, 5]) == 100
   getMaxSubSum([1, 2, 3]) == 6（所有项的和）
 * @param {*} arr 
 */
function getMaxSubSum (arr) {
  let valueList = []
  for (let i = 1; i <= arr.length; i++) {
    for (let j = 0; j <= arr.length - i; j++) {
      let list = []
      let value = 0
      for (let m = 0; m < i; m++) {
        const element = arr[j + m];
        list.push(element)
      }
      list.forEach(item => {
        value += item
      })
      valueList.push(value)
    }
  }
  console.log(valueList)
}

getMaxSubSum([-1, 2, 3, -9])
getMaxSubSum([2, -1, 2, 3, -9])
getMaxSubSum([-1, 2, 3, -9, 11])
getMaxSubSum([-2, -1, 1, 2])
getMaxSubSum([100, -9, 2, -3, 5])
getMaxSubSum([1, 2, 3])