---
sidebar_label: Props
title: Props-Referenz
description: "Vollständige Referenz aller ReactSpreadsheet-Komponenten-Props mit Typen und Beispielen."
---

# Props-Referenz {#props-reference}

Alle Props sind optional. Die Komponente rendert eine leere Tabelle mit Standardeinstellungen, wenn keine Props angegeben werden.

## Init-Only-Props {#init-only-props}

Das Ändern einer dieser Props führt dazu, dass das Widget zerstört und neu erstellt wird. Tabellendaten bleiben erhalten, aber Rückgängig/Wiederherstellen-Verlauf und UI-Zustand (Auswahl, Scrollposition) werden zurückgesetzt.

<div className="overflow-table">

| Prop | Typ | Beschreibung |
|------|------|-------------|
| `menu` | `boolean` | Kontextmenü anzeigen. Siehe JS-API: [`menu`](api/spreadsheet_menu_config.md). |
| `editLine` | `boolean` | Formel-/Bearbeitungsleiste über dem Raster anzeigen. Siehe JS-API: [`editLine`](api/spreadsheet_editline_config.md). |
| `toolbarBlocks` | `ToolbarBlocks[]` | Anzuzeigende Toolbar-Blöcke. Siehe JS-API: [`toolbarBlocks`](api/spreadsheet_toolbarblocks_config.md). |
| `multiSheets` | `boolean` | Mehrere Tabellenblatt-Reiter aktivieren. Siehe JS-API: [`multisheets`](api/spreadsheet_multisheets_config.md). |
| `formats` | `IFormats[]` | Benutzerdefinierte Zahlenformatdefinitionen. Siehe JS-API: [`formats`](api/spreadsheet_formats_config.md). |
| `localization` | `ISpreadsheetConfig["localization"]` | Gebietsschema für Zahlen-/Datumsformatierung, z. B. Dezimaltrennzeichen und Währungssymbol. Unabhängig von `spreadsheetLocale`. Siehe JS-API: [`localization`](api/spreadsheet_localization_config.md). |
| `importModulePath` | `string` | Pfad zum XLSX-Importmodul. Siehe JS-API: [`importModulePath`](api/spreadsheet_importmodulepath_config.md). |
| `exportModulePath` | `string` | Pfad zum XLSX-Exportmodul. Siehe JS-API: [`exportModulePath`](api/spreadsheet_exportmodulepath_config.md). |
| `spreadsheetLocale` | [`SpreadsheetLocale`](react/types.md#spreadsheetlocale) | UI-Übersetzungen und lokalisierte Formelnamen. Unabhängig von `localization`. |

</div>

:::warning
Das Ändern einer Init-Only-Prop löst einen vollständigen Zerstörungs-/Neuaufbau-Zyklus aus. Rückgängig/Wiederherstellen-Verlauf, Auswahl und Scrollposition werden zurückgesetzt.
:::

## Laufzeit-Props {#runtime-props}

Diese Props werden sofort angewendet, ohne das Widget zu zerstören. Kein Datenverlust oder UI-Zustandsreset.

| Prop | Typ | Beschreibung |
|------|------|-------------|
| `rowsCount` | `number` | Anzahl der Zeilen im Raster. Siehe JS-API: [`rowsCount`](api/spreadsheet_rowscount_config.md). |
| `colsCount` | `number` | Anzahl der Spalten im Raster. Siehe JS-API: [`colsCount`](api/spreadsheet_colscount_config.md). |
| `readonly` | `boolean` | Schreibschutz-Modus aktivieren. Siehe JS-API: [`readonly`](api/spreadsheet_readonly_config.md). |

## Daten-Props {#data-props}

Die `sheets`-Prop ist die einzige Datenquelle für alle Tabelleninhalte. Änderungen werden inkrementell angewendet: Nur geänderte Zellen, Bereiche oder Einstellungen werden im Widget aktualisiert.

| Prop | Typ | Beschreibung |
|------|------|-------------|
| `sheets` | [`SheetData[]`](react/types.md#sheetdata) | Die einzige Datenquelle für alle Tabellendaten. Jeder Eintrag repräsentiert ein Tabellenblatt mit seinen Zellen, seiner Struktur und seinen Metadaten. Änderungen werden inkrementell angewendet. |
| `styles` | `Record<string, Record<string, string>>` | Gemeinsame CSS-Stildefinitionen, auf die über `CellData.css` verwiesen wird. Schlüssel sind Klassennamen, Werte sind CSS-Eigenschaftszuordnungen. Siehe [Styles-Beispiel](#styles-example). |
| `activeSheet` | `Id` | Id des aktiven (sichtbaren) Tabellenblatts. Eine Änderung wechselt den angezeigten Tabellenblatt-Reiter. |

:::warning
Das Ändern von `styles` löst einen vollständigen Datenneulade aus. Tabellendaten bleiben erhalten, aber Rückgängig/Wiederherstellen-Verlauf und UI-Zustand (Auswahl, Scrollposition) werden zurückgesetzt.
:::

## Such-Props {#search-props}

Steuert den Zustand der Suchleiste von außerhalb der Komponente. Verwenden Sie dies zusammen mit `onSearchResults`, um eine benutzerdefinierte Such-UI zu erstellen.

| Prop | Typ | Beschreibung |
|------|------|-------------|
| `search` | [`SearchConfig`](react/types.md#searchconfig) | Kontrollierter Suchzustand. Übergeben Sie ein `SearchConfig`-Objekt, um die Suche auszulösen/zu aktualisieren. Übergeben Sie `undefined`, um die Suchleiste zu schließen. |

## Datenladeprops {#data-loading-props}

Tabellendaten von einer Remote-URL laden, anstatt sie über die `sheets`-Prop bereitzustellen.

| Prop | Typ | Beschreibung |
|------|------|-------------|
| `loadUrl` | `string` | URL, von der Tabellendaten geladen werden. Wenn sowohl `loadUrl` als auch `sheets` angegeben sind, hat `sheets` Vorrang. |
| `loadFormat` | `FileFormat` | Dateiformat-Hinweis für `loadUrl`. Standard: `"json"`. |

## Theme-Prop {#theme-prop}

Steuert das visuelle Theme der Tabelle. Da `theme` eine Laufzeit-Prop ist, wird das Widget sofort aktualisiert, wenn sich der Wert ändert.

| Prop | Typ | Beschreibung |
|------|------|-------------|
| `theme` | [`SpreadsheetTheme`](react/types.md#spreadsheettheme) | Farbthema. Integrierte Werte: `"light"`, `"dark"`, `"contrast-light"`, `"contrast-dark"`. Akzeptiert auch benutzerdefinierte Theme-Namen als Strings. Siehe [Themes](react/themes.md). |

## Container-Props {#container-props}

Standard-React-DOM-Props, die auf das Wrapper-`<div>` angewendet werden, das die Tabelle enthält. Verwenden Sie diese, um Größe und Layout zu steuern.

| Prop | Typ | Beschreibung |
|------|------|-------------|
| `className` | `string` | CSS-Klassenname, der dem Wrapper-`<div>` hinzugefügt wird. |
| `style` | `React.CSSProperties` | Inline-Stile, die auf das Wrapper-`<div>` angewendet werden. |

---

## Beispiele {#examples}

### Tabellenblätter mit Zelldaten {#sheets-with-cell-data}

Ein vollständiges `SheetData`-Beispiel mit Zellen, Zeilen- und Spaltengrößen, verbundenen Bereichen und einer fixierten Kopfzeile.

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

### Styles-Beispiel {#styles-example}

Definieren Sie benannte Stile als CSS-Eigenschaftszuordnungen in der `styles`-Prop und verweisen Sie dann über `CellData.css` namentlich auf sie.

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

### Toolbar-Anpassung {#toolbar-customization}

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    toolbarBlocks={["undo", "colors", "decoration", "align", "format"]}
/>
~~~

### Mehrseitiger Modus {#multi-sheet-mode}

Aktivieren Sie Tabellenblatt-Reiter mit `multiSheets={true}`. Übergeben Sie `false`, um die Reiterleiste vollständig auszublenden.

~~~tsx
<ReactSpreadsheet sheets={sheets} multiSheets={true} />
~~~

~~~tsx
<ReactSpreadsheet sheets={sheets} multiSheets={false} />
~~~

### Excel Import/Export {#excel-importexport}

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    importModulePath="../libs/excel2json/next/worker.js"   
    exportModulePath="../libs/json2excel/next/worker.js"   
/>
~~~

Um eine bestimmte Version zu verwenden, ersetzen Sie `next` durch die Versionsnummer (prüfen Sie die GitHub-Repositories [Excel2Json](https://github.com/dhtmlx/excel2json) und [Json2Excel](https://github.com/dhtmlx/json2excel)).

### Europäische Zahlenformatierung {#european-number-formatting}

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

### Kontrollierte Suche {#controlled-search}

Übergeben Sie ein `SearchConfig`-Objekt, um die Suchleiste programmatisch zu öffnen. Verwenden Sie `onSearchResults`, um die übereinstimmenden Zellreferenzen zu empfangen.

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

### Theme-Wechsel {#theme-switching}

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

### Schreibschutz-Modus {#read-only-mode}

~~~tsx
<ReactSpreadsheet sheets={sheets} readonly={true} />
~~~

### Daten von URL laden {#loading-data-from-url}

~~~tsx
<ReactSpreadsheet loadUrl="/api/spreadsheet-data" loadFormat="json" />
~~~

### Gesperrte Zellen {#locked-cells}

Markieren Sie einzelne Zellen mit `locked: true` als nicht bearbeitbar. Im Gegensatz zu `readonly` schützt dies bestimmte Zellen, während der Rest des Tabellenblatts bearbeitbar bleibt.

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

### Zellvalidierung {#cell-validation}

Übergeben Sie ein String-Array an `CellData.validation`, um die Zelle auf ein Dropdown mit erlaubten Werten zu beschränken.

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
