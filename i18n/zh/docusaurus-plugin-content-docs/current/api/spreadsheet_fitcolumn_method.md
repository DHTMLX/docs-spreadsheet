---
sidebar_label: fitColumn()
title: fitColumn 方法
description: 使用 fitColumn() 方法将 DHTMLX Spreadsheet 中列的宽度调整为与其最长值匹配。
---

# fitColumn()

### 描述 {#description}

@short: 将列宽调整为与其最长值匹配


### 用法 {#usage}

~~~jsx
fitColumn(cell: string): void;
~~~

### 参数 {#parameters}

- `cell` - （必填）包含目标列名称的单元格 id

### 示例 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 调整 "G" 列的宽度
spreadsheet.fitColumn("G2");
~~~

**更新日志：** v5.0 中新增

**相关文章：** [使用 Spreadsheet](working_with_ssheet.md#autofit-column-width)
