---
sidebar_label: 기초
title: 데이터 바인딩 & 상태 관리 기초
description: "React에서 스프레드시트 데이터를 관리하기 위한 핵심 패턴: 제어 props, 이벤트 콜백, ref 탈출구."
---

# 데이터 바인딩 & 상태 관리 기초 {#data-binding--state-management-basics}

## 선언적 모델 {#the-declarative-model}

React Spreadsheet는 선언적 접근 방식을 따릅니다. 시트 데이터를 React 상태에 저장하고 props로 전달하면, 래퍼가 데이터를 현재 위젯 상태와 자동으로 비교하여 변경 사항만 적용합니다.

~~~tsx
import { useState } from "react";
import { ReactSpreadsheet, type SheetData } from "@dhtmlx/trial-react-spreadsheet";
import "@dhtmlx/trial-react-spreadsheet/spreadsheet.react.css";

function App() {
    const [sheets, setSheets] = useState<SheetData[]>([
        {
            id: "sheet1",
            name: "Data",
            cells: {
                A1: { value: "Hello" },
            },
        },
    ]);

    return <ReactSpreadsheet sheets={sheets} activeSheet="sheet1" />;
}
~~~

## 셀 업데이트 {#updating-cells}

함수형 `setState` updater를 사용하여 불변 상태 업데이트를 수행하십시오.

~~~tsx
const updateCell = (sheetId: string, cell: string, value: string | number) => {
    setSheets((prev) =>
        prev.map((sheet) =>
            sheet.id === sheetId
                ? {
                    ...sheet,
                    cells: {
                        ...sheet.cells,
                        [cell]: { ...sheet.cells[cell], value },
                    },
                }
                : sheet
        )
    );
};
~~~

## 사용자 동작에 응답 {#responding-to-user-actions}

`onAfterAction`을 사용하여 사용자 변경에 반응하십시오. `ref`와 함께 사용하면 현재 위젯 데이터를 읽을 수 있습니다.

~~~tsx
import { useRef } from "react";
import { ReactSpreadsheet, type SpreadsheetRef } from "@dhtmlx/trial-react-spreadsheet";

function App() {
    const ref = useRef<SpreadsheetRef>(null);
    const [sheets, setSheets] = useState<SheetData[]>([/* ... */]);

    const handleAfterAction = () => {
        const data = ref.current?.instance?.serialize();
        if (data) {
            // 위젯 상태를 React 상태로 동기화
            console.log("Spreadsheet data:", data);
        }
    };

    return (
        <ReactSpreadsheet
            ref={ref}
            sheets={sheets}
            onAfterAction={handleAfterAction}
        />
    );
}
~~~

## ref 탈출구 {#the-ref-escape-hatch}

선언적 props에 매핑되지 않는 작업의 경우, [`SpreadsheetRef`](react/types.md#spreadsheetref)를 사용하여 기본 위젯 인스턴스에 접근하십시오.

- **데이터 직렬화:** `ref.current?.instance?.serialize()`
- **실행 취소/다시 실행:** `ref.current?.instance?.undo()` / `ref.current?.instance?.redo()`
- **셀 값 가져오기:** `ref.current?.instance?.getValue("A1")`
- **프로그래밍 방식 선택:** `ref.current?.instance?.selection.setSelectedCell("A1:C5")`

~~~tsx
const ref = useRef<SpreadsheetRef>(null);

const handleExport = () => {
    const data = ref.current?.instance?.serialize();
    console.log(data);
};

<ReactSpreadsheet ref={ref} sheets={sheets} />
~~~

:::warning
명령형 쓰기(예: `instance.setValue()`)를 선언적 `sheets` prop과 혼용하지 마십시오. 래퍼가 다음 렌더 사이클에서 명령형 변경 사항을 덮어쓸 수 있습니다. ref는 데이터 **읽기** 및 실행 취소/다시 실행, 선택, 내보내기와 같은 작업에만 사용하십시오.
:::

## 제어 검색 {#controlled-search}

제어 검색을 위해 `search` prop을 `onSearchResults`와 함께 사용하십시오.

~~~tsx
const [search, setSearch] = useState<SearchConfig | undefined>();
const [results, setResults] = useState<string[]>([]);

<input
    placeholder="Search..."
    onChange={(e) => setSearch({ query: e.target.value, open: true })}
/>
<p>{results.length} cells found</p>

<ReactSpreadsheet
    sheets={sheets}
    search={search}
    onSearchResults={setResults}
/>
~~~

## 실행 취소 / 다시 실행 {#undo--redo}

`onStateChange`를 사용하여 실행 취소/다시 실행 가능 여부를 추적하고, ref를 통해 `undo()`/`redo()`를 호출하십시오.

~~~tsx
const ref = useRef<SpreadsheetRef>(null);
const [history, setHistory] = useState({ canUndo: false, canRedo: false });

<button
    disabled={!history.canUndo}
    onClick={() => ref.current?.instance?.undo()}
>
    Undo
</button>
<button
    disabled={!history.canRedo}
    onClick={() => ref.current?.instance?.redo()}
>
    Redo
</button>

<ReactSpreadsheet
    ref={ref}
    sheets={sheets}
    onStateChange={setHistory}
/>
~~~

## 성능 {#performance}

- 불필요한 재계산을 방지하기 위해 파생 시트에 `useMemo`를 사용하십시오.

~~~tsx
const filteredSheets = useMemo(
    () => sheets.filter((s) => s.name !== "Hidden"),
    [sheets]
);

<ReactSpreadsheet sheets={filteredSheets} />
~~~

- 렌더링마다 `styles` 객체가 새로 생성되지 않도록 컴포넌트 외부에 정의하거나 `useMemo`로 감싸십시오.
- 이벤트 콜백에서 오래된 클로저 문제를 피하기 위해 함수형 `setState` updater를 사용하십시오.
