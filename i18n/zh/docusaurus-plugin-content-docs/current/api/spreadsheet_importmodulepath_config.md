---
sidebar_label: importModulePath
title: importModulePath 配置项
description: 使用 importModulePath 属性设置 Excel2json 库的 worker.js 文件路径，DHTMLX Spreadsheet 使用该库导入 Excel 文件。
---

# importModulePath

### 描述 {#description}

@short: 可选。设置导入模块的路径

### 用法 {#usage}

~~~jsx
importModulePath?: string;
~~~

### 示例 {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    importModulePath: "../libs/excel2json/1.0/worker.js",
    // 其他配置参数
});
~~~

### 详情 {#details}

:::note 
DHTMLX Spreadsheet 使用基于 WebAssembly 的库 [Excel2json](https://github.com/DHTMLX/excel2json) 从 Excel 导入数据。
:::

要导入文件，您需要：

- 安装 **Excel2json** 库
- 通过 `importModulePath` 选项以以下两种方式之一设置 *worker.js* 文件的路径：
  - 提供文件在本地计算机上的路径，例如：`"../libs/excel2json/1.0/worker.js"`
  - 提供 CDN 上文件的链接：`"https://cdn.dhtmlx.com/libs/excel2json/1.0/worker.js"`

默认情况下使用 CDN 链接。

**相关文章：** [数据加载与导出](loading_data.md#loading-excel-file-xlsx)

**相关示例：** [Spreadsheet. 自定义导入导出路径](https://snippet.dhtmlx.com/wykwzfhm)
