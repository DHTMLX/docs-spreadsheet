---
sidebar_label: parse()
title: parse-Methode
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die parse-Methode. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# parse()

### Beschreibung {#description}

@short: Lädt Daten aus einer lokalen Datenquelle in die Tabelle

### Verwendung {#usage}

~~~jsx title="Daten in ein Tabellenblatt laden"
parse([
    {
        cell: string,
        value: string | number | Date,
        css?: string,
        format?: string,
        editor?: {
            type: string, // type: "select"
            options: string | array
        },
        locked?: boolean,
        link?: {
            text?: string,
            href: string
        }
    },
    // weitere Zell-Objekte
]): void;
~~~

~~~jsx title="Daten in mehrere Tabellenblätter laden"
parse({
    sheets: [
        {
            name?: string,
            id?: string,
            cols?: [
                {
                    width?: number,
                    hidden?: boolean,
                },
                // weitere Spalten-Objekte
            ],
            rows?: [
                {
                    height?: number,
                    hidden?: boolean,
                },
                // weitere Zeilen-Objekte
            ],
            data: [
                {
                    cell: string,
                    value: string | number | Date,
                    css: string,
                    format?: string,
                    editor?: {
                        type: string, // type: "select"
                        options: string | array
                    },
                    locked?: boolean,
                    link?: {
                        text?: string,
                        href: string
                    }
                },
                // weitere Zell-Objekte
            ],
            merged?: [
                { 
                    from: { column: index, row: index }, 
                    to: { column: index, row: index }
                },
                // weitere Objekte
            ],
            freeze?: {
               col?: number,
               row?: number,
            }
        },
        // weitere Tabellenblatt-Objekte
    ]      
}): void;
~~~

### Parameter {#parameters}

Wenn Sie einen Datensatz *für ein einzelnes Tabellenblatt* erstellen möchten, geben Sie die Daten als **Array von Zell-Objekten** an. Für jedes **Zell**-Objekt können Sie die folgenden Parameter angeben:

