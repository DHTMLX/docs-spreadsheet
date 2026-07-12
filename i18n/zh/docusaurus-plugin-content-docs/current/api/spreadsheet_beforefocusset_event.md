---
sidebar_label: beforeFocusSet
title: beforeFocusSet 事件
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 beforeFocusSet 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的 30 天免费试用版本。
---

# beforeFocusSet

### 描述 {#description}

@short: 在单元格获得焦点之前触发

### 用法 {#usage}

~~~jsx
beforeFocusSet: (cell: string) => void | boolean;
~~~

### 参数 {#parameters}

事件的回调函数接受以下参数：

- `cell` - （必填）单元格的 id

### 返回值 {#returns}

返回 `true` 以在单元格上设置焦点，返回 `false` 以阻止设置焦点

### 示例 {#example}

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 订阅 "beforeFocusSet" 事件
spreadsheet.events.on("beforeFocusSet", function(cell){
  console.log("Focus will be set on a cell "+spreadsheet.selection.getSelectedCell());
  console.log(cell);
  return true;
});
~~~

**相关文章：** [事件处理](handling_events.md)
