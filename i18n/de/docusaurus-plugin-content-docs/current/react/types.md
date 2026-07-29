---
sidebar_label: Types
title: Typen-Referenz
description: "TypeScript-Interfaces, Enums und Typ-Aliase, die aus @dhx/react-spreadsheet exportiert werden."
---

# Typen-Referenz {#types-reference}

Alle Typen werden aus `@dhx/react-spreadsheet` oder `@dhtmlx/trial-react-spreadsheet` exportiert.

~~~tsx
import type { SheetData, CellData, SpreadsheetRef /* ... */ } from "@dhtmlx/trial-react-spreadsheet";
~~~

## CellData {#celldata}

Der deklarative Status einer einzelnen Zelle. Alle Eigenschaften sind optional; ausgelassene Eigenschaften behalten ihren aktuellen Wert bei Aktualisierungen bei.

| Eigenschaft | Typ | Beschreibung |
|-------------|-----|--------------|
| `value` | `string \| number` | Zellenwert: Text, Zahl oder Formelzeichenkette (mit `=` als Prafix). |
| `css` | `string` | CSS-Klassenname(n), die auf Schlussel in der `styles`-Map auf oberster Ebene verweisen. |
| `format` | `string` | Zahlenformatmaske oder Alias (z. B. `"currency"` oder `"#,##0.00"`). |
| `locked` | `boolean` | Gibt an, ob die Zelle gesperrt ist (vor der Bearbeitung geschutzt). |
| `validation` | `string \| string[]` | Dropdown-Optionen fur die Datenvalidierung. |

## RowConfig {#rowconfig}

Zeilen-Metadaten. Nur Zeilen mit einer nicht standardmassigen Konfiguration benotigen Eintrage.

| Eigenschaft | Typ | Beschreibung |
|-------------|-----|--------------|
| `height` | `number` | Zeilenhohe in Pixeln. |
| `hidden` | `boolean` | Gibt an, ob die Zeile ausgeblendet ist. |

## ColConfig {#colconfig}

Spalten-Metadaten. Nur Spalten mit einer nicht standardmassigen Konfiguration benotigen Eintrage.

| Eigenschaft | Typ | Beschreibung |
|-------------|-----|--------------|
| `width` | `number` | Spaltenbreite in Pixeln. |
| `hidden` | `boolean` | Gibt an, ob die Spalte ausgeblendet ist. |

## MergedRange {#mergedrange}

Definiert einen zusammengefuhrten Zellbereich mithilfe von nullbasiert indizierten Zeilen-/Spaltenkoordinaten.

| Eigenschaft | Typ | Beschreibung |
|-------------|-----|--------------|
| `from` | `{ row: number; column: number }` | Obere linke Ecke der Zusammenfuhrung (0-indiziert). |
| `to` | `{ row: number; column: number }` | Untere rechte Ecke der Zusammenfuhrung (0-indiziert). |

**Beispiel:**

~~~ts
// A1:B2 zusammenfuhren
const merge: MergedRange = {
    from: { row: 0, column: 0 },
    to: { row: 1, column: 1 },
};
~~~

## FreezeConfig {#freezeconfig}

Konfiguration der fixierten Bereiche fur ein Blatt.

| Eigenschaft | Typ | Beschreibung |
|-------------|-----|--------------|
| `col` | `number` | Spalten bis zu dieser 0-indizierten Spaltennummer fixieren. `undefined` = keine Spaltenfixierung. |
| `row` | `number` | Zeilen bis zu dieser 0-indizierten Zeilennummer fixieren. `undefined` = keine Zeilenfixierung. |

## SheetFilter {#sheetfilter}

Filterkonfiguration fur eine Spalte innerhalb eines Blatts.

| Eigenschaft | Typ | Beschreibung |
|-------------|-----|--------------|
| `cell` | `string` | Zellreferenz, die die gefilterte Spalte identifiziert (z. B. `"A1"`). |
| `rules` | `IFilterRules[]` | Anzuwendende Filterregeln. Ein leeres Array loscht den Filter. |

