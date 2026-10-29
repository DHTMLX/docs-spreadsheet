---
sidebar_label: Barrierefreiheit
title: Barrierefreiheit
description: Machen Sie DHTMLX Spreadsheet für Tastatur- und Screenreader-Nutzer zugänglich. Erfahren Sie mehr über WAI-ARIA-Unterstützung, Tastaturnavigation, Screenreader-Ansagen und Themes mit hohem Kontrast, die auf WCAG 2.2 AA ausgerichtet sind.
---

# Barrierefreiheit in DHTMLX Spreadsheet

Dieser Leitfaden richtet sich an Entwickler, die DHTMLX Spreadsheet in eine Anwendung einbetten, die Anforderungen an die Barrierefreiheit erfüllen muss. Anhand des Leitfadens können Sie die Komponente mit Ihrer Checkliste abgleichen und für Nutzer von Tastatur, Screenreader und hohem Kontrast konfigurieren.

Das Spreadsheet rendert WAI-ARIA-Rollen und -Zustände als Teil seines Markups. Der Tastaturfokus bleibt auf der aktiven Zelle, und die Symbolleiste, die Menüleiste und die Blattregisterkarten bilden jeweils einen einzigen Tabstopp. Änderungen, die kein eigenes Element haben, etwa eine abgelehnte Bearbeitung oder ein Suchergebnis, werden an eine Live-Region gesendet, die Screenreader vorlesen.

:::info Ziel-Konformität
DHTMLX Spreadsheet ist darauf ausgelegt, **WCAG 2.2 Level AA**, **Section 508** des U.S. Rehabilitation Act und **EN 301 549** (die technische Grundlage des European Accessibility Act) zu erfüllen.

Die Konformität wird für DHTMLX Spreadsheet 6.0.4 Kriterium für Kriterium dokumentiert. Der ausführliche **Accessibility Conformance Report (VPAT® 2.5)** ist verfügbar: [Accessibility Conformance Report](accessibility_conformance_report.md).
:::

## Funktionen {#capabilities}

| Bereich | Unterstützung |
| ---- | ------- |
| Tastaturbedienung | Jeder Befehl für die Zellen hat eine Taste. Die Symbolleiste, die Menüleiste und die Blattregisterkarten sind einzelne Tabstopps, die mit den Pfeiltasten navigiert werden. Spaltenbreite, Zeilenhöhe und Spaltenfilter haben Kontextmenübefehle, sodass weder Ziehen noch ein Klick auf ein Symbol erforderlich ist |
| WAI-ARIA-Semantik | Die Zellen sind ein `grid` mit den Elementen `columnheader`, `rowheader` und `gridcell`. Die Rollen werden immer gerendert |
| Fokusmodell | Der Tastaturfokus liegt auf der aktiven Zelle. <kbd>Tab</kbd> betritt das Blatt auf der aktiven Zelle und verlässt es von der letzten bzw. der ersten Zelle aus. <kbd>Ctrl</kbd> + <kbd>F6</kbd> verschiebt den Fokus zwischen dem Menü, der Symbolleiste, dem Blatt und den Blattregisterkarten |
| Auswahlmodell | Die aktive Zelle, ein Bereich und mehrere Bereiche werden über `aria-selected` bereitgestellt, und die Ausdehnung eines Bereichs wird angesagt. Die Auswahl lässt sich mit der Option [`selection`](api/spreadsheet_selection_config.md) deaktivieren |
| Schreibgeschützter Modus | Das Blatt kann navigiert, ausgewählt, kopiert und durchsucht werden; Bearbeitungen werden abgelehnt und angesagt, und das Kontextmenü ist nicht verfügbar |
| Screenreader | Getestet mit NVDA, JAWS und VoiceOver |
| Visuelle Barrierefreiheit | Die Themes `contrast-light` und `contrast-dark`, ein sichtbarer Fokusindikator in jedem Theme sowie Hinweise, die nicht von der Farbe abhängen |
| Textgröße und Zoom | Das Layout bleibt bei 200 % und 400 % Zoom sowie mit überschriebenen Textabständen bedienbar |
| Anpassung | Die öffentliche Methode [`announce()`](api/spreadsheet_announce_method.md) für eigene Meldungen und übersetzbare `aria_*`-Locale-Strings für jeden integrierten Namen und jede integrierte Ansage |
| Standards | WCAG 2.2 AA, Section 508, EN 301 549 |

## Abgedeckte Bereiche {#covered-areas}

Dieser Leitfaden behandelt das Spreadsheet-Widget:

- die Zellen, die Spalten- und Zeilenköpfe, verbundene Zellen sowie fixierte Zeilen und Spalten
- die Auswahl: die aktive Zelle, Bereiche und mehrere Bereiche
- die Formelleiste und die Zelleneditoren, einschließlich des Editors einer Zelle mit einer Werteliste
- die Symbolleiste mit ihren Farb- und Rahmen-Popups, die Menüleiste und die Kontextmenüs
- die Blattregisterkarten
- Sortierung, Filterung, Suche, Datenvalidierung, Links in Zellen, Import und Export
- die Themes und den Fokusindikator

