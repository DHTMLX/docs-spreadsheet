---
sidebar_label: afterFocusSet
title: afterFocusSet 事件
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 afterFocusSet 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 订阅 "afterFocusSet" 事件
spreadsheet.events.on("afterFocusSet", function(cell){
     console.log("Focus is set on a cell " + spreadsheet.selection.getSelectedCell());
    console.log(cell);
});
~~~

**相关文章：** [事件处理](handling_events.md)
