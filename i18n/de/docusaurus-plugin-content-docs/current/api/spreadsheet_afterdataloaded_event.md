---
sidebar_label: afterDataLoaded
title: afterDataLoaded event
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über das afterDataLoaded-Event. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# afterDataLoaded

### Beschreibung {#description}

@short: Wird ausgelöst, nachdem das Laden der Daten abgeschlossen ist

### Verwendung {#usage}

~~~jsx
afterDataLoaded: () => void;
~~~

### Beispiel {#example}

~~~jsx 
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// subscribe to the "afterDataLoaded" event
spreadsheet.events.on("afterDataLoaded", () => {
    dhx.message({
        text: "Data is successfully loaded into Spreadsheet!",
        css: "dhx_message--success",
        expire: 5000
    });
});
~~~

**Change log:** Hinzugefügt in v5.2

**Verwandte Artikel:** [Event-Handling](handling_events.md)

**Verwandtes Beispiel:** [Spreadsheet. Event für geladene Daten](https://snippet.dhtmlx.com/vxr7amz6)
