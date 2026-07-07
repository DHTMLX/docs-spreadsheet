---
sidebar_label: Vue 통합
title: Vue 통합
description: DHTMLX JavaScript Spreadsheet 라이브러리의 Vue 통합에 대한 내용을 문서에서 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. 또한 DHTMLX Spreadsheet의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# Vue 통합 {#integration-with-vue}

:::tip
이 문서를 읽기 전에 [**Vue**](https://vuejs.org/)의 기본 개념과 패턴을 숙지하시기 바랍니다. 내용을 복습하려면 [**Vue 3 문서**](https://vuejs.org/guide/introduction.html#getting-started)를 참고하세요.
:::

DHTMLX Spreadsheet는 **Vue**와 호환됩니다. **Vue 3**에서 DHTMLX Spreadsheet를 사용하는 방법에 대한 코드 예제를 준비했습니다. 자세한 내용은 [**GitHub 예제**](https://github.com/DHTMLX/vue-spreadsheet-demo)를 참고하세요.

## 프로젝트 생성 {#creating-a-project}

:::info
새 프로젝트를 생성하기 전에 [**Node.js**](https://nodejs.org/en/)를 설치하세요.
:::

**Vue** 프로젝트를 생성하려면 다음 명령어를 실행하세요:

~~~json
npm create vue@latest
~~~

이 명령어는 공식 **Vue** 프로젝트 스캐폴딩 도구인 `create-vue`를 설치하고 실행합니다. 자세한 내용은 [Vue.js 빠른 시작](https://vuejs.org/guide/quick-start.html#creating-a-vue-application)에서 확인하세요.

프로젝트 이름을 **my-vue-spreadsheet-app**으로 지정합니다.

### 의존성 설치 {#installation-of-dependencies}

앱 디렉토리로 이동하세요:

~~~json
cd my-vue-spreadsheet-app
~~~

의존성을 설치하고 개발 서버를 시작하세요. 패키지 매니저를 사용하세요:

- [**yarn**](https://yarnpkg.com/)을 사용하는 경우 다음 명령어를 실행하세요:

~~~jsx
yarn
yarn start // 또는 yarn dev
~~~

- [**npm**](https://www.npmjs.com/)을 사용하는 경우 다음 명령어를 실행하세요:

~~~json
npm install
npm run dev
~~~

앱은 로컬호스트(예: `http://localhost:3000`)에서 실행됩니다.

## Spreadsheet 생성 {#creating-spreadsheet}

이제 DHTMLX Spreadsheet 소스 코드를 가져와야 합니다. 먼저 앱을 중지하고 Spreadsheet 패키지를 설치하세요.

### 1단계. 패키지 설치 {#step-1-package-installation}

[**평가판 Spreadsheet 패키지**](how_to_start.md#installing-spreadsheet-via-npm-or-yarn)를 다운로드하고 README 파일의 단계를 따르세요. 평가판 Spreadsheet는 30일 동안만 사용할 수 있습니다.

### 2단계. 컴포넌트 생성 {#step-2-component-creation}

이제 애플리케이션에 Spreadsheet를 추가하기 위한 Vue 컴포넌트를 생성해야 합니다. *src/components/* 디렉토리에 새 파일을 생성하고 *Spreadsheet.vue*로 이름을 지정하세요.

#### 소스 파일 가져오기 {#import-source-files}

*Spreadsheet.vue* 파일을 열고 Spreadsheet 소스 파일을 가져오세요. 다음 사항에 유의하세요:

- PRO 버전을 사용하고 로컬 폴더에서 Spreadsheet 패키지를 설치하는 경우 가져오기 경로는 다음과 같습니다:

~~~html title="Spreadsheet.vue"
<script>
import { Spreadsheet } from 'dhx-spreadsheet-package';
import 'dhx-spreadsheet-package/codebase/spreadsheet.css';
</script>
~~~

사용하는 패키지에 따라 소스 파일이 압축되어 있을 수 있습니다. 이 경우 CSS 파일을 *spreadsheet.min.css*로 가져오고 있는지 확인하세요.

- Spreadsheet 평가판을 사용하는 경우 다음 경로를 지정하세요:

~~~html title="Spreadsheet.vue"
<script>
import { Spreadsheet } from '@dhx/trial-spreadsheet';
import '@dhx/trial-spreadsheet/codebase/spreadsheet.min.css';
</script>
~~~

이 튜토리얼에서는 Spreadsheet **평가판** 버전을 구성하는 방법을 설명합니다.

#### 컨테이너 설정 및 Spreadsheet 추가 {#setting-the-container-and-adding-spreadsheet}

페이지에 Spreadsheet를 표시하려면 Spreadsheet용 컨테이너를 생성하고 해당 생성자를 사용하여 이 컴포넌트를 초기화해야 합니다:

~~~html {2,7-8,18} title="Spreadsheet.vue"
<script>
import { Spreadsheet } from "@dhx/trial-spreadsheet";
import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css";

export default {
    mounted() {
        // Spreadsheet 컴포넌트 초기화
        this.spreadsheet = new Spreadsheet(this.$refs.container, {});
    },

    unmounted() {
        this.spreadsheet.destructor(); // Spreadsheet 소멸
    }
};
</script>

<template>
    <div ref="container" class="widget"></div>
</template>
~~~

#### 스타일 추가 {#adding-styles}

Spreadsheet를 올바르게 표시하려면 프로젝트의 메인 CSS 파일에서 Spreadsheet와 그 컨테이너에 대한 중요한 스타일을 지정해야 합니다:

~~~css title="main.css"
/* 초기 페이지 스타일 지정 */
html,
body,
#app { /* #app 루트 컨테이너를 사용하는지 확인하세요 */
    height: 100%;
    padding: 0;
    margin: 0;
}

/* Spreadsheet 컨테이너 스타일 지정 */
.widget {
    height: 100%;
}
~~~

#### 데이터 로드 {#loading-data}

Spreadsheet에 데이터를 추가하려면 데이터 세트를 제공해야 합니다. *src/* 디렉토리에 *data.js* 파일을 생성하고 데이터를 추가할 수 있습니다:

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

            // 데이터가 있는 더 많은 셀
        ]
    }
}
~~~

그런 다음 *App.vue* 파일을 열고, 데이터를 가져온 후 내부 `data()` 메서드로 초기화하세요. 이후 새로 생성한 `<Spreadsheet/>` 컴포넌트에 **props**로 데이터를 전달할 수 있습니다:

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

*Spreadsheet.vue* 파일로 이동하여 [`parse()`](api/spreadsheet_parse_method.md) 메서드로 전달된 **props**를 Spreadsheet에 적용하세요:

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

이제 Spreadsheet 컴포넌트를 사용할 준비가 되었습니다. 페이지에 요소가 추가되면 데이터와 함께 Spreadsheet가 초기화됩니다. 필요한 구성 설정도 제공할 수 있습니다. 사용 가능한 속성의 전체 목록은 [Spreadsheet API 문서](api/overview/properties_overview.md)를 참고하세요.

#### 이벤트 처리 {#handling-events}

사용자가 Spreadsheet에서 동작을 수행하면 위젯이 이벤트를 호출합니다. 이러한 이벤트를 사용하여 동작을 감지하고 원하는 코드를 실행할 수 있습니다. [이벤트 전체 목록](api/overview/events_overview.md)을 참고하세요.

*Spreadsheet.vue*를 열고 `mounted()` 메서드를 완성하세요:

~~~html {8-11} title="Spreadsheet.vue"
<script>
// ...
export default {
    // ...
    mounted: function() {
        this.spreadsheet = new Spreadsheet(this.$refs.container, {});

        this.spreadsheet.events.on("afterFocusSet", function(cell){
            console.log("셀에 포커스가 설정되었습니다");
            console.log(cell);
        });
    }
    //...
}   
</script>

//...
~~~

그런 다음 앱을 시작하면 페이지에 데이터가 로드된 Spreadsheet를 볼 수 있습니다.

![샘플 데이터와 함께 Vue 3 애플리케이션에서 초기화된 DHTMLX Spreadsheet](/img/integrations/trial_spreadsheet.png)

이제 DHTMLX Spreadsheet를 Vue와 통합하는 방법을 알게 되었습니다. 특정 요구 사항에 맞게 코드를 사용자 정의할 수 있습니다. 최종 예제는 [**GitHub**](https://github.com/DHTMLX/vue-spreadsheet-demo)에서 확인할 수 있습니다.
