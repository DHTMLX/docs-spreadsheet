---
sidebar_label: serialize()
title: serialize-Methode
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die serialize-Methode. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# serialize()

### Beschreibung {#description}

@short: Serialisiert die Tabellendaten in ein JSON-Objekt

### Verwendung {#usage}

~~~jsx
serialize(): {
    sheets: [
        {
            name: string,
            id: string,
            data: [
                {
                    cell: string,
                    value?: string | number,
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
                // more cell objects
            ],
            cols: [
                {
                    width: number,
                    hidden: boolean
                },
                // more column objects
            ],
            rows: [
                {
                    height: number,
                    hidden: boolean
                },
                // more row objects
            ],
            merged: [
                {
                    from: { column: number, row: number },
                    to: { column: number, row: number }
                },
                // more objects
            ],
            freeze: {
                col: number,
                row: number
            }
        },
        // more sheet objects
    ],
    styles: object,
    formats: array
};
~~~

### Rückgabewert {#returns}

Die Methode gibt ein serialisiertes JSON-Objekt mit den folgenden Attributen zurück:

- `formats` - ein Array von Objekten mit Zahlenformaten
- `styles` - ein Objekt mit den angewendeten CSS-Klassen, wobei ein Schlüssel der Name einer Klasse und ein Wert ein Objekt mit deren Stileigenschaften ist
- `sheets` - ein Array von Tabellenblatt-Objekten. Jedes Objekt enthält die folgenden Attribute:
    - `name` - der Name des Tabellenblatts
    - `id` - die ID des Tabellenblatts
    - `data` - ein Array von Zellobjekten. Jedes Objekt enthält das Attribut `cell` mit der Zell-ID sowie die Attribute, die für die Zelle gesetzt wurden: `value`, `css`, `format`, `editor`, `locked`, `link`
    - `cols` - ein Array von Objekten mit Spaltenkonfigurationen. Jedes Objekt enthält die Attribute `width` und `hidden`
    - `rows` - ein Array von Objekten mit Zeilenkonfigurationen. Jedes Objekt enthält die Attribute `height` und `hidden`
    - `merged` - ein Array von Objekten, wobei jedes Objekt über die Attribute `from` und `to` einen Bereich verbundener Zellen definiert
    - `freeze` - ein Objekt mit der Anzahl der fixierten Spalten und Zeilen, `{ col: 0, row: 0 }`, wenn nichts fixiert ist

Beachten Sie:

- die Attribute `merged` und `freeze` sind immer im Tabellenblatt-Objekt vorhanden, ebenso wie das Attribut `hidden` im Spalten- oder Zeilenobjekt, das `false` ist, wenn die Spalte oder Zeile sichtbar ist
- die Arrays `cols` und `rows` decken den Datenbereich eines Tabellenblatts ab und werden darüber hinaus erweitert, wenn eine Spaltenbreite, eine Zeilenhöhe oder ein `hidden`-Zustand außerhalb dieses Bereichs geändert wurde. So bleiben auch benutzerdefinierte Größen leerer Spalten und Zeilen erhalten
- eine Zelle gelangt in das Array `data`, wenn sie einen Wert, eine CSS-Klasse, einen Editor oder den Zustand `locked` hat. So bleiben auch gesperrte leere Zellen erhalten
- das zurückgegebene Objekt kann unverändert an die Methode [](api/spreadsheet_parse_method.md) übergeben werden

### Beispiel {#example}

~~~jsx {4}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

const state = spreadsheet.serialize();
~~~

**Verwandter Artikel:** [Datenladen und -export](loading_data.md#saving-and-restoring-state)
