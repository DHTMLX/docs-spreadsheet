---
sidebar_label: beforeEditStart
title: beforeEditStart 事件
description: 使用 beforeEditStart 事件控制 DHTMLX Spreadsheet 中哪些单元格可以编辑，返回 false 可阻止编辑器打开。
---

# beforeEditStart

### 描述 {#description}

@short: 在单元格开始编辑之前触发

### 用法 {#usage}

~~~jsx
beforeEditStart: (cell: string, value: string) => void | boolean;
~~~

### 参数 {#parameters}

事件的回调函数接受以下参数：

- `cell` - （必填）单元格的 id
- `value` - （必填）单元格的值

### 返回值 {#returns}

返回 `true` 以允许编辑单元格，返回 `false` 以阻止编辑

### 示例 {#example}

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 订阅 "beforeEditStart" 事件
spreadsheet.events.on("beforeEditStart", function(cell, value){
     console.log("Editing is about to start");
    console.log(cell, value);
    return true;
});
~~~

**相关文章：** [事件处理](handling_events.md)
