---
sidebar_label: Spreadsheet-Aktionen
title: Aktionen-Übersicht
description: Überblick über die Aktionen von DHTMLX Spreadsheet und vollständige Liste der Aktionen, die Sie in den Events beforeAction und afterAction behandeln können.
---

# Aktionen-Übersicht {#actions-overview}

Dieser Abschnitt beschreibt einen neuen Ansatz zur Interaktion mit Spreadsheet-Events.

Ab v4.3 enthält DHTMLX Spreadsheet ein Paar von [`beforeAction`](api/spreadsheet_beforeaction_event.md)/[`afterAction`](api/spreadsheet_afteraction_event.md)-Events, die Ihren Code einfacher und kompakter gestalten. Sie werden unmittelbar vor der Ausführung einer Aktion ausgelöst und zeigen genau an, welche Aktion durchgeführt wurde.

~~~jsx
spreadsheet.events.on("beforeAction", (actionName, config) => {
    if (actionName === "addColumn") {
        console.log(actionName, config);
        return false;
    },
    // more actions
});

spreadsheet.events.on("afterAction", (actionName, config) => {
    if (actionName === "addColumn") {
        console.log(actionName, config)
    },
    // more actions
});
~~~

[Die vollständige Liste der verfügbaren Aktionen ist unten aufgeführt.](#list-of-actions)

>Das bedeutet, dass Sie nicht mehr Sätze von gekoppelten [**before-** und **after-**](api/overview/events_overview.md)-Events hinzufügen müssen, um die Aktionen zu verfolgen und zu verarbeiten, die Sie beim Ändern von Inhalten in der Tabelle ausführen. 

>Bei Bedarf können Sie jedoch den **alten Ansatz** weiterhin verwenden, da alle vorhandenen Events weiterhin wie gewohnt funktionieren:
~~~jsx
spreadsheet.events.on("afterColumnAdd", function(cell){
    console.log("A new column is added", cell);
});
~~~
~~~jsx
spreadsheet.events.on("beforeColumnAdd", function(cell){
    console.log("A new column will be added", cell);
    return true;
});
~~~




## Liste der Aktionen {#list-of-actions}

| Aktion               | Beschreibung                                                                                                                                                                                                  |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **addColumn**        | Die Aktion wird beim Hinzufügen einer neuen Spalte ausgeführt                                                                                                                                                 |
| **addRow**           | Die Aktion wird beim Hinzufügen einer neuen Zeile ausgeführt                                                                                                                                                  |
| **addSheet**         | Die Aktion wird beim Hinzufügen eines neuen Blatts ausgeführt                                                                                                                                                 |
| **clear**            | Die Aktion wird beim Leeren der Tabelle über die <b>clear()</b>-Methode ausgeführt                                                                                                                            |
| **clearSheet**       | Die Aktion wird beim Leeren eines Blatts über die <b>sheets.clear()</b>-Methode ausgeführt                                                                                                                    |
| **deleteColumn**     | Die Aktion wird beim Entfernen einer Spalte ausgeführt                                                                                                                                                        |
| **deleteRow**        | Die Aktion wird beim Entfernen einer Zeile ausgeführt                                                                                                                                                         |
| **deleteSheet**      | Die Aktion wird beim Entfernen eines Blatts ausgeführt                                                                                                                                                        |
| **filter**           | Die Aktion wird beim Filtern von Daten in einem Blatt ausgeführt                                                                                                                                              |
| **fitColumn**        | Die Aktion wird beim automatischen Anpassen der Spaltenbreite ausgeführt                                                                                                                                      |
| **groupAction**      | Die Aktion wird ausgeführt, wenn ein Zellbereich ausgewählt und darauf bestimmte Aktionen angewendet werden (z. B. Stil oder Format von Zellen ändern, Zellen sperren/entsperren oder Zellwerte/Stile löschen) |
| **insertLink**       | Die Aktion wird beim Einfügen eines Hyperlinks in eine Zelle ausgeführt                                                                                                                                       |
| **lockCell**         | Die Aktion wird beim Sperren/Entsperren einer Zelle ausgeführt                                                                                                                                                |
| **merge**            | Die Aktion wird beim Verbinden eines Zellbereichs ausgeführt                                                                                                                                                  |
| **removeCellStyles** | Die Aktion wird beim Löschen der Stile einer Zelle ausgeführt                                                                                                                                                 |
| **renameSheet**      | Die Aktion wird beim Umbenennen eines Blatts ausgeführt                                                                                                                                                       |
| **resizeCol**        | Die Aktion wird beim Ändern der Spaltenbreite durch Ziehen des Spaltenrands oder mit dem Befehl *Spaltenbreite* ausgeführt                                                                                                                                                      |
| **resizeRow**        | Die Aktion wird beim Ändern der Zeilenhöhe durch Ziehen des Zeilenrands oder mit dem Befehl *Zeilenhöhe* ausgeführt                                                                                                                                                         |
| **setCellFormat**    | Die Aktion wird beim Ändern des Formats einer Zelle ausgeführt                                                                                                                                                |
| **setCellValue**     | Die Aktion wird beim Ändern oder Entfernen des Werts einer Zelle ausgeführt                                                                                                                                   |
| **setValidation**    | Die Aktion wird beim Festlegen der Datenvalidierung für eine Zelle ausgeführt                                                                                                                                 |
| **sortCells**        | Die Aktion wird beim Sortieren von Daten in der Tabelle ausgeführt                                                                                                                                            |
| **setCellStyle**     | Die Aktion wird beim Ändern des Stils einer Zelle ausgeführt                                                                                                                                                  |
| **toggleVisibility** | Die Aktion wird beim Ein-/Ausblenden von Spalten/Zeilen ausgeführt                                                                                                                                            |
| **toggleFreeze**     | Die Aktion wird beim Einfrieren/Aufheben des Einfrierens von Spalten/Zeilen ausgeführt                                                                                                                        |
| **unmerge**          | Die Aktion wird beim Aufheben der Verbindung von Zellen ausgeführt                                                                                                                                            |

:::note
Im `config`-Objekt der Events [`beforeAction`](api/spreadsheet_beforeaction_event.md) und [`afterAction`](api/spreadsheet_afteraction_event.md) übergeben die Aktionen **resizeCol** und **resizeRow** Folgendes:

- `cell` - die Zelle oder der Zellbereich, dessen Spalten oder Zeilen in der Größe geändert werden
- `val` - die neue Breite oder Höhe in Pixeln. Der Wert wird nur für die Befehle *Spaltenbreite* und *Zeilenhöhe* gesetzt, nicht beim Ändern der Größe durch Ziehen
:::

**Changelog:**

- Die Aktionen **toggleFreeze** und **toggleVisibility** wurden in v5.2 hinzugefügt
- Die Aktionen **merge**, **unmerge**, **filter**, **fitColumn**, **insertLink** wurden in v5.0 hinzugefügt

**Verwandtes Beispiel:** [Spreadsheet. Aktionen](https://snippet.dhtmlx.com/efcuxlkt)
