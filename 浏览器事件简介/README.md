# 浏览器事件简介

**事件** 是某事发生的信号。所有的 DOM 节点都生成这样的信号（但事件不仅限于 DOM）。

这是最有用的 DOM 事件的列表，你可以浏览一下：

**鼠标事件：**

- `click` —— 当鼠标点击一个元素时（触摸屏设备会在点击时生成）。
- `contextmenu` —— 当鼠标右键点击一个元素时。
- `mouseover` / `mouseout` —— 当鼠标指针移入/离开一个元素时。
- `mousedown` / `mouseup` —— 当在元素上按下/释放鼠标按钮时。
- `mousemove` —— 当鼠标移动时。

**键盘事件**：

- `keydown` 和 `keyup` —— 当按下和松开一个按键时。

**表单（form）元素事件**：

- `submit` —— 当访问者提交了一个 `<form>` 时。
- `focus` —— 当访问者聚焦于一个元素时，例如聚焦于一个 `<input>`。

**Document 事件**：

- `DOMContentLoaded` —— 当 HTML 的加载和处理均完成，DOM 被完全构建完成时。

**CSS 事件**：

- `transitionend` —— 当一个 CSS 动画完成时。

这里有 3 种分配事件处理程序的方式：

1.  HTML 特性（attribute）：onclick="..."。
2.  DOM 属性（property）：elem.onclick = function。
3.  方法（method）：elem.addEventListener(event, handler[, phase]) 用于添加，removeEventListener 用于移除。

HTML 特性很少使用，因为 HTML 标签中的 JavaScript 看起来有些奇怪且陌生。而且也不能在里面写太多代码。

DOM 属性用起来还可以，但我们无法为特定事件分配多个处理程序。在许多场景中，这种限制并不严重。

最后一种方式是最灵活的，但也是写起来最长的。有少数事件只能使用这种方式。例如 transtionend 和 DOMContentLoaded（上文中讲到了）。addEventListener 也支持对象作为事件处理程序。在这种情况下，如果发生事件，则会调用 handleEvent 方法。
无论你如何分类处理程序 —— 它都会将获得一个事件对象作为第一个参数。该对象包含有关所发生事件的详细信息。



```javascript
<input type="button" onclick="alert('Click!')" value="Button">


// html中需要括号
<input type="button" id="button" onclick="sayThanks()">

// 如果需要传入event的话 还需要手动传入event
<input type="button" id="button" onclick="sayThanks(event)">



<input type="button" id="button" value="Button"> <script> button.onclick = function() { alert('Click!'); }; </script>
```


要移除一个处理程序 —— 赋值 elem.onclick = null。