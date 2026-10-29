---
sidebar_label: 셀 병합
title: 셀 병합
description: 툴바 또는 서식 메뉴를 통해 DHTMLX Spreadsheet에서 셀을 병합하고 분할하는 방법과, 행과 열을 제거할 때 병합된 셀에 미치는 영향을 알아봅니다.
---

# 셀 병합 {#merging-cells}

## 셀 병합하기 {#merge-cells}

셀을 병합하려면 다음 단계를 수행하세요:

1\. 병합할 셀 범위를 선택합니다

2\. 툴바에서 **Merge** 버튼을 클릭합니다

![셀 범위를 병합하는 Merge 버튼이 있는 DHTMLX Spreadsheet 툴바](/img/merge_cells.png)

또는

1\. 병합할 셀 범위를 선택합니다

2\. 메뉴에서 *Format -> Merge*로 이동합니다

![셀 병합을 위한 Merge 옵션이 있는 DHTMLX Spreadsheet Format 메뉴](/img/merge_cells_via_menu.png)

:::info
병합된 셀은 선택된 범위의 왼쪽 상단 셀의 내용을 표시합니다.
:::

## 셀 분리하기 {#split-cells}

병합된 셀을 분리하려면 다음 단계를 수행하세요:

1\. 병합된 셀을 선택합니다

2\. 툴바에서 **Unmerge** 버튼을 클릭합니다

![병합된 셀을 분리하는 Unmerge 버튼이 있는 DHTMLX Spreadsheet 툴바](/img/unmerge_cells.png)

또는

1\. 병합된 셀을 선택합니다

2\. 메뉴에서 *Format -> Unmerge*로 이동합니다

![병합된 셀을 분리하는 Unmerge 옵션이 있는 DHTMLX Spreadsheet Format 메뉴](/img/unmerge_cells_via_menu.png)

## 병합된 셀의 행과 열 제거 {#removing-rows-and-columns-of-merged-cells}

병합된 셀을 통해 행 또는 열을 제거하면 병합된 셀이 걸쳐 있는 모든 행 또는 열이 제거됩니다. 셀 또는 셀 범위를 선택한 상태에서 툴바, 메뉴, 컨텍스트 메뉴 또는 [`deleteRow()`](api/spreadsheet_deleterow_method.md) / [`deleteColumn()`](api/spreadsheet_deletecolumn_method.md) 메서드로 행 또는 열을 제거할 때 이렇게 동작합니다. 컨텍스트 메뉴는 명령 이름에 전체 범위를 표시합니다. 예: *행 2-4 제거*.

![병합된 셀에 대해 행 2-4 제거가 표시된 행 하위 메뉴가 있는 DHTMLX Spreadsheet 컨텍스트 메뉴](/img/remove_merged_rows_context_menu.png)

행 또는 열 전체를 선택한 경우(예: 헤더를 클릭하거나 `Shift + Space` 또는 `Ctrl (Cmd) + Space`를 사용) 선택한 행 또는 열만 제거됩니다. 해당 행 또는 열에 걸쳐 있던 병합된 셀은 더 작아지고, 셀이 하나만 남은 병합된 셀은 일반 셀이 됩니다.

제거된 행 또는 열의 아래쪽이나 오른쪽에 있는 병합된 셀은 함께 이동합니다.
