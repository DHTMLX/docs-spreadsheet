---
sidebar_label: 内置主题
title: 内置主题
description: 您可以在 DHTMLX JavaScript Spreadsheet 库的文档中了解内置主题。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX Spreadsheet 的 30 天免费评估版本。
---

# 内置主题 {#built-in-themes}

DHTMLX Spreadsheet 库提供 4 个预定义主题：

- [浅色主题](#light-theme-default)（"light"）- 默认使用
- [深色主题](#dark-theme)（"dark"）
- [浅色高对比度主题](#light-high-contrast-theme)（"contrast-light"）
- [深色高对比度主题](#dark-high-contrast-theme)（"contrast-dark"）

Spreadsheet 主题根据国际标准开发。高对比度主题有助于视力障碍用户使用。更多详情，请阅读[无障碍支持](https://docs.dhtmlx.com/suite/common_features/accessibility_support/)文章。

您可以在下面的示例中试用所有主题：

<iframe src="https://snippet.dhtmlx.com/t6rspqai?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## 浅色主题（默认） {#light-theme-default}

![DHTMLX Spreadsheet 默认浅色主题，白色背景配深色文字](/img/themes/default_theme.png)

默认 `"light"` 主题使用以下 CSS 变量进行配置：

~~~css
:root, [data-dhx-theme] {
    /* 基础颜色 */
    --dhx-color-white: #fff;
    --dhx-color-gray-100: #e6e6e6;
    --dhx-color-gray-200: #ccc;
    --dhx-color-gray-300: #b3b3b3;
    --dhx-color-gray-400: #999;
    --dhx-color-gray-500: #808080;
    --dhx-color-gray-600: #666;
    --dhx-color-gray-700: #4d4d4d;
    --dhx-color-gray-800: #333;
    --dhx-color-gray-900: #1a1a1a;
    --dhx-color-black: #000;
    /* 基础颜色结束 */

    /* 字体 */
    --dhx-font-family: "Roboto", Arial, Tahoma, Verdana, sans-serif;

    --dhx-font-weight-regular: 400; 
    --dhx-font-weight-medium: 500; 
    --dhx-font-weight-bold: 700;

    --dhx-font-size-small: 12px;
    --dhx-font-size-normal: 14px;
    --dhx-font-size-large: 16px;

    --dhx-line-height-small: 16px;
    --dhx-line-height-normal: 20px;
    --dhx-line-height-large: 24px;

    --dhx-font-color-primary: rgba(0, 0, 0, .7);
    --dhx-font-color-secondary: rgba(0, 0, 0, .5);
    --dhx-font-color-additional: rgba(0, 0, 0, .3);
    --dhx-font-color-disabled: rgba(0, 0, 0, .3);

    --dhx-font-color-contrast: var(--dhx-color-white);
    --dhx-font-color-contrast-disabled: var(--dhx-color-white);
    /* 字体结束 */

    /* 图标 */
    --dhx-icon-size-small: 16px;
    --dhx-icon-size-normal: 20px;
    --dhx-icon-size-large: 24px;
    /* 图标结束 */

    /* 边框 */
    --dhx-border-width: 1px;
    --dhx-border-radius: 2px;
    --dhx-border-color: rgba(0, 0, 0, .1);
    --dhx-border-color-focused: rgba(0, 0, 0, .3);
    --dhx-border: var(--dhx-border-width) solid var(--dhx-border-color);
    /* 边框结束 */

    /* 边框阴影 */
    --dhx-border-shadow-small: 0 2px 4px rgba(0, 0, 0, .15);
    --dhx-border-shadow-normal: 0 2px 5px rgba(0, 0, 0, .3);
    --dhx-border-shadow-large: 0px 1px 6px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1);

    --dhx-shadow-input-size: inset 0px 0px 0px var(--dhx-border-width);
    /* 边框阴影结束 */

    /* 过渡动画 */
    --dhx-transition-time: 0.2s;
    --dhx-transition-in: ease-in;
    --dhx-transition-out: ease-out;
    /* 过渡动画结束 */

    /* z-index */
    --dhx-z-index-up: 1;
    --dhx-z-index-force-up: 10;
    --dhx-z-index-overlay: 999;
    --dhx-z-index-overlay-total: 10000000;
    /* z-index 结束 */

    /* 仅服务配色方案 */
    --dhx-l-contrast-offset: 0%; /* 高对比度主题亮度偏移量 */
    --dhx-l-h-offset: 10%; /* 悬停状态亮度偏移量 */
    --dhx-s-d-offset: 30%; /* 禁用状态饱和度偏移量 */
    --dhx-l-d: 70%; /* 禁用状态亮度值 */
    --dhx-a-l-h: .15; /* 浅色悬停透明度值 */
    --dhx-a-l-a: .3; /* 浅色激活透明度值 */
    /* 仅服务配色方案结束 */

    /* 配色方案 */
    --dhx-h-primary: 200;
    --dhx-s-primary: 98%;
    --dhx-l-primary: 40%;

    --dhx-h-secondary: 0;
    --dhx-s-secondary: 0%;
    --dhx-l-secondary: 30%;

    --dhx-h-danger: 0;
    --dhx-s-danger: 100%;
    --dhx-l-danger: 60%;

    --dhx-h-success: 154;
    --dhx-s-success: 89%;
    --dhx-l-success: 37%;

    --dhx-h-background: 0;
    --dhx-s-background: 0%;
    --dhx-l-background: 100%;
    --dhx-a-background: 0.5;
    /* 配色方案结束 */

    /* 主题颜色 */
    --dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
    --dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) - 3%));
    --dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) - 10%));
    --dhx-background-overlay: hsla(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) * -1), var(--dhx-a-background));
    --dhx-background-overlay-light: rgba(255, 255, 255, .5);

    --dhx-tooltip-background-dark: var(--dhx-color-gray-800);
    --dhx-tooltip-background-light: var(--dhx-color-white);

    --dhx-color-focused: hsl(calc(var(--dhx-h-primary) + 10), var(--dhx-s-primary), var(--dhx-l-primary));

    --dhx-color-primary: hsl(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) - var(--dhx-l-contrast-offset)));
    --dhx-color-primary-hover: hsl(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
    --dhx-color-primary-active: var(--dhx-color-primary);
    --dhx-color-primary-disabled: hsl(var(--dhx-h-primary), calc(var(--dhx-s-primary) - var(--dhx-s-d-offset)), var(--dhx-l-d));
    --dhx-color-primary-light-hover: hsla(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
    --dhx-color-primary-light-active: hsla(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));

    --dhx-color-secondary: hsl(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) - var(--dhx-l-contrast-offset)));
    --dhx-color-secondary-hover: hsl(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
    --dhx-color-secondary-active: var(--dhx-color-secondary);
    --dhx-color-secondary-disabled: hsl(var(--dhx-h-secondary), calc(var(--dhx-s-secondary) - var(--dhx-s-d-offset)), var(--dhx-l-d));
    --dhx-color-secondary-light-hover: hsla(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
    --dhx-color-secondary-light-active: hsla(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));

    --dhx-color-danger: hsl(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) - var(--dhx-l-contrast-offset)));
    --dhx-color-danger-hover: hsl(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
    --dhx-color-danger-active: var(--dhx-color-danger);
    --dhx-color-danger-disabled: hsl(var(--dhx-h-danger), calc(var(--dhx-s-danger) - var(--dhx-s-d-offset)), var(--dhx-l-d));
    --dhx-color-danger-light-hover: hsla(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
    --dhx-color-danger-light-active: hsla(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));

    --dhx-color-success: hsl(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) - var(--dhx-l-contrast-offset)));
    --dhx-color-success-hover: hsl(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
    --dhx-color-success-active: var(--dhx-color-success);
    --dhx-color-success-disabled: hsl(var(--dhx-h-success), calc(var(--dhx-s-success) - var(--dhx-s-d-offset)), var(--dhx-l-d));
    --dhx-color-success-light-hover: hsla(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
    --dhx-color-success-light-active: hsla(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));
    /* 主题颜色结束 */

    /* DHTMLX Toolbar 服务变量*/
    --dhx-s-toolbar-background: var(--dhx-background-primary);
    --dhx-s-toolbar-button-background-hover: rgba(0, 0, 0, .07);
    --dhx-s-toolbar-button-background-active: rgba(0, 0, 0, .15);
    /* DHTMLX Toolbar 服务变量结束 */

    /* DHTMLX Grid 服务变量*/
    --dhx-s-grid-header-background: var(--dhx-background-secondary);
    --dhx-s-grid-selection-background: var(--dhx-color-gray-700);
    /* DHTMLX Grid 服务变量结束*/

    /* DHTMLX Calendar 服务变量*/
    --dhx-s-calendar-muffled: .6;
    /* DHTMLX Calendar 服务变量结束*/

    /* DHTMLX Slider 服务变量*/
    --dhx-s-tick-font-size: calc(var(--dhx-font-size-small) / 1.2);
    /* DHTMLX Slider 服务变量结束*/
}
~~~

