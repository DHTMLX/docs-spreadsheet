---
sidebar_label: "数据与状态"
title: "数据与状态管理"
description: "在 React 状态或状态管理库中管理 DHTMLX Spreadsheet 数据的模式。"
---

# 数据与状态管理 {#data--state-management}

本节介绍将电子表格数据与应用状态同步管理的模式，涵盖从基本的 React `useState` 到状态管理库的各种方案。

## 从这里开始 {#start-here}

- [状态管理基础](react/state/state-management-basics.md) - 核心模式：受控 props、事件回调、ref 逃生舱及性能技巧

## 状态库指南 {#state-library-guides}

- [Redux Toolkit](react/state/redux-toolkit.md) - 与 Redux Toolkit 集成的逐步指南

## 关键概念 {#key-concept}

`sheets` prop 是所有电子表格数据的**唯一真实来源**。传入一个 [`SheetData`](react/types.md#sheetdata) 对象数组，wrapper 会将您的数据与当前 widget 状态进行差异比对，仅应用发生变化的部分。使用不可变更新（展开运算符、函数式 `setState` 更新器），使 React 能够高效地检测变化。
