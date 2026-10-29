---
sidebar_label: deleteColumn()
title: deleteColumn 方法
description: 使用 deleteColumn() 方法从 DHTMLX Spreadsheet 中删除一列或一个列区域，包括合并单元格所跨的所有列。
---

# deleteColumn()

### 描述 {#description}

@short: 从电子表格中删除一列

:::info
该方法会删除指定单元格所在的列，并将其右侧的列向左移动。

如果该单元格位于合并单元格内，该方法会删除合并单元格所跨的每一列。
:::

### 用法 {#usage}

~~~jsx
deleteColumn(cell: string): void;
~~~

### 参数 {#parameters}

- `cell` - （必填）包含待删除列名称的单元格 id

### 示例 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 删除 "G" 列
spreadsheet.deleteColumn("G2");
~~~

:::note
您可以通过提供单元格 id 范围作为方法参数来删除多列，例如："A1:C3"。如果该区域涉及合并单元格，则会删除整个合并单元格所跨的列。覆盖整列的区域（例如在有 100 行的工作表中的 "B1:C100"）将按原样删除。
:::

### 详情 {#details}

删除合并单元格内的某一列时，整个合并单元格及其所有列都会被删除：

~~~jsx
spreadsheet.mergeCells("B2:D2");

// removes columns B, C and D
spreadsheet.deleteColumn("C2");
~~~

删除整列时，跨越这些列的合并单元格会变小。位于被删除列右侧的合并单元格会连同其列一起向左移动。如果被删除的列是固定列，则固定区域会减少被删除的固定列数。

`"deleteColumn"` 操作的 [`beforeAction`](api/spreadsheet_beforeaction_event.md) 和 [`afterAction`](api/spreadsheet_afteraction_event.md) 事件接收的是传给该方法的单元格，而不是被删除列的区域。

**更新日志：** 删除合并单元格的所有列的功能在 v6.0.4 中新增

**相关文章：**
- [使用行和列](work_with_rows_cols.md#removing-columns)
- [合并单元格](merge_cells.md#removing-rows-and-columns-of-merged-cells)
- [使用电子表格](working_with_ssheet.md#addingremoving-rows-and-columns)
