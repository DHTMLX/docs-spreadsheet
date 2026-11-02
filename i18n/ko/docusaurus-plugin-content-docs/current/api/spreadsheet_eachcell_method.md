---
sidebar_label: eachCell()
title: eachCell 메서드
description: DHTMLX Spreadsheet에서 eachCell() 메서드로 셀 범위 또는 선택된 셀을 순회합니다. 이 메서드는 각 셀의 이름과 값으로 함수를 호출합니다.
---

# eachCell()

### 설명 {#description}

@short: 스프레드시트의 셀을 순회합니다

:::info
셀 범위가 지정되지 않은 경우, 메서드는 선택된 셀을 순회합니다.
:::

### 사용법 {#usage}

~~~jsx
eachCell(
    cb: (cellName: string, cellValue: any) => any, 
    range?: string
): void;
~~~ 

### 매개변수 {#parameters}

- `callback` - (필수) callback 함수
- `range` - (선택 사항) 순회할 셀 범위

### 예제 {#example}

~~~jsx {21-27}
const spreadsheet = new dhx.Spreadsheet("spreadsheet_container", {
    // 설정 매개변수
});

spreadsheet.menu.data.add({
    id: "validate",
    value: "Validate",
    items: [
        {
            id: "isNumber",
            value: "Is number"
        },
        {
            id: "isEven",
            value: "Is even number"
        }
    ]
});

function checkValue(check) {
    spreadsheet.eachCell(function (cell, value) {
        if (!check(value)) {
            spreadsheet.setStyle(cell, { background: "#e57373" });
        } else {
            spreadsheet.setStyle(cell, { background: "" });
        }
    }, spreadsheet.selection.getSelectedCell());
}

spreadsheet.menu.events.on("click", function (id) {
    switch (id) {
        case "isNumber":
            checkValue(function (value) { return !isNaN(value) });
            break;
        case "isEven":
            checkValue(function (value) { return value % 2 === 0 });
            break;
    }
});
~~~

**관련 문서:** [커스터마이징](customization.md#menu)

**관련 샘플**: [Spreadsheet. Menu](https://snippet.dhtmlx.com/2mlv2qaz)
