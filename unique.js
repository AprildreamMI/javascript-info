let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
]

function unique1(arr) {
  let list = []
  arr.forEach((item1, index) => {
    let index2 = list.findIndex(item2 => {
      return item2 === item1
    })
    if (index2 === -1) {
      list.push(item1)
    }
  })

  console.log(list)
}
function unique(arr) {
  let strSet = new Set(arr)
  console.log(Array.from(strSet))
}


unique(strings)


let map = new Map();

map.set("name", "John");
map.set("name2", "John2");

let keys = Array.from(map.keys())

console.log(keys)

// Error: keys.push is not a function
keys.push("more");
console.log(keys)