---
sidebar_label: xlsx()
title: xlsx 导出方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 xlsx 导出方法。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载免费 30 天试用版的 DHTMLX Spreadsheet。
---

# xlsx()

### 描述 {#description}

@short: 将电子表格中的数据导出为 Excel (.xlsx) 文件

### 用法 {#usage}

~~~jsx
xlsx(name:string): void;
~~~

### 参数 {#parameters}

- `name` - （可选）导出的 .xlsx 文件名称

### 示例 {#example}

~~~jsx {7,10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

// 将电子表格中的数据导出为 Excel 文件
spreadsheet.export.xlsx();

// 将电子表格中的数据导出为带有自定义名称的 Excel 文件
spreadsheet.export.xlsx("MyData");
~~~

:::note 
请注意，该组件仅支持导出扩展名为 `.xlsx` 的 Excel 文件。
:::

除单元格值外，导出的文件还会保留单元格样式、数字格式、合并单元格、固定的列和行、链接、下拉编辑器以及单元格的锁定状态。[将该文件重新导入 Spreadsheet](loading_data.md#loading-excel-file-xlsx) 时，这些内容都会被恢复。

:::info
DHTMLX Spreadsheet 使用基于 WebAssembly 的库 [Json2Excel](https://github.com/dhtmlx/json2excel) 将数据导出为 Excel。[查看详情](loading_data.md#exporting-data)。
:::

**相关文章：** [数据加载与导出](loading_data.md)

**相关示例：** [Spreadsheet. 导出 Xlsx](https://snippet.dhtmlx.com/btyo3j8s)