Die Barrierefreiheit der fertigen Seite hängt auch von der Host-Anwendung ab. Siehe [Verantwortung der Host-Seite](#host-page-responsibilities).

## WAI-ARIA-Unterstützung {#wai-aria-support}

Das Spreadsheet fügt seinem Markup automatisch WAI-ARIA-Rollen und -Attribute hinzu, und Sie können diese nicht deaktivieren. Jeder Teil des Widgets hat eine eigene Rolle und einen eigenen Namen, und die Namen stammen aus der [Locale](#localization).

### Spreadsheet-Container {#spreadsheet-container}

Die Teile des Spreadsheets sind separate benannte Steuerelemente:

| Teil | Rolle / Attribut | Zugänglicher Name |
| ---- | ---------------- | --------------- |
| Menüleiste | `role="menubar"` + `aria-label` | "Main" |
| Symbolleiste | `role="toolbar"` + `aria-label` | "Formatting" |
| Formelleiste | `aria-label` am Eingabefeld | "Formula bar, B7", mit der Adresse der aktiven Zelle |
| Zellen | `role="grid"` + `aria-label` | "Spreadsheet" |
| Blattregisterkarten | `role="toolbar"` + `aria-label` | "Sheets" |
| Live-Region | `role="status"`, `aria-live="polite"`, `aria-atomic="true"` | visuell verborgen, neben dem Grid außerhalb von `role="grid"` platziert |

Das Wurzelelement des Spreadsheets hat keine Landmark-Rolle, sodass Sie es in die Landmark platzieren können, die zu Ihrer Seite passt.

### Zellenoberfläche {#cell-surface}

Die folgenden Attribute beschreiben die Zellen als Ganzes. Das Element `.dhx_grid-content` trägt sie:

| Selektor | Rolle / Attribut | Zweck |
| -------- | ---------------- | ------- |
| `.dhx_grid-content` | `role="grid"` | Das interaktive Grid der Zellen |
| `.dhx_grid-content` | `aria-label` | "Spreadsheet", aus dem Locale-Schlüssel `aria_grid` |
| `.dhx_grid-content` | `aria-rowcount` | Die Anzahl der Zeilen des Blatts plus die Kopfzeile |
| `.dhx_grid-content` | `aria-colcount` | Die Anzahl der sichtbaren Spalten plus die Spalte der Zeilennummern |
| `.dhx_grid-content` | `aria-readonly` | `"true"` im [schreibgeschützten Modus](api/spreadsheet_readonly_config.md) und solange die [Auswahl](api/spreadsheet_selection_config.md) deaktiviert ist |
| `.dhx_grid-content` | `aria-multiselectable` | `"true"`; `"false"`, solange die Auswahl deaktiviert ist |

### Zeilen und Zellen {#rows-and-cells}

Die folgende Tabelle listet die Rollen sowie die Positions- und Zustandsattribute der Zeilen und Zellen auf:

| Selektor | Rolle / Attribut | Zweck |
| -------- | ---------------- | ------- |
| Zeile | `role="row"` + `aria-rowindex` | Eine Zeile des Blatts. Zeile 1 des Blatts hat `aria-rowindex="2"`, da der Spaltenkopf die erste Zeile ist |
| Zelle | `role="gridcell"` + `aria-colindex` | Eine Zelle. Spalte A hat `aria-colindex="2"`, da die Zeilennummern die erste Spalte bilden |
| Zeilennummer | `role="rowheader"` | Der Kopf der Zeile |
| Zelle | `aria-selected` | `"true"` an der aktiven Zelle und an jeder Zelle der ausgewählten Bereiche |
| Zelle | `aria-readonly` | `"true"` im schreibgeschützten Modus, solange die [Auswahl](api/spreadsheet_selection_config.md) deaktiviert ist, und an [gesperrten Zellen](work_with_cells.md#locking-cells) |
| Zelle | `tabindex` | `"0"` an der aktiven Zelle und `"-1"` an den übrigen Zellen, sodass die Zellen einen einzigen Tabstopp bilden |
| Aktive Zelle | DOM-Fokus | Der Tastaturfokus liegt auf der aktiven Zelle selbst, nicht auf einem separaten Eingabefeld. Während die Zelle bearbeitet wird, liegt der Fokus auf dem Zelleneditor |
| Verbundene Zelle | `aria-colspan` / `aria-rowspan` | Die Anzahl der Spalten bzw. Zeilen, die die verbundene Zelle umfasst. Die von ihr verdeckten Zellen werden mit `aria-hidden="true"` ausgeblendet |
| Link in einer Zelle | `<a href>` mit `target="_blank"` und `rel="noopener noreferrer"` | Ein Link mit dem Schema `http`, `https`, `mailto`, `ftp` oder `tel` |

Eine Zelle enthält außerdem visuell verborgenen Text, den Screenreader zusammen mit dem Wert vorlesen:

| Verborgener Text | Wann |
| ----------- | ---- |
| Die Zellenadresse, zum Beispiel "B7" | An der aktiven Zelle und an jeder Zelle eines ausgewählten Bereichs. Screenreader lesen die Adresse vor dem Wert vor |
| "link" | An einer ausgewählten Zelle mit einem Link. <kbd>Alt</kbd> + <kbd>Enter</kbd> öffnet den Link |
| "locked" | An einer ausgewählten gesperrten Zelle |
| Eine Beschreibung des Formelfehlers, zum Beispiel "Reference error. Check the cell references" | An einer Zelle mit einem Formelfehler |
| "Invalid value. Choose a value from the list" | An einer Zelle, deren Wert nicht in ihrer [Werteliste](work_with_cells.md#using-drop-down-lists-in-cells) enthalten ist |
| "Filter" / "Filter applied" | An einer Zelle mit dem Filtersymbol |

### Spalten- und Zeilenköpfe {#column-and-row-headers}

| Selektor | Rolle / Attribut | Zweck |
| -------- | ---------------- | ------- |
| Spaltenbuchstabe | `role="columnheader"` + `aria-colindex` | Der Kopf der Spalte |
| Ecke "Alles auswählen" | `role="columnheader"` | Benannt "Select all" |
| Zeilennummer | `role="rowheader"` | Der Kopf der Zeile |
| Spaltenmenü-Symbol, Symbole ausgeblendeter Zeilen und Spalten | `aria-hidden="true"` | Dekorativ. Die Befehle befinden sich im Kontextmenü |

Die Köpfe sind keine Tabstopps. Ein Klick auf einen Spaltenbuchstaben, eine Zeilennummer oder die Ecke wählt die Zeilen bzw. Spalten aus und gibt den Fokus an die aktive Zelle zurück.

### Formelleiste und Editoren {#formula-bar-and-editors}

| Selektor | Rolle / Attribut | Zweck |
| -------- | ---------------- | ------- |
| Eingabefeld der Formelleiste | `aria-label` | "Formula bar, B7", mit der Adresse der aktiven Zelle. Das Eingabefeld ist bei einer gesperrten Zelle `readonly`, sodass sein Wert weiterhin gelesen werden kann. Solange die Auswahl deaktiviert ist, ist die Formelleiste leer und gesperrt |
| Eingabefeld des Zelleneditors | `aria-label` | "Cell editor, B7" |
| Editor einer Zelle mit einer Werteliste | `role="combobox"`, `aria-controls`, `aria-expanded`, `aria-activedescendant` | Die Werteliste ist eine `listbox` aus `option`-Elementen, und die hervorgehobene Option hat `aria-selected` |
| Editor mit einem ungültigen Wert | `aria-invalid="true"` | Der gespeicherte Wert der Zelle ist nicht in ihrer Werteliste enthalten. Das Attribut wird nach dem Speichern des Werts aktualisiert, nicht während der Eingabe |
| Schließen-Symbol der Formelhilfe | `role="button"` + `aria-label` | "Close formula help" |

### Symbolleiste und Menüs {#toolbar-and-menus}

| Selektor | Rolle / Attribut | Zweck |
| -------- | ---------------- | ------- |
| Symbolleiste | `role="toolbar"` + `aria-label` | "Formatting"; die Symbolleisten des Rahmen-Popups, der Suchleiste und des Link-Popups heißen "Borders", "Search" und "Link" |
| Symbolleisten-Schaltfläche | `aria-label` | Der Wert der Schaltfläche. Eine Symbolschaltfläche wird nach ihrem Tooltip benannt, zum Beispiel "Bold (ctrl+b)". Die Symbole werden mit `aria-hidden="true"` ausgeblendet |
| Bold, Italic, Underline, Strikethrough, Lock, Filter | `aria-pressed` | Ob die Formatierung bzw. der Filter aktiv ist |
| Schaltfläche, die ein Dropdown öffnet | `aria-haspopup="menu"`, `aria-expanded` | Das Dropdown ist ein `menu`, das nach seiner Schaltfläche benannt ist |
| Ausrichtung, Textumbruch, Zahlenformate | `role="menuitemradio"` + `aria-checked` | Eine Option einer exklusiven Gruppe |
| Text color, Background color, Border color | `aria-label` | Der Name des Steuerelements und der aktuellen Farbe, zum Beispiel "Text color: dark gray" |
| Farbpalette | `role="grid"` aus `gridcell`-Elementen | Das Grid heißt "Color palette". Jede Farbzelle ist nach ihrer Farbe benannt, und die gewählte hat `aria-selected="true"` |
| Liste der Rahmenstile | `role="listbox"` aus `option`-Elementen | Die Optionen heißen "Thin line", "Medium line", "Thick line", "Dashed line", "Dotted line", "Double line" |
| Menüleiste | `role="menubar"` + `aria-label` | "Main". Ihre Einträge öffnen Popups mit `role="menu"`. In den Popups haben die Formatierungseinträge `role="menuitemcheckbox"`, und die Einträge für Ausrichtung, Textumbruch und Zahlenformate haben `role="menuitemradio"`. Beide melden ihren Zustand mit `aria-checked` |
| Kontextmenüs | `role="menu"` + `aria-label` | "Cell" für die Zellen und "Sheet" für die Blattregisterkarten |

### Blattregisterkarten {#sheet-tabs}

| Selektor | Rolle / Attribut | Zweck |
| -------- | ---------------- | ------- |
| Leiste der Blattregisterkarten | `role="toolbar"` + `aria-label` | "Sheets" |
| Blattregisterkarte | `button` + `aria-pressed` | Die Registerkarte ist nach ihrem Blatt benannt. Die Registerkarte des aktiven Blatts hat `aria-pressed="true"` |
| Schaltfläche "Blatt hinzufügen" | `aria-label` | "Add sheet" |

### Dialoge {#dialogs}

| Selektor | Rolle / Attribut | Zweck |
| -------- | ---------------- | ------- |
| Dialoge für Spaltenbreite und Zeilenhöhe | `role="dialog"`, `aria-modal="true"`, `aria-label` | Benannt nach dem Dialogtitel. Das Eingabefeld ist mit "Width in pixels" / "Height in pixels" beschriftet |
| Suchleiste | `role="dialog"` + `aria-label` | Benannt "Search". Das Suchfeld ist mit "Search" beschriftet, und die Schaltflächen heißen "Previous match", "Next match" und "Close search" |
| Link einfügen, Datenvalidierung | `role="dialog"` + `aria-label` | Benannt nach dem Dialogtitel |
| Warnmeldungen | `role="alertdialog"`, `aria-modal="true"`, `aria-labelledby`, `aria-describedby` | Benannt nach der Kopfzeile der Meldung und beschrieben durch ihren Text |

### Ausgeblendete und dekorative Elemente {#hidden-and-decorative-elements}

Das Spreadsheet blendet dekorative Teile mit `aria-hidden="true"` vor assistiven Technologien aus. Dazu gehören die Symbole für Sperre, Filter und Spaltenmenü, die Symbole ausgeblendeter Zeilen und Spalten sowie das Symbol "Alles auswählen". Ebenso ausgeblendet sind die Ebene, die die Auswahl, die Kopier- und Suchhervorhebungen sowie den Ausfüllpunkt zeichnet, die farbige Kopie der Formel in der Formelleiste und die von einer verbundenen Zelle verdeckten Zellen. Layout-Wrapper haben `role="presentation"`. Die Fokus-Sentinels vor und nach dem Grid leiten den Fokus lediglich an die aktive Zelle weiter.

## Auswahl- und Bearbeitungsmodell {#selection-and-editing-model}

Der DOM-Fokus liegt auf der aktiven Zelle selbst, sodass ein Screenreader die Zelle liest und kein separates Eingabefeld. Wenn sich die aktive Zelle bewegt, liest der Screenreader zuerst die Adresse der neuen Zelle, dann ihren Wert und ihre verborgenen Beschreibungen vor. Wenn der Nutzer mit der Tastatur oder der Maus einen Bereich auswählt, sagt der Screenreader die Ausdehnung des Bereichs an, sobald sich die Auswahl nicht mehr ändert. Eine Zelle, die zu mehreren Bereichen gehört, wird nur einmal gezählt, und die Zellen ausgeblendeter Zeilen und Spalten werden mitgezählt. Während eine Zelle bearbeitet wird, wird nichts angesagt. Wenn ein Bereich auf die aktive Zelle verkleinert wird, wird die Adresse der Zelle angesagt.

| Situation | Was der Screenreader erhält |
| --------- | --------------------------- |
| Die aktive Zelle bewegt sich | Die Zelle mit ihrer Adresse, ihrem Wert und ihren Beschreibungen, zum Beispiel "B7, 120, locked" |
| Ein Bereich wird ausgewählt | "B2 to D7, 18 cells" |
| Mehrere Bereiche werden mit <kbd>Ctrl</kbd> ausgewählt | "B2 to B4, D2 to D4, 6 cells" |
| Der Editor öffnet sich mit <kbd>Enter</kbd>, <kbd>F2</kbd> oder durch Tippen | Das Eingabefeld des Editors mit dem Namen "Cell editor, B7" |
| Der Editor einer Zelle mit einer Werteliste öffnet sich | Eine aufgeklappte Combobox. Nach <kbd>↑</kbd> oder <kbd>↓</kbd> wird die hervorgehobene Option der Liste vorgelesen |
| Die Bearbeitung wird gespeichert | Neue Formelfehler in den bearbeiteten Zellen und in den davon abhängigen Zellen sowie ungültige Werte in den bearbeiteten Zellen werden angesagt |
| Die Bearbeitung einer gesperrten Zelle wird abgelehnt | "The cell is locked" |
| Im schreibgeschützten Modus wird eine Bearbeitungstaste gedrückt | "The sheet is read-only" |

<kbd>Enter</kbd>, <kbd>F2</kbd> oder Tippen öffnet den Editor. <kbd>Enter</kbd> speichert den Wert und geht nach unten, <kbd>Tab</kbd> speichert ihn und geht nach rechts, und <kbd>Esc</kbd> bricht die Bearbeitung ab. 

## Tastaturnavigation {#keyboard-navigation}

Die Tastatur funktioniert, sobald sich das Spreadsheet auf der Seite befindet; eine Konfiguration ist nicht erforderlich. Die folgenden Tabellen fassen das Tastaturmodell zusammen. Den vollständigen Satz an Tastenkombinationen finden Sie in der [Liste der Hotkeys](hotkeys.md).

![Das Dropdown "Horizontal align" der Symbolleiste, mit der Pfeiltaste nach unten geöffnet, mit dem Fokus auf seinem ersten Eintrag](/img/accessibility/toolbar_dropdown_focus.png)

### Zellen {#cells}

| Tasten | Aktion |
| ---- | ------ |
| Pfeiltasten | Die aktive Zelle verschieben. Die aktive Zelle stoppt an der ersten und der letzten sichtbaren Zeile und Spalte |
| <kbd>Shift</kbd> + Pfeiltasten | Den ausgewählten Bereich erweitern |
| <kbd>Home</kbd> / <kbd>End</kbd> | Zur ersten bzw. letzten sichtbaren Zelle der Zeile wechseln |
| <kbd>Ctrl</kbd> + Pfeiltasten, <kbd>Ctrl</kbd> + <kbd>Home</kbd> / <kbd>End</kbd> | Zum Rand des Blatts wechseln |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Innerhalb der Zeile nach rechts bzw. links wechseln. Von der letzten bzw. der ersten Zelle des Blatts aus den Fokus aus den Zellen heraus zum nächsten bzw. vorherigen Teil der Seite verschieben, zum Beispiel zu den Blattregisterkarten oder zur Formelleiste |
| <kbd>Enter</kbd>, <kbd>F2</kbd> | Den Editor öffnen |
| <kbd>Esc</kbd> | Den Editor ohne Speichern schließen |
| <kbd>Ctrl</kbd> + <kbd>Space</kbd> / <kbd>Shift</kbd> + <kbd>Space</kbd> | Die Spalte bzw. die Zeile auswählen |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>9</kbd> / <kbd>0</kbd> | Die ausgeblendeten Zeilen bzw. Spalten innerhalb des ausgewählten Bereichs einblenden |
| <kbd>Alt</kbd> + <kbd>Enter</kbd> | Den Link der aktiven Zelle öffnen |
| <kbd>Shift</kbd> + <kbd>F10</kbd> oder die Menütaste | Das Kontextmenü mit den Befehlen für die Zelle öffnen, oder für die Spalte nach <kbd>Ctrl</kbd> + <kbd>Space</kbd> |
| <kbd>Alt</kbd> + <kbd>↑</kbd> / <kbd>↓</kbd>, <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Page Down</kbd> / <kbd>Page Up</kbd> | Zum nächsten bzw. vorherigen Blatt wechseln |

### Wechsel zwischen den Teilen {#moving-between-the-parts}

| Tasten | Aktion |
| ---- | ------ |
| <kbd>Ctrl</kbd> + <kbd>F6</kbd> / <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F6</kbd> | Den Fokus zum nächsten bzw. vorherigen Teil verschieben: das Menü, die Symbolleiste, das Blatt, die Blattregisterkarten. Die Formelleiste und ausgeblendete Teile werden übersprungen. Eine offene Bearbeitung wird zuerst gespeichert |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Den Fokus zum nächsten bzw. vorherigen Teil in der Tabulatorreihenfolge der Seite verschieben. Jede Leiste ist ein Tabstopp, und der Fokus landet auf dem zuletzt verwendeten Steuerelement |

### Symbolleiste, Menüleiste und Blattregisterkarten {#toolbar-menu-bar-and-sheet-tabs}

| Tasten | Aktion |
| ---- | ------ |
| <kbd>←</kbd> / <kbd>→</kbd>, <kbd>Home</kbd> / <kbd>End</kbd> | Zwischen den Steuerelementen der Leiste wechseln |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Das Steuerelement betätigen: den Befehl ausführen, das Dropdown öffnen oder zum Blatt wechseln |
| <kbd>↓</kbd> | Das Dropdown öffnen und den Fokus auf seinen ersten Eintrag setzen |
| <kbd>↑</kbd> / <kbd>↓</kbd> | Zwischen den Einträgen eines geöffneten Dropdowns oder Menüs wechseln |
| <kbd>→</kbd> / <kbd>←</kbd> | Ein Untermenü öffnen bzw. schließen |
| <kbd>Esc</kbd> | Das Dropdown oder das Menü schließen und den Fokus an sein Steuerelement zurückgeben |

### Popups und Dialoge {#popups-and-dialogs}

| Tasten | Aktion |
| ---- | ------ |
| Pfeiltasten, <kbd>Home</kbd> / <kbd>End</kbd> | Zwischen den Farben der Farbpalette wechseln |
| <kbd>Enter</kbd> | Die Farbe, den Rahmen oder die Größe in den Dialogen für Spaltenbreite und Zeilenhöhe anwenden |
| <kbd>Esc</kbd> | Das Popup, den Dialog oder die Suchleiste schließen und den Fokus an das Steuerelement oder die Zelle zurückgeben, die sie geöffnet hat. Im Modus für benutzerdefinierte Farben zur Palette zurückkehren. In einem Farb- oder Stil-Popup, das aus dem Rahmen-Popup geöffnet wurde, es schließen und den Fokus an seine Schaltfläche im Rahmen-Popup zurückgeben |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Zwischen den Steuerelementen eines Dialogs oder des Modus für benutzerdefinierte Farben wechseln. In einem Farb-Popup oder im Rahmen-Popup es schließen und den Fokus an seine Symbolleisten-Schaltfläche zurückgeben |
| <kbd>↑</kbd> / <kbd>↓</kbd>, <kbd>Enter</kbd> | Durch die Werteliste einer Zelle navigieren und einen Wert auswählen |

:::note
Für Aktionen, die nur mit dem Zeigegerät möglich sind, gibt es Tastaturalternativen. Die Befehle *Column width* und *Row height* des Kontextmenüs legen eine exakte Größe ohne Ziehen fest, und der Befehl *Open filter* öffnet einen Filter ohne Klick auf sein Symbol.
:::

## Assistive Technologien {#assistive-technology}

Das DHTMLX-Team testet das Spreadsheet mit den folgenden Screenreadern:

| Screenreader | Browser | Plattform |
| ------------- | ------- | -------- |
| NVDA | Firefox | Windows |
| JAWS | Chrome | Windows |
| VoiceOver | Safari | macOS |

Screenreader erhalten jeden Zustand von dem Element, zu dem er gehört:

| Zustand | Bereitgestellt über | Gelesen an |
| ----- | --------------- | ------- |
| Position | `aria-rowindex`, `aria-colindex` und die Zellenadresse im Zellentext | Jeder Zelle. Die Adresse steht im Text der aktiven Zelle und der Zellen der ausgewählten Bereiche |
| Auswahl | `aria-selected` | Der aktiven Zelle und den Zellen der ausgewählten Bereiche |
| Bearbeitbarkeit | `aria-readonly` | Dem Grid und den Zellen im schreibgeschützten Modus und solange die Auswahl deaktiviert ist, sowie gesperrten Zellen |
| Verbundene Zellen | `aria-colspan`, `aria-rowspan` | Der verbundenen Zelle |
| Zeilenköpfe | `role="rowheader"` | Den Zeilennummern |
| Umschaltzustand | `aria-pressed` | Den Schaltflächen Bold, Italic, Underline, Strikethrough, Lock und Filter sowie den Blattregisterkarten |
| Markierungszustand | `aria-checked` | Den Formatierungseinträgen der Menüleiste sowie den Einträgen für Ausrichtung, Textumbruch und Zahlenformate |
| Fehler und ungültige Werte | Verborgener Text in der Zelle, `aria-invalid` | Der Zelle und ihrem Editor |
| Links | `<a href>` und der verborgene Text "link" | Der Zelle mit einem Link |

## Hoher Kontrast und Fokus {#high-contrast-and-focus}

### Themes {#themes}

Das Spreadsheet hat vier integrierte Themes: `light` (Standard), `dark`, `contrast-light` und `contrast-dark`. Die Themes `contrast-light` und `contrast-dark` erfüllen die WCAG-AA-Kontrastanforderungen für Text. Ein Theme wechseln Sie mit der Methode `dhx.setTheme()` oder mit dem Attribut `data-dhx-theme`:

~~~jsx
dhx.setTheme("contrast-light"); // or "contrast-dark"
~~~

Details finden Sie im Artikel [Integrierte Themes](/themes/).

In den hellen Themes haben die Farben, die die Zellbezüge einer Formel markieren, einen Kontrast von mindestens 4,5:1.

Das Theme `contrast-light` zeichnet dunklen Text und dunkle Rahmen auf weißem Hintergrund. Im folgenden Spreadsheet ist das Kontextmenü einer Zelle mit dem Filtersymbol mit der Tastatur geöffnet. Sein fokussierter Befehl, [*Open filter*](filtering_data.md#opening-a-filter-with-the-keyboard), ist durch eine gestrichelte Kontur markiert, und die aktive Zelle ist durch einen durchgezogenen Rahmen in der Primärfarbe des Themes markiert:

![Spreadsheet im Theme contrast-light](/img/accessibility/spreadsheet_contrast_light.png)

Das Theme `contrast-dark` zeichnet hellen Text und helle Rahmen auf dunklem Hintergrund. Wenn der Fokus auf einem Steuerelement der Symbolleiste liegt, ist das Steuerelement durch einen Fokusring in der Farbe `--dhx-spreadsheet-focus-color` markiert, die in den dunklen Themes heller ist als die Primärfarbe des Rahmens der aktiven Zelle:

![Spreadsheet im Theme contrast-dark](/img/accessibility/spreadsheet_contrast_dark.png)

### Fokusindikator {#focus-indicator}

Der Tastaturfokus wird in jedem Theme angezeigt:

- die aktive Zelle hat einen durchgezogenen 2px-Rahmen in der Primärfarbe des Themes
- eine Zelle und der Zelleneditor, die den Tastaturfokus haben, erhalten eine 2px-Kontur in der Primärfarbe des Themes
- die Formelleiste und die Steuerelemente der Symbolleiste, der Menüleiste, der Blattregisterkarten, des Rahmen-Popups, des Link-Popups und der Suchleiste erhalten eine 2px-Kontur in der Farbe der Variable `--dhx-spreadsheet-focus-color`
- in der Farbpalette, in der Liste der Rahmenstile, in den Dropdowns der Symbolleiste und der Menüleiste sowie in den Kontextmenüs erhält der fokussierte Eintrag eine gestrichelte 1px-Kontur in der Farbe `--dhx-color-focused`
- im Listeneditor einer Zelle bleibt der Fokus im Editor, und der aktuelle Eintrag der Liste wird mit einer Hintergrundfarbe hervorgehoben

Die Variable `--dhx-spreadsheet-focus-color` ist in den dunklen Themes heller als die Primärfarbe und kann in einem [benutzerdefinierten Theme](themes/custom_theme.md) neu definiert werden. Der Kontrast jedes Indikators in jedem Theme ist im [Accessibility Conformance Report](accessibility_conformance_report.md) angegeben.

### Farbe und Zoom {#color-and-zoom}

- **Farbe ist nicht das einzige Signal.** Die aktive Zelle und die Auswahl haben einen Rahmen und eine Füllung, ein ungültiger Wert hat eine Markierung und eine verborgene Beschreibung, und die Formatierungsschaltflächen melden ihren Zustand über `aria-pressed`. Die Farbschaltflächen haben den Namen der Farbe in ihrem zugänglichen Namen.
- **Zoom und Reflow.** Das Spreadsheet bleibt bei 200 % und 400 % Zoom bedienbar. Die Zellen scrollen in zwei Richtungen, und die Symbolleiste, die Menüleiste und die Blattregisterkarten passen in eine Breite von 320 CSS px.
- **Textabstände.** Mit den WCAG-Überschreibungen für Textabstände wird keine Steuerelement-Beschriftung abgeschnitten, und die Leiste der Blattregisterkarten scrollt, wenn die Registerkarten wachsen.
- **Ins Sichtfeld scrollen.** Die aktive Zelle wird neben den fixierten Zeilen und Spalten ins Sichtfeld gescrollt.

## Statusansagen {#status-announcements}

Das Spreadsheet sagt die Änderungen, die kein eigenes Element haben, über eine höfliche (polite) Live-Region an, sodass der Screenreader zuerst den aktuellen Satz beendet:

| Ereignis | Angesagter Text | Locale-Schlüssel |
| ----- | -------------- | ---------- |
| Ein Bereich wird ausgewählt | "B2 to D7, 18 cells" | `aria_selectedRange`, `aria_rangeExtent`, `aria_rangeSeparator` |
| Eine Bearbeitung verursacht einen Formelfehler oder einen ungültigen Wert | "B7: Reference error. Check the cell references" | `aria_cellMessage` |
| Eine Bearbeitung verursacht mehrere Fehler / ungültige Werte | "3 new errors. B7: ..." / "3 invalid values. B7: ..." | `aria_newErrors`, `aria_invalidValues` |
| Die Bearbeitung einer gesperrten Zelle / eines gesperrten Bereichs wird abgelehnt | "The cell is locked" / "Locked cells were not changed" | `aria_lockedCell`, `aria_lockedCells` |
| Im schreibgeschützten Modus wird eine Bearbeitungstaste gedrückt | "The sheet is read-only" | `aria_readonlySheet` |
| Der Suchtext wird eingegeben | "Results: 5. 1 of 5, B2" oder "No results" | `aria_searchResults`, `aria_searchMatch`, `aria_searchNoResults` |
| Der nächste oder vorherige Treffer wird angezeigt | "2 of 5, B7" | `aria_searchMatch` |
| Eine Excel-Datei wird exportiert | "Exporting the file", "The file is exported" | `aria_exportStarted`, `aria_exportDone` |
| Eine im Dateidialog gewählte Datei wird importiert | "Importing the file", "The file is imported" | `aria_importStarted`, `aria_importDone` |
| Der Befehl Column width / Row height wird angewendet | "Column width set to 120 pixels" | `aria_columnWidthSet`, `aria_rowHeightSet` |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>9</kbd> / <kbd>0</kbd> findet nichts zum Einblenden | "No hidden rows in the selection" | `aria_noHiddenRows`, `aria_noHiddenCols` |

Um das Ergebnis Ihres eigenen Befehls anzusagen, rufen Sie die Methode [`announce()`](api/spreadsheet_announce_method.md) auf:

~~~jsx
spreadsheet.announce("The report is saved");
~~~

## Lokalisierung {#localization}

Die zugänglichen Namen, die Zellbeschreibungen und die Ansagen sind in der Locale `spreadsheet` als Schlüssel mit dem Präfix `aria_` neben den Beschriftungen der Oberfläche abgelegt. Übersetzen Sie sie mit der Methode `dhx.i18n.setLocale()`, bevor das Spreadsheet initialisiert wird:

~~~jsx
dhx.i18n.setLocale("spreadsheet", {
    // other keys of the locale
    aria_grid: "Tabelle",
    aria_cellEditor: "Zelleneditor, {cell}",
    aria_readonlySheet: "Das Blatt ist schreibgeschützt",
    aria_selectedRange: "{range}, {count} Zellen",
    aria_rangeExtent: "{start} bis {end}"
});

const spreadsheet = new dhx.Spreadsheet("spreadsheet_container");
~~~

Die Teile in geschweiften Klammern, wie `{cell}` oder `{count}`, werden durch die Werte ersetzt und müssen in den übersetzten Strings erhalten bleiben. Die Namen der Farben und der Schaltflächen der Warnmeldungen stammen aus den Locales `colorpicker` und `message`. Die vollständige Liste der Schlüssel finden Sie unter [Lokalisierung](localization.md#default-locale) und Informationen zu den weiteren Locales unter [Lokalisierung integrierter Widgets](localization.md#localizing-built-in-widgets).

## Konfigurationsbeispiele {#configuration-recipes}

### Barrierefreie Standardeinrichtung {#accessible-default-setup}

Das Spreadsheet benötigt für die Tastatur und die WAI-ARIA-Ausgabe keine Konfiguration. Um die WCAG-AA-Kontrastanforderungen für Text zu erfüllen, wählen Sie ein Kontrast-Theme. Weitere Möglichkeiten, ein Theme festzulegen, finden Sie unter [Integrierte Themes](/themes/):

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // the keyboard navigation and the WAI-ARIA output need no configuration
});
spreadsheet.parse(data);

dhx.setTheme("contrast-light"); // or "contrast-dark"
~~~

### Schreibgeschützte Einrichtung {#read-only-setup}

Verwenden Sie die Option [`readonly`](api/spreadsheet_readonly_config.md), um Daten anzuzeigen, die Nutzer lesen und kopieren, aber nicht ändern können. Tastatur- und Screenreader-Nutzer können sich weiterhin durch die Zellen bewegen:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    readonly: true
});
spreadsheet.parse(data);
~~~

Um die Daten ohne aktive Zelle und ohne Auswahl anzuzeigen, fügen Sie [`selection: false`](api/spreadsheet_selection_config.md) hinzu. Das Grid wird dann zu einem Tabstopp, den die Tastatur lediglich durchläuft.

### Übersetzte Barrierefreiheits-Strings {#translated-accessibility-strings}

Screenreader lesen die Barrierefreiheits-Strings aus vier Locales: `spreadsheet` enthält die Namen, Zellbeschreibungen und Ansagen, `colorpicker` enthält die Farbnamen, `message` enthält die Namen der Schaltflächen der Warnmeldungen, und `grid` enthält die Ansage der Anzahl geladener Zeilen. Legen Sie alle vier fest, bevor Sie das Spreadsheet erstellen. Die Schlüssel finden Sie unter [Lokalisierung integrierter Widgets](localization.md#localizing-built-in-widgets):

~~~jsx
const deSpreadsheet = {
    // other keys of the locale
    aria_grid: "Tabelle",
    aria_readonlySheet: "Das Blatt ist schreibgeschützt"
};
const deColorpicker = {
    aria_palette: "Farbpalette",
    aria_colorRed: "rot"
};
const deMessage = {
    aria_confirm: "Bestätigen"
};
const deGrid = {
    aria_rowsLoaded: "{count} Zeilen geladen"
};

dhx.i18n.setLocale("spreadsheet", deSpreadsheet);
dhx.i18n.setLocale("colorpicker", deColorpicker);
dhx.i18n.setLocale("message", deMessage);
dhx.i18n.setLocale("grid", deGrid);

const spreadsheet = new dhx.Spreadsheet("spreadsheet_container");
~~~

### Einen benutzerdefinierten Befehl ansagen {#announcing-a-custom-command}

Wenn Ihr eigener Befehl die Daten ändert, informieren Sie Screenreader-Nutzer mit der Methode [`announce()`](api/spreadsheet_announce_method.md) über das Ergebnis. Das Beispiel fügt einen [Menü](customization.md#menu)-Befehl hinzu, der das aktive Blatt leert:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container");

spreadsheet.menu.data.add({ id: "clear-sheet", value: "Clear sheet" });

spreadsheet.menu.events.on("click", function (id) {
    if (id === "clear-sheet") {
        spreadsheet.sheets.clear();
        spreadsheet.announce("The sheet is cleared");
    }
});
~~~

## Verantwortung der Host-Seite {#host-page-responsibilities}

Einige Anforderungen betreffen die Seitenebene und nicht die Komponente selbst. Stellen Sie sicher, dass die Host-Seite:

- die Dokumentsprache festlegt, zum Beispiel `<html lang="en">`, sowie einen Seitentitel
- eine Überschrift über dem Spreadsheet setzt und es innerhalb einer Landmark platziert, zum Beispiel `<main>`
- einen Skip-Link bereitstellt, wenn dem Spreadsheet eine lange Navigation vorausgeht
- jedem Zustand, den Sie mit einer Zellenfarbe markieren, ein zweites Signal wie Text oder ein Symbol hinzufügt, da die Farben der Zellenstile Teil Ihrer Daten sind
- den Kontrast der Farben prüft, die Sie in den Zellenstilen und in einem benutzerdefinierten Theme festlegen

## Tests und Methodik {#testing-and-methodology}

Das DHTMLX-Team validiert die Barrierefreiheit von Spreadsheet 6.0.4 anhand des Komponenten-Quellcodes und im Browser:

1. **Automatisierte Tests** mit [axe-core](https://github.com/dequelabs/axe-core) in den Themes `light`, `dark`, `contrast-light` und `contrast-dark`, bei geöffneter Suchleiste, geöffnetem Listeneditor, geöffneten Dialogen und einer geöffneten Warnmeldung.
2. **Manuelle Prüfung** des Quellcodes: die Rollen, Zustände und Namen jedes Teils, die Tastatur-Handler und die Fokusbereiche sowie die Theme-Tokens mit ihren Kontrastverhältnissen.
3. **Manuelle Tests**: reine Tastatur-Durchläufe durch die Zellen, die Leisten, die Menüs und die Dialoge, Screenreader-Durchläufe mit NVDA, JAWS und VoiceOver, 200 % und 400 % Zoom, Reflow bei 320 CSS px und WCAG-Überschreibungen für Textabstände.
4. **Konformitätsbericht**: Die Ergebnisse werden Kriterium für Kriterium im [Accessibility Conformance Report](accessibility_conformance_report.md) veröffentlicht, einschließlich der Kriterien, die das Spreadsheet teilweise unterstützt.

## Ressourcen {#resources}

- [Accessibility Conformance Report (VPAT 2.5)](accessibility_conformance_report.md)
- [Liste der Hotkeys](hotkeys.md)
- [`readonly`](api/spreadsheet_readonly_config.md)
- [`selection`](api/spreadsheet_selection_config.md)
- [`announce()`](api/spreadsheet_announce_method.md)
- [Lokalisierung](localization.md)
- [Integrierte Themes](/themes/)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [WAI-ARIA 1.2](https://www.w3.org/TR/wai-aria-1.2/)
- [WAI-ARIA Authoring Practices: Grid pattern](https://www.w3.org/WAI/ARIA/apg/patterns/grid/)
- [WAI-ARIA Authoring Practices: Toolbar pattern](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/)
