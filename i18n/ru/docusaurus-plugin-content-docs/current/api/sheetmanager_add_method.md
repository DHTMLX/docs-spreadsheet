---
sidebar_label: add()
title: Метод add
description: Вы можете узнать о методе add объекта Sheet Manager в документации библиотеки DHTMLX JavaScript Spreadsheet. Изучите руководства разработчика и справочник по АПИ, ознакомьтесь с примерами кода и живыми демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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
