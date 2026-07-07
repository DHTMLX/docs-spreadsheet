---
sidebar_label: localization
title: localization config
description: In der Dokumentation der DHTMLX JavaScript Spreadsheet-Bibliothek erfahren Sie mehr über die localization-Konfiguration. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Spreadsheet herunter.
---

# localization

### Beschreibung {#description}

@short: Optional. Legt das Format von Zahlen, Daten, Uhrzeit und Währung fest

### Verwendung {#usage}

~~~jsx
localization?: object;
~~~

### Parameter {#parameters}

Das Objekt `localization` kann folgende Eigenschaften enthalten:

- `decimal` - (optional) das Symbol als Dezimaltrennzeichen, standardmäßig `"."`.<br>Mögliche Werte: `"." | ","`
- `thousands` - (optional) das Symbol als Tausendertrennzeichen, standardmäßig `","`.<br>Mögliche Werte: `"." | "," | " " | ""`
- `currency` - (optional) das Währungssymbol, standardmäßig `"$"`
- `dateFormat` - (optional) das Anzeigeformat für Datumsangaben als String. Das Standardformat ist `"%d/%m/%Y"`. Details [unten](#characters-for-setting-date-format)
- `timeFormat` - (optional) das Anzeigeformat für Uhrzeiten, entweder `12` oder `24`. Das Standardformat ist `12`

### Standardkonfiguration {#default-config}

~~~jsx
const defaultLocales = {
    decimal: ".", 
    thousands: ",",
    currency: "$",
    dateFormat: "%d/%m/%Y",
    timeFormat: 12,
};
~~~

### Beispiel {#example}

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

### Zeichen zur Festlegung des Datumsformats {#characters-for-setting-date-format}

DHTMLX Spreadsheet verwendet folgende Zeichen zur Festlegung eines Datumsformats:

| Zeichen | Definition                                              |
|---------|---------------------------------------------------------|
| **%d**  | Tag als Zahl mit führender Null, 01..31                 |
| **%j**  | Tag als Zahl, 1..31                                     |
| **%D**  | Kurzname des Wochentags, So Mo Di...                    |
| **%l**  | Vollständiger Name des Wochentags, Sonntag Montag...    |
| **%m**  | Monat als Zahl mit führender Null, 01..12               |
| **%n**  | Monat als Zahl, 1..12                                   |
| **%M**  | Kurzname des Monats, Jan Feb Mär...                     |
| **%F**  | Vollständiger Name des Monats, Januar Februar März...   |
| **%y**  | Jahr als Zahl, 2 Stellen                                |
| **%Y**  | Jahr als Zahl, 4 Stellen                                |
| **%h**  | Stunden im 12-Stunden-Format mit führender Null, 01..12)|
| **%g**  | Stunden im 12-Stunden-Format, 1..12)                    |
| **%H**  | Stunden im 24-Stunden-Format mit führender Null, 00..23 |
| **%G**  | Stunden im 24-Stunden-Format, 0..23                     |
| **%i**  | Minuten mit führender Null, 01..59                      |
| **%s**  | Sekunden mit führender Null, 01..59                     |
| **%a**  | am oder pm                                              |
| **%A**  | AM oder PM                                              |
| **%u**  | Millisekunden                                           |

**Änderungsprotokoll:** 
- Hinzugefügt in v5.1

**Verwandter Artikel:** [Lokalisierung von Zahlen, Datum, Uhrzeit und Währung](number_formatting.md#number-date-time-currency-localization)
