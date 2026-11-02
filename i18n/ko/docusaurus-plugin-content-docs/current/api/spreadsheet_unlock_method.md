---
sidebar_label: unlock()
title: unlock 메서드
description: DHTMLX Spreadsheet에서 unlock() 메서드로 잠긴 셀, 여러 셀 또는 셀 범위의 잠금을 해제하여 사용자가 다시 편집할 수 있게 합니다.
---

# unlock()

### 설명 {#description}

@short: 잠긴 셀의 잠금을 해제합니다

### 사용법 {#usage}

~~~jsx
unlock(cell: string): void;
~~~

### 매개변수 {#parameters}

- `cell` - (필수) 셀 또는 셀 범위의 ID

### 예제 {#example}

~~~jsx {5,8,11}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {});
spreadsheet.parse(data);

// 셀 잠금을 해제합니다
spreadsheet.unlock("A1");

// 셀 범위의 잠금을 해제합니다
spreadsheet.unlock("A1:C1");

// 지정된 셀들의 잠금을 해제합니다
spreadsheet.unlock("A1,B5,B7,D4:D6");
~~~

:::info
v4.1부터 셀 또는 셀 범위에 대한 참조를 다음 형식으로 지정할 수 있습니다:

~~~jsx
spreadsheet.unlock("sheet1!A2"); 
~~~

여기서 `sheet1`은 탭 이름입니다.

탭 이름을 지정하지 않으면 메서드는 활성 탭의 셀 잠금을 해제합니다.
:::
