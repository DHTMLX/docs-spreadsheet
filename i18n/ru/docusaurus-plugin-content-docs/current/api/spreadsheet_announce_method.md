---
sidebar_label: announce()
title: Метод announce
description: Отправьте статусное сообщение пользователям программ чтения с экрана в DHTMLX Spreadsheet с помощью метода announce(), например, чтобы сообщить результат пользовательской команды панели инструментов или меню.
---

# announce()

### Описание {#description}

@short: Озвучивает сообщение для пользователей программ чтения с экрана

### Использование {#usage}

~~~jsx
announce(message: string): void;
~~~

### Параметры {#parameters}

- `message` - (обязательный) текст для озвучивания. Пустая строка очищает сообщение

### Пример {#example}

В примере ниже пользовательская команда меню подсчитывает пустые ячейки в выделенном диапазоне и озвучивает результат:

~~~jsx {18}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    menu: true,
    // other config parameters
});
spreadsheet.parse(data);

spreadsheet.menu.data.add({
    id: "count-empty",
    value: "Count empty cells"
});

spreadsheet.menu.events.on("click", function (id) {
    if (id === "count-empty") {
        let count = 0;
        spreadsheet.eachCell(function (cell, value) {
            if (value === "" || value === undefined || value === null) count++;
        }, spreadsheet.selection.getSelectedCell());
        spreadsheet.announce(count + " empty cells in the selection");
    }
});
~~~

### Подробности {#details}

Используйте метод, чтобы сообщить пользователям программ чтения с экрана о результате действия, у которого нет собственного видимого элемента, например, пользовательской команды панели инструментов или меню.

Сообщение попадает в визуально скрытую live-область, расположенную сразу после элемента сетки (`role="status"`, `aria-live="polite"`, `aria-atomic="true"`). Программа чтения с экрана зачитывает его после завершения текущей речи, при этом фокус клавиатуры не перемещается.

Spreadsheet озвучивает собственные сообщения через ту же область: выделенный диапазон, новые ошибки формул и недопустимые значения, отклонённые правки, результаты поиска, начало и конец импорта и экспорта, а также новую ширину столбцов и высоту строк (см. [список статусных оповещений](accessibility.md#status-announcements)). Область хранит одно сообщение за раз, поэтому следующее сообщение, ваше или встроенное, заменяет предыдущее.

Если передать текст, который в данный момент находится в области, программа чтения с экрана зачитает его повторно.

Метод также работает в [режиме только для чтения](api/spreadsheet_readonly_config.md) и при отключённом [выделении](api/spreadsheet_selection_config.md). Он ничего не делает, пока Spreadsheet не добавлен на страницу, и после вызова метода `destructor()`.

**Журнал изменений:** Добавлено в v6.0.4

**Связанные статьи:**
- [Статусные оповещения](accessibility.md#status-announcements)
- [Озвучивание пользовательской команды](accessibility.md#announcing-a-custom-command)
- [Настройка меню](customization.md#menu)
