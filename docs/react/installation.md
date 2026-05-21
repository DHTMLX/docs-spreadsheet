---
sidebar_label: Installation
title: React Spreadsheet installation
description: "How to install the evaluation or commercial version of DHTMLX React Spreadsheet via npm."
---

# React Spreadsheet installation

React Spreadsheet is distributed as an npm package in three variants: a public evaluation build, a private evaluation build, and the commercial release. This page covers how to install each variant, import the required CSS stylesheet, and set up TypeScript support.

:::info Prerequisites
- [Node.js](https://nodejs.org/en/) (LTS version recommended)
- React 18 or newer
:::

## Evaluation version (public npm)

The evaluation package is available on the public npm registry with no additional configuration required. It includes a free 30-day evaluation.

~~~bash
npm install @dhtmlx/trial-react-spreadsheet
~~~

or with yarn:

~~~bash
yarn add @dhtmlx/trial-react-spreadsheet
~~~

## Evaluation version (private npm)

The evaluation version is on the DHTMLX private registry. Configure your project first:

~~~bash
npm config set @dhx:registry https://npm.dhtmlx.com
~~~

Then install:

~~~bash
npm install @dhx/trial-react-spreadsheet
~~~

## Commercial version (private npm)

The commercial version uses the same private registry. Log in to your account in the [Client's Area](https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/#editions-licenses) to obtain credentials.

~~~bash
npm config set @dhx:registry https://npm.dhtmlx.com
~~~

~~~bash
npm install @dhx/react-spreadsheet
~~~

## Package variants

| Variant | Package Name | Registry |
|---------|-------------|----------|
| Evaluation (public npm) | `@dhtmlx/trial-react-spreadsheet` | npmjs.org (public) |
| Evaluation (private npm) | `@dhx/trial-react-spreadsheet` | npm.dhtmlx.com (private) |
| Commercial | `@dhx/react-spreadsheet` | npm.dhtmlx.com (private) |

## CSS import

Import the stylesheet in your application entry point or component:

~~~tsx
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";
~~~

For the commercial version:

~~~tsx
import "@dhx/react-spreadsheet/spreadsheet.react.css";
~~~

## TypeScript

TypeScript type definitions are bundled with the package. No additional `@types/` package is needed.

## Next steps

- [Quick start](/react/quick-start/) - build your first spreadsheet app step by step
