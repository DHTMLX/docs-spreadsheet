---
sidebar_label: add()
title: Метод add
description: Добавьте новый пустой лист в DHTMLX Spreadsheet с помощью метода sheets.add(), который возвращает идентификатор нового листа (требуется опция multiSheets).
---

# add()

### Описание {#description}

@short: Добавляет новый пустой лист в таблицу и возвращает уникальный идентификатор созданного листа

Если имя не указано, оно генерируется автоматически (например, "Sheet 2" или "Sheet 3").

:::info
Для использования этого метода необходимо включить параметр конфигурации [`multiSheets`](api/spreadsheet_multisheets_config.md).
:::

### Использование {#usage}

~~~ts
add: (name?: string) => Id;
~~~

### Параметры {#parameters}

- `name` - (*string*) необязательный, отображаемое имя для вкладки нового листа. Если не указано, присваивается имя по умолчанию.

### Возвращаемое значение {#returns}

- `Id` - (*string | number*) уникальный идентификатор созданного листа.

### Пример {#example}

~~~jsx 
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// Добавление листа с пользовательским именем
const newSheetId = spreadsheet.sheets.add("Q4 Report");
console.log(newSheetId); // например, "sheet_2"

// Добавление листа с автоматически сгенерированным именем
const anotherSheetId = spreadsheet.sheets.add();
~~~

**Журнал изменений:** Добавлено в v6.0

**Полезная статья:** [Работа с листами](working_with_sheets.md)