## SheetSort {#sheetsort}

Sortierkonfiguration fur eine Spalte innerhalb eines Blatts.

| Eigenschaft | Typ | Beschreibung |
|-------------|-----|--------------|
| `cell` | `string` | Zellreferenz oder Bereich fur die Sortieroperation (z. B. `"B1"` oder `"A1:E8"`). Verwenden Sie einen Bereich, um mehrere Spalten gemeinsam zu sortieren und dabei die Zeilenintegritat zu wahren. |
| `dir` | `1 \| -1` | Sortierrichtung: `1` = aufsteigend, `-1` = absteigend. |

## SheetData {#sheetdata}

Vollstandiger deklarativer Status fur ein einzelnes Tabellenblatt.

| Eigenschaft | Typ | Erforderlich | Beschreibung |
|-------------|-----|:------------:|--------------|
| `id` | `Id` | Ja | Eindeutiger Blattbezeichner. Muss uber Renders hinweg stabil sein. |
| `name` | `string` | Ja | Anzeigename auf dem Blatt-Tab. |
| `cells` | `Record<string, CellData>` | Ja | Zelldaten, die durch Zellreferenz indiziert sind (z. B. `"A1"` oder `"B2"`). Nur Zellen mit nicht standardmassigen Daten benotigen Eintrage. |
| `rows` | `Record<number, RowConfig>` | Nein | Zeilenkonfiguration, die durch 0-indizierte Zeilennummer indiziert ist. |
| `cols` | `Record<number, ColConfig>` | Nein | Spaltenkonfiguration, die durch 0-indizierte Spaltennummer indiziert ist. |
| `merged` | `MergedRange[]` | Nein | Zusammengefuhrte Zellbereiche. |
| `freeze` | `FreezeConfig` | Nein | Konfiguration der fixierten Bereiche. |
| `filter` | `SheetFilter` | Nein | Spaltenfilter-Konfiguration. Auf `undefined` setzen, um zu loschen. |
| `sort` | `SheetSort` | Nein | Sortierkonfiguration. |

**Beispiel:**

~~~ts
const sheet: SheetData = {
    id: "sheet1",
    name: "Inventory",
    cells: {
        A1: { value: "Product", css: "bold" },
        B1: { value: "Quantity", css: "bold" },
        A2: { value: "Laptop" },
        B2: { value: 42 },
    },
    cols: { 0: { width: 200 } },
    freeze: { row: 1 },
};
~~~

## SearchConfig {#searchconfig}

Kontrollierter Suchstatus. Ubergeben Sie ein Objekt, um die Suche auszulosen/zu aktualisieren; ubergeben Sie `undefined`, um sie zu schliessen.

| Eigenschaft | Typ | Erforderlich | Beschreibung |
|-------------|-----|:------------:|--------------|
| `query` | `string` | Ja | Zu suchender Text. |
| `open` | `boolean` | Nein | Gibt an, ob die integrierte Suchoberfla che geoffnet werden soll. Standard: `false`. |
| `sheetId` | `Id` | Nein | Suche auf ein bestimmtes Blatt anhand der ID einschranken. |

## SpreadsheetLocale {#spreadsheetlocale}

Lokalisierungskonfiguration fur UI-Bezeichnungen und Formelnamen.

| Eigenschaft | Typ | Beschreibung |
|-------------|-----|--------------|
| `locale` | `Record<string, string>` | Uberschreibungen fur UI-Zeichenketten. Schlussel entsprechen dem Locale-Worterbuch der Bibliothek. |
| `formulas` | `Record<string, [string, string?][]>` | Lokalisierte Formelnamen, gruppiert nach Kategorie. Jeder Eintrag ist ein Tupel: `[localizedName, optionalDescription?]`. |

## SpreadsheetTheme {#spreadsheettheme}

