---
sidebar_label: eachCell()
title: eachCell method
description: Sie können im Dokumentationsbereich der DHTMLX JavaScript Spreadsheet-Bibliothek mehr über die eachCell-Methode erfahren. Lesen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# eachCell()

### Beschreibung {#description}

@short: Iteriert Zellen in der Tabellenkalkulation

:::info
Wenn kein Zellenbereich angegeben ist, iteriert die Methode die aktuell ausgewählten Zellen.
:::

### Verwendung {#usage}

~~~jsx
eachCell(
    cb: (cellName: string, cellValue: any) => any, 
    range?: string
): void;
~~~ 

### Parameter {#parameters}

- `callback` - (erforderlich) eine Callback-Funktion
- `range` - (optional) ein Zellenbereich zum Iterieren

### Beispiel {#example}

~~~jsx {21-27}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // Konfigurationsparameter
});

spreadsheet.menu.data.add({
    id: "validate",
    value: "Validate",
    items: [
        {
            id: "isNumber",
            value: "Is number"
        },
        {
            id: "isEven",
            value: "Is even number"
        }
    ]
});

function checkValue(check) {
    spreadsheet.eachCell(function (cell, value) {
        if (!check(value)) {
            spreadsheet.setStyle(cell, { background: "#e57373" });
        } else {
            spreadsheet.setStyle(cell, { background: "" });
        }
    }, spreadsheet.selection.getSelectedCell());
}

spreadsheet.menu.events.on("click", function (id) {
    switch (id) {
        case "isNumber":
            checkValue(function (value) { return !isNaN(value) });
            break;
        case "isEven":
            checkValue(function (value) { return value % 2 === 0 });
            break;
    }
});
~~~

**Verwandter Artikel:** [Anpassung](customization.md#menu)

**Verwandtes Beispiel**: [Spreadsheet. Menu](https://snippet.dhtmlx.com/2mlv2qaz)
