---
sidebar_label: Angular 통합
title: Angular 통합
description: DHTMLX JavaScript Spreadsheet 라이브러리의 Angular 통합에 대해 문서에서 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 실행해 보세요. DHTMLX Spreadsheet의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# Angular 통합 {#integration-with-angular}

:::tip
이 문서를 활용하려면 **Angular**의 기본 개념과 패턴에 익숙해야 합니다. 내용을 복습하려면 [**Angular 문서**](https://angular.dev/overview)를 참조하세요.
:::

DHTMLX Spreadsheet는 **Angular**와 호환됩니다. **Angular**에서 DHTMLX Spreadsheet를 사용하는 방법에 대한 코드 예제를 준비했습니다. 자세한 내용은 [**GitHub 예제**](https://github.com/DHTMLX/angular-spreadsheet-demo)를 참조하세요.

## 프로젝트 생성 {#creating-a-project}

:::info
새 프로젝트를 시작하기 전에 [**Angular CLI**](https://angular.dev/tools/cli)와 [**Node.js**](https://nodejs.org/en/)를 설치하세요.
:::

Angular CLI를 사용하여 *my-angular-spreadsheet-app* 프로젝트를 새로 생성합니다. 다음 명령어를 실행하세요:

~~~json
ng new my-angular-spreadsheet-app
~~~

:::note
이 가이드를 따르려면 새 Angular 앱을 생성할 때 Server-Side Rendering (SSR)과 Static Site Generation (SSG/Prerendering)을 비활성화하세요.
:::

위 명령어는 필요한 모든 도구를 설치하므로 추가 명령어를 실행할 필요가 없습니다.

### 의존성 설치 {#installation-of-dependencies}

그런 다음 앱 디렉터리로 이동합니다:

~~~json
cd my-angular-spreadsheet-app
~~~

의존성을 설치하고 개발 서버를 시작합니다. 이를 위해 [**yarn**](https://yarnpkg.com/) 패키지 매니저를 사용합니다:

~~~json
yarn
yarn start
~~~

앱이 localhost에서 실행됩니다(예: `http://localhost:3000`).

## Spreadsheet 생성 {#creating-spreadsheet}

이제 DHTMLX Spreadsheet 소스 코드를 가져와야 합니다. 먼저 앱을 중지하고 Spreadsheet 패키지를 설치합니다.

### 1단계. 패키지 설치 {#step-1-package-installation}

[**Spreadsheet 트라이얼 패키지**](how_to_start.md#installing-spreadsheet-via-npm-or-yarn)를 다운로드하고 README 파일의 단계를 따르세요. 트라이얼 Spreadsheet는 30일 동안만 사용할 수 있습니다.
  
### 2단계. 컴포넌트 생성 {#step-2-component-creation}

이제 애플리케이션에 Spreadsheet를 추가할 Angular 컴포넌트를 만들어야 합니다. *src/app/* 디렉터리에 *spreadsheet* 폴더를 만들고, 그 안에 *spreadsheet.component.ts*라는 새 파일을 추가합니다. 그런 다음 아래에 설명된 단계를 완료합니다.

#### 소스 파일 가져오기 {#importing-source-files}

파일을 열고 Spreadsheet 소스 파일을 가져옵니다. 참고 사항:

- PRO 버전을 사용하고 로컬 폴더에서 Spreadsheet 패키지를 설치하는 경우 가져오기 경로는 다음과 같습니다:

~~~jsx
import { Spreadsheet } from 'dhx-spreadsheet-package';
~~~

- Spreadsheet 트라이얼 버전을 사용하는 경우 다음 경로를 지정합니다:

~~~jsx
import { Spreadsheet } from '@dhx/trial-spreadsheet';
~~~

이 튜토리얼에서는 Spreadsheet **트라이얼** 버전 구성 방법을 설명합니다.

#### 컨테이너 설정 및 Spreadsheet 초기화 {#set-the-container-and-initialize-spreadsheet}

페이지에 Spreadsheet를 표시하려면 컴포넌트를 렌더링할 컨테이너를 설정하고 해당 생성자를 사용하여 Spreadsheet를 초기화해야 합니다:

~~~jsx {1,8,12-13,18-19} title="spreadsheet.component.ts"
import { Spreadsheet } from "@dhx/trial-spreadsheet";
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'spreadsheet', // "app.component.ts" 파일에서 <spreadsheet/>로 사용되는 템플릿 이름
    styleUrls: ['./spreadsheet.component.css'], // css 파일 포함
    template: `<div #container class = "widget"></div>`
})

export class SpreadsheetComponent implements OnInit, OnDestroy {
    // Spreadsheet 컨테이너 초기화
    @ViewChild('container', { static: true }) spreadsheet_container!: ElementRef;

    private _spreadsheet!: Spreadsheet;

    ngOnInit() {
        // Spreadsheet 컴포넌트 초기화
        this._spreadsheet = new Spreadsheet( this.spreadsheet_container.nativeElement, {});
    }

    ngOnDestroy() {
        this._spreadsheet.destructor(); // Spreadsheet 소멸
    }
}
~~~

#### 스타일 추가 {#adding-styles}

Spreadsheet를 올바르게 표시하려면 해당 스타일을 제공해야 합니다. 이를 위해 *src/app/spreadsheet/* 디렉터리에 *spreadsheet.component.css* 파일을 만들고 Spreadsheet와 컨테이너에 필요한 스타일을 지정합니다:

~~~css title="spreadsheet.component.css"
/* Spreadsheet 스타일 가져오기 */
@import "@dhx/trial-spreadsheet/codebase/spreadsheet.min.css";

/* 초기 페이지 스타일 지정 */
html,
body {
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

Spreadsheet에 데이터를 추가하려면 데이터 세트를 제공해야 합니다. *src/app/spreadsheet/* 디렉터리에 *data.ts* 파일을 만들고 데이터를 추가합니다:

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

            // 더 많은 데이터 셀
        ]
    }
}
~~~

그런 다음 *spreadsheet.component.ts* 파일을 엽니다. 데이터 파일을 가져오고 아래와 같이 `ngOnInit()` 메서드 내에서 [`parse()`](api/spreadsheet_parse_method.md) 메서드를 사용하여 적용합니다.

~~~jsx {2,18,21} title="spreadsheet.component.ts"
import { Spreadsheet } from "@dhx/trial-spreadsheet";
import { getData } from "./data"; // 데이터 가져오기
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
        const data = getData(); // 데이터 속성 초기화
        this._spreadsheet = new Spreadsheet( this.spreadsheet_container.nativeElement, {});
        
        this._spreadsheet.parse(data);
    }

    ngOnDestroy() {
        this._spreadsheet.destructor();
    }
}
~~~

이제 Spreadsheet 컴포넌트를 사용할 준비가 되었습니다. 요소가 페이지에 추가되면 Spreadsheet가 데이터와 함께 초기화됩니다. 필요한 구성 설정도 제공할 수 있습니다. [Spreadsheet API 문서](api/overview/events_overview.md)에서 사용 가능한 속성의 전체 목록을 확인하세요.

#### 이벤트 처리 {#handling-events}

사용자가 Spreadsheet에서 작업을 수행하면 widget이 이벤트를 발생시킵니다. 이러한 이벤트를 사용하여 작업을 감지하고 원하는 코드를 실행할 수 있습니다. [이벤트 전체 목록](api/overview/events_overview.md)을 참조하세요.

*spreadsheet.component.ts* 파일을 열고 `ngOnInit()` 메서드를 다음과 같이 완성합니다:

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

### 3단계. 앱에 Spreadsheet 추가 {#step-3-adding-spreadsheet-into-the-app}

`SpreadsheetComponent` 컴포넌트를 앱에 추가하려면 *src/app/app.component.ts* 파일을 열고 기본 코드를 다음으로 교체합니다:

~~~jsx {5} title="app.component.ts"
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<spreadsheet/>` // "spreadsheet.component.ts" 파일에서 생성된 템플릿
})
export class AppComponent {
    name = "";
}
~~~

그런 다음 *src/app/* 디렉터리에 *app.module.ts* 파일을 만들고 아래와 같이 `SpreadsheetComponent`를 지정합니다:

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

마지막 단계로 *src/main.ts* 파일을 열고 기존 코드를 다음으로 교체합니다:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

그런 다음 앱을 시작하면 페이지에 데이터가 로드된 Spreadsheet를 확인할 수 있습니다.

![Angular 애플리케이션에서 샘플 데이터로 초기화된 DHTMLX Spreadsheet](/img/integrations/trial_spreadsheet.png)

이제 DHTMLX Spreadsheet를 Angular와 통합하는 방법을 알게 되었습니다. 요구 사항에 맞게 코드를 커스터마이징할 수 있습니다. 최종 예제는 [**GitHub**](https://github.com/DHTMLX/angular-spreadsheet-demo)에서 확인할 수 있습니다.
