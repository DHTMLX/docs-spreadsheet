---
sidebar_label: readonly
title: readonly 配置项
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解 readonly 配置项。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# readonly

### 描述 {#description}

@short: 可选。启用/禁用只读模式

### 用法 {#usage}

~~~jsx
readonly?: boolean;
~~~

### 默认配置 {#default-config}

~~~jsx
readonly: false
~~~

### 示例 {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
  readonly: true,
  // 其他配置参数
});
~~~

**相关文章：**
- [配置](configuration.md#read-only-mode)
- [自定义](customization.md#custom-read-only-mode)

**相关示例：** [Spreadsheet. 只读模式](https://snippet.dhtmlx.com/2w959gx2)


