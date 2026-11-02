---
sidebar_label: afterFocusSet
title: afterFocusSet 事件
description: 使用 afterFocusSet 事件跟踪 DHTMLX Spreadsheet 中获得焦点的单元格，该事件在单元格获得焦点后触发，并接收单元格的 id。
---

# afterFocusSet

### 描述 {#description}

@short: 在单元格获得焦点后触发

### 用法 {#usage}

~~~jsx
afterFocusSet: (cell: string) => void;
~~~

### 参数 {#parameters}

事件的回调函数接受以下参数：

- `cell` - （必填）单元格的 id

### 示例 {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 订阅 "afterFocusSet" 事件
spreadsheet.events.on("afterFocusSet", function(cell){
     console.log("Focus is set on a cell " + spreadsheet.selection.getSelectedCell());
    console.log(cell);
});
~~~

**相关文章：** [事件处理](handling_events.md)
