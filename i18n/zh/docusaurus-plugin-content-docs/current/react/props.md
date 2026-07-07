---
sidebar_label: Props
title: Props 参考
description: "ReactSpreadsheet 组件所有 props 的完整参考，包含类型和示例。"
---

# Props 参考 {#props-reference}

所有 props 均为可选。若未提供任何 props，组件将以默认设置渲染一个空白电子表格。

## 仅初始化 props {#init-only-props}

修改这些 props 中的任意一个都会导致 widget 被销毁并重新创建。电子表格数据会被保留，但撤销/重做历史记录及 UI 状态（选区、滚动位置）将被重置。

<div className="overflow-table">

| Prop | 类型 | 描述 |
|------|------|-------------|
| `menu` | `boolean` | 显示右键菜单。JS API 参见：[`menu`](api/spreadsheet_menu_config.md)。 |
| `editLine` | `boolean` | 在表格上方显示公式/编辑栏。JS API 参见：[`editLine`](api/spreadsheet_editline_config.md)。 |
| `toolbarBlocks` | `ToolbarBlocks[]` | 要显示的工具栏块。JS API 参见：[`toolbarBlocks`](api/spreadsheet_toolbarblocks_config.md)。 |
| `multiSheets` | `boolean` | 启用多工作表标签页。JS API 参见：[`multisheets`](api/spreadsheet_multisheets_config.md)。 |
| `formats` | `IFormats[]` | 自定义数字格式定义。JS API 参见：[`formats`](api/spreadsheet_formats_config.md)。 |
| `localization` | `ISpreadsheetConfig["localization"]` | 数字/日期格式化区域设置，例如小数分隔符和货币符号。与 `spreadsheetLocale` 独立。JS API 参见：[`localization`](api/spreadsheet_localization_config.md)。 |
| `importModulePath` | `string` | XLSX 导入模块的路径。JS API 参见：[`importModulePath`](api/spreadsheet_importmodulepath_config.md)。 |
| `exportModulePath` | `string` | XLSX 导出模块的路径。JS API 参见：[`exportModulePath`](api/spreadsheet_exportmodulepath_config.md)。 |
| `spreadsheetLocale` | [`SpreadsheetLocale`](react/types.md#spreadsheetlocale) | UI 翻译及本地化公式名称。与 `localization` 独立。 |

</div>

:::warning
修改任何仅初始化 prop 都会触发完整的销毁/重建周期。撤销/重做历史记录、选区和滚动位置将被重置。
:::

## 运行时 props {#runtime-props}

这些 props 无需销毁 widget 即可立即生效，不会造成数据丢失或 UI 状态重置。

| Prop | 类型 | 描述 |
|------|------|-------------|
| `rowsCount` | `number` | 表格的行数。JS API 参见：[`rowsCount`](api/spreadsheet_rowscount_config.md)。 |
| `colsCount` | `number` | 表格的列数。JS API 参见：[`colsCount`](api/spreadsheet_colscount_config.md)。 |
| `readonly` | `boolean` | 启用只读模式。JS API 参见：[`readonly`](api/spreadsheet_readonly_config.md)。 |

## 数据 props {#data-props}

`sheets` prop 是所有电子表格内容的唯一数据源。变更以增量方式应用：仅将已修改的单元格、区域或设置更新到 widget 中。

| Prop | 类型 | 描述 |
|------|------|-------------|
| `sheets` | [`SheetData[]`](react/types.md#sheetdata) | 所有电子表格数据的唯一数据源。每个条目代表一个工作表，包含其单元格、结构和元数据。变更以增量方式应用。 |
| `styles` | `Record<string, Record<string, string>>` | 由 `CellData.css` 引用的共享 CSS 样式定义。键为类名，值为 CSS 属性映射。参见 [样式示例](#styles-example)。 |
| `activeSheet` | `Id` | 活动（可见）工作表的 Id。更改此值将切换显示的工作表标签页。 |

:::warning
修改 `styles` 会触发完整的数据重新加载。电子表格数据会被保留，但撤销/重做历史记录及 UI 状态（选区、滚动位置）将被重置。
:::

## 搜索 props {#search-props}

从组件外部控制搜索栏状态。配合 `onSearchResults` 使用，可构建自定义搜索 UI。

| Prop | 类型 | 描述 |
|------|------|-------------|
| `search` | [`SearchConfig`](react/types.md#searchconfig) | 受控搜索状态。传入 `SearchConfig` 对象以触发/更新搜索。传入 `undefined` 以关闭搜索栏。 |

## 数据加载 props {#data-loading-props}

从远程 URL 加载电子表格数据，而非通过 `sheets` prop 提供。

| Prop | 类型 | 描述 |
|------|------|-------------|
| `loadUrl` | `string` | 加载电子表格数据的 URL。若同时提供 `loadUrl` 和 `sheets`，则 `sheets` 优先。 |
| `loadFormat` | `FileFormat` | `loadUrl` 的文件格式提示。默认值：`"json"`。 |

## 主题 prop {#theme-prop}

控制应用于电子表格的视觉主题。由于 `theme` 是运行时 prop，值变更后 widget 会立即更新。

| Prop | 类型 | 描述 |
|------|------|-------------|
| `theme` | [`SpreadsheetTheme`](react/types.md#spreadsheettheme) | 颜色主题。内置值：`"light"`、`"dark"`、`"contrast-light"`、`"contrast-dark"`。也接受自定义主题名称字符串。参见 [主题](react/themes.md)。 |

## 容器 props {#container-props}

应用于包裹电子表格的 `<div>` 的标准 React DOM props，用于控制尺寸和布局。

| Prop | 类型 | 描述 |
|------|------|-------------|
| `className` | `string` | 追加到封装器 `<div>` 的 CSS 类名。 |
| `style` | `React.CSSProperties` | 应用于封装器 `<div>` 的内联样式。 |

---

## 示例 {#examples}

### 包含单元格数据的工作表 {#sheets-with-cell-data}

一个完整的 `SheetData` 示例，包含单元格、行列尺寸、合并区域和冻结标题行。

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
            A3: { value: "=SUM(B2:B3)" },
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

### 样式示例 {#styles-example}

在 `styles` prop 中将命名样式定义为 CSS 属性映射，然后通过 `CellData.css` 按名称引用。

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

### 工具栏自定义 {#toolbar-customization}

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    toolbarBlocks={["undo", "colors", "decoration", "align", "format"]}
/>
~~~

### 多工作表模式 {#multi-sheet-mode}

通过 `multiSheets={true}` 启用工作表标签页。传入 `false` 可完全隐藏标签栏。

~~~tsx
<ReactSpreadsheet sheets={sheets} multiSheets={true} />
~~~

~~~tsx
<ReactSpreadsheet sheets={sheets} multiSheets={false} />
~~~

### Excel 导入/导出 {#excel-importexport}

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    importModulePath="../libs/excel2json/next/worker.js"   
    exportModulePath="../libs/json2excel/next/worker.js"   
/>
~~~

如需使用特定版本，请将 `next` 替换为版本号（参见 [Excel2Json](https://github.com/dhtmlx/excel2json) 和 [Json2Excel](https://github.com/dhtmlx/json2excel) GitHub 仓库）。

### 欧式数字格式化 {#european-number-formatting}

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

### 受控搜索 {#controlled-search}

传入 `SearchConfig` 对象以编程方式打开搜索栏。使用 `onSearchResults` 接收匹配的单元格引用。

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

### 主题切换 {#theme-switching}

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

### 只读模式 {#read-only-mode}

~~~tsx
<ReactSpreadsheet sheets={sheets} readonly={true} />
~~~

### 从 URL 加载数据 {#loading-data-from-url}

~~~tsx
<ReactSpreadsheet loadUrl="/api/spreadsheet-data" loadFormat="json" />
~~~

### 锁定单元格 {#locked-cells}

使用 `locked: true` 将单个单元格标记为不可编辑。与 `readonly` 不同，此方式可在保持其余工作表可编辑的同时，保护特定单元格。

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

### 单元格校验 {#cell-validation}

向 `CellData.validation` 传入字符串数组，将单元格限制为下拉列表中的允许值。

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
