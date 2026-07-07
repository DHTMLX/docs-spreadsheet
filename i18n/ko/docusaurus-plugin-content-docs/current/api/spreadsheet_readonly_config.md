---
sidebar_label: readonly
title: readonly 설정
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 readonly 설정에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. 또한 DHTMLX Spreadsheet 30일 무료 평가판을 다운로드할 수 있습니다.
---

# readonly

### 설명 {#description}

@short: 선택 사항. 읽기 전용 모드를 활성화하거나 비활성화합니다

### 사용법 {#usage}

~~~jsx
readonly?: boolean;
~~~

### 기본값 {#default-config}

~~~jsx
readonly: false
~~~

### 예제 {#example}

~~~jsx {2}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {
  readonly: true,
  // 다른 설정 매개변수
});
~~~

**관련 문서:**
- [구성](configuration.md#read-only-mode)
- [커스터마이징](customization.md#custom-read-only-mode)

**관련 예제:** [Spreadsheet. Readonly](https://snippet.dhtmlx.com/2w959gx2)


