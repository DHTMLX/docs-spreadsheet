---
sidebar_label: Daten suchen
title: Daten suchen
description: Daten in DHTMLX Spreadsheet mit der Suchleiste durchsuchen. Öffnen Sie sie mit Ctrl (Cmd) + F oder über das Menü Daten, wechseln Sie zwischen den Treffern und schließen Sie sie mit Esc.
---

# Daten suchen {#searching-for-data}

Um die Suchleiste zu öffnen, haben Sie zwei Möglichkeiten:

- Setzen Sie den Fokus auf eine beliebige Zelle und drücken Sie **Ctrl (Cmd) + F**
- Oder navigieren Sie zu: *Daten* -> *Suchen*

![DHTMLX Spreadsheet-Suchleiste mit einem Texteingabefeld zum Suchen von Daten](/img/search_data.png)

Geben Sie den zu suchenden Text in die Suchleiste ein. Die erste Zelle, die den Text enthält, wird hervorgehoben und in den sichtbaren Bereich gescrollt, und der Zähler zeigt die Anzahl der Treffer an. Um zwischen den Treffern zu wechseln, klicken Sie auf die Pfeiltasten in der Suchleiste.

Die Suchergebnisse werden nach dem Bearbeiten von Zellen und nach dem Öffnen eines anderen Tabellenblatts aktualisiert. Screenreader kündigen die Anzahl der Treffer und die Adresse des ersten Treffers an, nachdem Sie die Eingabe beendet haben, zum Beispiel "Results: 5. 1 of 5, B2" oder "No results". Wenn Sie zu einem anderen Treffer wechseln, kündigen sie dessen Position und Adresse an, zum Beispiel "2 of 5, B7".

Um die Suchleiste zu schließen, drücken Sie **Esc** oder klicken Sie auf die Schaltfläche zum Schließen. Der Fokus kehrt zur aktiven Zelle zurück.

Um Daten über die API zu suchen, verwenden Sie die Methode [`search()`](api/spreadsheet_search_method.md).
