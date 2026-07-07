---
sidebar_label: Работа с листами
title: Работа с листами
description: В документации вы можете узнать о работе с листами в библиотеке DHTMLX JavaScript Spreadsheet. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# Работа с листами {#work-with-sheets}

Начиная с версии v4.1, вы можете работать с [несколькими листами](api/spreadsheet_multisheets_config.md) в таблице.

В этой статье описано, как добавить новый лист, удалить ненужный лист, получить все листы и получить текущий активный лист с помощью методов API. Также объясняется, как загрузить несколько листов в таблицу одновременно.

{{note Чтобы узнать, как взаимодействовать с несколькими листами через пользовательский интерфейс, ознакомьтесь с нашим [Руководством пользователя](work_with_sheets.md). }}

Начиная с версии v6.0, управление листами осуществляется через модуль **Sheet Manager** посредством свойства `spreadsheet.sheets`. Выделенный [API Sheet Manager](api/overview/sheetmanager_overview.md) заменяет методы работы с листами, которые ранее были доступны непосредственно на экземпляре Spreadsheet.

## Загрузка нескольких листов {#loading-multiple-sheets}

Чтобы загрузить несколько листов в таблицу, подготовьте данные с нужным количеством листов и их конфигурацией и передайте их в метод [`parse()`](api/spreadsheet_parse_method.md) в качестве параметра. Данные должны быть объектом `object`. [Ознакомьтесь со списком атрибутов, которые может содержать объект](api/spreadsheet_parse_method.md).

<iframe src="https://snippet.dhtmlx.com/6s3ng2hi?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

{{note Если параметр конфигурации [`multiSheets`](api/spreadsheet_multisheets_config.md) установлен в `false`, создаётся только один лист.}}

## Добавление нового листа {#adding-a-new-sheet}

Чтобы добавить новый лист в таблицу, используйте метод [`sheets.add()`](api/sheetmanager_add_method.md) и передайте имя нового листа в качестве параметра:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Добавление листа с пользовательским именем
const newSheetId = spreadsheet.sheets.add("Q4 Report");
console.log(newSheetId); // например, "sheet_2"

// Добавление листа с автоматически сгенерированным именем
const anotherId = spreadsheet.sheets.add();
~~~

Метод возвращает идентификатор созданного листа.

## Удаление листа {#removing-a-sheet}

Вы можете удалить лист из таблицы по его идентификатору с помощью метода [`sheets.remove()`](api/sheetmanager_remove_method.md):

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Удаление листа по его идентификатору
spreadsheet.sheets.remove("sheet_2");
~~~

Обратите внимание, что лист не удаляется, если в таблице менее 2 листов.

## Установка активного листа {#setting-active-sheet}

Чтобы динамически изменить активный лист после инициализации таблицы, используйте метод [`sheets.setActive()`](api/sheetmanager_setactive_method.md). Он принимает идентификатор листа в качестве параметра:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Переключение на второй лист
spreadsheet.sheets.setActive("sheet_2");

// Проверка переключения
const active = spreadsheet.sheets.getActive();
console.log(active.name); // "Sheet 2"
~~~

**Связанный пример:** [Spreadsheet. Установка активного листа](https://snippet.dhtmlx.com/iowl449t)

## Получение активного листа {#getting-active-sheet}

Вы можете получить текущий активный лист с помощью метода [`sheets.getActive()`](api/sheetmanager_getactive_method.md):

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const active = spreadsheet.sheets.getActive();
console.log(active.name); // "Sheet 1"
console.log(active.id);   // "sheet_1"
~~~

Метод возвращает объект с атрибутами name и id текущего активного листа.

## Получение всех листов {#getting-all-sheets}

Метод [`sheets.getAll()`](api/sheetmanager_getall_method.md) возвращает все листы таблицы в виде массива объектов листов:

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const allSheets = spreadsheet.sheets.getAll();
console.log(allSheets);
// [
//   { id: "sheet_1", name: "Sheet 1" },
//   { id: "sheet_2", name: "Sheet 2" }
// ]
~~~

## Получение листа по идентификатору {#getting-a-sheet-by-id}

Чтобы получить объект одного листа по его идентификатору, используйте метод [`sheets.get()`](api/sheetmanager_get_method.md):

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

const sheet = spreadsheet.sheets.get("sheet_1");
console.log(sheet.name); // "Sheet 1"
~~~

## Очистка листов {#clearing-sheets}

Вы можете очистить данные указанного листа по его идентификатору с помощью метода [`sheets.clear()`](api/sheetmanager_clear_method.md):

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Очистка конкретного листа по идентификатору
spreadsheet.sheets.clear("sheet_1");

// Очистка текущего активного листа
spreadsheet.sheets.clear();
~~~

**Связанный пример:** [Spreadsheet. Очистка](https://snippet.dhtmlx.com/szmtjn72)

Если нужно очистить всю таблицу сразу, используйте метод [`clear()`](api/spreadsheet_clear_method.md).
