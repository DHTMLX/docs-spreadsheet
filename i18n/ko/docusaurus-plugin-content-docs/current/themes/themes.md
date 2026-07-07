---
sidebar_label: 내장 테마
title: 내장 테마
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 내장 테마에 대해 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 직접 사용해 보거나, DHTMLX Spreadsheet 30일 무료 평가판을 다운로드하십시오.
---

# 내장 테마 {#built-in-themes}

DHTMLX Spreadsheet 라이브러리는 4가지 사전 정의된 테마를 제공합니다.

- [라이트 테마](#light-theme-default) ("light") - 기본값으로 사용
- [다크 테마](#dark-theme) ("dark")
- [라이트 고대비 테마](#light-high-contrast-theme) ("contrast-light")
- [다크 고대비 테마](#dark-high-contrast-theme) ("contrast-dark")

Spreadsheet 테마는 국제 표준에 따라 개발되었습니다. 고대비 테마는 시각 장애가 있는 사용자를 돕습니다. 자세한 내용은 [접근성 지원](https://docs.dhtmlx.com/suite/common_features/accessibility_support/) 문서를 참조하십시오.

아래 예제에서 모든 테마를 직접 사용해 볼 수 있습니다.

<iframe src="https://snippet.dhtmlx.com/t6rspqai?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## 라이트 테마 (기본값) {#light-theme-default}

![흰색 배경과 어두운 텍스트가 있는 DHTMLX Spreadsheet 기본 라이트 테마](/img/themes/default_theme.png)

기본 `"light"` 테마는 아래 나열된 CSS 변수를 사용하여 구성됩니다.

~~~css
:root, [data-dhx-theme] {
    /* 기본 색상 */
    --dhx-color-white: #fff;
    --dhx-color-gray-100: #e6e6e6;
    --dhx-color-gray-200: #ccc;
    --dhx-color-gray-300: #b3b3b3;
    --dhx-color-gray-400: #999;
    --dhx-color-gray-500: #808080;
    --dhx-color-gray-600: #666;
    --dhx-color-gray-700: #4d4d4d;
    --dhx-color-gray-800: #333;
    --dhx-color-gray-900: #1a1a1a;
    --dhx-color-black: #000;
    /* 기본 색상 끝 */

    /* 폰트 */
    --dhx-font-family: "Roboto", Arial, Tahoma, Verdana, sans-serif;

    --dhx-font-weight-regular: 400; 
    --dhx-font-weight-medium: 500; 
    --dhx-font-weight-bold: 700;

    --dhx-font-size-small: 12px;
    --dhx-font-size-normal: 14px;
    --dhx-font-size-large: 16px;

    --dhx-line-height-small: 16px;
    --dhx-line-height-normal: 20px;
    --dhx-line-height-large: 24px;

    --dhx-font-color-primary: rgba(0, 0, 0, .7);
    --dhx-font-color-secondary: rgba(0, 0, 0, .5);
    --dhx-font-color-additional: rgba(0, 0, 0, .3);
    --dhx-font-color-disabled: rgba(0, 0, 0, .3);

    --dhx-font-color-contrast: var(--dhx-color-white);
    --dhx-font-color-contrast-disabled: var(--dhx-color-white);
    /* 폰트 끝 */

    /* 아이콘 */
    --dhx-icon-size-small: 16px;
    --dhx-icon-size-normal: 20px;
    --dhx-icon-size-large: 24px;
    /* 아이콘 끝 */

    /* 테두리 */
    --dhx-border-width: 1px;
    --dhx-border-radius: 2px;
    --dhx-border-color: rgba(0, 0, 0, .1);
    --dhx-border-color-focused: rgba(0, 0, 0, .3);
    --dhx-border: var(--dhx-border-width) solid var(--dhx-border-color);
    /* 테두리 끝 */

    /* 테두리 그림자 */
    --dhx-border-shadow-small: 0 2px 4px rgba(0, 0, 0, .15);
    --dhx-border-shadow-normal: 0 2px 5px rgba(0, 0, 0, .3);
    --dhx-border-shadow-large: 0px 1px 6px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1);

    --dhx-shadow-input-size: inset 0px 0px 0px var(--dhx-border-width);
    /* 테두리 그림자 끝 */

    /* 전환 효과 */
    --dhx-transition-time: 0.2s;
    --dhx-transition-in: ease-in;
    --dhx-transition-out: ease-out;
    /* 전환 효과 끝 */

    /* z-index */
    --dhx-z-index-up: 1;
    --dhx-z-index-force-up: 10;
    --dhx-z-index-overlay: 999;
    --dhx-z-index-overlay-total: 10000000;
    /* z-index 끝 */

    /* 서비스 색상 체계 전용 */
    --dhx-l-contrast-offset: 0%; /* 명도 대비 테마 오프셋 */
    --dhx-l-h-offset: 10%; /* 명도 호버 오프셋 */
    --dhx-s-d-offset: 30%; /* 채도 비활성화 오프셋 */
    --dhx-l-d: 70%; /* 명도 비활성화 값 */
    --dhx-a-l-h: .15; /* 알파 라이트 호버 값 */
    --dhx-a-l-a: .3; /* 알파 라이트 활성화 값 */
    /* 서비스 색상 체계 전용 끝 */

    /* 색상 체계 */
    --dhx-h-primary: 200;
    --dhx-s-primary: 98%;
    --dhx-l-primary: 40%;

    --dhx-h-secondary: 0;
    --dhx-s-secondary: 0%;
    --dhx-l-secondary: 30%;

    --dhx-h-danger: 0;
    --dhx-s-danger: 100%;
    --dhx-l-danger: 60%;

    --dhx-h-success: 154;
    --dhx-s-success: 89%;
    --dhx-l-success: 37%;

    --dhx-h-background: 0;
    --dhx-s-background: 0%;
    --dhx-l-background: 100%;
    --dhx-a-background: 0.5;
    /* 색상 체계 끝 */

    /* 테마 색상 */
    --dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
    --dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) - 3%));
    --dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) - 10%));
    --dhx-background-overlay: hsla(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) * -1), var(--dhx-a-background));
    --dhx-background-overlay-light: rgba(255, 255, 255, .5);

    --dhx-tooltip-background-dark: var(--dhx-color-gray-800);
    --dhx-tooltip-background-light: var(--dhx-color-white);

    --dhx-color-focused: hsl(calc(var(--dhx-h-primary) + 10), var(--dhx-s-primary), var(--dhx-l-primary));

    --dhx-color-primary: hsl(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) - var(--dhx-l-contrast-offset)));
    --dhx-color-primary-hover: hsl(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
    --dhx-color-primary-active: var(--dhx-color-primary);
    --dhx-color-primary-disabled: hsl(var(--dhx-h-primary), calc(var(--dhx-s-primary) - var(--dhx-s-d-offset)), var(--dhx-l-d));
    --dhx-color-primary-light-hover: hsla(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
    --dhx-color-primary-light-active: hsla(var(--dhx-h-primary), var(--dhx-s-primary), calc(var(--dhx-l-primary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));

    --dhx-color-secondary: hsl(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) - var(--dhx-l-contrast-offset)));
    --dhx-color-secondary-hover: hsl(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
    --dhx-color-secondary-active: var(--dhx-color-secondary);
    --dhx-color-secondary-disabled: hsl(var(--dhx-h-secondary), calc(var(--dhx-s-secondary) - var(--dhx-s-d-offset)), var(--dhx-l-d));
    --dhx-color-secondary-light-hover: hsla(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
    --dhx-color-secondary-light-active: hsla(var(--dhx-h-secondary), var(--dhx-s-secondary), calc(var(--dhx-l-secondary) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));

    --dhx-color-danger: hsl(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) - var(--dhx-l-contrast-offset)));
    --dhx-color-danger-hover: hsl(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
    --dhx-color-danger-active: var(--dhx-color-danger);
    --dhx-color-danger-disabled: hsl(var(--dhx-h-danger), calc(var(--dhx-s-danger) - var(--dhx-s-d-offset)), var(--dhx-l-d));
    --dhx-color-danger-light-hover: hsla(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
    --dhx-color-danger-light-active: hsla(var(--dhx-h-danger), var(--dhx-s-danger), calc(var(--dhx-l-danger) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));

    --dhx-color-success: hsl(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) - var(--dhx-l-contrast-offset)));
    --dhx-color-success-hover: hsl(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) + var(--dhx-l-h-offset) - var(--dhx-l-contrast-offset)));
    --dhx-color-success-active: var(--dhx-color-success);
    --dhx-color-success-disabled: hsl(var(--dhx-h-success), calc(var(--dhx-s-success) - var(--dhx-s-d-offset)), var(--dhx-l-d));
    --dhx-color-success-light-hover: hsla(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-h));
    --dhx-color-success-light-active: hsla(var(--dhx-h-success), var(--dhx-s-success), calc(var(--dhx-l-success) - var(--dhx-l-contrast-offset)), var(--dhx-a-l-a));
    /* 테마 색상 끝 */

    /* DHTMLX Toolbar 서비스 변수*/
    --dhx-s-toolbar-background: var(--dhx-background-primary);
    --dhx-s-toolbar-button-background-hover: rgba(0, 0, 0, .07);
    --dhx-s-toolbar-button-background-active: rgba(0, 0, 0, .15);
    /* DHTMLX Toolbar 서비스 변수 끝 */

    /* DHTMLX Grid 서비스 변수*/
    --dhx-s-grid-header-background: var(--dhx-background-secondary);
    --dhx-s-grid-selection-background: var(--dhx-color-gray-700);
    /* DHTMLX Grid 서비스 변수 끝*/

    /* DHTMLX Calendar 서비스 변수*/
    --dhx-s-calendar-muffled: .6;
    /* DHTMLX Calendar 서비스 변수 끝*/

    /* DHTMLX Slider 서비스 변수*/
    --dhx-s-tick-font-size: calc(var(--dhx-font-size-small) / 1.2);
    /* DHTMLX Slider 서비스 변수 끝*/
}
~~~

