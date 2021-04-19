class Clock {
  timer = null
  template = ''
  constructor ({template}) {
    template = template
  }

  render = () => {
    console.log(timer)
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop = () => {
    clearInterval(timer)
  }

  start = () => {
    render()
    timer = setInterval(render, 1000);
  }
}


/**
 * a和b，其实就是要对比的两个数而已，不存在前后
 * console出来为
 *  a, b 23 5
    a, b 5 43
    a, b 23 43
    a, b 54 23
    a, b 4 23
    a, b 656 23
    a, b 6 23
    a, b 45 23
    a, b 5 23
    ...
 * return -1  那么 a 就排在b前面
 * return 0   那么 a 和 b 的相对位置不变
 * return 1   那么 b 会被排列到 a 之前。
 * 
 * 到底是b-a, 还是a - b 是用户想要升序还是降序决定的
 * 拿下方数组举例：
 *  我们想要升序排序（从小到大），那么我们就希望小的在前面
 *    那么a-b小于0的话，就返回-1，希望a排在b的前面，直接可以
 *    简写为return a-b
 *  我们想要降序排序（从大到小），那么我们就希望大的在前面
 *    if (a - b < 0) {
        return 1
      } else if (a - b > 0) {
        return -1
      }
      可以简写为b-a，其目的就是希望大的排在小的前面
 */
let arr = [23,43,54,656,45,53,43,23,4,5,6,4,5]
arr.sort((a,b) => {
  console.log('a, b', a, b)
  if (a - b < 0) {
    return 1
  } else if (a - b > 0) {
    return -1
  }
})

console.log(arr)