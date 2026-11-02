---
sidebar_label: clear()
title: clear 方法
description: 使用 clear() 方法从 DHTMLX Spreadsheet 中删除所有数据。
---

# clear()

### 描述 {#description}

@short: 清空电子表格

### 用法 {#usage}

~~~jsx
clear(): void;
~~~

### 示例 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 清空电子表格
spreadsheet.clear();
~~~

**更新日志：** 在 v4.2 中新增

**相关文章：** [清空电子表格](working_with_ssheet.md#clearing-spreadsheet)

**相关示例：** [Spreadsheet. Clear](https://snippet.dhtmlx.com/szmtjn72)
