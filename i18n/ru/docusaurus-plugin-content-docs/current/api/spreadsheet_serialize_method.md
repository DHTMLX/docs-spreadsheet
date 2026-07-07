---
sidebar_label: serialize()
title: метод serialize
description: Вы можете узнать о методе serialize в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# serialize()

### Описание {#description}

@short: Сериализует данные таблицы в JSON-объект

### Использование {#usage}

~~~jsx
serialize(): object;
~~~

### Возвращает {#returns}

Метод возвращает сериализованный JSON-объект

Сериализованные данные представляют собой объект со следующими атрибутами:

- `formats` - массив объектов с числовыми форматами
- `styles` - объект с применёнными CSS-классами
- `sheets` - массив объектов листов. Каждый объект содержит следующие атрибуты:
  - `name` - имя листа
  - `data` - массив объектов данных
  - `rows` - массив объектов высоты строк
  - `cols` - массив объектов ширины столбцов

### Пример {#example}

~~~jsx {4}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

const data = spreadsheet.serialize();
~~~

**Связанные статьи:** [Загрузка и экспорт данных](loading_data.md#saving-and-restoring-state)