## 浅色高对比度主题 {#light-high-contrast-theme}

![DHTMLX Spreadsheet 浅色高对比度主题，字体更大、边框更粗，适合无障碍访问](/img/themes/light_high_contrast_theme.png)

`"contrast-light"` 主题使用[根 CSS 变量](#light-theme-default)以及以下变量进行配置：

~~~css
[data-dhx-theme='contrast-light'] {
    /* 字体 */
    --dhx-font-size-normal: 16px;
    --dhx-font-size-small: var(--dhx-font-size-normal);

    --dhx-font-color-secondary: rgba(0, 0, 0, .66);
    --dhx-font-color-additional: var(--dhx-font-color-secondary);
    /* 字体结束 */

    /* 边框 */
    --dhx-border-color: rgba(0, 0, 0, .4);
    /* 边框结束 */

    /* 配色方案 */
    --dhx-l-contrast-offset: 14%;
    /* 配色方案结束 */

    /* DHTMLX Toolbar 服务变量*/
    --dhx-s-toolbar-background: var(--dhx-background-primary);
    --dhx-s-toolbar-button-background-hover: rgba(0, 0, 0, .07);
    --dhx-s-toolbar-button-background-active: rgba(0, 0, 0, .15);
    /* DHTMLX Toolbar 服务变量结束 */

    /* DHTMLX Grid 服务变量*/
    --dhx-s-grid-header-background: var(--dhx-background-secondary);
    --dhx-s-grid-selection-background: var(--dhx-color-gray-700);
    /* DHTMLX Grid 服务变量结束*/
    
    /* DHTMLX Calendar 服务变量*/
    --dhx-s-calendar-muffled: .8;
    /* DHTMLX Calendar 服务变量结束*/

    /* DHTMLX Slider 服务变量*/
    --dhx-s-tick-font-size: var(--dhx-font-size-small);
    /* DHTMLX Slider 服务变量结束*/
}
~~~

## 深色主题 {#dark-theme}

![DHTMLX Spreadsheet 深色主题，深色背景配浅色文字，适合低光环境使用](/img/themes/dark_theme.png)

`"dark"` 主题使用[根 CSS 变量](#light-theme-default)以及以下变量进行配置：

~~~css
[data-dhx-theme='dark'] {
    /* 字体 */
    --dhx-font-color-primary: var(--dhx-color-white);
    --dhx-font-color-secondary: rgba(255, 255, 255, .7);
    --dhx-font-color-additional: rgba(255, 255, 255, .5);
    --dhx-font-color-disabled: rgba(255, 255, 255, .5);
    --dhx-font-color-contrast: var(--dhx-color-white);
    --dhx-font-color-contrast-disabled: var(--dhx-font-color-disabled);
    /* 字体结束 */

    /* 边框 */
    --dhx-border-color: rgba(255, 255, 255, 0.3);
    --dhx-border-color-focused: rgba(255, 255, 255, 0.5);
    /* 边框结束 */

    /* 配色方案 */
    --dhx-l-secondary: 60%; /* 高对比度主题亮度偏移量 */

    --dhx-h-background: 226;
    --dhx-s-background: 12%;
    --dhx-l-background: 20%;
    /* 配色方案结束 */

    /* 主题颜色 */
    --dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
    --dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 8%));
    --dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 12%));
    /* 主题颜色结束 */

    /* DHTMLX Toolbar 服务变量*/
    --dhx-s-toolbar-background: var(--dhx-color-black);
    --dhx-s-toolbar-button-background-hover: rgba(255, 255, 255, .07);
    --dhx-s-toolbar-button-background-active: rgba(255, 255, 255, .15);
    /* DHTMLX Toolbar 服务变量结束 */

    /* DHTMLX Grid 服务变量*/
    --dhx-s-grid-header-background: #212329;
    --dhx-s-grid-selection-background: var(--dhx-color-gray-100);
    /* DHTMLX Grid 服务变量结束*/
    
    /* DHTMLX Calendar 服务变量*/
    --dhx-s-calendar-muffled: .6;
    /* DHTMLX Calendar 服务变量结束*/

    /* DHTMLX Slider 服务变量*/
    --dhx-s-tick-font-size: calc(var(--dhx-font-size-small) / 1.2);
    /* DHTMLX Slider 服务变量结束*/
}
~~~ 

