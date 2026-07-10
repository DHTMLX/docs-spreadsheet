---
sidebar_label: Обзор
title: Обзор React Spreadsheet
description: "Обзор официальной React-обёртки: декларативная модель данных, пропсы, темы, события и доступ через ref."
---

# Обзор React Spreadsheet {#react-spreadsheet-overview}

`ReactSpreadsheet` — это декларативная React-обёртка для виджета DHTMLX Spreadsheet. Предоставляет компонентный API, где пропсы описывают состояние таблицы, а обёртка обрабатывает синхронизацию с базовым виджетом.

:::note
React-обёртка Spreadsheet доступна по лицензиям DHTMLX Spreadsheet **Commercial**, **Enterprise** и **Ultimate**. Для ознакомления используйте бесплатный 30-дневный ознакомительный пакет. Смотрите [Установку](react/installation.md) для инструкций по настройке.
:::

## Возможности таблицы {#spreadsheet-features}

React-обёртка предоставляет доступ ко всем функциям DHTMLX Spreadsheet:

- Многолистовые таблицы со вкладками листов (добавление, удаление, переименование)
- Значения ячеек, формулы (90+ встроенных функций) и форматирование чисел
- Стилизация ячеек, объединение ячеек, закреплённые области, валидация данных
- Сортировка, фильтрация и поиск
- Операции со строками/столбцами (добавление, удаление, скрытие/отображение, изменение размера, автоподбор)
- Импорт и экспорт Excel (XLSX) через модули WebAssembly
- Настраиваемые панель инструментов и контекстное меню
- Блокировка ячеек и режим только для чтения
- 4 встроенные темы (светлая, тёмная, контрастно-светлая, контрастно-тёмная) с настройкой через CSS-переменные
- Локализация меток интерфейса, названий формул и форматирования чисел/дат
- История отмены/повтора
- Поддержка TypeScript со встроенными определениями типов и JSDoc-описаниями

## Принципы проектирования обёртки {#wrapper-design-principles}

- **Пропсы описывают состояние, а не действия.** Нет «триггерных» пропсов. Передавайте данные, и компонент обновит виджет соответствующим образом.
- **`sheets` является единственным источником истины** для всех данных таблицы: ячейки, объединённые диапазоны, закреплённые области, фильтры, сортировка.
- **Ref — это запасной выход.** Для операций, которые не отображаются в декларативные пропсы (экспорт, программное выделение, отмена/повтор), обращайтесь к экземпляру базового виджета через ref.
- **Все события виджета представлены как типизированные пропсы-колбэки `onXxx`.** Колбэки «Before» могут вернуть `false` для отмены операции.

## Требования к версиям {#version-requirements}

- React 18+
- Пакет только для ESM

## Быстрый старт {#quick-start}

Минимальный рабочий пример, показывающий, как отрендерить таблицу с одним листом и отформатированными ячейками.

~~~tsx
import { useState } from "react";
import { ReactSpreadsheet, type SheetData } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";

function App() {
    const [sheets] = useState<SheetData[]>([
        {
            id: "sheet1",
            name: "Sales",
            cells: {
                A1: { value: "Product", css: "bold" },
                B1: { value: "Revenue", css: "bold", format: "currency" },
                A2: { value: "Widget" },
                B2: { value: 15000, format: "currency" },
            },
        },
    ]);

    const styles = {
        bold: { "font-weight": "bold" },
    };

    return <ReactSpreadsheet sheets={sheets} styles={styles} activeSheet="sheet1" />;
}
~~~

## Пути импорта {#import-paths}

**Ознакомительная версия** (публичный npm, бесплатная 30-дневная оценка):

~~~tsx
import { ReactSpreadsheet } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";
~~~

**Коммерческая версия** (приватный npm, требуется лицензия):

~~~tsx
import { ReactSpreadsheet } from "@dhx/react-spreadsheet";
import "@dhx/react-spreadsheet/spreadsheet.react.css";
~~~

Смотрите [Установку](react/installation.md) для настройки реестра и всех доступных вариантов пакетов.

## Поведение при обновлении пропсов {#prop-update-behavior}

Пропсы категоризируются по тому, как компонент обрабатывает изменения:

