---
sidebar_label: Типы
title: Справочник типов
description: "Интерфейсы TypeScript, перечисления и псевдонимы типов, экспортируемые из @dhx/react-spreadsheet."
---

# Справочник типов {#types-reference}

Все типы экспортируются из `@dhx/react-spreadsheet` или `@dhtmlx/trial-react-spreadsheet`.

~~~tsx
import type { SheetData, CellData, SpreadsheetRef /* ... */ } from "@dhtmlx/trial-react-spreadsheet";
~~~

## CellData {#celldata}

Декларативное состояние одной ячейки. Все свойства необязательны; пропущенные свойства сохраняют своё текущее значение при обновлениях.

| Свойство | Тип | Описание |
|----------|-----|----------|
| `value` | `string \| number` | Значение ячейки: текст, число или строка формулы (с префиксом `=`). |
| `css` | `string` | Имя (имена) CSS-класса, ссылающееся на ключи в карте `styles` верхнего уровня. |
| `format` | `string` | Маска формата числа или псевдоним (например, `"currency"` или `"#,##0.00"`). |
| `locked` | `boolean` | Заблокирована ли ячейка (защищена от редактирования). |
| `validation` | `string \| string[]` | Варианты выпадающего списка для валидации данных. |

## RowConfig {#rowconfig}

Метаданные строки. Записи нужны только для строк с нестандартной конфигурацией.

| Свойство | Тип | Описание |
|----------|-----|----------|
| `height` | `number` | Высота строки в пикселях. |
| `hidden` | `boolean` | Скрыта ли строка. |

## ColConfig {#colconfig}

Метаданные столбца. Записи нужны только для столбцов с нестандартной конфигурацией.

| Свойство | Тип | Описание |
|----------|-----|----------|
| `width` | `number` | Ширина столбца в пикселях. |
| `hidden` | `boolean` | Скрыт ли столбец. |

## MergedRange {#mergedrange}

Определяет диапазон объединённых ячеек с использованием координат строк/столбцов, начиная с 0.

| Свойство | Тип | Описание |
|----------|-----|----------|
| `from` | `{ row: number; column: number }` | Верхний левый угол объединения (индекс с 0). |
| `to` | `{ row: number; column: number }` | Нижний правый угол объединения (индекс с 0). |

**Пример:**

~~~ts
// Объединение A1:B2
const merge: MergedRange = {
    from: { row: 0, column: 0 },
    to: { row: 1, column: 1 },
};
~~~

## FreezeConfig {#freezeconfig}

Конфигурация закреплённой панели для листа.

| Свойство | Тип | Описание |
|----------|-----|----------|
| `col` | `number` | Закрепить столбцы до этого номера столбца (индекс с 0). `undefined` = без закрепления столбцов. |
| `row` | `number` | Закрепить строки до этого номера строки (индекс с 0). `undefined` = без закрепления строк. |

## SheetFilter {#sheetfilter}

Конфигурация фильтра для столбца внутри листа.

| Свойство | Тип | Описание |
|----------|-----|----------|
| `cell` | `string` | Ссылка на ячейку, идентифицирующую отфильтрованный столбец (например, `"A1"`). |
| `rules` | `IFilterRules[]` | Применяемые правила фильтрации. Пустой массив сбрасывает фильтр. |

## SheetSort {#sheetsort}

Конфигурация сортировки для столбца внутри листа.

| Свойство | Тип | Описание |
|----------|-----|----------|
| `cell` | `string` | Ссылка на ячейку или диапазон для операции сортировки (например, `"B1"` или `"A1:E8"`). Используйте диапазон для сортировки нескольких столбцов с сохранением целостности строк. |
| `dir` | `1 \| -1` | Направление сортировки: `1` = по возрастанию, `-1` = по убыванию. |

## SheetData {#sheetdata}

Полное декларативное состояние одного листа таблицы.

| Свойство | Тип | Обязательно | Описание |
|----------|-----|:-----------:|----------|
| `id` | `Id` | Да | Уникальный идентификатор листа. Должен быть стабильным между рендерами. |
| `name` | `string` | Да | Отображаемое имя на вкладке листа. |
| `cells` | `Record<string, CellData>` | Да | Данные ячеек, с ключом по ссылке на ячейку (например, `"A1"` или `"B2"`). Записи нужны только для ячеек с нестандартными данными. |
| `rows` | `Record<number, RowConfig>` | Нет | Конфигурация строк с ключом по номеру строки (индекс с 0). |
| `cols` | `Record<number, ColConfig>` | Нет | Конфигурация столбцов с ключом по номеру столбца (индекс с 0). |
| `merged` | `MergedRange[]` | Нет | Диапазоны объединённых ячеек. |
| `freeze` | `FreezeConfig` | Нет | Конфигурация закреплённых панелей. |
| `filter` | `SheetFilter` | Нет | Конфигурация фильтра столбца. Установите `undefined`, чтобы сбросить. |
| `sort` | `SheetSort` | Нет | Конфигурация сортировки. |

