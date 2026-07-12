---
sidebar_label: lock()
title: lock 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 lock 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# lock()

### 描述 {#description}

@short: 锁定指定的单元格

### 用法 {#usage}

~~~jsx
lock(cell: string): void;
~~~

### 参数 {#parameters}

- `cell` - （必填）单元格或单元格区域的 id

### 示例 {#example}

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 锁定单个单元格
spreadsheet.lock("A1");

// 锁定单元格区域
spreadsheet.lock("A1:C1");

// 锁定指定的多个单元格
spreadsheet.lock("A1,B5,B7,D4:D6");
~~~

:::info
从 v4.1 起，单元格或单元格区域的引用可以使用以下格式指定：

~~~jsx
spreadsheet.lock("sheet1!A2"); 
~~~

其中 `sheet1` 是标签页的名称。

若未指定标签页名称，该方法将锁定当前活动标签页中的单元格。
:::

**相关示例**：[Spreadsheet. 锁定单元格](https://snippet.dhtmlx.com/czeyiuf8)
