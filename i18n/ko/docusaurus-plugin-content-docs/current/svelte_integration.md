---
sidebar_label: Svelte와의 통합
title: Svelte 통합
description: DHTMLX JavaScript Spreadsheet 라이브러리의 Svelte 통합에 대한 문서를 확인하세요. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해보며, DHTMLX Spreadsheet의 30일 무료 평가판을 다운로드하세요.
---

# Svelte와의 통합 {#integration-with-svelte}

:::tip
이 문서를 읽기 전에 **Svelte**의 기본 개념과 패턴을 숙지하고 있어야 합니다. 지식을 복습하려면 [**Svelte 문서**](https://svelte.dev/)를 참조하세요.
:::

DHTMLX Spreadsheet는 **Svelte**와 호환됩니다. DHTMLX Spreadsheet를 **Svelte**와 함께 사용하는 방법에 대한 코드 예제를 준비했습니다. 자세한 내용은 [**GitHub 예제**](https://github.com/DHTMLX/svelte-spreadsheet-demo)를 참조하세요.

## 프로젝트 생성 {#creating-a-project}

:::info
새 프로젝트 생성을 시작하기 전에 [**Vite**](https://vite.dev/) (선택)와 [**Node.js**](https://nodejs.org/en/)를 설치하세요.
:::

**Svelte** JS 프로젝트를 생성하려면 다음 명령어를 실행하세요:

~~~json
npm create vite@latest
~~~

프로젝트 이름을 **my-svelte-spreadsheet-app**으로 지정하겠습니다.

### 의존성 설치 {#installation-of-dependencies}

앱 디렉토리로 이동합니다:

~~~json
cd my-svelte-spreadsheet-app
~~~

그런 다음 의존성을 설치하고 앱을 실행합니다. 패키지 관리자를 사용하세요:

- [**yarn**](https://yarnpkg.com/)을 사용하는 경우 다음 명령어를 실행합니다:

~~~jsx
yarn
yarn dev // 또는 yarn dev
~~~

- [**npm**](https://www.npmjs.com/)을 사용하는 경우 다음 명령어를 실행합니다:

~~~json
npm install
npm run dev
~~~

앱이 localhost에서 실행됩니다 (예: `http://localhost:3000`).

## Spreadsheet 생성 {#creating-spreadsheet}

이제 DHTMLX Spreadsheet 소스 코드를 가져와야 합니다. 먼저 앱을 중지하고 Spreadsheet 패키지를 설치합니다.

### 1단계. 패키지 설치 {#step-1-package-installation}

[**평가판 Spreadsheet 패키지**](how_to_start.md#installing-spreadsheet-via-npm-or-yarn)를 다운로드하고 README 파일의 단계를 따르세요. 평가판 Spreadsheet는 30일 동안만 사용할 수 있습니다.

### 2단계. 컴포넌트 생성 {#step-2-component-creation}

이제 애플리케이션에 Spreadsheet를 추가하기 위한 Svelte 컴포넌트를 생성해야 합니다. *src/* 디렉토리에 새 파일을 생성하고 이름을 *Spreadsheet.svelte*로 지정합니다.

#### 소스 파일 가져오기 {#importing-source-files}

*Spreadsheet.svelte* 파일을 열고 Spreadsheet 소스 파일을 가져옵니다. 참고:

- PRO 버전을 사용하고 로컬 폴더에서 Spreadsheet 패키지를 설치하는 경우 가져오기 경로는 다음과 같습니다:

~~~html title="Spreadsheet.svelte"
<script>
import { Spreadsheet } from 'dhx-spreadsheet-package';
import 'dhx-spreadsheet-package/codebase/spreadsheet.css';
</script>
~~~

사용하는 패키지에 따라 소스 파일이 축소될 수 있습니다. 이 경우 CSS 파일을 *spreadsheet.min.css*로 가져오고 있는지 확인하세요.

- Spreadsheet 평가판을 사용하는 경우 다음 경로를 지정합니다:

~~~html title="Spreadsheet.svelte"
<script>
import { Spreadsheet } from '@dhx/trial-spreadsheet';
import '@dhx/trial-spreadsheet/codebase/spreadsheet.min.css';
</script>
~~~

이 튜토리얼에서는 Spreadsheet **평가판** 구성 방법을 확인할 수 있습니다.

#### 컨테이너 설정 및 Spreadsheet 추가 {#setting-the-container-and-adding-spreadsheet}

페이지에 Spreadsheet를 표시하려면 Spreadsheet 컨테이너를 생성하고 해당 생성자를 사용하여 이 컴포넌트를 초기화해야 합니다:

~~~html {3,6,10-11,19} title="Spreadsheet.svelte"
<script>
    import { onMount, onDestroy } from "svelte";
    import { Spreadsheet } from "@dhx/trial-spreadsheet";
    import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css"

    let container; // Spreadsheet 컨테이너 초기화
    let spreadsheet;
    
    onMount(() => {
        // Spreadsheet 컴포넌트 초기화
        spreadsheet = new Spreadsheet(container, {});
    });

    onDestroy(() => {
        spreadsheet.destructor(); // Spreadsheet 소멸
    });
</script>

<div bind:this={container} class="widget"></div>
~~~

#### 스타일 추가 {#adding-styles}

Spreadsheet를 올바르게 표시하려면 프로젝트의 메인 css 파일에 Spreadsheet와 해당 컨테이너에 대한 중요한 스타일을 지정해야 합니다:

~~~css title="app.css"
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

Spreadsheet에 데이터를 추가하려면 데이터 세트를 제공해야 합니다. *src/* 디렉토리에 *data.js* 파일을 생성하고 데이터를 추가합니다:

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

            // 데이터가 있는 추가 셀
        ]
    }
}
~~~

그런 다음 *App.svelte* 파일을 열고, 데이터를 가져와서 새로 생성된 `<Spreadsheet/>` 컴포넌트에 **props**로 전달합니다:

~~~html {3,5,8} title="App.svelte"
<script>
    import Spreadsheet from "./Spreadsheet.svelte";
    import { getData } from "./data.js";

    const data = getData();
</script>

<Spreadsheet data={data} />
~~~

*Spreadsheet.svelte* 파일로 이동하여 [`parse()`](api/spreadsheet_parse_method.md) 메서드를 사용하여 전달된 **props**를 Spreadsheet에 적용합니다:

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

이제 Spreadsheet 컴포넌트를 사용할 준비가 되었습니다. 요소가 페이지에 추가되면 데이터와 함께 Spreadsheet를 초기화합니다. 필요한 구성 설정도 제공할 수 있습니다. 사용 가능한 속성의 전체 목록은 [Spreadsheet API 문서](api/overview/properties_overview.md)를 참조하세요.

#### 이벤트 처리 {#handling-events}

사용자가 Spreadsheet에서 작업을 수행하면 위젯이 이벤트를 호출합니다. 이러한 이벤트를 사용하여 작업을 감지하고 원하는 코드를 실행할 수 있습니다. [전체 이벤트 목록](api/overview/events_overview.md)을 확인하세요.

*Spreadsheet.svelte*를 열고 다음과 같이 `onMount()` 메서드를 완성합니다:

~~~html {8-11} title="Spreadsheet.svelte"
<script>
// ...
let spreadsheet;

onMount(() => {
    spreadsheet = new Spreadsheet(container, {})

    spreadsheet.events.on("afterFocusSet", function(cell){
        console.log("포커스가 셀에 설정됨 " + spreadsheet.selection.getSelectedCell());
        console.log(cell);
    });
});

onDestroy(() => {
    spreadsheet.destructor();
});
</script>

// ...
~~~

그 후 앱을 시작하면 페이지에 데이터가 로드된 Spreadsheet가 표시됩니다.

![샘플 데이터와 함께 Svelte 애플리케이션에서 초기화된 DHTMLX Spreadsheet](/img/integrations/trial_spreadsheet.png)

이제 DHTMLX Spreadsheet와 Svelte를 통합하기 위한 기본 설정이 완료되었습니다. 특정 요구 사항에 맞게 코드를 사용자 정의할 수 있습니다. 최종 예제는 [**GitHub**](https://github.com/DHTMLX/svelte-spreadsheet-demo)에서 찾을 수 있습니다.