**Пример:**

~~~ts
const sheet: SheetData = {
    id: "sheet1",
    name: "Inventory",
    cells: {
        A1: { value: "Product", css: "bold" },
        B1: { value: "Quantity", css: "bold" },
        A2: { value: "Laptop" },
        B2: { value: 42 },
    },
    cols: { 0: { width: 200 } },
    freeze: { row: 1 },
};
~~~

## SearchConfig {#searchconfig}

Управляемое состояние поиска. Передайте объект для запуска/обновления поиска, передайте `undefined`, чтобы закрыть его.

| Свойство | Тип | Обязательно | Описание |
|----------|-----|:-----------:|----------|
| `query` | `string` | Да | Текст для поиска. |
| `open` | `boolean` | Нет | Открыть ли встроенный интерфейс поиска. По умолчанию: `false`. |
| `sheetId` | `Id` | Нет | Ограничить поиск конкретным листом по id. |

## SpreadsheetLocale {#spreadsheetlocale}

Конфигурация локализации для меток интерфейса и названий формул.

| Свойство | Тип | Описание |
|----------|-----|----------|
| `locale` | `Record<string, string>` | Переопределения строк интерфейса. Ключи соответствуют словарю локализации библиотеки. |
| `formulas` | `Record<string, [string, string?][]>` | Локализованные имена формул, сгруппированные по категориям. Каждый элемент — кортеж: `[localizedName, optionalDescription?]`. |

## SpreadsheetTheme {#spreadsheettheme}

~~~ts
type SpreadsheetTheme = "light" | "dark" | "contrast-light" | "contrast-dark" | string;
~~~

Встроенные цветовые темы. Также принимает строки с именами пользовательских тем.

## IExecuteConfig {#iexecuteconfig}

