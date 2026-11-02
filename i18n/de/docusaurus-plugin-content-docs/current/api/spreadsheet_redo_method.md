---
sidebar_label: redo()
title: redo-Methode
description: Wenden Sie mit der Methode redo() eine rückgängig gemachte Aktion in DHTMLX Spreadsheet erneut an.
---

# redo()

### Beschreibung {#description}

@short: Wendet die rückgängig gemachte Aktion erneut an

### Verwendung {#usage}

~~~jsx
redo(): void;
~~~

### Beispiel {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// wendet die rückgängig gemachte Aktion erneut an
spreadsheet.redo();
~~~
