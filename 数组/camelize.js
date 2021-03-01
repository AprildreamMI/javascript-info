function camelize (str) {
  let arr = str.split('-')
  arr.forEach((item, index) => {
    if(index !== 0) {
      let c = item.charAt(0).toUpperCase()
      let otherChat = item.slice(1)
      arr[index] = c + otherChat
    }
  })

  console.log(arr.join(''))
  return arr.join('')
}

camelize("background-color")
camelize("list-style-image")
camelize("-webkit-transition")