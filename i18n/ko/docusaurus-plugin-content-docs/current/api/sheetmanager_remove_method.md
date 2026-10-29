---
sidebar_label: remove()
title: remove 메서드
description: DHTMLX Spreadsheet에서 sheets.remove() 메서드로 id를 기준으로 시트를 제거합니다. 최소 하나의 시트는 유지되며, 활성 시트를 제거하면 다른 시트로 전환됩니다.
---

# remove()

### 설명 {#description}

@short: 식별자로 스프레드시트에서 시트를 제거합니다

제거된 시트가 활성 상태였다면 스프레드시트는 자동으로 다른 사용 가능한 시트로 전환됩니다.

:::info
이 메서드를 적용하려면 [`multiSheets`](api/spreadsheet_multisheets_config.md) 구성 옵션을 활성화해야 합니다.

또한 스프레드시트에 시트가 2개 미만인 경우 시트는 삭제되지 않습니다.
:::

### 사용법 {#usage}

~~~ts
remove: (id: Id) => void;
~~~

### 매개변수 {#parameters}

- `id` - (*string | number*) 필수, 제거할 시트의 고유 식별자입니다.

### 예제 {#example}

~~~jsx
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    multiSheets: true
});
spreadsheet.parse(data);

// id로 시트 제거
spreadsheet.sheets.remove("sheet_2");
~~~

**변경 로그:** v6.0에서 추가됨

**관련 문서:** [시트 작업](working_with_sheets.md)
