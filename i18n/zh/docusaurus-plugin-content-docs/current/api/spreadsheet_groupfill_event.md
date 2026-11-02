---
sidebar_label: groupFill
title: groupFill 事件
description: 使用 groupFill 事件处理 DHTMLX Spreadsheet 中的单元格自动填充，该事件会将获得焦点的单元格和选中的单元格传递给回调函数。
---

# groupFill

### 描述 {#description}

@short: 在自动填充单元格时触发

### 用法 {#usage}

~~~jsx
groupFill: (focusedCell: string, selectedCell: string) => void;
~~~

### 参数 {#parameters}

事件的回调函数接受以下参数：

- `focusedCell` - （必填）当前获得焦点的单元格 id
- `selectedCell` - （必填）已选中单元格的 id

### 示例 {#example}

~~~jsx {5-7}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 订阅 "groupFill" 事件
spreadsheet.events.on("groupFill", function (focusedCell, selectedCell) {
    console.log(focusedCell, selectedCell);
});
~~~

**相关文章：** [事件处理](handling_events.md)
