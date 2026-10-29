---
sidebar_label: getValue()
title: getValue method
description: Rufen Sie mit der Methode getValue() den Wert einer Zelle oder die Werte eines Zellbereichs in DHTMLX Spreadsheet ab.
---

# getValue()

### Beschreibung {#description}

@short: Gibt den/die Wert(e) einer Zelle/von Zellen zurück

### Verwendung {#usage}

~~~jsx
getValue(cell: string): any | array;
~~~

### Parameter {#parameters}

- `cell` - (erforderlich) die ID(s) einer Zelle/von Zellen oder ein Zellbereich

### Rückgabewert {#returns}

Die Methode gibt die Werte der Zellen zurück

### Beispiel {#example}

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// Wert einer einzelnen Zelle zurückgeben
const cellValue = spreadsheet.getValue("A2"); // "Ecuador"

// Werte eines Zellbereichs zurückgeben
const rangeValues = spreadsheet.getValue("A1:A3"); // -> ["Country","Ecuador","Belarus"]

// Werte verschiedener Zellen zurückgeben
const values = spreadsheet.getValue("A1,B1,C1:C3");
//-> ["Country", "Product", "Price", 6.68, 3.75]
~~~

:::info
Ab v4.1 kann der Verweis auf eine Zelle oder einen Zellbereich im folgenden Format angegeben werden:

~~~jsx
const cellValue = spreadsheet.getValue("sheet1!A2"); //-> 25000
~~~

Dabei ist `sheet1` der Name des Tabs.

Wenn der Name des Tabs nicht angegeben ist, gibt die Methode den/die Wert(e) der Zelle(n) des aktiven Tabs zurück.
:::
