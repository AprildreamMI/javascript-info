function filterRangeInPlace (arr, a, b) {
  arr.forEach((item, index) => {
    if (!(item >=a && item <=b)) {
      arr.splice(index, 1)
    }
  })
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // 删除了范围在 1 到 4 之外的所有值

console.log(arr)

let arr2 = [5, 2, 1, -10, 8];
arr2.sort((a, b) => {
  return b - a
})
console.log(arr2)

