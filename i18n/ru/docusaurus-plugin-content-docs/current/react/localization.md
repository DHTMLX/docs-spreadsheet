---
sidebar_label: Локализация
title: Локализация React Spreadsheet
description: "Локализация меток интерфейса, названий формул и форматирования чисел/дат в React Spreadsheet."
---

# Локализация React Spreadsheet {#react-spreadsheet-localization}

React Spreadsheet имеет два отдельных механизма локализации для различных аспектов интерфейса.

## Два механизма локализации {#two-localization-mechanisms}

| Механизм | Пропс | Что контролирует |
|-----------|------|-----------------|
| Локализация интерфейса | `spreadsheetLocale` | Метки меню, подсказки панели инструментов, текст диалогов и локализованные имена формул |
| Форматирование чисел/дат | `localization` | Разделитель дробной части, символ валюты, формат отображения даты/времени |

Эти пропсы независимы: можно использовать один или оба.

## Локализация интерфейса (spreadsheetLocale) {#ui-localization-spreadsheetlocale}

Пропс `spreadsheetLocale` принимает объект [`SpreadsheetLocale`](react/types.md#spreadsheetlocale) с двумя свойствами:

- `locale` - `Record<string, string>` с переопределениями строк интерфейса
- `formulas` - `Record<string, [string, string?][]>` с локализованными именами формул, сгруппированными по категориям

~~~tsx
const locale: SpreadsheetLocale = {
    locale: {
        "File": "Datei",
        "Edit": "Bearbeiten",
        "Insert": "Einfügen",
        "Undo": "Rückgängig",
        "Redo": "Wiederherstellen",
        // ... другие строки интерфейса
    },
    formulas: {
        "MATCH": [
            ["Suchwert", "Erforderlich. Der Wert, der im Sucharray abgeglichen werden soll."],
            ["Sucharray", "Erforderlich. Ein Zellbereich oder ein Array-Bezug."],
        ],
        // ... другие категории формул
    },
};

<ReactSpreadsheet sheets={sheets} spreadsheetLocale={locale} />
~~~

:::warning
`spreadsheetLocale` — это пропс только для инициализации. Изменение его после первоначального рендера приводит к уничтожению и пересозданию виджета. История отмены/повтора и состояние интерфейса (выделение, позиция прокрутки) сбрасываются.
:::

## Форматирование чисел/дат (localization) {#numberdate-formatting-localization}

Пропс `localization` управляет отображением чисел и дат: разделителями дробной части, символами валют и шаблонами дат. Использует тот же формат, что и свойство конфигурации [`localization`](api/spreadsheet_localization_config.md) DHTMLX Spreadsheet.

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
`localization` также является пропсом только для инициализации. Изменения запускают полный цикл уничтожения/пересоздания.
:::

## Связанные АПИ и руководства {#related-api-and-guides}

- [Локализация](localization.md) - руководство по локализации DHTMLX Spreadsheet
- [Тип SpreadsheetLocale](react/types.md#spreadsheetlocale) - справочник TypeScript-интерфейса
