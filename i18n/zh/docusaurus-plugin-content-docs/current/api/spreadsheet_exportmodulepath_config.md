---
sidebar_label: exportModulePath
title: exportModulePath 配置
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 exportModulePath 配置。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# exportModulePath

### 描述 {#description}

@short: 可选。设置导出模块的路径

### 用法 {#usage}

~~~jsx
exportModulePath?: string;
~~~

### 示例 {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    exportModulePath: "../libs/json2excel/x.x/worker.js?vx", // 导出模块 `worker.js` 文件的本地路径
    // 其他配置参数
});
~~~

### 详细说明 {#details}

:::note 
DHTMLX Spreadsheet 使用基于 WebAssembly 的库 [JSON2Excel](https://github.com/dhtmlx/json2excel) 将数据导出为 Excel 格式。
:::

要导出文件，您需要通过 `exportModulePath` 选项指定 [Json2Excel](https://github.com/dhtmlx/json2excel) 库中 *worker.js* 文件的路径（导出处理在该文件中进行）。默认使用 `https://cdn.dhtmlx.com/libs/json2excel/next/worker.js?vx`。
- 如果您使用公共导出服务器，则无需指定链接，因为默认已使用该地址
- 如果您使用自己的导出服务器，则需要：
  - 安装 [**Json2Excel**](https://github.com/dhtmlx/json2excel) 库
  - 对特定版本使用 `"../libs/json2excel/x.x/worker.js?vx"`（将 `x.x` 替换为您服务器上部署的版本号）


**相关文章：** [数据加载与导出](loading_data.md#exporting-data)

**相关示例：** [Spreadsheet. 自定义导入导出路径](https://snippet.dhtmlx.com/wykwzfhm)
