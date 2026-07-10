---
sidebar_label: React Spreadsheet
title: React Spreadsheet
description: "通过官方声明式封装器，在 React 中安装、配置和使用 DHTMLX Spreadsheet。"
---

# React Spreadsheet

DHTMLX Spreadsheet 的官方声明式 React 封装器。使用基于组件的 API 构建电子表格 UI：以 props 形式传入数据，通过事件回调响应变更，在需要时通过 ref 访问底层 widget。

## 快速开始 {#get-started}

- [安装](react/installation.md) - 安装评估版或商业版软件包
- [快速上手](react/quick-start.md) - 逐步构建你的第一个电子表格应用
- [在线示例](https://dhtmlx.com/react/demos/spreadsheet/) - 查看 React Spreadsheet 功能的在线演示

:::info
你还可以访问 [GitHub 示例仓库](https://github.com/DHTMLX/react-spreadsheet-examples) 获取完整的可运行示例。
:::

## API 参考 {#api-reference}

- [Props 参考](react/props.md) - 所有组件 props 及其类型和默认值
- [Events 参考](react/events.md) - 按类别分组的事件回调 props
- [Types 参考](react/types.md) - TypeScript 接口、枚举及类型别名

## 数据模型 {#data-model}

[`sheets`](react/props.md#data-props) prop 是所有电子表格数据的唯一数据源。每个工作表均为一个 [`SheetData`](react/types.md#sheetdata) 对象，包含单元格、行列配置、合并区域、冻结窗格、筛选器和排序信息。

## 状态管理 {#state-management}

了解如何使电子表格数据与应用状态保持同步：

- [状态管理基础](react/state/state-management-basics.md) - 受控 props、事件回调及 ref 逃生舱
- [Redux Toolkit](react/state/redux-toolkit.md) - 逐步集成指南

## 框架集成 {#framework-integrations}

- [Next.js](react/nextjs.md) - 在 Next.js App Router 中使用 React Spreadsheet

## 主题与本地化 {#theming-and-localization}

- [主题](react/themes.md) - 内置主题与自定义 CSS 覆盖
- [本地化](react/localization.md) - UI 翻译及数字/日期格式化
