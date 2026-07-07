---
sidebar_label: Arbeiten mit Zeilen und Spalten
title: Arbeiten mit Zeilen und Spalten
description: Sie erfahren, wie Sie in der DHTMLX JavaScript Spreadsheet-Bibliothek mit Zeilen und Spalten arbeiten. Entdecken Sie Entwicklerhandbücher und API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# Arbeiten mit Zeilen und Spalten {#work-with-rows-and-columns}

DHTMLX Spreadsheet ermöglicht Ihnen das Hinzufügen und Entfernen von Spalten und Zeilen, das automatische Anpassen der Spaltenbreite an den Inhalt, das Fixieren und Aufheben der Fixierung von Spalten und Zeilen sowie das Ein- und Ausblenden von Spalten und Zeilen uber Toolbar-Schaltflachen, Menüoptionen und Kontextmenüoptionen der Zelle.

## Hinzufügen/Entfernen von Zeilen und Spalten {#addingremoving-rows-and-columns}

### Zeilen hinzufügen {#adding-rows}

Um eine neue Zeile hinzuzufügen, führen Sie die folgenden Schritte aus:

1\. Wahlen Sie eine Zeile (durch Klicken auf ihre Kopfzeile) oder eine Zelle in der gewünschten Zeile aus.

2\. Wahlen Sie eine der folgenden Aktionen:

- Klicken Sie entweder auf die Schaltfläche **Rows** in der Toolbar und wählen Sie die Option *Add row above*

![DHTMLX Spreadsheet Rows toolbar button with the Add row above option highlighted](/img/add_row_button.png)

- oder wählen Sie die Menüoption **Insert** und dann *Rows -> Add row above*

![DHTMLX Spreadsheet Insert menu showing Rows and the Add row above option](/img/add_row_menu.png)

- oder klicken Sie mit der rechten Maustaste auf die Zeile oder eine Zelle in der Zeile und wählen Sie *Rows -> Add row above*

![DHTMLX Spreadsheet context menu with the Rows submenu showing Add row above](/img/add_row_context_menu.png)

### Zeilen entfernen {#removing-rows}

Um eine Zeile zu entfernen, führen Sie die folgenden Schritte aus:

1\. Wahlen Sie eine Zeile (durch Klicken auf ihre Kopfzeile) oder eine Zelle in der Zeile aus.

2\. Wahlen Sie eine der folgenden Aktionen:

- Klicken Sie auf die Schaltfläche **Rows** in der Toolbar und wählen Sie die Option *Remove row*

![DHTMLX Spreadsheet Rows toolbar button with the Remove row option highlighted](/img/remove_row_button.png)

- oder wählen Sie die Menüoption **Insert** und dann *Rows -> Remove row*

![DHTMLX Spreadsheet Insert menu showing Rows and the Remove row option](/img/remove_row_menu.png)

- oder klicken Sie mit der rechten Maustaste auf die Zeile oder eine Zelle in der Zeile und wählen Sie *Rows -> Remove row*

![DHTMLX Spreadsheet context menu with the Rows submenu showing Remove row](/img/remove_row_context_menu.png)

:::note
Um mehrere Zeilen auf einmal zu entfernen: Wahlen Sie die Zeilen aus, klicken Sie mit der rechten Maustaste, um das Kontextmenü aufzurufen, und wählen Sie *Rows -> Remove rows [ids]*.
:::

### Spalten hinzufügen {#adding-columns}

Um eine neue Spalte hinzuzufügen, führen Sie die folgenden Schritte aus:

1\. Wahlen Sie eine Spalte (durch Klicken auf ihre Kopfzeile) oder eine Zelle in der gewünschten Spalte aus.

2\. Wahlen Sie eine der folgenden Aktionen:

- Klicken Sie entweder auf die Schaltfläche **Columns** in der Toolbar und wählen Sie die Option *Add column left*

![DHTMLX Spreadsheet Columns toolbar button with the Add column left option highlighted](/img/add_column_button.png)

- oder wählen Sie die Menüoption **Insert** und dann *Columns -> Add column left*

![DHTMLX Spreadsheet Insert menu showing Columns and the Add column left option](/img/add_column_menu.png)

- oder klicken Sie mit der rechten Maustaste auf die Spalte oder eine Zelle in der Spalte und wählen Sie *Columns -> Add column left*

![DHTMLX Spreadsheet context menu with the Columns submenu showing Add column](/img/add_column_context_menu.png)

### Spalten entfernen {#removing-columns}

Um eine Spalte zu entfernen, führen Sie die folgenden Schritte aus:

1\. Wahlen Sie eine Spalte (durch Klicken auf ihre Kopfzeile) oder eine Zelle in der Spalte aus.

2\. Wahlen Sie eine der folgenden Aktionen:

- Klicken Sie auf die Schaltfläche **Columns** in der Toolbar und wählen Sie die Option *Remove column*

![DHTMLX Spreadsheet Columns toolbar button with the Remove column option highlighted](/img/remove_column_button.png)

- oder wählen Sie die Menüoption **Insert** und dann *Columns -> Remove column*

