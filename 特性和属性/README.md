# 特性和属性

+ 把`DOM`对象的属性叫属性（property）
+ 把`HTML`标签上的叫特性（attributes）

## 标准特性

当一个元素有`id`或其他标准的特性，那么就会生成对应的DOM属性

```javascript
<body id="test" something="non-standard">
  <script>
    alert(document.body.id); // test
    // 非标准的特性没有获得对应的属性
    alert(document.body.something); // undefined
  </script>
</body>
```

## 操作特性

+ `elem.hasAttribute(name)` — 检查特性是否存在。
+ `elem.getAttribute(name)` — 获取这个特性值。
+ `elem.setAttribute(name, value)` — 设置这个特性值。
+ `elem.removeAttribute(name)` — 移除这个特性。
+ `elem.attributes` — 读取所有特性：属于内建 Attr 类的对象的集合，具有 name 和 value 属性。。

## 特性与属性的同步

当一个标准的特性被改变，对应的属性也会自动改变，(除了几个特例)反之亦然

## 非标准的特性-`dataset`
所有以 “data-” 开头的特性均被保留供程序员使用。它们可在 dataset 属性中使用。

```javascript
  // 读取
  alert(order.dataset.orderState); // new

  // 修改
  order.dataset.orderState = "pending"; // (*)
```