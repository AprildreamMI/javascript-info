# 坐标

坐标有两种

1. 相对于窗口坐标

   类似于`position:fixed`窗口相对坐标确实发生了变化（箭头变短了），因为同一个点越来越靠近窗口顶部。

   `clientX/clientY`

2. 相对于文档坐标

   类似于`position:absolute`元素在文档中的相对坐标保持不变，从文档顶部（现在已滚动出去）开始计算。

   `pageX/pageY`

当页面滚动到最开始时，此时窗口的左上角恰好是文档的左上角，它们的坐标彼此相等。但是，在文档移动之后，元素的窗口相对坐标会发生变化，因为元素在窗口中移动，而元素在文档中的相对坐标保持不变。

在下图中，我们在文档中取一点，并演示了它滚动之前（左）和之后（右）的坐标：

![](https://zh.javascript.info/article/coordinates/document-and-window-coordinates-scrolled.svg)

## 元素坐标`getBoundingClientRect`

方法 `elem.getBoundingClientRect()` 返回最小矩形的窗口坐标，该矩形将 `elem` 作为内建 [`DOMRect`](https://www.w3.org/TR/geometry-1/#domrect) 类的对象。

主要的 `DOMRect` 属性：

- `x/y` — 矩形原点相对于窗口的 X/Y 坐标，
- `width/height` — 矩形的 width/height（可以为负）。

此外，还有派生（derived）属性：

- `top/bottom` — 顶部/底部矩形边缘的 Y 坐标，
- `left/right` — 左/右矩形边缘的 X 坐标。

![](https://zh.javascript.info/article/coordinates/coordinates.svg)

```
left = x
top = y
right = x + width
bottom = y + height
```

- 坐标可能是负数。例如滚动页面，使 `elem` 现在位于窗口的上方，则 `elem.getBoundingClientRect().top` 为负数。

  当页面发生滚动时，top为次元素被卷出去的值，而不是page被卷出去的值，为负数

## [`elementFromPoint(x, y)`](https://zh.javascript.info/coordinates#elementFromPoint)

对 `document.elementFromPoint(x, y)` 的调用会返回在窗口坐标 `(x, y)` 处嵌套最多（the most nested）的元素。

```javascript
let elem = document.elementFromPoint(x, y);
```

```javascript
// 例如，下面的代码会高亮显示并输出现在位于窗口中间的元素的标签：
let centerX = document.documentElement.clientWidth / 2;
let centerY = document.documentElement.clientHeight / 2;

let elem = document.elementFromPoint(centerX, centerY);

elem.style.background = "red";
```

方法 `document.elementFromPoint(x,y)` 只对在可见区域内的坐标 `(x,y)` 起作用。

如果任何坐标为负或者超过了窗口的 width/height，那么该方法就会返回 `null`。

## 文档坐标

```javascript
// 获取元素的文档坐标
function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
}
```

## 鼠标坐标

```
pageX: 页面X坐标位置
pageY: 页面Y坐标位置
screenX: 屏幕X坐标位置
screenY: 屏幕Y坐标位置
clientX: 鼠标的坐标到可视区域左侧的距离
clientY: 鼠标的坐标到可视区域顶部的距离
clientWidth：可视区域的宽度
clientHeight：可视区域的高度
offsetX：鼠标坐标到元素的左侧的距离
offsetY：鼠标坐标到元素的顶部的距离
```

**offsetX和offsetY的值**不管box-sizing是border还是content，其值都是**从内容区域，不包含边框，**的右上角开始



