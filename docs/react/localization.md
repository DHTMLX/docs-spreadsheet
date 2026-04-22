---
sidebar_label: Localization
title: React Spreadsheet Localization
description: "Localize UI labels, formula names, and number/date formatting in React Spreadsheet."
---

# React Spreadsheet localization

React Spreadsheet provides two separate localization mechanisms for different aspects of the UI.

## Two localization mechanisms

| Mechanism | Prop | What it controls |
|-----------|------|-----------------|
| UI localization | `spreadsheetLocale` | Menu labels, toolbar tooltips, dialog text, and localized formula names |
| Number/date formatting | `localization` | Decimal separator, currency symbol, date/time display format |

These props are independent — you can use either or both.

## UI localization (spreadsheetLocale)

The `spreadsheetLocale` prop accepts a [`SpreadsheetLocale`](/react/types#spreadsheetlocale) object with two properties:

- `locale` — a `Record<string, string>` of UI string overrides
- `formulas` — a `Record<string, [string, string?][]>` of localized formula names grouped by category

~~~tsx
const locale: SpreadsheetLocale = {
    locale: {
        "File": "Datei",
        "Edit": "Bearbeiten",
        "Insert": "Einfügen",
        "Undo": "Rückgängig",
        "Redo": "Wiederherstellen",
        // ... more UI strings
    },
    formulas: {
        "MATCH": [
            ["Suchwert", "Erforderlich. Der Wert, der im Sucharray abgeglichen werden soll."],
            ["Sucharray", "Erforderlich. Ein Zellbereich oder ein Array-Bezug."],
        ],
        // ... more formula categories
    },
};

<ReactSpreadsheet sheets={sheets} spreadsheetLocale={locale} />
~~~

:::warning
`spreadsheetLocale` is an init-only prop. Changing it after the initial render causes the widget to be destroyed and recreated. Undo/redo history and UI state (selection, scroll position) are reset.
:::

## Number/date formatting (localization)

The `localization` prop controls how numbers and dates are displayed — decimal separators, currency symbols, date patterns, etc. It uses the same format as the DHTMLX Spreadsheet [`localization`](/api/spreadsheet_localization_config/) configuration property.

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
`localization` is also an init-only prop. Changes trigger a full destroy/recreate cycle.
:::

## Related

- [Localization](/localization/) — DHTMLX Spreadsheet localization guide
- [SpreadsheetLocale type](/react/types/#spreadsheetlocale) — TypeScript interface reference
