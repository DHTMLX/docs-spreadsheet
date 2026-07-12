---
sidebar_label: Интеграция с Vue
title: Интеграция с Vue
description: В документации вы можете узнать об интеграции библиотеки DHTMLX JavaScript Spreadsheet с Vue. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# Интеграция с Vue {#integration-with-vue}

:::tip
Перед изучением этой документации вы должны быть знакомы с основными концепциями и паттернами [**Vue**](https://vuejs.org/). Для повторения материала обратитесь к [**документации Vue 3**](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX Spreadsheet совместим с **Vue**. Мы подготовили примеры кода для работы DHTMLX Spreadsheet с **Vue 3**. Подробнее см. соответствующий [**Пример на GitHub**](https://github.com/DHTMLX/vue-spreadsheet-demo).

## Создание проекта {#creating-a-project}

:::info
Перед созданием нового проекта установите [**Node.js**](https://nodejs.org/en/).
:::

Для создания проекта на **Vue** выполните следующую команду:

~~~json
npm create vue@latest
~~~

Эта команда устанавливает и запускает `create-vue` — официальный инструмент для создания проектов на **Vue**. Подробнее см. [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Назовём проект **my-vue-spreadsheet-app**.

### Установка зависимостей {#installation-of-dependencies}

Перейдите в директорию приложения:

~~~json
cd my-vue-spreadsheet-app
~~~

Установите зависимости и запустите сервер разработки. Для этого используйте менеджер пакетов:

- если вы используете [**yarn**](https://yarnpkg.com/), выполните следующие команды:

~~~jsx
yarn
yarn start // или yarn dev
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

Загрузите [**ознакомительный пакет Spreadsheet**](how_to_start.md#installing-spreadsheet-via-npm-or-yarn) и следуйте инструкциям в файле README. Обратите внимание, что ознакомительная версия Spreadsheet доступна только на 30 дней.

### Шаг 2. Создание компонента {#step-2-component-creation}

Теперь нужно создать компонент Vue для добавления Spreadsheet в приложение. Создайте новый файл в директории *src/components/* и назовите его *Spreadsheet.vue*.

#### Импорт исходных файлов {#import-source-files}

Откройте файл *Spreadsheet.vue* и импортируйте исходные файлы Spreadsheet. Обратите внимание:

- если вы используете PRO-версию и устанавливаете пакет Spreadsheet из локальной папки, пути импорта выглядят следующим образом:

~~~html title="Spreadsheet.vue"
<script>
import { Spreadsheet } from 'dhx-spreadsheet-package';
import 'dhx-spreadsheet-package/codebase/spreadsheet.css';
</script>
~~~

Обратите внимание, что в зависимости от используемого пакета исходные файлы могут быть минифицированы. В этом случае убедитесь, что вы импортируете CSS-файл как *spreadsheet.min.css*.

- если вы используете ознакомительную версию Spreadsheet, укажите следующие пути:

~~~html title="Spreadsheet.vue"
<script>
import { Spreadsheet } from '@dhx/trial-spreadsheet';
import '@dhx/trial-spreadsheet/codebase/spreadsheet.min.css';
</script>
~~~

В этом руководстве показано, как настроить **ознакомительную** версию Spreadsheet.

#### Задание контейнера и добавление Spreadsheet {#setting-the-container-and-adding-spreadsheet}

Чтобы отобразить Spreadsheet на странице, необходимо создать контейнер для него и инициализировать компонент с помощью соответствующего конструктора:

~~~html {2,7-8,18} title="Spreadsheet.vue"
<script>
import { Spreadsheet } from "@dhx/trial-spreadsheet";
import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css";

export default {
    mounted() {
        // инициализация компонента Spreadsheet
        this.spreadsheet = new Spreadsheet(this.$refs.container, {});
    },

    unmounted() {
        this.spreadsheet.destructor(); // уничтожение Spreadsheet
    }
};
</script>

<template>
    <div ref="container" class="widget"></div>
</template>
~~~

#### Добавление стилей {#adding-styles}

Для корректного отображения Spreadsheet необходимо задать важные стили для Spreadsheet и его контейнера в главном CSS-файле проекта:

~~~css title="main.css"
/* стили для начальной страницы */
html,
body,
#app { /* убедитесь, что используете корневой контейнер #app */
    height: 100%;
    padding: 0;
    margin: 0;
}

/* стили для контейнера Spreadsheet */
.widget {
    height: 100%;
}
~~~

#### Загрузка данных {#loading-data}

Чтобы добавить данные в Spreadsheet, необходимо подготовить набор данных. Создайте файл *data.js* в директории *src/* и добавьте в него данные:

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

            // ещё ячейки с данными
        ]
    }
}
~~~

Затем откройте файл *App.vue*, импортируйте данные и инициализируйте их с помощью внутреннего метода `data()`. После этого можно передать данные в созданный компонент `<Spreadsheet/>` в виде **props**:

~~~html {3,7-9,14} title="App.vue"
<script>
import Spreadsheet from "./components/Spreadsheet.vue";
import { getData } from "./data";

export default {
    components: { Spreadsheet },
    data() {
        return { data: getData() };
    }
};
</script>

<template>
    <Spreadsheet :data="data" />
</template>

~~~

Перейдите в файл *Spreadsheet.vue* и примените переданные **props** к Spreadsheet с помощью метода [`parse()`](api/spreadsheet_parse_method.md):

~~~html {6,10} title="Spreadsheet.vue"
<script>
import { Spreadsheet } from "@dhx/trial-spreadsheet";
import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css";

export default {
    props: ["data"],

    mounted() {
        this.spreadsheet = new Spreadsheet(this.$refs.container, {});
        this.spreadsheet.parse(this.data);
    },

    unmounted() {
        this.spreadsheet.destructor();
    }
};
</script>

<template>
    <div ref="container" class="widget"></div>
</template>
~~~

Компонент Spreadsheet готов к использованию. При добавлении элемента на страницу Spreadsheet инициализируется с данными. Вы также можете передать необходимые параметры конфигурации. Полный список доступных свойств см. в [документации API Spreadsheet](api/overview/properties_overview.md).

#### Обработка событий {#handling-events}

Когда пользователь выполняет действие в Spreadsheet, виджет вызывает событие. Вы можете использовать эти события для обнаружения действия и выполнения нужного кода. См. [полный список событий](api/overview/events_overview.md).

Откройте *Spreadsheet.vue* и дополните метод `mounted()`:

~~~html {8-11} title="Spreadsheet.vue"
<script>
// ...
export default {
    // ...
    mounted: function() {
        this.spreadsheet = new Spreadsheet(this.$refs.container, {});

        this.spreadsheet.events.on("afterFocusSet", function(cell){
            console.log("Фокус установлен на ячейке");
            console.log(cell);
        });
    }
    //...
}   
</script>

//...
~~~

После этого можно запустить приложение и увидеть Spreadsheet с данными на странице.

![DHTMLX Spreadsheet, инициализированный с примером данных в приложении Vue 3](/img/integrations/trial_spreadsheet.png)

Теперь вы знаете, как интегрировать DHTMLX Spreadsheet с Vue. Вы можете настроить код в соответствии со своими требованиями. Финальный пример можно найти на [**GitHub**](https://github.com/DHTMLX/vue-spreadsheet-demo).
