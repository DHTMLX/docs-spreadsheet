---
sidebar_label: 시트 작업
title: 시트 작업
description: DHTMLX Spreadsheet에서 하단 툴바와 시트 탭으로 시트를 추가, 제거, 이름 변경, 전환하고 수식에서 다른 시트의 셀을 참조합니다.
---

# 시트 작업 {#work-with-sheets}

## 새 시트 추가 {#adding-a-new-sheet}

새 시트를 추가하려면 다음 단계를 따르세요:

1. 시트 탭을 클릭하여 선택하세요.

2. 하단 툴바에서 **시트 추가** 버튼을 클릭하세요.

:::note
새 시트는 현재 활성 시트 뒤에 추가됩니다.
:::

![시트 추가 버튼과 시트 탭이 있는 DHTMLX Spreadsheet 하단 툴바](/img/add_sheet.png)

## 시트 제거 {#removing-a-sheet}

스프레드시트에서 시트를 제거하려면 시트 탭을 마우스 오른쪽 버튼으로 클릭하고 *삭제*를 선택하세요.

{{note 스프레드시트에 시트가 하나뿐인 경우 해당 시트는 제거할 수 없습니다.}}

![삭제 옵션이 강조 표시된 DHTMLX Spreadsheet 시트 탭 컨텍스트 메뉴](/img/remove_sheet.png)

## 활성 시트 변경 {#changing-the-active-sheet}

현재 활성 시트를 변경하려면 다른 시트 탭을 클릭하세요.

![활성 시트가 강조 표시된 DHTMLX Spreadsheet 하단 시트 탭](/img/change_active_sheet.png)

## 시트 이름 변경 {#renaming-a-sheet}

시트 이름을 변경하려면 시트 탭을 마우스 오른쪽 버튼으로 클릭하고 *이름 바꾸기*를 클릭한 후 새 이름을 입력하세요.

![이름 바꾸기 옵션과 이름 입력 필드가 있는 DHTMLX Spreadsheet 시트 탭 컨텍스트 메뉴](/img/rename_sheet.png)

## 시트 간 상호 참조 {#cross-references-between-sheets}

상호 참조를 사용하여 여러 시트의 데이터를 하나로 통합할 수 있습니다. <br> 이를 위해 다음 단계를 따르세요:

1\.  셀에 등호(=)를 입력하세요.

2\.  상호 참조할 시트 탭을 클릭하고 셀 또는 셀 범위를 선택하세요.

3\.  수식 입력을 완료하고 Enter를 누르세요.

![여러 시트 탭에 걸쳐 작성된 DHTMLX Spreadsheet 상호 참조 수식](/img/cross_reference.gif)
