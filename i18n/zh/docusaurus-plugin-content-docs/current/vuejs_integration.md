---
sidebar_label: 与 Vue 集成
title: Vue 集成
description: 您可以在文档中了解 DHTMLX JavaScript Spreadsheet 库的 Vue 集成。浏览开发者指南和 API 参考，查看代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX Spreadsheet。
---

# 与 Vue 集成 {#integration-with-vue}

:::tip
阅读本文档前，您应当熟悉 [**Vue**](https://vuejs.org/) 的基本概念和模式。如需复习相关知识，请参阅 [**Vue 3 文档**](https://vuejs.org/guide/introduction.html#getting-started)。
:::

DHTMLX Spreadsheet 与 **Vue** 兼容。我们已准备了关于如何在 **Vue 3** 中使用 DHTMLX Spreadsheet 的代码示例。更多信息请参阅对应的 [**GitHub 示例**](https://github.com/DHTMLX/vue-spreadsheet-demo)。

## 创建项目 {#creating-a-project}

:::info
在开始创建新项目之前，请先安装 [**Node.js**](https://nodejs.org/en/)。
:::

要创建一个 **Vue** 项目，请运行以下命令：

~~~json
npm create vue@latest
~~~

该命令会安装并执行 `create-vue`，即官方 **Vue** 项目脚手架工具。详情请参阅 [Vue.js 快速上手](https://vuejs.org/guide/quick-start.html#creating-a-vue-application)。

我们将该项目命名为 **my-vue-spreadsheet-app**。

### 安装依赖 {#installation-of-dependencies}

进入应用目录：

~~~json
cd my-vue-spreadsheet-app
~~~

安装依赖并启动开发服务器。请使用包管理器执行以下操作：

- 如果您使用 [**yarn**](https://yarnpkg.com/)，请运行以下命令：

~~~jsx
yarn
yarn start // or yarn dev
~~~

- 如果您使用 [**npm**](https://www.npmjs.com/)，请运行以下命令：

~~~json
npm install
npm run dev
~~~

应用应在 localhost 上运行（例如 `http://localhost:3000`）。

## 创建 Spreadsheet {#creating-spreadsheet}

现在您需要获取 DHTMLX Spreadsheet 的源代码。首先，停止应用并安装 Spreadsheet 包。

### 第一步：安装包 {#step-1-package-installation}

下载 [**试用版 Spreadsheet 包**](how_to_start.md#installing-spreadsheet-via-npm-or-yarn) 并按照 README 文件中的步骤操作。请注意，试用版 Spreadsheet 仅可使用 30 天。

### 第二步：创建组件 {#step-2-component-creation}

现在您需要创建一个 Vue 组件，以便将 Spreadsheet 添加到应用中。在 *src/components/* 目录中创建一个新文件，命名为 *Spreadsheet.vue*。

#### 导入源文件 {#import-source-files}

打开 *Spreadsheet.vue* 文件并导入 Spreadsheet 源文件。请注意：

- 如果您使用 PRO 版本并从本地文件夹安装 Spreadsheet 包，导入路径如下：

~~~html title="Spreadsheet.vue"
<script>
import { Spreadsheet } from 'dhx-spreadsheet-package';
import 'dhx-spreadsheet-package/codebase/spreadsheet.css';
</script>
~~~

请注意，根据所使用的包，源文件可能已被压缩。在这种情况下，请确保导入的 CSS 文件为 *spreadsheet.min.css*。

- 如果您使用试用版 Spreadsheet，请指定以下路径：

~~~html title="Spreadsheet.vue"
<script>
import { Spreadsheet } from '@dhx/trial-spreadsheet';
import '@dhx/trial-spreadsheet/codebase/spreadsheet.min.css';
</script>
~~~

本教程将演示如何配置 Spreadsheet 的**试用**版本。

#### 设置容器并添加 Spreadsheet {#setting-the-container-and-adding-spreadsheet}

要在页面上显示 Spreadsheet，您需要为 Spreadsheet 创建容器，并使用相应的构造函数初始化该组件：

~~~html {2,7-8,18} title="Spreadsheet.vue"
<script>
import { Spreadsheet } from "@dhx/trial-spreadsheet";
import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css";

export default {
    mounted() {
        // initialize the Spreadsheet component
        this.spreadsheet = new Spreadsheet(this.$refs.container, {});
    },

    unmounted() {
        this.spreadsheet.destructor(); // destruct Spreadsheet
    }
};
</script>

<template>
    <div ref="container" class="widget"></div>
</template>
~~~

#### 添加样式 {#adding-styles}

要正确显示 Spreadsheet，您需要在项目主 CSS 文件中为 Spreadsheet 及其容器指定重要样式：

~~~css title="main.css"
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

#### 加载数据 {#loading-data}

要向 Spreadsheet 中添加数据，您需要提供一个数据集。您可以在 *src/* 目录中创建 *data.js* 文件并向其中添加一些数据：

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

然后打开 *App.vue* 文件，导入数据，并使用内部 `data()` 方法进行初始化。之后，您可以将数据作为 **props** 传递给新创建的 `<Spreadsheet/>` 组件：

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

进入 *Spreadsheet.vue* 文件，使用 [`parse()`](api/spreadsheet_parse_method.md) 方法将传入的 **props** 应用到 Spreadsheet：

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

现在 Spreadsheet 组件已准备好使用。当元素被添加到页面时，它会使用数据初始化 Spreadsheet。您也可以提供必要的配置项。请访问我们的 [Spreadsheet API 文档](api/overview/properties_overview.md)查看完整的可用属性列表。

#### 处理事件 {#handling-events}

当用户在 Spreadsheet 中执行操作时，组件会触发相应事件。您可以使用这些事件来检测操作并为其执行所需代码。请参阅[完整的事件列表](api/overview/events_overview.md)。

打开 *Spreadsheet.vue* 并完善 `mounted()` 方法：

~~~html {8-11} title="Spreadsheet.vue"
<script>
// ...
export default {
    // ...
    mounted: function() {
        this.spreadsheet = new Spreadsheet(this.$refs.container, {});

        this.spreadsheet.events.on("afterFocusSet", function(cell){
            console.log("Focus is set on a cell");
            console.log(cell);
        });
    }
    //...
}   
</script>

//...
~~~

完成后，您可以启动应用，查看加载了数据的 Spreadsheet 页面。

![DHTMLX Spreadsheet initialized with sample data in a Vue 3 application](/img/integrations/trial_spreadsheet.png)

现在您已了解如何将 DHTMLX Spreadsheet 与 Vue 集成。您可以根据具体需求对代码进行自定义。完整示例可在 [**GitHub**](https://github.com/DHTMLX/vue-spreadsheet-demo) 上找到。
