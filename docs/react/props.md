---
sidebar_label: Props
title: Props Reference
description: "Complete reference of all ReactSpreadsheet component props with types and examples."
---

# Props Reference

All props are optional. The component renders an empty spreadsheet with default settings when no props are provided.

## Init-Only Props

Changing any of these props causes the widget to be destroyed and recreated. Spreadsheet data is preserved, but undo/redo history and UI state (selection, scroll position) are reset.

| Prop | Type | Description |
|------|------|-------------|
| `menu` | `boolean` | Show the context menu. See JS API: [`menu`](/api/spreadsheet_menu_config/). |
| `editLine` | `boolean` | Show the formula/edit line above the grid. See JS API: [`editLine`](/api/spreadsheet_editline_config/). |
| `toolbarBlocks` | `ToolbarBlocks[]` | Toolbar blocks to display. See JS API: [`toolbarBlocks`](/api/spreadsheet_toolbarblocks_config/). |
| `multiSheets` | `boolean` | Enable multiple sheet tabs. See JS API: [`multisheets`](/api/spreadsheet_multisheets_config/). |
| `formats` | `IFormats[]` | Custom number format definitions. See JS API: [`formats`](/api/spreadsheet_formats_config/). |
| `localization` | `ISpreadsheetConfig["localization"]` | Number/date formatting locale (decimal separator, currency symbol, etc.). Separate from `spreadsheetLocale`. See JS API: [`localization`](/api/spreadsheet_localization_config/). |
| `importModulePath` | `string` | Path to the XLSX import module. See JS API: [`importModulePath`](/api/spreadsheet_importmodulepath_config/). |
| `exportModulePath` | `string` | Path to the XLSX export module. See JS API: [`exportModulePath`](/api/spreadsheet_exportmodulepath_config/). |
| `spreadsheetLocale` | [`SpreadsheetLocale`](/react/types/#spreadsheetlocale) | UI translations and localized formula names. Separate from `localization`. |

:::warning
Changing any init-only prop triggers a full destroy/recreate cycle. Undo/redo history, selection, and scroll position will be reset.
:::

## Runtime Props

These props are applied immediately without destroying the widget. No data loss or UI state reset.

| Prop | Type | Description |
|------|------|-------------|
| `rowsCount` | `number` | Number of rows in the grid. See JS API: [`rowsCount`](/api/spreadsheet_rowscount_config/). |
| `colsCount` | `number` | Number of columns in the grid. See JS API: [`colsCount`](/api/spreadsheet_colscount_config/). |
| `readonly` | `boolean` | Enable read-only mode. See JS API: [`readonly`](/api/spreadsheet_readonly_config/). |

## Data Props

| Prop | Type | Description |
|------|------|-------------|
| `sheets` | [`SheetData[]`](/react/types#sheetdata) | The single source of truth for all spreadsheet data. Each entry represents a sheet with its cells, structure, and metadata. Changes are applied incrementally. |
| `styles` | `Record<string, Record<string, string>>` | Shared CSS style definitions referenced by `CellData.css`. Keys are class names, values are CSS property maps. See [Styles example](#styles-example). |
| `activeSheet` | `Id` | Id of the active (visible) sheet. Changing this switches the displayed sheet tab. |

:::warning
Changing `styles` triggers a full data reload. Spreadsheet data is preserved, but undo/redo history and UI state (selection, scroll position) are reset.
:::

## Search Props

| Prop | Type | Description |
|------|------|-------------|
| `search` | [`SearchConfig`](/react/types#searchconfig) | Controlled search state. Pass a `SearchConfig` object to trigger/update search. Pass `undefined` to dismiss the search bar. |

## Data Loading Props

| Prop | Type | Description |
|------|------|-------------|
| `loadUrl` | `string` | URL to load spreadsheet data from. If both `loadUrl` and `sheets` are provided, `sheets` takes precedence. |
| `loadFormat` | `FileFormat` | File format hint for `loadUrl`. Default: `"json"`. |

## Theme

| Prop | Type | Description |
|------|------|-------------|
| `theme` | [`SpreadsheetTheme`](/react/types#spreadsheettheme) | Color theme. Built-in values: `"light"`, `"dark"`, `"contrast-light"`, `"contrast-dark"`. Also accepts custom theme name strings. See [Themes](/react/themes/). |

## Container Props

| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | CSS class name appended to the wrapper `<div>`. |
| `style` | `React.CSSProperties` | Inline styles applied to the wrapper `<div>`. |

---

## Examples

### Sheets with Cell Data

~~~tsx
const [sheets, setSheets] = useState<SheetData[]>([
    {
        id: "sheet1",
        name: "Budget",
        cells: {
            A1: { value: "Item", css: "header" },
            B1: { value: "Amount", css: "header", format: "currency" },
            A2: { value: "Rent" },
            B2: { value: 2000, format: "currency" },
            A3: { value: "=SUM(B2:B2)" },
        },
        rows: { 0: { height: 40 } },
        cols: { 0: { width: 150 }, 1: { width: 120 } },
        merged: [{
            from: { row: 0, column: 0 },
            to: { row: 0, column: 1 }
        }],
        freeze: { row: 1 },
    },
]);

<ReactSpreadsheet sheets={sheets} activeSheet="sheet1" />
~~~

### Styles Example

~~~tsx
const styles = {
    header: {
        "font-weight": "bold",
        "background": "#e3f2fd",
        "color": "#1565c0",
    },
    highlight: {
        "background": "#ffeb3b",
        "color": "#333",
    },
};

<ReactSpreadsheet sheets={sheets} styles={styles} />
~~~

### Toolbar Customization

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    toolbarBlocks={["undo", "colors", "decoration", "align", "format"]}
/>
~~~

### Multi-Sheet Mode

~~~tsx
<ReactSpreadsheet sheets={sheets} multiSheets={true} />
~~~

To disable sheet tabs:

~~~tsx
<ReactSpreadsheet sheets={sheets} multiSheets={false} />
~~~

### Excel Import/Export

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    importModulePath="../libs/excel2json/1.0/worker.js"
    exportModulePath="../libs/json2excel/1.0/worker.js"
/>
~~~

### European Number Formatting

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    localization={{
        decimal: ",",
        thousands: ".",
        currency: "€",
    }}
/>
~~~

### Controlled Search

~~~tsx
const [search, setSearch] = useState<SearchConfig | undefined>();
const [results, setResults] = useState<string[]>([]);

<input onChange={(e) => setSearch({ query: e.target.value, open: true })} />
<button onClick={() => setSearch(undefined)}>Close Search</button>
<p>Found in: {results.join(", ")}</p>

<ReactSpreadsheet
    sheets={sheets}
    search={search}
    onSearchResults={setResults}
/>
~~~

### Theme Switching

~~~tsx
const [theme, setTheme] = useState<SpreadsheetTheme>("light");

<select onChange={(e) => setTheme(e.target.value as SpreadsheetTheme)}>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
    <option value="contrast-light">Contrast Light</option>
    <option value="contrast-dark">Contrast Dark</option>
</select>

<ReactSpreadsheet sheets={sheets} theme={theme} />
~~~

### Read-Only Mode

~~~tsx
<ReactSpreadsheet sheets={sheets} readonly={true} />
~~~

### Loading Data from URL

~~~tsx
<ReactSpreadsheet loadUrl="/api/spreadsheet-data" loadFormat="json" />
~~~

### Locked Cells

~~~tsx
const sheets: SheetData[] = [
    {
        id: "sheet1",
        name: "Protected",
        cells: {
            A1: { value: "Header", locked: true },
            A2: { value: "Editable" },
        },
    },
];

<ReactSpreadsheet sheets={sheets} />
~~~

### Cell Validation

~~~tsx
const sheets: SheetData[] = [
    {
        id: "sheet1",
        name: "Form",
        cells: {
            A1: { value: "Status" },
            B1: { validation: ["Active", "Inactive", "Pending"] },
        },
    },
];

<ReactSpreadsheet sheets={sheets} />
~~~
