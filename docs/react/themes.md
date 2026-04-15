---
sidebar_label: Themes
title: React Spreadsheet Themes
description: "Apply built-in or custom themes to DHTMLX React Spreadsheet."
---

# React Spreadsheet Themes

:::tip Using a commercial license?
Replace `@dhtmlx/trial-react-spreadsheet` with `@dhx/react-spreadsheet` and configure the private registry. See [Installation](./installation.md).
:::

## Built-in themes

The [`SpreadsheetTheme`](./types.md#spreadsheettheme) type defines four built-in themes:

- `"light"` (default)
- `"dark"`
- `"contrast-light"`
- `"contrast-dark"`

You can also pass a custom theme name as a string.

## Applying a theme

Pass the `theme` prop to `ReactSpreadsheet`:

~~~tsx
<ReactSpreadsheet sheets={sheets} theme="dark" />
~~~

## Switching at runtime

Use React state to switch themes dynamically:

~~~tsx
import { useState } from "react";
import { ReactSpreadsheet, type SheetData, type SpreadsheetTheme } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/dist/spreadsheet.react.css";

function App() {
    const [sheets] = useState<SheetData[]>([/* ... */]);
    const [theme, setTheme] = useState<SpreadsheetTheme>("light");

    return (
        <>
            <select onChange={(e) => setTheme(e.target.value as SpreadsheetTheme)}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="contrast-light">Contrast Light</option>
                <option value="contrast-dark">Contrast Dark</option>
            </select>

            <ReactSpreadsheet sheets={sheets} theme={theme} />
        </>
    );
}
~~~

## Custom CSS variables

DHTMLX Spreadsheet uses a layered CSS variable system. You can override these variables to customize the appearance beyond the built-in themes.

### Creating a custom theme

Define a custom `data-dhx-theme` selector, override the variables you need, and pass the theme name as a prop:

~~~css title="src/custom-theme.css"
[data-dhx-theme='corporate'] {
    /* color scheme */
    --dhx-h-primary: 220;
    --dhx-s-primary: 60%;
    --dhx-l-primary: 45%;

    /* toolbar and grid */
    --dhx-s-toolbar-background: #f0f4f8;
    --dhx-s-grid-header-background: #e2e8f0;

    /* spreadsheet range colors */
    --dhx-spreadsheet-range-background-1: #bee3f8;
    --dhx-spreadsheet-range-color-1: #2b6cb0;
}
~~~

~~~tsx
import "./custom-theme.css";

<ReactSpreadsheet sheets={sheets} theme="corporate" />
~~~

## Related

- [Themes](/themes/themes/) — built-in theme overview for DHTMLX Spreadsheet
- [Base themes configuration](/themes/base_themes_configuration/) — configuring base themes
- [Custom theme](/themes/custom_theme/) — creating custom themes
