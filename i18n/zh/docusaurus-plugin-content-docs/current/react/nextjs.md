---
sidebar_label: Next.js
title: 在 Next.js 中使用 React Spreadsheet
description: "如何在使用 App Router 的 Next.js 应用中使用 DHTMLX React Spreadsheet。"
---

# 在 Next.js 中使用 React Spreadsheet {#react-spreadsheet-in-nextjs}

DHTMLX Spreadsheet 是一个需要访问浏览器 DOM 的客户端 widget。在使用 App Router 的 Next.js 中，服务器组件是默认类型，因此必须使用 `"use client"` 指令将电子表格包裹在客户端组件中。

:::note
React Spreadsheet 封装器的 JS 输出已包含 `"use client"` 声明，但在导入它的组件文件中仍需自行添加该指令。
:::

## 配置 {#setup}

创建新的 Next.js 项目并安装 React Spreadsheet：

~~~bash
npx create-next-app@latest my-spreadsheet-app
cd my-spreadsheet-app
npm install @dhtmlx/trial-react-spreadsheet
~~~

## 创建客户端组件 {#creating-a-client-component}

为电子表格组件创建一个新文件，并添加 `"use client"` 指令：

~~~tsx title="src/components/SpreadsheetView.tsx"
"use client";

import { useState } from "react";
import { ReactSpreadsheet, type SheetData } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";

const initialSheets: SheetData[] = [
    {
        id: "sheet1",
        name: "Data",
        cells: {
            A1: { value: "Name", css: "bold" },
            B1: { value: "Value", css: "bold" },
            A2: { value: "Item 1" },
            B2: { value: 100 },
        },
    },
];

const styles = {
    bold: { "font-weight": "bold" },
};

export default function SpreadsheetView() {
    const [sheets] = useState<SheetData[]>(initialSheets);

    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <ReactSpreadsheet sheets={sheets} styles={styles} activeSheet="sheet1" />
        </div>
    );
}
~~~

## CSS 导入 {#css-import}

直接在客户端组件中导入 CSS 文件（如上所示），或在根布局中导入：

~~~tsx title="src/app/layout.tsx"
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";
~~~

## 容器尺寸 {#container-sizing}

确保容器具有明确的尺寸。若要实现全页电子表格，请将以下样式添加到全局 CSS 中：

~~~css title="src/app/globals.css"
html,
body {
    height: 100%;
    padding: 0;
    margin: 0;
}
~~~

## 完整示例 {#complete-example}

在服务器页面中使用客户端组件：

~~~tsx title="src/app/page.tsx"
import SpreadsheetView from "@/components/SpreadsheetView";

export default function Home() {
    return <SpreadsheetView />;
}
~~~

## 相关 API 和指南 {#related-api-and-guides}

- [Props 参考](react/props.md) - 所有组件 props 及其类型和默认值
- [Events 参考](react/events.md) - 响应用户操作
- [状态管理基础](react/state/state-management-basics.md) - 在 React 状态中管理电子表格数据
