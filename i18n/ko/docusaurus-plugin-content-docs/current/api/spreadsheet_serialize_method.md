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
serialize(): {
    sheets: [
        {
            name: string,
            id: string,
            data: [
                {
                    cell: string,
                    value?: string | number,
                    css?: string,
                    format?: string,
                    editor?: {
                        type: string, // type: "select"
                        options: string | array
                    },
                    locked?: boolean,
                    link?: {
                        text?: string,
                        href: string
                    }
                },
                // more cell objects
            ],
            cols: [
                {
                    width: number,
                    hidden: boolean
                },
                // more column objects
            ],
            rows: [
                {
                    height: number,
                    hidden: boolean
                },
                // more row objects
            ],
            merged: [
                {
                    from: { column: number, row: number },
                    to: { column: number, row: number }
                },
                // more objects
            ],
            freeze: {
                col: number,
                row: number
            }
        },
        // more sheet objects
    ],
    styles: object,
    formats: array
};
~~~

### 반환값 {#returns}

이 메서드는 다음 속성을 가진 직렬화된 JSON 객체를 반환합니다:

- `formats` - 숫자 형식 객체 배열
- `styles` - 적용된 CSS 클래스를 담은 객체로, 키는 클래스 이름이고 값은 해당 클래스의 스타일 속성을 담은 객체입니다
- `sheets` - 시트 객체 배열. 각 객체는 다음 속성을 포함합니다:
    - `name` - 시트 이름
    - `id` - 시트 id
    - `data` - 셀 객체 배열. 각 객체는 셀 id가 담긴 `cell` 속성과 해당 셀에 지정된 속성인 `value`, `css`, `format`, `editor`, `locked`, `link`를 포함합니다
    - `cols` - 열 구성 객체 배열. 각 객체는 `width`와 `hidden` 속성을 포함합니다
    - `rows` - 행 구성 객체 배열. 각 객체는 `height`와 `hidden` 속성을 포함합니다
    - `merged` - 객체 배열로, 각 객체는 `from`과 `to` 속성으로 병합된 셀 범위를 정의합니다
    - `freeze` - 고정된 열과 행의 개수를 담은 객체이며, 고정된 것이 없으면 `{ col: 0, row: 0 }`입니다

다음 사항에 유의하세요:

- `merged`와 `freeze` 속성은 시트 객체에 항상 포함되며, 열 또는 행 객체의 `hidden` 속성도 마찬가지로 항상 포함되고 열이나 행이 보이는 상태이면 `false`입니다
- `cols`와 `rows` 배열은 시트의 데이터 범위를 포함하며, 해당 범위를 벗어난 곳에서 열 너비, 행 높이 또는 `hidden` 상태가 변경된 경우 그만큼 더 확장됩니다. 따라서 비어 있는 열과 행의 사용자 지정 크기도 유지됩니다
- 셀은 값, CSS 클래스, 에디터 또는 `locked` 상태를 가진 경우에만 `data` 배열에 포함됩니다. 따라서 잠긴 빈 셀도 유지됩니다
- 반환된 객체는 그대로 [](api/spreadsheet_parse_method.md) 메서드에 전달할 수 있습니다

### 예제 {#example}

~~~jsx {4}
const spreadsheet = new dhx.Spreadsheet("spreadsheet", {});
spreadsheet.parse(data);

const state = spreadsheet.serialize();
~~~

**관련 문서:** [데이터 로드 및 내보내기](loading_data.md#saving-and-restoring-state)
