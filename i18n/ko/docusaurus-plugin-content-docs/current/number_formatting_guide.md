---
sidebar_label: 숫자 서식
title: 숫자 서식 가이드
description: DHTMLX JavaScript Spreadsheet 라이브러리 문서에서 숫자 서식에 대한 사용자 가이드를 확인하세요. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 사용해보며, DHTMLX Spreadsheet의 30일 무료 평가판을 다운로드하세요.
---

# 숫자 서식 {#number-formatting}

## 지원되는 숫자 서식 {#supported-number-formats}

셀 값에 여러 숫자 서식을 적용할 수 있습니다:

<table>
    <tbody>
        <tr>
            <td><b>공통</b></td>
            <td>서식 없이 숫자가 그대로 표시됩니다</td>
        </tr>
        <tr>
            <td><b>숫자</b></td>
            <td>지정된 구분자로 십, 백, 천 단위가 구분되어 숫자가 표시됩니다</td>
        </tr>
        <tr>
            <td><b>통화</b></td>
            <td>통화 기호($)와 함께 숫자가 표시됩니다</td>
        </tr>
        <tr>
            <td><b>퍼센트</b></td>
            <td>퍼센트 기호(%)와 함께 숫자가 표시됩니다</td>
        </tr>
        <tr>
            <td><b>날짜</b></td>
            <td>지정된 서식의 날짜로 숫자가 표시됩니다</td>
        </tr>
        <tr>
            <td><b>시간</b></td>
            <td>12시간 또는 24시간 서식의 시간으로 숫자가 표시됩니다</td>
        </tr>
        <tr>
            <td><b>텍스트</b></td>
            <td>입력한 그대로 텍스트로 숫자가 표시됩니다</td>
        </tr>
        <tr>
            <td><b>과학적</b></td>
            <td>지수 표기법으로 숫자가 표시됩니다 (예: 1500.31의 경우 <b>1.50E+03</b>); 매우 크거나 작은 숫자에 유용합니다</td>
        </tr>
    </tbody>
</table>

## 서식 설정 방법 {#how-to-set-format}

툴바를 통해 Spreadsheet 데이터에 특정 숫자 서식을 적용하려면 다음 단계를 따르세요:

- 서식을 지정할 하나 또는 여러 셀을 선택합니다.
- **숫자 서식** 버튼을 클릭합니다:

![숫자 서식 적용을 위한 숫자 서식 버튼이 있는 DHTMLX Spreadsheet 툴바](/img/number_format_button.png)

- 제안된 옵션 중에서 적용할 서식을 선택합니다:

![공통, 숫자, 통화, 퍼센트, 날짜, 시간, 텍스트 옵션이 있는 DHTMLX Spreadsheet 숫자 서식 드롭다운](/img/number_format_options.png)
