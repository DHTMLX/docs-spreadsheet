---
sidebar_label: search()
title: search 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 search 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# search()

### 描述 {#description}

@short: 根据指定参数搜索单元格

该方法还可以在电子表格右上角打开搜索框，并高亮显示匹配结果

### 用法 {#usage}

~~~jsx
search( 
    text?: string,
    openSearch?: boolean, 
    sheetId?: string | number
): string[];
~~~

### 参数 {#parameters}

- `text` - （可选）要搜索的值
- `openSearch` - （可选）若为 `true`，则打开搜索框并高亮显示匹配结果所在的单元格；默认为 `false`
- `sheetId` - （可选）工作表的 ID。默认情况下，该方法在当前活动工作表中搜索单元格

### 返回值 {#returns}

该方法返回一个包含所找到单元格 ID 的数组

### 示例 {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 返回匹配结果的单元格 ID，打开搜索栏并高亮显示找到的单元格
spreadsheet.search("feb", true, "Income"); // -> ['C1']
~~~

**更新日志：** 在 v5.0 中新增

**相关文章：** [使用电子表格](working_with_ssheet.md#searching-for-data)
