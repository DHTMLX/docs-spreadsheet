---
sidebar_label: Spreadsheet overview
title: DHTMLX Spreadsheet Overview
slug: /
description: You can have an overview of the JavaScript Spreadsheet library in the DHTMLX documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# DHTMLX Spreadsheet overview

DHTMLX Spreadsheet is a client-side JavaScript component for editing and formatting spreadsheet data online. It includes a configurable toolbar, handy menu and context menu, and an adjustable grid, supports hotkey navigation, loads data from external and local sources, and can localize the interface into the desired language.

:::tip
The [User Guide](guides.md#user-guides) makes working with Spreadsheet easy for your users.
:::

## Spreadsheet structure

### Toolbar

The **Toolbar** section is rather flexible. It contains several default blocks of controls: "undo", "colors", "decoration", "align", "cell", "format", "actions". You can [change the toolbar structure](configuration.md#toolbar) and add more blocks, or set your own order of the blocks.

![DHTMLX Spreadsheet toolbar with undo, color, decoration, align, cell, format, and action controls](/img/overview_toolbar.png)

You can also [customize the toolbar](customization.md#toolbar) by adding your own controls and updating the controls' configuration.  

### Editing line

The **editing line** serves two purposes:

- to edit the content of the selected cell
- to control changes made in the currently edited cell

![DHTMLX Spreadsheet editing line for editing cell content and tracking changes](/img/overview_editline.png)

If necessary, you can switch the editing line off via the corresponding [configuration option](configuration.md#editing-bar).

### Grid

The **Grid** is a table with columns defined by letters and rows defined by numbers. Thus, a cell of the grid is defined by the column's letter and the row's number, for example, C3.

![DHTMLX Spreadsheet grid with columns labeled by letters and numbered rows](/img/spreadsheet_init.png)

### Context menu

The **Context menu** section includes 6 items — **Lock**, **Clear**, **Columns**, **Rows**, **Sort**, and **Insert link** — with sub-items.

![DHTMLX Spreadsheet context menu with Lock, Clear, Columns, Rows, Sort, and Insert link options](/img/overview_contextmenu.png)

The [structure of Context menu is customizable](customization.md#context-menu) as well. You can add custom controls, update the controls' configuration and remove unnecessary controls.

### Menu

The **Menu** section contains several blocks that combine the most frequently used options from the Toolbar and Context menu for quick access.

By default the **Menu** section is hidden, but you can switch it on via the related [configuration option](configuration.md#menu).

![DHTMLX Spreadsheet menu section combining frequently used toolbar and context menu options](/img/overview_menu.png)

You can [modify the structure of the menu](customization.md#menu) by using custom controls, updating the controls' configuration and removing unnecessary controls.

## What's next

Now you can get down to using DHTMLX Spreadsheet in your application. Follow the directions of the [How to Start](how_to_start.md) tutorial for guidance.

To learn more about DHTMLX Spreadsheet, see these guides:

- [API overview](api/api_overview.md)
- [Guides](guides.md)
- [MCP server](mcp-server.md) for AI coding assistants
