---
sidebar_label: "Data & State"
title: "Data & State Management"
description: "Patterns for managing DHTMLX Spreadsheet data in React state or with state management libraries."
---

# Data & state management

This section covers patterns for managing spreadsheet data in sync with your application state — from basic React `useState` to state management libraries.

## Start here

- [State Management Basics](/react/state/state-management-basics/) — core patterns: controlled props, event callbacks, the ref escape hatch, and performance tips

## State library guides

- [Redux Toolkit](/react/state/redux-toolkit/) — step-by-step integration with Redux Toolkit

## Key concept

The `sheets` prop is the **single source of truth** for all spreadsheet data. Pass an array of [`SheetData`](/react/types#sheetdata) objects, and the wrapper diffs your data against the current widget state, applying only the changes. Use immutable updates (spread operators, functional `setState` updaters) so React can detect changes efficiently.
