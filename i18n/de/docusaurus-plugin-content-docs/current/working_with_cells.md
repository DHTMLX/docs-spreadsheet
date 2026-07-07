---
sidebar_label: Mit Zellen arbeiten
title: Mit Zellen arbeiten
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie, wie Sie mit Zellen arbeiten. Entwickleranleitungen und API-Referenz, Code-Beispiele, Live-Demos und eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet stehen zur Verfügung.
---

# Mit Zellen arbeiten {#work-with-cells}

## Zellwert setzen {#setting-cell-value}

### Werte setzen {#set-values}

Um einen Wert für eine Zelle über die API zu setzen, verwenden Sie die Methode [](api/spreadsheet_setvalue_method.md). Übergeben Sie ihr die folgenden Parameter:

- `cells` - (`string`) die ID(s) einer Zelle/mehrerer Zellen oder eines Zellbereichs
- `value` - (`string/number/array`) der Wert, der für eine Zelle/mehrere Zellen gesetzt werden soll

~~~jsx
// Wert für eine Zelle setzen
spreadsheet.setValue("A1",5);
// denselben Wert für einen Zellbereich setzen
spreadsheet.setValue("A1:D1",5);
// denselben Wert für verschiedene Zellen setzen
spreadsheet.setValue("B6,A1:D1",5);
// Werte aus einem Array abwechselnd für Zellen in einem Bereich setzen
spreadsheet.setValue("A1:D1",[1,2,3]);
~~~

:::note
Beachten Sie, dass die Methode denselben (wiederholten) Wert für die angegebenen Zellen setzt. Wenn Sie verschiedene Werte in Tabellenzellen einfügen möchten, verwenden Sie die Methode [`parse()`](api/spreadsheet_parse_method.md).
:::


### Werte abrufen {#get-values}

Sie können auch den/die in einer Zelle/mehreren Zellen gesetzten Wert(e) zurückgeben, indem Sie die *ID(s) der gewünschten Zelle(n) oder einen Zellbereich* an die Methode [](api/spreadsheet_getvalue_method.md) übergeben.

Die Methode gibt den/die Wert(e) als String, Zahl oder Array zurück:

~~~jsx
// Wert einer Zelle zurückgeben
var cellValue = spreadsheet.getValue("A2"); // "Ecuador"

// Werte eines Zellbereichs zurückgeben
var rangeValues = spreadsheet.getValue("A1:A3"); // -> ["Country","Ecuador","Belarus"]

// Werte verschiedener Zellen zurückgeben
var values = spreadsheet.getValue("A1,B1,C1:C3");
//-> ["Country", "Product", "Price", 6.68, 3.75]
~~~

## Zellen validieren {#validating-cells}

Ab v4.3 können Sie Datenvalidierung auf Zellen anwenden, indem Sie Dropdown-Listen mit Optionen hinzufügen. Verwenden Sie dazu die Methode [](api/spreadsheet_setvalidation_method.md):

~~~jsx
spreadsheet.setValidation("B10:B15", ["Apple", "Mango", "Avocado"]);
~~~

Die Dropdown-Liste schränkt die Auswahl des Benutzers ein. Sie zeigt die Meldung *Ungültiger Wert* an, wenn der Benutzer einen unerwarteten Wert in eine Zelle eingibt.

