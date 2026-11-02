---
sidebar_label: afterDataLoaded
title: afterDataLoaded event
description: Führen Sie mit dem Event afterDataLoaded Code aus, nachdem Daten in DHTMLX Spreadsheet geladen wurden, zum Beispiel, um nach dem Laden eine Meldung anzuzeigen.
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

**Changelog:** Hinzugefügt in v5.2

**Verwandter Artikel:** [Event-Handling](handling_events.md)

**Verwandtes Beispiel:** [Spreadsheet. Event für geladene Daten](https://snippet.dhtmlx.com/vxr7amz6)
