let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

function sortByAge (arr) {
  let arr2 = [ ...arr ]
  let list = arr.map(item => {
    return item.age
  })
  // 升序
  list.sort((a, b) => {
    return a > b ? -1 : 1
  })
  console.log(list)
}

sortByAge(arr)