---
sidebar_label: Кастомизация
title: Кастомизация
description: Вы можете узнать о кастомизации библиотеки DHTMLX JavaScript Spreadsheet в документации. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# Кастомизация {#customization}

Вы можете настраивать внешний вид, структуру и функциональность панели инструментов, меню и контекстного меню, а также задавать пользовательское поведение Spreadsheet в режиме только для чтения.

## Стандартные и пользовательские иконки {#default-and-custom-icons}

По умолчанию DHTMLX Spreadsheet использует иконки на основе [Material Design](https://pictogrammers.com/library/mdi/?welcome). Однако при необходимости вы можете использовать любой другой набор иконочных шрифтов. Для этого подключите нужный иконочный шрифт на странице и применяйте иконки в любой части spreadsheet: в элементах управления панели инструментов, в пунктах меню и контекстного меню.

Например, вы можете использовать набор иконок [Font Awesome](https://fontawesome.com/), подключив [ссылку на его CDN](https://docs.fontawesome.com/web/setup/get-started) после исходных файлов DHTMLX Spreadsheet следующим образом:

~~~html
<script type="text/javascript" src="../../codebase/spreadsheet.js"></script>
<link rel="stylesheet" href="../../codebase/spreadsheet.css">

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" 
  integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"  
  crossorigin="anonymous">
~~~

После этого вы можете использовать название иконки в качестве значения свойства `icon` в объекте с параметрами элемента управления панели инструментов, меню или контекстного меню. Подробнее смотрите ниже.

## Типы элементов управления и операции {#controls-types-and-operations}

### Типы {#types}

Вы можете добавлять следующие типы элементов управления: `button`, `menuItem`, `separator` и `spacer`.

Объект `button` имеет следующие свойства:

- `type` — тип кнопки, установите значение "button"
- `id` — идентификатор кнопки
- `icon` — название иконки из используемого иконочного шрифта
- `hotkey` — название горячей клавиши для кнопки
- `value` — значение кнопки
- `tooltip` — подсказка для кнопки
- `twoState` — флаг, определяющий, может ли кнопка использоваться в двух состояниях
- `active` — состояние кнопки: `true` — активна, `false` — неактивна

Объект `menuItem` имеет следующие свойства:

- `type` — тип пункта меню, установите значение "menuItem"
- `id` — идентификатор пункта меню
- `icon` — название иконки из используемого иконочного шрифта
- `hotkey` — название горячей клавиши для пункта меню
- `value` — значение пункта меню
- `childs` — массив дочерних элементов управления (все дочерние элементы должны иметь тип `menuItem`)

API коллекции данных **панели инструментов**, **меню** и **контекстного меню** позволяет управлять элементами управления: добавлять пользовательские, удалять ненужные или обновлять существующие — например, менять их иконки.

### Добавление элементов управления {#adding-controls}

Для добавления нового элемента управления используйте метод `spreadsheet.{name}.data.add()`. Он принимает следующие параметры:

- `config` — (*object*) объект с конфигурацией элемента управления
- `index` — (*number*) индекс позиции для размещения элемента управления
- `parent` — (*string*) идентификатор родительского элемента управления (для типа `menuItem`)

Для кнопки:

~~~jsx 
// spreadsheet.menu.data.add / spreadsheet.contextMenu.data.add
spreadsheet.toolbar.data.add({
    type: "button", // "menuItem"
    id: "button-id",
    tooltip: "Some tooltip",
    icon: "icon-name"
}, 2);
~~~

Для menuItem:

~~~jsx
// spreadsheet.menu.data.add / spreadsheet.contextMenu.data.add
spreadsheet.toolbar.data.add({
    type: "menuItem",
    id: "menuitem-id", 
    value: "Some value",
}, -1, "parent-id");
~~~

### Обновление элементов управления {#updating-controls}

Вы можете изменить иконку элемента управления и другие параметры его конфигурации с помощью метода `spreadsheet.{name}.data.update()`. Он принимает два параметра:

- идентификатор элемента управления
- объект с новой конфигурацией элемента управления

~~~jsx
// spreadsheet.menu.data.update / spreadsheet.contextMenu.data.update
spreadsheet.toolbar.data.update("add", { 
    icon: "icon_name" 
});
~~~

### Удаление элементов управления {#deleting-controls}

Для удаления элемента управления используйте метод `spreadsheet.{name}.data.remove()`. Передайте в метод идентификатор удаляемого элемента управления:

~~~jsx
// spreadsheet.menu.data.remove / spreadsheet.contextMenu.data.remove
spreadsheet.toolbar.data.remove("control-id");
~~~

## Панель инструментов {#toolbar}

### Элементы управления по умолчанию {#default-controls}

[Панель инструментов по умолчанию](/#toolbar) содержит следующие блоки элементов управления:

- блок **Undo**
  - кнопка *Undo* (id: "undo")
  - кнопка *Redo* (id: "redo")
- блок **Colors**
  - кнопка *Text color* (id: "color")
  - кнопка *Background color* (id: "background")
- блок **Font**
  - комбобокс *Font size* (id: "font-size")
- блок **Decoration**
  - кнопка *Bold* (id: "font-weight-bold")
  - кнопка *Italic* (id: "font-style-italic")
  - кнопка *Underline* (id: "text-decoration-underline")
  - кнопка *Strikethrough* (id: "text-decoration-line-through")
- блок **Align**
  - подблок **Horizontal align**
    - кнопка *Left* (id: "halign-left")
    - кнопка *Center* (id: "halign-center")
    - кнопка *Right* (id: "halign-right")
  - подблок **Vertical align**
    - кнопка *Top* (id: "valign-top")
    - кнопка *Center* (id: "valign-center")
    - кнопка *Bottom* (id: "valign-bottom")
  - подблок **Text wrapping**
    - кнопка *Clip* (id: "multiline-clip")
    - кнопка *Wrap* (id: "multiline-wrap")
- блок **Cell**
  - кнопка *Border* (id: "border")
  - кнопка *Merge/Unmerge* (id: "merge")
- блок **Format**
  - пункт меню *Format* (id: "format")
- блок **Actions**
  - кнопка *Filter* (id: "filter")
  - кнопка *Insert link* (id: "link")

Также можно добавить перечисленные ниже блоки:

- блок **Lock**
    - кнопка *Lock* (id: "lock")
- блок **Clear**
  - пункт меню *Clear group* (id: "clear-group")
    - пункт меню *Clear value* (id: "clear-value")
    - пункт меню *Clear styles* (id: "clear-styles")
    - пункт меню *Clear all* (id: "clear-all")
- блок **Rows**
  - кнопка *Add row* (id: "add-row")
  - кнопка *Remove row* (id: "remove-row")
  - кнопка *Unfreeze rows* (id: "unfreeze-rows")
  - кнопка *Freeze up to row [id]* (id: "freeze-rows")
  - кнопка *Hide row(s) [id]* (id: "hide-rows")
- блок **Columns**
  - кнопка *Add column* (id: "add-col")
  - кнопка *Remove column* (id: "remove-col")
  - кнопка *Unfreeze columns* (id: "unfreeze-cols")
  - кнопка *Freeze up to column [id]* (id: "freeze-cols")
  - кнопка *Hide column(s) [id]* (id: "hide-cols")
- блок **File**
  - пункт меню *Export* (id: "export")
    - пункт меню *"Microsoft Excel(.xlsx)"* (id: "export-xlsx")
  - пункт меню *Import* (id: "import")
    - пункт меню *"Microsoft Excel(.xlsx)"* (id: "import-xlsx")
- блок **Help**
  - кнопка *Help* (id: "help")

### Добавление элементов управления {#adding-controls-1}

В примере ниже в панель инструментов добавляется новая кнопка:

~~~jsx
spreadsheet.toolbar.data.add({
    type: "button",
    icon: "dxi dxi-delete",
    tooltip: "Remove all",
    id: "remove-all"
});
~~~

![DHTMLX Spreadsheet toolbar with a custom Remove all button added through customization](/img/custom_toolbar_button.png)

**Связанный пример**: [Spreadsheet. Пользовательская кнопка панели инструментов](https://snippet.dhtmlx.com/qopk6lta)

В примере ниже в элемент управления "clear-group" добавляется новый пункт меню:

~~~jsx
spreadsheet.toolbar.data.add({
    type: "menuItem",
    id: "clear-value2", 
    value: "Clear value2"
}, -1, "clear-group");
~~~

Для добавления menuItem существует упрощённый синтаксис, если точная позиция нового элемента не важна:

~~~jsx
spreadsheet.toolbar.data.add({
    type: "menuItem",
    id: "clear-value2", 
    value: "Clear value2", 
    parent: "clear-group"   
});
~~~

### Обновление элементов управления {#updating-controls-1}

В примере ниже стандартные иконки кнопок Undo/Redo в панели инструментов заменяются на иконки Font Awesome:

~~~jsx
spreadsheet.toolbar.data.update("undo", { icon: "fa fa-undo" });
spreadsheet.toolbar.data.update("redo", { icon: "fa fa-redo" });
~~~

![DHTMLX Spreadsheet toolbar with custom Undo and Redo icons from Font Awesome](/img/custom_toolbar_icons.png)

**Связанный пример**: [Spreadsheet. Пользовательские иконки панели инструментов](https://snippet.dhtmlx.com/mvnx43o0)

### Удаление элементов управления {#deleting-controls-1}

В примере ниже кнопка Undo удаляется из панели инструментов:

~~~jsx
spreadsheet.toolbar.data.remove("undo");
~~~

### Пользовательский размер шрифта {#custom-font-size}

Вы можете переопределить список доступных размеров шрифта в блоке **Font** панели инструментов, удалив существующие элементы из комбобокса `"font-size"` и добавив свои:

~~~jsx
const FONT_SIZES = [8, 10, 12, 14, 16, 20];

const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // параметры конфигурации
});

spreadsheet.toolbar.data.removeAll("font-size");
spreadsheet.toolbar.data.add(
    FONT_SIZES.map(size => ({ value: size, id: `font-size-${size}` })),
    -1,
    "font-size"
);

spreadsheet.parse(dataset);
~~~

**Связанный пример:** [Spreadsheet. Задать пользовательский размер шрифта](https://snippet.dhtmlx.com/tffbf11g)

## Меню {#menu}

### Элементы управления по умолчанию {#default-controls-1}

[Меню по умолчанию](/#menu) имеет следующую структуру:

- пункт меню **File** (id: "edit")
  - пункт меню *Import as...* (id: "import")
    - пункт меню *"Microsoft Excel(.xlsx)"* (id: "import-xlsx")
  - пункт меню *Download as...* (id: "download")
    - пункт меню *"Microsoft Excel(.xlsx)"* (id: "export-xlsx")
- пункт меню **Edit** (id: "edit")
  - пункт меню *Undo* (id: "undo")
  - пункт меню *Redo* (id: "redo")
  - разделитель
  - пункт меню *Freeze* (id: "freeze")
    - пункт меню *Unfreeze columns* (id: "unfreeze-cols")
    - пункт меню *Freeze up to column [id]* (id: "freeze-cols")
    - разделитель (id: "freeze-sep")
    - пункт меню *Unfreeze rows* (id: "unfreeze-rows")
    - пункт меню *Freeze up to row [id]* (id: "freeze-rows")
  - пункт меню *Lock* (id: "lock")
  - разделитель
  - пункт меню *Clear* (id: "clear")
    - пункт меню *Clear value* (id: "clear-value")
    - пункт меню *Clear styles* (id: "clear-styles")
    - пункт меню *Clear all* (id: "clear-all")
- пункт меню **Insert** (id: "insert")
  - пункт меню *Columns* (id: "columns")
    - пункт меню *Add column* (id: "add-col")
    - пункт меню *Remove column* (id: "remove-col")
  - пункт меню *Rows* (id: "rows")
    - пункт меню *Add row* (id: "add-row")
    - пункт меню *Remove row* (id: "remove-row")
  - пункт меню *Insert link* (id: "link")
- пункт меню **Format** (id: "configuration")
  - пункт меню *Bold* (id: "font-weight-bold")
  - пункт меню *Italic* (id: "font-style-italic")
  - пункт меню *Underline* (id: "text-decoration-underline")
  - пункт меню *Strikethrough* (id: "text-decoration-line-through")
  - разделитель
  - пункт меню *Horizontal align* (id: "halign")
    - пункт меню *Left* (id: "halign-left")
    - пункт меню *Center* (id: "halign-center")
    - пункт меню *Right* (id: "halign-right")
  - пункт меню *Vertical align* (id: "valign")
    - пункт меню *Top* (id: "valign-top")
    - пункт меню *Center* (id: "valign-center")
    - пункт меню *Bottom* (id: "valign-bottom")
  - пункт меню *Text wrapping* (id: "multiline")
    - пункт меню *Clip* (id: "multiline-clip")
    - пункт меню *Wrap* (id: "multiline-wrap")
  - пункт меню *Format* (id: "format")
  - пункт меню *Merge/Unmerge* (id: "merge")
- пункт меню **Data** (id: "data")
  - пункт меню *Data validation* (id: "validation")
  - пункт меню *Search* (id: "search")
  - пункт меню *Filter* (id: "filter")
  - пункт меню *Sort* (id: "sort")
    - пункт меню *Sort A to Z* (id: "asc-sort")
    - пункт меню *Sort Z to A* (id: "desc-sort")
- пункт меню **Help** (id: "help")

### Добавление элементов управления {#adding-controls-2}

В примере ниже в меню добавляется новый пункт меню:

~~~jsx
spreadsheet.menu.data.add({
    id: "validate",
    value: "Validate",
    childs: [
        {
            id: "isNumber",
            value: "Is number"
        },
        {
            id: "isEven",
            value: "Is even number"
        }
    ]
});
~~~

![DHTMLX Spreadsheet menu with a custom Validate option for checking numbers](/img/custom_menuitem.png)

**Связанный пример**: [Spreadsheet. Данные меню](https://snippet.dhtmlx.com/2mlv2qaz)

### Обновление элементов управления {#updating-controls-2}

В примере ниже стандартные иконки пунктов меню Undo/Redo заменяются на иконки Font Awesome:

~~~jsx
spreadsheet.menu.data.update("undo", { icon: "fa fa-undo" });
spreadsheet.menu.data.update("redo", { icon: "fa fa-redo" });
~~~

![DHTMLX Spreadsheet menu with custom Undo and Redo icons from Font Awesome](/img/custom_menu_icons.png)

### Удаление элементов управления {#deleting-controls-2}

В примере ниже пункт меню Undo удаляется из меню:

~~~jsx
spreadsheet.menu.data.remove("undo");
~~~

## Контекстное меню {#context-menu}

### Элементы управления по умолчанию {#default-controls-2}

[Контекстное меню по умолчанию](/#context-menu) имеет следующую структуру:

- пункт меню **Lock** (id: "lock")
- пункт меню **Clear** (id: "clear")
  - пункт меню *Clear value* (id: "clear-value")
  - пункт меню *Clear styles* (id: "clear-styles")
  - пункт меню *Clear all* (id: "clear-all")
- пункт меню **Columns** (id: "columns")
  - пункт меню *Add column* (id: "add-col")
  - пункт меню *Remove column* (id: "remove-col")
  - пункт меню *Fit to data* (id: "fit-col")
  - разделитель
  - пункт меню *Unfreeze columns* (id: "unfreeze-cols")
  - пункт меню *Freeze up to column [id]* (id: "freeze-cols")
  - пункт меню *Show columns* (id: "show-cols")
  - пункт меню *Hide column(s) [id]* (id: "hide-cols")
- пункт меню **Rows** (id: "rows")
  - пункт меню *Add row* (id: "add-row")
  - пункт меню *Remove row* (id: "remove-row")
  - разделитель
  - пункт меню *Unfreeze rows* (id: "unfreeze-rows")
  - пункт меню *Freeze up to row [id]* (id: "freeze-rows")
  - пункт меню *Show rows* (id: "show-rows")
  - пункт меню *Hide row(s) [id]* (id: "hide-rows")
- пункт меню **Sort** (id: "sort")
  - пункт меню *Sort A to Z* (id: "asc-sort")
  - пункт меню *Sort Z to A* (id: "desc-sort")
- пункт меню **Insert link** (id: "link")

### Добавление элементов управления {#adding-controls-3}

В примере ниже в контекстное меню добавляется новый пункт меню:

~~~jsx
spreadsheet.contextMenu.data.add({
    icon: "mdi mdi-eyedropper-variant",
    value: "Paint format",
    id: "paint-format"
});
~~~

![DHTMLX Spreadsheet context menu with a custom Paint format option](/img/custom_context_menuitem.png)

**Связанный пример**: [Spreadsheet. Контекстное меню](https://snippet.dhtmlx.com/atl9gd4h)

### Обновление элементов управления {#updating-controls-3}

В примере ниже стандартная иконка пункта меню Lock заменяется на иконку Font Awesome:

~~~jsx
spreadsheet.contextMenu.data.update("lock", { icon: "fa fa-key" });
~~~

![DHTMLX Spreadsheet context menu with a custom Lock icon from Font Awesome](/img/custom_context_icon.png)

### Удаление элементов управления {#deleting-controls-3}

В примере ниже пункт меню Undo удаляется из контекстного меню:

~~~jsx
spreadsheet.contextMenu.data.remove("lock");
~~~

## Пользовательский режим только для чтения {#custom-read-only-mode}

Помимо применения [режима только для чтения](configuration.md#read-only-mode) ко всему Spreadsheet, вы можете заблокировать отдельные операции с помощью событий, названия которых начинаются с `before`, например:

- [](api/spreadsheet_beforeeditstart_event.md)
- [](api/spreadsheet_beforeaction_event.md)

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});

spreadsheet.events.on("beforeEditStart", function(){
    return false;
});

spreadsheet.events.on("beforeAction", function(actionName){
    if (actionName === "setCellValue" || actionName === "setCellStyle") {
        return false;
    }
});

spreadsheet.parse(data);
~~~

**Связанный пример**: [Spreadsheet. Пользовательский режим только для чтения](https://snippet.dhtmlx.com/8xcursbe)