- `cell` - (erforderlich) die ID einer Zelle, die aus "ID der Spalte + ID der Zeile" gebildet wird, zum Beispiel A1
- `value` - (erforderlich) der Wert einer Zelle
- `css` - (optional) der Name der CSS-Klasse
- `format` - (optional) der Name des [Standard-Zahlenformats](number_formatting.md#default-number-formats) oder eines [benutzerdefinierten Formats](number_formatting.md#formats-customization), das Sie zum Anwenden auf den Zellwert hinzugefügt haben
- `editor` - (optional) ein Objekt mit Konfigurationseinstellungen für den Editor einer Zelle:
    - `type` - (erforderlich) der Typ des Zell-Editors: "select"
    - `options` - (erforderlich) entweder ein Zellbereich ("A1:B8") oder ein Array von Zeichenkettenwerten
- `locked` - (optional) legt fest, ob eine Zelle gesperrt ist; standardmäßig `false`
- `link` - (optional) ein Objekt mit Konfigurationseinstellungen für den in eine Zelle eingefügten Link:
    - `text` - (optional) der Text eines Links
    - `href` - (erforderlich) die URL, die das Linkziel definiert

<br>

Wenn Sie einen Datensatz *für mehrere Tabellenblätter* gleichzeitig erstellen möchten, geben Sie die Daten als **Objekt** mit dem folgenden Parameter an:

- `sheets` - (erforderlich) ein Array von **Tabellenblatt**-Objekten. Jedes Objekt hat die folgenden Eigenschaften:
    - `name` - (optional) der Name des Tabellenblatts
    - `id` - (optional) die ID des Tabellenblatts
    - `rows` - (optional) ein Array von Objekten mit Zeilenkonfigurationen. Jedes Objekt kann die folgenden Eigenschaften enthalten:
        - `height` - (optional) die Zeilenhöhe. Wenn nicht angegeben, haben Zeilen eine Höhe von 32px
        - `hidden` - (optional) legt die Sichtbarkeit einer Zeile fest
    - `cols` - (optional) ein Array von Objekten mit Spaltenkonfigurationen. Jedes Objekt kann die folgenden Eigenschaften enthalten:
        - `width` - (optional) die Spaltenbreite. Wenn nicht angegeben, haben Spalten eine Breite von 120px
        - `hidden` - (optional) legt die Sichtbarkeit einer Spalte fest
    - `data` - (erforderlich) ein Array von **Zell**-Objekten. Jedes Objekt hat die folgenden Eigenschaften:
        - `cell` - (erforderlich) die ID einer Zelle, die aus "ID der Spalte + ID der Zeile" gebildet wird, zum Beispiel A1
        - `value` - (erforderlich) der Wert einer Zelle
        - `css` - (optional) der Name der CSS-Klasse
        - `format` - (optional) der Name des [Standard-Zahlenformats](number_formatting.md#default-number-formats) oder eines [benutzerdefinierten Formats](number_formatting.md#formats-customization), das Sie zum Anwenden auf den Zellwert hinzugefügt haben
        - `editor` - (optional) ein Objekt mit Konfigurationseinstellungen für den Editor einer Zelle:
            - `type` - (erforderlich) der Typ des Zell-Editors: "select"
            - `options` - (erforderlich) entweder ein Zellbereich ("A1:B8") oder ein Array von Zeichenkettenwerten
        - `locked` - (optional) legt fest, ob eine Zelle gesperrt ist; standardmäßig `false`
        - `link` - (optional) ein Objekt mit Konfigurationseinstellungen für den in eine Zelle eingefügten Link:
            - `text` - (optional) der Text eines Links
            - `href` - (erforderlich) die URL, die das Linkziel definiert
    - `merged` - (optional) ein Array von Objekten, wobei jedes Objekt einen Zellbereich definiert, der zusammengeführt werden soll. Jedes Objekt muss die folgenden Eigenschaften enthalten:
        - `from` - ein Objekt, das die Position der ersten Zelle im Bereich definiert:
            - `column` - der Index der Spalte
            - `row` - der Index der Zeile
        - `to` - ein Objekt, das die Position der letzten Zelle im Bereich definiert:
            - `column` - der Index der Spalte
            - `row` - der Index der Zeile
    - `freeze` - (optional) ein Objekt, das fixierte Spalten/Zeilen für bestimmte Tabellenblätter festlegt und anpasst. Es kann die folgenden Eigenschaften enthalten:
        - `col` - (optional) gibt die Anzahl der fixierten Spalten an (z. B. 2); standardmäßig `0`
        - `row` - (optional) gibt die Anzahl der fixierten Zeilen an (z. B. 2); standardmäßig `0`

:::info
Wenn die Konfigurationsoption [`multisheets`](api/spreadsheet_multisheets_config.md) auf `false` gesetzt ist, wird nur ein Tabellenblatt erstellt.
:::

### Beispiel {#example}

~~~jsx {22} title="Beispiel 1. Daten in ein Tabellenblatt laden"
const data = [
    { cell: "A1", value: "Country" },
    { cell: "B1", value: "Product" },
    { cell: "C1", value: "Price" },
    { cell: "D1", value: "Amount" },
    { cell: "E1", value: "Total Price" },

    { cell: "A2", value: "Ecuador" },
    { cell: "B2", value: "Banana" },
    { cell: "C2", value: 6.68, css: "someclass" },
    { cell: "D2", value: 430 },
    { cell: "E2", value: 2872.4 },
    
    // Dropdown-Listen zu Zellen hinzufügen
    { cell: "A9", value: "Turkey", editor: {type: "select", options: ["Turkey","India","USA","Italy"]} },
    { cell: "B9", value: "", editor: {type: "select", options: "B2:B8" } },

    // weitere Daten
];

const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);
~~~

~~~jsx title="Beispiel 2. Daten in mehrere Tabellenblätter laden"
const data = {
    sheets: [
        { 
            name: "sheet 1", 
            id: "sheet_1",
            rows: [
                { height: 50, hidden: true }, // Konfiguration der ersten Zeile
                { height: 50 }, // Konfiguration der zweiten Zeile
                // die Höhe der anderen Zeilen beträgt 32
            ],
            cols: [
                { width: 300 }, // Konfiguration der ersten Spalte
                { width: 300, hidden: true }, // Konfiguration der zweiten Spalte
                // die Breite der anderen Spalten beträgt 120
            ],
            data: [
                { cell: "A1", value: "Country" },
                { cell: "B1", value: "Product" }
            ],
            merged: [
                // Zellen A1 und B1 zusammenführen
                { from: { column: 0, row: 0 }, to: { column: 1, row: 0 } },
                // Zellen A2, A3, A4 und A5 zusammenführen
                { from: { column: 0, row: 1 }, to: { column: 0, row: 4 } }
            ],
            freeze: {
                col: 2,
                row: 2
            },
        }, 
        { 
            name: "sheet 2", 
            id: "sheet_2", 
            data: [
                { cell: "A1", value: "Country" },
                { cell: "B1", value: "Product" },
            ]
        }
    ]
};

spreadsheet.parse(data);
~~~

## Styled Daten parsen {#parsing-styled-data}

Sie können beim Vorbereiten eines Datensatzes auch bestimmte Stile für Zellen hinzufügen. Definieren Sie dazu die Daten als Objekt mit zwei Parametern:

- `styles` - (erforderlich) ein Objekt mit CSS-Klassen, die auf bestimmte Zellen angewendet werden sollen. [Weitere Details unten](#list-of-properties)
- `data` - (erforderlich) die zu ladenden Daten

~~~jsx
const styledData = {
    styles: {
        someclass: {
            background: "#F2F2F2",
            color: "#F57C00"
        }
    },
    data: [
        { cell: "a1", value: "Country" },
        { cell: "b1", value: "Product" },
        { cell: "c1", value: "Price" },
        { cell: "d1", value: "Amount" },
        { cell: "e1", value: "Total Price" },

        { cell: "a2", value: "Ecuador" },
        { cell: "b2", value: "Banana" },
        { cell: "c2", value: 6.68, css: "someclass" },
        { cell: "d2", value: 430, css: "someclass" },
        { cell: "e2", value: 2872.4 }
    ],
};

const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(styledData);
~~~

:::info
Legen Sie eine CSS-Klasse für eine Zelle mit der Eigenschaft `css` fest.
:::

### Liste der Eigenschaften {#list-of-properties}

Die Liste der Eigenschaften, die Sie im `styles`-Objekt angeben können:

- `background`
- `color`
- `textAlign`
- `verticalAlign`
- `textDecoration`
- `fontWeight`
- `fontStyle`
- `multiline: "wrap"` (ab v5.0.3)
- `border`, `border-right`, `border-left`, `border-top`, `border-bottom` (ab v5.2)

:::note
Bei Bedarf können Sie auch die folgenden Eigenschaften verwenden:

- `fontSize`
- `font`
- `fontFamily`
- `textShadow`

In manchen Fällen funktionieren diese jedoch möglicherweise nicht wie erwartet (z. B. bei der Verwendung von `position: absolute` oder `display: box`).
:::

**Changelog:**

- Die Eigenschaft `freeze` sowie der Parameter `hidden` für die Eigenschaften `rows` und `cols` des `sheets`-Objekts wurden in v5.2 hinzugefügt
- Die Eigenschaften `locked` und `link` des `cell`-Objekts wurden in v5.1 hinzugefügt
- Die Eigenschaft `merged` des `sheets`-Objekts wurde in v5.0 hinzugefügt
- Die Eigenschaft `editor` des `cell`-Objekts wurde in v4.3 hinzugefügt
- Die Eigenschaften `rows` und `cols` des `sheets`-Objekts wurden in v4.2 hinzugefügt
- Die Möglichkeit, Daten für mehrere Tabellenblätter vorzubereiten, wurde in v4.1 hinzugefügt

**Verwandter Artikel:** [Datenladen und -export](loading_data.md)

**Verwandte Beispiele**:

- [Spreadsheet. Styled Daten](https://snippet.dhtmlx.com/abnh7glb)
- [Spreadsheet. Initialisierung mit mehreren Tabellenblättern](https://snippet.dhtmlx.com/ihtkdcoc)
- [Spreadsheet. Initialisierung mit zusammengeführten Zellen](https://snippet.dhtmlx.com/0vtukep9)
