---
sidebar_label: Konfiguration
title: Konfiguration
description: In der Dokumentation erfahren Sie alles über die Konfiguration der DHTMLX JavaScript Spreadsheet-Bibliothek. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# Konfiguration {#configuration}

Sie können die gewünschten Einstellungen von DHTMLX Spreadsheet an Ihre Bedürfnisse anpassen. Die verfügbaren Konfigurationsoptionen ermöglichen es Ihnen, die Anzahl der Zeilen und Spalten zu begrenzen, das Erscheinungsbild der Symbolleiste zu ändern und die Sichtbarkeit des Menüs sowie der Bearbeitungsleiste zu steuern. Bei Bedarf können Sie das Spreadsheet auch im schreibgeschützten Modus initialisieren.

## Symbolleiste {#toolbar}

Die Symbolleiste des Spreadsheets besteht aus mehreren Blöcken von Steuerelementen, die nach Ihren Bedürfnissen angepasst werden können. Standardmäßig enthält die Symbolleiste folgende Steuerelementblöcke: `"undo"`, `"colors"`, `"font"`, `"decoration"`, `"align"`, `"cell"`, `"format"`, `"actions"`. Sie können weitere Blöcke aus der Liste hinzufügen: `"lock"`, `"clear"`, `"rows"`, `"columns"`, `"file"`, `"help"`.

<iframe src="https://snippet.dhtmlx.com/kpm017nx?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>

Die Struktur der Symbolleiste kann über die Konfigurationsoption [`toolbarBlocks`](api/spreadsheet_toolbarblocks_config.md) der Komponente angepasst werden, die ein Array mit Zeichenketten enthält, welche die Namen der Steuerelemente darstellen.

Sie können auch eine eigene Struktur der Symbolleiste festlegen, indem Sie die benötigten Elemente im Array `toolbarBlocks` in der gewünschten Reihenfolge aufführen, zum Beispiel: `"colors"`, `"align"`, `"cell"`, `"decoration"`, `"lock"`, `"clear"`.

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    toolbarBlocks: ["colors", "align", "cell", "decoration", "lock", "clear"]
});
~~~

Die Symbolleiste ist [umfangreich anpassbar](customization.md). Sie können neue Steuerelemente hinzufügen, die Symbole der Steuerelemente ändern und das gewünschte Icon-Paket anwenden.

## Bearbeitungsleiste {#editing-bar}

Da die Struktur des Spreadsheets flexibel ist, können Sie die Bearbeitungsleiste ein- oder ausblenden, um das gewünschte Erscheinungsbild der Komponente zu erzielen. Verwenden Sie die Konfigurationsoption [`editLine`](api/spreadsheet_editline_config.md), um die Bearbeitungsleiste aus- oder einzublenden.

<iframe src="https://snippet.dhtmlx.com/unem2jkh?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Anzahl der Zeilen und Spalten {#number-of-rows-and-columns}

Bei der Initialisierung startet das Spreadsheet mit einem Raster von 26 Spalten und 1000 Zeilen. Wenn dieses Limit erschöpft ist, werden zusätzliche Zeilen und Spalten automatisch gerendert, sodass Sie diese nicht manuell hinzufügen müssen. Sie können jedoch die genaue Anzahl der Zeilen und Spalten im Raster festlegen, wenn Sie diese begrenzen möchten. Verwenden Sie dazu die Optionen [`colsCount`](api/spreadsheet_colscount_config.md) und [`rowsCount`](api/spreadsheet_rowscount_config.md).

<iframe src="https://snippet.dhtmlx.com/vc3mstsw?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Menü {#menu}

Das Menü des Spreadsheets ist standardmäßig ausgeblendet. Sie können es über die entsprechende Konfigurationsoption [`menu`](api/spreadsheet_menu_config.md) ein- oder ausblenden:

<iframe src="https://snippet.dhtmlx.com/uulux27v?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Schreibgeschützter Modus {#read-only-mode}

Sie können auch den schreibgeschützten Modus aktivieren, um die Bearbeitung von Spreadsheet-Zellen über die Konfigurationsoption [`readonly`](api/spreadsheet_readonly_config.md) zu verhindern.

Sie können auch das [schreibgeschützte Verhalten des Spreadsheets anpassen](customization.md#custom-read-only-mode).

<iframe src="https://snippet.dhtmlx.com/2w959gx2?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Benutzerdefinierte Zahlenformate für Zellen {#custom-number-formats-for-cells}

Sie können 7 Standardformate auf Zellwerte anwenden: "Common", "Number", "Percent", "Currency", "Date", "Time", "Text".

Sie können die Konfiguration der Standardformate neu definieren oder Ihr eigenes Zahlenformat über die Konfigurationsoption [`formats`](api/spreadsheet_formats_config.md) festlegen. Weitere Details finden Sie im Artikel [Zahlenformatierung](number_formatting.md).

<iframe src="https://snippet.dhtmlx.com/4c0c0zm7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>

## Pfad zu Export-/Import-Modulen {#path-to-exportimport-modules}

DHTMLX Spreadsheet kann Daten im Excel-Format importieren und exportieren. Die Komponente verwendet WebAssembly-basierte Bibliotheken: [Excel2Json](https://github.com/dhtmlx/excel2json) und [JSON2Excel](https://github.com/dhtmlx/json2excel) zum Import und Export von Daten.

Nach der Installation der erforderlichen Bibliothek müssen Sie den Pfad zur Datei *worker.js* (lokal oder über CDN) über die entsprechende Konfigurationsoption angeben: [`importModulePath`](api/spreadsheet_importmodulepath_config.md) oder [`exportModulePath`](api/spreadsheet_exportmodulepath_config.md).

Alle Details finden Sie im Artikel [Datenladen und Export](loading_data.md).

<iframe src="https://snippet.dhtmlx.com/wykwzfhm?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>
