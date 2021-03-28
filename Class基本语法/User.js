class Cdtsdk {
  name = ''
  
  ibf = {
    ifname: 'ibf',
    init: function (arg) {
      console.log(this, Cdtsdk)
      this._method(this.ifname, 'ibf.init')
    },
    setValue: function () {
      console.log(this.ifname)
    }
  }

  _method (ifname, arg) {
    console.log(this.ibf)
    console.log(ifname, arg)
  }

}

let cdtsdk = new Cdtsdk()
console.log(cdtsdk.ibf)
cdtsdk.ibf.setValue()
cdtsdk._method('a', 'c')
cdtsdk.ibf.init()


let ibf = {
  ifname: 'ibf',
  init: function (arg) {
    console.log(this, Cdtsdk)
    this._method(this.ifname, 'ibf.init')
  },
  setValue: function () {
    console.log(this.ifname)
  }
}