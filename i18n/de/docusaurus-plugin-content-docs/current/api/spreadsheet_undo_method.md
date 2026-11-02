---
sidebar_label: undo()
title: undo-Methode
description: Machen Sie mit der Methode undo() die letzte Aktion in DHTMLX Spreadsheet rückgängig und stellen Sie sie mit der Methode redo() wieder her.
---

# undo()

### Beschreibung {#description}

@short: Macht die letzte Aktion rückgängig

### Verwendung {#usage}

~~~jsx
undo(): void;
~~~

### Beispiel {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// führt einen Schritt zurück aus
spreadsheet.undo();
~~~