![DHTMLX Spreadsheet Insert menu showing Columns and the Remove column option](/img/remove_column_menu.png)

- oder klicken Sie mit der rechten Maustaste auf die Spalte oder eine Zelle in der Spalte und wählen Sie *Columns -> Remove column*

![DHTMLX Spreadsheet context menu with the Columns submenu showing Remove column](/img/remove_column_context_menu.png)

:::note
Um mehrere Spalten auf einmal zu entfernen: Wahlen Sie die Spalten aus, klicken Sie mit der rechten Maustaste, um das Kontextmenü aufzurufen, und wählen Sie *Columns -> Remove columns [ids]*.
:::

## Spaltenbreite automatisch anpassen {#autofit-column-width}

Um die Spaltenbreite so zu ändern, dass sie automatisch dem längsten Inhalt der Spalte entspricht, können Sie:

- auf den Cursor zum Anpassen der Größe einer Spalte im Tabellenkopf doppelklicken

![DHTMLX Spreadsheet column header with the resize cursor for autofitting column width](/img/resize_cursor.png)

- oder die folgenden Schritte ausführen:

1\. Klicken Sie mit der linken Maustaste auf das 3-Punkte-Symbol der Spalte

![DHTMLX Spreadsheet column context menu opened from the three dots icon](/img/column_context_menu.png)

2\. Wahlen Sie *Columns -> Fit to data*

![DHTMLX Spreadsheet Columns submenu with the Fit to data option for autofit column width](/img/column_autofit.png)

## Zeilen und Spalten fixieren/Fixierung aufheben {#freezingunfreezing-rows-and-columns}

### Zeilen fixieren {#freezing-rows}

Um Zeilen bis zu einer bestimmten Zeile zu fixieren, führen Sie die folgenden Schritte aus:

1\. Wahlen Sie eine Zeile (durch Klicken auf ihre Kopfzeile) oder eine Zelle in der gewünschten Zeile aus.

2\. Wahlen Sie eine der folgenden Aktionen:

- Klicken Sie entweder auf die Schaltfläche **Rows** in der Toolbar und wählen Sie die Option *Freeze up to row [id]*

![DHTMLX Spreadsheet Rows toolbar button with the Freeze up to row option highlighted](/img/freeze_rows_toolbar.png)

- oder wählen Sie die Menüoption **Edit** und dann *Freeze -> Freeze up to row [id]*

![DHTMLX Spreadsheet Edit menu with the Freeze submenu showing Freeze up to row](/img/freeze_rows_menu.png)

- oder klicken Sie mit der rechten Maustaste auf eine Zeile oder eine Zelle in der Zeile und wählen Sie *Rows -> Freeze up to row [id]*

![DHTMLX Spreadsheet context menu with the Rows submenu showing Freeze up to row](/img/freeze_rows_context_menu.png)

### Fixierung von Zeilen aufheben {#unfreezing-rows}

(*In den folgenden Abbildungen sind Zeilen bis zur Zeile 5 fixiert*)

Um die Fixierung von Zeilen aufzuheben, führen Sie einen der folgenden Schritte aus:

- Klicken Sie entweder auf die Schaltfläche **Rows** in der Toolbar und wählen Sie die Option *Unfreeze rows*

![DHTMLX Spreadsheet Rows toolbar button with the Unfreeze rows option highlighted](/img/unfreeze_rows_toolbar.png)

- oder wählen Sie die Menüoption **Edit** und dann *Freeze -> Unfreeze rows*

![DHTMLX Spreadsheet Edit menu with the Freeze submenu showing Unfreeze rows](/img/unfreeze_rows_menu.png)

- oder klicken Sie mit der rechten Maustaste auf eine beliebige Zelle und wählen Sie *Rows -> Unfreeze rows*

![DHTMLX Spreadsheet context menu with the Rows submenu showing Unfreeze rows](/img/unfreeze_rows_context_menu.png)

### Spalten fixieren {#freezing-columns}

Um Spalten bis zu einer bestimmten Spalte zu fixieren, führen Sie die folgenden Schritte aus:

1\. Wahlen Sie eine Spalte (durch Klicken auf ihre Kopfzeile) oder eine Zelle in der gewünschten Spalte aus.

2\. Wahlen Sie eine der folgenden Aktionen:

- Klicken Sie entweder auf die Schaltfläche **Columns** in der Toolbar und wählen Sie die Option *Freeze up to column [id]*

![DHTMLX Spreadsheet Columns toolbar button with the Freeze up to column option highlighted](/img/freeze_columns_toolbar.png)

- oder wählen Sie die Menüoption **Edit** und dann *Freeze -> Freeze up to column [id]*

![DHTMLX Spreadsheet Edit menu with the Freeze submenu showing Freeze up to column](/img/freeze_columns_menu.png)

- oder klicken Sie mit der rechten Maustaste auf eine Spalte oder eine Zelle in der Spalte und wählen Sie *Columns -> Freeze up to column [id]*

