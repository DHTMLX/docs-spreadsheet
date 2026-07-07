---
sidebar_label: Zahlenformatierung
title: Zahlenformatierung
description: Sie können den Entwicklerleitfaden zur Zahlenformatierung in der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek lesen. Durchsuchen Sie Entwicklerleitfäden und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Evaluierungsversion von DHTMLX Spreadsheet herunter.
---

# Zahlenformatierung {#number-formatting}

DHTMLX Spreadsheet unterstützt die Zahlenformatierung, die Sie auf numerische Werte in Zellen anwenden können.

![DHTMLX Spreadsheet Zahlenformat-Dropdown mit den Optionen "Common", "Number", "Currency", "Percent", "Date", "Time" und "Text"](/img/number_format_options.png)

:::note
Der [Benutzerleitfaden](number_formatting_guide.md) erleichtert Ihren Benutzern die Arbeit mit Spreadsheet.
:::

## Standardzahlenformate {#default-number-formats}

Ein Zahlenformat ist ein Objekt, das eine Reihe von Eigenschaften enthält:

- `id` - die ID eines Formats, das verwendet wird, um ein Format für eine Zelle mit der [`setFormat()`](api/spreadsheet_setformat_method.md)-Methode festzulegen
- `mask` - eine Maske für ein Zahlenformat. Sehen Sie sich die Liste der in einer Maske verfügbaren Zeichen [unten](#the-structure-of-a-mask) an
- `name` - der Name eines Formats, der in den Dropdown-Listen der Symbolleiste und des Menüs angezeigt wird
- `example` - ein Beispiel, das zeigt, wie eine formatierte Zahl aussieht. Die Zahl 2702.31 wird als Standardwert für Formatbeispiele verwendet

Die Standard-Zahlenformate sind die folgenden:

~~~jsx
defaultFormats = [
    { name: "Common", id: "common", mask: "", example: "1500.31" },
    { name: "Number", id: "number", mask: "#,##0.00", example: "1,500.31" },
    { name: "Percent", id: "percent", mask: "#,##0.00%", example: "1,500.31%" },
    { name: "Currency", id: "currency", mask: "$#,##0.00", example: "$1,500.31" },
    { name: "Date", id: "date", mask: "mm-dd-yy", example: "28/12/2021" },
    { 
        name: "Time",
           id: "time",
           mask: hh:mm:ss am/pm || hh:mm:ss, // abhängig von der localization.timeFormat-Konfiguration
           example: "13:30:00"
    },
    { name: "Text", id: "text", mask: "@", example: "'1500.31'" },
    { name: "Scientific", id: "scientific", mask: "0.00E+00", example: "1.50E+03" }
];
~~~

So sieht eine Tabelle mit Daten in verschiedenen Zahlenformaten aus:

<iframe src="https://snippet.dhtmlx.com/ihtkdcoc?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Datumsformat {#date-format}

Sie können das Format für Datumsangaben, die in der Tabelle angezeigt werden, mit der Option `dateFormat` der Eigenschaft [`localization`](api/spreadsheet_localization_config.md) definieren. Das Standardformat ist "%d/%m/%Y".

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    localization: {
        dateFormat: "%D/%M/%Y",
    }
});

spreadsheet.parse({
    styles: {
        // eine Reihe von Stilen
    },
    data: [
        {cell: "B1", value: "03/10/2022", format: "date"},
        {cell: "B2", value: new Date(), format: "date"},
    ]
});
~~~

Sehen Sie sich die [vollständige Liste der verfügbaren Zeichen für die Erstellung von Formaten](api/spreadsheet_localization_config.md#characters-for-setting-date-format) an.

## Zeitformat {#time-format}

Um das Format festzulegen, in dem die Uhrzeit in den Tabellenzellen angezeigt werden soll, verwenden Sie die Option `timeFormat` der Eigenschaft [`localization`](api/spreadsheet_localization_config.md):

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    localization: {
        timeFormat: 24,
    }
});

