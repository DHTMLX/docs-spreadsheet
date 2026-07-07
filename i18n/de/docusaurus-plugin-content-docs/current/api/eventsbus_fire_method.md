---
sidebar_label: fire()
title: fire Events Bus-Methode
description: Sie können sich über die fire Events Bus-Methode in der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek informieren. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, testen Sie Code-Beispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# fire()

### Beschreibung {#description}

@short: Löst ein internes Event aus

:::info
Normalerweise werden Events automatisch aufgerufen, und Sie müssen diese Methode nicht verwenden.
:::

### Verwendung {#usage}

~~~jsx
fire(name: string, arguments: array): boolean;
~~~

### Parameter {#parameters}

- `name` - (erforderlich) der Name des Events, Groß-/Kleinschreibung wird nicht beachtet
- `arguments` - (erforderlich) ein Array mit den event-bezogenen Daten

### Rückgabewert {#returns}

Die Methode gibt `false` zurück, wenn einer der Event-Handler `false` zurückgibt. Andernfalls wird `true` zurückgegeben.

### Beispiel {#example}

~~~jsx {10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.events.on("CustomEvent", function(param1, param2){
    return true;
});

const res = spreadsheet.events.fire("CustomEvent", [12, "abc"]);
~~~

**Verwandte Artikel:** [Event-Handling](handling_events.md)
