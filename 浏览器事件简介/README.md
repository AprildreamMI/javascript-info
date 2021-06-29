这里有 3 种分配事件处理程序的方式：

1.  HTML 特性（attribute）：onclick="..."。
2.  DOM 属性（property）：elem.onclick = function。
3.  方法（method）：elem.addEventListener(event, handler[, phase]) 用于添加，removeEventListener 用于移除。

HTML 特性很少使用，因为 HTML 标签中的 JavaScript 看起来有些奇怪且陌生。而且也不能在里面写太多代码。

DOM 属性用起来还可以，但我们无法为特定事件分配多个处理程序。在许多场景中，这种限制并不严重。

最后一种方式是最灵活的，但也是写起来最长的。有少数事件只能使用这种方式。例如 transtionend 和 DOMContentLoaded（上文中讲到了）。addEventListener 也支持对象作为事件处理程序。在这种情况下，如果发生事件，则会调用 handleEvent 方法。
无论你如何分类处理程序 —— 它都会将获得一个事件对象作为第一个参数。该对象包含有关所发生事件的详细信息。