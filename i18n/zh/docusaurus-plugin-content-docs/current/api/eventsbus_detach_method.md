---
sidebar_label: detach()
title: detach events bus 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 detach events bus 方法。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载免费 30 天试用版的 DHTMLX Spreadsheet。
---

# detach()

### 描述 {#description}

@short: 从事件中移除一个处理器（该处理器之前通过 `on()` 方法附加）

### 用法 {#usage}

~~~jsx
detach(name: string): void;
~~~

### 参数 {#parameters}

- `name` - （必填）要移除处理器的事件名称

### 示例 {#example}

~~~jsx {10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.events.on("StyleChange", function(id){
  console.log("The style of cell "+spreadsheet.selection.get()+" is changed");
});

spreadsheet.events.detach("StyleChange");
~~~

:::info
默认情况下，`detach()` 会移除目标事件的所有事件处理器。您可以使用上下文标记来移除特定的事件处理器。
:::

~~~jsx
const marker = "any"; // 可以使用任意字符串|对象值

spreadsheet.events.on("StyleChange", handler1);
spreadsheet.events.on("StyleChange", handler2, marker);
// 以下命令将只删除 handler2
spreadsheet.events.detach("StyleChange", marker);
~~~

**相关文章：** [事件处理](handling_events.md)
