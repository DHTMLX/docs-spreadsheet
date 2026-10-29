---
sidebar_label: json()
title: json 导出方法
description: 使用 export.json() 方法将 DHTMLX Spreadsheet 的数据导出为 JSON 文件。
---

# json()

### 描述 {#description}

@short: 将电子表格中的数据导出为 JSON 文件

### 用法 {#usage}

~~~jsx
json(): void;
~~~

### 示例 {#example}

~~~jsx {7}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // config parameters
});
spreadsheet.parse(data);

// 将电子表格中的数据导出为 JSON 文件
spreadsheet.export.json();
~~~

**更新日志：** 在 v4.3 中新增

**相关文章：** [数据加载与导出](loading_data.md)

**相关示例：** [Spreadsheet. 导出/导入 JSON](https://snippet.dhtmlx.com/e3xct53l)
