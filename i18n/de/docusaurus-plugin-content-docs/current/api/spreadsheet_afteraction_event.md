---
sidebar_label: afterAction
title: afterAction-Event
description: Sie können mehr über das afterAction-Event in der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren. Lesen Sie Entwicklerleitfäden und API-Referenz, testen Sie Code-Beispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Spreadsheet herunter.
---

# afterAction

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem eine Aktion ausgeführt wurde

### Verwendung {#usage}

~~~jsx
afterAction: (
    action: string,
    config: {
        action?: string,
        cell?: string,
        row?: number,
        col?: number,
        val?: any,
        prev?: any,
        groupAction?: string,
        pageId?: string | number,
        pageName?: string,
        // other properties of the action
    } | object[]
) => void;
~~~

### Parameter {#parameters}

Der Callback des Events akzeptiert folgende Parameter:

- `action` - (erforderlich) der Name der Aktion. Die vollständige Liste der verfügbaren Aktionen finden Sie [hier](api/overview/actions_overview.md#list-of-actions)
- `config` - (erforderlich) ein Objekt mit den Parametern der Aktion. Die Menge der Eigenschaften hängt von der Aktion ab. Das Objekt kann Folgendes enthalten:
    - `action` - (optional) der Name der Aktion
    - `cell` - (optional) die ID der Zelle oder des Zellbereichs, auf den die Aktion angewendet wird, zum Beispiel `"A1"` oder `"B2:D5"`
    - `row` - (optional) der nullbasierte Index der Zeile der Zelle
    - `col` - (optional) der nullbasierte Index der Spalte der Zelle
    - `val` - (optional) der neue Wert, den die Aktion anwendet, zum Beispiel ein Zellwert, ein Stil oder eine Größe
    - `prev` - (optional) der vorherige Wert
    - `groupAction` - (optional) der Name der Aktion, die anstelle von `action` ausgeführt wird, wenn `cell` ein Zellbereich ist, zum Beispiel `"groupAction"`, `"groupRowAction"` oder `"resizeCol"`
    - `pageId` - (optional) die ID des Tabellenblatts
    - `pageName` - (optional) der Name des Tabellenblatts

    Werden mehrere Aktionen gemeinsam ausgeführt, zum Beispiel beim Einfügen, lautet der Parameter `action` `"groupAction"`, und `config` ist ein Array solcher Objekte.

### Beispiel {#example}

~~~jsx {6-11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // Konfigurationsparameter
});
spreadsheet.parse(dataset);

spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "sortCells") {
        console.log(actionName, config);
    }
});
~~~

**Changelog:** Hinzugefügt in v4.3

**Verwandte Artikel:** 
- [Spreadsheet-Aktionen](api/overview/actions_overview.md)
- [Event-Handling](handling_events.md)