## 深色高对比度主题 {#dark-high-contrast-theme}

![DHTMLX Spreadsheet 深色高对比度主题，增强文字对比度，适合无障碍访问](/img/themes/dark_contrast.png)

`"contrast-dark"` 主题使用[根 CSS 变量](#light-theme-default)以及以下变量进行配置：

~~~css
[data-dhx-theme='contrast-dark'] {
    /* 字体 */
    --dhx-font-size-normal: 16px;
    --dhx-font-size-small: var(--dhx-font-size-normal);

    --dhx-font-color-primary: var(--dhx-color-white);
    --dhx-font-color-secondary: rgba(255, 255, 255, 0.86);
    --dhx-font-color-additional: var(--dhx-font-color-secondary);
    --dhx-font-color-disabled: rgba(255, 255, 255, .5);
    --dhx-font-color-contrast: var(--dhx-color-black);
    --dhx-font-color-contrast-disabled: var(--dhx-font-color-disabled);
    /* 字体结束 */

    /* 边框 */
    --dhx-border-color: rgba(255, 255, 255, 0.5);
    --dhx-border-color-focused: rgba(255, 255, 255, 0.7);
    /* 边框结束 */

    /* 配色方案 */
    --dhx-l-contrast-offset: -12%; /* 高对比度主题亮度偏移量 */

    --dhx-l-secondary: 60%;

    --dhx-h-background: 226;
    --dhx-s-background: 12%;
    --dhx-l-background: 20%;
    /* 配色方案结束 */

    /* 主题颜色 */
    --dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
    --dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 8%));
    --dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 12%));
    /* 主题颜色结束 */

    /* DHTMLX Toolbar 服务变量*/
    --dhx-s-toolbar-background: var(--dhx-color-black);
    --dhx-s-toolbar-button-background-hover: rgba(255, 255, 255, .07);
    --dhx-s-toolbar-button-background-active: rgba(255, 255, 255, .15);
    /* DHTMLX Toolbar 服务变量结束 */

    /* DHTMLX Grid 服务变量*/
    --dhx-s-grid-header-background: #212329;
    --dhx-s-grid-selection-background: var(--dhx-color-gray-100);
    /* DHTMLX Grid 服务变量结束*/

    /* DHTMLX Calendar 服务变量*/
    --dhx-s-calendar-muffled: .8;
    /* DHTMLX Calendar 服务变量结束*/

    /* DHTMLX Slider 服务变量*/
    --dhx-s-tick-font-size: var(--dhx-font-size-small);
    /* DHTMLX Slider 服务变量结束*/
}
~~~

