---
sidebar_label: Installation
title: React Spreadsheet 安装
description: "如何通过 npm 安装 DHTMLX React Spreadsheet 的评估版或商业版。"
---

# React Spreadsheet 安装 {#react-spreadsheet-installation}

React Spreadsheet 以 npm 包的形式发布，共有三个版本：公开评估版、私有评估版和商业正式版。本页介绍如何安装各版本、导入所需的 CSS 样式表以及配置 TypeScript 支持。

:::info 前提条件
- [Node.js](https://nodejs.org/en/)（推荐使用 LTS 版本）
- React 18 或更高版本
:::

## 评估版（公开 npm） {#evaluation-version-public-npm}

评估包已发布在公开 npm 注册表，无需额外配置，包含 30 天免费试用。

~~~bash
npm install @dhtmlx/trial-react-spreadsheet
~~~

或使用 yarn：

~~~bash
yarn add @dhtmlx/trial-react-spreadsheet
~~~

## 评估版（私有 npm） {#evaluation-version-private-npm}

评估版位于 DHTMLX 私有注册表。请先配置项目：

~~~bash
npm config set @dhx:registry https://npm.dhtmlx.com
~~~

然后安装：

~~~bash
npm install @dhx/trial-react-spreadsheet
~~~

## 商业版（私有 npm） {#commercial-version-private-npm}

商业版使用相同的私有注册表。请登录 [客户区](https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/#editions-licenses) 获取凭据。

~~~bash
npm config set @dhx:registry https://npm.dhtmlx.com
~~~

~~~bash
npm install @dhx/react-spreadsheet
~~~

## 版本对比 {#package-variants}

| 版本 | 包名 | 注册表 |
|---------|-------------|----------|
| 评估版（公开 npm） | `@dhtmlx/trial-react-spreadsheet` | npmjs.org（公开） |
| 评估版（私有 npm） | `@dhx/trial-react-spreadsheet` | npm.dhtmlx.com（私有） |
| 商业版 | `@dhx/react-spreadsheet` | npm.dhtmlx.com（私有） |

## CSS 导入 {#css-import}

在应用入口文件或组件中导入样式表：

~~~tsx
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";
~~~

商业版使用以下路径：

~~~tsx
import "@dhx/react-spreadsheet/spreadsheet.react.css";
~~~

## TypeScript {#typescript}

TypeScript 类型定义已随包一同打包，无需额外安装 `@types/` 包。

## 后续步骤 {#next-steps}

- [快速上手](react/quick-start.md) - 逐步构建你的第一个电子表格应用
