// 现在位于鼠标下方的 <td>（如果有）
// let currentElem = null;

table.onmouseover = function(event) {
  const target = event.target
  const targetTagName = target.tagName

  console.log('over target', target)

  if (targetTagName !== 'TD') return

  if (!table.contains(target)) return

  onEnter(target)
}


table.onmouseout = function(event) {
  // 鼠标离开的元素
  const target = event.target
  // 鼠标进入的元素
  const relatedTarget = event.relatedTarget
  const targetTagName = target.tagName
  console.log('over target', target)

  if (relatedTarget && target.contains(relatedTarget)) return

  onLeave(target)
}

// 任何处理进入/离开一个元素的函数
function onEnter(elem) {
  elem.style.background = 'pink';

  // 在文本区域显示它
  text.value += `over -> ${elem.tagName}.${elem.className}\n`;
  text.scrollTop = 1e6;
}

function onLeave(elem) {
  elem.style.background = '';

  // 在文本区域显示它
  text.value += `out <- ${elem.tagName}.${elem.className}\n`;
  text.scrollTop = 1e6;
}