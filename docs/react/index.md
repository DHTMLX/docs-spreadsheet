---
sidebar_label: React Spreadsheet
title: React Spreadsheet
description: "Install, configure, and use DHTMLX Spreadsheet in React with the official declarative wrapper."
---

# React Spreadsheet

The official declarative React wrapper for DHTMLX Spreadsheet. Build spreadsheet UIs with a component-based API: pass data as props, respond to changes via event callbacks, and access the underlying widget through a ref when needed.

## Get started

- [Installation](/react/installation/) - install the evaluation or commercial package
- [Quick start](/react/quick-start/) - build your first spreadsheet app step by step
- [Online examples](https://dhtmlx.com/react/demos/spreadsheet/) - check live demos of React Spreadsheet features

:::info
You can also explore the [GitHub demo repository](https://github.com/DHTMLX/react-spreadsheet-examples) for a complete working example.
:::

## API reference

- [Props reference](/react/props/) - all component props with types and defaults
- [Events reference](/react/events/) - event callback props grouped by category
- [Types reference](/react/types/) - TypeScript interfaces, enums, and type aliases

## Data model

The [`sheets`](/react/props#data-props) prop is the single source of truth for all spreadsheet data. Each sheet is a [`SheetData`](/react/types#sheetdata) object containing cells, row/column configuration, merged ranges, frozen panes, filters, and sorting.

## State management

Learn how to keep spreadsheet data in sync with your application state:

- [State management basics](/react/state/state-management-basics/) - controlled props, event callbacks, the ref escape hatch
- [Redux toolkit](/react/state/redux-toolkit/) - step-by-step integration guide

## Framework integrations

- [Next.js](/react/nextjs/) - using React Spreadsheet with Next.js App Router

## Theming and localization

- [Themes](/react/themes/) - built-in themes and custom CSS overrides
- [Localization](/react/localization/) - UI translations and number/date formatting
