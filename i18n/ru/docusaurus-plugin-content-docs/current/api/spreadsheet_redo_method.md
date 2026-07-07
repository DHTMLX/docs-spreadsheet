---
sidebar_label: redo()
title: метод redo
description: Вы можете узнать о методе redo в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# redo()

### Описание {#description}

@short: Повторно применяет отменённое действие

### Использование {#usage}

~~~jsx
redo(): void;
~~~

### Пример {#example}

~~~jsx {5}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

// повторно применяет отменённое действие
spreadsheet.redo();
~~~
