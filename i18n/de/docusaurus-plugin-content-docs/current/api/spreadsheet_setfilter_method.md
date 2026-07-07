---
sidebar_label: setFilter()
title: setFilter-Methode
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die setFilter-Methode. Entwicklerhandbücher und API-Referenz, Code-Beispiele, Live-Demos und eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet.
---

# setFilter()

### Beschreibung {#description}

@short: Filtert Daten im Spreadsheet nach den angegebenen Kriterien

### Verwendung {#usage}

~~~jsx   
setFilter( 
    cell?: string,
    rules?:  [
        {
            condition?: {
                factor: "string", 
                value: date | number |string | [number, number]
            },
            exclude?: any[]
        },
        // weitere Regelobjekte
    ]
): void;
~~~

### Parameter {#parameters}

- `cell` - (optional) die ID einer Zelle (oder eines Zellbereichs), die die ID einer Spalte enthält, deren Werte gefiltert werden (z. B. "A1", "A1:C10" oder "sheet2!A1")
- `rules` - (optional) ein Array von Objekten mit Filterregeln. Jedes Objekt kann die folgenden Parameter enthalten:
    - `condition` - (optional) ein Objekt mit Parametern für die bedingte Filterung eines Tabellenblatts:
        - `factor` - (erforderlich) ein Zeichenkettenwert, der einen Vergleichsausdruck für die Filterung definiert. Siehe die Liste der verfügbaren Werte [unten](#list-of-factors)
        - `value` - (erforderlich) der/die Wert(e), der/die für die Filterung nach dem angegebenen Faktor verwendet werden soll(en)
    - `exclude` - (optional) ein Array von Datenpunkten, die aus dem Tabellenblatt ausgeschlossen werden sollen

:::note
Um die Filterung zurückzusetzen, rufen Sie die Methode ohne Parameter auf oder übergeben Sie nur den Parameter `cell`.
:::

### Beispiel {#example}

~~~jsx {5,8,11,14}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// Daten nach einer für Spalte A angegebenen Bedingung filtern
spreadsheet.setFilter("A2", [{condition: {factor: "te", value:"r" }}]);

// Daten nach Kriterien filtern, die für Spalte A des Tabellenblatts "Date" angegeben wurden
spreadsheet.setFilter("Date!A1", [{condition: {factor: "db", value:"18/10/2022" }, exclude: ["25/06/2022"]}]);

// Daten nach einer für Spalte C angegebenen Bedingung filtern
spreadsheet.setFilter("C1", [{}, {}, {condition: {factor: "inb", value: [5,8]}}]);

// Daten nach Bedingungen filtern, die für die Spalten A und C angegeben wurden
spreadsheet.setFilter("A1:C10", [{condition: {factor: "tc", value: "e"}}, {}, {condition: {factor: "ib", value: [5,8]}}]);


// Filterung zurücksetzen
spreadsheet.setFilter();
~~~

### Liste der Faktoren {#list-of-factors}

| Faktor | Bedeutung                    |
| ------ | ----------------------------- |
| "e"    | leer                          |
| "ne"   | nicht leer                    |
| "tc"   | Text enthält                  |
| "tdc"  | Text enthält nicht            |
| "ts"   | Text beginnt mit              |
| "te"   | Text endet mit                |
| "tex"  | Text ist genau                |
| "d"    | Datum ist                     |
| "db"   | Datum liegt vor               |
| "da"   | Datum liegt nach              |
| "gt"   | größer als                    |
| "geq"  | größer als oder gleich        |
| "lt"   | kleiner als                   |
| "leq"  | kleiner als oder gleich       |
| "eq"   | gleich                        |
| "neq"  | ungleich                      |
| "ib"   | liegt zwischen                |
| "inb"  | liegt nicht zwischen          |

**Change log:** Hinzugefügt in v5.0

**Related article:** [Daten filtern](working_with_ssheet.md#filtering-data)

**Related sample:** [Spreadsheet. Filterung über API](https://snippet.dhtmlx.com/effrcsg6)
