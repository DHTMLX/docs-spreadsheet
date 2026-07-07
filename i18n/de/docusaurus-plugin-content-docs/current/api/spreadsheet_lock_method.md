---
sidebar_label: lock()
title: lock-Methode
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die lock-Methode. Lesen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# lock()

### Beschreibung {#description}

@short: Sperrt die angegebene Zelle

### Verwendung {#usage}

~~~jsx
lock(cell: string): void;
~~~

### Parameter {#parameters}

- `cell` - (erforderlich) die ID(s) einer Zelle bzw. von Zellen oder eines Zellbereichs

### Beispiel {#example}

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// sperrt eine Zelle
spreadsheet.lock("A1");

// sperrt einen Zellbereich
spreadsheet.lock("A1:C1");

// sperrt bestimmte Zellen
spreadsheet.lock("A1,B5,B7,D4:D6");
~~~

:::info
Ab v4.1 kann der Verweis auf eine Zelle oder einen Zellbereich im folgenden Format angegeben werden:

~~~jsx
spreadsheet.lock("sheet1!A2"); 
~~~

Dabei ist `sheet1` der Name des Tabs.

Wenn der Name des Tabs nicht angegeben wird, sperrt die Methode die Zelle(n) des aktiven Tabs.
:::

**Verwandtes Beispiel**: [Spreadsheet. Gesperrte Zellen](https://snippet.dhtmlx.com/czeyiuf8)
