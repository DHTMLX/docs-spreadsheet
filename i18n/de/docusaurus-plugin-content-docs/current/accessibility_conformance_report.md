---
sidebar_label: Konformitätsbericht (VPAT)
title: Barrierefreiheits-Konformitätsbericht
description: Barrierefreiheits-Konformitätsbericht für DHTMLX Spreadsheet auf Basis von VPAT 2.5 - Konformität mit WCAG 2.2 AA, Section 508 und EN 301 549.
---

# Barrierefreiheits-Konformitätsbericht

Dieser Bericht dokumentiert, wie DHTMLX Spreadsheet die wichtigsten Standards für Barrierefreiheit erfüllt. Er folgt der Struktur von **VPAT® 2.5 (International Edition)**. Einen aufgabenorientierten Überblick über die Barrierefreiheitsfunktionen und ihre Konfiguration finden Sie im Leitfaden [Barrierefreiheit](accessibility.md).

**Produktname/Version:** DHTMLX Spreadsheet v6.0.4

**Berichtsdatum:** Oktober 2026

**Produktbeschreibung:** DHTMLX Spreadsheet ist eine JavaScript-Tabellenkomponente für Webanwendungen. Die Oberfläche besteht aus einer Menüleiste, einer Symbolleiste, einer Formelleiste, einem Zellraster mit Zeilen- und Spaltenköpfen sowie Tabellenblatt-Registern. Zu den Funktionen gehören Formeln, Zellformatierung, verbundene Zellen, fixierte Zeilen und Spalten, Sortierung, Filterung, Suche, Datenvalidierung, Zellverknüpfungen sowie Excel-Import und -Export. Die Komponente wird von einer Host-Webanwendung eingebettet.

**Kontaktinformationen:** [info@dhtmlx.com](mailto:info@dhtmlx.com)

## Hinweise {#notes}

- Dieser Bericht bewertet DHTMLX Spreadsheet in seiner **empfohlenen Barrierefreiheitskonfiguration**: die Standardkonfiguration, bei der die WAI-ARIA-Ausgabe und die Tastaturnavigation immer aktiv sind, mit dem Theme `contrast-light` oder `contrast-dark`, das über `dhx.setTheme()` oder das Attribut `data-dhx-theme` gesetzt wird. Die Anmerkungen geben an, wo eine Konformitätsstufe von dieser Konfiguration abhängt. Die Einrichtung beschreibt der Leitfaden [Barrierefreiheit](accessibility.md).
- DHTMLX Spreadsheet ist **Webinhalt**, der von einer Host-Anwendung gerendert wird. Verantwortlichkeiten auf Seitenebene (Seitentitel, `<html lang>`, Skip-/Bypass-Mechanismen und seitenweite Navigation) liegen bei der Host-Anwendung und werden mit einer Erläuterung als *Nicht anwendbar* gemeldet.
- In den WCAG-Tabellen ist nur die Antwort für **Web** ausgefüllt. Die Zeilen *Electronic Docs*, *Software*, *Closed* und *Authoring Tool* sind *Nicht anwendbar*: Das Produkt ist weder eigenständige (Nicht-Web-)Software noch geschlossene Funktionalität, noch ein Authoring-Tool, noch elektronische Dokumentation.
- Farben, die ein Autor über Zellformate auf Zellen anwendet, gehören zu den Dokumentdaten und werden nicht als Teil des Produkts bewertet.

**Verwendete Bewertungsmethoden:**

- Automatisierte Tests: axe-core in den Themes `light`, `dark`, `contrast-light` und `contrast-dark`, bei geöffneter Suchleiste, geöffnetem Listeneditor, geöffneten Dialogen und einer geöffneten Warnmeldung.
- Manuelle Prüfung des Quellcodes und der Stylesheets der Komponente: die Rollen und ARIA-Attribute jedes Teils des Widgets, die Tastaturhandler und Fokusbereiche, die zugänglichen Namen und ihre Locale-Schlüssel sowie die Farbtokens der Themes, mit berechneten Kontrastverhältnissen für die vier Themes.
- Tests mit assistiven Technologien: manuelle Durchläufe mit **NVDA + Firefox** und **JAWS + Chrome** unter Windows sowie **VoiceOver + Safari** unter macOS.
- Browser-Überschreibungen: 200 % / 400 % Zoom, Umbruch bei 320 CSS-px und WCAG-Überschreibungen des Textabstands.

## Anwendbare Standards / Richtlinien {#applicable-standards--guidelines}

| Standard / Richtlinie | Im Bericht enthalten |
|---|---|
| Web Content Accessibility Guidelines 2.0 | Stufe A (Nein) · Stufe AA (Nein) · Stufe AAA (Nein) |
| Web Content Accessibility Guidelines 2.1 | Stufe A (Nein) · Stufe AA (Nein) · Stufe AAA (Nein) |
| Web Content Accessibility Guidelines 2.2 | Stufe A (**Ja**) · Stufe AA (**Ja**) · Stufe AAA (Nein) |
| Überarbeitete Section-508-Standards (veröffentlicht am 18. Januar 2017; korrigiert am 22. Januar 2018) | (**Ja**) |
| EN 301 549 - V3.1.1 (2019-11) und V3.2.1 (2021-03) | (**Ja**) |

