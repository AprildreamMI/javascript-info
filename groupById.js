let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(users) {
  let usersObj = {}

  usersObj = users.reduce((obj, item, index) => {
    obj[item.id] = item
    return obj
  }, {})

  console.log(usersObj)
}

let usersById = groupById(users);

/*
// 调用函数后，我们应该得到：

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/