## 라이트 고대비 테마 {#light-high-contrast-theme}

![접근성을 위해 더 큰 폰트와 강한 테두리가 있는 DHTMLX Spreadsheet 라이트 고대비 테마](/img/themes/light_high_contrast_theme.png)

`"contrast-light"` 테마는 [루트 CSS 변수](#light-theme-default)와 아래 나열된 변수를 모두 사용하여 구성됩니다.

~~~css
[data-dhx-theme='contrast-light'] {
    /* 폰트 */
    --dhx-font-size-normal: 16px;
    --dhx-font-size-small: var(--dhx-font-size-normal);

    --dhx-font-color-secondary: rgba(0, 0, 0, .66);
    --dhx-font-color-additional: var(--dhx-font-color-secondary);
    /* 폰트 끝 */

    /* 테두리 */
    --dhx-border-color: rgba(0, 0, 0, .4);
    /* 테두리 끝 */

    /* 색상 체계 */
    --dhx-l-contrast-offset: 14%;
    /* 색상 체계 끝 */

    /* DHTMLX Toolbar 서비스 변수*/
    --dhx-s-toolbar-background: var(--dhx-background-primary);
    --dhx-s-toolbar-button-background-hover: rgba(0, 0, 0, .07);
    --dhx-s-toolbar-button-background-active: rgba(0, 0, 0, .15);
    /* DHTMLX Toolbar 서비스 변수 끝 */

    /* DHTMLX Grid 서비스 변수*/
    --dhx-s-grid-header-background: var(--dhx-background-secondary);
    --dhx-s-grid-selection-background: var(--dhx-color-gray-700);
    /* DHTMLX Grid 서비스 변수 끝*/
    
    /* DHTMLX Calendar 서비스 변수*/
    --dhx-s-calendar-muffled: .8;
    /* DHTMLX Calendar 서비스 변수 끝*/

    /* DHTMLX Slider 서비스 변수*/
    --dhx-s-tick-font-size: var(--dhx-font-size-small);
    /* DHTMLX Slider 서비스 변수 끝*/
}
~~~

## 다크 테마 {#dark-theme}

![저조도 환경을 위한 어두운 배경과 밝은 텍스트가 있는 DHTMLX Spreadsheet 다크 테마](/img/themes/dark_theme.png)

`"dark"` 테마는 [루트 CSS 변수](#light-theme-default)와 아래 나열된 변수를 모두 사용하여 구성됩니다.

~~~css
[data-dhx-theme='dark'] {
    /* 폰트 */
    --dhx-font-color-primary: var(--dhx-color-white);
    --dhx-font-color-secondary: rgba(255, 255, 255, .7);
    --dhx-font-color-additional: rgba(255, 255, 255, .5);
    --dhx-font-color-disabled: rgba(255, 255, 255, .5);
    --dhx-font-color-contrast: var(--dhx-color-white);
    --dhx-font-color-contrast-disabled: var(--dhx-font-color-disabled);
    /* 폰트 끝 */

    /* 테두리 */
    --dhx-border-color: rgba(255, 255, 255, 0.3);
    --dhx-border-color-focused: rgba(255, 255, 255, 0.5);
    /* 테두리 끝 */

    /* 색상 체계 */
    --dhx-l-secondary: 60%; /* 명도 대비 테마 오프셋 */

    --dhx-h-background: 226;
    --dhx-s-background: 12%;
    --dhx-l-background: 20%;
    /* 색상 체계 끝 */

    /* 테마 색상 */
    --dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
    --dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 8%));
    --dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 12%));
    /* 테마 색상 끝 */

    /* DHTMLX Toolbar 서비스 변수*/
    --dhx-s-toolbar-background: var(--dhx-color-black);
    --dhx-s-toolbar-button-background-hover: rgba(255, 255, 255, .07);
    --dhx-s-toolbar-button-background-active: rgba(255, 255, 255, .15);
    /* DHTMLX Toolbar 서비스 변수 끝 */

    /* DHTMLX Grid 서비스 변수*/
    --dhx-s-grid-header-background: #212329;
    --dhx-s-grid-selection-background: var(--dhx-color-gray-100);
    /* DHTMLX Grid 서비스 변수 끝*/
    
    /* DHTMLX Calendar 서비스 변수*/
    --dhx-s-calendar-muffled: .6;
    /* DHTMLX Calendar 서비스 변수 끝*/

    /* DHTMLX Slider 서비스 변수*/
    --dhx-s-tick-font-size: calc(var(--dhx-font-size-small) / 1.2);
    /* DHTMLX Slider 서비스 변수 끝*/
}
~~~ 

