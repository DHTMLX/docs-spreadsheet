---
sidebar_label: getStyle()
title: getStyle-Methode
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die getStyle-Methode. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# getStyle()

### Beschreibung {#description}

@short: Gibt die auf eine oder mehrere Zellen angewendeten Stile zurück

### Verwendung {#usage}

~~~jsx
getStyle(cell: string): any;
~~~

### Parameter {#parameters}

- `cell` - (erforderlich) die ID(s) einer oder mehrerer Zellen oder ein Zellenbereich

### Rückgabewert {#returns}

Die Methode gibt die für die Zellen festgelegten Stile zurück

### Beispiel {#example}

~~~jsx {5,9,12}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// Stil einer einzelnen Zelle abrufen
const style = spreadsheet.getStyle("A1");
// -> {background: "#8DE9E1", color: "#03A9F4"}

// Stile eines Zellenbereichs abrufen
const rangeStyles = spreadsheet.getStyle("A1:D1"); // -> see details

// Stile verschiedener Zellen abrufen
const values = spreadsheet.getStyle("A1,B1,C1:C3");
~~~

:::info
Bei mehreren Zellen gibt die Methode ein Array von Objekten mit den auf jede Zelle angewendeten Stilen zurück:

~~~jsx
[
    {background: "red", border: "solid 1px yellow", color: "blue"},
    {background: "red", border: "solid 1px yellow", color: "blue"},
    {background: "#C8FAF6", border: "solid 1px yellow", color: "#81C784"},
    {background: "#9575CD", border: "solid 1px yellow", color: "#079D8F"}
]
~~~
:::

:::info
Ab v4.1 kann der Verweis auf eine Zelle oder einen Zellenbereich im folgenden Format angegeben werden:

~~~jsx
const style = spreadsheet.getStyle("sheet1!A2"); 
//-> {justify-content: "flex-end", text-align: "right"}
~~~

wobei `sheet1` der Name des Reiters ist.

Wenn der Name des Reiters nicht angegeben ist, gibt die Methode den bzw. die Stil(e) der Zelle(n) aus dem aktiven Reiter zurück.
:::
