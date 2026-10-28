---
sidebar_label: deleteRow()
title: deleteRow 方法
description: 使用 deleteRow() 方法从 DHTMLX Spreadsheet 中删除一行或一个行区域，包括合并单元格所跨的所有行。
---

# deleteRow()

### 描述 {#description}

@short: 从电子表格中删除一行

:::info
该方法会删除指定单元格所在的行，并将其下方的行向上移动。

如果该单元格位于合并单元格内，该方法会删除合并单元格所跨的每一行。
:::

### 用法 {#usage}

~~~jsx
deleteRow(cell: string): void;
~~~

### 参数 {#parameters}

- `cell` - （必填）包含待删除行 id 的单元格 id

### 示例 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 删除第二行
spreadsheet.deleteRow("G2");
~~~

:::note
您可以通过提供单元格 id 范围作为方法参数来删除多行，例如："A1:C3"。如果该区域涉及合并单元格，则会删除整个合并单元格所跨的行。覆盖整行的区域（例如在 A 到 Z 列的工作表中的 "A2:Z3"）将按原样删除。
:::

### 详情 {#details}

删除合并单元格内的某一行时，整个合并单元格及其所有行都会被删除：

~~~jsx
spreadsheet.mergeCells("B2:B4");

// removes rows 2, 3 and 4
spreadsheet.deleteRow("B3");
~~~

删除整行时，跨越这些行的合并单元格会变小。位于被删除行下方的合并单元格会连同其行一起向上移动。如果被删除的行是固定行，则固定区域会减少被删除的固定行数。

`"deleteRow"` 操作的 [`beforeAction`](api/spreadsheet_beforeaction_event.md) 和 [`afterAction`](api/spreadsheet_afteraction_event.md) 事件接收的是传给该方法的单元格，而不是被删除行的区域。

**更新日志：** 删除合并单元格的所有行的功能在 v6.0.4 中新增

**相关文章：**
- [使用行和列](work_with_rows_cols.md#removing-rows)
- [合并单元格](merge_cells.md#removing-rows-and-columns-of-merged-cells)
- [使用电子表格](working_with_ssheet.md#addingremoving-rows-and-columns)
