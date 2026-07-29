---
sidebar_label: 데이터 필터링
title: 데이터 필터링
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 데이터 필터링에 대해 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 실행해 보세요. DHTMLX Spreadsheet의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# 데이터 필터링 {#filtering-data}

스프레드시트의 데이터를 필터링하여 지정한 기준을 충족하는 레코드만 표시할 수 있습니다.

필터링을 활성화하려면 다음 두 가지 방법 중 하나를 사용합니다:

- 셀에 포커스를 설정하거나 셀 범위를 선택하고 툴바에서 **필터** 버튼을 클릭합니다

![데이터 필터링을 활성화하는 필터 버튼이 있는 DHTMLX Spreadsheet 툴바](/img/filter_button.png)

- 셀에 포커스를 설정하거나 셀 범위를 선택하고 메뉴에서 *데이터 -> 필터*로 이동합니다

![열 필터 활성화를 위한 필터 옵션이 있는 DHTMLX Spreadsheet 데이터 메뉴](/img/filter_menu.png)

그런 다음 범위 내 각 열 헤더 오른쪽에 **필터** 아이콘이 나타납니다.

## 조건으로 필터링 {#filtering-by-condition}

- 해당 열의 **필터** 아이콘을 클릭합니다

- 기본 제공 비교 연산자 중 하나를 선택합니다. 예: **보다 큼**

- 필터 기준을 지정하고 **적용**을 클릭합니다

![보다 큼 등의 비교 연산자가 있는 DHTMLX Spreadsheet 열 필터 드롭다운](/img/filter_by_condition.png)

### 필터 지우기 {#clearing-a-filter}

필터를 지우려면 열 헤더의 **필터** 아이콘을 클릭하고 _조건으로: **없음**_을 선택한 다음 **적용**을 클릭합니다.

![필터를 지우기 위한 조건으로 없음 옵션이 있는 DHTMLX Spreadsheet 필터 대화상자](/img/clear_filter_bycondition.png)

## 값으로 필터링 {#filtering-by-values}

- 해당 열의 **필터** 아이콘을 클릭합니다

- **모두 선택 해제** 버튼을 클릭합니다

![모두 선택 해제 버튼과 값 체크박스가 있는 DHTMLX Spreadsheet 열 필터](/img/unselect_all_button.png)

- 표시할 값의 체크박스를 선택하고 **적용**을 클릭합니다

### 필터 지우기 {#clearing-a-filter-1}

필터를 지우려면 열 헤더의 **필터** 아이콘을 클릭하고 **모두 선택** 버튼을 클릭한 다음 **적용**을 클릭합니다.

![값 필터를 지우기 위한 모두 선택 버튼이 있는 DHTMLX Spreadsheet 열 필터 대화상자](/img/clear_filter_by_values.png)

## 필터 제거 {#removing-filters}

필터링을 비활성화하려면 다음 중 하나를 수행합니다:

- 툴바에서 **필터** 버튼을 클릭합니다
- 또는 메뉴에서 *데이터 -> 필터*로 이동합니다

열 헤더에서 **필터** 아이콘이 사라지고 숨겨진 모든 레코드가 다시 표시됩니다.
