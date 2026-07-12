---
sidebar_label: mergeCells()
title: mergeCells 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 mergeCells 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# mergeCells()

### 描述 {#description}

@short: 将一组单元格合并为一个，或拆分已合并的单元格

### 用法 {#usage}

~~~jsx
mergeCells( 
    cell: string,
    remove?: boolean
);
~~~

### 参数 {#parameters}

- `cell` - （必填）单元格区域（例如 "A1:A5"）
- `remove` - （可选）定义对单元格执行的操作：
    - `false` - 合并单元格（默认值）
    - `true` - 拆分单元格

### 示例 {#example}

~~~jsx {5,8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 合并单元格 A3、A4 和 A5
spreadsheet.mergeCells("A2:A5");

// 拆分单元格 A3、A4 和 A5
spreadsheet.mergeCells("A2:A5", true);
~~~

**更新日志：** 在 v5.0 中新增

**相关文章：** [使用单元格](working_with_cells.md#merging-cells)
