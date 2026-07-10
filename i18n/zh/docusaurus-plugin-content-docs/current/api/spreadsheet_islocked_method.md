---
sidebar_label: isLocked()
title: isLocked 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 isLocked 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# isLocked()

### 描述 {#description}

@short: 检查单元格是否被锁定

### 用法 {#usage}

~~~jsx
isLocked(cell: string): boolean;
~~~

### 参数 {#parameters}

- `cell` - （必填）单元格或单元格范围的 id

### 返回值 {#returns}

若单元格已锁定，该方法返回 `true`；若未锁定，则返回 `false`

### 示例 {#example}

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 检查单个单元格是否被锁定
const cellLocked = spreadsheet.isLocked("A1");

// 检查多个单元格是否被锁定
const rangeLocked = spreadsheet.isLocked("A1:C1");

// 检查离散单元格是否被锁定
const cellsLocked = spreadsheet.isLocked("A1,B5,B7,D4:D6");
~~~

:::info
若同时检查多个单元格，只要其中有至少一个单元格被锁定，该方法即返回 `true`。
:::

:::info
从 v4.1 开始，可以使用以下格式指定单元格或单元格范围的引用：

~~~jsx
const cellsLocked = spreadsheet.isLocked("sheet1!A2"); 
~~~

其中 `sheet1` 是标签页的名称。

如果未指定标签页名称，该方法将检查活动标签页中的单元格。
:::
