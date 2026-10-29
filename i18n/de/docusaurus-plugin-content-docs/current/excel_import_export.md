---
sidebar_label: Excel-Import/Export
title: Excel-Import und -Export
description: Daten aus Excel-Dateien in DHTMLX Spreadsheet importieren und über die Symbolleiste oder das Menü Datei nach .xlsx exportieren.
---

# Excel-Import/Export {#excel-importexport}

## Import aus Excel {#import-from-excel}

Sie können Daten aus einer Excel-Datei in Spreadsheet laden. Gehen Sie dazu wie folgt vor:

1\.  Klicken Sie in der Symbolleiste auf die Schaltfläche **Import** und wählen Sie *Microsoft Excel (.xlsx)*

![DHTMLX Spreadsheet toolbar with the Import button for Microsoft Excel XLSX files](/img/import_xlsx.png)

oder:

Gehen Sie zu: *Datei -> Importieren als... -> Microsoft Excel (.xlsx)* im Menü  

![DHTMLX Spreadsheet File menu with the Import As option for Microsoft Excel XLSX files](/img/file_import.png)

2\. Wählen Sie eine Excel-Datei auf Ihrem Computer aus. Der Inhalt wird in das geöffnete Tabellenblatt importiert.

## Export nach Excel {#export-to-excel}

Sie können die in Spreadsheet eingegebenen Daten in eine Excel-Datei exportieren. Führen Sie die folgenden Schritte aus:

1\. Klicken Sie in der Symbolleiste auf die Schaltfläche **Export**:

![DHTMLX Spreadsheet toolbar with the Export button for saving to Microsoft Excel XLSX](/img/export_xlsx.png)

oder:

Gehen Sie zu: *Datei -> Herunterladen als... -> Microsoft Excel (.xlsx)* im Menü  

![DHTMLX Spreadsheet File menu with the Download As option for Microsoft Excel XLSX export](/img/file_export.png)

2\. Überprüfen Sie Ihr Download-Verzeichnis, um die Excel-Datei mit den Daten aus Spreadsheet zu finden.

Screenreader kündigen den Beginn und das Ende von Import und Export an.

:::note
Import und Export von Excel-Dateien verwenden WebAssembly. Wenn der Browser WebAssembly nicht unterstützt, zeigen die Befehle Import und Export eine Meldung mit dem Text des Schlüssels `wasmNotSupported` der [Locale](localization.md#default-locale) an. Die Methode [`load()`](api/spreadsheet_load_method.md) mit dem Typ `"xlsx"` und die Methode [`export.xlsx()`](api/export_xlsx_method.md) werfen einen `Error` mit demselben Text, den Sie in Ihrem Code abfangen können.
:::
