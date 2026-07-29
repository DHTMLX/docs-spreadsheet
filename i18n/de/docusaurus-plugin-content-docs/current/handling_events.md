---
sidebar_label: Event-Handling
title: Event-Handling
description: In der Dokumentation zur DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über das Event-Handling. Lesen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# Event-Handling {#event-handling}

<iframe src="https://snippet.dhtmlx.com/2vkjyvsi?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Event-Listener hinzufügen {#attaching-event-listeners}

Sie können Event-Listener mit der Methode [`spreadsheet.events.on()`](api/eventsbus_on_method.md) hinzufügen:

~~~jsx
spreadsheet.events.on("AfterColumnAdd", function(cells){
    console.log("A new column is added");
});
~~~

## Event-Listener entfernen {#detaching-event-listeners}

Um Events zu entfernen, verwenden Sie [`spreadsheet.events.detach()`](api/eventsbus_detach_method.md):

~~~jsx
var addcolumn = spreadsheet.events.on("AfterColumnAdd", function(cells){
    console.log("A new column is added");
});
spreadsheet.events.detach(addcolumn);
~~~

## Events aufrufen {#calling-events}

Um Events aufzurufen, verwenden Sie [`spreadsheet.events.fire()`](api/eventsbus_fire_method.md):

~~~jsx
spreadsheet.events.fire("name",args);
// wobei args ein Array von Argumenten ist
~~~

Die Liste der Events finden Sie im [API-Abschnitt](api/api_overview.md#spreadsheet-events).

{{note Die Namen der Events sind nicht case-sensitive.}}
