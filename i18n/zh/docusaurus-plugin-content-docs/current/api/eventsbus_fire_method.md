---
sidebar_label: fire()
title: fire events bus 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 fire events bus 方法。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载免费 30 天试用版的 DHTMLX Spreadsheet。
---

# fire()

### 描述 {#description}

@short: 触发一个内部事件

:::info
通常情况下，事件会自动调用，您无需使用此方法。
:::

### 用法 {#usage}

~~~jsx
fire(name: string, arguments: array): boolean;
~~~

### 参数 {#parameters}

- `name` - （必填）事件名称，不区分大小写
- `arguments` - （必填）与事件相关的数据数组

### 返回值 {#returns}

若某个事件处理器返回 `false`，则该方法返回 `false`；否则返回 `true`

### 示例 {#example}

~~~jsx {10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.events.on("CustomEvent", function(param1, param2){
    return true;
});

const res = spreadsheet.events.fire("CustomEvent", [12, "abc"]);
~~~

**相关文章：** [事件处理](handling_events.md)
