---
sidebar_label: afterEditStart
title: afterEditStart 事件
description: 使用 afterEditStart 事件处理 DHTMLX Spreadsheet 中单元格编辑的开始，该事件接收单元格的 id 及其值。
---

# afterEditStart

### 描述 {#description}

@short: 在单元格编辑开始后触发

### 用法 {#usage}

~~~jsx
afterEditStart: (cell: string, value: string) => void;
~~~

### 参数 {#parameters}

事件的回调函数接受以下参数：

- `cell` - （必填）单元格的 id
- `value` - （必填）单元格的值

### 示例 {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 订阅 "afterEditStart" 事件
spreadsheet.events.on("afterEditStart", function(cell, value){
    console.log("Editing has started");
    console.log(cell, value);
});
~~~

**相关文章：** [事件处理](handling_events.md)
