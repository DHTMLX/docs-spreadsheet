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
beforeAction: (action: string, config: object) => void | boolean;
~~~

### Parameter {#parameters}

Der Callback des Events nimmt folgende Parameter entgegen:

- `action` - (erforderlich) der Name der Aktion. Die vollständige Liste der verfügbaren Aktionen finden Sie [hier](api/overview/actions_overview.md#list-of-actions)
- `config` - (erforderlich) ein Objekt mit den Parametern der Aktion

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
