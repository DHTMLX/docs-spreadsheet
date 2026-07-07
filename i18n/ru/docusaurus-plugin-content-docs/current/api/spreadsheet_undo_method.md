---
sidebar_label: undo()
title: метод undo
description: Вы можете узнать о методе undo в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, пробуйте примеры кода и живые демо, загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// выполняет один шаг назад
spreadsheet.undo();
~~~
