---
sidebar_label: beforeAction
title: beforeAction event
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über das beforeAction-Event. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# beforeAction

### Beschreibung {#description}

@short: Wird ausgelöst, bevor eine Aktion ausgeführt wird

### Verwendung {#usage}

~~~jsx
beforeAction: (
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
) => void | boolean;
~~~

### Parameter {#parameters}

Der Callback des Events nimmt folgende Parameter entgegen:

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

### Rückgabewert {#returns}

Geben Sie `false` zurück, um die Ausführung einer Aktion zu verhindern; andernfalls geben Sie `true` zurück

### Beispiel {#example}

~~~jsx {6-11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(dataset);

spreadsheet.events.on("beforeAction", (actionName, config) => {
    if (actionName === "sortCells") {
        console.log(actionName, config);
        return false;
    }
});
~~~

**Changelog:** Hinzugefügt in v4.3

**Verwandte Artikel:** 
- [Spreadsheet-Aktionen](api/overview/actions_overview.md) 
- [Event-Handling](handling_events.md) 
