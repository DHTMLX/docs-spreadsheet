---
sidebar_label: Localization
title: React Spreadsheet Lokalisierung
description: "UI-Bezeichnungen, Formelnamen und Zahlen-/Datumsformatierung in React Spreadsheet lokalisieren."
---

# React Spreadsheet Lokalisierung {#react-spreadsheet-localization}

React Spreadsheet verfügt über zwei separate Lokalisierungsmechanismen für verschiedene Aspekte der Benutzeroberfläche.

## Zwei Lokalisierungsmechanismen {#two-localization-mechanisms}

| Mechanismus | Prop | Was wird gesteuert |
|-----------|------|-----------------|
| UI-Lokalisierung | `spreadsheetLocale` | Menübezeichnungen, Toolbar-Tooltips, Dialogtexte und lokalisierte Formelnamen |
| Zahlen-/Datumsformatierung | `localization` | Dezimaltrennzeichen, Währungssymbol, Datums-/Uhrzeitanzeigeformat |

Diese Props sind unabhängig voneinander: Sie können eine oder beide verwenden.

## UI-Lokalisierung (spreadsheetLocale) {#ui-localization-spreadsheetlocale}

Die `spreadsheetLocale`-Prop akzeptiert ein [`SpreadsheetLocale`](react/types.md#spreadsheetlocale)-Objekt mit zwei Eigenschaften:

- `locale` - ein `Record<string, string>` mit UI-String-Überschreibungen
- `formulas` - ein `Record<string, [string, string?][]>` mit lokalisierten Formelnamen, gruppiert nach Kategorie

~~~tsx
const locale: SpreadsheetLocale = {
    locale: {
        "File": "Datei",
        "Edit": "Bearbeiten",
        "Insert": "Einfügen",
        "Undo": "Rückgängig",
        "Redo": "Wiederherstellen",
        // ... weitere UI-Strings
    },
    formulas: {
        "MATCH": [
            ["Suchwert", "Erforderlich. Der Wert, der im Sucharray abgeglichen werden soll."],
            ["Sucharray", "Erforderlich. Ein Zellbereich oder ein Array-Bezug."],
        ],
        // ... weitere Formelkategorien
    },
};

<ReactSpreadsheet sheets={sheets} spreadsheetLocale={locale} />
~~~

:::warning
`spreadsheetLocale` ist eine Init-Only-Prop. Eine Änderung nach dem ersten Rendering führt dazu, dass das Widget zerstört und neu erstellt wird. Der Rückgängig/Wiederherstellen-Verlauf und der UI-Zustand (Auswahl, Scrollposition) werden zurückgesetzt.
:::

## Zahlen-/Datumsformatierung (localization) {#numberdate-formatting-localization}

Die `localization`-Prop steuert, wie Zahlen und Datumsangaben angezeigt werden: Dezimaltrennzeichen, Währungssymbole und Datumsmuster. Sie verwendet dasselbe Format wie die DHTMLX Spreadsheet-Konfigurationseigenschaft [`localization`](api/spreadsheet_localization_config.md).

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    localization={{
        decimal: ",",
        thousands: " ",
        currency: "€",
    }}
/>
~~~

:::warning
`localization` ist ebenfalls eine Init-Only-Prop. Änderungen lösen einen vollständigen Zerstörungs-/Neuaufbau-Zyklus aus.
:::

## Verwandte API und Anleitungen {#related-api-and-guides}

- [Lokalisierung](localization.md) - DHTMLX Spreadsheet Lokalisierungsanleitung
- [SpreadsheetLocale-Typ](react/types.md#spreadsheetlocale) - TypeScript-Interface-Referenz