## Spreadsheet 专属样式 {#spreadsheet-specific-styles}

Spreadsheet 组件专用变量列表如下：

- 适用于**默认浅色**主题和**浅色高对比度**皮肤：

~~~css
:root, [data-dhx-theme],[data-dhx-theme='contrast-light'] {
    
    --dhx-spreadsheet-range-background-1: #8be3c9;
    --dhx-spreadsheet-range-background-2: #f6f740;
    --dhx-spreadsheet-range-background-3: #f7b69e;
    --dhx-spreadsheet-range-background-4: #e0fcff;
    --dhx-spreadsheet-range-background-5: #8fe9ff;
    --dhx-spreadsheet-range-background-6: #d8ffa6;
    --dhx-spreadsheet-range-background-7: #e4e4e4;
    --dhx-spreadsheet-range-background-8: #ecb6ff;

    --dhx-spreadsheet-range-color-1: #00815a;
    --dhx-spreadsheet-range-color-2: #bfc000;
    --dhx-spreadsheet-range-color-3: #c55933;
    --dhx-spreadsheet-range-color-4: #0cc1d6;
    --dhx-spreadsheet-range-color-5: #0080a3;
    --dhx-spreadsheet-range-color-6: #529a0a;
    --dhx-spreadsheet-range-color-7: #6d767b;
    --dhx-spreadsheet-range-color-8: #ba38e7;

}
~~~

