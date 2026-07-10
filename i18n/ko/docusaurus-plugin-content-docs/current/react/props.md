---
sidebar_label: Props
title: Props 레퍼런스
description: "타입과 예시가 포함된 ReactSpreadsheet 컴포넌트의 모든 props에 대한 완전한 레퍼런스."
---

# Props 레퍼런스 {#props-reference}

모든 props는 선택 사항입니다. props가 제공되지 않으면 컴포넌트는 기본 설정으로 빈 스프레드시트를 렌더링합니다.

## 초기화 전용 props {#init-only-props}

이 props 중 하나라도 변경하면 위젯이 소멸되고 재생성됩니다. 스프레드시트 데이터는 보존되지만 실행 취소/다시 실행 기록과 UI 상태(선택 영역, 스크롤 위치)는 초기화됩니다.

<div className="overflow-table">

| Prop | 타입 | 설명 |
|------|------|-------------|
| `menu` | `boolean` | 컨텍스트 메뉴를 표시합니다. JS API: [`menu`](api/spreadsheet_menu_config.md) 참조. |
| `editLine` | `boolean` | 그리드 위에 수식/편집줄을 표시합니다. JS API: [`editLine`](api/spreadsheet_editline_config.md) 참조. |
| `toolbarBlocks` | `ToolbarBlocks[]` | 표시할 툴바 블록입니다. JS API: [`toolbarBlocks`](api/spreadsheet_toolbarblocks_config.md) 참조. |
| `multiSheets` | `boolean` | 여러 시트 탭을 활성화합니다. JS API: [`multisheets`](api/spreadsheet_multisheets_config.md) 참조. |
| `formats` | `IFormats[]` | 사용자 정의 숫자 형식 정의입니다. JS API: [`formats`](api/spreadsheet_formats_config.md) 참조. |
| `localization` | `ISpreadsheetConfig["localization"]` | 소수점 구분 기호 및 통화 기호와 같은 숫자/날짜 형식 지정 로케일입니다. `spreadsheetLocale`과는 별개입니다. JS API: [`localization`](api/spreadsheet_localization_config.md) 참조. |
| `importModulePath` | `string` | XLSX 가져오기 모듈의 경로입니다. JS API: [`importModulePath`](api/spreadsheet_importmodulepath_config.md) 참조. |
| `exportModulePath` | `string` | XLSX 내보내기 모듈의 경로입니다. JS API: [`exportModulePath`](api/spreadsheet_exportmodulepath_config.md) 참조. |
| `spreadsheetLocale` | [`SpreadsheetLocale`](react/types.md#spreadsheetlocale) | UI 번역 및 로컬라이즈된 수식 이름입니다. `localization`과는 별개입니다. |

</div>

:::warning
초기화 전용 prop을 변경하면 전체 소멸/재생성 주기가 실행됩니다. 실행 취소/다시 실행 기록, 선택 영역, 스크롤 위치가 초기화됩니다.
:::

## 런타임 props {#runtime-props}

이 props는 위젯을 소멸시키지 않고 즉시 적용됩니다. 데이터 손실이나 UI 상태 초기화가 없습니다.

| Prop | 타입 | 설명 |
|------|------|-------------|
| `rowsCount` | `number` | 그리드의 행 수입니다. JS API: [`rowsCount`](api/spreadsheet_rowscount_config.md) 참조. |
| `colsCount` | `number` | 그리드의 열 수입니다. JS API: [`colsCount`](api/spreadsheet_colscount_config.md) 참조. |
| `readonly` | `boolean` | 읽기 전용 모드를 활성화합니다. JS API: [`readonly`](api/spreadsheet_readonly_config.md) 참조. |

## 데이터 props {#data-props}

`sheets` prop은 모든 스프레드시트 콘텐츠의 단일 정보 소스입니다. 변경 사항은 증분 방식으로 적용됩니다. 수정된 셀, 범위 또는 설정만 위젯에서 업데이트됩니다.

| Prop | 타입 | 설명 |
|------|------|-------------|
| `sheets` | [`SheetData[]`](react/types.md#sheetdata) | 모든 스프레드시트 데이터의 단일 정보 소스입니다. 각 항목은 셀, 구조, 메타데이터가 있는 시트를 나타냅니다. 변경 사항은 증분 방식으로 적용됩니다. |
| `styles` | `Record<string, Record<string, string>>` | `CellData.css`에서 참조하는 공유 CSS 스타일 정의입니다. 키는 클래스 이름이고 값은 CSS 속성 맵입니다. [스타일 예시](#styles-example) 참조. |
| `activeSheet` | `Id` | 활성(표시) 시트의 Id입니다. 이 값을 변경하면 표시되는 시트 탭이 전환됩니다. |

:::warning
`styles`를 변경하면 전체 데이터 재로드가 실행됩니다. 스프레드시트 데이터는 보존되지만 실행 취소/다시 실행 기록과 UI 상태(선택 영역, 스크롤 위치)는 초기화됩니다.
:::

## 검색 props {#search-props}

컴포넌트 외부에서 검색 표시줄 상태를 제어합니다. 사용자 정의 검색 UI를 구축하려면 `onSearchResults`와 함께 사용하십시오.

| Prop | 타입 | 설명 |
|------|------|-------------|
| `search` | [`SearchConfig`](react/types.md#searchconfig) | 제어된 검색 상태입니다. 검색을 트리거/업데이트하려면 `SearchConfig` 객체를 전달하십시오. 검색 표시줄을 닫으려면 `undefined`를 전달하십시오. |

## 데이터 로딩 props {#data-loading-props}

`sheets` prop을 통해 데이터를 제공하는 대신 원격 URL에서 스프레드시트 데이터를 로드합니다.

| Prop | 타입 | 설명 |
|------|------|-------------|
| `loadUrl` | `string` | 스프레드시트 데이터를 로드할 URL입니다. `loadUrl`과 `sheets`가 모두 제공된 경우 `sheets`가 우선합니다. |
| `loadFormat` | `FileFormat` | `loadUrl`의 파일 형식 힌트입니다. 기본값: `"json"`. |

## 테마 prop {#theme-prop}

스프레드시트에 적용되는 시각적 테마를 제어합니다. `theme`은 런타임 prop이므로 값이 변경되면 위젯이 즉시 업데이트됩니다.

| Prop | 타입 | 설명 |
|------|------|-------------|
| `theme` | [`SpreadsheetTheme`](react/types.md#spreadsheettheme) | 색상 테마입니다. 내장 값: `"light"`, `"dark"`, `"contrast-light"`, `"contrast-dark"`. 사용자 정의 테마 이름 문자열도 허용합니다. [테마](react/themes.md) 참조. |

## 컨테이너 props {#container-props}

스프레드시트를 포함하는 래퍼 `<div>`에 적용되는 표준 React DOM props입니다. 크기 및 레이아웃을 제어하는 데 사용하십시오.

| Prop | 타입 | 설명 |
|------|------|-------------|
| `className` | `string` | 래퍼 `<div>`에 추가되는 CSS 클래스 이름입니다. |
| `style` | `React.CSSProperties` | 래퍼 `<div>`에 적용되는 인라인 스타일입니다. |

---

## 예시 {#examples}

### 셀 데이터가 있는 시트 {#sheets-with-cell-data}

셀, 행/열 크기, 병합 범위, 고정된 헤더 행이 있는 전체 `SheetData` 예시입니다.

~~~tsx
const [sheets, setSheets] = useState<SheetData[]>([
    {
        id: "sheet1",
        name: "Budget",
        cells: {
            A1: { value: "Item", css: "header" },
            B1: { value: "Amount", css: "header", format: "currency" },
            A2: { value: "Rent" },
            B2: { value: 2000, format: "currency" },
            A3: { value: "=SUM(B2:B3)" },
        },
        rows: { 0: { height: 40 } },
        cols: { 0: { width: 150 }, 1: { width: 120 } },
        merged: [{
            from: { row: 0, column: 0 },
            to: { row: 0, column: 1 }
        }],
        freeze: { row: 1 },
    },
]);

<ReactSpreadsheet sheets={sheets} activeSheet="sheet1" />
~~~

### 스타일 예시 {#styles-example}

`styles` prop에서 CSS 속성 맵으로 명명된 스타일을 정의한 후 `CellData.css`를 통해 이름으로 참조하십시오.

~~~tsx
const styles = {
    header: {
        "font-weight": "bold",
        "background": "#e3f2fd",
        "color": "#1565c0",
    },
    highlight: {
        "background": "#ffeb3b",
        "color": "#333",
    },
};

<ReactSpreadsheet sheets={sheets} styles={styles} />
~~~

### 툴바 커스터마이징 {#toolbar-customization}

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    toolbarBlocks={["undo", "colors", "decoration", "align", "format"]}
/>
~~~

### 멀티 시트 모드 {#multi-sheet-mode}

`multiSheets={true}`로 시트 탭을 활성화하십시오. `false`를 전달하면 탭 표시줄이 완전히 숨겨집니다.

~~~tsx
<ReactSpreadsheet sheets={sheets} multiSheets={true} />
~~~

~~~tsx
<ReactSpreadsheet sheets={sheets} multiSheets={false} />
~~~

### Excel 가져오기/내보내기 {#excel-importexport}

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    importModulePath="../libs/excel2json/next/worker.js"   
    exportModulePath="../libs/json2excel/next/worker.js"   
/>
~~~

특정 버전을 사용하려면 `next`를 버전 번호로 교체하십시오([Excel2Json](https://github.com/dhtmlx/excel2json) 및 [Json2Excel](https://github.com/dhtmlx/json2excel) GitHub 저장소 확인).

### 유럽식 숫자 형식 {#european-number-formatting}

~~~tsx
<ReactSpreadsheet
    sheets={sheets}
    localization={{
        decimal: ",",
        thousands: ".",
        currency: "€",
    }}
/>
~~~

### 제어된 검색 {#controlled-search}

`SearchConfig` 객체를 전달하여 프로그래밍 방식으로 검색 표시줄을 열 수 있습니다. 일치하는 셀 참조를 받으려면 `onSearchResults`를 사용하십시오.

~~~tsx
const [search, setSearch] = useState<SearchConfig | undefined>();
const [results, setResults] = useState<string[]>([]);

<input onChange={(e) => setSearch({ query: e.target.value, open: true })} />
<button onClick={() => setSearch(undefined)}>Close Search</button>
<p>Found in: {results.join(", ")}</p>

<ReactSpreadsheet
    sheets={sheets}
    search={search}
    onSearchResults={setResults}
/>
~~~

### 테마 전환 {#theme-switching}

~~~tsx
const [theme, setTheme] = useState<SpreadsheetTheme>("light");

<select onChange={(e) => setTheme(e.target.value as SpreadsheetTheme)}>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
    <option value="contrast-light">Contrast Light</option>
    <option value="contrast-dark">Contrast Dark</option>
</select>

<ReactSpreadsheet sheets={sheets} theme={theme} />
~~~

### 읽기 전용 모드 {#read-only-mode}

~~~tsx
<ReactSpreadsheet sheets={sheets} readonly={true} />
~~~

### URL에서 데이터 로드 {#loading-data-from-url}

~~~tsx
<ReactSpreadsheet loadUrl="/api/spreadsheet-data" loadFormat="json" />
~~~

### 잠긴 셀 {#locked-cells}

`locked: true`로 개별 셀을 편집 불가능하게 표시합니다. `readonly`와 달리 이 옵션은 나머지 시트를 편집 가능한 상태로 유지하면서 특정 셀을 보호합니다.

~~~tsx
const sheets: SheetData[] = [
    {
        id: "sheet1",
        name: "Protected",
        cells: {
            A1: { value: "Header", locked: true },
            A2: { value: "Editable" },
        },
    },
];

<ReactSpreadsheet sheets={sheets} />
~~~

### 셀 유효성 검사 {#cell-validation}

`CellData.validation`에 문자열 배열을 전달하여 셀을 허용된 값의 드롭다운으로 제한하십시오.

~~~tsx
const sheets: SheetData[] = [
    {
        id: "sheet1",
        name: "Form",
        cells: {
            A1: { value: "Status" },
            B1: { validation: ["Active", "Inactive", "Pending"] },
        },
    },
];

<ReactSpreadsheet sheets={sheets} />
~~~
