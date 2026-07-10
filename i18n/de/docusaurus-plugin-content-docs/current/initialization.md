---
sidebar_label: Initialisierung
title: Initialisierung
description: In der Dokumentation erfahren Sie, wie die DHTMLX JavaScript Spreadsheet-Bibliothek initialisiert wird. Lesen Sie Entwickleranleitungen und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# Initialisierung {#initialization}

Diese Anleitung beschreibt, wie Sie DHTMLX Spreadsheet auf einer Seite erstellen und Ihrer Anwendung ein voll funktionsfähiges Arbeitsblatt hinzufügen. Führen Sie die folgenden Schritte aus, um die Komponente einsatzbereit zu machen:

1. [Binden Sie die DHTMLX Spreadsheet-Quelldateien auf einer Seite ein](#including-source-files).
2. [Erstellen Sie einen Container für DHTMLX Spreadsheet](#creating-container).
3. [Initialisieren Sie DHTMLX Spreadsheet mit dem Objekt-Konstruktor](#initializing-dhtmlx-spreadsheet).

<iframe src="https://snippet.dhtmlx.com/ihtkdcoc?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Quelldateien einbinden {#including-source-files}

[Laden Sie das Paket herunter](https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/download.shtml) und entpacken Sie es in einen Ordner Ihres Projekts.

Um DHTMLX Spreadsheet zu erstellen, müssen Sie 2 Quelldateien auf Ihrer Seite einbinden:

- spreadsheet.js
- spreadsheet.css

Stellen Sie sicher, dass Sie korrekte relative Pfade zu diesen Dateien setzen:

~~~html title="index.html"
<script type="text/javascript" src="codebase/spreadsheet.js"></script>  
<link rel="stylesheet" href="codebase/spreadsheet.css">
~~~

Die Struktur des Spreadsheet-Pakets ist wie folgt:

- *sources* - die Quellcode-Dateien der Bibliothek; sie sind leicht lesbar und hauptsächlich für das Debugging gedacht;
- *codebase* - die obfuskierten Code-Dateien der Bibliothek; sie sind deutlich kleiner und für den Einsatz in der Produktion vorgesehen. **Binden Sie diese Dateien in Ihre Apps ein, wenn diese fertig sind**;
- *samples* - die Code-Beispiele;
- *docs* - die vollständige Dokumentation der Komponente.

## Container erstellen {#creating-container}

Fügen Sie einen Container für Spreadsheet hinzu und geben Sie ihm eine ID, zum Beispiel "spreadsheet":

~~~html title="index.html"
<div id="spreadsheet"></div>
~~~

## DHTMLX Spreadsheet initialisieren {#initializing-dhtmlx-spreadsheet}

Initialisieren Sie DHTMLX Spreadsheet mit dem `dhx.Spreadsheet`-Objekt-Konstruktor. Der Konstruktor hat zwei Parameter:

- den HTML-Container für Spreadsheet,
- ein Objekt mit Konfigurationseigenschaften. [Siehe die vollständige Liste unten](#configuration-properties).

~~~jsx title="index.js"
// DHTMLX Spreadsheet erstellen
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // Konfigurationsoptionen
});
~~~

### Konfigurationseigenschaften {#configuration-properties}

Siehe die vollständige Liste der [Eigenschaften](api/api_overview.md#spreadsheet-properties), die Sie im Spreadsheet-Konfigurationsobjekt angeben können.

Sie können Konfigurationsoptionen bei der Initialisierung als zweiten Parameter des Konstruktors festlegen:

<iframe src="https://snippet.dhtmlx.com/vc3mstsw?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>
