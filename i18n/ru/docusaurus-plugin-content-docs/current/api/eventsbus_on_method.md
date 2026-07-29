---
sidebar_label: on()
title: Метод on
description: Вы можете узнать о Event Bus методе on в документации библиотеки DHTMLX JavaScript Spreadsheet. Изучайте руководства разработчика и справочник API, пробуйте примеры кода и живые демо, а также загружайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# on()

### Описание {#description}

@short: Привязывает обработчик к внутреннему событию Spreadsheet

### Использование {#usage}

~~~jsx
on(name: string, callback: function): void;
~~~

### Параметры {#parameters}

- `name` - (обязательный) имя события, без учёта регистра
- `callback` - (обязательный) функция-обработчик

### Пример {#example}

~~~jsx {6-8}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
    // config parameters
});
spreadsheet.parse(data);

spreadsheet.events.on("StyleChange", function(id){
  console.log("The style of cell "+spreadsheet.selection.get()+" is changed");
});
~~~

:::info
Полный список событий Spreadsheet приведён [здесь](api/api_overview.md#spreadsheet-events).

К одному событию можно привязать несколько обработчиков, и все они будут выполнены. Если некоторые обработчики возвращают `false`, соответствующие операции блокируются. Обработчики событий выполняются в том порядке, в котором они были привязаны.
:::

**Полезная статья:** [Обработка событий](handling_events.md)

**Связанный пример:** [Spreadsheet. События](https://snippet.dhtmlx.com/2vkjyvsi)
