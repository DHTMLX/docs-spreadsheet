---
sidebar_label: freezeRows() 
title: freezeRows 方法
description: 使用 freezeRows() 方法冻结 DHTMLX Spreadsheet 中的行，该方法会在当前或其他工作表中固定指定单元格或选中单元格之前的行。
---

# freezeRows()

### 描述 {#description}

@short: 固定（"冻结"）行

### 用法 {#usage}

~~~jsx
freezeRows(cell?: string): void;
~~~

### 参数 {#parameters}

- `cell` - （可选）用于确定行 id 的单元格 id。如果未传入单元格 id，则使用当前选中的单元格

### 示例 {#example}

~~~jsx 
spreadsheet.freezeRows("B2"); // 第 "2" 行及其上方的行将被固定
spreadsheet.freezeRows("sheet2!B2"); // "sheet2" 中第 "2" 行及其上方的行将被固定
~~~

**相关文章：** [使用 Spreadsheet](working_with_ssheet.md#freezingunfreezing-rows-and-columns)

**相关 API：** [`unfreezeRows()`](api/spreadsheet_unfreezerows_method.md)

**相关示例：** [Spreadsheet. 通过 API 冻结列和行](https://snippet.dhtmlx.com/a12xd1mn)

**更新日志：** 
v5.2 中新增