*WCAG 2.0 und 2.1 werden nicht separat berichtet. Kriterien, die WCAG mit „2.1 und 2.2" kennzeichnet, werden beantwortet,
weil sie Teil von WCAG 2.2 sind und in EN 301 549 referenziert werden.*

## Begriffe {#terms}

- **Unterstützt:** Die Funktionalität des Produkts verfügt über mindestens eine Methode, die das Kriterium ohne
  bekannte Mängel erfüllt oder mit gleichwertiger Erleichterung erfüllt.
- **Teilweise unterstützt:** Einige Funktionen des Produkts erfüllen das Kriterium nicht.
- **Wird nicht unterstützt:** Der Großteil der Produktfunktionalität erfüllt das Kriterium nicht.
- **Nicht anwendbar:** Das Kriterium ist für das Produkt nicht relevant.

## WCAG-2.x-Bericht {#wcag-2x-report}

DHTMLX Spreadsheet ist Webinhalt, daher ist unten nur die Antwort für **Web** ausgefüllt. „Erfordert ein AA-konformes
Theme" ist eine Konfigurationsabhängigkeit, kein Mangel. Das Erfolgskriterium 4.1.1 Parsing wurde in WCAG 2.2 entfernt und wird nicht berichtet.

### Tabelle 1: Erfolgskriterien, Stufe A {#table-1-success-criteria-level-a}

