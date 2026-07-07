---
sidebar_label: load()
title: load 方法
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 load 方法。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# load()

### 描述 {#description}

@short: 从外部文件加载数据

### 用法 {#usage}

~~~jsx
load(url: string, type?: string): promise;
~~~

### 参数 {#parameters}

- `url` - （必填）外部文件的 URL
- `type` - （可选）要加载的数据类型："json"（默认）、"csv"、"xlsx"

### 返回值 {#returns}

该方法返回一个数据加载的 Promise 对象

### 示例 {#example}

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// 以 JSON 格式加载数据（默认）
spreadsheet.load("../common/data.json");

// 以 CSV 格式加载数据
spreadsheet.load("../common/data.csv", "csv");

// 以 Excel 格式加载数据（仅支持 .xlsx）
spreadsheet.load("../common/data.xlsx", "xlsx");
~~~

**相关示例：**
- [Spreadsheet. 加载数据](https://snippet.dhtmlx.com/ih9zmc3e)

- [Spreadsheet. CSV 加载](https://snippet.dhtmlx.com/1f87y71v)

- [Spreadsheet. 导入 Xlsx](https://snippet.dhtmlx.com/cqlpy828)

:::info
组件发出 AJAX 请求，并期望远程 URL 返回有效数据。

数据加载是异步的，因此需要将加载完成后的代码包装在 Promise 中：

~~~jsx
spreadsheet.load("../some/data.json").then(function(){
    spreadsheet.selection.add(123);
});
~~~
:::

### 加载 Excel 数据 {#loading-excel-data}

:::note
请注意，该组件仅支持从扩展名为 `.xlsx` 的 Excel 文件导入。
:::

DHTMLX Spreadsheet 使用基于 WebAssembly 的库 [Excel2Json](https://github.com/dhtmlx/excel2json) 从 Excel 导入数据。[查看详情](loading_data.md#loading-excel-file-xlsx)。

### 加载 JSON 文件 {#loading-json-files}

您可以让用户通过文件浏览器将 JSON 文件加载到电子表格中。操作步骤如下：

- 指定一个按钮，用于打开可选择 ".json" 文件的文件浏览器：

~~~html
<section class="dhx_sample-controls">
    <button class="dhx_sample-btn dhx_sample-btn--flat" onclick="json()">Import json</button>
</section>
~~~


- 以两个参数调用 `load()` 方法：空字符串作为 URL，以及要加载的数据类型（"json"）：

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    menu: true,
});

spreadsheet.parse(dataset);

function json() {
    spreadsheet.load("", "json"); // 从 .json 文件加载数据
}
~~~

查看[示例](https://snippet.dhtmlx.com/e3xct53l)。

**变更日志：** 通过文件浏览器加载 JSON 文件的功能已在 v4.3 中新增

**相关文章：** [数据加载与导出](loading_data.md)
