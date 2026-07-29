---
sidebar_label: sortCells()
title: sortCells 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 sortCells 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# sortCells()

### 描述 {#description}

@short: 对电子表格中的数据进行排序

### 用法 {#usage}

~~~jsx
sortCells(cell: string, dir: number): void;
~~~

### 参数 {#parameters}

- `cell` - （必填）用于对电子表格数据排序的单元格 id 或单元格区域
- `dir` - （必填）排序方向：
    - 1 - 升序
    - -1 - 降序

### 示例 {#example}

~~~jsx {7,10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // 配置参数
});
spreadsheet.parse(data);

// 对第一个工作表的数据进行排序
spreadsheet.sortCells("B2:B11", -1);

// 对多个工作表的数据进行排序
spreadsheet.sortCells("Income!B2:B11, Report!B2:B11, Expenses!C2:C11", 1);
~~~


**相关示例：** [Spreadsheet. Initialization with multiple sheets](https://snippet.dhtmlx.com/ihtkdcoc)

**相关文章：** [排序数据](working_with_ssheet.md#sorting-data)