| Kriterien | Konformitätsstufe | Anmerkungen und Erläuterungen |
|---|---|---|
| **1.1.1** Nicht-Text-Inhalt | Unterstützt | Icons sind Schriftglyphen. Steuerelemente, die nur aus einem Icon bestehen, beziehen ihren zugänglichen Namen aus der Locale oder aus ihrem Tooltip, zum Beispiel "Add sheet", "Close search" und "Select all". Die Farbschaltflächen tragen den Namen der Farbe, zum Beispiel "Text color: dark gray". Dekorative Icons (Sperre, Filter, Spaltenmenü, Marker für ausgeblendete Zeilen), die Auswahlebene und die von einer verbundenen Zelle überdeckten Zellen sind mit `aria-hidden="true"` ausgeblendet; der Zustand, den sie anzeigen, wird durch Text in der Zelle vermittelt, etwa "locked" und "Filter applied". |
| **1.2.1** Reine Audio- und reine Videoinhalte (aufgezeichnet) | Nicht anwendbar | Das Produkt enthält keine Audio- oder Videoinhalte. |
| **1.2.2** Untertitel (aufgezeichnet) | Nicht anwendbar | Keine aufgezeichneten Multimediainhalte. |
| **1.2.3** Audiodeskription oder Medienalternative (aufgezeichnet) | Nicht anwendbar | Keine aufgezeichneten Multimediainhalte. |
| **1.3.1** Info und Beziehungen | Unterstützt | Die Zellen bilden ein `grid` mit dem Namen "Spreadsheet" und den Rollen `row`, `columnheader`, `rowheader` und `gridcell`. Die Position wird mit `aria-rowindex`/`aria-colindex` gegenüber `aria-rowcount`/`aria-colcount` bereitgestellt, die Ausdehnung einer verbundenen Zelle mit `aria-colspan`/`aria-rowspan`, die Bearbeitbarkeit mit `aria-readonly` und die Auswahl mit `aria-selected` und `aria-multiselectable`. Die Symbolleiste, die Menüleiste und die Tabellenblatt-Register sind `toolbar`- und `menubar`-Elemente mit Namen; die Formatierungsschalter haben in der Symbolleiste `aria-pressed` und sind in der Menüleiste `menuitemcheckbox`, und sich gegenseitig ausschließende Formatierungsoptionen sind `menuitemradio` mit `aria-checked`. |
| **1.3.2** Bedeutungstragende Reihenfolge | Unterstützt | DOM- und Lesereihenfolge folgen der visuellen Reihenfolge: Menüleiste, Symbolleiste, Formelleiste, Zellen und Tabellenblatt-Register. Die Zellen tragen ihre Position im Tabellenblatt über `aria-rowindex`/`aria-colindex`, sodass die Reihenfolge erhalten bleibt, wenn Zeilen und Spalten aus dem DOM herausgescrollt werden. |
| **1.3.3** Sensorische Eigenschaften | Unterstützt | Keine Anweisung und keine Beschriftung beruht allein auf Form, Größe oder räumlicher Lage; interaktive Elemente tragen Text oder einen ARIA-Namen. |
| **1.4.1** Verwendung von Farbe | Unterstützt | Jeder Zustand, der durch Farbe dargestellt wird, hat zusätzlich einen Rahmen, eine Füllung, einen Marker oder Text: die aktive Zelle, der ausgewählte Bereich, Suchtreffer, der kopierte Bereich und ungültige Zellen, zusammen mit `aria-selected` oder Text in der Zelle. Durch einen Filter ausgeblendete Zeilen hinterlassen eine Lücke in der Zeilennummerierung. Die Farbschaltflächen tragen den Farbnamen in ihrem zugänglichen Namen. |
| **1.4.2** Audiosteuerung | Nicht anwendbar | Das Produkt gibt keinen automatisch abgespielten Ton aus. |
| **2.1.1** Tastatur | Unterstützt | Jeder Befehl auf den Zellen hat eine Taste, aufgeführt in der [Liste der Hotkeys](hotkeys.md); `Shift`+`F10` oder die Menütaste öffnet das Kontextmenü. `Ctrl`+`F6` verschiebt den Fokus zwischen Menü, Symbolleiste, Tabellenblatt und Tabellenblatt-Registern. Die Leisten, ihre Dropdown-Listen und Popups sowie der Listeneditor funktionieren mit den Pfeiltasten, `Home`, `End`, `Enter` und `Esc`. Für Spaltenbreite, Zeilenhöhe und den Spaltenfilter gibt es Kontextmenübefehle. |
| **2.1.2** Keine Tastaturfalle | Unterstützt | `Tab` in der letzten Zelle und `Shift`+`Tab` in der ersten Zelle des Tabellenblatts verschieben den Fokus aus den Zellen zum nächsten bzw. vorherigen Teil der Seite, und `Ctrl`+`F6` verschiebt ihn zwischen den Teilen von Spreadsheet. Im Listeneditor beendet `Tab` die Bearbeitung und `Esc` bricht sie ab, auch nach der Verwendung der Pfeiltasten. `Esc` und `Tab` schließen die Popups der Symbolleiste und setzen den Fokus auf deren Schaltflächen zurück. |
| **2.1.4** Zeichentasten-Kurzbefehle | Unterstützt | Jeder Kurzbefehl verwendet eine Modifikatortaste (`Ctrl`, `Alt`, `Shift`) oder eine Nicht-Zeichentaste (`F2`, `F6`, `F10`, `F11`, `Enter`, `Esc`, `Delete`, Pfeile). Die Eingabe eines Zeichens in einer Zelle trägt es in die Zelle ein, was der Zweck der Zelle ist, und führt keinen Befehl aus. |
| **2.2.1** Zeitvorgaben anpassbar | Nicht anwendbar | Das Produkt setzt keine Zeitlimits. |
| **2.2.2** Pausieren, Beenden, Ausblenden | Unterstützt | Es gibt keine sich automatisch aktualisierenden, bewegten, blinkenden oder scrollenden Inhalte. Keine Animation dauert länger als 5 Sekunden. |
| **2.3.1** Grenzwert von drei Blitzen oder darunter | Unterstützt | Das Produkt enthält keine blinkenden Inhalte. |
| **2.4.1** Blöcke umgehen | Nicht anwendbar | Gilt auf Seitenebene; Mechanismen zum Umgehen von Blöcken liegen bei der Host-Anwendung. |
| **2.4.2** Seite mit Titel | Nicht anwendbar | Seitentitel liegen in der Verantwortung der Host-Anwendung. |
| **2.4.3** Fokus-Reihenfolge | Unterstützt | Die Zellen bilden einen Tab-Stopp auf der aktiven Zelle, und die Symbolleiste, die Menüleiste und die Tabellenblatt-Register bilden je einen Tab-Stopp, in visueller Reihenfolge. `Tab` verlässt das Tabellenblatt an der letzten und der ersten Zelle. Dialoge übernehmen den Fokus, halten `Tab` innerhalb und setzen den Fokus beim Schließen auf die aktive Zelle zurück; Menüs, Kontextmenüs und Popups setzen den Fokus auf das Steuerelement zurück, das sie geöffnet hat, und nach dem Anwenden einer Text- oder Hintergrundfarbe kehrt der Fokus zur aktiven Zelle zurück. Die aktive Zelle wird in den sichtbaren Bereich gescrollt, wenn sie den Fokus erhält. |
| **2.4.4** Linkzweck (im Kontext) | Unterstützt | Ein Link in einer Zelle wird als `<a href>`-Element gerendert, dessen Text der vom Autor festgelegte Linktext oder die Adresse ist. Der Zellentext ergänzt "link", wenn die Zelle ausgewählt ist, und `Alt`+`Enter` öffnet ihn. |
| **2.5.1** Zeigergesten | Unterstützt | Kein Vorgang erfordert eine Multipoint- oder pfadbasierte Geste; jeder Ziehvorgang hat eine Alternative ohne Ziehen (siehe 2.5.7). |
| **2.5.2** Zeiger-Abbruch | Unterstützt | Das Ändern von Spalten- und Zeilengrößen sowie das Ausfüllkästchen wirken beim Loslassen, und ein Rückgängig-Schritt macht jeden davon rückgängig. Befehle der Symbolleiste, der Menüs und der Tabellenblatt-Register werden bei `click` ausgeführt. |
| **2.5.3** Beschriftung im Namen | Unterstützt | Steuerelemente mit sichtbarem Text übernehmen diesen Text als zugänglichen Namen: die Menüeinträge, die Kontextmenübefehle, die Tabellenblatt-Register und die Dialogschaltflächen. Icon-Schaltflächen werden durch ihren Tooltip benannt, die Farbschaltflächen durch ihren Tooltip gefolgt vom Farbnamen. |
| **2.5.4** Bewegungsaktivierung | Nicht anwendbar | Keine Funktion wird durch Gerätebewegung oder Benutzerbewegung bedient. |
| **3.1.1** Sprache der Seite | Nicht anwendbar | Die Dokumentsprache (`<html lang>`) wird von der Host-Anwendung festgelegt. |
| **3.2.1** Bei Fokus | Unterstützt | Das Erhalten des Fokus ändert nie den Kontext. Ein Klick auf einen Spaltenbuchstaben, eine Zeilennummer oder die Ecke wählt die Zeilen bzw. Spalten aus und lässt den Fokus auf der aktiven Zelle. |
| **3.2.2** Bei Eingabe | Unterstützt | Das Ändern eines Werts ändert den Kontext nicht. Das Bearbeiten einer Zelle, das Auswählen eines Werts aus einer Liste oder die Eingabe in der Suchleiste aktualisiert das Tabellenblatt an Ort und Stelle, was der dokumentierte Zweck dieser Steuerelemente ist. |
| **3.2.6** Konsistente Hilfe (nur 2.2) | Nicht anwendbar | Das Widget stellt keinen Hilfemechanismus bereit; dies ist ein Thema auf Seitenebene. |
| **3.3.1** Fehlererkennung | Unterstützt | Formelfehler und ungültige Listenwerte werden im Zelleninhalt beschrieben, zum Beispiel "Reference error. Check the cell references" und "Invalid value. Choose a value from the list". Neue Formelfehler und durch eine Bearbeitung verursachte ungültige Werte werden über die Live-Region angekündigt, und der Editor eines ungültigen Werts hat `aria-invalid="true"`. |
| **3.3.2** Beschriftungen oder Anweisungen | Unterstützt | Der Zelleneditor heißt "Cell editor, B7" und die Formelleiste "Formula bar, B7", mit der Adresse der bearbeiteten Zelle. Die Dialogfelder sind beschriftet, zum Beispiel "Width in pixels", und die Schaltflächen der Suchleiste heißen "Previous match", "Next match" und "Close search". |
| **3.3.7** Redundante Eingabe (nur 2.2) | Unterstützt | Das Produkt enthält keinen mehrstufigen Prozess, der bereits eingegebene Informationen erneut abfragt. |
| **4.1.2** Name, Rolle, Wert | Unterstützt | Jeder Teil stellt eine Rolle, seine Zustände und einen Namen aus der Locale bereit: die Zellen (`grid`, `row`, `gridcell`, `columnheader`, `rowheader`, `aria-selected`, `aria-readonly`), die Symbolleisten und die Menüleiste (`toolbar`, `menubar`), die Schaltflächen für Formatierung, Sperren und Filter sowie die Tabellenblatt-Register (`aria-pressed`), die Formatierungseinträge der Menüleiste (`menuitemcheckbox`, `aria-checked`) und die sich gegenseitig ausschließenden Formate (`menuitemradio`, `aria-checked`). Warnmeldungen sind `alertdialog` mit `aria-modal="true"`. Der Listeneditor ist eine `combobox`, die eine `listbox` steuert, mit `aria-expanded` und `aria-activedescendant`. |