## 다크 고대비 테마 {#dark-high-contrast-theme}

![접근성을 위해 향상된 텍스트 대비가 있는 DHTMLX Spreadsheet 다크 고대비 테마](/img/themes/dark_contrast.png)

`"contrast-dark"` 테마는 [루트 CSS 변수](#light-theme-default)와 아래 나열된 변수를 모두 사용하여 구성됩니다.

~~~css
[data-dhx-theme='contrast-dark'] {
    /* 폰트 */
    --dhx-font-size-normal: 16px;
    --dhx-font-size-small: var(--dhx-font-size-normal);

    --dhx-font-color-primary: var(--dhx-color-white);
    --dhx-font-color-secondary: rgba(255, 255, 255, 0.86);
    --dhx-font-color-additional: var(--dhx-font-color-secondary);
    --dhx-font-color-disabled: rgba(255, 255, 255, .5);
    --dhx-font-color-contrast: var(--dhx-color-black);
    --dhx-font-color-contrast-disabled: var(--dhx-font-color-disabled);
    /* 폰트 끝 */

    /* 테두리 */
    --dhx-border-color: rgba(255, 255, 255, 0.5);
    --dhx-border-color-focused: rgba(255, 255, 255, 0.7);
    /* 테두리 끝 */

    /* 색상 체계 */
    --dhx-l-contrast-offset: -12%; /* 명도 대비 테마 오프셋 */

    --dhx-l-secondary: 60%;

    --dhx-h-background: 226;
    --dhx-s-background: 12%;
    --dhx-l-background: 20%;
    /* 색상 체계 끝 */

    /* 테마 색상 */
    --dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
    --dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 8%));
    --dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 12%));
    /* 테마 색상 끝 */

    /* DHTMLX Toolbar 서비스 변수*/
    --dhx-s-toolbar-background: var(--dhx-color-black);
    --dhx-s-toolbar-button-background-hover: rgba(255, 255, 255, .07);
    --dhx-s-toolbar-button-background-active: rgba(255, 255, 255, .15);
    /* DHTMLX Toolbar 서비스 변수 끝 */

    /* DHTMLX Grid 서비스 변수*/
    --dhx-s-grid-header-background: #212329;
    --dhx-s-grid-selection-background: var(--dhx-color-gray-100);
    /* DHTMLX Grid 서비스 변수 끝*/

    /* DHTMLX Calendar 서비스 변수*/
    --dhx-s-calendar-muffled: .8;
    /* DHTMLX Calendar 서비스 변수 끝*/

    /* DHTMLX Slider 서비스 변수*/
    --dhx-s-tick-font-size: var(--dhx-font-size-small);
    /* DHTMLX Slider 서비스 변수 끝*/
}
~~~

