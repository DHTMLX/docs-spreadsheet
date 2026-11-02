---
sidebar_label: getFormat()
title: getFormat-Methode
description: Rufen Sie mit der Methode getFormat() das Zahlenformat ab, das auf den Wert einer Zelle oder eines Zellbereichs in DHTMLX Spreadsheet angewendet ist.
---

# getFormat()

### Beschreibung {#description}

@short: Gibt das Zahlenformat zurück, das auf den Wert einer Zelle angewendet wird

### Verwendung {#usage}

~~~jsx
getFormat(cell: string): string | array;
~~~

### Parameter {#parameters}

`cell` - (erforderlich) die ID(s) der Zelle(n) oder ein Zellenbereich

### Rückgabewert {#returns}

Die Methode gibt das bzw. die Format(e) zurück, das bzw. die auf den Wert der Zelle(n) angewendet wird bzw. werden

### Beispiel {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// gibt "currency" zurück
const format = spreadsheet.getFormat("A1");
~~~

:::info
Ab v4.1 kann der Verweis auf eine Zelle im folgenden Format angegeben werden:

~~~jsx
// gibt "number" zurück
const cellFormat = spreadsheet.getFormat("sheet1!A2"); 
~~~

wobei `sheet1` der Name des Reiters ist.

Wenn der Name des Reiters nicht angegeben ist, gibt die Methode das Format zurück, das auf den Wert einer Zelle im aktuell aktiven Reiter angewendet wird.
:::

**Verwandter Artikel:** [Zahlenformatierung](number_formatting.md)
