---
sidebar_label: 快速开始
title: React Spreadsheet 快速开始
description: "逐步指南：从零开始渲染您的第一个 DHTMLX React Spreadsheet 组件。"
---

# React Spreadsheet 快速开始 {#quick-start-with-react-spreadsheet}

本教程将引导您从零开始创建一个包含 DHTMLX Spreadsheet 的 React 应用程序。

## 创建新项目 {#create-a-new-project}

~~~bash
npm create vite@latest my-spreadsheet-app -- --template react-ts
cd my-spreadsheet-app
~~~

## 安装 React Spreadsheet {#install-react-spreadsheet}

~~~bash
npm install @dhtmlx/trial-react-spreadsheet
~~~

有关其他软件包变体，请参阅[安装](react/installation.md)。

## 创建示例数据 {#create-demo-data}

创建文件 `src/data.ts`，包含示例电子表格数据：

~~~ts title="src/data.ts"
import type { SheetData } from "@dhtmlx/trial-react-spreadsheet";

export const sheets: SheetData[] = [
    {
        id: "sheet1",
        name: "Sales",
        cells: {
            A1: { value: "Product", css: "bold" },
            B1: { value: "Revenue", css: "bold", format: "currency" },
            A2: { value: "Widget" },
            B2: { value: 15000, format: "currency" },
            A3: { value: "Gadget" },
            B3: { value: 22000, format: "currency" },
            A4: { value: "Total" },
            B4: { value: "=SUM(B2:B3)", format: "currency" },
        },
    },
];

export const styles = {
    bold: { "font-weight": "bold" },
};
~~~

## 创建组件 {#create-the-component}

替换 `src/App.tsx` 的内容：

~~~tsx title="src/App.tsx"
import { useState } from "react";
import { ReactSpreadsheet, type SheetData } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";
import { sheets as initialSheets, styles } from "./data";

function App() {
    const [sheets] = useState<SheetData[]>(initialSheets);

    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <ReactSpreadsheet sheets={sheets} styles={styles} activeSheet="sheet1" />
        </div>
    );
}

export default App;
~~~

## 添加样式 {#add-styles}

更新 `src/index.css` 以确保全高布局：

~~~css title="src/index.css"
html,
body,
#root {
    height: 100%;
    padding: 0;
    margin: 0;
}
~~~

## 启动应用 {#start-the-app}

~~~bash
npm run dev
~~~

在终端中打开显示的 URL（通常为 `http://localhost:5173`）即可查看电子表格。

## 相关 API 和指南 {#related-api-and-guides}

- [Props 参考](react/props.md) - 配置电子表格行为
- [Events 参考](react/events.md) - 响应用户操作
- [Types 参考](react/types.md) - TypeScript 接口和枚举
- [数据与状态管理](react/state/state-management-basics.md) - 在应用状态中管理电子表格数据

您还可以探索 [GitHub 演示仓库](https://github.com/DHTMLX/react-spreadsheet-examples)，查看完整的工作示例。
