let arr = ["HTML", "JavaScript", "CSS"];

function copySorted (arr) {
  let list = arr.slice()
  list.sort()

  console.log(list)
}
copySorted(arr)
console.log(arr)