## Spreadsheet 전용 스타일 {#spreadsheet-specific-styles}

Spreadsheet 컴포넌트에 특화된 변수 목록은 다음과 같습니다.

- **기본 라이트** 테마 및 **라이트 고대비** 스킨의 경우:

~~~css
:root, [data-dhx-theme],[data-dhx-theme='contrast-light'] {
    
    --dhx-spreadsheet-range-background-1: #8be3c9;
    --dhx-spreadsheet-range-background-2: #f6f740;
    --dhx-spreadsheet-range-background-3: #f7b69e;
    --dhx-spreadsheet-range-background-4: #e0fcff;
    --dhx-spreadsheet-range-background-5: #8fe9ff;
    --dhx-spreadsheet-range-background-6: #d8ffa6;
    --dhx-spreadsheet-range-background-7: #e4e4e4;
    --dhx-spreadsheet-range-background-8: #ecb6ff;

    --dhx-spreadsheet-range-color-1: #00815a;
    --dhx-spreadsheet-range-color-2: #bfc000;
    --dhx-spreadsheet-range-color-3: #c55933;
    --dhx-spreadsheet-range-color-4: #0cc1d6;
    --dhx-spreadsheet-range-color-5: #0080a3;
    --dhx-spreadsheet-range-color-6: #529a0a;
    --dhx-spreadsheet-range-color-7: #6d767b;
    --dhx-spreadsheet-range-color-8: #ba38e7;

}
~~~

