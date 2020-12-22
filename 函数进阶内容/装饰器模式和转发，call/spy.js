function work(a, b) {
  console.log( a + b ); // work 是一个任意的函数或方法
}

function spy (fnc) {
  let f = function (a, b) {
    f.calls.push([a, b])
    return fnc(a, b)
  }
  f.calls = []

  return f
}

work = spy(work)

work(1, 2)
work(4, 5)

for (let args of work.calls) {
  console.log( 'call:' + args.join() )
}