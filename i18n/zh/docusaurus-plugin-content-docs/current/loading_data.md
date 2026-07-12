---
sidebar_label: 数据加载与导出
title: 加载数据
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解数据加载的相关内容。浏览开发者指南和 API 参考、尝试代码示例和在线演示，并下载免费 30 天试用版 DHTMLX Spreadsheet。
---

# 数据加载与导出 {#data-loading-and-export}

您可以将包含单元格数据和样式的预设数据集填充到 DHTMLX Spreadsheet 中。该组件支持两种数据加载方式：

- 从外部文件加载
- 从本地数据源加载

该组件还支持[将数据导出为 Excel 文件](#exporting-data)。

## 准备数据 {#preparing-data}

DHTMLX Spreadsheet 接受 JSON 格式的数据。

数据可以是一个包含单元格对象的简单数组。如果只需要为一个工作表创建数据集，请使用此方式。

~~~jsx  title="为单个工作表准备数据"
const data = [
    { cell: "A1", value: "Country" },
    { cell: "B1", value: "Product" },
    { cell: "C1", value: "Price" },
    { cell: "D1", value: "Amount" },
    { cell: "E1", value: "Total Price" },

    { cell: "A2", value: "Ecuador" },
    { cell: "B2", value: "Banana" },
    { cell: "C2", value: 6.68, format:"currency" },
    { cell: "D2", value: 430, format:"percent" },
    // "myFormat" is the id of a custom format
    { cell: "E2", value: 2872.4, format:"myFormat" },
    
    // add drop-down lists to cells
    { cell: "A9", value: "Turkey", editor: {type: "select", options: ["Turkey","India","USA","Italy"]} },
    { cell: "B9", value: "", editor: {type: "select", options: "B2:B8" } },

    // more cell objects
];
~~~

或者可以是一个对象，包含需要同时加载到多个工作表的数据。例如：

~~~jsx title="为多个工作表准备数据"
const data = {
    sheets: [
        { 
            name: "sheet 1", 
            id: "sheet_1",
            data: [
                { cell: "A1", value: "Country" },
                { cell: "B1", value: "Product" },
                // more data
            ],
            merged: [
                // merge cells A1 and B1
                { from: { column: 0, row: 0 }, to: { column: 1, row: 0 } },
                // merge cells A2, A3, A4, and A5
                { from: { column: 0, row: 1 }, to: { column: 0, row: 4 } },
            ]
        }, 
        { 
            name: "sheet 2", 
            id: "sheet_2", 
            data: [
                { cell: "A1", value: "Country" },
                { cell: "B1", value: "Product" },
                // more data
            ]
        },
        // more sheet objects
    ]
};
~~~

请在 [API 参考](api/spreadsheet_parse_method.md)中查阅这两种方式的可用属性完整列表。

:::tip
仅在以工作表对象格式准备数据时，才支持加载合并单元格。
:::

### 为单元格设置样式 {#setting-styles-for-cells}

您可能需要在数据集中定义单元格样式。在这种情况下，数据应为一个对象，其中包含*独立属性*，分别描述数据对象和应用于特定单元格的 CSS 类。

使用 `css` 属性为单元格设置 CSS 类。

~~~jsx
const styledData = {
    styles: {
        someclass: {
            background: "#F2F2F2",
            color: "#F57C00"
        }
    },
    data: [
        { cell: "A1", value: "Country" },
        { cell: "B1", value: "Product" },
        { cell: "C1", value: "Price" },
        { cell: "D1", value: "Amount" },
        { cell: "E1", value: "Total Price" },

        { cell: "A2", value: "Ecuador" },
        { cell: "B2", value: "Banana" },
        { cell: "C2", value: 6.68, css: "someclass" },
        { cell: "D2", value: 430, css: "someclass" },
        { cell: "E2", value: 2872.4 }
    ],
}
~~~

:::info
[查看可用于单元格样式设置的属性列表](api/spreadsheet_parse_method.md#list-of-properties)
:::

### 设置单元格的锁定状态 {#setting-the-locked-state-for-a-cell}

如果要在数据集中指定锁定单元格，请使用单元格的 `locked` 属性并将其设置为 `true`：

~~~jsx
const dataset = [
    { cell: "a1", value: "Country", locked: true }, //locks a cell
    { cell: "b1", value: "Product", locked: true },   

    { cell: "a2", value: "Ecuador" },
    { cell: "b2", value: "Banana" },

    { cell: "a3", value: "Belarus" },
    { cell: "b3", value: "Apple" },
    // more cells
];
~~~

请在 [API 参考](api/spreadsheet_parse_method.md#parameters)中查阅可用单元格属性的完整列表。

**相关示例**：[Spreadsheet. 锁定单元格](https://snippet.dhtmlx.com/czeyiuf8?tag=spreadsheet)

### 在单元格中添加链接 {#adding-a-link-into-a-cell}

您可以直接在数据集中为单元格指定链接。为此，请将 `link` 属性设置为一个对象，并提供必要的设置：

- `text` - （可选）链接的文本
- `href` - （必填）定义链接目标的 URL

在数据集中的示例如下：

~~~jsx
const dataset = [
    { cell: "a1", value: "Country"}, //locks a cell
    { cell: "b1", value: "Product"},   

    { cell: "a2", value: "Ecuador"},
    { 
        cell: "b2", 
        value: "Banana", 
        link:{
            href:"http://localhost:8080/"
        } 
    },
    // more cells
];
~~~

:::note
请注意，不应同时使用 `cell` 对象的 `value` 属性和 `link` 对象的 `text` 属性，因为它们是互斥的。
:::

**相关示例**：[Spreadsheet. JSON 导入导出](https://snippet.dhtmlx.com/e3xct53l?tag=spreadsheet)

## 外部数据加载 {#external-data-loading}

### 加载 JSON 数据 {#loading-json-data}

默认情况下，Spreadsheet 接受 JSON 格式的数据。要从外部数据源加载数据，请使用 [](api/spreadsheet_load_method.md) 方法。该方法接受数据文件的 URL 作为参数：

~~~jsx
var spreadsheet = new dhx.Spreadsheet("spreadsheet");
spreadsheet.load("../common/data.json");
~~~

**相关示例**：[Spreadsheet. 加载数据](https://snippet.dhtmlx.com/ih9zmc3e?tag=spreadsheet)


:::info
如果您需要允许用户通过文件资源管理器将 JSON 文件导入到电子表格中，请阅读[加载 JSON 文件](api/spreadsheet_load_method.md#loading-json-files)。
:::

### 加载 CSV 数据 {#loading-csv-data}

您也可以加载 CSV 格式的数据。为此，需要调用 [](api/spreadsheet_load_method.md) 方法，并将格式名称（"csv"）作为第二个参数传入：

~~~jsx
var spreadsheet = new dhx.Spreadsheet("spreadsheet");
spreadsheet.load("../common/data.csv", "csv");
~~~

**相关示例**：[Spreadsheet. 加载 CSV](https://snippet.dhtmlx.com/1f87y71v?tag=spreadsheet)

### 加载 Excel 文件（.xlsx） {#loading-excel-file-xlsx}

您可以将 `.xlsx` 扩展名的 Excel 格式文件加载到电子表格中。用户界面的工具栏和菜单中提供了相应的控件：

- 菜单：文件 -> 导入为.. -> Microsoft Excel(.xlsx)

![DHTMLX Spreadsheet 文件菜单，包含导入 Microsoft Excel XLSX 文件的选项](/img/file_import.png)

- 工具栏：导入 -> Microsoft Excel(.xlsx)

![DHTMLX Spreadsheet 工具栏，包含导入 Microsoft Excel XLSX 文件的按钮](/img/import_xlsx.png)

#### 如何导入数据 {#how-to-import-data}

{{note 请注意，导入功能在 Internet Explorer 中不可用。}}

DHTMLX Spreadsheet 使用基于 WebAssembly 的库 [Excel2Json](https://github.com/dhtmlx/excel2json) 从 Excel 导入数据。要将 Excel 数据加载到 Spreadsheet 中，您需要：

- 安装 **Excel2Json** 库
- 在 Spreadsheet 配置中指定 [](api/spreadsheet_importmodulepath_config.md) 选项，并通过以下两种方式之一设置 *worker.js* 文件的路径：
  - 提供文件在您计算机上的本地路径，例如：`"../libs/excel2json/1.0/worker.js"`
  - 提供 CDN 上文件的链接：`"https://cdn.dhtmlx.com/libs/excel2json/1.0/worker.js"`

~~~jsx
var spreadsheet = new dhx.Spreadsheet(document.body, {          
    importModulePath: "../libs/excel2json/1.0/worker.js"
});
~~~

**相关示例**：[Spreadsheet. 自定义导入导出路径](https://snippet.dhtmlx.com/wykwzfhm)

要从 Excel 文件加载数据，请将扩展名类型字符串（"xlsx"）作为 [](api/spreadsheet_load_method.md) 方法的第二个参数传入：

~~~jsx
// .xlsx only
spreadsheet.load("../common/data.xlsx", "xlsx");
~~~

{{note 请注意，该组件仅支持从 `.xlsx` 扩展名的 Excel 文件导入。}}

**相关示例**：[Spreadsheet. 导入 Xlsx](https://snippet.dhtmlx.com/cqlpy828?tag=spreadsheet)

如有需要，您也可以[将电子表格中的数据导出为 Excel 文件](#exporting-data)。

### 加载后处理代码 {#processing-after-loading-code}

该组件会发起 AJAX 请求，并期望远程 URL 返回有效数据。由于数据加载是异步的，您需要将加载后的代码包裹在 Promise 中：

~~~jsx
spreadsheet.load("/some/data").then(function(){
   // do something
});
~~~

## 从本地数据源加载 {#loading-from-local-source}

要从本地数据源加载数据，请使用 [](api/spreadsheet_parse_method.md) 方法。将[预先定义的数据集](#preparing-data)作为该方法的参数传入：

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet");
spreadsheet.parse(data);
~~~

**相关示例**：[Spreadsheet. 自定义单元格数量](https://snippet.dhtmlx.com/vc3mstsw)

有关如何将多个工作表加载到电子表格中的详细信息，请参阅[使用工作表](working_with_sheets.md#loading-multiple-sheets)文章。

## 保存与恢复状态 {#saving-and-restoring-state}

要保存电子表格的当前状态，请使用 [](api/spreadsheet_serialize_method.md) 方法。该方法将数据转换为 JSON 对象数组，每个 JSON 对象包含一个单元格的配置。

~~~jsx
// saving state of the spreadsheet1
var state = spreadsheet1.serialize();
~~~

然后，您可以将保存在状态数组中的数据解析到另一个电子表格中。例如：

~~~jsx
// creating a new spreadsheet
var spreadsheet2 = new dhx.Spreadsheet(document.body);
// parsing the state of the spreadsheet1 into spreadsheet2
spreadsheet2.parse(state);
~~~

## 导出数据 {#exporting-data}

### 导出为 Excel {#export-into-excel}

DHTMLX Spreadsheet 可以将电子表格中的数据导出为 Excel 文件。用户界面的工具栏和菜单中提供了相应的控件：

- 菜单：文件 -> 下载为.. -> Microsoft Excel(.xlsx)

![DHTMLX Spreadsheet 文件菜单，包含将数据下载为 Microsoft Excel XLSX 的选项](/img/file_export.png)

- 工具栏：导出 -> Microsoft Excel(.xlsx)

![DHTMLX Spreadsheet 工具栏，包含保存为 Microsoft Excel XLSX 的导出按钮](/img/export_xlsx.png)

#### 如何导出数据 {#how-to-export-data}

:::note 
请注意，导出功能在 Internet Explorer 中不可用。
:::

该库使用基于 WebAssembly 的库 [Json2Excel](https://github.com/dhtmlx/json2excel) 将数据导出到 Excel。导出在 **Json2Excel** 库的 *worker.js* 文件中处理（默认链接为 `https://cdn.dhtmlx.com/libs/json2excel/next/worker.js?vx`）。您可以使用公共导出服务器或本地导出服务器。要导出文件，您需要：

- 在 Spreadsheet 配置中指定 [](api/spreadsheet_exportmodulepath_config.md) 选项，并设置 *worker.js* 文件的路径：
    - 如果使用公共导出服务器，则无需指定链接，因为默认使用该服务器
    - 如果使用自己的导出服务器，您需要：
        - 安装 [**Json2Excel**](https://github.com/dhtmlx/json2excel) 库
        - 使用 `"../libs/json2excel/x.x/worker.js?vx"` 指定特定版本（将 `x.x` 替换为您服务器上部署的版本号）

~~~jsx
var spreadsheet = new dhx.Spreadsheet(document.body, {          
    exportModulePath: "../libs/json2excel/x.x/worker.js?vx" // the path to the export module, if a local export server is used
});
~~~

**相关示例**：[Spreadsheet. 自定义导入导出路径](https://snippet.dhtmlx.com/wykwzfhm)

配置好所需资源后，您可以使用 Export 对象的相关 [](api/export_xlsx_method.md) API 方法导出组件数据，如下所示：

~~~jsx
spreadsheet.export.xlsx();
~~~

**相关示例**：[Spreadsheet. 导出 Xlsx](https://snippet.dhtmlx.com/btyo3j8s?tag=spreadsheet)

:::note 
请注意，该组件仅支持导出为 `.xlsx` 扩展名的 Excel 文件。
:::

#### 如何为导出文件设置自定义名称 {#how-to-set-a-custom-name-for-an-exported-file}

默认情况下，导出文件的名称为 "data"。您可以为导出文件提供自定义名称。为此，需要将自定义名称作为 [](api/export_xlsx_method.md) 方法的参数传入，如下所示：

~~~jsx
spreadsheet.export.xlsx("MyData");
~~~

**相关示例**：[Spreadsheet. 导出 Xlsx](https://snippet.dhtmlx.com/btyo3j8s?tag=spreadsheet)

查看[从 Excel 文件向 Spreadsheet 导入数据](#loading-excel-file-xlsx)的步骤。

### 导出为 JSON {#export-into-json}

从 v4.3 起，该库还支持将电子表格中的数据导出为 JSON 文件。请使用 Export 对象的 [json()](api/export_json_method.md) 方法：

~~~jsx
spreadsheet.export.json();
~~~

**相关示例**：[Spreadsheet. 导出/导入 JSON](https://snippet.dhtmlx.com/e3xct53l)