| Категория | Пропсы | Что происходит при изменении |
|----------|-------|----------------------|
| **Только для инициализации** | `menu`, `editLine`, `toolbarBlocks`, `multiSheets`, `formats`, `localization`, `importModulePath`, `exportModulePath`, `spreadsheetLocale` | Виджет уничтожается и пересоздаётся. Данные таблицы сохраняются, но история отмены/повтора и состояние интерфейса (выделение, позиция прокрутки) сбрасываются. |
| **Во время выполнения** | `readonly`, `rowsCount`, `colsCount` | Применяются немедленно без потери данных или сброса состояния интерфейса. |
| **Данные** | `sheets`, `activeSheet` | Применяются инкрементально; обновляются только изменённые ячейки, диапазоны или настройки. |
| **Повторная обработка** | `styles` | Изменения стилей требуют полной перезагрузки данных. Данные таблицы сохраняются, но история отмены/повтора и состояние интерфейса сбрасываются. |
| **Состояние** | `search`, `theme`, `loadUrl` | Применяются через специализированные API виджета без побочных эффектов. |
| **Контейнер** | `className`, `style` | Стандартные React DOM-пропсы на оборачивающем `<div>`. |

## Примеры {#examples}

### Несколько листов с формулами {#multi-sheet-with-formulas}

Два листа со значениями ячеек и формулой `SUM`, отрендеренные с включёнными вкладками листов.

~~~tsx
const [sheets] = useState<SheetData[]>([
    {
        id: "revenue",
        name: "Revenue",
        cells: {
            A1: { value: "Q1" }, B1: { value: "Q2" }, C1: { value: "Q3" }, D1: { value: "Q4" },
            A2: { value: 12000 }, B2: { value: 15000 }, C2: { value: 18000 }, D2: { value: 21000 },
            A3: { value: "Total" }, B3: { value: "=SUM(A2:D2)", format: "currency" },
        },
    },
    {
        id: "expenses",
        name: "Expenses",
        cells: {
            A1: { value: "Category" }, B1: { value: "Amount", format: "currency" },
            A2: { value: "Marketing" }, B2: { value: 5000, format: "currency" },
            A3: { value: "Operations" }, B3: { value: 8000, format: "currency" },
        },
    },
]);

<ReactSpreadsheet sheets={sheets} multiSheets={true} activeSheet="revenue" />
~~~

### Настройка панели инструментов {#custom-toolbar}

Передайте массив идентификаторов блоков в `toolbarBlocks`, чтобы отображать только нужные разделы панели инструментов.

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    toolbarBlocks={["undo", "colors", "decoration", "align", "format"]}
/>
~~~

### Режим только для чтения с заблокированными ячейками {#read-only-with-locked-cells}

Установите `readonly={true}`, чтобы отключить все редактирование на уровне виджета. Добавление `locked: true` на ячейки защищает их индивидуально, когда таблица не находится в режиме только для чтения.

~~~tsx
const sheets: SheetData[] = [
    {
        id: "sheet1",
        name: "Report",
        cells: {
            A1: { value: "Metric", locked: true },
            B1: { value: "Value", locked: true },
            A2: { value: "Revenue", locked: true },
            B2: { value: 50000, format: "currency", locked: true },
        },
    },
];

<ReactSpreadsheet sheets={sheets} readonly={true} />
~~~

## Императивный доступ через ref {#imperative-access-via-ref}

Используйте `SpreadsheetRef` для доступа к экземпляру базового виджета для операций, которые не отображаются в декларативные пропсы, например сериализация данных, запуск отмены/повтора или программная установка выделения.

~~~tsx
import { useRef } from "react";
import { ReactSpreadsheet, type SpreadsheetRef } from "@dhtmlx/trial-react-spreadsheet";

function App() {
    const ref = useRef<SpreadsheetRef>(null);

    const handleExport = () => {
        const data = ref.current?.instance?.serialize();
        console.log(data);
    };

    const handleUndo = () => {
        ref.current?.instance?.undo();
    };

    return (
        <>
            <button onClick={handleExport}>Export</button>
            <button onClick={handleUndo}>Undo</button>
            <ReactSpreadsheet ref={ref} sheets={[]} />
        </>
    );
}
~~~

Свойство `instance` равно `null` до инициализации виджета и после его размонтирования.

## Справочник API {#api-reference}

| Документ | Содержание |
|----------|----------|
| [Справочник пропсов](react/props.md) | Все пропсы компонента с типами, значениями по умолчанию и примерами |
| [Справочник событий](react/events.md) | Пропсы колбэков событий, сгруппированные по категориям |
| [Справочник типов](react/types.md) | TypeScript-интерфейсы, перечисления и псевдонимы типов |
