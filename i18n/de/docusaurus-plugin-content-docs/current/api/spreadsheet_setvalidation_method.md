---
sidebar_label: setValidation()
title: setValidation-Methode
description: Fügen Sie Zellen in DHTMLX Spreadsheet mit der Methode setValidation() eine Dropdown-Liste mit Werten aus einem Zellbereich oder einem Array hinzu oder entfernen Sie die Validierung.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
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

**Changelog:** Hinzugefügt in v4.3

**Verwandter Artikel:** [Zellen validieren](working_with_cells.md#validating-cells)
