---
sidebar_label: beforeEditEnd
title: beforeEditEnd 事件
description: 使用 beforeEditEnd 事件在 DHTMLX Spreadsheet 中结束编辑之前检查单元格的值，返回 false 可使编辑器保持打开。
---

# beforeEditEnd

### 描述 {#description}

@short: 在单元格编辑结束之前触发

### 用法 {#usage}

~~~jsx
beforeEditEnd: (cell: string, value: string) => void | boolean;
~~~

### 参数 {#parameters}

事件的回调函数接受以下参数：

- `cell` - （必填）单元格的 id
- `value` - （必填）单元格的值

### 返回值 {#returns}

返回 `true` 可完成单元格编辑，返回 `false` 可阻止编辑器关闭

### 示例 {#example}

~~~jsx {5-9}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 订阅 "beforeEditEnd" 事件
spreadsheet.events.on("beforeEditEnd", function(cell, value){
     console.log("Editing has started");
    console.log(cell, value);
    return true;
});
~~~

**相关文章：** [事件处理](handling_events.md)