:::info
Die Methode [`setValidation()`](api/spreadsheet_setvalidation_method.md) kann auch die Validierung aus den angegebenen Zellen entfernen. [Details prüfen](api/spreadsheet_setvalidation_method.md#details).
:::

## Hyperlink in eine Zelle einfügen {#inserting-a-hyperlink-into-a-cell}

Um einen Hyperlink in eine Zelle einzufügen, verwenden Sie die Methode [`insertLink()`](api/spreadsheet_insertlink_method.md). Die Methode kann auch einen Text hinzufügen, der zusammen mit dem Hyperlink angezeigt wird:

~~~jsx
// Link in Zelle "A2" einfügen
spreadsheet.insertLink("A2", {
    text:"DHX Spreadsheet", href: "https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/"
});
~~~

Wenn Sie den Link aus einer Zelle entfernen möchten, übergeben Sie der Methode nur die Zell-ID:

~~~jsx
// Link aus Zelle "A2" entfernen
spreadsheet.insertLink("A2");
~~~

## Zellen formatieren {#styling-cells}

### Stile setzen {#set-styles}

Sie können Stile auf eine Zelle oder einen Zellbereich mit der Methode [](api/spreadsheet_setstyle_method.md) anwenden. Sie nimmt zwei Parameter entgegen:

- `cells` - (`string`) die ID(s) einer Zelle/mehrerer Zellen oder eines Zellbereichs
- `styles` - (`object/array`) Stile, die auf Zellen angewendet werden sollen

~~~jsx
// Stil für eine Zelle setzen
spreadsheet.setStyle("A1", {background: "red"});
// denselben Stil für einen Zellbereich setzen
spreadsheet.setStyle("A1:D1", {color: "blue"});
// denselben Stil für verschiedene Zellen setzen
spreadsheet.setStyle("B6,A1:D1", {color: "blue"});
// Stile aus einem Array abwechselnd für Zellen in einem Bereich setzen
spreadsheet.setStyle("A1:D1", [{color: "blue"}, {color: "red"}]);
~~~

:::note 
Die Methode setzt denselben Stil für die angegebenen Zellen. Wenn Sie verschiedene Stile auf Tabellenzellen anwenden möchten, verwenden Sie die Methode [`parse()`](api/spreadsheet_parse_method.md).
:::

### Stile abrufen {#get-styles}

Um die auf eine Zelle/mehrere Zellen angewendeten Stile abzurufen, verwenden Sie die Methode [](api/spreadsheet_getstyle_method.md). Übergeben Sie ihr die *ID(s) einer Zelle/mehrerer Zellen oder eines Zellbereichs*:

~~~jsx
// Stil einer Zelle abrufen
var style = spreadsheet.getStyle("A1"); 
// -> {background: "#8DE9E1", color: "#03A9F4"}
 
// Stile eines Zellbereichs abrufen
var rangeStyles = spreadsheet.getStyle("A1:D1"); // -> siehe Details
 
// Stile verschiedener Zellen abrufen
var values = spreadsheet.getStyle("A1,B1,C1:C3");
~~~

Für mehrere Zellen gibt die Methode ein Array von Objekten mit den auf eine Zelle angewendeten Stilen zurück:

~~~jsx
[
    {background: "red", border: "solid 1px yellow", color: "blue"},
    {background: "red", border: "solid 1px yellow", color: "blue"},
    {background: "#C8FAF6", border: "solid 1px yellow", color: "#81C784"},
    {background: "#9575CD", border: "solid 1px yellow", color: "#079D8F"}
]
~~~

## Zelle bearbeiten {#editing-a-cell}

### Zell-Editor aktivieren {#enable-cell-editor}

Sie können ein Eingabefeld in eine Zelle einfügen, indem Sie die Methode [](api/spreadsheet_startedit_method.md) aufrufen:

~~~jsx
spreadsheet.startEdit();
~~~

Die Methode kann zwei optionale Parameter entgegennehmen:

- `cell` - (`string`) optional, die ID einer Zelle
- `value` - (`string`) optional, der Zellwert

Wenn die ID einer Zelle nicht übergeben wird, wird das Eingabefeld in die aktuell ausgewählte Zelle eingefügt.

### Zell-Editor deaktivieren {#disable-cell-editor}

Um die Bearbeitung einer Zelle zu beenden, verwenden Sie die Methode [](api/spreadsheet_endedit_method.md), die den Editor schließt und den eingegebenen Wert speichert.

~~~jsx
spreadsheet.endEdit();
~~~

## Zellen sperren {#locking-cells}

### Zellen sperren {#lock-cells}

Sie können eine Zelle oder mehrere Zellen programmgesteuert sperren, um sie für Benutzer schreibgeschützt zu machen. Verwenden Sie dazu die Methode [](api/spreadsheet_lock_method.md). Die Methode nimmt die *ID(s) der Zelle(n)* oder einen *Zellbereich* als Parameter entgegen.

~~~jsx
// sperrt eine Zelle
spreadsheet.lock("A1");

// sperrt einen Zellbereich
spreadsheet.lock("A1:C1");

// sperrt angegebene Zellen
spreadsheet.lock("A1,B5,B7,D4:D6");
~~~

**Verwandtes Beispiel**: [Spreadsheet. Gesperrte Zellen](https://snippet.dhtmlx.com/czeyiuf8)

### Zellen entsperren {#unlock-cells}

Um gesperrte Zelle(n) zu entsperren, verwenden Sie die Methode [](api/spreadsheet_unlock_method.md). Übergeben Sie die *ID(s) der Zelle(n)* oder einen *Bereich mit gesperrten Zellen* als Parameter:

~~~jsx
// entsperrt eine Zelle
spreadsheet.unlock("A1");
 
// entsperrt einen Zellbereich
spreadsheet.unlock("A1:C1");
 
// entsperrt angegebene Zellen
spreadsheet.unlock("A1,B5,B7,D4:D6");
~~~

### Prüfen, ob eine Zelle gesperrt ist {#check-whether-a-cell-is-locked}

Um zu prüfen, ob eine oder mehrere Zellen gesperrt sind, verwenden Sie die Methode [](api/spreadsheet_islocked_method.md) und übergeben Sie ihr die *ID(s) der Zelle(n)* oder einen *Zellbereich*:

~~~jsx
// prüft, ob eine Zelle gesperrt ist
var cellLocked = spreadsheet.isLocked("A1"); 

// prüft, ob mehrere Zellen gesperrt sind
var rangeLocked = spreadsheet.isLocked("A1:C1");

// prüft, ob verstreute Zellen gesperrt sind
var cellsLocked = spreadsheet.isLocked("A1,B5,B7,D4:D6");
~~~

Die Methode gibt `true` oder `false` zurück, abhängig vom Zustand der Zelle. Wenn mehrere Zellen gleichzeitig geprüft werden, gibt die Methode `true` zurück, wenn mindestens eine gesperrte Zelle unter den angegebenen Zellen vorhanden ist.

## Zellen zusammenführen {#merging-cells}

### Zellen zusammenführen {#merge-cells}

Sie können zwei oder mehr Zellen zu einer zusammenführen, indem Sie einen Zellbereich, den Sie zusammenführen möchten, an die Methode [`mergeCells()`](api/spreadsheet_mergecells_method.md) übergeben:

~~~jsx
//Zellen A6, A7 und A8 zusammenführen
spreadsheet.mergeCells("A6:A8");

//Zellen B2, C2 und D2 zusammenführen
spreadsheet.mergeCells("B2:D2");
~~~

### Zellen trennen {#split-cells}

Sie können zusammengeführte Zellen auch mit der Methode [`mergeCells()`](api/spreadsheet_mergecells_method.md) wieder trennen. Übergeben Sie zusätzlich zum Zellbereich `true` als zweiten Parameter, um die Zusammenführung der angegebenen Zellen aufzuheben:

~~~jsx
//Zusammenführung der Zellen B2, C2 und D2 aufheben
spreadsheet.mergeCells("B2:D2", true);
~~~

## Zellen auswählen {#selecting-cells}

### Zellen auswählen {#select-cells}

Das Spreadsheet ermöglicht es Ihnen, die Zellauswahl über die API des `Selection`-Objekts festzulegen.

Sie können Zelle(n) auswählen, indem Sie deren ID(s) an die Methode [](api/selection_setselectedcell_method.md) übergeben:

~~~jsx
// eine Zelle auswählen
spreadsheet.selection.setSelectedCell("B5");
// einen Zellbereich auswählen
spreadsheet.selection.setSelectedCell("B1:B5");
// verstreute Zellen auswählen
spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
~~~

Es ist auch möglich, die ID(s) der ausgewählten Zelle(n) über die Methode [](api/selection_getselectedcell_method.md) abzurufen:

~~~jsx
const selected = spreadsheet.selection.getSelectedCell(); // -> "B7,B3,D4,D6,E4:E8"
~~~

### Auswahl aufheben {#unselect-cells}

Um die Auswahl von Zelle(n) aufzuheben, übergeben Sie deren ID(s) an die Methode [](api/selection_removeselectedcell_method.md):

~~~jsx
// Auswahl setzen
spreadsheet.selection.setSelectedCell("B7,B3,D4,D6,E4:E8");
// Auswahl entfernen
spreadsheet.selection.removeSelectedCell("B7,D4,E5:E7");

const selected = spreadsheet.selection.getSelectedCell();
console.log(selected); // -> "B3,D6,E4,E8"
~~~

**Verwandtes Beispiel:** [Spreadsheet. Auswahl entfernen](https://snippet.dhtmlx.com/u4j76cuh)

## Fokus auf eine Zelle setzen {#setting-focus-on-a-cell}

Das `Selection`-Objekt ermöglicht es Ihnen, den Fokus auf eine Tabellenzelle zu setzen und die ID der fokussierten Zelle abzurufen. Verwenden Sie dazu die entsprechenden Methoden:

- [](api/selection_setfocusedcell_method.md)

~~~jsx
// ID der Zelle übergeben, auf die der Fokus gesetzt werden soll
spreadsheet.selection.setFocusedCell("D4");
~~~

- [](api/selection_getfocusedcell_method.md)

~~~jsx
// fokussierte Zelle abrufen
var focused = spreadsheet.selection.getFocusedCell(); // -> "D4"
~~~
