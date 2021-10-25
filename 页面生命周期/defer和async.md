# `defer`

> **`defer` 特性仅适用于外部脚本**
>
> 如果 `<script>` 脚本没有 `src`，则会忽略 `defer` 特性。

+ 具有 `defer` 特性的脚本不会阻塞页面。

+ 具有 `defer` 特性的脚本总是要等到 DOM 解析完毕，但在 `DOMContentLoaded` 事件之前执行。

  ```javascript
  <p>...content before scripts...</p>
  
  <script>
    document.addEventListener('DOMContentLoaded', () => alert("DOM ready after defer!"));
  </script>
  
  <script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>
  
  <p>...content after scripts...</p>
  ```

+ **具有 `defer` 特性的脚本保持其相对顺序，就像常规脚本一样。**

  假设，我们有两个具有 `defer` 特性的脚本：`long.js` 在前，`small.js` 在后。

  ```markup
  <script defer src="https://javascript.info/article/script-async-defer/long.js"></script>
  <script defer src="https://javascript.info/article/script-async-defer/small.js"></script>
  ```

  浏览器扫描页面寻找脚本，然后并行下载它们，以提高性能。因此，在上面的示例中，两个脚本是并行下载的。`small.js` 可能会先下载完成。

  ……但是，`defer` 特性除了告诉浏览器“不要阻塞页面”之外，还可以确保脚本执行的相对顺序。因此，即使 `small.js` 先加载完成，它也需要等到 `long.js` 执行结束才会被执行。

  当我们需要先加载 JavaScript 库，然后再加载依赖于它的脚本时，这可能会很有用。

# `async`

> 当我们将独立的第三方脚本集成到页面时，此时采用异步加载方式是非常棒的：计数器，广告等，因为它们不依赖于我们的脚本，我们的脚本也不应该等待它们：
>
> ```markup
> <!-- Google Analytics 脚本通常是这样嵌入页面的 -->
> <script async src="https://google-analytics.com/analytics.js"></script>
> ```

- 浏览器不会因 `async` 脚本而阻塞（与 `defer` 类似）。
- 其他脚本不会等待 `async` 脚本加载完成，同样，`async` 脚本也不会等待其他脚本。
- `DOMContentLoaded`和异步脚本不会彼此等待：
  - `DOMContentLoaded` 可能会发生在异步脚本之前（如果异步脚本在页面完成后才加载完成）
  - `DOMContentLoaded` 也可能发生在异步脚本之后（如果异步脚本很短，或者是从 HTTP 缓存中加载的）

```javascript
<p>...content before scripts...</p>

<script>
  document.addEventListener('DOMContentLoaded', () => alert("DOM ready!"));
</script>

<script async src="https://javascript.info/article/script-async-defer/long.js"></script>
<script async src="https://javascript.info/article/script-async-defer/small.js"></script>

<p>...content after scripts...</p>
```

# 总结

| 顺序    | `DOMContentLoaded`                                           |                                                              |
| :------ | :----------------------------------------------------------- | ------------------------------------------------------------ |
| `async` | **加载优先顺序**。脚本在文档中的顺序不重要 —— 先加载完成的先执行 | 不相关。可能在文档加载完成前加载并执行完毕。如果脚本很小或者来自于缓存，同时文档足够长，就会发生这种情况。 |
| `defer` | **文档顺序**（它们在文档中的顺序）                           | 在文档加载和解析完成之后（如果需要，则会等待），即在 `DOMContentLoaded` 之前执行。 |

在实际开发中，`defer` 用于需要整个 DOM 的脚本，和/或脚本的相对执行顺序很重要的时候。

`async` 用于独立脚本，例如计数器或广告，这些脚本的相对执行顺序无关紧要。

