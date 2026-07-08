---
sidebar_label: addFormula()
title: addFormula-Methode
description: Sie können mehr über die addFormula-Methode in der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren. Lesen Sie Entwicklerleitfäden und API-Referenz, testen Sie Code-Beispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Spreadsheet herunter.
---

# addFormula()

### Beschreibung {#description}

@short: Registriert eine benutzerdefinierte Formelfunktion, die in Zellformeln verwendet werden kann

Nach der Registrierung ist die Formel in jeder Zelle unter ihrem Namen in Großbuchstaben verfügbar (zum Beispiel `=MYFUNC(A1, B2)`).

### Verwendung {#usage}

~~~ts
type cellValue = string | number | boolean
type mathArgument = cellValue | cellValue[];
type mathFunction = (...x: mathArgument[]) => cellValue;

addFormula: (name: string, handler: mathFunction) => void;
~~~

### Parameter {#parameters}

- `name` - (*string*) erforderlich, der Name der Formel (Groß-/Kleinschreibung wird ignoriert, wird als Großbuchstaben gespeichert)
- `handler` - (*function*) erforderlich, eine Callback-Funktion, die die Eingabeargumente (Strings, Zahlen, Booleans oder Arrays davon) verarbeitet und einen einzelnen Wert zurückgibt

:::note
Die `handler`-Callback-Funktion muss synchron sein. Die Verwendung von `Promise` oder `fetch` innerhalb der Funktion ist nicht zulässig.
:::

### Beispiel {#example}

~~~jsx {4-6}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});

// fügt eine benutzerdefinierte Formel hinzu, die einen Wert verdoppelt
spreadsheet.addFormula("DOUBLE", (value) => {
    return value * 2;
});

// jetzt in Zellen verwenden: =DOUBLE(A1)
spreadsheet.parse([
    { cell: "A1", value: 4, format: "number" },
    { cell: "B1", value: "=DOUBLE(A1)", format: "number" }
]);
~~~

**Änderungsprotokoll:** Hinzugefügt in v6.0

**Verwandtes Beispiel:** [Spreadsheet. Benutzerdefinierte Formel hinzufügen](https://snippet.dhtmlx.com/wvxdlahp)

**Verwandte Artikel:** [Formeln und Funktionen](functions.md#custom-formulas)
