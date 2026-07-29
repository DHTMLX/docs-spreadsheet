---
sidebar_label: 与 Angular 集成
title: Angular 集成
description: 您可以在文档中了解 DHTMLX JavaScript Spreadsheet 库的 Angular 集成方式。浏览开发指南和 API 参考，查看代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# 与 Angular 集成 {#integration-with-angular}

:::tip
使用本文档前，您应熟悉 **Angular** 的基本概念和模式。如需复习，请参阅 [**Angular 文档**](https://angular.dev/overview)。
:::

DHTMLX Spreadsheet 与 **Angular** 兼容。我们已准备了如何在 **Angular** 中使用 DHTMLX Spreadsheet 的代码示例。更多信息请参阅对应的 [**GitHub 示例**](https://github.com/DHTMLX/angular-spreadsheet-demo)。

## 创建项目 {#creating-a-project}

:::info
在开始创建新项目之前，请先安装 [**Angular CLI**](https://angular.dev/tools/cli) 和 [**Node.js**](https://nodejs.org/en/)。
:::

使用 Angular CLI 创建一个新的 *my-angular-spreadsheet-app* 项目。运行以下命令：

~~~json
ng new my-angular-spreadsheet-app
~~~

:::note
如果您希望按照本指南操作，在创建新 Angular 应用时请禁用服务端渲染（SSR）和静态站点生成（SSG/Prerendering）。
:::

上述命令会安装所有必要的工具，因此您无需运行任何额外的命令。

### 安装依赖项 {#installation-of-dependencies}

完成后，进入应用目录：

~~~json
cd my-angular-spreadsheet-app
~~~

安装依赖项并启动开发服务器。为此，请使用 [**yarn**](https://yarnpkg.com/) 包管理器：

~~~json
yarn
yarn start
~~~

应用应在 localhost 上运行（例如 `http://localhost:3000`）。

## 创建 Spreadsheet {#creating-spreadsheet}

现在您需要获取 DHTMLX Spreadsheet 源代码。首先停止应用并安装 Spreadsheet 包。

### 第一步：安装包 {#step-1-package-installation}

下载 [**试用版 Spreadsheet 包**](how_to_start.md#installing-spreadsheet-via-npm-or-yarn) 并按照 README 文件中的步骤操作。请注意，试用版 Spreadsheet 仅可使用 30 天。

### 第二步：创建组件 {#step-2-component-creation}

现在您需要创建一个 Angular 组件，以便将 Spreadsheet 添加到应用中。在 *src/app/* 目录下创建 *spreadsheet* 文件夹，在其中添加一个新文件并命名为 *spreadsheet.component.ts*。然后完成以下步骤。

#### 导入源文件 {#importing-source-files}

打开该文件并导入 Spreadsheet 源文件。请注意：

- 如果您使用 PRO 版本并从本地文件夹安装 Spreadsheet 包，导入路径如下：

~~~jsx
import { Spreadsheet } from 'dhx-spreadsheet-package';
~~~

- 如果您使用试用版 Spreadsheet，请指定以下路径：

~~~jsx
import { Spreadsheet } from '@dhx/trial-spreadsheet';
~~~

本教程展示如何配置 **试用版** Spreadsheet。

#### 设置容器并初始化 Spreadsheet {#set-the-container-and-initialize-spreadsheet}

要在页面上显示 Spreadsheet，您需要设置渲染组件的容器并使用相应的构造函数初始化 Spreadsheet：

~~~jsx {1,8,12-13,18-19} title="spreadsheet.component.ts"
import { Spreadsheet } from "@dhx/trial-spreadsheet";
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'spreadsheet', // 模板名称，用于 "app.component.ts" 文件中的 <spreadsheet/>
    styleUrls: ['./spreadsheet.component.css'], // 引入 css 文件
    template: `<div #container class = "widget"></div>`
})

export class SpreadsheetComponent implements OnInit, OnDestroy {
    // 初始化 Spreadsheet 的容器
    @ViewChild('container', { static: true }) spreadsheet_container!: ElementRef;

    private _spreadsheet!: Spreadsheet;

    ngOnInit() {
        // 初始化 Spreadsheet 组件
        this._spreadsheet = new Spreadsheet( this.spreadsheet_container.nativeElement, {});
    }

    ngOnDestroy() {
        this._spreadsheet.destructor(); // 销毁 Spreadsheet
    }
}
~~~

#### 添加样式 {#adding-styles}

要正确显示 Spreadsheet，您需要提供相应的样式。为此，可以在 *src/app/spreadsheet/* 目录下创建 *spreadsheet.component.css* 文件，并为 Spreadsheet 及其容器指定重要样式：

~~~css title="spreadsheet.component.css"
/* 导入 Spreadsheet 样式 */
@import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css";

/* 指定初始页面样式 */
html,
body {
    height: 100%;
    padding: 0;
    margin: 0;
}

/* 指定 Spreadsheet 容器样式 */
.widget {
    height: 100%;
}
~~~

#### 加载数据 {#loading-data}

要向 Spreadsheet 中添加数据，您需要提供一个数据集。可以在 *src/app/spreadsheet/* 目录下创建 *data.ts* 文件并添加一些数据：

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

            // 更多包含数据的单元格
        ]
    }
}
~~~

然后打开 *spreadsheet.component.ts* 文件。导入数据文件并在 `ngOnInit()` 方法中使用 [`parse()`](api/spreadsheet_parse_method.md) 方法应用数据，如下所示。

~~~jsx {2,18,21} title="spreadsheet.component.ts"
import { Spreadsheet } from "@dhx/trial-spreadsheet";
import { getData } from "./data"; // 导入数据
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
        const data = getData(); // 初始化数据属性
        this._spreadsheet = new Spreadsheet( this.spreadsheet_container.nativeElement, {});
        
        this._spreadsheet.parse(data);
    }

    ngOnDestroy() {
        this._spreadsheet.destructor();
    }
}
~~~

现在 Spreadsheet 组件已可以使用。当元素添加到页面时，它会用数据初始化 Spreadsheet。您也可以根据需要提供配置项。请访问我们的 [Spreadsheet API 文档](api/overview/events_overview.md) 查看所有可用属性的完整列表。

#### 处理事件 {#handling-events}

当用户在 Spreadsheet 中执行操作时，widget 会触发相应事件。您可以使用这些事件检测操作并运行所需代码。请参阅[事件完整列表](api/overview/events_overview.md)。

打开 *spreadsheet.component.ts* 文件，按如下方式完成 `ngOnInit()` 方法：

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

### 第三步：将 Spreadsheet 添加到应用 {#step-3-adding-spreadsheet-into-the-app}

要将 `SpreadsheetComponent` 组件添加到应用中，打开 *src/app/app.component.ts* 文件，并将默认代码替换为以下内容：

~~~jsx {5} title="app.component.ts"
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<spreadsheet/>` // 在 "spreadsheet.component.ts" 文件中创建的模板
})
export class AppComponent {
    name = "";
}
~~~

然后在 *src/app/* 目录下创建 *app.module.ts* 文件，并按如下方式指定 `SpreadsheetComponent`：

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

最后一步是打开 *src/main.ts* 文件，并将现有代码替换为以下内容：

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

完成后，您可以启动应用，在页面上查看加载了数据的 Spreadsheet。

![Angular 应用中已加载示例数据的 DHTMLX Spreadsheet](/img/integrations/trial_spreadsheet.png)

现在您已了解如何将 DHTMLX Spreadsheet 与 Angular 集成。您可以根据具体需求自定义代码。最终示例可在 [**GitHub**](https://github.com/DHTMLX/angular-spreadsheet-demo) 上找到。
