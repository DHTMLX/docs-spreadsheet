---
sidebar_label: Интеграция со Svelte
title: Интеграция со Svelte
description: Вы можете узнать об интеграции DHTMLX JavaScript Spreadsheet со Svelte в документации. Изучите руководства разработчика и справочник АПИ, ознакомьтесь с примерами кода и живыми демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# Интеграция со Svelte {#integration-with-svelte}

:::tip
Перед чтением этой документации вы должны быть знакомы с основными концепциями и паттернами **Svelte**. Для освежения знаний обратитесь к [**документации Svelte**](https://svelte.dev/).
:::

DHTMLX Spreadsheet совместим со **Svelte**. Мы подготовили примеры кода использования DHTMLX Spreadsheet со **Svelte**. Подробнее см. соответствующий [**Пример на GitHub**](https://github.com/DHTMLX/svelte-spreadsheet-demo).

## Создание проекта {#creating-a-project}

:::info
Перед созданием нового проекта установите [**Vite**](https://vite.dev/) (необязательно) и [**Node.js**](https://nodejs.org/en/).
:::

Чтобы создать проект **Svelte** JS, выполните следующую команду:

~~~json
npm create vite@latest
~~~

Назовём проект **my-svelte-spreadsheet-app**.

### Установка зависимостей {#installation-of-dependencies}

Перейдите в директорию приложения:

~~~json
cd my-svelte-spreadsheet-app
~~~

Затем установите зависимости и запустите приложение. Для этого используйте пакетный менеджер:

- если вы используете [**yarn**](https://yarnpkg.com/), выполните следующие команды:

~~~jsx
yarn
yarn dev // or yarn dev
~~~

- если вы используете [**npm**](https://www.npmjs.com/), выполните следующие команды:

~~~json
npm install
npm run dev
~~~

Приложение должно запуститься на localhost (например, `http://localhost:3000`).

## Создание Spreadsheet {#creating-spreadsheet}

Теперь нужно получить исходный код DHTMLX Spreadsheet. Сначала остановите приложение и установите пакет Spreadsheet.

### Шаг 1. Установка пакета {#step-1-package-installation}

Скачайте [**ознакомительный пакет Spreadsheet**](how_to_start.md#installing-spreadsheet-via-npm-or-yarn) и следуйте инструкциям в README-файле. Обратите внимание, что ознакомительная версия Spreadsheet доступна только в течение 30 дней.

### Шаг 2. Создание компонента {#step-2-component-creation}

Теперь нужно создать компонент Svelte для добавления Spreadsheet в приложение. Создайте новый файл в директории *src/* и назовите его *Spreadsheet.svelte*.

#### Импорт исходных файлов {#importing-source-files}

Откройте файл *Spreadsheet.svelte* и импортируйте исходные файлы Spreadsheet. Обратите внимание, что:

- если вы используете PRO-версию и устанавливаете пакет Spreadsheet из локальной папки, пути к импорту выглядят следующим образом:

~~~html title="Spreadsheet.svelte"
<script>
import { Spreadsheet } from 'dhx-spreadsheet-package';
import 'dhx-spreadsheet-package/codebase/spreadsheet.css';
</script>
~~~

Обратите внимание, что в зависимости от используемого пакета исходные файлы могут быть минифицированы. В этом случае убедитесь, что вы импортируете CSS-файл как *spreadsheet.min.css*.

- если вы используете ознакомительную версию Spreadsheet, укажите следующие пути:

~~~html title="Spreadsheet.svelte"
<script>
import { Spreadsheet } from '@dhx/trial-spreadsheet';
import '@dhx/trial-spreadsheet/codebase/spreadsheet.min.css';
</script>
~~~

В этом руководстве показана настройка **ознакомительной** версии Spreadsheet.

#### Настройка контейнера и добавление Spreadsheet {#setting-the-container-and-adding-spreadsheet}

Чтобы отобразить Spreadsheet на странице, нужно создать контейнер для Spreadsheet и инициализировать этот компонент с помощью соответствующего конструктора:

~~~html {3,6,10-11,19} title="Spreadsheet.svelte"
<script>
    import { onMount, onDestroy } from "svelte";
    import { Spreadsheet } from "@dhx/trial-spreadsheet";
    import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css"

    let container; // initialize container for Spreadsheet
    let spreadsheet;
    
    onMount(() => {
        // initialize the Spreadsheet component
        spreadsheet = new Spreadsheet(container, {});
    });

    onDestroy(() => {
        spreadsheet.destructor(); // destruct Spreadsheet
    });
</script>

<div bind:this={container} class="widget"></div>
~~~

#### Добавление стилей {#adding-styles}

Чтобы Spreadsheet отображался корректно, необходимо задать важные стили для Spreadsheet и его контейнера в главном CSS-файле проекта:

~~~css title="app.css"
/* specify styles for initial page */
html,
body,
#app { /* make sure that you use the #app root container */
    height: 100%;
    padding: 0;
    margin: 0;
}

/* specify styles for the Spreadsheet container */
.widget {
    height: 100%;
}
~~~

#### Загрузка данных {#loading-data}

Чтобы добавить данные в Spreadsheet, нужно предоставить набор данных. Создайте файл *data.js* в директории *src/* и добавьте в него данные:

~~~jsx title="data.js"
export function getData() {
    return {
        styles: {
            bold: {
                "font-weight": "bold"
            },
            right: {
                "justify-content": "flex-end",
                "text-align": "right"
            }
        },
        data: [
            { cell: "a1", value: "Country", css:"bold" },
            { cell: "b1", value: "Product", css:"bold" },
            { cell: "c1", value: "Price", css:"right bold" },
            { cell: "d1", value: "Amount", css:"right bold" },
            { cell: "e1", value: "Total Price", css:"right bold" },

            { cell: "a2", value: "Ecuador" },
            { cell: "b2", value: "Banana" },
            { cell: "c2", value: 6.68, format: "currency" },
            { cell: "d2", value: 430 },
            { cell: "e2", value: 2872.4, format: "currency" },

            { cell: "a3", value: "Belarus" },
            { cell: "b3", value: "Apple" },
            { cell: "c3", value: 3.75, format: "currency" },
            { cell: "d3", value: 600 },
            { cell: "e3", value: 2250, format: "currency" },

            { cell: "a4", value: "Peru" },
            { cell: "b4", value: "Grapes" },
            { cell: "c4", value: 7.69, format: "currency" },
            { cell: "d4", value: 740 },
            { cell: "e4", value: 5690.6, format: "currency" },

            // more cells with data
        ]
    }
}
~~~

Затем откройте файл *App.svelte*, импортируйте данные и передайте их в только что созданный компонент `<Spreadsheet/>` как **props**:

~~~html {3,5,8} title="App.svelte"
<script>
    import Spreadsheet from "./Spreadsheet.svelte";
    import { getData } from "./data.js";

    const data = getData();
</script>

<Spreadsheet data={data} />
~~~

Перейдите в файл *Spreadsheet.svelte* и примените переданные **props** к Spreadsheet методом [`parse()`](api/spreadsheet_parse_method.md):

~~~html {6,13} title="Spreadsheet.svelte"
<script>
    import { onMount, onDestroy } from "svelte";
    import { Spreadsheet } from "@dhx/trial-spreadsheet";
    import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css"
    
    export let data;

    let container;
    let spreadsheet;
    
    onMount(() => {
        spreadsheet = new Spreadsheet(container, {});
        spreadsheet.parse(data);
    });

    onDestroy(() => {
        spreadsheet.destructor();
    });
</script>

<div bind:this={container} class="widget"></div>
~~~

Теперь компонент Spreadsheet готов к использованию. При добавлении элемента на страницу он инициализирует Spreadsheet с данными. При необходимости можно также задать нужные параметры конфигурации. Посетите [документацию АПИ Spreadsheet](api/overview/properties_overview.md) для просмотра полного списка доступных свойств.

#### Обработка событий {#handling-events}

Когда пользователь выполняет действие в Spreadsheet, виджет вызывает событие. Эти события можно использовать для обнаружения действия и выполнения нужного кода. Смотрите [полный список событий](api/overview/events_overview.md).

Откройте *Spreadsheet.svelte* и дополните метод `onMount()` следующим образом:

~~~html {8-11} title="Spreadsheet.svelte"
<script>
// ...
let spreadsheet;

onMount(() => {
    spreadsheet = new Spreadsheet(container, {})

    spreadsheet.events.on("afterFocusSet", function(cell){
        console.log("Focus is set on a cell " + spreadsheet.selection.getSelectedCell());
        console.log(cell);
    });
});

onDestroy(() => {
    spreadsheet.destructor();
});
</script>

// ...
~~~

После этого при запуске приложения на странице должен отобразиться Spreadsheet, загруженный с данными.

![DHTMLX Spreadsheet, инициализированный с тестовыми данными в приложении Svelte](/img/integrations/trial_spreadsheet.png)

Теперь у вас есть базовая настройка для интеграции DHTMLX Spreadsheet со Svelte. Вы можете настроить код в соответствии с вашими конкретными требованиями. Финальный пример можно найти на [**GitHub**](https://github.com/DHTMLX/svelte-spreadsheet-demo).
