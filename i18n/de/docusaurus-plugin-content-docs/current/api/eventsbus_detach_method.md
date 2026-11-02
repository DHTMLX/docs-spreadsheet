---
sidebar_label: detach()
title: detach Events Bus-Methode
description: Entfernen Sie mit der Methode events.detach() einen mit der Methode on() angehängten Event-Handler aus DHTMLX Spreadsheet anhand des Event-Namens.
---

# detach()

### Beschreibung {#description}

@short: Entfernt einen Handler von einem Event (der zuvor mit der `on()`-Methode hinzugefügt wurde)

### Verwendung {#usage}

~~~jsx
detach(name: string): void;
~~~

### Parameter {#parameters}

- `name` - (erforderlich) der Name des Events, von dem der Handler entfernt werden soll

### Beispiel {#example}

~~~jsx {10}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.events.on("StyleChange", function(id){
  console.log("The style of cell "+spreadsheet.selection.get()+" is changed");
});

spreadsheet.events.detach("StyleChange");
~~~

:::info
Standardmäßig entfernt `detach()` alle Event-Handler vom Ziel-Event. Sie können bestimmte Event-Handler mithilfe eines Kontextmarkers entfernen.
:::

~~~jsx
const marker = "any"; // Sie können einen beliebigen string|object-Wert verwenden

spreadsheet.events.on("StyleChange", handler1);
spreadsheet.events.on("StyleChange", handler2, marker);
// der folgende Befehl löscht nur handler2
spreadsheet.events.detach("StyleChange", marker);
~~~

**Verwandter Artikel:** [Event-Handling](handling_events.md)
