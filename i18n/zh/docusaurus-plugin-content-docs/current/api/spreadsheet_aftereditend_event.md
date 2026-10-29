---
sidebar_label: afterEditEnd
title: afterEditEnd 事件
description: 使用 afterEditEnd 事件处理 DHTMLX Spreadsheet 中单元格编辑的结束，该事件接收单元格的 id 及其新值。
---

# afterEditEnd

### 描述 {#description}

@short: 在单元格编辑结束后触发

### 用法 {#usage}

~~~jsx
afterEditEnd: (cell: string, value: string) => void;
~~~

### 参数 {#parameters}

事件的回调函数接受以下参数：

- `cell` - （必填）单元格的 id
- `value` - （必填）单元格的值

### 示例 {#example}

~~~jsx {5-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 订阅 "afterEditEnd" 事件
spreadsheet.events.on("afterEditEnd", function(cell, value){
     console.log("Editing is finished");
    console.log(cell, value);
});
~~~

**相关文章：** [事件处理](handling_events.md)
