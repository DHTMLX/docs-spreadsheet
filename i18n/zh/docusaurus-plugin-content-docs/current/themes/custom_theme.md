---
sidebar_label: 自定义主题
title: 自定义主题
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解如何创建自定义主题。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Spreadsheet 的 30 天免费评估版本。
---

# 自定义主题 {#custom-theme}

如果 Spreadsheet 的内置主题不符合您的项目需求，您可以配置自己的颜色主题。
在以下代码片段中查看**自定义浅色**和**自定义深色**主题：

<iframe src="https://snippet.dhtmlx.com/59nt1rcb?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

如需创建自定义主题，请按如下方式覆盖内部 CSS 变量的值：

~~~html
<style>
    [data-dhx-theme='custom-theme-dark'] {
        /* 字体 */
        --dhx-font-color-primary: var(--dhx-color-gray-200);
        --dhx-font-color-secondary: var(--dhx-color-gray-500);
        --dhx-font-color-additional: var(--dhx-color-gray-500);
        --dhx-font-color-disabled: var(--dhx-color-gray-800);
        --dhx-font-color-contrast: var(--dhx-color-black);
        /* 字体结束 */

        /* 边框 */
        --dhx-border-color: #007a99;
        /* 边框结束 */

        /* 配色方案 */
        --dhx-h-primary: 45;
        --dhx-s-primary: 100%;
        --dhx-l-primary: 35%;

        --dhx-h-secondary: 185;
        --dhx-s-secondary: 5%;
        --dhx-l-secondary: 50%;

        --dhx-h-danger: 330;
        --dhx-s-danger: 65%;
        --dhx-l-danger: 50%;

        --dhx-h-success: 175;
        --dhx-s-success: 60%;
        --dhx-l-success: 40%;

        --dhx-h-background: 190;
        --dhx-s-background: 100%;
        --dhx-l-background: 10%;
        /* 配色方案结束 */

        /* 主题颜色 */
        --dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
        --dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 8%));
        --dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 12%));
        /* 主题颜色结束 */

        /* DHTMLX Grid 服务变量*/
        --dhx-s-grid-header-background: #002229;
        --dhx-s-grid-selection-background: var(--dhx-color-gray-100);
        /* DHTMLX Grid 服务变量结束*/

        /* DHTMLX Toolbar 服务变量*/
        --dhx-s-toolbar-background: #002229;
        /* DHTMLX Toolbar 服务变量结束 */

        /* DHTMLX Spreadsheet 服务变量 */
        --dhx-spreadsheet-range-background-1: #00815a;
        --dhx-spreadsheet-range-background-2: #bfc000;
        --dhx-spreadsheet-range-background-3: #c55933;
        --dhx-spreadsheet-range-background-4: #0cc1d6;
        --dhx-spreadsheet-range-background-5: #0080a3;
        --dhx-spreadsheet-range-background-6: #529a0a;
        --dhx-spreadsheet-range-background-7: #6d767b;
        --dhx-spreadsheet-range-background-8: #ba38e7;

        --dhx-spreadsheet-range-color-1: #8be3c9;
        --dhx-spreadsheet-range-color-2: #f6f740;
        --dhx-spreadsheet-range-color-3: #f7b69e;
        --dhx-spreadsheet-range-color-4: #e0fcff;
        --dhx-spreadsheet-range-color-5: #8fe9ff;
        --dhx-spreadsheet-range-color-6: #d8ffa6;
        --dhx-spreadsheet-range-color-7: #e4e4e4;
        --dhx-spreadsheet-range-color-8: #ecb6ff;
        /* DHTMLX Spreadsheet 服务变量结束 */
    }
</style>

<script>
    const spreadsheet = new dhx.Spreadsheet("spreadsheet",{});
    
    dhx.setTheme("custom-theme-dark");
</script>
~~~

**相关示例：** [Spreadsheet. 自定义主题（皮肤）](https://snippet.dhtmlx.com/59nt1rcb?mode=wide)
