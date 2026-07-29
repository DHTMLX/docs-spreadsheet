---
sidebar_label: Events
title: Events 레퍼런스
description: "ReactSpreadsheet의 이벤트 콜백 props: 액션, 선택, 편집, 시트, 파생 상태."
---

# Events 레퍼런스 {#events-reference}

모든 이벤트 콜백은 선택적 props입니다. "Before" 콜백은 `false`를 반환하여 작업을 취소할 수 있습니다.

:::note
React 래퍼는 `onCamelCase` 형식의 prop 이름을 사용합니다(예: `onAfterAction`). 반면 JS Spreadsheet API는 event bus에서 `camelCase` 이벤트 이름을 사용합니다(예: `afterAction`). 명령형 API에 대해서는 [JS API Events 레퍼런스](api/overview/events_overview.md)를 참조하십시오.
:::

## 액션 이벤트 {#action-events}

셀 편집, 서식 지정, 구조 변경 등 사용자 액션 발생 시 실행됩니다.

| Prop | 취소 가능 | 설명 |
|------|:-----------:|-------------|
| `onBeforeAction` | 예 | 사용자 액션이 실행되기 전에 발생합니다. `false`를 반환하면 취소됩니다. 핸들러: [`BeforeActionHandler`](react/types.md#handler-type-aliases). JS API: [`beforeAction`](api/spreadsheet_beforeaction_event.md). |
| `onAfterAction` | 아니오 | 사용자 액션이 완료된 후 발생합니다. 핸들러: [`AfterActionHandler`](react/types.md#handler-type-aliases). JS API: [`afterAction`](api/spreadsheet_afteraction_event.md). |

**예시: 행 삭제 차단**

~~~tsx
import { Actions } from "@dhtmlx/trial-react-spreadsheet";

<ReactSpreadsheet
    sheets={sheets}
    onBeforeAction={(action, config) => {
        if (action === Actions.deleteRow) return false;
    }}
/>
~~~

**예시: 모든 사용자 액션 로그**

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    onAfterAction={(action, config) => {
        console.log("Action:", action, "Cell:", config.cell);
    }}
/>
~~~

## 선택 이벤트 {#selection-events}

셀 선택 또는 포커스가 변경될 때 발생합니다.

| Prop | 취소 가능 | 설명 |
|------|:-----------:|-------------|
| `onBeforeSelectionSet` | 예 | 셀이 선택 영역에 추가되기 전에 발생합니다. 핸들러: [`BeforeCellHandler`](react/types.md#handler-type-aliases). JS API: [`beforeSelectionSet`](api/spreadsheet_beforeselectionset_event.md). |
| `onAfterSelectionSet` | 아니오 | 셀이 선택 영역에 추가된 후 발생합니다. 핸들러: [`AfterCellHandler`](react/types.md#handler-type-aliases). JS API: [`afterSelectionSet`](api/spreadsheet_afterselectionset_event.md). |
| `onBeforeSelectionRemove` | 예 | 셀이 선택 영역에서 제거되기 전에 발생합니다. 핸들러: [`BeforeCellHandler`](react/types.md#handler-type-aliases). |
| `onAfterSelectionRemove` | 아니오 | 셀이 선택 영역에서 제거된 후 발생합니다. 핸들러: [`AfterCellHandler`](react/types.md#handler-type-aliases). |
| `onBeforeFocusSet` | 예 | 포커스된 셀이 변경되기 전에 발생합니다. 핸들러: [`BeforeCellHandler`](react/types.md#handler-type-aliases). JS API: [`beforeFocusSet`](api/spreadsheet_beforefocusset_event.md). |
| `onAfterFocusSet` | 아니오 | 포커스된 셀이 변경된 후 발생합니다. 핸들러: [`AfterCellHandler`](react/types.md#handler-type-aliases). JS API: [`afterFocusSet`](api/spreadsheet_afterfocusset_event.md). |

**예시: 선택된 셀 추적**

~~~tsx
const [selectedCell, setSelectedCell] = useState<string>("");

<ReactSpreadsheet
    sheets={sheets}
    onAfterFocusSet={(cell) => setSelectedCell(cell)}
/>

<p>Current cell: {selectedCell}</p>
~~~

## 편집 이벤트 {#edit-events}

셀 편집이 시작되거나 종료될 때 발생합니다.

| Prop | 취소 가능 | 설명 |
|------|:-----------:|-------------|
| `onBeforeEditStart` | 예 | 셀 편집이 시작되기 전에 발생합니다. 핸들러: [`BeforeEditHandler`](react/types.md#handler-type-aliases). JS API: [`beforeEditStart`](api/spreadsheet_beforeeditstart_event.md). |
| `onAfterEditStart` | 아니오 | 셀 편집이 시작된 후 발생합니다. 핸들러: [`AfterEditHandler`](react/types.md#handler-type-aliases). JS API: [`afterEditStart`](api/spreadsheet_aftereditstart_event.md). |
| `onBeforeEditEnd` | 예 | 셀 편집이 종료되기 전에 발생합니다. `false`를 반환하면 편집 상태가 유지됩니다. 핸들러: [`BeforeEditHandler`](react/types.md#handler-type-aliases). JS API: [`beforeEditEnd`](api/spreadsheet_beforeeditend_event.md). |
| `onAfterEditEnd` | 아니오 | 셀 편집이 종료되고 값이 확정된 후 발생합니다. 핸들러: [`AfterEditHandler`](react/types.md#handler-type-aliases). JS API: [`afterEditEnd`](api/spreadsheet_aftereditend_event.md). |

**예시: 값 확정 전 유효성 검사**

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    onBeforeEditEnd={(cell, value) => {
        if (cell.startsWith("B") && isNaN(Number(value))) {
            return false; // Cancel: column B must be numeric
        }
    }}
/>
~~~

## 시트 이벤트 {#sheet-events}

활성 시트 탭이 변경될 때 발생합니다.

| Prop | 취소 가능 | 설명 |
|------|:-----------:|-------------|
| `onBeforeSheetChange` | 예 | 활성 시트가 변경되기 전에 발생합니다. 핸들러: [`BeforeSheetHandler`](react/types.md#handler-type-aliases). JS API: [`beforeSheetChange`](api/spreadsheet_beforesheetchange_event.md). |
| `onAfterSheetChange` | 아니오 | 활성 시트가 변경된 후 발생합니다. 핸들러: [`AfterSheetHandler`](react/types.md#handler-type-aliases). JS API: [`afterSheetChange`](api/spreadsheet_aftersheetchange_event.md). |

**예시: 활성 시트 추적**

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    onAfterSheetChange={(sheet) => {
        console.log("Switched to sheet:", sheet.name);
    }}
/>
~~~

## 데이터 이벤트 {#data-events}

스프레드시트 데이터가 로드될 때 발생합니다.

| Prop | 설명 |
|------|-------------|
| `onAfterDataLoaded` | 데이터 로드가 완료된 후 발생합니다(`sheets` 또는 `loadUrl` 사용 시). JS API: [`afterDataLoaded`](api/spreadsheet_afterdataloaded_event.md). |

**예시: 로딩 상태 표시**

~~~tsx
const [loading, setLoading] = useState(true);

<ReactSpreadsheet
    loadUrl="/api/data"
    onAfterDataLoaded={() => setLoading(false)}
/>
~~~

## 입력 이벤트 {#input-events}

셀 또는 수식 입력줄에 사용자가 입력할 때 발생합니다.

| Prop | 설명 |
|------|-------------|
| `onGroupFill` | 자동 채우기(드래그 채우기) 작업 중 발생합니다. 핸들러: `(focusedCell: string, selectedCell: string) => void`. JS API: [`groupFill`](api/spreadsheet_groupfill_event.md). |
| `onEditLineInput` | 수식/편집줄에 입력 시 발생합니다. 핸들러: `(value: string) => void`. |
| `onCellInput` | 편집 중 셀에 입력 시 발생합니다. 핸들러: `(cell: string, value: string) => void`. |

## 파생 상태 콜백 {#derived-state-callbacks}

직접적인 사용자 액션이 아닌 계산된 상태 변경을 알립니다.

| Prop | 설명 |
|------|-------------|
| `onStateChange` | 실행 취소/다시 실행 가능 여부가 변경될 때 알립니다. 핸들러: `(state: { canUndo: boolean; canRedo: boolean }) => void`. |
| `onSearchResults` | `search` prop이 활성화된 경우 일치하는 셀 참조를 알립니다. 핸들러: `(cells: string[]) => void`. |
| `onFilterChange` | 사용자가 UI를 통해 필터를 변경할 때 알립니다. 핸들러: `(filter: SheetFilter) => void`. |

**예시: 실행 취소/다시 실행 버튼**

~~~tsx
import { useRef, useState } from "react";
import { ReactSpreadsheet, type SpreadsheetRef } from "@dhtmlx/trial-react-spreadsheet";

function App() {
    const ref = useRef<SpreadsheetRef>(null);
    const [history, setHistory] = useState({ canUndo: false, canRedo: false });

    return (
        <>
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
        </>
    );
}
~~~

**예시: 결과가 있는 제어된 검색**

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

**예시: 필터 상태 동기화**

~~~tsx
const [activeFilter, setActiveFilter] = useState<SheetFilter | null>(null);

<ReactSpreadsheet
    sheets={sheets}
    onFilterChange={(filter) => setActiveFilter(filter)}
/>
~~~