~~~ts
type SpreadsheetTheme = "light" | "dark" | "contrast-light" | "contrast-dark" | string;
~~~

Integrierte Farbthemes. Akzeptiert auch benutzerdefinierte Theme-Namens-Zeichenketten.

## IExecuteConfig {#iexecuteconfig}

Konfiguration der Aktionsausfuhrung, die an [`onBeforeAction`](react/events.md#action-events) / [`onAfterAction`](react/events.md#action-events) ubergeben wird. Die Struktur variiert je nach Aktionstyp.

| Eigenschaft | Typ | Beschreibung |
|-------------|-----|--------------|
| `row` | `number` | Index der Zielzeile. |
| `col` | `number` | Index der Zielspalte. |
| `target` | `unknown` | Aktionsspezifisches Ziel. |
| `val` | `unknown` | Neuer Wert. |
| `prev` | `unknown` | Vorheriger Wert. |
| `action` | `Actions \| string` | Aktionsbezeichner. |
| `groupAction` | `Actions \| string` | Bezeichner der ubergeordneten Gruppenaktio n. |
| `cell` | `string` | Zellreferenz (z. B. `"A1"`). |
| `pageId` | `Id` | ID des Zielblatts. |
| `pageName` | `string` | Name des Zielblatts. |
| `[key: string]` | `unknown` | Weitere aktionsspezifische Eigenschaften. |

## SpreadsheetRef {#spreadsheetref}

Imperatives Handle, das uber `React.forwardRef` bereitgestellt wird. Ermoglicht direkten Zugriff auf die zugrunde liegende DHTMLX Spreadsheet-Instanz fur Operationen, die sich nicht auf deklarative Props abbilden lassen.

| Eigenschaft | Typ | Beschreibung |
|-------------|-----|--------------|
| `instance` | `ISpreadsheet \| null` | Die zugrunde liegende Widget-Instanz. `null` vor der Initialisierung und nach dem Aushangen. |

**Beispiel:**

~~~tsx
const ref = useRef<SpreadsheetRef>(null);

// Daten serialisieren
const data = ref.current?.instance?.serialize();

// Programmgesteuerte Auswahl
ref.current?.instance?.selection.setSelectedCell("A1:C5");

// Ruckgangig/Wiederholen
ref.current?.instance?.undo();
ref.current?.instance?.redo();
~~~

## Actions-Enum {#actions-enum}

Bekannte Spreadsheet-Aktionsbezeichner. Werden in [`onBeforeAction`](react/events.md#action-events) / [`onAfterAction`](react/events.md#action-events) fur typensicheres Aktions-Matching verwendet. Die `| string`-Union bei Handler-Parametern ermoglicht Vorwartskompatibilitat mit kunftigen Aktionen.

| Wert | Beschreibung |
|------|--------------|
| `setCellStyle` | CSS-Stil auf Zelle(n) anwenden. |
| `setCellValue` | Zellenwert setzen. |
| `setCellFormat` | Zahlenformat auf Zelle(n) setzen. |
| `removeCellStyles` | CSS-Stile von Zelle(n) entfernen. |
| `lockCell` | Zelle(n) sperren oder entsperren. |
| `deleteRow` | Zeile(n) loschen. |
| `addRow` | Zeile(n) einfugen. |
| `deleteColumn` | Spalte(n) loschen. |
| `addColumn` | Spalte(n) einfugen. |
| `groupAction` | Batch-Aktion (mehrere Unteraktionen). |
| `groupRowAction` | Batch-Zeilenaktion. |
| `groupColAction` | Batch-Spaltenaktion. |
| `addSheet` | Neues Blatt hinzufugen. |
| `deleteSheet` | Blatt loschen. |
| `renameSheet` | Blatt umbenennen. |
| `clearSheet` | Alle Daten in einem Blatt loschen. |
| `clear` | Ausgewahlte Zellen loschen. |
| `resizeCol` | Spaltenbreite andern. |
| `resizeRow` | Zeilenhohe andern. |
| `setValidation` | Datenvalidierung fur Zelle(n) festlegen. |
| `sortCells` | Zellen sortieren. |
| `insertLink` | Hyperlink einfugen. |
| `fitColumn` | Spaltenbreite automatisch an den Inhalt anpassen. |
| `filter` | Spaltenfilter anwenden oder andern. |
| `merge` | Zellen zusammenfuhren. |
| `unmerge` | Zusammenfuhrung von Zellen aufheben. |
| `toggleFreeze` | Fixierte Bereiche umschalten. |
| `toggleVisibility` | Sichtbarkeit von Zeilen/Spalten umschalten. |

## Handler-Typ-Aliase {#handler-type-aliases}

Komfort-Aliase fur die Funktionssignaturen, die von Event-Callback-Props verwendet werden. Importieren Sie diese, um Ihre Handler-Funktionen explizit zu annotieren.

<div className="overflow-table">

| Typ | Signatur | Verwendet von |
|-----|----------|---------------|
| `BeforeActionHandler` | `(action: Actions \| string, config: IExecuteConfig) => boolean \| void` | `onBeforeAction` |
| `AfterActionHandler` | `(action: Actions \| string, config: IExecuteConfig) => void` | `onAfterAction` |
| `BeforeCellHandler` | `(cell: string) => boolean \| void` | `onBeforeSelectionSet`, `onBeforeSelectionRemove`, `onBeforeFocusSet` |
| `AfterCellHandler` | `(cell: string) => void` | `onAfterSelectionSet`, `onAfterSelectionRemove`, `onAfterFocusSet` |
| `BeforeEditHandler` | `(cell: string, value: string) => boolean \| void` | `onBeforeEditStart`, `onBeforeEditEnd` |
| `AfterEditHandler` | `(cell: string, value: string) => void` | `onAfterEditStart`, `onAfterEditEnd` |
| `BeforeSheetHandler` | `(sheet: ISheet) => boolean \| void` | `onBeforeSheetChange` |
| `AfterSheetHandler` | `(sheet: ISheet) => void` | `onAfterSheetChange` |

</div>

## SpreadsheetConfigProps {#spreadsheetconfigprops}

~~~ts
type SpreadsheetConfigProps = Omit<
    ISpreadsheetConfig,
    "leftSplit" | "topSplit" | "dateFormat" | "timeFormat"
>;
~~~

Basistyp fur Komponenten-Props. Stellt alle `ISpreadsheetConfig`-Konstruktoroptionen als flache Props bereit.

## Erneut exportierte Upstream-Typen {#re-exported-upstream-types}

Diese Typen werden der Einfachheit halber aus `@dhx/ts-spreadsheet` erneut exportiert:

| Typ | Beschreibung |
|-----|--------------|
| `ISpreadsheet` | Hauptinterface der Spreadsheet-Widget-Instanz. |
| `ISpreadsheetConfig` | Konstruktor-Konfigurationsinterface. |
| `ISheet` | Blatt-Instanz-Interface (verwendet in Blatt-Event-Callbacks). |
| `IFormats` | Definition benutzerdefinierter Zahlenformate. |
| `IFilterRules` | Konfiguration von Filterregeln. |
| `IFilter` | Filter-Instanz-Interface. |
| `IStylesList` | Stildefinitions-Map. |
| `IDataWithStyles` | Datenstruktur mit eingebetteten Stilen (verwendet von `serialize()`/`parse()`). |
| `ICellInfo` | Zellinformationen, die von Widget-Methoden zuruckgegeben werden. |
| `FileFormat` | Dateiformat fur das Laden von Daten (z. B. `"json"` oder `"xlsx"`). |
| `ToolbarBlocks` | Bezeichner fur Toolbar-Blocke (z. B. `"default"`, `"undo"` oder `"font"`). |
| `FilterConditions` | Enum der verfugbaren Filterbedingungstypen. |
| `Id` | Generischer Bezeichnertyp (*string \| number*). |
