---
sidebar_label: Zellen bearbeiten
title: Zellen bearbeiten
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie alles über die Arbeit mit Zellen. Lesen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# Zellen bearbeiten {#editing-cells}

## Inhalt in eine Zelle eingeben {#entering-content-in-a-cell}

### Daten manuell eingeben {#entering-data-manually}

- Klicken Sie auf eine gewünschte Zelle in einem Tabellenblatt.
- Geben Sie Text, eine Zahl, ein Datum oder eine Uhrzeit ein und drücken Sie **Enter**.

### Eine Formel eingeben {#entering-a-formula}

- Klicken Sie auf die Zelle, in der das Formelergebnis erscheinen soll.
- Geben Sie das Zeichen `=` ein.
- Erstellen Sie eine Formel. Dazu können Sie Folgendes verwenden:
    - Konstante Zahlen und Rechenoperatoren, zum Beispiel `=3-2*5+12`
    - Zellbezüge und Rechenoperatoren, zum Beispiel `=A1/A2`
    - [Integrierte Funktionen](functions.md), zum Beispiel `=MAX(C46;D46)`
- Drücken Sie **Enter**.

:::note
Kleinbuchstaben in Formeln werden automatisch in Großbuchstaben umgewandelt.
:::

## Einen Hyperlink in eine Zelle einfügen {#inserting-a-hyperlink-into-a-cell}

### Einen Link hinzufügen {#adding-a-link}

Um einen Hyperlink in eine Zelle einzufügen, können Sie eine der unten beschriebenen Methoden verwenden.

#### Über das Kontextmenü {#using-context-menu}

- Klicken Sie mit der rechten Maustaste auf die Zelle und wählen Sie *Link einfügen*

