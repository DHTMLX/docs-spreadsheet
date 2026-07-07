---
sidebar_label: setStyle()
title: setStyle-Methode
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die setStyle-Methode. Entwicklerhandbücher und API-Referenz, Code-Beispiele, Live-Demos und eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet.
---

# setStyle()

### Beschreibung {#description}

@short: Legt den Stil für eine oder mehrere Zellen fest

:::info
Die Methode setzt denselben Stil für die angegebenen Zellen. Wenn Sie verschiedene Stile auf Spreadsheet-Zellen anwenden möchten, verwenden Sie die Methode [](api/spreadsheet_parse_method.md).
:::

### Verwendung {#usage}

~~~jsx
setStyle(cell: string, styles: array | object): void;
~~~

### Parameter {#parameters}

- `cell` - (erforderlich) die ID(s) einer Zelle oder eines Zellbereichs
- `styles` - (erforderlich) die auf die Zellen anzuwendenden Stile. [Sehen Sie die Liste der Eigenschaften, die Sie zum Gestalten von Zellen verwenden können](api/spreadsheet_parse_method.md#list-of-properties)

### Beispiel {#example}

~~~jsx {5,8,11,14}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// Stil für eine einzelne Zelle setzen
spreadsheet.setStyle("A1", {background: "red"});

// denselben Stil für einen Zellbereich setzen
spreadsheet.setStyle("A1:D1", {color: "blue"});

// denselben Stil für verschiedene Zellen setzen
spreadsheet.setStyle("B6,A1:D1", {color:"blue"});

// Stile aus einem Array abwechselnd auf Zellen in einem Bereich anwenden
spreadsheet.setStyle("A1:D1", [{color: "blue"}, {color: "red"}]);
~~~

**Related sample**: [Spreadsheet. Gestaltete Daten](https://snippet.dhtmlx.com/abnh7glb)

:::info
Ab v4.1 kann der Verweis auf eine Zelle oder einen Zellbereich im folgenden Format angegeben werden:

~~~jsx
spreadsheet.setStyle("sheet1!A2", {background: "red"}); 
~~~

wobei `sheet1` der Name des Reiters ist.

Wenn der Name des Reiters nicht angegeben ist, wendet die Methode den Stil auf die Zelle(n) des aktiven Reiters an.
:::