![DHTMLX Spreadsheet context menu with the Columns submenu showing Freeze up to column](/img/freeze_columns_context_menu.png)

### Fixierung von Spalten aufheben {#unfreezing-columns}

(*In den folgenden Abbildungen sind Spalten bis zur Spalte D fixiert*)

Um die Fixierung von Spalten aufzuheben, führen Sie einen der folgenden Schritte aus:

- Klicken Sie entweder auf die Schaltfläche **Columns** in der Toolbar und wählen Sie die Option *Unfreeze columns*

![DHTMLX Spreadsheet Columns toolbar button with the Unfreeze columns option highlighted](/img/unfreeze_columns_toolbar.png)

- oder wählen Sie die Menüoption **Edit** und dann *Freeze -> Unfreeze columns*

![DHTMLX Spreadsheet Edit menu with the Freeze submenu showing Unfreeze columns](/img/unfreeze_columns_menu.png)

- oder klicken Sie mit der rechten Maustaste auf eine beliebige Zelle und wählen Sie *Columns -> Unfreeze columns*

![DHTMLX Spreadsheet context menu with the Columns submenu showing Unfreeze columns](/img/unfreeze_columns_context_menu.png)

## Zeilen und Spalten ein-/ausblenden {#hidingshowing-rows-and-columns}

### Zeilen ausblenden {#hiding-rows}

Um eine Zeile auszublenden, führen Sie die folgenden Schritte aus:

1\. Wahlen Sie eine Zeile (durch Klicken auf ihre Kopfzeile) oder eine Zelle in der gewünschten Zeile aus.

2\. Wahlen Sie eine der folgenden Aktionen:

- Klicken Sie entweder auf die Schaltfläche **Rows** in der Toolbar und wählen Sie die Option *Hide row(s) [id]*

![DHTMLX Spreadsheet Rows toolbar button with the Hide rows option highlighted](/img/hide_rows_toolbar.png)

- oder klicken Sie mit der rechten Maustaste auf eine Zeile oder eine Zelle in der Zeile und wählen Sie *Rows -> Hide row(s) [id]*

![DHTMLX Spreadsheet context menu with the Rows submenu showing Hide rows](/img/hide_row_context_menu.png)

### Zeilen einblenden {#showing-rows}

Um ausgeblendete Zeilen einzublenden, führen Sie einen der folgenden Schritte aus:

- Klicken Sie entweder auf das "Pfeil"-Symbol, das im Zeilenkopf anstelle der ausgeblendeten Zeile(n) erscheint

(*In der folgenden Abbildung sind die Zeilen 8 und 11 ausgeblendet*)

![DHTMLX Spreadsheet rows header with the arrows icon indicating hidden rows](/img/show_rows.png)

- oder wählen Sie Zeilen oder mehrere Zellen aus, sodass die ausgeblendeten Zeilen in die Auswahl eingeschlossen sind, klicken Sie mit der rechten Maustaste, um das Kontextmenü aufzurufen, und wählen Sie *Rows -> Show rows*

(*In der folgenden Abbildung ist die Zeile 8 ausgeblendet*)

![DHTMLX Spreadsheet context menu with the Rows submenu showing Show rows](/img/show_rows_context_menu.png)

### Spalten ausblenden {#hiding-columns}

Um eine Spalte auszublenden, führen Sie die folgenden Schritte aus:

1\. Wahlen Sie eine Spalte (durch Klicken auf ihre Kopfzeile) oder eine Zelle in der gewünschten Spalte aus.

2\. Wahlen Sie eine der folgenden Aktionen:

- Klicken Sie entweder auf die Schaltfläche **Columns** in der Toolbar und wählen Sie die Option *Hide column(s) [id]*

![DHTMLX Spreadsheet Columns toolbar button with the Hide columns option highlighted](/img/hide_columns_toolbar.png)

- oder klicken Sie mit der rechten Maustaste auf eine Spalte oder eine Zelle in der Spalte und wählen Sie *Columns -> Hide column(s) [id]*

![DHTMLX Spreadsheet context menu with the Columns submenu showing Hide columns](/img/hide_columns_context_menu.png)

### Spalten einblenden {#showing-columns}

Um ausgeblendete Spalten einzublenden, führen Sie einen der folgenden Schritte aus:

- Klicken Sie entweder auf das "Pfeil"-Symbol, das im Spaltenkopf anstelle der ausgeblendeten Spalte(n) erscheint

(*In der folgenden Abbildung sind die Spalten C und E ausgeblendet*)

![DHTMLX Spreadsheet columns header with the arrows icon indicating hidden columns](/img/show_columns.png)

- oder wählen Sie Spalten oder mehrere Zellen aus, sodass die ausgeblendeten Spalten in die Auswahl eingeschlossen sind, klicken Sie mit der rechten Maustaste, um das Kontextmenü aufzurufen, und wählen Sie *Columns -> Show columns*

(*In der folgenden Abbildung ist die Spalte C ausgeblendet*)

![DHTMLX Spreadsheet context menu with the Columns submenu showing Show columns](/img/show_columns_context_menu.png)
