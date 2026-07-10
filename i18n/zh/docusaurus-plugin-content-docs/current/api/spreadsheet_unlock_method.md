---
sidebar_label: unlock()
title: unlock 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 unlock 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# unlock()

### 描述 {#description}

@short: 解锁已锁定的单元格

### 用法 {#usage}

~~~jsx
unlock(cell: string): void;
~~~

### 参数 {#parameters}

- `cell` - （必填）单个或多个单元格的 id，或单元格区域

### 示例 {#example}

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 解锁单个单元格
spreadsheet.unlock("A1");

// 解锁单元格区域
spreadsheet.unlock("A1:C1");

// 解锁指定的多个单元格
spreadsheet.unlock("A1,B5,B7,D4:D6");
~~~

:::info
从 v4.1 开始，对单元格或单元格区域的引用可以采用以下格式：

~~~jsx
spreadsheet.unlock("sheet1!A2"); 
~~~

其中 `sheet1` 是标签页的名称。

如果未指定标签页名称，该方法将解锁活动标签页中的单元格。
:::
