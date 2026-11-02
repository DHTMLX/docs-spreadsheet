---
sidebar_label: hideSearch()
title: hideSearch 方法
description: 使用 hideSearch() 方法隐藏 DHTMLX Spreadsheet 的搜索栏，例如在通过 search() 方法打开搜索后将其关闭。
---

# hideSearch()

### 描述 {#description}

@short: 隐藏搜索栏

### 用法 {#usage}

~~~jsx
hideSearch(): void;
~~~

### 示例 {#example}

~~~jsx {5,8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 打开搜索栏并高亮显示找到的单元格
spreadsheet.search("min", true);

// 隐藏搜索栏
spreadsheet.hideSearch(); 
~~~

**更新日志：** 在 v5.0 中新增

**相关文章：** [使用 Spreadsheet](working_with_ssheet.md#searching-for-data)
