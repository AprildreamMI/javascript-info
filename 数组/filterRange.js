function filterRange (arr, a, b) {
  let list = arr.filter(item => {
    return item >= a && item <= b
  })

  console.log(list)
  return list
}

let arr = [5, 3, 8, 1]

filterRange(arr, 1, 4)