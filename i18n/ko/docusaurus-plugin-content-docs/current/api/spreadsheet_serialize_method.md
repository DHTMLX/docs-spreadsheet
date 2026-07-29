---
sidebar_label: serialize()
title: serialize 메서드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 serialize 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. 또한 DHTMLX Spreadsheet 30일 무료 평가판을 다운로드할 수 있습니다.
---

# serialize()

### 설명 {#description}

@short: 스프레드시트 데이터를 JSON 객체로 직렬화합니다

### 사용법 {#usage}

~~~jsx
serialize(): object;
~~~

### 반환값 {#returns}

이 메서드는 직렬화된 JSON 객체를 반환합니다

직렬화된 데이터는 다음 속성을 가진 객체입니다:

- `formats` - 숫자 형식 객체 배열
- `styles` - 적용된 CSS 클래스를 담은 객체
- `sheets` - 시트 객체 배열. 각 객체는 다음 속성을 포함합니다:
  - `name` - 시트 이름
  - `data` - 데이터 객체 배열
  - `rows` - 높이 객체 배열
  - `cols` - 너비 객체 배열

### 예제 {#example}

~~~jsx {4}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

const data = spreadsheet.serialize();
~~~

**관련 문서:** [데이터 로드 및 내보내기](loading_data.md#saving-and-restoring-state)