### Tabelle 2: Erfolgskriterien, Stufe AA {#table-2-success-criteria-level-aa}

| Kriterien | Konformitätsstufe | Anmerkungen und Erläuterungen |
|---|---|---|
| **1.2.4** Untertitel (live) | Nicht anwendbar | Keine Live-Multimediainhalte. |
| **1.2.5** Audiodeskription (aufgezeichnet) | Nicht anwendbar | Keine aufgezeichneten Videoinhalte. |
| **1.3.4** Ausrichtung | Unterstützt | Der Inhalt ist nicht auf eine einzelne Anzeigeausrichtung beschränkt. |
| **1.3.5** Eingabezweck bestimmen | Nicht anwendbar | Die Editoren des Produkts erfassen Dokumentdaten, nicht die persönlichen Informationen des Benutzers, die von der WCAG-Liste der Eingabezwecke abgedeckt werden. |
| **1.4.3** Kontrast (Minimum) | Unterstützt | Die Themes `contrast-light` und `contrast-dark` erfüllen AA: Kein Produkttext liegt in einem der beiden Themes unter 4,5:1, bei geöffneter Suchleiste, geöffnetem Listeneditor, geöffnetem Dialog für die Spaltenbreite und geöffneter Warnmeldung. Die Farben der Formelreferenzen liegen in den Themes light und `contrast-light` bei 4,59:1 bis 7,04:1 und in den dunklen Themes bei 7,62:1 bis 12,26:1. Im Standard-Theme light liegt sekundärer Text wie Dialogfeldbeschriftungen und Text von Warnmeldungen bei etwa 3,95:1. Zur Erfüllung des Kriteriums muss eines der Kontrast-Themes ausgewählt werden; damit erfüllt eine unterstützte Methode das Kriterium. |
| **1.4.4** Textgröße ändern | Unterstützt | Der Text kann ohne Verlust von Inhalt oder Funktionalität auf 200 % vergrößert werden; die Symbolleiste, die Formelleiste, die Tabellenblatt-Register und die Dialoge bleiben bedienbar. |
| **1.4.5** Schriftbilder | Unterstützt | Aller Text wird als echter Text dargestellt. Icons sind Schriftglyphen; das Produkt verwendet keine Rasterbilder. |
| **1.4.10** Umbruch | Unterstützt | Die Zellen sind zweidimensionaler Inhalt, der vom Kriterium vom Umbruch ausgenommen ist, und scrollen horizontal und vertikal. Die Symbolleiste, die Menüleiste und die Tabellenblatt-Register passen in eine Breite von 320 CSS-px. |
| **1.4.11** Nicht-Text-Kontrast | Unterstützt | Die Fokusindikatoren der Zellen, der Formelleiste und der Steuerelemente der Leisten sind 2 px breit und in Theme-Farben gezeichnet; die folgenden Verhältnisse gelten für die Themes light (Standard), `contrast-light`, dark und `contrast-dark`. Die aktive Zelle ist durch einen durchgehenden 2-px-Rahmen in `--dhx-color-primary` markiert: etwa 3,9:1, 7,7:1, 3,4:1 und 5,3:1 gegenüber dem Zellenhintergrund. Die Zelle und der Zelleneditor, die den Tastaturfokus haben, erhalten eine 2-px-Kontur in derselben Farbe, mit denselben Verhältnissen, und innerhalb eines ausgewählten Bereichs etwa 3,3:1, 6,0:1, 3,1:1 und 4,2:1. Die Formelleiste erhält eine 2-px-Kontur in `--dhx-spreadsheet-focus-color`: etwa 3,9:1, 7,7:1, 5,3:1 und 6,5:1 gegenüber ihrem Hintergrund. Die Steuerelemente der Symbolleiste, der Menüleiste und der Tabellenblatt-Register erhalten dieselbe Kontur: etwa 3,7:1, 7,2:1, 3,9:1 und 4,9:1 gegenüber dem Hintergrund der Leiste. Alle Werte liegen über der Anforderung von 3:1. |
| **1.4.12** Textabstand | Unterstützt | Bei angewendeten WCAG-Überschreibungen des Textabstands wird keine Beschriftung eines Steuerelements abgeschnitten; die Leiste der Tabellenblatt-Register scrollt, wenn die Register wachsen. |
| **1.4.13** Inhalt bei Hover oder Fokus | Unterstützt | Tooltips der Symbolleiste bleiben geöffnet, solange der Mauszeiger darüber steht, und werden mit `Esc` geschlossen, ohne den Zeiger oder den Fokus zu bewegen. Der Tooltip für ungültige Werte meldet einen Eingabefehler, bleibt bestehen, solange die Zelle aktiv ist, und wird mit `Esc` entfernt. |
| **2.4.5** Mehrere Wege | Nicht anwendbar | Gilt für das Auffinden von Seiten innerhalb einer Gruppe von Webseiten; für eine einzelne eingebettete Komponente nicht relevant (Thema der Host-Anwendung). |
| **2.4.6** Überschriften und Beschriftungen | Unterstützt | Die Hauptbereiche beziehen ihre zugänglichen Namen aus der Locale: "Spreadsheet" (Grid), "Formatting" (Symbolleiste), "Borders", "Search" und "Link" (die Symbolleisten des Popups für Rahmen, der Suchleiste und des Link-Popups), "Main" (Menüleiste), "Cell" und "Sheet" (Kontextmenüs der Zellen und der Tabellenblatt-Register), "Sheets" (Leiste der Tabellenblatt-Register), "Formula bar, B7" (Formelleiste) und "Cell editor, B7" (Zelleneditor). Die Ecke zum Auswählen aller Zellen heißt "Select all", die Suchleiste heißt "Search" und ihre Schaltflächen "Previous match", "Next match" und "Close search", die Schaltfläche zum Hinzufügen eines Tabellenblatts heißt "Add sheet", und die übrigen Dialoge werden nach ihren Titeln benannt. |
| **2.4.7** Fokus sichtbar | Unterstützt | Die Position des Tastaturfokus ist jederzeit sichtbar. Die aktive Zelle hat immer einen durchgehenden 2-px-Rahmen, und die fokussierte Zelle oder der fokussierte Zelleneditor hat eine 2-px-Kontur, beide in der Primärfarbe des Themes. Die Formelleiste und die Steuerelemente der Symbolleiste, der Menüleiste, der Tabellenblatt-Register, des Popups für Rahmen, des Link-Popups und der Suchleiste zeigen einen 2-px-Fokusring in der Farbe `--dhx-spreadsheet-focus-color`. In der Farbpalette, der Liste der Rahmenstile, den Dropdown-Listen der Symbolleiste und der Menüleiste sowie den Kontextmenüs hat der fokussierte Eintrag eine 1-px-Kontur mit gestrichelter Linie. Im Listeneditor wird der fokussierte Eintrag mit einer Hintergrundfarbe hervorgehoben. Der Fokusindikator wird in jedem integrierten Theme angezeigt. |
| **2.4.11** Fokus nicht verdeckt (Minimum) (nur 2.2) | Unterstützt | Die aktive Zelle wird neben den fixierten Zeilen und Spalten in den sichtbaren Bereich gescrollt, sodass sie nie hinter einem fixierten Bereich zurückbleibt. |
| **2.5.7** Ziehbewegungen (nur 2.2) | Unterstützt | Die Bereichsauswahl funktioniert mit `Shift`+Pfeiltasten und `Ctrl`+`Space`/`Shift`+`Space`. Spaltenbreite und Zeilenhöhe werden mit den Kontextmenübefehlen *Column width* und *Row height* festgelegt, mit Rückgängig-Funktion. Ausgeblendete Zeilen und Spalten werden mit `Ctrl`+`Shift`+`9`/`0` und den Befehlen *Show rows*/*Show columns* eingeblendet. Das Ausfüllen von Zellen ist über das Ereignis [`groupFill`](api/spreadsheet_groupfill_event.md) möglich, das an einen Kontextmenübefehl gebunden werden kann. |
| **2.5.8** Zielgröße (Minimum) (nur 2.2) | Teilweise unterstützt | Das Ausfüllkästchen ist 12 x 12 CSS-px groß. Für die Größenänderung von Spalten und Zeilen gibt es gleichwertige Steuerelemente, die Befehle *Column width* und *Row height*. Die Ecke zum Auswählen aller Zellen ist die 40 x 32 CSS-px große Eckkopfzelle, und die Steuerelemente der Symbolleiste und der Menüs sind größer als 24 x 24 CSS-px. |
| **3.1.2** Sprache von Teilen | Nicht anwendbar | Das Widget mischt innerhalb seines Inhalts keine Sprachen; die Sprache liegt beim Host. |
| **3.2.3** Konsistente Navigation | Nicht anwendbar | Gilt für eine Gruppe von Webseiten; Thema der Host-Anwendung. |
| **3.2.4** Konsistente Erkennung | Unterstützt | Befehle mit gleicher Funktion haben in der Symbolleiste, der Menüleiste und dem Kontextmenü dieselben Namen und Icons sowie dieselben Tasten. |
| **3.3.3** Fehlervorschlag | Unterstützt | Fehlerbeschreibungen schlagen eine Korrektur vor: "Check the cell references" bei einem Referenzfehler und "Choose a value from the list" bei einem ungültigen Listenwert. |
| **3.3.4** Fehlervermeidung (rechtlich, finanziell, Daten) | Unterstützt | Jede Änderung der Daten kann mit Rückgängig (`Ctrl`+`Z`) zurückgenommen und mit Wiederholen erneut angewendet werden. Die Host-Anwendung kann zusätzlich jede Aktion über das Ereignis [`beforeAction`](api/spreadsheet_beforeaction_event.md) abbrechen. |
| **3.3.8** Barrierefreie Authentifizierung (Minimum) (nur 2.2) | Nicht anwendbar | Das Produkt führt keine Authentifizierung durch. |
| **4.1.3** Statusmeldungen | Unterstützt | Statusänderungen werden ohne Fokusverschiebung über eine visuell ausgeblendete Live-Region außerhalb des Grids angekündigt (`role="status"`, `aria-live="polite"`, `aria-atomic="true"`). Sie meldet den ausgewählten Bereich, neue Formelfehler und ungültige Werte, abgelehnte Bearbeitungen gesperrter Zellen oder eines schreibgeschützten Tabellenblatts, Suchergebnisse, Beginn und Ende von Import und Export, neue Spaltenbreiten und Zeilenhöhen sowie eine Auswahl ohne einzublendende ausgeblendete Zeilen oder Spalten. Dieselbe Region steht der Host-Anwendung über die öffentliche Methode [`announce()`](api/spreadsheet_announce_method.md) zur Verfügung, und jede integrierte Meldung ist über die `aria_*`-Locale-Schlüssel lokalisierbar. |

## Bericht zu Revised Section 508 {#revised-section-508-report}

WCAG-bezogene Bestimmungen werden im obigen WCAG-2.x-Bericht beantwortet und hier referenziert. Kapitel 4 (Hardware)
ist Nicht anwendbar, da DHTMLX Spreadsheet eine Softwarekomponente ohne Hardware oder physische Bedienelemente ist.

### Kapitel 3: Funktionale Leistungskriterien {#chapter-3-functional-performance-criteria}

| Kriterien | Konformitätsstufe | Anmerkungen und Erläuterungen |
|---|---|---|
| 302.1 Ohne Sehvermögen | Unterstützt | Mit einem Screenreader bedienbar über das `grid`-Modell mit Spalten- und Zeilenköpfen, die Zelladresse und die mit jeder Zelle vorgelesenen Beschreibungen, die benannten Symbolleisten und Menüs, die Live-Region und das Tastaturmodell. Siehe WCAG 1.3.1, 2.1.1, 4.1.2, 4.1.3. |
| 302.2 Mit eingeschränktem Sehvermögen | Unterstützt | Zoom, Textvergrößerung und Umbruch werden unterstützt, der Fokus ist in jedem Theme sichtbar, und der AA-Kontrast wird von den Themes `contrast-light` / `contrast-dark` erfüllt. Siehe WCAG 1.4.3, 1.4.4, 1.4.10, 1.4.11, 2.4.7. |
| 302.3 Ohne Farbwahrnehmung | Unterstützt | Keine Information wird allein durch Farbe vermittelt: Die aktive Zelle, die Auswahl, Suchtreffer und ungültige Werte tragen jeweils neben der Farbe einen Rahmen, einen Marker oder Text in der Zelle, und die Farbschaltflächen nennen die Farbe. Siehe WCAG 1.4.1. |
| 302.4 Ohne Hörvermögen | Unterstützt | Keine Information wird durch Ton vermittelt. |
| 302.5 Mit eingeschränktem Hörvermögen | Unterstützt | Keine Information wird durch Ton vermittelt. |
| 302.6 Ohne Sprechvermögen | Unterstützt | Für die Bedienung des Produkts ist keine Spracheingabe erforderlich. |
| 302.7 Mit eingeschränkter Handhabung | Unterstützt | Jede Funktion ist über die Tastatur bedienbar; keine pfadbasierte Geste ist erforderlich, und jeder Ziehvorgang hat eine Alternative über Tastatur oder Befehl. Siehe WCAG 2.1.1, 2.5.1, 2.5.7, 2.5.8. |
| 302.8 Mit eingeschränkter Reichweite und Kraft | Unterstützt | Über die Tastatur bedienbar; keine Anforderungen an physische Reichweite, Kraftaufwand oder Zeitvorgaben. |
| 302.9 Mit eingeschränkten sprachlichen, kognitiven und Lernfähigkeiten | Unterstützt | Befehle haben in der Symbolleiste, den Menüs und dem Kontextmenü dieselben Namen, Formelfehler werden mit einem Korrekturweg beschrieben, und jede Änderung kann mit Rückgängig zurückgenommen werden. Siehe WCAG 3.2.4, 3.3.3, 3.3.4. |

### Kapitel 5: Software {#chapter-5-software}

| Kriterien | Konformitätsstufe | Anmerkungen und Erläuterungen |
|---|---|---|
| 501.1 Geltungsbereich - Einbeziehung von WCAG 2.0 AA | Siehe Abschnitt WCAG 2.x | Siehe den obigen WCAG-2.x-Bericht. |
| 502 Interoperabilität mit assistiven Technologien | Nicht anwendbar | Gilt für Nicht-Web-Software (Plattformsoftware). DHTMLX Spreadsheet ist Webinhalt, der standardmäßiges DOM und ARIA für den Accessibility-Tree des Browsers bereitstellt; die Interoperabilität wird durch die WCAG-Ergebnisse abgedeckt (Klausel 9 / 501.1). |
| 503 Anwendungen | Nicht anwendbar | Gilt für Nicht-Web-Plattformsoftware; das Produkt ist Webinhalt. |
| 504 Authoring-Tools | Nicht anwendbar | DHTMLX Spreadsheet ist kein Authoring-Tool für Webinhalte: Es bearbeitet Tabellendaten, keine für die Barrierefreiheit relevanten Webinhalte. |

### Kapitel 6: Supportdokumentation und -dienste {#chapter-6-support-documentation-and-services}

| Kriterien | Konformitätsstufe | Anmerkungen und Erläuterungen |
|---|---|---|
| 602.2 Funktionen für Barrierefreiheit und Kompatibilität | Unterstützt | Die Dokumentation beschreibt die Barrierefreiheitsfunktionen des Produkts: Der Leitfaden [Barrierefreiheit](accessibility.md) behandelt das WAI-ARIA-Modell, das Tastaturmodell, den schreibgeschützten Modus und die Auswahloption, die Themes und den Fokusindikator, die API [`announce()`](api/spreadsheet_announce_method.md) und die [lokalisierbaren `aria_*`-Zeichenfolgen](accessibility.md#localization); die [Liste der Hotkeys](hotkeys.md) führt jeden Kurzbefehl auf. |
| 602.3 Elektronische Supportdokumentation | Unterstützt (siehe Abschnitt WCAG 2.x) | Die Dokumentationsseite wird als Webinhalt bereitgestellt und so gepflegt, dass sie WCAG 2.2 AA erfüllt. |
| 602.4 Alternative Formate für nichtelektronische Supportdokumentation | Nicht anwendbar | Die Dokumentation wird ausschließlich elektronisch bereitgestellt; es gibt keine nichtelektronische (gedruckte) Supportdokumentation. |
| 603.2 Informationen zu Funktionen für Barrierefreiheit und Kompatibilität | Unterstützt | Die Barrierefreiheitsfunktionen des Produkts sind im Leitfaden [Barrierefreiheit](accessibility.md) öffentlich dokumentiert und können auf Anfrage über den Supportkanal bereitgestellt werden. |
| 603.3 Berücksichtigung von Kommunikationsbedürfnissen | Unterstützt | Der Support erfolgt über einen textbasierten E-Mail-Kanal; Benutzer interagieren mit ihrer eigenen assistiven Technologie. |

## Bericht zu EN 301 549 {#en-301-549-report}

Klausel 9 (Web) entspricht direkt dem obigen WCAG-2.x-Bericht und ist die inhaltliche Bewertung für dieses Webprodukt.
Die Klauseln zu Telefonie, Video und Hardware (Klauseln 6, 7, 8, 13) sind Nicht anwendbar.

### Klausel 4: Funktionale Leistungsangaben {#clause-4-functional-performance-statements}

Diese spiegeln die Ergebnisse aus Section 508 Kapitel 3 wider (gleiche Schlussfolgerungen).

| Kriterien | Konformitätsstufe | Anmerkungen und Erläuterungen |
|---|---|---|
| 4.2.1 Nutzung ohne Sehvermögen | Unterstützt | Siehe 508 302.1 (mit Screenreader bedienbar über das Grid-Modell, die Zellbeschreibungen, die benannten Steuerelemente, die Live-Region und das Tastaturmodell). |
| 4.2.2 Nutzung mit eingeschränktem Sehvermögen | Unterstützt | Siehe 508 302.2 (AA-Kontrast über die Kontrast-Themes, sichtbarer Fokus in jedem Theme; Zoom und Umbruch werden unterstützt). |
| 4.2.3 Nutzung ohne Farbwahrnehmung | Unterstützt | Siehe 508 302.3 (ein Rahmen, ein Marker oder Text begleitet jeden Farbhinweis). |
| 4.2.4 Nutzung ohne Hörvermögen | Unterstützt | Keine Information wird durch Ton vermittelt. |
| 4.2.5 Nutzung mit eingeschränktem Hörvermögen | Unterstützt | Keine Information wird durch Ton vermittelt. |
| 4.2.6 Nutzung ohne oder mit eingeschränkter Sprechfähigkeit | Unterstützt | Keine Spracheingabe erforderlich. |
| 4.2.7 Nutzung mit eingeschränkter Handhabung oder Kraft | Unterstützt | Siehe 508 302.7 (per Tastatur bedienbar, keine Gesten, Alternativen für jeden Ziehvorgang). |
| 4.2.8 Nutzung mit eingeschränkter Reichweite | Unterstützt | Keine Anforderungen an physische Reichweite (Softwarekomponente). |
| 4.2.9 Minimierung von Auslösern für photosensitive Anfälle | Unterstützt | Keine blinkenden Inhalte (siehe WCAG 2.3.1). |
| 4.2.10 Nutzung mit eingeschränkten kognitiven, sprachlichen oder Lernfähigkeiten | Unterstützt | Siehe 508 302.9 (einheitliche Befehlsnamen, beschriebene Fehler, umkehrbare Änderungen). |
| 4.2.11 Privatsphäre | Unterstützt | Die Barrierefreiheitsfunktionen nutzen dieselbe Oberfläche wie für alle anderen; es gibt keinen separaten, weniger privaten Modus. |

### Klausel 5: Allgemeine Anforderungen {#clause-5-generic-requirements}

**Überwiegend Nicht anwendbar.** Klausel 5 behandelt geschlossene Funktionalität und Anforderungen im Hardware-Stil. DHTMLX
Spreadsheet ist offene Websoftware, die mit der assistiven Technologie der Plattform und des Browsers zusammenarbeitet, daher sind die
Unterklauseln zu geschlossener Funktionalität, Biometrie (5.3), bedienbaren Teilen (5.5) und dem Status von Sperr-/Umschaltsteuerungen
(5.6) Nicht anwendbar. Wo eine allgemeine Anforderung durch normale Unterstützung assistiver Technologien erfüllt wird,
ist sie durch Klausel 9 (Web) und die WCAG-Ergebnisse abgedeckt.

### Klausel 9: Web {#clause-9-web}

**Siehe Abschnitt WCAG 2.x.** Die Klauseln 9.1.1.1-9.4.1.3 entsprechen den WCAG-2.2-Ergebnissen der Stufen A/AA in den Tabellen 1
und 2 oben.

### Klausel 11: Software {#clause-11-software}

**Nicht anwendbar (bewertet unter Klausel 9).** DHTMLX Spreadsheet ist Webinhalt, der unter Klausel 9 (Web) bewertet wird;
es ist keine Nicht-Web-Software. Die WCAG-bezogenen Softwarebestimmungen (11.1.1.1-11.4.1.3) sind durch die WCAG-
2.x-Ergebnisse abgedeckt. 11.8 (Authoring-Tools) ist Nicht anwendbar, da das Produkt kein Authoring-Tool ist.

### Klausel 12: Dokumentation und Supportdienste {#clause-12-documentation-and-support-services}

| Kriterien | Konformitätsstufe | Anmerkungen und Erläuterungen |
|---|---|---|
| 12.1.1 Funktionen für Barrierefreiheit und Kompatibilität | Unterstützt | Der Leitfaden [Barrierefreiheit](accessibility.md) dokumentiert die Barrierefreiheitsfunktionen des Produkts: das WAI-ARIA-Modell, das Tastaturmodell, den schreibgeschützten Modus und die Auswahloption, die Themes, den Fokusindikator, die API [`announce()`](api/spreadsheet_announce_method.md) und die [lokalisierbaren `aria_*`-Zeichenfolgen](accessibility.md#localization). |
| 12.1.2 Barrierefreie Dokumentation | Unterstützt (siehe Abschnitt WCAG 2.x) | Die Dokumentationsseite wird als Webinhalt bereitgestellt und so gepflegt, dass sie WCAG 2.2 AA erfüllt. |
| 12.2.2 Informationen zu Funktionen für Barrierefreiheit und Kompatibilität | Unterstützt | Die Barrierefreiheitsfunktionen sind öffentlich dokumentiert und können vom Support auf Anfrage bereitgestellt werden. |
| 12.2.3 Wirksame Kommunikation | Unterstützt | Der Support erfolgt über einen textbasierten E-Mail-Kanal; Benutzer interagieren mit ihrer eigenen assistiven Technologie. |
| 12.2.4 Barrierefreie Dokumentation | Unterstützt (siehe Abschnitt WCAG 2.x) | Gleiche Grundlage wie bei 12.1.2: Die Dokumentationsseite wird so gepflegt, dass sie WCAG 2.2 AA erfüllt. |

## Rechtlicher Hinweis {#legal-disclaimer}

Dieser Bericht dient ausschließlich Informationszwecken und beschreibt die Barrierefreiheit der genannten
Produktversion zum Berichtsdatum. Er wird „wie besehen" und ohne Gewährleistung jeglicher Art bereitgestellt und stellt
keine vertragliche Verpflichtung oder Garantie dar. Die Unterstützung der Barrierefreiheit kann sich in späteren Versionen ändern,
und die Ergebnisse gelten für die bewertete Konfiguration. „VPAT" und „Voluntary Product Accessibility Template" sind
eingetragene Dienstleistungsmarken des Information Technology Industry Council (ITI).
