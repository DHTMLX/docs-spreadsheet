---
sidebar_label: isLocked()
title: isLocked method
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die isLocked-Methode. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Spreadsheet herunter.
---

# isLocked()

### Beschreibung {#description}

@short: Prüft, ob eine Zelle/Zellen gesperrt ist/sind

### Verwendung {#usage}

~~~jsx
isLocked(cell: string): boolean;
~~~

### Parameter {#parameters}

- `cell` - (erforderlich) die ID(s) einer Zelle/von Zellen oder ein Zellbereich

### Rückgabewert {#returns}

Die Methode gibt `true` zurück, wenn die Zelle gesperrt ist, und `false`, wenn sie entsperrt ist

### Beispiel {#example}

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// Prüft, ob eine Zelle gesperrt ist
const cellLocked = spreadsheet.isLocked("A1");

// Prüft, ob mehrere Zellen gesperrt sind
const rangeLocked = spreadsheet.isLocked("A1:C1");

// Prüft, ob einzeln ausgewählte Zellen gesperrt sind
const cellsLocked = spreadsheet.isLocked("A1,B5,B7,D4:D6");
~~~

:::info
Wenn mehrere Zellen gleichzeitig geprüft werden, gibt die Methode `true` zurück, wenn mindestens eine der angegebenen Zellen gesperrt ist.
:::

:::info
Ab v4.1 kann der Verweis auf eine Zelle oder einen Zellbereich im folgenden Format angegeben werden:

~~~jsx
const cellsLocked = spreadsheet.isLocked("sheet1!A2"); 
~~~

Dabei ist `sheet1` der Name des Tabs.

Wenn der Name des Tabs nicht angegeben ist, prüft die Methode die Zelle(n) des aktiven Tabs.
:::
