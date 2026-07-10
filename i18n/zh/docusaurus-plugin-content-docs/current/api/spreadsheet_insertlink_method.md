---
sidebar_label: insertLink()
title: insertLink 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 insertLink 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# insertLink()

### 描述 {#description}

@short: 在单元格中插入或移除超链接

### 用法 {#usage}

~~~jsx
insertLink( 
    cell: string,
    link? : {
        text?: string, 
        href: string
    }
): void;
~~~

### 参数 {#parameters}

- `cell` - （必填）单元格的 id
- `link` - （可选）链接配置对象：
    - `text` - （可选）要为超链接显示的文本
    - `href` - （必填）超链接指向页面的 URL

:::info
若要移除超链接但保留文本，请在调用该方法时不传入 `link` 参数。
:::

### 示例 {#example}

~~~jsx {5-7,10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 在 "A2" 单元格中插入链接
spreadsheet.insertLink("A2", {
    text:"DHX Spreadsheet", href: "https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/"
});

// 从 "A2" 单元格中移除链接
spreadsheet.insertLink("A2");
~~~

**更新日志：** 在 v5.0 中新增

**相关文章：** [使用 Spreadsheet](working_with_cells.md#inserting-a-hyperlink-into-a-cell)
