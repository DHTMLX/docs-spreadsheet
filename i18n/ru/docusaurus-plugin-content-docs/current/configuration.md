---
sidebar_label: Конфигурация
title: Конфигурация
description: Вы можете узнать о конфигурации библиотеки DHTMLX JavaScript Spreadsheet в документации. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# Конфигурация {#configuration}

Вы можете настроить DHTMLX Spreadsheet под свои нужды. Доступные параметры конфигурации позволяют ограничить количество строк и столбцов, изменить внешний вид панели инструментов, а также управлять видимостью меню и строки редактирования. При необходимости Spreadsheet можно инициализировать в режиме только для чтения.

## Панель инструментов {#toolbar}

Панель инструментов Spreadsheet состоит из нескольких блоков элементов управления, которые можно изменять по своему усмотрению. По умолчанию панель инструментов содержит следующие блоки: `"undo"`, `"colors"`, `"font"`, `"decoration"`, `"align"`, `"cell"`, `"format"`, `"actions"`. Из списка можно добавить дополнительные блоки: `"lock"`, `"clear"`, `"rows"`, `"columns"`, `"file"`, `"help"`.

<iframe src="https://snippet.dhtmlx.com/kpm017nx?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>

Структура панели инструментов настраивается через параметр конфигурации компонента [`toolbarBlocks`](api/spreadsheet_toolbarblocks_config.md) — массив строк с названиями элементов управления.

Вы также можете задать собственную структуру панели инструментов, перечислив необходимые элементы в массиве `toolbarBlocks` в нужном порядке, например: `"colors"`, `"align"`, `"cell"`, `"decoration"`, `"lock"`, `"clear"`.

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    toolbarBlocks: ["colors", "align", "cell", "decoration", "lock", "clear"]
});
~~~

Панель инструментов [легко настраивается](customization.md). Вы можете добавлять новые элементы управления, менять их иконки и применять нужный набор иконок.

## Строка редактирования {#editing-bar}

Так как структура Spreadsheet гибкая, вы можете включать и отключать строку редактирования для получения нужного внешнего вида компонента. Используйте параметр конфигурации [`editLine`](api/spreadsheet_editline_config.md) для скрытия/отображения строки редактирования.

<iframe src="https://snippet.dhtmlx.com/unem2jkh?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Количество строк и столбцов {#number-of-rows-and-columns}

При инициализации Spreadsheet создаётся сетка из 26 столбцов и 1000 строк. Когда этот лимит исчерпывается, дополнительные строки и столбцы добавляются автоматически, поэтому добавлять их вручную не нужно. Тем не менее вы можете задать точное количество строк и столбцов в сетке, если хотите их ограничить. Для этого используйте параметры [`colsCount`](api/spreadsheet_colscount_config.md) и [`rowsCount`](api/spreadsheet_rowscount_config.md).

<iframe src="https://snippet.dhtmlx.com/vc3mstsw?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Меню {#menu}

По умолчанию меню Spreadsheet скрыто. Его можно включить или отключить с помощью соответствующего параметра конфигурации [`menu`](api/spreadsheet_menu_config.md):

<iframe src="https://snippet.dhtmlx.com/uulux27v?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Режим только для чтения {#read-only-mode}

Вы также можете включить режим только для чтения, чтобы запретить редактирование ячеек Spreadsheet, с помощью параметра конфигурации [`readonly`](api/spreadsheet_readonly_config.md).

Вы также можете [настроить поведение Spreadsheet в режиме только для чтения](customization.md#custom-read-only-mode).

<iframe src="https://snippet.dhtmlx.com/2w959gx2?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Пользовательские числовые форматы ячеек {#custom-number-formats-for-cells}

Вы можете применять 7 форматов по умолчанию к значениям ячеек: "Common", "Number", "Percent", "Currency", "Date", "Time", "Text".

Вы можете переопределить конфигурацию форматов по умолчанию или задать собственный числовой формат с помощью параметра конфигурации [`formats`](api/spreadsheet_formats_config.md). Подробности смотрите в статье [Форматирование чисел](number_formatting.md).

<iframe src="https://snippet.dhtmlx.com/4c0c0zm7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>

## Путь к модулям экспорта/импорта {#path-to-exportimport-modules}

DHTMLX Spreadsheet поддерживает импорт и экспорт данных в формате Excel. Компонент использует библиотеки на основе WebAssembly: [Excel2Json](https://github.com/dhtmlx/excel2json) и [JSON2Excel](https://github.com/dhtmlx/json2excel) для импорта/экспорта данных.

После установки необходимой библиотеки нужно задать путь к файлу *worker.js* (локальному или на CDN) через соответствующий параметр конфигурации: [`importModulePath`](api/spreadsheet_importmodulepath_config.md) или [`exportModulePath`](api/spreadsheet_exportmodulepath_config.md).

Все подробности приведены в статье [Загрузка и экспорт данных](loading_data.md).

<iframe src="https://snippet.dhtmlx.com/wykwzfhm?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>
