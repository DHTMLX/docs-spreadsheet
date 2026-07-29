---
sidebar_label: 初始化
title: 初始化
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解初始化的相关内容。浏览开发者指南和 API 参考、尝试代码示例和在线演示，并下载免费 30 天试用版 DHTMLX Spreadsheet。
---

# 初始化 {#initialization}

本指南介绍如何在页面上创建 DHTMLX Spreadsheet，并将完整功能的工作表添加到您的应用程序中。请按照以下步骤获取一个可用的组件：

1. [在页面上引入 DHTMLX Spreadsheet 源文件](#including-source-files)。
2. [为 DHTMLX Spreadsheet 创建容器](#creating-container)。
3. [使用对象构造函数初始化 DHTMLX Spreadsheet](#initializing-dhtmlx-spreadsheet)。

<iframe src="https://snippet.dhtmlx.com/ihtkdcoc?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## 引入源文件 {#including-source-files}

[下载安装包](https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/download.shtml)并将其解压到项目的某个文件夹中。

要创建 DHTMLX Spreadsheet，您需要在页面上引入 2 个源文件：

- spreadsheet.js
- spreadsheet.css

请确保正确设置这些文件的相对路径：

~~~html title="index.html"
<script type="text/javascript" src="codebase/spreadsheet.js"></script>  
<link rel="stylesheet" href="codebase/spreadsheet.css">
~~~

Spreadsheet 安装包的结构如下：

- *sources* - 库的源代码文件；便于阅读，主要用于调试；
- *codebase* - 库的混淆代码文件；体积更小，用于生产环境。**当应用程序准备就绪后，请在应用中引入这些文件**；
- *samples* - 代码示例；
- *docs* - 组件的完整文档。

## 创建容器 {#creating-container}

为 Spreadsheet 添加一个容器并为其设置 id，例如 "spreadsheet"：

~~~html title="index.html"
<div id="spreadsheet"></div>
~~~

## 初始化 DHTMLX Spreadsheet {#initializing-dhtmlx-spreadsheet}

使用 `dhx.Spreadsheet` 对象构造函数初始化 DHTMLX Spreadsheet。构造函数接受两个参数：

- Spreadsheet 的 HTML 容器，
- 包含配置属性的对象。[请参阅下方的完整列表](#configuration-properties)。

~~~jsx title="index.js"
// creating DHTMLX Spreadsheet
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config options
});
~~~

### 配置属性 {#configuration-properties}

请参阅可在 Spreadsheet 配置对象中指定的[属性](api/api_overview.md#spreadsheet-properties)完整列表。

您可以在初始化时将配置选项作为构造函数的第二个参数进行设置：

<iframe src="https://snippet.dhtmlx.com/vc3mstsw?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>
