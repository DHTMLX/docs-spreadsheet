---
sidebar_label: beforeSelectionSet
title: beforeSelectionSet 事件
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 beforeSelectionSet 事件。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的 30 天免费试用版本。
---

# beforeSelectionSet

### 描述 {#description}

@short: 在选中单元格之前触发

### 用法 {#usage}

~~~jsx
beforeSelectionSet: (cell: string) => void | boolean;
~~~

### 参数 {#parameters}

事件的回调函数接受以下参数：

- `cell` - （必填）单元格的 id（可为多个）

### 返回值 {#returns}

返回 `true` 以选中单元格，返回 `false` 以阻止选中单元格

### 示例 {#example}

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 订阅 "beforeSelectionSet" 事件
spreadsheet.events.on("beforeSelectionSet", function(cell){
     console.log("Cells "+spreadsheet.selection.getSelectedCell()+" will be selected");
    console.log(cell);
    return true;
});
~~~

**相关文章：** [事件处理](handling_events.md)
