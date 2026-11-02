---
sidebar_label: undo()
title: метод undo
description: Отмените последнее действие в DHTMLX Spreadsheet с помощью метода undo() и верните его методом redo().
---

# undo()

### Описание {#description}

@short: Отменяет последнее действие

### Использование {#usage}

~~~jsx
undo(): void;
~~~

### Пример {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// выполняет один шаг назад
spreadsheet.undo();
~~~
