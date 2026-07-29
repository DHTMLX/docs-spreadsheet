---
sidebar_label: Datenladen und -export
title: Daten laden
description: In dieser Dokumentation erfahren Sie, wie Sie Daten in der DHTMLX JavaScript Spreadsheet-Bibliothek laden. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# Datenladen und -export {#data-loading-and-export}

Sie können DHTMLX Spreadsheet mit einem vorbereiteten Datensatz befüllen, der sowohl Zelldaten als auch Stile enthalten kann. Die Komponente unterstützt zwei Möglichkeiten zum Laden von Daten:

- Laden aus einer externen Datei
- Laden aus einer lokalen Quelle

Die Komponente unterstützt auch den [Export von Daten in eine Excel-Datei](#exporting-data).

## Daten vorbereiten {#preparing-data}

DHTMLX Spreadsheet erwartet Daten im JSON-Format.

Es kann ein einfaches Array mit Zell-Objekten sein. Verwenden Sie diese Methode, wenn Sie einen Datensatz für nur ein Tabellenblatt erstellen möchten.

~~~jsx  title="Daten für ein Tabellenblatt vorbereiten"
const data = [
    { cell: "A1", value: "Country" },
    { cell: "B1", value: "Product" },
    { cell: "C1", value: "Price" },
    { cell: "D1", value: "Amount" },
    { cell: "E1", value: "Total Price" },

    { cell: "A2", value: "Ecuador" },
    { cell: "B2", value: "Banana" },
    { cell: "C2", value: 6.68, format:"currency" },
    { cell: "D2", value: 430, format:"percent" },
    // "myFormat" ist die ID eines benutzerdefinierten Formats
    { cell: "E2", value: 2872.4, format:"myFormat" },
    
    // Dropdown-Listen zu Zellen hinzufügen
    { cell: "A9", value: "Turkey", editor: {type: "select", options: ["Turkey","India","USA","Italy"]} },
    { cell: "B9", value: "", editor: {type: "select", options: "B2:B8" } },

    // weitere Zell-Objekte
];
~~~

Oder es kann ein Objekt mit Daten sein, die gleichzeitig in mehrere Tabellenblätter geladen werden. Zum Beispiel:

~~~jsx title="Daten für mehrere Tabellenblätter vorbereiten"
const data = {
    sheets: [
        { 
            name: "sheet 1", 
            id: "sheet_1",
            data: [
                { cell: "A1", value: "Country" },
                { cell: "B1", value: "Product" },
                // weitere Daten
            ],
            merged: [
                // Zellen A1 und B1 zusammenführen
                { from: { column: 0, row: 0 }, to: { column: 1, row: 0 } },
                // Zellen A2, A3, A4 und A5 zusammenführen
                { from: { column: 0, row: 1 }, to: { column: 0, row: 4 } },
            ]
        }, 
        { 
            name: "sheet 2", 
            id: "sheet_2", 
            data: [
                { cell: "A1", value: "Country" },
                { cell: "B1", value: "Product" },
                // weitere Daten
            ]
        },
        // weitere Tabellenblatt-Objekte
    ]
};
~~~

Die vollständigen Listen der verfügbaren Eigenschaften für diese beiden Methoden finden Sie in der [API-Referenz](api/spreadsheet_parse_method.md).

:::tip
Die Möglichkeit, zusammengeführte Zellen zu laden, ist nur verfügbar, wenn Sie Daten in einem Tabellenblatt-Objekt vorbereiten.
:::

### Stile für Zellen festlegen {#setting-styles-for-cells}

Möglicherweise müssen Sie das Zell-Styling im Datensatz definieren. In diesem Fall sollte der Datensatz ein Objekt mit *separaten Eigenschaften* sein, die Datenobjekte und CSS-Klassen beschreiben, die auf bestimmte Zellen angewendet werden.

Legen Sie eine CSS-Klasse für eine Zelle mit der `css`-Eigenschaft fest.

~~~jsx
const styledData = {
    styles: {
        someclass: {
            background: "#F2F2F2",
            color: "#F57C00"
        }
    },
    data: [
        { cell: "A1", value: "Country" },
        { cell: "B1", value: "Product" },
        { cell: "C1", value: "Price" },
        { cell: "D1", value: "Amount" },
        { cell: "E1", value: "Total Price" },

        { cell: "A2", value: "Ecuador" },
        { cell: "B2", value: "Banana" },
        { cell: "C2", value: 6.68, css: "someclass" },
        { cell: "D2", value: 430, css: "someclass" },
        { cell: "E2", value: 2872.4 }
    ],
}
~~~

:::info
[Sehen Sie die Liste der Eigenschaften, die Sie für das Styling von Zellen verwenden können](api/spreadsheet_parse_method.md#list-of-properties)
:::

### Gesperrten Zustand einer Zelle festlegen {#setting-the-locked-state-for-a-cell}

Wenn Sie gesperrte Zellen in einem Datensatz angeben möchten, verwenden Sie die `locked`-Eigenschaft einer Zelle und setzen Sie sie auf `true`:

~~~jsx
const dataset = [
    { cell: "a1", value: "Country", locked: true }, // sperrt eine Zelle
    { cell: "b1", value: "Product", locked: true },   

    { cell: "a2", value: "Ecuador" },
    { cell: "b2", value: "Banana" },

    { cell: "a3", value: "Belarus" },
    { cell: "b3", value: "Apple" },
    // weitere Zellen
];
~~~

Die vollständige Liste der verfügbaren Zell-Eigenschaften finden Sie in der [API-Referenz](api/spreadsheet_parse_method.md#parameters).

**Verwandtes Beispiel**: [Spreadsheet. Gesperrte Zellen](https://snippet.dhtmlx.com/czeyiuf8?tag=spreadsheet)

### Einen Link in eine Zelle einfügen {#adding-a-link-into-a-cell}

Sie können einen Link für eine Zelle direkt im Datensatz angeben. Dazu setzen Sie die `link`-Eigenschaft als Objekt und geben die erforderlichen Einstellungen an:

- `text` - (optional) der Text eines Links
- `href` - (erforderlich) die URL, die das Link-Ziel definiert

So sieht es in einem Datensatz aus:

~~~jsx
const dataset = [
    { cell: "a1", value: "Country"}, // sperrt eine Zelle
    { cell: "b1", value: "Product"},   

    { cell: "a2", value: "Ecuador"},
    { 
        cell: "b2", 
        value: "Banana", 
        link:{
            href:"http://localhost:8080/"
        } 
    },
    // weitere Zellen
];
~~~

:::note
Beachten Sie, dass Sie die `value`-Eigenschaft des `cell`-Objekts und die `text`-Eigenschaft des `link`-Objekts nicht gleichzeitig verwenden sollten, da sie sich gegenseitig ausschließen.
:::

**Verwandtes Beispiel**: [Spreadsheet. Import und Export nach JSON](https://snippet.dhtmlx.com/e3xct53l?tag=spreadsheet)

## Externes Datenladen {#external-data-loading}

### JSON-Daten laden {#loading-json-data}

Standardmäßig erwartet Spreadsheet Daten im JSON-Format. Um Daten aus einer externen Quelle zu laden, verwenden Sie die Methode [](api/spreadsheet_load_method.md). Sie nimmt die URL der Datei mit den Daten als Parameter entgegen:

~~~jsx
var spreadsheet = new dhx.Spreadsheet("spreadsheet");
spreadsheet.load("../common/data.json");
~~~

**Verwandtes Beispiel**: [Spreadsheet. Daten laden](https://snippet.dhtmlx.com/ih9zmc3e?tag=spreadsheet)


:::info
Wenn Sie es Benutzern ermöglichen möchten, eine JSON-Datei über den Datei-Explorer in das Spreadsheet zu importieren, lesen Sie [JSON-Dateien laden](api/spreadsheet_load_method.md#loading-json-files).
:::

### CSV-Daten laden {#loading-csv-data}

Sie können auch Daten im CSV-Format laden. Dazu müssen Sie die Methode [](api/spreadsheet_load_method.md) aufrufen und den Namen des Formats ("csv") als zweiten Parameter übergeben:

~~~jsx
var spreadsheet = new dhx.Spreadsheet("spreadsheet");
spreadsheet.load("../common/data.csv", "csv");
~~~

**Verwandtes Beispiel**: [Spreadsheet. CSV laden](https://snippet.dhtmlx.com/1f87y71v?tag=spreadsheet)

### Excel-Datei laden (.xlsx) {#loading-excel-file-xlsx}

Sie können eine Datei im Excel-Format mit der Erweiterung `.xlsx` in ein Spreadsheet laden. In der Benutzeroberfläche gibt es entsprechende Steuerelemente in der Symbolleiste und im Menü:

- Menü: Datei -> Importieren als..-> Microsoft Excel(.xlsx)

![DHTMLX Spreadsheet Dateimenü mit der Option "Importieren als" für Microsoft Excel XLSX-Dateien](/img/file_import.png)

- Symbolleiste: Importieren -> Microsoft Excel(.xlsx)

![DHTMLX Spreadsheet Symbolleiste mit der Importschaltfläche für Microsoft Excel XLSX-Dateien](/img/import_xlsx.png)

#### So importieren Sie Daten {#how-to-import-data}

{{note Beachten Sie, dass die Import-Funktion in Internet Explorer nicht funktioniert.}}

DHTMLX Spreadsheet verwendet die WebAssembly-basierte Bibliothek [Excel2Json](https://github.com/dhtmlx/excel2json), um Daten aus Excel zu importieren. Um Excel-Daten in Spreadsheet zu laden, müssen Sie:

- die Bibliothek **Excel2Json** installieren
- die Option [](api/spreadsheet_importmodulepath_config.md) in der Spreadsheet-Konfiguration angeben und den Pfad zur *worker.js*-Datei auf eine von zwei Arten festlegen:
  - indem Sie einen lokalen Pfad zur Datei auf Ihrem Computer angeben, z. B.: `"../libs/excel2json/1.0/worker.js"`
  - indem Sie einen Link zur Datei von CDN angeben: `"https://cdn.dhtmlx.com/libs/excel2json/1.0/worker.js"`

~~~jsx
var spreadsheet = new dhx.Spreadsheet(document.body, {          
    importModulePath: "../libs/excel2json/1.0/worker.js"
});
~~~

**Verwandtes Beispiel**: [Spreadsheet. Benutzerdefinierter Import-/Exportpfad](https://snippet.dhtmlx.com/wykwzfhm)

Um Daten aus einer Excel-Datei zu laden, übergeben Sie einen String mit dem Erweiterungstyp ("xlsx") als zweiten Parameter der Methode [](api/spreadsheet_load_method.md):

~~~jsx
// nur .xlsx
spreadsheet.load("../common/data.xlsx", "xlsx");
~~~

{{note Beachten Sie, dass die Komponente nur den Import aus Excel-Dateien mit der Erweiterung `.xlsx` unterstützt.}}

**Verwandtes Beispiel**: [Spreadsheet. Xlsx importieren](https://snippet.dhtmlx.com/cqlpy828?tag=spreadsheet)

Sie können bei Bedarf auch [Daten aus einem Spreadsheet in eine Excel-Datei exportieren](#exporting-data).

### Nach dem Laden ausgeführten Code verarbeiten {#processing-after-loading-code}

Die Komponente führt einen AJAX-Aufruf durch und erwartet, dass die Remote-URL gültige Daten liefert. Das Laden von Daten ist asynchron, daher müssen Sie jeden Code, der nach dem Laden ausgeführt werden soll, in ein Promise einschließen:

~~~jsx
spreadsheet.load("/some/data").then(function(){
   // etwas tun
});
~~~

## Laden aus einer lokalen Quelle {#loading-from-local-source}

Um Daten aus einer lokalen Quelle zu laden, verwenden Sie die Methode [](api/spreadsheet_parse_method.md). Übergeben Sie einen [vorbereiteten Datensatz](#preparing-data) als Parameter dieser Methode:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet");
spreadsheet.parse(data);
~~~

**Verwandtes Beispiel**: [Spreadsheet. Benutzerdefinierte Zellenanzahl](https://snippet.dhtmlx.com/vc3mstsw)

Einzelheiten zum Laden mehrerer Tabellenblätter in das Spreadsheet finden Sie im Artikel [Mit Tabellenblättern arbeiten](working_with_sheets.md#loading-multiple-sheets).

## Zustand speichern und wiederherstellen {#saving-and-restoring-state}

Um den aktuellen Zustand eines Spreadsheets zu speichern, verwenden Sie die Methode [](api/spreadsheet_serialize_method.md). Sie konvertiert Daten in ein Array von JSON-Objekten. Jedes JSON-Objekt enthält die Konfiguration einer Zelle.

~~~jsx
// Zustand von spreadsheet1 speichern
var state = spreadsheet1.serialize();
~~~

Anschließend können Sie die im gespeicherten Zustand-Array gespeicherten Daten in ein anderes Spreadsheet einlesen. Zum Beispiel:

~~~jsx
// ein neues Spreadsheet erstellen
var spreadsheet2 = new dhx.Spreadsheet(document.body);
// den Zustand von spreadsheet1 in spreadsheet2 einlesen
spreadsheet2.parse(state);
~~~

## Daten exportieren {#exporting-data}

### Export nach Excel {#export-into-excel}

DHTMLX Spreadsheet kann Daten aus einem Spreadsheet in eine Excel-Datei exportieren. In der Benutzeroberfläche gibt es entsprechende Steuerelemente in der Symbolleiste und im Menü:

- Menü: Datei -> Herunterladen als..-> Microsoft Excel(.xlsx)

![DHTMLX Spreadsheet Dateimenü mit der Option "Herunterladen als" für den Microsoft Excel XLSX-Export](/img/file_export.png)

- Symbolleiste: Exportieren -> Microsoft Excel(.xlsx)

![DHTMLX Spreadsheet Symbolleiste mit der Exportschaltfläche zum Speichern als Microsoft Excel XLSX](/img/export_xlsx.png)

#### So exportieren Sie Daten {#how-to-export-data}

:::note 
Beachten Sie, dass die Export-Funktion in Internet Explorer nicht funktioniert.
:::

Die Bibliothek verwendet die WebAssembly-basierte Bibliothek [Json2Excel](https://github.com/dhtmlx/json2excel), um Daten nach Excel zu exportieren. Der Export wird in der *worker.js*-Datei der Bibliothek **Json2Excel** verarbeitet (der Standard-Link ist `https://cdn.dhtmlx.com/libs/json2excel/next/worker.js?vx`). Sie können entweder den öffentlichen Export-Server oder einen lokalen Export-Server verwenden. Um Dateien zu exportieren, müssen Sie:

- die Option [](api/spreadsheet_exportmodulepath_config.md) in der Spreadsheet-Konfiguration angeben und den Pfad zur *worker.js*-Datei festlegen:
    - wenn Sie den öffentlichen Export-Server verwenden, müssen Sie den Link dazu nicht angeben, da er standardmäßig verwendet wird
    - wenn Sie Ihren eigenen Export-Server verwenden, müssen Sie:
        - die Bibliothek [**Json2Excel**](https://github.com/dhtmlx/json2excel) installieren
        - `"../libs/json2excel/x.x/worker.js?vx"` für eine bestimmte Version verwenden (ersetzen Sie `x.x` durch die auf Ihrem Server bereitgestellte Version)

~~~jsx
var spreadsheet = new dhx.Spreadsheet(document.body, {          
    exportModulePath: "../libs/json2excel/x.x/worker.js?vx" // der Pfad zum Exportmodul, wenn ein lokaler Export-Server verwendet wird
});
~~~

**Verwandtes Beispiel**: [Spreadsheet. Benutzerdefinierter Import-/Exportpfad](https://snippet.dhtmlx.com/wykwzfhm)

Sobald Sie die erforderlichen Quellen angepasst haben, können Sie die zugehörige API-Methode [](api/export_xlsx_method.md) des Export-Objekts verwenden, um die Daten der Komponente zu exportieren, wie folgt:

~~~jsx
spreadsheet.export.xlsx();
~~~

**Verwandtes Beispiel**: [Spreadsheet. Xlsx exportieren](https://snippet.dhtmlx.com/btyo3j8s?tag=spreadsheet)

:::note 
Bitte beachten Sie, dass die Komponente nur den Export in Excel-Dateien mit der Erweiterung `.xlsx` unterstützt.
:::

#### So legen Sie einen benutzerdefinierten Namen für eine exportierte Datei fest {#how-to-set-a-custom-name-for-an-exported-file}

Standardmäßig lautet der Name einer exportierten Datei "data". Sie können einen eigenen Namen für eine exportierte Datei angeben. Dazu müssen Sie einen benutzerdefinierten Namen als Parameter der Methode [](api/export_xlsx_method.md) übergeben:

~~~jsx
spreadsheet.export.xlsx("MyData");
~~~

**Verwandtes Beispiel**: [Spreadsheet. Xlsx exportieren](https://snippet.dhtmlx.com/btyo3j8s?tag=spreadsheet)

Sehen Sie die Schritte zum [Importieren von Daten aus einer Excel-Datei in Spreadsheet](#loading-excel-file-xlsx).

### Export nach JSON {#export-into-json}

Ab v4.3 kann die Bibliothek auch Daten aus einem Spreadsheet in eine JSON-Datei exportieren. Verwenden Sie dazu die Methode [json()](api/export_json_method.md) des Export-Objekts:

~~~jsx
spreadsheet.export.json();
~~~

**Verwandtes Beispiel**: [Spreadsheet. Export/Import JSON](https://snippet.dhtmlx.com/e3xct53l)
