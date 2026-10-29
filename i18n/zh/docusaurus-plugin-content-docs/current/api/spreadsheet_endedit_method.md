---
sidebar_label: endEdit()
title: endEdit 方法
description: 使用 endEdit() 方法结束 DHTMLX Spreadsheet 中选定单元格的编辑，该方法会关闭编辑器并保存输入的值。
---

# endEdit()

### 描述 {#description}

@short: 结束对选定单元格的编辑，关闭编辑器并保存输入的值

### 用法 {#usage}

~~~jsx
endEdit(): void;
~~~

### 示例 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 结束对选定单元格的编辑
spreadsheet.endEdit();
~~~

**相关文章：** [使用 Spreadsheet](working_with_cells.md#editing-a-cell)
