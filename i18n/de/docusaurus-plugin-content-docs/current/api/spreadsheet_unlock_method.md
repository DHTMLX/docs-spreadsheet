---
sidebar_label: unlock()
title: unlock-Methode
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die unlock-Methode. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# unlock()

### Beschreibung {#description}

@short: Entsperrt eine oder mehrere gesperrte Zelle(n)

### Verwendung {#usage}

~~~jsx
unlock(cell: string): void;
~~~

### Parameter {#parameters}

- `cell` - (erforderlich) die ID(s) einer Zelle, mehrerer Zellen oder eines Zellbereichs

### Beispiel {#example}

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// entsperrt eine Zelle
spreadsheet.unlock("A1");

// entsperrt einen Zellbereich
spreadsheet.unlock("A1:C1");

// entsperrt bestimmte Zellen
spreadsheet.unlock("A1,B5,B7,D4:D6");
~~~

:::info
Ab v4.1 kann der Verweis auf eine Zelle oder einen Zellbereich im folgenden Format angegeben werden:

~~~jsx
spreadsheet.unlock("sheet1!A2"); 
~~~

wobei `sheet1` der Name des Reiters ist.

Wenn der Name des Reiters nicht angegeben wird, entsperrt die Methode die Zelle(n) des aktiven Reiters.
:::
