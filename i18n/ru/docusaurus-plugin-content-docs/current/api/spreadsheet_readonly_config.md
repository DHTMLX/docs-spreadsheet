---
sidebar_label: readonly
title: конфигурация readonly
description: Вы можете узнать о конфигурации readonly в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# readonly

### Описание {#description}

@short: Необязательный. Включает/отключает режим только для чтения

### Использование {#usage}

~~~jsx
readonly?: boolean;
~~~

### Конфигурация по умолчанию {#default-config}

~~~jsx
readonly: false
~~~

### Пример {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
  readonly: true,
  // other config parameters
});
~~~

**Полезные статьи:**
- [Конфигурация](configuration.md#read-only-mode)
- [Кастомизация](customization.md#custom-read-only-mode)

**Связанный пример:** [Spreadsheet. Readonly](https://snippet.dhtmlx.com/2w959gx2)