Конфигурация выполнения действия, передаваемая в [`onBeforeAction`](react/events.md#action-events) / [`onAfterAction`](react/events.md#action-events). Форма зависит от типа действия.

| Свойство | Тип | Описание |
|----------|-----|----------|
| `row` | `number` | Индекс целевой строки. |
| `col` | `number` | Индекс целевого столбца. |
| `target` | `unknown` | Цель, специфичная для действия. |
| `val` | `unknown` | Новое значение. |
| `prev` | `unknown` | Предыдущее значение. |
| `action` | `Actions \| string` | Идентификатор действия. |
| `groupAction` | `Actions \| string` | Идентификатор родительского группового действия. |
| `cell` | `string` | Ссылка на ячейку (например, `"A1"`). |
| `pageId` | `Id` | Id целевого листа. |
| `pageName` | `string` | Имя целевого листа. |
| `[key: string]` | `unknown` | Дополнительные свойства, специфичные для действия. |

## SpreadsheetRef {#spreadsheetref}

Императивный дескриптор, доступный через `React.forwardRef`. Предоставляет прямой доступ к базовому экземпляру DHTMLX Spreadsheet для операций, которые не отображаются на декларативные пропсы.

| Свойство | Тип | Описание |
|----------|-----|----------|
| `instance` | `ISpreadsheet \| null` | Базовый экземпляр виджета. `null` до инициализации и после размонтирования. |

**Пример:**

~~~tsx
const ref = useRef<SpreadsheetRef>(null);

// Сериализация данных
const data = ref.current?.instance?.serialize();

// Программный выбор
ref.current?.instance?.selection.setSelectedCell("A1:C5");

// Отмена/возврат
ref.current?.instance?.undo();
ref.current?.instance?.redo();
~~~

## Перечисление Actions {#actions-enum}

Известные идентификаторы действий таблицы. Используются в [`onBeforeAction`](react/events.md#action-events) / [`onAfterAction`](react/events.md#action-events) для типобезопасного сопоставления действий. Объединение `| string` в параметрах обработчиков обеспечивает прямую совместимость с будущими действиями.

| Значение | Описание |
|----------|----------|
| `setCellStyle` | Применить CSS-стиль к ячейке(ям). |
| `setCellValue` | Установить значение ячейки. |
| `setCellFormat` | Установить числовой формат для ячейки(ек). |
| `removeCellStyles` | Удалить CSS-стили из ячейки(ек). |
| `lockCell` | Заблокировать или разблокировать ячейку(и). |
| `deleteRow` | Удалить строку(и). |
| `addRow` | Вставить строку(и). |
| `deleteColumn` | Удалить столбец(цы). |
| `addColumn` | Вставить столбец(цы). |
| `groupAction` | Групповое действие (несколько подзадач). |
| `groupRowAction` | Групповое действие со строками. |
| `groupColAction` | Групповое действие со столбцами. |
| `addSheet` | Добавить новый лист. |
| `deleteSheet` | Удалить лист. |
| `renameSheet` | Переименовать лист. |
| `clearSheet` | Очистить все данные на листе. |
| `clear` | Очистить выделенные ячейки. |
| `resizeCol` | Изменить ширину столбца. |
| `resizeRow` | Изменить высоту строки. |
| `setValidation` | Установить валидацию данных для ячейки(ек). |
| `sortCells` | Сортировать ячейки. |
| `insertLink` | Вставить гиперссылку. |
| `fitColumn` | Автоматически подогнать ширину столбца под содержимое. |
| `filter` | Применить или изменить фильтр столбца. |
| `merge` | Объединить ячейки. |
| `unmerge` | Разъединить ячейки. |
| `toggleFreeze` | Переключить закрепление панелей. |
| `toggleVisibility` | Переключить видимость строки/столбца. |

## Псевдонимы типов обработчиков {#handler-type-aliases}

Удобные псевдонимы для сигнатур функций, используемых пропсами-колбэками событий. Импортируйте их для явного аннотирования функций-обработчиков.

<div className="overflow-table">

| Тип | Сигнатура | Используется в |
|-----|-----------|----------------|
| `BeforeActionHandler` | `(action: Actions \| string, config: IExecuteConfig) => boolean \| void` | `onBeforeAction` |
| `AfterActionHandler` | `(action: Actions \| string, config: IExecuteConfig) => void` | `onAfterAction` |
| `BeforeCellHandler` | `(cell: string) => boolean \| void` | `onBeforeSelectionSet`, `onBeforeSelectionRemove`, `onBeforeFocusSet` |
| `AfterCellHandler` | `(cell: string) => void` | `onAfterSelectionSet`, `onAfterSelectionRemove`, `onAfterFocusSet` |
| `BeforeEditHandler` | `(cell: string, value: string) => boolean \| void` | `onBeforeEditStart`, `onBeforeEditEnd` |
| `AfterEditHandler` | `(cell: string, value: string) => void` | `onAfterEditStart`, `onAfterEditEnd` |
| `BeforeSheetHandler` | `(sheet: ISheet) => boolean \| void` | `onBeforeSheetChange` |
| `AfterSheetHandler` | `(sheet: ISheet) => void` | `onAfterSheetChange` |

</div>

## SpreadsheetConfigProps {#spreadsheetconfigprops}

~~~ts
type SpreadsheetConfigProps = Omit<
    ISpreadsheetConfig,
    "leftSplit" | "topSplit" | "dateFormat" | "timeFormat"
>;
~~~

Базовый тип для пропсов компонента. Открывает все параметры конструктора `ISpreadsheetConfig` как плоские пропсы.

## Переэкспортируемые вышестоящие типы {#re-exported-upstream-types}

Эти типы переэкспортируются из `@dhx/ts-spreadsheet` для удобства:

| Тип | Описание |
|-----|----------|
| `ISpreadsheet` | Интерфейс основного экземпляра виджета таблицы. |
| `ISpreadsheetConfig` | Интерфейс конфигурации конструктора. |
| `ISheet` | Интерфейс экземпляра листа (используется в колбэках событий листа). |
| `IFormats` | Определение пользовательского числового формата. |
| `IFilterRules` | Конфигурация правила фильтрации. |
| `IFilter` | Интерфейс экземпляра фильтра. |
| `IStylesList` | Карта определений стилей. |
| `IDataWithStyles` | Структура данных со встроенными стилями (используется `serialize()`/`parse()`). |
| `ICellInfo` | Информация о ячейке, возвращаемая методами виджета. |
| `FileFormat` | Формат файла для загрузки данных (например, `"json"` или `"xlsx"`). |
| `ToolbarBlocks` | Идентификаторы блоков панели инструментов (например, `"default"`, `"undo"` или `"font"`). |
| `FilterConditions` | Перечисление доступных типов условий фильтрации. |
| `Id` | Универсальный тип идентификатора (`string \| number`). |
