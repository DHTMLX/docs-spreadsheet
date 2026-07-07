---
sidebar_label: setValidation()
title: setValidation-Methode
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die setValidation-Methode. Entwicklerhandbücher und API-Referenz, Code-Beispiele, Live-Demos und eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet.
---

# setValidation()

### Beschreibung {#description}

@short: Legt eine Validierung für Zellen fest, indem Dropdown-Listen in die Zellen eingefügt werden

Die Methode kann auch die Datenvalidierung aus einer oder mehreren Zellen entfernen.

### Verwendung {#usage}

~~~jsx
setValidation(
    cell: string,
    options: string | string[]
): void;
~~~

### Parameter {#parameters}

- `cell` - (erforderlich) die ID(s) einer Zelle oder eines Zellbereichs
- `options` - (erforderlich) entweder eine Zeichenkette mit einem Zellbereich ("C1:C3") oder ein Array von Zeichenkettenwerten

### Beispiel {#example}

~~~jsx {8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // Konfigurationsparameter
});

spreadsheet.parse(dataset);

// Setzt die Validierung und erstellt eine Dropdown-Liste mit 3 Auswahlmöglichkeiten für die Zelle B10
spreadsheet.setValidation("B10", ["Apple", "Mango", "Avocado"]);
~~~

### Details {#details}

Wenn Sie die Validierung aus einer oder mehreren Zellen entfernen möchten, übergeben Sie anstelle der Optionsliste `null`, `0`, `false` oder `undefined` als zweiten Parameter an die Methode:

~~~jsx
spreadsheet.setValidation("B15");

//oder
spreadsheet.setValidation("B15", null);

//oder
spreadsheet.setValidation("B15", false);
~~~

**Change log:** Hinzugefügt in v4.3

**Related articles:** [Zellen validieren](working_with_cells.md#validating-cells)
