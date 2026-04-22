---
sidebar_label: React Spreadsheet
title: React Spreadsheet
description: "Install, configure, and use DHTMLX Spreadsheet in React with the official declarative wrapper."
---

# React Spreadsheet

The official declarative React wrapper for DHTMLX Spreadsheet. Build spreadsheet UIs with a component-based API — pass data as props, respond to changes via event callbacks, and access the underlying widget through a ref when needed.

## Get started

1. [Installation](/react/installation/) — install the evaluation or commercial package
2. [Quick start](/react/quick-start/) — build your first spreadsheet app step by step
3. [Props reference](/react/props) — configure the component behavior

You can also explore the [GitHub demo repository](https://github.com/DHTMLX/react-spreadsheet-demo) for a complete working example.

## Data model

The [`sheets`](/react/props#data-props) prop is the single source of truth for all spreadsheet data. Each sheet is a [`SheetData`](/react/types#sheetdata) object containing cells, row/column configuration, merged ranges, frozen panes, filters, and sorting.

## State management

Learn how to keep spreadsheet data in sync with your application state:

- [State management basics](/react/state/state-management-basics/) — controlled props, event callbacks, the ref escape hatch
- [Redux toolkit](/react/state/redux-toolkit/) — step-by-step integration guide

## Framework integrations

- [Next.js](/react/nextjs/) — using React Spreadsheet with Next.js App Router

## Theming and localization

- [Themes](/react/themes/) — built-in themes and custom CSS overrides
- [Localization](/react/localization) — UI translations and number/date formatting