spreadsheet.parse({
    styles: {
        // eine Reihe von Stilen
    },
    data: [
        { cell: "A1", value: "18:30", format: "time" },
        { cell: "A2", value: 44550.5625, format: "time" },
        { cell: "A3", value: new Date(), format: "time" },
    ]
});
~~~

## Lokalisierung von Zahlen, Datum, Uhrzeit und Währung {#number-date-time-currency-localization}

Mit den Konfigurationsoptionen von Spreadsheet können Sie Uhrzeit und Datum lokalisieren, das gewünschte Währungszeichen angeben sowie die gewünschten Dezimal- und Tausendertrennzeichen festlegen. Alle diese Einstellungen sind in der Eigenschaft [`localization`](api/spreadsheet_localization_config.md) verfügbar. Es handelt sich um ein Objekt mit den folgenden Eigenschaften:

- `decimal` - (optional) das Symbol, das als Dezimaltrennzeichen verwendet wird, standardmäßig `"."` (ein Punkt)<br>Mögliche Werte sind `"." | ","`
- `thousands` - (optional) das Symbol, das als Tausendertrennzeichen verwendet wird, standardmäßig `","` (ein Komma)<br>Mögliche Werte sind `"." | "," | " " | ""`
- `currency` - (optional) das Währungszeichen, standardmäßig `"$"`
- `dateFormat` - (optional) das Format der Datumsanzeige als Zeichenkette, standardmäßig `"%d/%m/%Y"`. Details finden Sie auf der API-Seite zu [`localization`](api/spreadsheet_localization_config.md)
- `timeFormat` - (optional) das Format der Zeitanzeige als `12` oder `24`, standardmäßig `12`

Sie können beispielsweise die Standard-Lokalisierungseinstellungen wie folgt ändern:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    localization: {
        decimal: ",", 
        thousands: " ", 
        currency: "¥",  
        dateFormat: "%D/%M/%Y",
        timeFormat: 24
    }
});

spreadsheet.parse(dataset);
~~~

Hier ist das Ergebnis der Konfiguration des `localization`-Objekts für Spreadsheet:

<iframe src="https://snippet.dhtmlx.com/xislsb3c?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Wissenschaftliches Zahlenformat {#scientific-number-format}

Die wissenschaftliche (exponentielle) Schreibweise ist als Standardformat verfügbar und eignet sich gut zur kompakten Darstellung sehr großer oder sehr kleiner Zahlen. Das eingebaute Format `"scientific"` verwendet die Maske `0.00E+00`, die beispielsweise 1500.31 als `1.50E+03` darstellt.

Um es auf eine Zelle anzuwenden, verwenden Sie die Methode [`setFormat()`](api/spreadsheet_setformat_method.md):

~~~jsx
spreadsheet.setFormat("A1", "scientific");
~~~

Sie können auch ein benutzerdefiniertes wissenschaftliches Format mit einer anderen Maske über die Konfigurationsoption [`formats`](api/spreadsheet_formats_config.md) definieren. Beispielsweise erzeugt `0.###E+0` eine kompaktere Ausgabe:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    formats: [
        { id: "scientific_compact", mask: "0.###E+0", name: "Scientific (compact)", example: "1.5E+3" }
    ]
});
~~~

## Formate anpassen {#formats-customization}

