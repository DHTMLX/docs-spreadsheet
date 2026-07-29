---
sidebar_label: 主题
title: React Spreadsheet 主题
description: "为 DHTMLX React Spreadsheet 应用内置主题或自定义主题。"
---

# React Spreadsheet 主题 {#react-spreadsheet-themes}

React Spreadsheet 内置四个主题，并支持通过 CSS 变量定义自定义主题。使用 `theme` prop 选择内置主题，或应用您自定义的主题。

## 内置主题 {#built-in-themes}

[`SpreadsheetTheme`](react/types.md#spreadsheettheme) 类型定义了四个内置主题：

- `"light"`（默认）
- `"dark"`
- `"contrast-light"`
- `"contrast-dark"`

也可以传入自定义主题名称字符串。

## 应用主题 {#applying-a-theme}

将 `theme` prop 传递给 `ReactSpreadsheet`，指定要使用的主题名称：

~~~tsx
<ReactSpreadsheet sheets={sheets} theme="dark" />
~~~

## 运行时切换 {#switching-at-runtime}

使用 React 状态动态切换主题：

~~~tsx
import { useState } from "react";
import { ReactSpreadsheet, type SheetData, type SpreadsheetTheme } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";

function App() {
    const [sheets] = useState<SheetData[]>([/* ... */]);
    const [theme, setTheme] = useState<SpreadsheetTheme>("light");

    return (
        <>
            <select onChange={(e) => setTheme(e.target.value as SpreadsheetTheme)}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="contrast-light">Contrast Light</option>
                <option value="contrast-dark">Contrast Dark</option>
            </select>

            <ReactSpreadsheet sheets={sheets} theme={theme} />
        </>
    );
}
~~~

## 自定义 CSS 变量 {#custom-css-variables}

DHTMLX Spreadsheet 使用分层 CSS 变量系统。您可以覆盖这些变量，在内置主题之外进一步定制外观。

### 创建自定义主题 {#creating-a-custom-theme}

定义自定义 `data-dhx-theme` 选择器，覆盖所需变量，并将主题名称作为 prop 传入：

~~~css title="src/custom-theme.css"
[data-dhx-theme='corporate'] {
    /* 配色方案 */
    --dhx-h-primary: 220;
    --dhx-s-primary: 60%;
    --dhx-l-primary: 45%;

    /* 工具栏和网格 */
    --dhx-s-toolbar-background: #f0f4f8;
    --dhx-s-grid-header-background: #e2e8f0;

    /* 电子表格区域颜色 */
    --dhx-spreadsheet-range-background-1: #bee3f8;
    --dhx-spreadsheet-range-color-1: #2b6cb0;
}
~~~

~~~tsx
import "./custom-theme.css";

<ReactSpreadsheet sheets={sheets} theme="corporate" />
~~~

## 相关指南 {#related-guides}

- [主题](/themes/) - DHTMLX Spreadsheet 内置主题概览
- [内置主题配置](themes/base_themes_configuration.md) - 配置内置主题
- [自定义主题](themes/custom_theme.md) - 创建自定义主题
