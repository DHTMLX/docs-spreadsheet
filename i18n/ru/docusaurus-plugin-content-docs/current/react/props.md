---
sidebar_label: Пропсы
title: Справочник пропсов
description: "Полный справочник всех пропсов компонента ReactSpreadsheet с типами и примерами."
---

# Справочник пропсов {#props-reference}

Все пропсы необязательны. Компонент рендерит пустую таблицу с настройками по умолчанию, если пропсы не переданы.

## Пропсы только для инициализации {#init-only-props}

Изменение любого из этих пропсов приводит к уничтожению и пересозданию виджета. Данные таблицы сохраняются, но история отмены/повтора и состояние интерфейса (выделение, позиция прокрутки) сбрасываются.

<div className="overflow-table">

| Пропс | Тип | Описание |
|------|------|-------------|
| `menu` | `boolean` | Показывать контекстное меню. JS API: [`menu`](api/spreadsheet_menu_config.md). |
| `editLine` | `boolean` | Показывать строку формул/редактирования над сеткой. JS API: [`editLine`](api/spreadsheet_editline_config.md). |
| `toolbarBlocks` | `ToolbarBlocks[]` | Блоки панели инструментов для отображения. JS API: [`toolbarBlocks`](api/spreadsheet_toolbarblocks_config.md). |
| `multiSheets` | `boolean` | Включить несколько вкладок листов. JS API: [`multisheets`](api/spreadsheet_multisheets_config.md). |
| `formats` | `IFormats[]` | Определения пользовательских числовых форматов. JS API: [`formats`](api/spreadsheet_formats_config.md). |
| `localization` | `ISpreadsheetConfig["localization"]` | Локаль форматирования чисел/дат, например разделитель дробной части и символ валюты. Отдельно от `spreadsheetLocale`. JS API: [`localization`](api/spreadsheet_localization_config.md). |
| `importModulePath` | `string` | Путь к модулю импорта XLSX. JS API: [`importModulePath`](api/spreadsheet_importmodulepath_config.md). |
| `exportModulePath` | `string` | Путь к модулю экспорта XLSX. JS API: [`exportModulePath`](api/spreadsheet_exportmodulepath_config.md). |
| `spreadsheetLocale` | [`SpreadsheetLocale`](react/types.md#spreadsheetlocale) | Переводы интерфейса и локализованные имена формул. Отдельно от `localization`. |

</div>

:::warning
Изменение любого пропса только для инициализации запускает полный цикл уничтожения/пересоздания. История отмены/повтора, выделение и позиция прокрутки будут сброшены.
:::

## Пропсы во время выполнения {#runtime-props}

Эти пропсы применяются немедленно без уничтожения виджета. Данные не теряются, состояние интерфейса не сбрасывается.

| Пропс | Тип | Описание |
|------|------|-------------|
| `rowsCount` | `number` | Количество строк в сетке. JS API: [`rowsCount`](api/spreadsheet_rowscount_config.md). |
| `colsCount` | `number` | Количество столбцов в сетке. JS API: [`colsCount`](api/spreadsheet_colscount_config.md). |
| `readonly` | `boolean` | Включить режим только для чтения. JS API: [`readonly`](api/spreadsheet_readonly_config.md). |

## Пропсы данных {#data-props}

Пропс `sheets` является единственным источником истины для всего содержимого таблицы. Изменения применяются инкрементально: в виджете обновляются только изменённые ячейки, диапазоны или настройки.

| Пропс | Тип | Описание |
|------|------|-------------|
| `sheets` | [`SheetData[]`](react/types.md#sheetdata) | Единственный источник истины для всех данных таблицы. Каждый элемент представляет лист с его ячейками, структурой и метаданными. Изменения применяются инкрементально. |
| `styles` | `Record<string, Record<string, string>>` | Общие определения CSS-стилей, на которые ссылается `CellData.css`. Ключи — имена классов, значения — карты CSS-свойств. Смотрите [Пример стилей](#styles-example). |
| `activeSheet` | `Id` | Id активного (видимого) листа. Изменение этого пропса переключает отображаемую вкладку листа. |

:::warning
Изменение `styles` запускает полную перезагрузку данных. Данные таблицы сохраняются, но история отмены/повтора и состояние интерфейса (выделение, позиция прокрутки) сбрасываются.
:::

## Пропсы поиска {#search-props}

Управляет состоянием строки поиска извне компонента. Используйте вместе с `onSearchResults` для создания пользовательского интерфейса поиска.

| Пропс | Тип | Описание |
|------|------|-------------|
| `search` | [`SearchConfig`](react/types.md#searchconfig) | Управляемое состояние поиска. Передайте объект `SearchConfig` для запуска/обновления поиска. Передайте `undefined` для закрытия строки поиска. |

## Пропсы загрузки данных {#data-loading-props}

Загрузка данных таблицы с удалённого URL вместо передачи через пропс `sheets`.

| Пропс | Тип | Описание |
|------|------|-------------|
| `loadUrl` | `string` | URL для загрузки данных таблицы. Если переданы и `loadUrl`, и `sheets`, приоритет имеет `sheets`. |
| `loadFormat` | `FileFormat` | Подсказка формата файла для `loadUrl`. По умолчанию: `"json"`. |

## Пропс темы {#theme-prop}

Управляет визуальной темой, применяемой к таблице. Поскольку `theme` — пропс во время выполнения, виджет обновляется немедленно при изменении значения.

| Пропс | Тип | Описание |
|------|------|-------------|
| `theme` | [`SpreadsheetTheme`](react/types.md#spreadsheettheme) | Цветовая тема. Встроенные значения: `"light"`, `"dark"`, `"contrast-light"`, `"contrast-dark"`. Также принимает строки с именами пользовательских тем. Смотрите [Темы](react/themes.md). |

## Пропсы контейнера {#container-props}

Стандартные React DOM-пропсы, применяемые к оборачивающему `<div>`, содержащему таблицу. Используйте их для управления размерами и компоновкой.

| Пропс | Тип | Описание |
|------|------|-------------|
| `className` | `string` | Имя CSS-класса, добавляемое к оборачивающему `<div>`. |
| `style` | `React.CSSProperties` | Встроенные стили, применяемые к оборачивающему `<div>`. |

---

## Примеры {#examples}

### Листы с данными ячеек {#sheets-with-cell-data}

Полный пример `SheetData` с ячейками, размерами строк и столбцов, объединёнными диапазонами и закреплённой строкой заголовка.

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

### Пример стилей {#styles-example}

Определите именованные стили как карты CSS-свойств в пропсе `styles`, затем ссылайтесь на них по имени через `CellData.css`.

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

### Настройка панели инструментов {#toolbar-customization}

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    toolbarBlocks={["undo", "colors", "decoration", "align", "format"]}
/>
~~~

### Режим нескольких листов {#multi-sheet-mode}

Включите вкладки листов с `multiSheets={true}`. Передайте `false`, чтобы полностью скрыть панель вкладок.

~~~tsx
<ReactSpreadsheet sheets={sheets} multiSheets={true} />
~~~

~~~tsx
<ReactSpreadsheet sheets={sheets} multiSheets={false} />
~~~

### Импорт/экспорт Excel {#excel-importexport}

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    importModulePath="../libs/excel2json/next/worker.js"   
    exportModulePath="../libs/json2excel/next/worker.js"   
/>
~~~

Чтобы использовать конкретную версию, замените `next` на номер версии (смотрите репозитории GitHub [Excel2Json](https://github.com/dhtmlx/excel2json) и [Json2Excel](https://github.com/dhtmlx/json2excel)).

### Европейское форматирование чисел {#european-number-formatting}

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

### Управляемый поиск {#controlled-search}

Передайте объект `SearchConfig`, чтобы программно открыть строку поиска. Используйте `onSearchResults` для получения ссылок на совпадающие ячейки.

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

### Переключение темы {#theme-switching}

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

### Режим только для чтения {#read-only-mode}

~~~tsx
<ReactSpreadsheet sheets={sheets} readonly={true} />
~~~

### Загрузка данных по URL {#loading-data-from-url}

~~~tsx
<ReactSpreadsheet loadUrl="/api/spreadsheet-data" loadFormat="json" />
~~~

### Заблокированные ячейки {#locked-cells}

Пометьте отдельные ячейки как нередактируемые с помощью `locked: true`. В отличие от `readonly`, это защищает конкретные ячейки, оставляя остальную часть листа редактируемой.

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

### Валидация ячеек {#cell-validation}

Передайте массив строк в `CellData.validation`, чтобы ограничить ячейку выпадающим списком допустимых значений.

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
