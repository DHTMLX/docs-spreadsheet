---
sidebar_label: announce()
title: announce Methode
description: Senden Sie mit der Methode announce() eine Statusmeldung an Screenreader-Nutzer von DHTMLX Spreadsheet, zum Beispiel um das Ergebnis eines benutzerdefinierten Toolbar- oder Menübefehls zu melden.
---

# announce()

### Beschreibung {#description}

@short: Gibt eine Meldung an Screenreader-Nutzer aus

### Verwendung {#usage}

~~~jsx
announce(message: string): void;
~~~

### Parameter {#parameters}

- `message` - (erforderlich) der Text, der angekündigt werden soll. Ein leerer String löscht die Meldung

### Beispiel {#example}

Im folgenden Beispiel zählt ein benutzerdefinierter Menübefehl die leeren Zellen im ausgewählten Bereich und gibt das Ergebnis aus:

~~~jsx {18}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    menu: true,
    // other config parameters
});
spreadsheet.parse(data);

spreadsheet.menu.data.add({
    id: "count-empty",
    value: "Count empty cells"
});

spreadsheet.menu.events.on("click", function (id) {
    if (id === "count-empty") {
        let count = 0;
        spreadsheet.eachCell(function (cell, value) {
            if (value === "" || value === undefined || value === null) count++;
        }, spreadsheet.selection.getSelectedCell());
        spreadsheet.announce(count + " empty cells in the selection");
    }
});
~~~

### Details {#details}

Verwenden Sie die Methode, um Screenreader-Nutzer über das Ergebnis einer Aktion zu informieren, die kein eigenes sichtbares Element hat, etwa ein benutzerdefinierter Toolbar- oder Menübefehl.

Die Meldung geht an eine visuell verborgene Live-Region, die direkt nach dem Grid-Element platziert ist (`role="status"`, `aria-live="polite"`, `aria-atomic="true"`). Der Screenreader liest sie vor, nachdem er die aktuelle Ausgabe beendet hat, und der Tastaturfokus wird nicht verschoben.

Das Spreadsheet gibt seine eigenen Meldungen über dieselbe Region aus: den ausgewählten Bereich, neue Formelfehler und ungültige Werte, abgelehnte Änderungen, Suchergebnisse, Beginn und Ende von Import und Export sowie neue Spaltenbreiten und Zeilenhöhen (siehe die [Liste der Statusmeldungen](accessibility.md#status-announcements)). Die Region enthält jeweils nur eine Meldung, sodass eine neuere Meldung, ob eigene oder integrierte, die vorherige ersetzt.

Wenn Sie den Text übergeben, der sich gerade in der Region befindet, liest der Screenreader ihn erneut vor.

Die Methode funktioniert auch im [schreibgeschützten Modus](api/spreadsheet_readonly_config.md) und bei ausgeschalteter [Auswahl](api/spreadsheet_selection_config.md). Sie tut nichts, bevor das Spreadsheet in die Seite eingebunden wurde, und nachdem die Methode `destructor()` aufgerufen wurde.

**Changelog:** Hinzugefügt in v6.0.4

**Verwandte Artikel:**
- [Statusmeldungen](accessibility.md#status-announcements)
- [Einen benutzerdefinierten Befehl ankündigen](accessibility.md#announcing-a-custom-command)
- [Anpassen des Menüs](customization.md#menu)
