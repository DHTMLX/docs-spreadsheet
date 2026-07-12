---
sidebar_label: Основы
title: Основы привязки данных и управления состоянием
description: "Ключевые паттерны управления данными таблицы в React: управляемые пропсы, колбэки событий и escape-люк через ref."
---

# Основы привязки данных и управления состоянием {#data-binding--state-management-basics}

## Декларативная модель {#the-declarative-model}

React Spreadsheet следует декларативному подходу: вы храните данные листов в состоянии React, передаёте их как пропсы, а обёртка автоматически сравнивает ваши данные с текущим состоянием виджета и применяет только изменения.

~~~tsx
import { useState } from "react";
import { ReactSpreadsheet, type SheetData } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";

function App() {
    const [sheets, setSheets] = useState<SheetData[]>([
        {
            id: "sheet1",
            name: "Data",
            cells: {
                A1: { value: "Hello" },
            },
        },
    ]);

    return <ReactSpreadsheet sheets={sheets} activeSheet="sheet1" />;
}
~~~

## Обновление ячеек {#updating-cells}

Используйте иммутабельные обновления состояния с функциональным обновлением `setState`:

~~~tsx
const updateCell = (sheetId: string, cell: string, value: string | number) => {
    setSheets((prev) =>
        prev.map((sheet) =>
            sheet.id === sheetId
                ? {
                    ...sheet,
                    cells: {
                        ...sheet.cells,
                        [cell]: { ...sheet.cells[cell], value },
                    },
                }
                : sheet
        )
    );
};
~~~

## Реакция на действия пользователя {#responding-to-user-actions}

Используйте `onAfterAction` для обработки изменений, выполненных пользователем. Сочетайте его с `ref`, чтобы читать текущие данные виджета:

~~~tsx
import { useRef } from "react";
import { ReactSpreadsheet, type SpreadsheetRef } from "@dhtmlx/trial-react-spreadsheet";

function App() {
    const ref = useRef<SpreadsheetRef>(null);
    const [sheets, setSheets] = useState<SheetData[]>([/* ... */]);

    const handleAfterAction = () => {
        const data = ref.current?.instance?.serialize();
        if (data) {
            // Синхронизация состояния виджета обратно в состояние React
            console.log("Spreadsheet data:", data);
        }
    };

    return (
        <ReactSpreadsheet
            ref={ref}
            sheets={sheets}
            onAfterAction={handleAfterAction}
        />
    );
}
~~~

## Escape-люк через ref {#the-ref-escape-hatch}

Для операций, которые не отображаются на декларативные пропсы, используйте [`SpreadsheetRef`](react/types.md#spreadsheetref) для доступа к экземпляру базового виджета:

- **Сериализация данных:** `ref.current?.instance?.serialize()`
- **Отмена/возврат:** `ref.current?.instance?.undo()` / `ref.current?.instance?.redo()`
- **Получение значения ячейки:** `ref.current?.instance?.getValue("A1")`
- **Программный выбор:** `ref.current?.instance?.selection.setSelectedCell("A1:C5")`

~~~tsx
const ref = useRef<SpreadsheetRef>(null);

const handleExport = () => {
    const data = ref.current?.instance?.serialize();
    console.log(data);
};

<ReactSpreadsheet ref={ref} sheets={sheets} />
~~~

:::warning
Избегайте смешивания императивных записей (например, `instance.setValue()`) с декларативным пропом `sheets`. Обёртка может перезаписать императивные изменения при следующем цикле рендера. Используйте ref только для **чтения** данных и для операций вроде отмены/возврата, выбора и экспорта.
:::

## Управляемый поиск {#controlled-search}

Используйте проп `search` вместе с `onSearchResults` для управляемого поиска:

~~~tsx
const [search, setSearch] = useState<SearchConfig | undefined>();
const [results, setResults] = useState<string[]>([]);

<input
    placeholder="Search..."
    onChange={(e) => setSearch({ query: e.target.value, open: true })}
/>
<p>{results.length} cells found</p>

<ReactSpreadsheet
    sheets={sheets}
    search={search}
    onSearchResults={setResults}
/>
~~~

## Отмена / возврат {#undo--redo}

Используйте `onStateChange` для отслеживания доступности отмены/возврата и вызывайте `undo()`/`redo()` через ref:

~~~tsx
const ref = useRef<SpreadsheetRef>(null);
const [history, setHistory] = useState({ canUndo: false, canRedo: false });

<button
    disabled={!history.canUndo}
    onClick={() => ref.current?.instance?.undo()}
>
    Undo
</button>
<button
    disabled={!history.canRedo}
    onClick={() => ref.current?.instance?.redo()}
>
    Redo
</button>

<ReactSpreadsheet
    ref={ref}
    sheets={sheets}
    onStateChange={setHistory}
/>
~~~

## Производительность {#performance}

- Используйте `useMemo` для производных листов, чтобы избежать лишних пересчётов:

~~~tsx
const filteredSheets = useMemo(
    () => sheets.filter((s) => s.name !== "Hidden"),
    [sheets]
);

<ReactSpreadsheet sheets={filteredSheets} />
~~~

- Избегайте пересоздания объекта `styles` при каждом рендере. Определяйте его вне компонента или оборачивайте в `useMemo`.
- Используйте функциональное обновление `setState`, чтобы избежать проблем с устаревшим замыканием в колбэках событий.
