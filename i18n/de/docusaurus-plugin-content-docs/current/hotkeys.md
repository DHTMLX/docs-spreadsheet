---
sidebar_label: Liste der Tastenkombinationen
title: Tastenkombinationen
description: Tastenkombinationen von DHTMLX Spreadsheet zum Bearbeiten, Formatieren, für die Navigation, Auswahl, Suche, die Arbeit mit Tabellenblättern, Zeilen und Spalten sowie für Popups und Dialoge.
---

# Liste der Tastenkombinationen {#hot-keys-list}

Hier finden Sie eine Übersicht der Tastenkombinationen, die Sie bei der Arbeit mit DHTMLX Spreadsheet verwenden können.

:::note
Die Tastenkombinationen für Zellen funktionieren, solange sich der Fokus in den Zellen oder in der Formelleiste befindet. Die Tastenkombinationen für Formatierung, Rückgängig, Suche, Link und das Hinzufügen von Tabellenblättern funktionieren auch, wenn sich der Fokus in der Symbolleiste befindet. Wenn sich der Fokus in der Symbolleiste, in der Menüleiste oder in den Tabellenblatt-Registern befindet, funktionieren die Pfeiltasten sowie **Home**, **End**, **Enter** und **Leertaste** innerhalb dieser Leiste (siehe [Fokus verschieben](#moving-the-focus)).

Im [schreibgeschützten Modus](api/spreadsheet_readonly_config.md) funktionieren die Tastenkombinationen für Navigation, Auswahl, Kopieren und Suche. Tastenkombinationen, die das Tabellenblatt ändern, darunter **Ctrl (Cmd) + Shift + 9**, **Ctrl (Cmd) + Shift + 0** und **Shift + F11**, werden abgelehnt, und Screenreader melden "The sheet is read-only". Das Kontextmenü ist nicht verfügbar, daher funktionieren **Shift + F10** und die Menütaste nicht.

Informationen zur Tastaturnavigation mit Screenreadern finden Sie im Handbuch [Barrierefreiheit](accessibility.md#keyboard-navigation).
:::

## Bearbeitung {#editing}

<table>
    <tbody>
        <tr>
            <td><b>Enter</b></td>
            <td>aktiviert den Editor in einer Zelle</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Enter</b></td>
            <td>beendet die Bearbeitung der Zelle und behält die Auswahl auf der Zelle</td>
        </tr>
        <tr>
            <td><b>F2</b></td>
            <td>öffnet den Editor in der ausgewählten Zelle</td>
        </tr>
        <tr>
            <td><b>Esc</b></td>
            <td>schließt den Editor in einer Zelle ohne die Änderungen zu speichern</td>
        </tr>
        <tr>
            <td><b>Alt (Option) + Enter</b></td>
            <td>öffnet den Link der aktiven Zelle in einem neuen Tab</td>
        </tr>
    </tbody>
</table>

## Zellen formatieren {#formatting-cells}

<table> 
    <tbody>
        <tr>
            <td><b>Ctrl (Cmd) + C</b></td>
            <td>kopiert den Wert einer Zelle</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + V</b></td>
            <td>fügt den Wert in eine Zelle ein und ersetzt dabei den ausgewählten Inhalt</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + X</b></td>
            <td>schneidet den Wert einer Zelle aus</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Z</b></td>
            <td>macht die letzte Aktion in einem Tabellenblatt rückgängig</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Y</b></td>
            <td>wiederholt die letzte Aktion in einem Tabellenblatt</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + Z</b></td>
            <td>wiederholt die letzte Aktion in einem Tabellenblatt</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + B</b></td>
            <td>formatiert den Wert einer Zelle fett</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + I</b></td>
            <td>formatiert den Wert einer Zelle kursiv</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + U</b></td>
            <td>formatiert den Wert einer Zelle mit Unterstreichung</td>
        </tr>
        <tr>
            <td><b>Alt + Shift + 5 (Cmd + Shift + X)</b></td>
            <td>formatiert den Wert einer Zelle mit Durchstreichung</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + E</b></td>
            <td>zentriert den Wert einer Zelle horizontal</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + R</b></td>
            <td>richtet den Wert einer Zelle rechtsbündig aus</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + L</b></td>
            <td>richtet den Wert einer Zelle linksbündig aus</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + K</b></td>
            <td>fügt einen Hyperlink in eine Zelle ein</td>
        </tr>
        <tr>
            <td><b>Delete</b></td>
            <td>entfernt den Zellinhalt und behält dabei die angewendeten Stile</td>
        </tr>
        <tr>
            <td><b>Backspace</b></td>
            <td>entfernt den Zellinhalt und behält dabei die angewendeten Stile</td>
        </tr>
    </tbody>
</table>

## Navigation {#navigation}

{{note Die Navigation funktioniert nur, wenn keine Zelle bearbeitet wird.}}

<table>
    <tbody>
        <tr>
            <td><b>Enter</b></td>
            <td>aktiviert den Editor in einer Zelle. Schließt den Editor und verschiebt die Auswahl um eine Zelle nach unten (in einer Spalte). Wenn ein Zellbereich ausgewählt ist, wird die Auswahl innerhalb des Bereichs um eine Zelle nach unten verschoben.</td>
        </tr>
        <tr>
            <td><b>Shift + Enter</b></td>
            <td>verschiebt die Auswahl um eine Zelle nach oben (in einer Spalte). Wenn ein Zellbereich ausgewählt ist, wird die Auswahl innerhalb des Bereichs um eine Zelle nach oben verschoben.</td>
        </tr>
        <tr>
            <td><b>Tab</b></td>
            <td>verschiebt die Auswahl um eine Zelle nach rechts (in einer Zeile). Von der äußersten rechten Zelle aus wird die Auswahl zur ersten Zelle derselben Zeile verschoben. Wenn ein Zellbereich ausgewählt ist, wird die Auswahl innerhalb des Bereichs um eine Zelle nach rechts verschoben. Von der letzten Zelle des Tabellenblatts aus wird der bearbeitete Wert gespeichert und der Fokus aus den Zellen zum nächsten Teil der Seite verschoben, zum Beispiel zu den Tabellenblatt-Registern.</td>
        </tr>
        <tr>
            <td><b>Tab + Shift</b></td>
            <td>verschiebt die Auswahl um eine Zelle nach links (in einer Zeile). Von der äußersten linken Zelle aus wird die Auswahl zur letzten Zelle derselben Zeile verschoben. Wenn ein Zellbereich ausgewählt ist, wird die Auswahl innerhalb des Bereichs um eine Zelle nach links verschoben. Von der ersten Zelle des Tabellenblatts aus wird der bearbeitete Wert gespeichert und der Fokus aus den Zellen zum vorherigen Teil der Seite verschoben, zum Beispiel zur Formelleiste.</td>
        </tr>
        <tr>
            <td><b>Pfeiltasten</b></td>
            <td>ermöglichen die Navigation zwischen den Zellen in einem Tabellenblatt. Stoppen an der ersten und letzten sichtbaren Zeile und Spalte. Wenn ein Zellbereich ausgewählt ist, reduziert eine Pfeiltaste am Rand des Tabellenblatts den Bereich auf die aktive Zelle</td>
        </tr>
        <tr>
            <td><b>Home</b></td>
            <td>verschiebt die Auswahl zur ersten sichtbaren Zelle in der Zeile</td>
        </tr>
        <tr>
            <td><b>End</b></td>
            <td>verschiebt die Auswahl zur letzten sichtbaren Zelle in der Zeile</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Linke Pfeiltaste</b></td>
            <td>verschiebt die Auswahl zur ersten sichtbaren Zelle in einer Zeile</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Rechte Pfeiltaste</b></td>
            <td>verschiebt die Auswahl zur letzten sichtbaren Zelle in einer Zeile</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Obere Pfeiltaste</b></td>
            <td>verschiebt die Auswahl zur ersten sichtbaren Zelle in einer Spalte</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Untere Pfeiltaste</b></td>
            <td>verschiebt die Auswahl zur letzten sichtbaren Zelle in einer Spalte</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Home</b></td>
            <td>verschiebt die Auswahl zum Anfang des Tabellenblatts (obere linke Zelle)</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + End</b></td>
            <td>verschiebt die Auswahl zum Ende des Tabellenblatts (untere rechte Zelle)</td>
        </tr>
        <tr>
            <td><b>Shift + Obere/Untere/Linke/Rechte Pfeiltaste</b></td>
            <td>erweitert die Auswahl ausgehend von der ausgewählten Zelle</td>
        </tr>
        <tr>
            <td><b>Page Up</b></td>
            <td>scrollt das Tabellenblatt um einen Bildschirm nach oben</td>
        </tr>
        <tr>
            <td><b>Page Down</b></td>
            <td>scrollt das Tabellenblatt um einen Bildschirm nach unten</td>
        </tr>
    </tbody>
</table>

## Fokus verschieben {#moving-the-focus}

Die Symbolleiste, die Menüleiste und die Tabellenblatt-Register sind jeweils ein einzelner Tab-Stopp: <b>Tab</b> verschiebt den Fokus in eine Leiste hinein und wieder heraus, und der Fokus landet auf dem zuletzt verwendeten Steuerelement.

<table>
    <tbody>
        <tr>
            <td><b>Ctrl + F6</b></td>
            <td>verschiebt den Fokus zum nächsten Teil von Spreadsheet in der Reihenfolge: Menü, Symbolleiste, Tabellenblatt (die aktive Zelle), Tabellenblatt-Register und dann zurück zum Menü. Die Formelleiste und ausgeblendete Teile werden übersprungen. Speichert zuvor den Wert der bearbeiteten Zelle</td>
        </tr>
        <tr>
            <td><b>Ctrl + Shift + F6</b></td>
            <td>verschiebt den Fokus zum vorherigen Teil von Spreadsheet</td>
        </tr>
        <tr>
            <td><b>Linke Pfeiltaste/Rechte Pfeiltaste</b></td>
            <td>verschiebt den Fokus zum vorherigen/nächsten Steuerelement der Symbolleiste, der Menüleiste oder der Tabellenblatt-Register</td>
        </tr>
        <tr>
            <td><b>Home/End</b></td>
            <td>verschiebt den Fokus zum ersten/letzten Steuerelement der Leiste</td>
        </tr>
        <tr>
            <td><b>Enter/Leertaste</b></td>
            <td>betätigt das fokussierte Steuerelement: führt den Befehl aus, öffnet das Dropdown oder wechselt zum Tabellenblatt des fokussierten Registers</td>
        </tr>
        <tr>
            <td><b>Untere Pfeiltaste</b></td>
            <td>öffnet das Dropdown des fokussierten Steuerelements und verschiebt den Fokus zu dessen erstem Element</td>
        </tr>
        <tr>
            <td><b>Obere Pfeiltaste/Untere Pfeiltaste</b></td>
            <td>verschiebt den Fokus zwischen den Elementen eines geöffneten Dropdowns oder Menüs</td>
        </tr>
        <tr>
            <td><b>Rechte Pfeiltaste</b></td>
            <td>öffnet das Untermenü des fokussierten Menüelements</td>
        </tr>
        <tr>
            <td><b>Linke Pfeiltaste</b></td>
            <td>schließt das Untermenü. In der ersten Ebene eines Dropdowns schließt sie das Dropdown und gibt den Fokus an dessen Steuerelement zurück</td>
        </tr>
        <tr>
            <td><b>Esc</b></td>
            <td>schließt das Dropdown oder das Menü und gibt den Fokus an das Steuerelement zurück, das es geöffnet hat. Schließt den Tooltip eines Symbolleisten-Steuerelements. Ohne <b>Esc</b> bleibt der Tooltip geöffnet, solange sich der Mauszeiger darauf befindet</td>
        </tr>
        <tr>
            <td><b>Shift + F10 oder Menütaste</b></td>
            <td>öffnet das Kontextmenü der aktiven Zelle oder des fokussierten Tabellenblatt-Registers und verschiebt den Fokus hinein. Nach <b>Ctrl (Cmd) + Space</b> zeigt das Kontextmenü einer Zelle die Befehle für die Spalte. <b>Esc</b> schließt das Kontextmenü und gibt den Fokus an die Zelle zurück</td>
        </tr>
    </tbody>
</table>

## Suche {#search}

<table>
    <tbody>
        <tr>
            <td><b>Ctrl (Cmd) + F</b></td>
            <td>öffnet ein Suchfeld in der oberen rechten Ecke der Tabelle</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + G</b></td>
            <td>hebt den nächsten gefundenen Treffer hervor</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + G</b></td>
            <td>hebt den vorherigen gefundenen Treffer hervor</td>
        </tr>
        <tr>
            <td><b>Esc</b></td>
            <td>schließt das Suchfeld und gibt den Fokus an die aktive Zelle zurück</td>
        </tr>
    </tbody>
</table>

## Auswahl {#selection}

<table>
    <tbody>
        <tr>
            <td><b>Ctrl (Cmd) + A</b></td>
            <td>wählt alle Zellen in einem Tabellenblatt aus</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Linksklick</b></td>
            <td>ermöglicht die Auswahl mehrerer einzelner Zellen</td>
        </tr>
        <tr>
            <td><b>Linke Shift-Taste + Linksklick</b></td>
            <td>ermöglicht die Auswahl eines Zellbereichs, bei dem die ausgewählte Zelle die erste Zelle<br> des Bereichs und die angeklickte Zelle die letzte Zelle des Bereichs ist</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + Linksklick</b></td>
            <td>ermöglicht die Auswahl mehrerer einzelner Zellbereiche</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Space</b></td>
            <td>wählt die gesamte Spalte aus</td>
        </tr>
        <tr>
            <td><b>Shift + Space</b></td>
            <td>wählt die gesamte Zeile aus</td>
        </tr>
    </tbody>
</table>

## Arbeit mit Tabellenblättern {#work-with-sheets}

<table>
    <tbody>
        <tr>
            <td><b>Shift + F11</b></td>
            <td>fügt ein neues Tabellenblatt in die Tabelle ein</td>
        </tr>
        <tr>
            <td><b>Alt (Option) + Pfeiltaste oben</b></td>
            <td>wechselt zum nächsten Tabellenblatt. Vom letzten Tabellenblatt aus wird zum ersten gewechselt</td>
        </tr>
        <tr>
            <td><b>Alt (Option) + Pfeiltaste unten</b></td>
            <td>wechselt zum vorherigen Tabellenblatt. Vom ersten Tabellenblatt aus wird zum letzten gewechselt</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Alt (Option) + Page Down</b></td>
            <td>wechselt zum nächsten Tabellenblatt</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Alt (Option) + Page Up</b></td>
            <td>wechselt zum vorherigen Tabellenblatt</td>
        </tr>
    </tbody>
</table>

## Arbeit mit Zeilen und Spalten {#work-with-rows-and-columns}

<table>
    <tbody>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + 9</b></td>
            <td>blendet die ausgeblendeten Zeilen innerhalb des ausgewählten Bereichs ein</td>
        </tr>
        <tr>
            <td><b>Ctrl (Cmd) + Shift + 0</b></td>
            <td>blendet die ausgeblendeten Spalten innerhalb des ausgewählten Bereichs ein</td>
        </tr>
    </tbody>
</table>

## Symbolleisten-Popups {#toolbar-popups}

Die folgenden Tasten funktionieren in den Popups der Steuerelemente *Text color*, *Background color* und *Border* der Symbolleiste. Das Popup erhält beim Öffnen den Fokus.

<table>
    <tbody>
        <tr>
            <td><b>Pfeiltasten</b></td>
            <td>verschieben den Fokus zwischen den Farben der Palette oder zwischen den Steuerelementen des Border-Popups</td>
        </tr>
        <tr>
            <td><b>Home/End</b></td>
            <td>verschiebt den Fokus zur ersten/letzten Farbe der Palette</td>
        </tr>
        <tr>
            <td><b>Enter</b></td>
            <td>wendet die fokussierte Farbe oder den fokussierten Rahmen an. Nachdem eine Text- oder Hintergrundfarbe angewendet wurde, kehrt der Fokus zur aktiven Zelle zurück</td>
        </tr>
        <tr>
            <td><b>Esc</b></td>
            <td>kehrt vom benutzerdefinierten Farbmodus zur Palette zurück. In einem über dem Border-Popup geöffneten Farb- oder Stil-Popup schließt sie dieses und gibt den Fokus an dessen Schaltfläche im Border-Popup zurück. Andernfalls schließt sie das Popup und gibt den Fokus an dessen Symbolleisten-Steuerelement zurück</td>
        </tr>
        <tr>
            <td><b>Tab/Tab + Shift</b></td>
            <td>schließt das Popup und gibt den Fokus an dessen Symbolleisten-Steuerelement zurück. Im Border-Popup und in den darüber geöffneten Popups werden alle geschlossen und der Fokus kehrt zum Border-Steuerelement zurück. Im benutzerdefinierten Farbmodus verschiebt sie den Fokus zwischen den Steuerelementen des Farbwählers</td>
        </tr>
    </tbody>
</table>

## Listen-Editor {#list-editor}

Die folgenden Tasten funktionieren im Editor einer Zelle mit einer [Werteliste](api/spreadsheet_setvalidation_method.md).

<table>
    <tbody>
        <tr>
            <td><b>Obere Pfeiltaste/Untere Pfeiltaste</b></td>
            <td>navigiert durch die Werteliste</td>
        </tr>
        <tr>
            <td><b>Enter</b></td>
            <td>wählt den Wert aus und schließt den Editor</td>
        </tr>
        <tr>
            <td><b>Esc</b></td>
            <td>schließt den Editor ohne die Änderungen zu speichern</td>
        </tr>
        <tr>
            <td><b>Tab</b></td>
            <td>speichert den Wert und verschiebt die Auswahl um eine Zelle nach rechts</td>
        </tr>
    </tbody>
</table>

## Filter und Dialoge {#filter-and-dialogs}

Die folgenden Tasten funktionieren im Popup eines [Filters](filtering_data.md#opening-a-filter-with-the-keyboard) und in den Dialogen [Spaltenbreite und Zeilenhöhe](work_with_rows_cols.md#setting-column-width-and-row-height).

<table>
    <tbody>
        <tr>
            <td><b>Esc</b></td>
            <td>schließt das Filter-Popup und gibt den Fokus an die Zelle zurück</td>
        </tr>
        <tr>
            <td><b>Enter</b></td>
            <td>wendet die Größe in den Dialogen Column width und Row height an</td>
        </tr>
        <tr>
            <td><b>Esc</b></td>
            <td>schließt die Dialoge Column width und Row height ohne Änderungen</td>
        </tr>
    </tbody>
</table>
