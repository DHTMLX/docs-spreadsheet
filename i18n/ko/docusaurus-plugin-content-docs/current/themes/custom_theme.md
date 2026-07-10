---
sidebar_label: 커스텀 테마
title: 커스텀 테마
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 커스텀 테마를 만드는 방법을 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 직접 사용해 보거나, DHTMLX Spreadsheet 30일 무료 평가판을 다운로드하십시오.
---

# 커스텀 테마 {#custom-theme}

기본 Spreadsheet 테마가 프로젝트에 맞지 않는 경우 직접 색상 테마를 구성할 수 있습니다.
아래 스니펫에서 **커스텀 라이트** 및 **커스텀 다크** 테마를 확인하십시오.

<iframe src="https://snippet.dhtmlx.com/59nt1rcb?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

커스텀 테마를 만들려면 다음과 같이 내부 CSS 변수 값을 재정의하십시오.

~~~html
<style>
    [data-dhx-theme='custom-theme-dark'] {
        /* 폰트 */
        --dhx-font-color-primary: var(--dhx-color-gray-200);
        --dhx-font-color-secondary: var(--dhx-color-gray-500);
        --dhx-font-color-additional: var(--dhx-color-gray-500);
        --dhx-font-color-disabled: var(--dhx-color-gray-800);
        --dhx-font-color-contrast: var(--dhx-color-black);
        /* 폰트 끝 */

        /* 테두리 */
        --dhx-border-color: #007a99;
        /* 테두리 끝 */

        /* 색상 체계 */
        --dhx-h-primary: 45;
        --dhx-s-primary: 100%;
        --dhx-l-primary: 35%;

        --dhx-h-secondary: 185;
        --dhx-s-secondary: 5%;
        --dhx-l-secondary: 50%;

        --dhx-h-danger: 330;
        --dhx-s-danger: 65%;
        --dhx-l-danger: 50%;

        --dhx-h-success: 175;
        --dhx-s-success: 60%;
        --dhx-l-success: 40%;

        --dhx-h-background: 190;
        --dhx-s-background: 100%;
        --dhx-l-background: 10%;
        /* 색상 체계 끝 */

        /* 테마 색상 */
        --dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
        --dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 8%));
        --dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 12%));
        /* 테마 색상 끝 */

        /* DHTMLX Grid 서비스 변수*/
        --dhx-s-grid-header-background: #002229;
        --dhx-s-grid-selection-background: var(--dhx-color-gray-100);
        /* DHTMLX Grid 서비스 변수 끝*/

        /* DHTMLX Toolbar 서비스 변수*/
        --dhx-s-toolbar-background: #002229;
        /* DHTMLX Toolbar 서비스 변수 끝 */

        /* DHTMLX Spreadsheet 서비스 변수 */
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
        /* DHTMLX Spreadsheet 서비스 변수 끝 */
    }
</style>

<script>
    const spreadsheet = new dhx.Spreadsheet("spreadsheet",{});
    
    dhx.setTheme("custom-theme-dark");
</script>
~~~

**관련 샘플:** [Spreadsheet. 커스텀 테마 (스킨)](https://snippet.dhtmlx.com/59nt1rcb?mode=wide)