![DHTMLX Spreadsheet-Kontextmenü mit hervorgehobener Option „Link einfügen"](/img/link/via_context_menu.png)

- Geben Sie im angezeigten Fenster den Text und den Link ein und klicken Sie auf *Speichern*

![DHTMLX Spreadsheet-Dialog „Link einfügen" mit Eingabefeldern für Text und Link](/img/link/popup_window.png)

#### Über die Symbolleisten-Schaltfläche {#using-toolbar-button}

- Wählen Sie die Zelle aus und klicken Sie in der Symbolleiste auf die Schaltfläche **Link einfügen**

![DHTMLX Spreadsheet-Symbolleiste mit hervorgehobener Schaltfläche „Link einfügen"](/img/link/via_toolbar.png)

- Geben Sie im angezeigten Fenster den Text und den Link ein und klicken Sie auf *Speichern*

#### Über das Menü {#using-menu}

- Wählen Sie die Zelle aus und gehen Sie im Menü zu: *Einfügen -> Link einfügen*

![DHTMLX Spreadsheet-Menü „Einfügen" mit der Option „Link einfügen"](/img/link/via_menu.png)

- Geben Sie im angezeigten Fenster den Text und den Link ein und klicken Sie auf *Speichern*.

### Einen Link kopieren {#copying-a-link}

- Wählen Sie die Zelle aus, die den Link enthält, den Sie kopieren möchten
- Klicken Sie im angezeigten Popup auf das Symbol **Kopieren**

![DHTMLX Spreadsheet-Link-Popup mit hervorgehobenem Symbol „Kopieren"](/img/link/copy_link.png)

### Einen Link bearbeiten {#editing-a-link}

- Wählen Sie die Zelle aus, die den Link enthält, den Sie bearbeiten möchten
- Klicken Sie im angezeigten Popup auf das Symbol **Bearbeiten**

![DHTMLX Spreadsheet-Link-Popup mit hervorgehobenem Symbol „Bearbeiten"](/img/link/edit.png)

### Einen Link entfernen {#removing-a-link}

- Wählen Sie die Zelle aus, die den Link enthält, den Sie entfernen möchten
- Klicken Sie im angezeigten Popup auf das Symbol **Link entfernen**

![DHTMLX Spreadsheet-Link-Popup mit hervorgehobenem Symbol „Link entfernen"](/img/link/remove_link.png)

## Dropdown-Listen in Zellen verwenden {#using-drop-down-lists-in-cells}

Sie können in einer Zelle eine Dropdown-Liste erstellen, damit Benutzer das gewünschte Element aus der Liste auswählen können.

### Eine Dropdown-Liste manuell erstellen {#creating-a-drop-down-list-by-typing-it-manually}

- Wählen Sie eine Zelle oder einen Zellbereich aus, in dem Sie die Liste erstellen möchten

- Gehen Sie im Menü zu: *Daten -> Datenvalidierung*

- Wählen Sie das Kriterium *Liste der Elemente*

- Geben Sie die Elemente ein, die in der Dropdown-Liste erscheinen sollen

- Klicken Sie auf die Schaltfläche **Speichern**

![DHTMLX Spreadsheet-Dialog „Datenvalidierung" – Erstellen einer Dropdown-Liste aus einer Elementliste](/img/data_validation.gif)

### Eine Dropdown-Liste aus einem Bereich erstellen {#creating-a-drop-down-list-by-using-a-range}

- Geben Sie die Elemente ein, die in der Dropdown-Liste erscheinen sollen

- Wählen Sie eine Zelle oder einen Zellbereich aus, in dem Sie die Liste erstellen möchten

- Gehen Sie im Menü zu: *Daten -> Datenvalidierung*

- Wählen Sie das Kriterium *Liste aus einem Bereich*

- Wählen Sie Ihren Listenbereich aus

- Klicken Sie auf die Schaltfläche **Speichern**

![DHTMLX Spreadsheet-Dialog „Datenvalidierung" – Erstellen einer Dropdown-Liste aus einem Zellbereich](/img/data_validation_range.gif)

### Validierung aus einer Zelle entfernen {#removing-validation-from-a-cell}

Sie können die Verwendung einer Dropdown-Liste in einer Zelle beenden. Gehen Sie dazu folgendermaßen vor:

- Wählen Sie die gewünschte Zelle oder den Zellbereich aus, aus dem Sie die Dropdown-Liste entfernen möchten
- Gehen Sie im Menü zu: *Daten -> Datenvalidierung*
- Wählen Sie die Option *Validierung entfernen*

![DHTMLX Spreadsheet-Menü „Daten" mit der Option „Datenvalidierung – Validierung entfernen"](/img/remove_validation.png)

## Dieselben Daten in mehrere Zellen eingeben {#entering-the-same-data-in-several-cells}

Sie können dieselben Daten in mehrere Zellen eingeben, indem Sie den **Ausfüllpunkt** verwenden, um Daten in Tabellenzellen automatisch zu füllen. Weitere Details finden Sie unten.

### Zellen automatisch mit Inhalt füllen {#auto-filling-cells-with-content}

Sie können Zellen automatisch mit Daten füllen. So funktioniert es:

1\. Wählen Sie eine oder mehrere Zellen aus, deren Daten als Grundlage für das Füllen weiterer Zellen dienen sollen.

2\. Geben Sie Daten in die ausgewählte(n) Zelle(n) ein. Das automatische Füllen funktioniert auf mehrere Arten:

- Kopieren des Werts

​Beispiel: Um die Reihe 4, 4, 4, 4, ... zu erstellen, geben Sie 4 nur in die erste Zelle ein.

- Nach einem Muster
    - Um die Reihe 1, 2, 3, 4, 5, ... zu erstellen, geben Sie 1 und 2 in die ersten beiden Zellen ein.
    - Um die Reihe 1, 3, 5, 7, 9, ... zu erstellen, geben Sie 1 und 3 in die ersten beiden Zellen ein.
    - Um die Reihe 2, 4, 6, 8, 10, ... zu erstellen, geben Sie 2 und 4 in die ersten beiden Zellen ein.
    - Neben Zahlen können Sie auch Buchstaben in einem Muster verwenden, zum Beispiel: Um eine Reihe wie 1, a, 2, b, 3, a, 4, b, ... zu erstellen, geben Sie 1, a, 2, b in die ersten vier Zellen ein.

3\. Ziehen Sie den **Ausfüllpunkt**

![DHTMLX Spreadsheet-Autofill – Ausfüllpunkt ziehen, um Zelldaten zu replizieren](/img/autofill.gif)

## Zellen sperren {#locking-cells}

Sie können Zellen sperren, um ihre Werte vor Änderungen zu schützen. Wenn Sie eine Zelle sperren, wird in der oberen rechten Ecke ein graues "Schlüssel"-Symbol angezeigt. Gesperrte Zellen reagieren nicht auf Bearbeitungsversuche.

![DHTMLX Spreadsheet – gesperrte Zellen, markiert mit einem grauen Schlüssel-Symbol in der oberen rechten Ecke](/img/lockedcells.png)

Um eine Zelle zu sperren oder zu entsperren, verwenden Sie eine der unten beschriebenen Methoden:

### Zellen über die Symbolleisten-Schaltfläche sperren {#lock-cells-via-the-toolbar-button}

- Wählen Sie die Zellen aus, die Sie sperren/entsperren möchten (sie müssen nicht benachbart sein).
- Klicken Sie in der Symbolleiste auf die Schaltfläche **Zelle sperren**.

![DHTMLX Spreadsheet-Symbolleiste mit hervorgehobener Schaltfläche „Zelle sperren"](/img/lock.png)

### Zellen über das Kontextmenü sperren {#lock-cells-via-the-context-menu}

- Klicken Sie mit der rechten Maustaste auf eine Zelle oder einen Zellbereich, den Sie sperren/entsperren möchten.
- Wählen Sie im angezeigten Kontextmenü die Option „Zelle sperren/entsperren".

![DHTMLX Spreadsheet-Kontextmenü mit hervorgehobener Option „Zelle sperren/entsperren"](/img/unlock.png)