Sie sind nicht auf die [Standard-Zahlenformate](#default-number-formats) beschränkt. Sie können Formate auf zwei Arten anpassen:

- Ändern der Einstellungen der Standard-Zahlenformate
- Hinzufügen benutzerdefinierter Zahlenformate zur Tabelle

<iframe src="https://snippet.dhtmlx.com/4c0c0zm7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

Alle diese Änderungen können Sie mit der Konfigurationsoption [`formats`](api/spreadsheet_formats_config.md) vornehmen. Es handelt sich um ein Array von Format-Objekten, von denen jedes eine Reihe von Eigenschaften enthält:

- `id` - (`string`) obligatorisch, die ID eines Formats, das verwendet wird, um ein Format für eine Zelle mit der [`setFormat()`](api/spreadsheet_setformat_method.md)-Methode festzulegen
- `mask` - (`string`) obligatorisch, eine Maske für ein Zahlenformat. Sehen Sie sich die Liste der in einer Maske verfügbaren Zeichen [unten](#the-structure-of-a-mask) an
- `name` - (`string`) optional, der Name eines Formats, der in den Dropdown-Listen der Symbolleiste und des Menüs angezeigt wird
- `example` - (`string`) optional, ein Beispiel, das zeigt, wie eine formatierte Zahl aussieht

### Die Struktur einer Maske {#the-structure-of-a-mask}

Eine Maske kann eine Reihe allgemeiner Syntaxzeichen enthalten, darunter Ziffernplatzhalter, Trennzeichen, Prozent- und Währungszeichen sowie gültige Zeichen:

- **0** - eine Ziffer in der Zahl. Wird verwendet, um nicht signifikante Nullen anzuzeigen, wenn eine Zahl weniger Stellen hat als Nullen im Format vorhanden sind. Um beispielsweise 2 als 2.0 anzuzeigen, verwenden Sie das Format 0.0.
- **#** - eine Ziffer in der Zahl. Wird verwendet, um nur signifikante Zahlen anzuzeigen (nicht signifikante Nullen werden weggelassen, wenn eine Zahl weniger Stellen hat als #-Symbole im Format vorhanden sind).
- **$** - formatiert Zahlen als Dollarbetrag. Um ein anderes Währungszeichen zu verwenden, müssen Sie es in einer Maske als **[$ ihr_währungszeichen]**#,##0.00 definieren, zum Beispiel [$ €]#,##0.00.
{{note Beachten Sie, dass alle Zeichen zwischen [$ und ] als Währungszeichen interpretiert werden.}}
- **.(Punkt)** - wendet ein Dezimaltrennzeichen auf Zahlen an.
- **,(Komma)** - wendet ein Tausendertrennzeichen auf Zahlen an.
- **[Zeichen zur Festlegung eines Datumsformats](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)** - werden verwendet, um eine Maske für Datum und Uhrzeit zu erstellen. Um beispielsweise 27.09.2023 als 27, Sep 2023 anzuzeigen, verwenden Sie das Format "%d, %M %Y".
- **E+ / E-** - formatiert Zahlen in wissenschaftlicher (exponentieller) Schreibweise. Die Ziffern nach `E` legen die Mindestanzahl der Exponentenstellen fest. `E+` zeigt das Exponentenzeichen immer an; `E-` zeigt es nur bei negativen Exponenten. Die Maske `0.00E+00` zeigt beispielsweise 1500.31 als `1.50E+03` an.

## Format festlegen {#setting-format}

Um das gewünschte Format auf einen numerischen Wert anzuwenden, verwenden Sie die Methode [`setFormat()`](api/spreadsheet_setformat_method.md). Sie akzeptiert zwei Parameter:

- `cell` - (`string`) die ID der Zelle, deren Wert formatiert werden soll
- `format` - (`string`) der Name des [Standard-Zahlenformats](#default-number-formats), das auf den Zellwert angewendet werden soll

Zum Beispiel:

~~~jsx
// wendet das Prozentformat auf Zelle A1 an
spreadsheet.setFormat("A1","percent");
~~~

## Format abrufen {#getting-format}

Sie können das auf den Wert einer Zelle angewendete Zahlenformat mit der Methode [`getFormat()`](api/spreadsheet_getformat_method.md) abrufen. Die Methode akzeptiert die ID einer Zelle als Parameter.

~~~jsx
var format = spreadsheet.getFormat("A1"); 
// ->"percent"
~~~

## Events {#events}

Sie können ein Paar von Events verwenden, um Änderungen am Zellformat zu steuern:

- [`beforeAction`](api/spreadsheet_beforeaction_event.md) - wird ausgelöst, bevor die Aktion `setCellFormat` ausgeführt wird
- [`afterAction`](api/spreadsheet_afteraction_event.md) - wird ausgelöst, nachdem die Aktion `setCellFormat` ausgeführt wurde
