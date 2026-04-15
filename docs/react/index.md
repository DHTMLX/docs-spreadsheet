---
sidebar_label: React Spreadsheet
title: React Spreadsheet
description: "Install, configure, and use DHTMLX Spreadsheet in React with the official declarative wrapper."
---

# React Spreadsheet

The official declarative React wrapper for DHTMLX Spreadsheet. Build spreadsheet UIs with a component-based API — pass data as props, respond to changes via event callbacks, and access the underlying widget through a ref when needed.

## Get started

1. [Installation](./installation.md) — install the evaluation or commercial package
2. [Quick Start](./quick-start.md) — build your first spreadsheet app step by step
3. [Props Reference](./props.md) — configure the component behavior

You can also explore the [GitHub demo repository](https://github.com/DHTMLX/react-spreadsheet-demo) for a complete working example.

## Data model

The [`sheets`](./props.md#data-props) prop is the single source of truth for all spreadsheet data. Each sheet is a [`SheetData`](./types.md#sheetdata) object containing cells, row/column configuration, merged ranges, frozen panes, filters, and sorting.

## State management

Learn how to keep spreadsheet data in sync with your application state:

- [State Management Basics](./state/state-management-basics.md) — controlled props, event callbacks, the ref escape hatch
- [Redux Toolkit](./state/redux-toolkit.md) — step-by-step integration guide

## Framework integrations

- [Next.js](./nextjs.md) — using React Spreadsheet with Next.js App Router

## Theming and localization

- [Themes](./themes.md) — built-in themes and custom CSS overrides
- [Localization](./localization.md) — UI translations and number/date formatting

## Using JS Spreadsheet directly

If you need the imperative DHTMLX JavaScript Spreadsheet API without the declarative wrapper, see the [Integration with React](/react_integration/) guide.
