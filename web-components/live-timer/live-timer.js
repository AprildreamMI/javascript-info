class LiveTimer extends HTMLElement {
  timer = null
  constructor () {
    super()
     // 事件附带给处理程序的其他详细信息
    this.addEventListener("tick", function(event) {
      console.log('tick detail', event.detail)
    });
  }

  connectedCallback () {
    this.innerHTML = '<time-formatted hour="numeric" minute="numeric" second="numeric"></time-formatted>'
    this.render()
  }

  disconnectedCallback () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  render () {
    const el = this.children[0]
    this.timer = setInterval(() => {
      const curDate = new Date()
      el.setAttribute('datetime', curDate)
      this.dispatchEvent(new CustomEvent("tick", {
        detail: curDate
      }))
    }, 1000)
  }

}

customElements.define("live-timer", LiveTimer);