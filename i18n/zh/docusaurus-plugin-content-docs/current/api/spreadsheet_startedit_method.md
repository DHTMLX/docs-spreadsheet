---
sidebar_label: startEdit()
title: startEdit 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 startEdit 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# startEdit()

### 描述 {#description}

@short: 开始编辑选中的单元格

:::info
如果未传入单元格 id，则在当前选中的单元格中开始编辑。
:::

### 用法 {#usage}

~~~jsx
startEdit(cell?: string, initialValue?: string): void;
~~~

### 参数 {#parameters}

- `cell` - （可选）单元格的 id
- `initialValue` - （可选）单元格的值

### 示例 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 开始编辑当前选中的单元格
spreadsheet.startEdit();
~~~

### 详情 {#details}

在活动单元格中输入内容时，会通过该方法开始编辑。使用输入法编辑器 (IME) 组合的文本会在组合结束时作为 `initialValue` 传入。因此 [`beforeEditStart`](api/spreadsheet_beforeeditstart_event.md) 和 [`afterEditStart`](api/spreadsheet_aftereditstart_event.md) 事件会接收到输入或组合的文本，并且 `beforeEditStart` 可以取消编辑。

**更新日志：** 使用 IME 组合的文本开始编辑的功能在 v6.0.4 中新增

**相关文章：** [使用电子表格](working_with_cells.md#editing-a-cell)
