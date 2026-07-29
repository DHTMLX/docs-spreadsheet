---
sidebar_label: 내장 테마 구성
title: 내장 테마 구성
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 테마를 구성하는 방법을 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 탐색하고, 코드 예제와 라이브 데모를 직접 사용해 보거나, DHTMLX Spreadsheet 30일 무료 평가판을 다운로드하십시오.
---

# 내장 테마 구성 {#configuring-built-in-themes}

## 모든 테마 구성 {#configuring-all-themes}

[기본](/themes/#light-theme-default) 테마의 CSS 변수에는 색상 체계 변수가 포함되어 있습니다.

~~~css
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
~~~

:::tip
색상 값은 [HSL](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl) 형식으로 지정됩니다.

- *hue(색조)*는 색상 휠의 각도(0~360)입니다. 0은 빨강, 120은 초록, 240은 파랑입니다.
- *saturation(채도)*은 퍼센트 값입니다. 0%는 완전히 무채색(회색), 100%는 완전히 포화된 상태입니다.
- *lightness(명도)*는 퍼센트 값입니다. 100%는 흰색, 0%는 검정, 50%는 "보통"입니다.
:::

이러한 CSS 변수 덕분에 색상 체계가 자동으로 계산됩니다. 즉, root에서 색상 체계 값을 변경하면 `"contrast-light"`, `"dark"`, `"contrast-dark"` 테마의 값이 실시간으로 자동 재계산됩니다.

예를 들어, 다음과 같이 모든 Spreadsheet 테마의 기본 색상을 한 번에 재정의할 수 있습니다.

~~~html
<style>
    :root {
        --dhx-h-primary: 0;
        --dhx-l-primary: 30%;
    }
</style>
~~~

또한, 기본 색상에서 계산된 변수 값도 이에 맞게 재계산됩니다. 예를 들어, 포커스 색상의 값은 다음과 같이 계산됩니다.

~~~jsx
--dhx-color-focused: hsl(calc(var(--dhx-h-primary) + 10), var(--dhx-s-primary), var(--dhx-l-primary));
~~~

## 개별 테마 구성 {#configuring-a-separate-theme}

특정 [Spreadsheet 테마](/themes/)에 대해 일부 색상 값을 재정의하려면 `data-dhx-theme` 속성에서 재정의하십시오.

~~~html {1-27,39}
<style>
    [data-dhx-theme='light'] {
        /* 테두리 */
        --dhx-border-color: #ced4da;
        /* 테두리 끝 */

        /* 색상 체계 */
        --dhx-h-primary: 210;
        --dhx-s-primary: 30%;
        --dhx-l-primary: 20%;

        --dhx-h-secondary: 185;
        --dhx-s-secondary: 5%;
        --dhx-l-secondary: 50%;

        --dhx-h-danger: 6;
        --dhx-s-danger: 78%;
        --dhx-l-danger: 57%;

        --dhx-h-success: 168;
        --dhx-s-success: 77%;
        --dhx-l-success: 42%;

        --dhx-l-background: 98%;
        /* 색상 체계 끝 */
    }
</style>

<script>
    const spreadsheet = new dhx.Spreadsheet("spreadsheet",{});
    
    dhx.setTheme("light");
</script>
~~~
