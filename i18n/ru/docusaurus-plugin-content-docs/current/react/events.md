---
sidebar_label: События
title: Справочник событий
description: "Пропсы-колбэки событий для ReactSpreadsheet: действия, выделение, редактирование, листы и производные состояния."
---

# Справочник событий {#events-reference}

Все колбэки событий являются необязательными пропсами. Колбэки «Before» могут вернуть `false` для отмены операции.

:::note
React-обёртка использует имена пропсов в формате `onCamelCase` (например, `onAfterAction`), тогда как JS API Spreadsheet использует имена событий в формате `camelCase` на шине событий (например, `afterAction`). Смотрите [Справочник событий JS API](api/overview/events_overview.md) для императивного АПИ.
:::

## События действий {#action-events}

Срабатывают при любом действии пользователя, например при редактировании ячеек, форматировании или структурных изменениях.

| Пропс | Отменяемое | Описание |
|------|:-----------:|-------------|
| `onBeforeAction` | Да | Срабатывает перед выполнением любого действия пользователя. Вернуть `false` для отмены. Обработчик: [`BeforeActionHandler`](react/types.md#handler-type-aliases). JS API: [`beforeAction`](api/spreadsheet_beforeaction_event.md). |
| `onAfterAction` | Нет | Срабатывает после завершения любого действия пользователя. Обработчик: [`AfterActionHandler`](react/types.md#handler-type-aliases). JS API: [`afterAction`](api/spreadsheet_afteraction_event.md). |

**Пример: Блокировка удаления строк**

~~~tsx
import { Actions } from "@dhtmlx/trial-react-spreadsheet";

<ReactSpreadsheet
    sheets={sheets}
    onBeforeAction={(action, config) => {
        if (action === Actions.deleteRow) return false;
    }}
/>
~~~

**Пример: Запись всех действий пользователя**

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    onAfterAction={(action, config) => {
        console.log("Action:", action, "Cell:", config.cell);
    }}
/>
~~~

## События выделения {#selection-events}

Срабатывают при изменении выделения или фокуса ячейки.

| Пропс | Отменяемое | Описание |
|------|:-----------:|-------------|
| `onBeforeSelectionSet` | Да | Срабатывает перед добавлением ячейки в выделение. Обработчик: [`BeforeCellHandler`](react/types.md#handler-type-aliases). JS API: [`beforeSelectionSet`](api/spreadsheet_beforeselectionset_event.md). |
| `onAfterSelectionSet` | Нет | Срабатывает после добавления ячейки в выделение. Обработчик: [`AfterCellHandler`](react/types.md#handler-type-aliases). JS API: [`afterSelectionSet`](api/spreadsheet_afterselectionset_event.md). |
| `onBeforeSelectionRemove` | Да | Срабатывает перед удалением ячейки из выделения. Обработчик: [`BeforeCellHandler`](react/types.md#handler-type-aliases). |
| `onAfterSelectionRemove` | Нет | Срабатывает после удаления ячейки из выделения. Обработчик: [`AfterCellHandler`](react/types.md#handler-type-aliases). |
| `onBeforeFocusSet` | Да | Срабатывает перед изменением активной ячейки. Обработчик: [`BeforeCellHandler`](react/types.md#handler-type-aliases). JS API: [`beforeFocusSet`](api/spreadsheet_beforefocusset_event.md). |
| `onAfterFocusSet` | Нет | Срабатывает после изменения активной ячейки. Обработчик: [`AfterCellHandler`](react/types.md#handler-type-aliases). JS API: [`afterFocusSet`](api/spreadsheet_afterfocusset_event.md). |

**Пример: Отслеживание выбранной ячейки**

~~~tsx
const [selectedCell, setSelectedCell] = useState<string>("");

<ReactSpreadsheet
    sheets={sheets}
    onAfterFocusSet={(cell) => setSelectedCell(cell)}
/>

<p>Current cell: {selectedCell}</p>
~~~

## События редактирования {#edit-events}

Срабатывают при начале или завершении редактирования ячейки.

| Пропс | Отменяемое | Описание |
|------|:-----------:|-------------|
| `onBeforeEditStart` | Да | Срабатывает перед началом редактирования ячейки. Обработчик: [`BeforeEditHandler`](react/types.md#handler-type-aliases). JS API: [`beforeEditStart`](api/spreadsheet_beforeeditstart_event.md). |
| `onAfterEditStart` | Нет | Срабатывает после начала редактирования ячейки. Обработчик: [`AfterEditHandler`](react/types.md#handler-type-aliases). JS API: [`afterEditStart`](api/spreadsheet_aftereditstart_event.md). |
| `onBeforeEditEnd` | Да | Срабатывает перед завершением редактирования ячейки. Вернуть `false` для отмены и продолжения редактирования. Обработчик: [`BeforeEditHandler`](react/types.md#handler-type-aliases). JS API: [`beforeEditEnd`](api/spreadsheet_beforeeditend_event.md). |
| `onAfterEditEnd` | Нет | Срабатывает после завершения редактирования ячейки и сохранения значения. Обработчик: [`AfterEditHandler`](react/types.md#handler-type-aliases). JS API: [`afterEditEnd`](api/spreadsheet_aftereditend_event.md). |

**Пример: Валидация перед сохранением**

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    onBeforeEditEnd={(cell, value) => {
        if (cell.startsWith("B") && isNaN(Number(value))) {
            return false; // Отмена: столбец B должен содержать числа
        }
    }}
/>
~~~

## События листов {#sheet-events}

Срабатывают при смене активной вкладки листа.

| Пропс | Отменяемое | Описание |
|------|:-----------:|-------------|
| `onBeforeSheetChange` | Да | Срабатывает перед сменой активного листа. Обработчик: [`BeforeSheetHandler`](react/types.md#handler-type-aliases). JS API: [`beforeSheetChange`](api/spreadsheet_beforesheetchange_event.md). |
| `onAfterSheetChange` | Нет | Срабатывает после смены активного листа. Обработчик: [`AfterSheetHandler`](react/types.md#handler-type-aliases). JS API: [`afterSheetChange`](api/spreadsheet_aftersheetchange_event.md). |

**Пример: Отслеживание активного листа**

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    onAfterSheetChange={(sheet) => {
        console.log("Switched to sheet:", sheet.name);
    }}
/>
~~~

## События данных {#data-events}

Срабатывают при загрузке данных таблицы.

| Пропс | Описание |
|------|-------------|
| `onAfterDataLoaded` | Срабатывает после завершения загрузки данных (через `sheets` или `loadUrl`). JS API: [`afterDataLoaded`](api/spreadsheet_afterdataloaded_event.md). |

**Пример: Отображение состояния загрузки**

~~~tsx
const [loading, setLoading] = useState(true);

<ReactSpreadsheet
    loadUrl="/api/data"
    onAfterDataLoaded={() => setLoading(false)}
/>
~~~

## События ввода {#input-events}

Срабатывают при вводе пользователя в ячейках или строке формул.

| Пропс | Описание |
|------|-------------|
| `onGroupFill` | Срабатывает при операциях автозаполнения (перетаскивание). Обработчик: `(focusedCell: string, selectedCell: string) => void`. JS API: [`groupFill`](api/spreadsheet_groupfill_event.md). |
| `onEditLineInput` | Срабатывает при вводе в строку формул/редактирования. Обработчик: `(value: string) => void`. |
| `onCellInput` | Срабатывает при вводе в ячейку во время редактирования. Обработчик: `(cell: string, value: string) => void`. |

## Колбэки производных состояний {#derived-state-callbacks}

Эти колбэки уведомляют об изменениях вычисленных состояний, а не о прямых действиях пользователя.

| Пропс | Описание |
|------|-------------|
| `onStateChange` | Уведомляет об изменении доступности отмены/повтора. Обработчик: `(state: { canUndo: boolean; canRedo: boolean }) => void`. |
| `onSearchResults` | Уведомляет со ссылками на совпадающие ячейки, когда активен пропс `search`. Обработчик: `(cells: string[]) => void`. |
| `onFilterChange` | Уведомляет при изменении пользователем фильтров через интерфейс. Обработчик: `(filter: SheetFilter) => void`. |

**Пример: Кнопки отмены/повтора**

~~~tsx
import { useRef, useState } from "react";
import { ReactSpreadsheet, type SpreadsheetRef } from "@dhtmlx/trial-react-spreadsheet";

function App() {
    const ref = useRef<SpreadsheetRef>(null);
    const [history, setHistory] = useState({ canUndo: false, canRedo: false });

    return (
        <>
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
        </>
    );
}
~~~

**Пример: Управляемый поиск с результатами**

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

**Пример: Синхронизация состояния фильтра**

~~~tsx
const [activeFilter, setActiveFilter] = useState<SheetFilter | null>(null);

<ReactSpreadsheet
    sheets={sheets}
    onFilterChange={(filter) => setActiveFilter(filter)}
/>
~~~