- **다크** 및 **다크 고대비** 테마의 경우:

~~~css
[data-dhx-theme='contrast-dark'],
[data-dhx-theme='dark'] {
    --dhx-spreadsheet-range-background-1: #00815a;
    --dhx-spreadsheet-range-background-2: #bfc000;
    --dhx-spreadsheet-range-background-3: #c55933;
    --dhx-spreadsheet-range-background-4: #0cc1d6;
    --dhx-spreadsheet-range-background-5: #0080a3;
    --dhx-spreadsheet-range-background-6: #529a0a;
    --dhx-spreadsheet-range-background-7: #6d767b;
    --dhx-spreadsheet-range-background-8: #ba38e7;

    --dhx-spreadsheet-range-color-1: #8be3c9;
    --dhx-spreadsheet-range-color-2: #f6f740;
    --dhx-spreadsheet-range-color-3: #f7b69e;
    --dhx-spreadsheet-range-color-4: #e0fcff;
    --dhx-spreadsheet-range-color-5: #8fe9ff;
    --dhx-spreadsheet-range-color-6: #d8ffa6;
    --dhx-spreadsheet-range-color-7: #e4e4e4;
    --dhx-spreadsheet-range-color-8: #ecb6ff;

}
~~~

## 테마 설정 {#setting-themes}

내장 Spreadsheet 테마나 [커스텀](themes/custom_theme.md) 테마를 적용하려면 아래 설명된 방법 중 하나를 사용하십시오.

### `data-dhx-theme` 속성 사용 {#using-the-data-dhx-theme-attribute}

다음 중 하나를 선택하십시오.

- 선택한 컨테이너에 `data-dhx-theme` 속성 설정:

~~~html title="index.html"
<!-- 컴포넌트 컨테이너 -->
<div data-dhx-theme="dark" style="height: 100%" id="spreadsheet"></div>
~~~

- HTML 요소(예: `documentElement`)에 `data-dhx-theme` 속성 설정:

~~~jsx title="index.js"
document.documentElement.setAttribute("data-dhx-theme", "dark");
~~~

### `dhx.setTheme()` 메서드 사용 {#using-the-dhxsettheme-method}

`dhx.setTheme()` 메서드는 다음 파라미터를 받습니다.

- `theme: string` - (필수) 테마 이름. 다음 중 하나일 수 있습니다.
    - Spreadsheet 테마 이름: `"light" | "contrast-light" | "dark" | "contrast-dark"`
    - [커스텀 테마](themes/custom_theme.md) 이름
    - `"light"` - 기본값
- `container: string | HTMLElement` - (선택) 테마를 적용할 컨테이너. 다음 중 하나일 수 있습니다.
    - HTMLElement
    - 컨테이너 ID 또는 Layout 셀 ID를 가진 문자열 값
    - `document.documentElement` - 기본값

아래 예제는 `dhx.setTheme()` 메서드를 사용하는 방법을 보여줍니다.

- body 또는 컨테이너에 테마 설정

~~~html 
<div id="container"></div>
<div>Other content</div>

<script>
    new dhx.Spreadsheet("container");

    dhx.setTheme("dark"); // body에 "dark" 테마 적용
    //또는
    // "container" id를 가진 컨테이너에 "dark" 테마 적용
    dhx.setTheme("dark", "container"); 
</script>
~~~

- HTMLElement로 지정된 컨테이너에 테마 설정

~~~html 
<div id="container-1"></div>
<div>Other content</div>

<script>
    new dhx.Spreadsheet("container-1");
    
    const container = document.getElementById("container-1");
    // HTMLElement로 지정된 컨테이너에 "dark" 테마 적용
    dhx.setTheme("dark", container); 
</script>
~~~

**관련 샘플:**

- [Spreadsheet. 라이트, 다크, 라이트 고대비, 다크 고대비 테마 (스킨)](https://snippet.dhtmlx.com/t6rspqai?tag=spreadsheet)
- [Spreadsheet. 커스텀 테마 (스킨)](https://snippet.dhtmlx.com/59nt1rcb?tag=spreadsheet)
