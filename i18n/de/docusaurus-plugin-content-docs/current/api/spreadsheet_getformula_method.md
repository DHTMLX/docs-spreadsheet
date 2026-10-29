---
sidebar_label: getFormula()
title: getFormula-Methode
description: Rufen Sie mit der Methode getFormula() die Formel einer Zelle in DHTMLX Spreadsheet ab, auch einer Zelle auf einem anderen Tabellenblatt.
---

# getFormula()

### Beschreibung {#description}

@short: Gibt die Formel einer Zelle zurück

### Verwendung {#usage}

~~~jsx 
getFormula(cell: string): string | array;
~~~

### Parameter {#parameters}

- `cell` - (erforderlich) die ID einer Zelle

### Rückgabewert {#returns}

Die Methode gibt die Formel der Zelle zurück

### Beispiel {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// gibt "ABS(C2)" zurück
const formula = spreadsheet.getFormula("B2");
~~~

:::info
Der Verweis auf eine Zelle kann im folgenden Format angegeben werden:

~~~jsx
// gibt "ABS(C2)" zurück
const formula = spreadsheet.getFormula("sheet1!B2"); 
~~~

wobei `sheet1` der Name des Reiters ist.

Wenn der Name des Reiters nicht angegeben ist, gibt die Methode die Formel der Zelle aus dem aktiven Reiter zurück.
:::

**Changelog:** In v4.1 hinzugefügt
