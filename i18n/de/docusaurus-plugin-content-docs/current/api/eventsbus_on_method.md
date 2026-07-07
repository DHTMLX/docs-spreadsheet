---
sidebar_label: on()
title: on Events Bus-Methode
description: Sie können sich über die on Events Bus-Methode in der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek informieren. Durchsuchen Sie Entwicklerhandbücher und API-Referenz, testen Sie Code-Beispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# on()

### Beschreibung {#description}

@short: Fügt einem internen Event des Spreadsheet einen Handler hinzu

### Verwendung {#usage}

~~~jsx
on(name: string, callback: function): void;
~~~

### Parameter {#parameters}

- `name` - (erforderlich) der Name des Events, Groß-/Kleinschreibung wird nicht beachtet
- `callback` - (erforderlich) die Handler-Funktion

### Beispiel {#example}

~~~jsx {6-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.events.on("StyleChange", function(id){
  console.log("The style of cell "+spreadsheet.selection.get()+" is changed");
});
~~~

:::info
Die vollständige Liste der Spreadsheet-Events finden Sie [hier](api/api_overview.md#spreadsheet-events).

Sie können einem Event mehrere Handler hinzufügen, und alle werden ausgeführt. Wenn einige Handler `false` zurückgeben, werden die zugehörigen Operationen blockiert. Event-Handler werden in der Reihenfolge verarbeitet, in der sie hinzugefügt wurden.
:::

**Verwandte Artikel:** [Event-Handling](handling_events.md)

**Verwandtes Beispiel:** [Spreadsheet. Events](https://snippet.dhtmlx.com/2vkjyvsi)
