---
sidebar_label: Интеграция с Angular
title: Интеграция с Angular
description: Вы можете узнать об интеграции DHTMLX JavaScript Spreadsheet с Angular в документации. Просматривайте руководства разработчика и справочник АПИ, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# Интеграция с Angular {#integration-with-angular}

:::tip
Для работы с этой документацией вам необходимо знать основные концепции и паттерны **Angular**. Для освежения знаний обратитесь к [**документации Angular**](https://angular.dev/overview).
:::

DHTMLX Spreadsheet совместим с **Angular**. Мы подготовили примеры кода по использованию DHTMLX Spreadsheet с **Angular**. Подробнее смотрите в соответствующем [**примере на GitHub**](https://github.com/DHTMLX/angular-spreadsheet-demo).

## Создание проекта {#creating-a-project}

:::info
Перед созданием нового проекта установите [**Angular CLI**](https://angular.dev/tools/cli) и [**Node.js**](https://nodejs.org/en/).
:::

Создайте новый проект *my-angular-spreadsheet-app* с помощью Angular CLI. Выполните следующую команду:

~~~json
ng new my-angular-spreadsheet-app
~~~

:::note
Если вы хотите следовать этому руководству, при создании нового Angular-приложения отключите Server-Side Rendering (SSR) и Static Site Generation (SSG/Prerendering).
:::

Команда выше устанавливает все необходимые инструменты, поэтому дополнительные команды запускать не нужно.

### Установка зависимостей {#installation-of-dependencies}

После этого перейдите в директорию приложения:

~~~json
cd my-angular-spreadsheet-app
~~~

Установите зависимости и запустите сервер разработки. Для этого используйте менеджер пакетов [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

Приложение должно запуститься на localhost (например, `http://localhost:3000`).

## Создание Spreadsheet {#creating-spreadsheet}

Теперь необходимо получить исходный код DHTMLX Spreadsheet. Сначала остановите приложение и установите пакет Spreadsheet.

### Шаг 1. Установка пакета {#step-1-package-installation}

Скачайте [**ознакомительный пакет Spreadsheet**](how_to_start.md#installing-spreadsheet-via-npm-or-yarn) и следуйте инструкциям в файле README. Обратите внимание, что ознакомительная версия Spreadsheet доступна только 30 дней.

### Шаг 2. Создание компонента {#step-2-component-creation}

Теперь необходимо создать Angular-компонент для добавления Spreadsheet в приложение. Создайте папку *spreadsheet* в директории *src/app/*, добавьте в неё новый файл и назовите его *spreadsheet.component.ts*. Затем выполните описанные ниже шаги.

#### Импорт исходных файлов {#importing-source-files}

Откройте файл и импортируйте исходные файлы Spreadsheet. Обратите внимание:

- если вы используете PRO-версию и устанавливаете пакет Spreadsheet из локальной папки, путь импорта выглядит следующим образом:

~~~jsx
import { Spreadsheet } from 'dhx-spreadsheet-package';
~~~

- если вы используете ознакомительную версию Spreadsheet, укажите следующий путь:

~~~jsx
import { Spreadsheet } from '@dhx/trial-spreadsheet';
~~~

В этом руководстве показана настройка **ознакомительной** версии Spreadsheet.

#### Установка контейнера и инициализация Spreadsheet {#set-the-container-and-initialize-spreadsheet}

Чтобы отобразить Spreadsheet на странице, необходимо задать контейнер для рендеринга компонента и инициализировать Spreadsheet с помощью соответствующего конструктора:

~~~jsx {1,8,12-13,18-19} title="spreadsheet.component.ts"
import { Spreadsheet } from "@dhx/trial-spreadsheet";
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'spreadsheet', // имя шаблона, используемое в файле "app.component.ts" как <spreadsheet/>
    styleUrls: ['./spreadsheet.component.css'], // подключить css-файл
    template: `<div #container class = "widget"></div>`
})

export class SpreadsheetComponent implements OnInit, OnDestroy {
    // инициализировать контейнер для Spreadsheet
    @ViewChild('container', { static: true }) spreadsheet_container!: ElementRef;

    private _spreadsheet!: Spreadsheet;

    ngOnInit() {
        // инициализировать компонент Spreadsheet
        this._spreadsheet = new Spreadsheet( this.spreadsheet_container.nativeElement, {});
    }

    ngOnDestroy() {
        this._spreadsheet.destructor(); // уничтожить Spreadsheet
    }
}
~~~

#### Добавление стилей {#adding-styles}

Чтобы Spreadsheet отображался корректно, необходимо подключить соответствующие стили. Для этого создайте файл *spreadsheet.component.css* в директории *src/app/spreadsheet/* и укажите важные стили для Spreadsheet и его контейнера:

~~~css title="spreadsheet.component.css"
/* импортировать стили Spreadsheet */
@import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css";

/* задать стили для начальной страницы */
html,
body {
    height: 100%;
    padding: 0;
    margin: 0;
}

/* задать стили для контейнера Spreadsheet */
.widget {
    height: 100%;
}
~~~

#### Загрузка данных {#loading-data}

Чтобы добавить данные в Spreadsheet, необходимо подготовить набор данных. Создайте файл *data.ts* в директории *src/app/spreadsheet/* и добавьте в него данные:

~~~jsx title="data.ts"
export function getData(): any {
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

Затем откройте файл *spreadsheet.component.ts*. Импортируйте файл с данными и примените их с помощью метода [`parse()`](api/spreadsheet_parse_method.md) внутри метода `ngOnInit()`, как показано ниже.

~~~jsx {2,18,21} title="spreadsheet.component.ts"
import { Spreadsheet } from "@dhx/trial-spreadsheet";
import { getData } from "./data"; // импортировать данные
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'spreadsheet', 
    styleUrls: ['./spreadsheet.component.css'],
    template: `<div #container class = "widget"></div>`
})

export class SpreadsheetComponent implements OnInit, OnDestroy {
    @ViewChild('container', { static: true }) spreadsheet_container!: ElementRef;

    private _spreadsheet!: Spreadsheet;

    ngOnInit() {
        const data = getData(); // инициализировать свойство data
        this._spreadsheet = new Spreadsheet( this.spreadsheet_container.nativeElement, {});
        
        this._spreadsheet.parse(data);
    }

    ngOnDestroy() {
        this._spreadsheet.destructor();
    }
}
~~~

Теперь компонент Spreadsheet готов к использованию. При добавлении элемента на страницу он инициализирует Spreadsheet с данными. Вы также можете задать необходимые параметры конфигурации. Посетите [документацию АПИ Spreadsheet](api/overview/events_overview.md), чтобы ознакомиться с полным списком доступных свойств.

#### Обработка событий {#handling-events}

Когда пользователь выполняет действие в Spreadsheet, виджет вызывает соответствующее событие. Вы можете использовать эти события для обнаружения действий и выполнения нужного кода. Смотрите [полный список событий](api/overview/events_overview.md).

Откройте файл *spreadsheet.component.ts* и дополните метод `ngOnInit()` следующим образом:

~~~jsx {5-8} title="spreadsheet.component.ts"
// ...
ngOnInit() {
    this._spreadsheet = new Spreadsheet(this.spreadsheet_container.nativeElement,{});

    spreadsheet.events.on("afterFocusSet", function(cell){
        console.log("Focus is set on a cell " + spreadsheet.selection.getSelectedCell());
        console.log(cell);
    });
}

ngOnDestroy() {
    this._spreadsheet.destructor();
}
~~~

### Шаг 3. Добавление Spreadsheet в приложение {#step-3-adding-spreadsheet-into-the-app}

Чтобы добавить компонент `SpreadsheetComponent` в приложение, откройте файл *src/app/app.component.ts* и замените код по умолчанию следующим:

~~~jsx {5} title="app.component.ts"
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<spreadsheet/>` // шаблон, созданный в файле "spreadsheet.component.ts"
})
export class AppComponent {
    name = "";
}
~~~

Затем создайте файл *app.module.ts* в директории *src/app/* и укажите `SpreadsheetComponent`, как показано ниже:

~~~jsx {4-5,8} title="app.module.ts"
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { SpreadsheetComponent } from "./spreadsheet/spreadsheet.component";

@NgModule({
    declarations: [AppComponent, SpreadsheetComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
~~~

Последний шаг — открыть файл *src/main.ts* и заменить существующий код следующим:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

После этого можно запустить приложение и увидеть Spreadsheet с данными на странице.

![DHTMLX Spreadsheet initialized with sample data in an Angular application](/img/integrations/trial_spreadsheet.png)

Теперь вы знаете, как интегрировать DHTMLX Spreadsheet с Angular. Вы можете адаптировать код под свои конкретные требования. Финальный пример доступен на [**GitHub**](https://github.com/DHTMLX/angular-spreadsheet-demo).