- 适用于**深色**和**深色高对比度**主题：

~~~css
[data-dhx-theme='contrast-dark'],
[data-dhx-theme='dark'] {
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

}
~~~

## 设置主题 {#setting-themes}

若要设置所需主题（无论是内置 Spreadsheet 主题还是[自定义](themes/custom_theme.md)主题），请使用以下任一方式：

### 使用 `data-dhx-theme` 属性 {#using-the-data-dhx-theme-attribute}

您可以从以下方式中选择：

- 为目标容器设置 `data-dhx-theme` 属性：

~~~html title="index.html"
<!-- 组件容器 -->
<div data-dhx-theme="dark" style="height: 100%" id="spreadsheet"></div>
~~~

- 为某个 HTML 元素设置 `data-dhx-theme` 属性，例如为 `documentElement` 设置：

~~~jsx title="index.js"
document.documentElement.setAttribute("data-dhx-theme", "dark");
~~~

### 使用 `dhx.setTheme()` 方法 {#using-the-dhxsettheme-method}

`dhx.setTheme()` 方法接受以下参数：

- `theme: string` -（必填）主题名称。可以是：
    - Spreadsheet 主题名称：`"light" | "contrast-light" | "dark" | "contrast-dark"`
    - [自定义主题](themes/custom_theme.md)的名称
    - `"light"` - 默认值
- `container: string | HTMLElement` -（可选）要应用主题的容器。可以是：
    - 一个 HTMLElement
    - 包含容器 ID 或 Layout 单元格 ID 的字符串值
    - `document.documentElement` - 默认值

以下示例展示了如何使用 `dhx.setTheme()` 方法：

- 为 body 或容器设置主题

~~~html 
<div id="container"></div>
<div>Other content</div>

<script>
    new dhx.Spreadsheet("container");

    dhx.setTheme("dark"); // 将 "dark" 主题应用到 body
    // 或
    // 将 "dark" 主题应用到 id 为 "container" 的容器
    dhx.setTheme("dark", "container"); 
</script>
~~~

- 通过 HTMLElement 为指定容器设置主题

~~~html 
<div id="container-1"></div>
<div>Other content</div>

<script>
    new dhx.Spreadsheet("container-1");
    
    const container = document.getElementById("container-1");
    // 将 "dark" 主题应用到通过 HTMLElement 指定的容器
    dhx.setTheme("dark", container); 
</script>
~~~

**相关示例：**

- [Spreadsheet. 浅色、深色、浅色高对比度和深色高对比度主题（皮肤）](https://snippet.dhtmlx.com/t6rspqai?tag=spreadsheet)
- [Spreadsheet. 自定义主题（皮肤）](https://snippet.dhtmlx.com/59nt1rcb?tag=spreadsheet)
