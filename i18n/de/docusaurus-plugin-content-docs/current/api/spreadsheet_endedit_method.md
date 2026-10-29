---
sidebar_label: endEdit()
title: endEdit-Methode
description: Beenden Sie mit der Methode endEdit() die Bearbeitung der ausgewählten Zelle in DHTMLX Spreadsheet. Die Methode schließt den Editor und speichert den eingegebenen Wert.
---

# endEdit()

### Beschreibung {#description}

@short: Beendet die Bearbeitung in der ausgewählten Zelle, schließt den Editor und speichert den eingegebenen Wert

### Verwendung {#usage}

~~~jsx
endEdit(): void;
~~~

### Beispiel {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// beendet die Bearbeitung in der ausgewählten Zelle
spreadsheet.endEdit();
~~~

**Verwandter Artikel:** [Mit der Tabellenkalkulation arbeiten](working_with_cells.md#editing-a-cell)
