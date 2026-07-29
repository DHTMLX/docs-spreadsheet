---
sidebar_label: 수식 및 함수
title: 수식 및 함수
description: DHTMLX JavaScript Spreadsheet 라이브러리의 수식 및 함수에 대해 문서에서 학습할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 확인하며, DHTMLX Spreadsheet의 30일 무료 평가판을 다운로드하세요.
---

# 수식 및 함수 {#formulas-and-functions}

v4.0부터 DHTMLX Spreadsheet 패키지에는 문자열과 숫자의 다양한 계산을 위한 사전 정의된 수식 세트가 포함됩니다. 이 수식은 Excel 및 Google Sheets와 호환됩니다.

:::note
수식의 소문자는 자동으로 대문자로 변환됩니다.
:::

<iframe src="https://snippet.dhtmlx.com/wux2b35b?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 함수 {#functions}

사용 가능한 모든 함수의 목록과 상세 설명입니다.

### 불리언 연산자 {#boolean-operators}

두 값을 논리 표현식으로 비교하여 TRUE 또는 FALSE를 반환할 수 있습니다.

| Operator | Example       | Description                                                                                              |
| :------- | :------------ | :------------------------------------------------------------------------------------------------------- |
| =        | =A1=B1        | 셀 A1의 값이 셀 B1의 값과 같으면 TRUE를, 그렇지 않으면 FALSE를 반환합니다.                 |
| &lt;&gt; | =A1&lt;&gt;B1 | 셀 A1의 값이 셀 B1의 값과 같지 않으면 TRUE를, 그렇지 않으면 FALSE를 반환합니다.             |
| &gt;     | =A1&gt;B1     | 셀 A1의 값이 셀 B1의 값보다 크면 TRUE를, 그렇지 않으면 FALSE를 반환합니다.             |
| &lt;     | =A1&lt;B1     | 셀 A1의 값이 셀 B1의 값보다 작으면 TRUE를, 그렇지 않으면 FALSE를 반환합니다.                |
| &gt;=    | =A1&gt;=B1    | 셀 A1의 값이 셀 B1의 값보다 크거나 같으면 TRUE를, 그렇지 않으면 FALSE를 반환합니다. |
| &lt;=    | =A1&lt;=B1    | 셀 A1의 값이 셀 B1의 값보다 작거나 같으면 TRUE를, 그렇지 않으면 FALSE를 반환합니다.    |

[스니펫 도구](https://snippet.dhtmlx.com/wux2b35b)에서 예제를 확인하세요.

### 날짜 함수 {#date-functions}

<table>
    <tbody>
        <tr>
            <td><b>Function</b></td>
            <td><b>Formula</b></td>
            <td><b>Description</b></td>
        </tr>
        <tr>
            <td><b>DATE</b></td>
            <td>=DATE(year,month,day)</td>
            <td>연도, 월, 일의 세 가지 개별 값을 결합하여 날짜를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>DATEDIF</b></td>
            <td>=DATEDIF(start_date,end_date,unit)</td>
            <td>두 날짜 사이의 일수, 월수 또는 연수를 반환합니다.<br> <a href="https://support.microsoft.com/en-us/office/datedif-function-25dba1a4-2812-480b-84dd-8b32a451b35c">unit</a> 인수는 반환할 정보의 유형을 정의하는 데 사용됩니다.</td>
        </tr>
        <tr>
            <td><b>DATEVALUE</b></td>
            <td>=DATEVALUE(date_text)</td>
            <td>텍스트로 저장된 날짜를 일련 번호로 변환합니다.</td>
        </tr>
        <tr>
            <td><b>DAY</b></td>
            <td>=DAY(date)</td>
            <td>지정된 날짜에서 1~31 사이의 숫자로 해당 월의 일을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>DAYS</b></td>
            <td>=DAYS(end_date, start_date)</td>
            <td>두 날짜 사이의 일수를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>DAYS360</b></td>
            <td>=DAYS360(start_date,end_date,[method]])</td>
            <td>360일 기준 연도(30일짜리 월 12개)를 기반으로 두 날짜 사이의 일수를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>EDATE</b></td>
            <td>=EDATE(start_date, months)</td>
            <td>시작 날짜로부터 n개월 이전 또는 이후의 같은 월 같은 날의 날짜를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>EOMONTH</b></td>
            <td>=EOMONTH(start_date, months)</td>
            <td>지정된 시작 날짜로부터 n개월 이전 또는 이후 해당 월의 마지막 날 날짜를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>ISOWEEKNUM</b></td>
            <td>=ISOWEEKNUM(date)</td>
            <td>지정된 날짜에 대한 연도의 ISO 주 번호를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>MONTH</b></td>
            <td>=MONTH(date)</td>
            <td>지정된 날짜의 연도 내 월을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>NETWORKDAYS</b></td>
            <td>=NETWORKDAYS(start_date, end_date, [holidays])</td>
            <td>두 날짜 사이의 전체 근무일 수를 반환합니다. 근무일에는 주말과 <i>holidays</i>에 지정된 날짜가 제외됩니다.</td>
        </tr>
        <tr>
            <td><b>NETWORKDAYSINTL</b></td>
            <td>=NETWORKDAYSINTL(start_date, end_date, [weekend], [holidays])</td>
            <td>두 날짜 사이의 전체 근무일 수를 반환합니다. <br>선택적 <a href="https://support.microsoft.com/en-us/office/networkdays-intl-function-a9b26239-4f20-46a1-9ab8-4e925bfd5e28">weekend</a> 매개변수는 주중 어느 요일을 주말로 간주할지 지정하는 데 사용됩니다. <br><i>주말</i>과 <i>holidays</i>는 근무일로 간주되지 않습니다.</td>
        </tr>
        <tr>
            <td><b>NOW</b></td>
            <td>=NOW()</td>
            <td>현재 날짜를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>TIMEVALUE</b><br>added in v4.3</td>
            <td>=TIMEVALUE(time_text)</td>
            <td>텍스트 문자열로 표현된 시간의 소수점 숫자를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>WEEKDAY</b></td>
            <td>=WEEKDAY(date,[return_type])</td>
            <td>지정된 날짜의 요일을 반환합니다. <br><a href="https://support.microsoft.com/en-us/office/weekday-function-60e44483-2ed1-439f-8bd0-e404c190949a">return_type</a> 인수는 주의 첫 번째 날로 간주되는 요일을 정의하는 데 사용됩니다.</td>
        </tr>
        <tr>
            <td><b>WEEKNUM</b></td>
            <td>=WEEKNUM(date,[return_type])</td>
            <td>지정된 날짜의 주 번호를 반환합니다. <br><a href="https://support.microsoft.com/en-us/office/weeknum-function-e5c43a03-b4ab-426c-b411-b18c13c75340">return_type</a> 인수는 주의 첫 번째 날로 간주되는 요일을 정의하는 데 사용됩니다.</td>
        </tr>
        <tr>
            <td><b>WORKDAY</b></td>
            <td>=WORKDAY(start_date, days, [holidays])</td>
            <td>미래 또는 과거 n일 후의 가장 가까운 근무일 날짜를 반환합니다.<br>근무일에는 주말과 <i>holidays</i>에 지정된 날짜가 제외됩니다.</td>
        </tr>
        <tr>
            <td><b>WORKDAYINTL</b></td>
            <td>=WORKDAYINTL(start_date, days, [weekend], [holidays])</td>
            <td>미래 또는 과거 n일 후의 가장 가까운 근무일 날짜를 반환합니다. <br>선택적 <a href="https://support.microsoft.com/en-us/office/workday-intl-function-a378391c-9ba7-4678-8a39-39611a9bf81d">weekend</a> 매개변수는 주중 어느 요일을 주말로 간주할지 지정하는 데 사용됩니다. <br><i>주말</i>과 <i>holidays</i>는 근무일로 간주되지 않습니다.</td>
        </tr>
        <tr>
            <td><b>YEAR</b></td>
            <td>=YEAR(date)</td>
            <td>지정된 날짜의 연도를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>YEARFRAC</b></td>
            <td>=YEARFRAC(start_date, end_date, [basis])</td>
            <td>지정된 날짜의 연도를 반환합니다. <br>선택적 <a href="https://support.microsoft.com/en-us/office/yearfrac-function-3844141e-c76d-4143-82b6-208454ddc6a8">basis</a> 인수는 일수 계산 기준의 유형을 정의하는 데 사용됩니다.</td>
        </tr>
    </tbody>
</table>
<br>

[스니펫 도구](https://snippet.dhtmlx.com/wux2b35b)에서 예제를 확인하세요.
### 재무 함수 {#financial-functions}

<table>
    <tbody>
        <tr>
            <td><b>함수</b></td>
            <td><b>수식</b></td>
            <td><b>설명</b></td>
        </tr>
        <tr>
            <td><b>ACCRINT</b></td>
            <td> =ACCRINT(issue, id, sd, rate, par, frequency, [basis], [calc_method]), <br><br> where: <ul> <li><i>issue</i> - the issue date of the security;</li> <li><i>id</i> - the security's first interest date;</li> <li><i>sd</i> - the security's settlement date;</li> <li><i>rate</i> - the security's annual coupon rate;</li> <li><i>par</i> - the security's par value, $1,000 by default;</li> <li><i>frequency</i> - the number of coupon payments per year (1 for annual payments); </li> <li><i>basis</i> - optional, the type of day count basis to use;</li> <li><i>calc_method</i> - optional, the way to calculate the total accrued interest when the date of settlement is later than the date of first interest (<a href="https://support.microsoft.com/en-us/office/accrint-function-fe45d089-6722-4fb3-9379-e1f911d8dc74">0 or 1(default)</a>).</li></ul></td>
            <td>정기적으로 이자를 지급하는 유가증권의 경과 이자를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>BINOM.DIST</b><br>added in v4.3</td>
            <td>=BINOM.DIST(number_s, trials, probability_s, cumulative), <br><br> where: <ul> <li><i>number_s</i> - the number of successes in trials;</li> <li><i>trials</i> - the number of independent trials;</li> <li><i>probability_s</i> - the probability of success on each trial;</li> <li><i>cumulative</i> - if TRUE, then BINOM.DIST returns the cumulative distribution function; if FALSE (use 0), it returns the probability mass function.</li> </ul></td>
            <td>개별 이항 분포 확률을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>BINOM.DIST.RANGE</b><br>added in v4.3</td>
            <td>=BINOM.DIST.RANGE(trials, probability_s, number_s, [number_s2]), <br><br> where: <ul> <li><i>trials</i> - the number of independent trials (must be ≥ 0);</li> <li><i>probability_s</i> - the probability of success in each trial (must be ≥ 0 and ≤ 1);</li> <li><i>number_s</i> - the number of successes in trials (must be ≥ 0 and ≤ <i>trials)</i>;</li> <li><i>number_s2</i> - optional. If provided, returns the probability that the number of successful trials will fall between <i>number_s</i> and <i>number_s2</i> <br>([number_s2] must be ≥ <i>number_s</i> and ≤ <i>trials</i>).</li> </ul></td>
            <td>이항 분포를 사용하여 시행 결과의 확률을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>BINOM.INV</b><br>added in v4.3</td>
            <td>=BINOM.INV(trials, probability_s, alpha), <br><br> where: <ul> <li><i>trials</i> - the number of Bernoulli trials;</li> <li><i>probability_s</i> - the probability of success in each trial (must be ≥ 0 and ≤ 1);</li> <li><i>alpha</i> - the criterion value (must be ≥ 0 and ≤ <i>1)</i>;</li> </ul></td>
            <td>누적 이항 분포가 기준값 이상이 되는 최솟값을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>BITLSHIFT</b><br>added in v4.3</td>
            <td>=BITLSHIFT(number, shift_amount), <br><br> where: <ul> <li><i>number</i> - the number to be shifted (must be an integer greater than or equal to 0 </li> <li><i>shift_amount</i> - the amount of bits to shift, if negative, shifts bits to the right instead</li> </ul></td>
            <td>지정한 비트 수만큼 왼쪽으로 이동한 숫자를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>BITOR</b><br>added in v4.3</td>
            <td>=BITOR(number1, number2), <br><br> where: <ul> <li><i>number1</i> - a decimal number (must be greater than or equal to 0 and no larger than 2^48 - 1);</li> <li><i>number2</i> - a decimal number (must be greater than or equal to 0 and no larger than 2^48 - 1);</li> </ul></td>
            <td>두 숫자의 비트 OR 연산 결과를 10진수로 반환합니다.</td>
        </tr>
        <tr>
            <td><b>BITRSHIFT</b><br>added in v4.3</td>
            <td>=BITRSHIFT(number, shift_amount), <br><br> where: <ul> <li><i>number</i> - the number to be shifted (must be an integer greater than or equal to 0);</li> <li><i>shift_amount</i> - the amount of bits to shift, if negative shifts bits to the left instead;</li> </ul></td>
            <td>지정한 비트 수만큼 오른쪽으로 이동한 숫자를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>BITXOR</b><br>added in v4.3</td>
            <td>=BITXOR(number1, number2), <br><br> where: <ul> <li><i>number1</i> - a decimal number (must be greater than or equal to 0 and no larger than 2^48 - 1);</li> <li><i>number2</i> - a decimal number (must be greater than or equal to 0 and no larger than 2^48 - 1);</li> </ul></td>
            <td>두 숫자의 비트 XOR 연산 결과를 10진수로 반환합니다.</td>
        </tr>
        <tr>
            <td><b>COMPLEX</b><br>added in v4.3</td>
            <td>=COMPLEX(real_num, i_num, [suffix]), <br><br> where: <ul> <li><i>real_num</i> - the real coefficient of the complex number;</li> <li><i>i_num</i> - the imaginary coefficient of the complex number;</li> <li><i>suffix</i> - optional ("i" by default) - the suffix for the imaginary component of the complex number; <br>(must be lowercase "i" or "j") .</li> </ul></td>
            <td>실수 계수와 허수 계수를 x + yi 또는 x + yj 형식의 복소수로 변환합니다.</td>
        </tr>
        <tr>
            <td><b>CORREL</b><br>added in v4.3</td>
            <td>=CORREL(array1, array2), <br><br> where: <ul> <li><i>array1</i> - a range of cell values;</li> <li><i>array2</i> - a second range of cell values;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. The arrays must have equal number of data points. </ul></td>
            <td>두 셀 범위의 상관 계수를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>COVAR</b><br>added in v4.3</td>
            <td>=COVAR(array1, array2), <br><br> where: <ul> <li><i>array1</i> - The first cell range of integers;</li> <li><i>array2</i> - The second cell range of integers;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. The arrays must have equal number of data points. </ul></td>
            <td>두 데이터 집합의 각 데이터 포인트 쌍에 대한 편차의 곱의 평균인 공분산을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>COVARIANCE.P</b><br>added in v4.3</td>
            <td>=COVARIANCE.P(array1, array2), <br><br> where: <ul> <li><i>array1</i> - The first cell range of integers;</li> <li><i>array2</i> - The second cell range of integers;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. The arrays must have equal number of data points. </ul></td>
            <td>두 데이터 집합의 각 데이터 포인트 쌍에 대한 편차의 곱의 평균인 모집단 공분산을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>COVARIANCE.S</b><br>added in v4.3</td>
            <td>=COVARIANCE.S(array1, array2), <br><br> where: <ul> <li><i>array1</i> - The first cell range of integers;</li> <li><i>array2</i> - The second cell range of integers;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. The arrays must have equal number of data points. </ul></td>
            <td>두 데이터 집합의 각 데이터 포인트 쌍에 대한 편차의 곱의 평균인 표본 공분산을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>DB</b></td>
            <td>=DB(cost, salvage, life, period, [month]), <br><br> where: <ul> <li><i>cost</i> - the initial cost of the asset;</li> <li><i>salvage</i> - the value of the asset at the end of the depreciation;</li> <li><i>life</i> - the number of periods over which the asset is being depreciated;</li> <li><i>period</i> - the period to calculate depreciation for;</li> <li><i>month</i> - optional, the number of months in the first year, 12 by default.</li> </ul></td>
            <td>고정 체감 잔액법을 사용하여 지정된 기간 동안 자산의 감가상각액을 계산합니다.</td>
        </tr>
        <tr>
            <td><b>DDB</b></td>
            <td>=DDB(cost, salvage, life, period, [factor]), <br><br> where: <ul> <li><i>cost</i> - the initial cost of the asset;</li> <li><i>salvage</i> - the value of the asset at the end of the depreciation;</li> <li><i>life</i> - the number of periods over which the asset is being depreciated;</li> <li><i>period</i> - the period to calculate depreciation for;</li> <li><i>factor</i> - optional, the rate at which the balance declines, 2 (the double-declining balance method) by default</li> </ul></td>
            <td>이중 체감 잔액법 또는 직접 지정한 방법을 사용하여 지정된 기간 동안 자산의 감가상각액을 계산합니다.</td>
        </tr>
        <tr>
            <td><b>DEC2BIN</b><br>added in v4.3</td>
            <td>=DEC2BIN(number), <br><br> where: <ul> <li><i>number</i> - the decimal integer you want to convert (must be greater than -512 but less than 511);</li> </ul></td>
            <td>10진수를 2진수로 변환합니다.</td>
        </tr>
        <tr>
            <td><b>DEC2HEX</b><br>added in v4.3</td>
            <td>=DEC2HEX(number), <br><br> where: <ul> <li><i>number</i> - the decimal integer you want to convert (must be greater than -549755813888 but less than 549755813887);</li> </ul></td>
            <td>10진수를 16진수로 변환합니다.</td>
        </tr>
        <tr>
            <td><b>DEC2OCT</b><br>added in v4.3</td>
            <td>=DEC2OCT(number), <br><br> where: <ul> <li><i>number</i> - the decimal integer you want to convert (must be greater than -536870912 but less than 536870911);</li> </ul></td>
            <td>10진수를 8진수로 변환합니다.</td>
        </tr>
        <tr>
            <td><b>DELTA</b><br>added in v4.3</td>
            <td>=DELTA(number1, [number2]), <br><br> where: <ul> <li><i>number1</i> - the first number;</li> <li><i>number2</i> - optional, the second number. If omitted, number2 is assumed to be zero.</li> </ul></td>
            <td>두 숫자가 같은지 검사합니다. number1 = number2이면 1을 반환하고, 그렇지 않으면 0을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>DEVSQ</b><br>added in v4.3</td>
            <td>=DEVSQ(number1, [number2], ...), <br><br> where: <ul> <li><i>number1, number2,...</i> - from 1 to 255 arguments for which you want to calculate the sum of squared deviations;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. </ul></td>
            <td>데이터 포인트의 표본 평균으로부터의 편차 제곱합을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>DOLLARDE</b></td>
            <td>=DOLLARDE(fractional_dollar, fraction)</td>
            <td>정수 부분과 분수 부분으로 표현된 달러 가격을 소수로 표시된 달러 가격으로 변환합니다.</td>
        </tr>
        <tr>
            <td><b>DOLLARFR</b></td>
            <td>=DOLLARFR(decimal_dollar, fraction)</td>
            <td>소수 형식의 달러 숫자를 분수 형식의 달러 숫자로 변환합니다.</td>
        </tr>
        <tr>
            <td><b>EFFECT</b></td>
            <td>=EFFECT(nominal_rate, npery)<br><br> <i>nominal_rate</i> must be >= 0, <i>npery</i> must be > 1.</td>
            <td>명목 연이율과 연간 복리 계산 횟수를 기반으로 유효 연이율을 반환합니다.<br> 숫자 값을 사용합니다. </td>
        </tr>
        <tr>
            <td><b>ERF</b><br>added in v4.3</td>
            <td>=ERF(lower_limit, [upper_limit]), <br><br> where: <ul> <li><i>lower_limit</i> - the lower bound for integrating ERF; </li> <li><i>upper_limit</i> - the upper bound for integrating ERF. If omitted, ERF integrates between 0 and lower_limit. </li> </ul> </td>
            <td>lower_limit와 upper_limit 사이에서 적분된 오차 함수를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>ERFC</b><br>added in v4.3</td>
            <td>=ERFC(x), <br><br> where: <ul> <li><i>x</i> - the lower bound for integrating ERFC </li> </ul></td>
            <td>x와 무한대 사이에서 적분된 여오차 함수(ERF)를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>EXP</b><br>added in v4.3</td>
            <td>=EXP(number), <br><br> where: <ul> <li><i>number</i> - the power that e is raised to </li> </ul></td>
            <td>상수 e(2.71828182845904)를 지정한 숫자만큼 거듭제곱한 결과를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>FISHER</b><br>added in v4.3</td>
            <td>=FISHER(x), <br><br> where: <ul> <li><i>x</i> - the value for which you want to calculate the transformation </li> </ul></td>
            <td>지정한 값에 대한 Fisher 변환을 계산합니다.</td>
        </tr>
        <tr>
            <td><b>FISHERINV</b><br>added in v4.3</td>
            <td>=FISHERINV(y), <br><br> where: <ul> <li><i>y</i> - the value for which you want to perform the inverse of the transformation </li> </ul></td>
            <td>Fisher 변환의 역변환을 계산하여 -1과 +1 사이의 값을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>FV</b></td>
            <td>=FV(rate, nper, pmt, [pv], [type]), <br><br> where: <ul> <li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>nper</i> - the total number of payment periods in an annuity. For monthly payments, <i>nper</i>=nper*12;</li> <li><i>pmt</i> - the payment made each period;</li> <li><i>pv</i> - optional, the present value, or the lump-sum amount that a series of future payments is worth right now, 0 by default;</li> <li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li> </ul></td>
            <td>투자의 미래 가치를 계산합니다. </td>
        </tr>
        <tr>
            <td><b>FVSCHEDULE</b></td>
            <td>=FVSCHEDULE(principal, schedule), <br><br> where: <ul> <li><i>principal</i> - the present value;</li> <li><i>schedule</i> - an array of interest rates to apply. The values in the array can be numbers or blank cells; any other value produces the error value. Blank cells are taken as zeros.</li> </ul></td>
            <td>일련의 복리 이자율을 적용한 후 초기 원금(=현재 가치)의 미래 가치를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>GAMMA</b><br>added in v4.3</td>
            <td>=GAMMA(number)<br><br> 
            If Number is a negative integer or 0, GAMMA returns the #Error value.</td>
            <td>감마 함수 값을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>GEOMEAN</b><br>added in v4.3</td>
            <td>=GEOMEAN(number1, [number2], ...)<br><br> where: <ul> <li><i>number1, number2,...</i> - from 1 to 255 arguments for which you want to calculate the mean;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. </ul></td>
            <td>양수 데이터 배열 또는 범위의 기하 평균을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>GESTEP</b><br>added in v4.3</td>
            <td>=GESTEP(number, [step])<br><br> where: <ul> <li><i>number</i> - the value to test against step;</li> <li><i>step</i> - optional, the threshold value. If you omit a value for step, GESTEP uses zero;</li> </ul></td>
            <td>number ≥ step이면 1을 반환하고, 그렇지 않으면 0을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>HARMEAN</b><br>added in v4.3</td>
            <td>=HARMEAN(number1, [number2], ...)<br><br> where: <ul> <li><i>number1, number2,...</i> - from 1 to 255 arguments for which you want to calculate the mean;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. </ul></td>
            <td>데이터 집합의 조화 평균을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>HEX2BIN</b><br>added in v4.3</td>
            <td>=HEX2BIN(number)<br><br> where: <ul> <li><i>number</i> - the hexadecimal number you want to convert. Number can't contain more than 10 characters;</li> </ul></td>
            <td>16진수를 2진수로 변환합니다.</td>
        </tr>
        <tr>
            <td><b>HEX2DEC</b><br>added in v4.3</td>
            <td>=HEX2DEC(number)<br><br> where: <ul> <li><i>number</i> - the hexadecimal number you want to convert. Number can't contain more than 10 characters;</li> </ul></td>
            <td>16진수를 10진수로 변환합니다.</td>
        </tr>
        <tr>
            <td><b>HEX2OCT</b><br>added in v4.3</td>
            <td>=HEX2OCT(number)<br><br> where: <ul> <li><i>number</i> - the hexadecimal number you want to convert. Number can't contain more than 10 characters;</li> </ul></td>
            <td>16진수를 8진수로 변환합니다.</td>
        </tr>
        <tr>
            <td><b>IMABS</b><br>added in v4.3</td>
            <td>=IMABS(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>x + yi 또는 x + yj 형식의 복소수의 절댓값을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>IMAGINARY</b><br>added in v4.3</td>
            <td>=IMAGINARY(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>x + yi 또는 x + yj 형식으로 주어진 복소수의 허수 계수를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>IMCONJUGATE</b><br>added in v4.3</td>
            <td>=IMCONJUGATE(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>x + yi 또는 x + yj 형식으로 주어진 복소수의 켤레 복소수를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>IMCOS</b><br>added in v4.3</td>
            <td>=IMCOS(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>x + yi 또는 x + yj 형식으로 주어진 복소수의 코사인을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>IMCOSH</b><br>added in v4.3</td>
            <td>=IMCOSH(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>x + yi 또는 x + yj 형식으로 주어진 복소수의 쌍곡 코사인을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>IMCOT</b><br>added in v4.3</td>
            <td>=IMCOT(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>x + yi 또는 x + yj 형식으로 주어진 복소수의 코탄젠트를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>IMCSC</b><br>added in v4.3</td>
            <td>=IMCSC(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>x + yi 또는 x + yj 형식으로 주어진 복소수의 코시컨트를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>IMCSCH</b><br>added in v4.3</td>
            <td>=IMCSCH(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>x + yi 또는 x + yj 형식으로 주어진 복소수의 쌍곡 코시컨트를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>IMDIV</b><br>added in v4.3</td>
            <td>=IMDIV(inumber1, inumber2)<br><br> where: <ul> <li><i>inumber1</i> - the complex numerator or dividend</li> <li><i>inumber2</i> - the complex denominator or divisor</li> </ul></td>
            <td>x + yi 또는 x + yj 형식으로 주어진 두 복소수의 몫을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>IMEXP</b><br>added in v4.3</td>
            <td>=IMEXP(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>x + yi 또는 x + yj 형식으로 주어진 복소수의 지수를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>IMLN</b><br>added in v4.3</td>
            <td>=IMLN(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>x + yi 또는 x + yj 형식으로 주어진 복소수의 자연 로그를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>IMPOWER</b><br>added in v4.3</td>
            <td>=IMPOWER(inumber, number)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> <li><i>number</i> - the power to which you want to raise the complex number</li> </ul></td>
            <td>x + yi 또는 x + yj 텍스트 형식의 복소수를 지정한 거듭제곱으로 올린 결과를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>IMPRODUCT</b><br>added in v4.3</td>
            <td>=IMPRODUCT(inumber1, [inumber2], ...)<br><br> where: <ul> <li><i>inumber1, inumber2,...</i> - from 1 to 255 complex numbers to multiply</li> </ul></td>
            <td>x + yi 또는 x + yj 형식으로 주어진 1~255개의 복소수의 곱을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>IMREAL</b><br>added in v4.3</td>
            <td>=IMREAL(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>x + yi 또는 x + yj 형식으로 주어진 복소수의 실수 계수를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>IMSEC</b><br>added in v4.3</td>
            <td>=IMSEC(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>x + yi 또는 x + yj 형식으로 주어진 복소수의 시컨트를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>IMSECH</b><br>added in v4.3</td>
            <td>=IMSECH(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>x + yi 또는 x + yj 형식으로 주어진 복소수의 쌍곡 시컨트를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>IMSIN</b><br>added in v4.3</td>
            <td>=IMSIN(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>x + yi 또는 x + yj 형식으로 주어진 복소수의 사인을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>IMSINH</b><br>added in v4.3</td>
            <td>=IMSINH(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>x + yi 또는 x + yj 형식으로 주어진 복소수의 쌍곡 사인을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>IMSQRT</b><br>added in v4.3</td>
            <td>=IMSQRT(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>x + yi 또는 x + yj 형식으로 주어진 복소수의 제곱근을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>IMSUB</b><br>added in v4.3</td>
            <td>=IMSUB(inumber1, inumber2)<br><br> where: <ul> <li><i>inumber1</i> - a complex number from which to subtract inumber2;</li> <li><i>inumber2</i> - the complex number to subtract from inumber1</li> </ul></td>
            <td>x + yi 또는 x + yj 형식으로 주어진 두 복소수의 차를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>IMSUM</b><br>added in v4.3</td>
            <td>=IMSUB(inumber1, [inumber2], ...)<br><br> where: <ul> <li><i>inumber1, inumber2,...</i> - from 1 to 255 complex numbers to add</li> </ul></td>
            <td>x + yi 또는 x + yj 형식으로 주어진 두 개 이상의 복소수의 합을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>IMTAN</b><br>added in v4.3</td>
            <td>=IMTAN(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>x + yi 또는 x + yj 형식으로 주어진 복소수의 탄젠트를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>IPMT</b></td>
            <td>=IPMT(rate, per, nper, pv, [fv], [type]), <br><br> where: <ul> <li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>per</i> - the period for which you want to find the interest and must be in the range between 1 and nper;</li> <li><i>nper</i> - the total number of payment periods in an annuity. For monthly payments, <i>nper</i>=nper*12;</li> <li><i>pv</i> - the present value, or the lump-sum amount that a series of future payments is worth right now;</li> <li><i>fv</i> - optional, the future value, 0 by default;</li> <li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li> </ul></td>
            <td>정기적이고 일정한 지급액과 고정 이자율을 기반으로 특정 기간의 투자에 대한 이자 지급액을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>IRR</b></td>
            <td>=IRR(values, [guess]), <br><br> where: <ul> <li><i>values</i> - an array or reference to cells that contain values. The array must contain at least one positive value and one negative value;</li> <li><i>guess</i> - optional, an estimate for expected IRR, .1 (=10%) by default.</li> </ul></td>
            <td>정기적인 간격으로 발생하는 일련의 현금 흐름에 대한 내부 수익률(IRR)을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>ISPMT</b></td>
            <td>=ISPMT(rate, per, nper, pv), <br><br> where: <ul> <li><i>rate</i> - the interest rate for the investment. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>per</i> - the period for which you want to find the interest and must be in the range between 1 and nper;</li> <li><i>nper</i> - the total number of payment periods for the investment. For monthly payments, <i>nper</i>=nper*12;</li> <li><i>pv</i> - the present value of the investment. For a loan, pv is the loan amount.</li> </ul></td>
            <td>균등 원금 상환 방식의 대출(또는 투자)에서 지정된 기간에 지급(또는 수취)한 이자를 계산합니다.</td>
        </tr>
        <tr>
            <td><b>LARGE</b><br>added in v4.3</td>
            <td>=LARGE(array, k), <br><br> where: <ul> <li><i>array</i> - the array or range of data for which you want to determine the k-th largest value;</li> <li><i>k</i> - the position (from the largest) in the array or cell range of data to return.</li> </ul></td>
            <td>배열에서 k번째로 큰 값을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>MEDIAN</b><br>added in v4.3</td>
            <td>=MEDIAN(number1, [number2], ...), <br><br> where: <ul> <li><i>number1, number2,...</i> - from 1 to 255 numbers for which you want to calculate the median;</li> </ul></td>
            <td>주어진 숫자들의 중앙값을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>NOMINAL</b></td>
            <td>=NOMINAL(effect_rate, npery), <br><br><i>effect_rate</i> must be >= 0, <i>npery</i> must be > 1. </td>
            <td>유효 이율과 연간 복리 계산 횟수를 기반으로 명목 연이율을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>NPER</b></td>
            <td>=NPER(rate,pmt,pv,[fv],[type]), <br><br>where: <ul> <li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>pmt</i> - the payment made each period;</li> <li><i>pv</i> - the present value, or the lump-sum amount that a series of future payments is worth right now;</li> <li><i>fv</i> - optional, the future value, 0 by default;</li> <li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li> </ul></td>
            <td>정기적이고 일정한 지급액과 고정 이자율을 기반으로 투자의 기간 수를 반환합니다.<br></td>
        </tr>
        <tr>
            <td><b>NPV</b></td>
            <td>=NPV(rate,value1,[value2],...), <br><br> where: <ul> <li><i>rate</i> - the rate of discount over one year;</li> <li><i>value1, value2,...</i> - from 1 to 254 values representing cash flows (future payments and income).<br>Empty cells, logical values, text, or error values are ignored.</li> </ul></td>
            <td>할인율과 일련의 미래 지급액(음수 값) 및 수입(양수 값)을 사용하여 투자의 순현재가치를 계산합니다.</td>
        </tr>
        <tr>
            <td><b>OCT2BIN</b><br>added in v4.3</td>
            <td>=OCT2BIN(number), <br><br> where: <ul> <li><i>number</i> - the octal number you want to convert. It can't contain more than 10 characters;</li></ul></td>
            <td>8진수를 2진수로 변환합니다.</td>
        </tr>
        <tr>
            <td><b>OCT2DEC</b><br>added in v4.3</td>
            <td>=OCT2DEC(number), <br><br> where: <ul> <li><i>number</i> - the octal number you want to convert. Number may not contain more than 10 octal characters (30 bits)</li> </ul></td>
            <td>8진수를 10진수로 변환합니다.</td>
        </tr>
        <tr>
            <td><b>OCT2HEX</b><br>added in v4.3</td>
            <td>=OCT2HEX(number), <br><br> where: <ul> <li><i>number</i> - the octal number you want to convert. Number may not contain more than 10 octal characters (30 bits)</li> </ul></td>
            <td>8진수를 16진수로 변환합니다.</td>
        </tr>
        <tr>
            <td><b>PDURATION</b></td>
            <td>=PDURATION(rate, pv, fv), <br><br>where: <ul> <li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>pv</i> - the present value of the investment;</li> <li><i>fv</i> - the desired future value of the investment.</li> </ul><br> All arguments must be positive values.</td>
            <td>투자가 지정한 값에 도달하는 데 필요한 기간 수를 반환합니다.<br></td>
        </tr>
        <tr>
            <td><b>PERCENTILE</b><br>added in v4.3</td>
            <td>=PERCENTILE(array, k), <br><br> where: <ul> <li><i>array</i> - an array of data values;</li> <li><i>k</i> - the percentile value between 0 and 1, inclusive.</li> </ul></td>
            <td>범위에서 k번째 백분위수 값을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>PERCENTILE.EXC</b><br>added in v4.3</td>
            <td>=PERCENTILE.EXC(array, k), <br><br> where: <ul> <li><i>array</i> - an array of data values;</li> <li><i>k</i> - the percentile value between 0 and 1, exclusive.</li> </ul></td>
            <td>범위에서 k번째 백분위수 값을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>PERCENTILE.INC</b><br>added in v4.3</td>
            <td>=PERCENTILE.INC(array, k), <br><br> where: <ul> <li><i>array</i> - an array of data values;</li> <li><i>k</i> - the percentile value between 0 and 1, inclusive.</li> </ul></td>
            <td>범위에서 k번째 백분위수 값을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>PERMUT</b><br>added in v4.3</td>
            <td>=PERMUT(number, number_chosen), <br><br> where: <ul> <li><i>number</i> - the total number of items;</li> <li><i>number_chosen</i> - the number of items in each combination.</li> </ul></td>
            <td>주어진 개수의 항목에 대한 순열의 수를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>PMT</b></td>
            <td>=PMT(rate, nper, pv, [fv], [type]), <br><br> where: <ul> <li><i>rate</i> - the interest rate for the loan. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>nper</i> - the total number of months of payments for the loan. For monthly payments, <i>nper</i>=nper*12;</li> <li><i>pv</i> - the present value (or the current total amount of loan);</li> <li><i>fv</i> - optional, the future value, 0 by default;</li> <li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li> </ul></td>
            <td>일정한 지급액과 고정 이자율을 기반으로 대출의 월 납입금을 계산합니다.</td>
        </tr>
        <tr>
            <td><b>PPMT</b></td>
            <td>=PPMT(rate, per, nper, pv, [fv], [type]), <br><br>where: <ul><li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>per</i> - the period for which you want to find the interest and must be in the range between 1 and nper;</li> <li><i>nper</i> - the total number of payment years in an annuity. For monthly payments, <i>nper</i>=nper*12;</li> <li><i>pv</i> - the present value - the total amount that a series of future payments is worth now;</li> <li><i>fv</i> - the desired future value or a cash balance.</li> <li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li> </ul></td>
            <td>정기적이고 일정한 지급액과 고정 이자율을 기반으로 지정된 기간의 원금 상환액을 반환합니다. <br></td>
        </tr>
        <tr>
            <td><b>PV</b></td>
            <td>=PV(rate, nper, pmt, [fv], [type]), <br><br>where: <ul> <li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>nper</i> - the total number of payment years in an annuity. For monthly payments, <i>nper</i>=nper*12;</li> <li><i>pmt</i> - the payment made each period. If <i>pmt</i> is omitted, you must include the <i>fv</i> argument;</li> <li><i>fv</i> - optional, the desired future value or a cash balance.</li> <li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li> </ul></td>
            <td>고정 이자율을 기반으로 대출 또는 투자의 현재 가치를 반환합니다.<br></td>
        </tr>
        <tr>
            <td><b>QUARTILE</b><br>added in v4.3</td>
            <td>=QUARTILE(array, quart), <br><br> where: <ul> <li><i>array</i> - the array or cell range of numeric values;</li> <li><i>quart</i> - indicates which value to return (<a href="https://support.microsoft.com/en-us/office/quartile-function-93cf8f62-60cd-4fdb-8a92-8451041e1a2a">0-4</a>).</li> </ul></td>
            <td>데이터 집합의 사분위수를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>QUARTILE.EXC</b><br>added in v4.3</td>
            <td>=QUARTILE(array, quart), <br><br> where: <ul> <li><i>array</i> - the array or cell range of numeric values;</li> <li><i>quart</i> - indicates which value to return (1-3).</li> </ul></td>
            <td>0..1 범위의 백분위수 값(양 끝값 제외)을 기반으로 데이터 집합의 사분위수를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>QUARTILE.INC</b><br>added in v4.3</td>
            <td>=QUARTILE.INC(array, quart), <br><br> where: <ul> <li><i>array</i> - the array or cell range of numeric values;</li> <li><i>quart</i> - indicates which value to return (0-4).</li> </ul></td>
            <td>0..1 범위의 백분위수 값(양 끝값 포함)을 기반으로 데이터 집합의 사분위수를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>SIGN</b><br>added in v4.3</td>
            <td>=SIGN(number), <br><br> where: <ul> <li><i>number</i> - any real number</li> </ul></td>
            <td>숫자의 부호를 반환합니다. 양수이면 1, 0이면 0, 음수이면 -1을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>SMALL</b><br>added in v4.3</td>
            <td>=SMALL(array, k), <br><br> where: <ul> <li><i>array</i> - an array or range of numeric values;</li> <li><i>k</i> - the position (from 1 - the smallest value) in the data set.</li> </ul></td>
            <td>데이터 집합에서 위치를 기준으로 k번째로 작은 값을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>STEYX</b><br>added in v4.3</td>
            <td>=STEYX(known_y's, known_x's), <br><br> where: <ul> <li><i>known_y's</i> - an array or range of dependent data points;</li> <li><i>known_x's</i> - an array or range of independent data points.</li> </ul><br>Text, logical values, or empty cells are ignored. Zero values are included.</td>
            <td>회귀 분석에서 각 x에 대한 예측 y값의 표준 오차를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>SYD</b><br>added in v4.3</td>
            <td>=SYD(cost, salvage, life, per), <br><br> where: <ul> <li><i>cost</i> - the initial cost of the asset;</li> <li><i>salvage</i> - the asset value at the end of the depreciation;</li> <li><i>life</i> - the number of periods over which the asset is depreciated;</li> <li><i>per</i> - the period and must use the same units as life.</li> </ul></td>
            <td>지정된 기간 동안 자산의 연수합계법 감가상각액을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>TBILLPRICE</b><br>added in v4.3</td>
            <td>=TBILLPRICE(settlement, maturity, discount), <br><br> where: <ul> <li><i>settlement</i> - the settlement date of the Treasury bill;</li> <li><i>maturity</i> - the maturity date of the Treasury bill;</li> <li><i>discount</i> - the Treasury bill's percentage discount rate.</li> </ul></td>
            <td>재무성 단기 채권의 액면가 $100당 가격을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>TBILLYIELD</b><br>added in v4.3</td>
            <td>=TBILLYIELD(settlement, maturity, pr), <br><br> where: <ul> <li><i>settlement</i> - the settlement date of the Treasury bill;</li> <li><i>maturity</i> - the maturity date of the Treasury bill;</li> <li><i>pr</i> - the Treasury bill's price per $100 face value.</li> </ul></td>
            <td>재무성 단기 채권의 수익률을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>WEIBULL</b><br>added in v4.3</td>
            <td>=WEIBULL(x, alpha, beta, cumulative), <br><br> where: <ul> <li><i>x</i> - the value at which the function must be calculated (must be ≥ 0);</li> <li><i>alpha</i> - the alpha parameter to the distribution (must be > 0);</li> <li><i>beta</i> - the beta parameter to the distribution (must be > 0);</li> <li><i>cumulative</i> - the logical (true/false) argument which defines the type of distribution to be used. If True - Weibull cumulative distribution function, if False - Weibull probability density function </li> </ul></td>
            <td>와이블 분포를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>WEIBULL.DIST</b><br>added in v4.3</td>
            <td>=WEIBULL(x, alpha, beta, cumulative), <br><br> where: <ul> <li><i>x</i> - the value at which the function must be calculated (must be ≥ 0);</li> <li><i>alpha</i> - the alpha parameter to the distribution (must be > 0);</li> <li><i>beta</i> - the beta parameter to the distribution (must be > 0);</li> <li><i>cumulative</i> - the logical (true/false) argument which defines the type of distribution to be used. If True - Weibull cumulative distribution function, if False - Weibull probability density function </li> </ul></td>
            <td>와이블 분포를 반환합니다.</td>
        </tr>
    </tbody>
</table>

[스니펫 도구](https://snippet.dhtmlx.com/wux2b35b)에서 예제를 확인하십시오.
### 정보 함수 {#information-functions}

<table>
    <tbody>
        <tr>
            <td><b>함수</b></td>
            <td><b>수식</b></td>
            <td><b>설명</b></td>
        </tr>
        <tr>
            <td><b>ISBINARY</b></td>
            <td>=ISBINARY(value)</td>
            <td>값이 이진수이면 TRUE를 반환하고, 그렇지 않으면 FALSE를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>ISBLANK</b></td>
            <td>=ISBLANK(A1)</td>
            <td>셀이 비어 있으면 TRUE를 반환하고, 그렇지 않으면 FALSE를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>ISEVEN</b></td>
            <td>=ISEVEN(number)</td>
            <td>숫자가 짝수이면 TRUE를 반환하고, 홀수이면 FALSE를 반환합니다. <br>정수에 사용할 수 있습니다.</td>
        </tr>
        <tr>
            <td><b>ISNONTEXT</b></td>
            <td>=ISNONTEXT(value)</td>
            <td>셀에 텍스트 이외의 값이 포함되어 있으면 TRUE를 반환하고, 그렇지 않으면 FALSE를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>ISNUMBER</b></td>
            <td>=ISNUMBER(value)</td>
            <td>셀에 숫자가 포함되어 있으면 TRUE를 반환하고, 그렇지 않으면 FALSE를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>ISODD</b></td>
            <td>=ISODD(number)</td>
            <td>숫자가 홀수이면 TRUE를 반환하고, 짝수이면 FALSE를 반환합니다. <br>정수에 사용할 수 있습니다.</td>
        </tr>
        <tr>
            <td><b>ISTEXT</b></td>
            <td>=ISTEXT(value)</td>
            <td>값이 텍스트이면 TRUE를 반환하고, 그렇지 않으면 FALSE를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>N</b></td>
            <td>=N(value)</td>
            <td>값을 숫자로 변환하여 반환합니다.</td>
        </tr>
    </tbody>
</table>
<br>

[스니펫 도구](https://snippet.dhtmlx.com/wux2b35b)에서 예시를 확인하십시오.

### 조회 함수 {#lookup-functions}

<table>
    <tbody>
        <tr>
            <td><b>함수</b></td>
            <td><b>수식</b></td>
            <td><b>설명</b></td>
        </tr>
        <tr>
            <td><b>HLOOKUP</b><br>added in v4.3</td>
            <td>=HLOOKUP(lookup_value, table_array, row_index, [range_lookup]), <br><br> where: <ul> <li><i>lookup_value</i> - the value to search for;</li> <li><i>table_array</i> - the table from which to retrieve a value;</li> <li><i>column_index_num</i> - the row number in the table from which to retrieve a value;</li> <li><i>range_lookup</i> -  optional (1 by default):<br>0 - exact match, 1 - approximate match</li> </ul></td>
            <td>가로 방향 표에서 값을 조회합니다.</td>
        </tr>
        <tr>
            <td><b>INDEX</b><br>added in v4.3</td>
            <td>=INDEX(array, row_num, [column_num]), <br><br> where: <ul> <li><i>array</i> - a range of cells or an array constant;</li> <li><i>row_num</i> - the row position in the reference or array;</li> <li><i>column_num</i> - optional, the column position in the reference or array.</li> </ul></td>
            <td>범위 또는 배열의 지정된 위치에 있는 값을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>LOOKUP</b><br>added in v4.3</td>
            <td>=LOOKUP(lookup_value, lookup_vector, [result_vector]), <br><br> where: <ul> <li><i>lookup_value</i> - the value to search for;</li> <li><i>lookup_vector</i> - the one-row, or one-column range to search;</li> <li><i>result_vector</i> - optional, the one-row, or one-column range of results.</li> </ul></td>
            <td>단일 열 또는 단일 행 범위에서 값을 조회하고, 다른 단일 열 또는 단일 행 범위의 동일한 위치에서 값을 가져옵니다.</td>
        </tr>
        <tr>
            <td><b>MATCH</b><br>added in v4.3</td>
            <td>=MATCH(lookup_value, lookup_array, [match_type]), <br><br> where: <ul> <li><i>lookup_value</i> - the value that you want to match in <i>lookup_array</i>;</li> <li><i>lookup_array</i> - the range of cells;</li> <li><i>match_type</i> - optional (1 by default):<br>1- finds the largest value that is less than or equal to <i>lookup_value</i><br>0 - finds the value that is exactly equal to <i>lookup_value</i><br>-1 - finds the smallest value that is greater than or equal to <i>lookup_value</i></li> </ul></td>
            <td>셀 범위에서 지정된 항목을 검색하고, 해당 범위 내에서 그 항목의 상대적 위치를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>VLOOKUP</b><br>added in v4.3</td>
            <td>=VLOOKUP(lookup_value, table_array, column_index_num, [range_lookup]), <br><br> where: <ul> <li><i>lookup_value</i> - the value to search for in the first column of a table;</li> <li><i>table_array</i> - the table from which to retrieve a value;</li> <li><i>column_index_num</i> - the column number in the table from which to retrieve a value;</li> <li><i>range_lookup</i> -  optional (1 by default):<br>0 - exact match, 1 - approximate match</li> </ul></td>
            <td>첫 번째 열을 기준으로 세로 방향 표에서 값을 조회합니다.</td>
        </tr>
        <tr>
            <td><b>XLOOKUP</b><br>added in v4.3</td>
            <td>=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode]), <br><br> where: <ul> <li><i>lookup_value</i> - the value to search for;</li> <li><i>lookup_array</i> - the array or range to search;</li> <li><i>return_array</i> - the array or range to return;</li> <li><i>if_not_found</i> - optional, if a valid match is not found, returns the [if_not_found] text you supply;</li> <li><i>match_mode</i> -  optional (0 by default):<br>0 - Exact match<br>-1 - Exact match. If not found, returns the next smaller item<br>1 - Exact match. If not found, returns the next larger item</li> </ul></td>
            <td>범위 또는 배열을 검색하고 첫 번째 일치 항목에 해당하는 값을 반환합니다. 일치 항목이 없을 경우 XLOOKUP은 가장 가까운 (근사) 일치 항목을 반환할 수 있습니다.</td>
        </tr>
        <tr>
            <td><b>XMATCH</b><br>added in v4.3</td>
            <td>=XMATCH(lookup_value, lookup_array, [match_mode]), <br><br> where: <ul> <li><i>lookup_value</i> - the value that you want to match in <i>lookup_array</i>;</li> <li><i>lookup_array</i> - the range of cells;</li> <li><i>match_mode</i> - optional, 0 - exact match (default), -1 - exact match or next smallest, 1 - exact match or next larger</li> </ul></td>
            <td>조회를 수행하고 세로 또는 가로 범위 내의 위치를 반환합니다.</td>
        </tr>
    </tbody>
</table>
<br>

### 수학 함수 {#math-functions}

<table> 
    <tbody>
        <tr>
            <td><b>ABS</b></td>
            <td>숫자의 절댓값을 반환합니다. 절댓값은 항상 양수입니다.</td>
        </tr>
        <tr>
            <td><b>ACOS</b></td>
            <td>숫자의 아크코사인(역코사인)을 반환합니다. 아크코사인은 코사인 값이 <i>number</i>인 각도입니다. 숫자는 -1 이상 1 이하여야 합니다. 반환되는 각도는 0에서 pi 범위의 라디안 값입니다.</td>
        </tr>
        <tr>
            <td><b>ACOSH</b></td>
            <td>숫자의 역쌍곡코사인을 반환합니다. 숫자는 1 이상이어야 합니다.</td>
        </tr>
        <tr>
            <td><b>ACOT</b></td>
            <td>숫자의 아크코탄젠트(역코탄젠트)의 주값을 반환합니다. 반환되는 각도는 0에서 pi 범위의 라디안 값입니다.</td>
        </tr>
        <tr>
            <td><b>ACOTH</b></td>
            <td>숫자의 역쌍곡코탄젠트를 반환합니다. 숫자의 절댓값은 1보다 커야 합니다.</td>
        </tr>
        <tr>
            <td><b>ADD</b></td>
            <td>두 값의 합을 반환합니다. <br>빈 셀, TRUE와 같은 논리값, 또는 텍스트는 무시됩니다.</td>
        </tr>
        <tr>
            <td><b>ARABIC</b></td>
            <td>로마 숫자를 아라비아 숫자로 변환합니다.</td>
        </tr>
        <tr>
            <td><b>ASIN</b></td>
            <td>숫자의 아크사인(역사인)을 반환합니다. 아크사인은 사인 값이 <i>number</i>인 각도입니다. 숫자는 -1 이상 1 이하여야 합니다. 반환되는 각도는 -pi/2에서 pi/2 범위의 라디안 값입니다.</td>
        </tr>
        <tr>
            <td><b>ASINH</b></td>
            <td>숫자의 역쌍곡사인을 반환합니다. 역쌍곡사인은 쌍곡사인 값이 <i>number</i>인 값입니다. 실수에 적용됩니다.</td>
        </tr>
        <tr>
            <td><b>ATAN</b></td>
            <td>숫자의 아크탄젠트(역탄젠트)를 반환합니다. 아크탄젠트는 탄젠트 값이 <i>number</i>인 각도입니다. 반환되는 각도는 -pi/2에서 pi/2 범위의 라디안 값입니다. 원하는 각도의 탄젠트 값을 인수로 사용합니다.</td>
        </tr>
        <tr>
            <td><b>ATAN2</b></td>
            <td>(x,y) 좌표의 아크탄젠트를 반환합니다. 반환되는 아크탄젠트는 -pi에서 pi 사이(단, -pi 제외)의 라디안 값입니다.</td>
        </tr>
        <tr>
            <td><b>ATANH</b></td>
            <td>숫자의 역쌍곡탄젠트를 반환합니다. 숫자는 -1에서 1 사이여야 합니다(-1과 1은 제외). 실수에 적용됩니다.</td>
        </tr>
        <tr>
            <td><b>AVEDEV</b><br>added in v4.3</td>
            <td>데이터 요소의 평균으로부터의 절대 편차의 평균을 반환합니다.<br> 배열 또는 참조 영역의 빈 셀, 논리값, 텍스트, 오류 값은 무시됩니다. 값이 0인 셀은 포함됩니다.</td>
        </tr>
        <tr>
            <td><b>AVERAGE</b></td>
            <td>숫자 그룹의 평균(산술 평균)을 계산합니다. <br>배열 또는 참조 영역의 논리값, 빈 셀, 텍스트가 포함된 셀은 무시됩니다. <br>단, 값이 0인 셀은 포함됩니다.</td>
        </tr>
        <tr>
            <td><b>AVERAGEA</b><br>added in v4.3</td>
            <td>인수 목록에 있는 값의 평균(산술 평균)을 계산합니다. <br>인수는 숫자; 숫자를 포함하는 이름, 배열, 또는 참조; 숫자의 텍스트 표현; 또는 참조 내의 TRUE 및 FALSE와 같은 논리값이 될 수 있습니다.<br>배열 또는 참조 영역의 빈 셀과 텍스트 값은 무시됩니다.</td>
        </tr>
        <tr>
            <td><b>AVERAGEIF</b><br>added in v6.0</td>
            <td>주어진 조건을 충족하는 범위 내 모든 셀의 평균(산술 평균)을 반환합니다. <br>두 개의 필수 인수(평가할 범위와 조건) 및 하나의 선택적 인수(평가 범위와 다를 경우 평균을 구할 셀 범위)를 사용합니다.</td>
        </tr>
        <tr>
            <td><b>AVERAGEIFS</b><br>added in v6.0</td>
            <td>여러 조건을 충족하는 모든 셀의 평균(산술 평균)을 반환합니다. <br>필수 평균 범위와 하나 이상의 조건 범위 및 조건 인수 쌍을 사용합니다.</td>
        </tr>
        <tr>
            <td><b>BASE</b></td>
            <td>숫자를 지정된 진수(기수)로 변환합니다. <br>숫자는 정수여야 하며 0 이상 2^53 미만이어야 합니다.<br>기수는 변환할 대상 진법으로, 2 이상 36 이하의 정수여야 합니다.</td>
        </tr>
        <tr>
            <td><b>BITAND</b><br>added in v4.3</td>
            <td>두 숫자의 비트 단위 'AND'를 반환합니다.<br>숫자는 정수여야 하며 0 이상 (2^48)-1 이하여야 합니다.</td>
        </tr>
        <tr>
            <td><b>CEILING</b></td>
            <td>숫자를 가장 가까운 정수 또는 지정된 유효 자릿수의 가장 가까운 배수로 올림하여 반환합니다.</td>
        </tr>
        <tr>
            <td><b>COMBIN</b></td>
            <td>두 정수에 대한 조합의 수를 반환합니다: 항목 수(<i>number</i>)와 각 조합의 항목 수(<i>number_chosen</i>): <ul><li><i>number</i>는 0 이상이어야 하며 number_chosen 이상이어야 합니다.</li><li><i>number_chosen</i>은 0 이상이어야 합니다.</li></ul></td>
        </tr>
        <tr>
            <td><b>COMBINA</b></td>
            <td>반복을 포함하여 두 정수에 대한 조합의 수를 반환합니다. 숫자는 항목 수(<i>number</i>)와 각 조합의 항목 수(<i>number_chosen</i>)입니다: <ul><li><i>number</i>는 0 이상이어야 하며 number_chosen 이상이어야 합니다.</li><li><i>number_chosen</i>은 0 이상이어야 합니다.</li></ul></td>
        </tr>
        <tr>
            <td><b>COS</b></td>
            <td>라디안으로 지정된 각도의 코사인을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>COSH</b></td>
            <td>실수의 쌍곡코사인을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>CSC</b></td>
            <td>라디안으로 지정된 각도의 코시컨트를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>CSCH</b></td>
            <td>라디안으로 지정된 각도의 쌍곡코시컨트를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>COT</b></td>
            <td>라디안으로 지정된 각도의 코탄젠트를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>COTH</b></td>
            <td>쌍곡각도의 쌍곡코탄젠트를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>COUNT</b></td>
            <td>숫자가 들어 있는 셀의 수를 세고, 인수 목록에 있는 숫자를 셉니다.<br> 배열 또는 참조 영역의 빈 셀, 논리값, 텍스트, 오류 값은 계산되지 않습니다.</td>
        </tr>
        <tr>
            <td><b>COUNTA</b></td>
            <td>숫자, 텍스트, 논리값, 오류 값, 빈 텍스트("")가 들어 있는 셀의 수를 셉니다. 값이 0인 셀은 제외됩니다. <br>빈 셀은 계산되지 않습니다.</td>
        </tr>
        <tr>
            <td><b>COUNTBLANK</b></td>
            <td>지정된 범위에서 빈 셀의 수를 반환합니다. <br>값이 0인 셀은 계산되지 않습니다.</td>
        </tr>
        <tr>
            <td><b>COUNTIF</b><br>added in v6.0</td>
            <td>주어진 조건을 충족하는 범위 내 셀의 수를 셉니다. <br>두 개의 인수를 사용합니다: 평가할 셀 범위와 셀 개수를 결정하는 조건.</td>
        </tr>
        <tr>
            <td><b>COUNTIFS</b><br>added in v6.0</td>
            <td>여러 조건을 충족하는 셀의 수를 셉니다. <br>하나 이상의 범위와 조건 인수 쌍을 사용하며, 모든 조건을 충족하는 셀만 계산됩니다.</td>
        </tr>
        <tr>
            <td><b>DECIMAL</b></td>
            <td>주어진 진수(기수)로 표현된 숫자의 텍스트 표현을 십진수로 변환합니다.<br>기수는 2 이상 36 이하의 정수여야 합니다.</td>
        </tr>
        <tr>
            <td><b>DEGREES</b></td>
            <td>라디안을 도(°)로 변환합니다.</td>
        </tr>
        <tr>
            <td><b>DIVIDE</b></td>
            <td>한 숫자를 다른 숫자로 나눈 결과를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>EQ</b></td>
            <td>첫 번째 인수가 두 번째 인수와 같으면 TRUE를, 그렇지 않으면 FALSE를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>EVEN</b></td>
            <td>숫자를 가장 가까운 짝수 정수로 올림하여 반환합니다.</td>
        </tr>
        <tr>
            <td><b>FACT</b></td>
            <td>숫자의 팩토리얼을 반환합니다. 숫자는 1에서 n까지여야 합니다. 숫자가 정수가 아닌 경우 소수 부분이 잘립니다.</td>
        </tr>
        <tr>
            <td><b>FACTDOUBLE</b></td>
            <td>숫자의 이중 팩토리얼을 반환합니다. 숫자는 1에서 n까지여야 합니다. 숫자가 정수가 아닌 경우 소수 부분이 잘립니다.</td>
        </tr>
        <tr>
            <td><b>FLOOR</b></td>
            <td>숫자를 지정된 유효 자릿수의 가장 가까운 배수로 0 방향으로 내림합니다. 유효 자릿수는 1에서 n까지여야 합니다.<br>숫자가 양수이면 값을 내림하여 0 방향으로 조정합니다. 숫자가 음수이면 값을 내림하여 0에서 멀어지는 방향으로 조정합니다.</td>
        </tr>
        <tr>
            <td><b>GCD</b></td>
            <td>두 개 이상의 정수의 최대공약수를 반환합니다. 함수는 정수로 예상되는 1에서 255개의 숫자 값을 사용합니다. 값이 정수가 아닌 경우 소수 부분이 잘립니다.</td>
        </tr>
        <tr>
            <td><b>GT</b></td>
            <td>첫 번째 인수가 두 번째 인수보다 크면 TRUE를, 그렇지 않으면 FALSE를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>GTE</b></td>
            <td>첫 번째 인수가 두 번째 인수보다 크거나 같으면 TRUE를, 그렇지 않으면 FALSE를 반환합니다. </td>
        </tr>
        <tr>
            <td><b>INT</b></td>
            <td>숫자를 가장 가까운 정수로 내림하여 반환합니다.</td>
        </tr>
        <tr>
            <td><b>LN</b></td>
            <td>양의 실수의 자연로그를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>LOG</b></td>
            <td>지정한 밑수에 대한 양의 실수의 로그를 반환합니다. 밑수를 생략하면 10으로 간주합니다.</td>
        </tr>
        <tr>
            <td><b>LOG10</b></td>
            <td>양의 실수의 상용로그(밑수 10)를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>LT</b></td>
            <td>첫 번째 인수가 두 번째 인수보다 작으면 TRUE를, 그렇지 않으면 FALSE를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>LTE</b></td>
            <td>첫 번째 인수가 두 번째 인수보다 작거나 같으면 TRUE를, 그렇지 않으면 FALSE를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>MAX</b></td>
            <td>값 집합에서 가장 큰 값을 반환합니다. <br>함수는 빈 셀, 논리값 TRUE 및 FALSE, 텍스트 값을 무시합니다. 인수에 숫자가 없으면 MAX는 0을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>MAXIFS</b><br>added in v6.0</td>
            <td>주어진 조건 집합으로 지정된 셀 중 최댓값을 반환합니다. <br>필수 최대값 범위와 하나 이상의 조건 범위 및 조건 인수 쌍을 사용합니다.</td>
        </tr>
        <tr>
            <td><b>MIN</b></td>
            <td>값 집합에서 가장 작은 숫자를 반환합니다. <br>배열 또는 참조 영역의 빈 셀, 논리값, 텍스트는 무시됩니다. 인수에 숫자가 없으면 MIN은 0을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>MINIFS</b><br>added in v6.0</td>
            <td>주어진 조건 집합으로 지정된 셀 중 최솟값을 반환합니다. <br>필수 최솟값 범위와 하나 이상의 조건 범위 및 조건 인수 쌍을 사용합니다.</td>
        </tr>
        <tr>
            <td><b>MINUS</b></td>
            <td>두 숫자의 차를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>MOD</b></td>
            <td>숫자를 제수로 나눈 후의 나머지를 반환합니다. 결과의 부호는 제수의 부호와 같습니다.</td>
        </tr>
        <tr>
            <td><b>MROUND</b></td>
            <td>지정된 유효 자릿수의 가장 가까운 배수로 반올림한 숫자를 반환합니다. <i>number</i>와 <i>multiple</i>의 값은 부호가 같아야 합니다.</td>
        </tr>
        <tr>
            <td><b>MULTINOMIAL</b></td>
            <td>값의 합에 대한 팩토리얼과 팩토리얼의 곱 사이의 비율을 반환합니다. 함수는 0 이상이어야 하는 1에서 255개의 숫자 값을 사용합니다.</td>
        </tr>
        <tr>
            <td><b>MULTIPLY</b></td>
            <td>두 숫자를 곱한 결과를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>NE</b></td>
            <td>첫 번째 인수가 두 번째 인수와 같지 않으면 TRUE를, 그렇지 않으면 FALSE를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>ODD</b></td>
            <td>숫자를 가장 가까운 홀수 정수로 올림하여 반환합니다.</td>
        </tr>
        <tr>
            <td><b>PI</b></td>
            <td>3.14159265358979(15자리까지 정확한 수학 상수 pi)를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>POW</b></td>
            <td>숫자를 지정된 거듭제곱으로 올린 결과를 반환합니다. <br>실수에 적용됩니다.</td>
        </tr>
        <tr>
            <td><b>POWER</b></td>
            <td>숫자를 지정된 거듭제곱으로 올린 결과를 반환합니다. <br>실수에 적용됩니다.</td>
        </tr>
        <tr>
            <td><b>PRODUCT</b></td>
            <td>인수로 지정된 모든 숫자를 곱하고 그 결과를 반환합니다.<br>
배열 또는 참조 영역의 숫자만 곱해집니다. 빈 셀, 논리값, 텍스트는 무시됩니다.</td>
        </tr>
        <tr>
            <td><b>QUOTIENT</b></td>
            <td>나머지 없이 정수 나눗셈의 결과를 반환합니다. <br>실수에 적용됩니다.</td>
        </tr>
        <tr>
            <td><b>RADIANS</b></td>
            <td>도(°)를 라디안으로 변환합니다.</td>
        </tr>
        <tr>
            <td><b>RAND</b></td>
            <td>0 이상 1 미만의 난수를 반환합니다. <br>스프레드시트가 재계산될 때마다 새로운 난수를 반환합니다. </td>
        </tr>
        <tr>
            <td><b>RANDBETWEEN</b></td>
            <td>두 지정된 숫자 사이의 난수를 반환합니다.<br>스프레드시트가 재계산될 때마다 새로운 난수를 반환합니다. </td>
        </tr>
        <tr>
            <td><b>ROMAN</b></td>
            <td>아라비아 숫자를 로마 숫자로 변환합니다.</td>
        </tr>
        <tr>
            <td><b>ROUND</b></td>
            <td>지정된 자릿수로 반올림한 숫자를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>ROUNDDOWN</b></td>
            <td>지정된 자릿수로 내림한 숫자를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>ROUNDUP</b></td>
            <td>지정된 자릿수로 올림한 숫자를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>SEC</b></td>
            <td>라디안으로 지정된 각도의 시컨트를 반환합니다.<br>숫자 값에 적용됩니다.</td>
        </tr>
        <tr>
            <td><b>SECH</b></td>
            <td>라디안으로 지정된 각도의 쌍곡시컨트를 반환합니다.<br>숫자 값에 적용됩니다.</td>
        </tr>
        <tr>
            <td><b>SIN</b></td>
            <td>라디안으로 지정된 각도의 사인을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>SINH</b></td>
            <td>실수의 쌍곡사인을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>SQRT</b></td>
            <td>숫자의 양의 제곱근을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>SQRTPI</b></td>
            <td>숫자와 pi를 곱한 값의 제곱근을 반환합니다. 숫자는 0 이상이어야 합니다.</td>
        </tr>
        <tr>
            <td><b>STDEV</b></td>
            <td>모집단의 표본을 나타내는 데이터를 기반으로 표준 편차를 계산합니다. <br>표준 편차는 값이 평균값(mean)에서 얼마나 퍼져 있는지를 나타내는 척도입니다.<br>배열 또는 참조 영역의 빈 셀, 논리값, 텍스트, 오류 값은 무시됩니다.</td>
        </tr>
        <tr>
            <td><b>STDEVA</b></td>
            <td>표본을 기반으로 표준 편차를 계산합니다. <br>표준 편차는 값이 평균값(mean)에서 얼마나 퍼져 있는지를 나타내는 척도입니다.<br>배열 또는 참조 영역의 빈 셀과 텍스트 값은 무시됩니다.</td>
        </tr>
        <tr>
            <td><b>STDEVP</b></td>
            <td>전체 모집단의 숫자를 기반으로 표준 편차를 계산합니다. <br>표준 편차는 값이 평균값(mean)에서 얼마나 퍼져 있는지를 나타내는 척도입니다.<br>배열 또는 참조 영역의 빈 셀, 논리값, 텍스트, 오류 값은 무시됩니다.</td>
        </tr>
        <tr>
            <td><b>STDEVPA</b></td>
            <td>텍스트(0으로 평가) 및 논리값(TRUE는 1, FALSE는 0으로 평가)을 포함하여 인수로 지정된 전체 모집단을 기반으로 표준 편차를 계산합니다. <br>표준 편차는 값이 평균값(mean)에서 얼마나 퍼져 있는지를 나타내는 척도입니다.<br>인수가 배열 또는 참조인 경우 해당 배열 또는 참조의 값만 사용됩니다. 빈 셀과 텍스트 값은 무시됩니다.<br> 오류 값은 오류를 발생시킵니다.</td>
        </tr>
        <tr>
            <td><b>STDEV.S</b><br>added in v4.3</td>
            <td>표본을 기반으로 표준 편차를 추정합니다(표본의 논리값과 텍스트는 무시). <br>표준 편차는 값이 평균값(mean)에서 얼마나 퍼져 있는지를 나타내는 척도입니다.<br>인수가 배열 또는 참조인 경우 해당 배열 또는 참조의 값만 사용됩니다. 빈 셀, 논리값, 텍스트, 오류 값은 무시됩니다.<br> 오류 값은 오류를 발생시킵니다.</td>
        </tr>
        <tr>
            <td><b>SUBTOTAL</b></td>
            <td>목록 또는 데이터베이스에서 부분합을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>SUM</b></td>
            <td>제공된 값의 합을 반환합니다. <br>빈 셀, TRUE와 같은 논리값, 또는 텍스트는 무시됩니다.</td>
        </tr>
        <tr>
            <td><b>SUMIF</b><br>added in v6.0</td>
            <td>지정된 조건을 충족하는 범위 내의 셀을 더합니다. <br>두 개의 필수 인수(평가할 범위와 조건) 및 하나의 선택적 인수(평가 범위와 다를 경우 합산할 셀 범위)를 사용합니다.</td>
        </tr>
        <tr>
            <td><b>SUMIFS</b><br>added in v6.0</td>
            <td>여러 조건을 충족하는 범위 내의 셀을 더합니다. <br>필수 합산 범위와 하나 이상의 조건 범위 및 조건 인수 쌍을 사용하며, 모든 조건을 충족하는 셀만 합산에 포함됩니다.</td>
        </tr>
        <tr>
            <td><b>SUMPRODUCT</b></td>
            <td>셀 범위 또는 배열을 곱하고 그 합을 반환합니다. <br>유효한 곱에 대해서는 숫자만 곱해집니다. <br>빈 셀, 논리값, 텍스트는 무시됩니다. <br>숫자가 아닌 배열 항목은 0으로 처리됩니다.</td>
        </tr>
        <tr>
            <td><b>SUMSQ</b></td>
            <td>인수의 제곱의 합을 반환합니다. <br>배열 또는 참조 영역의 빈 셀, 논리값, 텍스트, 오류 값은 무시됩니다.</td>
        </tr>
        <tr>
            <td><b>SUMX2MY2</b></td>
            <td>두 배열의 해당 값의 제곱 차이의 합을 반환합니다.<br>인수는 숫자이거나 숫자를 포함하는 이름, 배열, 또는 참조여야 합니다.<br>배열 또는 참조 영역의 빈 셀, 논리값, 텍스트, 오류 값은 무시됩니다. 0인 값은 포함됩니다.</td>
        </tr>
        <tr>
            <td><b>SUMX2PY2</b></td>
            <td>두 배열의 해당 값의 제곱 합의 합을 반환합니다.<br>인수는 숫자이거나 숫자를 포함하는 이름, 배열, 또는 참조여야 합니다.<br>배열 또는 참조 영역의 빈 셀, 논리값, 텍스트, 오류 값은 무시됩니다. 0인 값은 포함됩니다.</td>
        </tr>
        <tr>
            <td><b>SUMXMY2</b></td>
            <td>두 배열의 해당 값의 차이의 제곱 합을 반환합니다.<br>인수는 숫자이거나 숫자를 포함하는 이름, 배열, 또는 참조여야 합니다.<br>배열 또는 참조 영역의 빈 셀, 논리값, 텍스트, 오류 값은 무시됩니다. 0인 값은 포함됩니다.</td>
        </tr>
        <tr>
            <td><b>TAN</b></td>
            <td>라디안으로 지정된 각도의 탄젠트를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>TANH</b></td>
            <td>실수의 쌍곡탄젠트를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>TRUNC</b></td>
            <td>소수 부분을 제거하여 숫자를 정수로 자릅니다.</td>
        </tr>
        <tr>
            <td><b>VAR</b></td>
            <td>표본을 기반으로 분산을 반환합니다.<br>배열 또는 참조 영역의 빈 셀, 논리값, 텍스트, 오류 값은 무시됩니다.</td>
        </tr>
        <tr>
            <td><b>VARA</b></td>
            <td>텍스트(0으로 평가) 및 논리값(TRUE는 1, FALSE는 0으로 평가)을 포함하여 모집단 표본을 기반으로 분산을 반환합니다.<br>배열 또는 참조 영역의 빈 셀과 텍스트 값은 무시됩니다.</td>
        </tr>
        <tr>
            <td><b>VARP</b></td>
            <td>전체 모집단의 숫자를 기반으로 모집단의 분산을 반환합니다.<br>배열 또는 참조 영역의 빈 셀, 논리값, 텍스트, 오류 값은 무시됩니다.</td>
        </tr>
        <tr>
            <td><b>VARPA</b></td>
            <td>텍스트(0으로 평가) 및 논리값(TRUE는 1, FALSE는 0으로 평가)을 포함하여 전체 모집단을 기반으로 모집단의 분산을 반환합니다.<br>배열 또는 참조 영역의 빈 셀과 텍스트 값은 무시됩니다.</td>
        </tr>
        <tr>
            <td><b>VAR.S</b><br>added in v4.3</td>
            <td>표본을 기반으로 분산을 반환합니다(표본의 논리값과 텍스트는 무시).<br>배열 또는 참조 영역의 빈 셀, 논리값, 텍스트, 오류 값은 무시됩니다.</td>
        </tr>
    </tbody>
</table>
<br>

[스니펫 도구](https://snippet.dhtmlx.com/wux2b35b)에서 예제를 확인하세요.
### 배열 함수 {#array-functions}

다음 배열 함수는 v6.0에서 추가되었습니다.

<table>
    <tbody>
        <tr>
            <td><b>함수</b></td>
            <td><b>수식</b></td>
            <td><b>설명</b></td>
        </tr>
        <tr>
            <td><b>CHOOSECOLS</b></td>
            <td>=CHOOSECOLS(array, col_num1, [col_num2], ...)</td>
            <td>배열 또는 범위에서 지정한 열을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>CHOOSEROWS</b></td>
            <td>=CHOOSEROWS(array, row_num1, [row_num2], ...)</td>
            <td>배열 또는 범위에서 지정한 행을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>DROP</b></td>
            <td>=DROP(array, [rows], [columns])</td>
            <td>배열의 시작 또는 끝에서 지정한 수의 행 또는 열을 제거합니다.</td>
        </tr>
        <tr>
            <td><b>EXPAND</b></td>
            <td>=EXPAND(array, [rows], [columns], [pad_with])</td>
            <td>배열을 지정한 행 및 열 크기로 확장하거나 채웁니다.</td>
        </tr>
        <tr>
            <td><b>RANDARRAY</b></td>
            <td>=RANDARRAY([rows], [columns], [min], [max], [integer])</td>
            <td>기본적으로 0과 1 사이의 난수 배열을 반환합니다. 채울 행 및 열 수, 최솟값과 최댓값, 정수 또는 소수 반환 여부를 지정할 수 있습니다.</td>
        </tr>
        <tr>
            <td><b>SEQUENCE</b></td>
            <td>=SEQUENCE(rows, [columns], [start], [step])</td>
            <td>1, 2, 3, 4와 같이 배열에서 연속적인 숫자 목록을 생성합니다.</td>
        </tr>
        <tr>
            <td><b>SORT</b></td>
            <td>=SORT(array, [sort_index], [sort_order], [by_col])</td>
            <td>범위 또는 배열의 내용을 정렬합니다. 기본적으로 첫 번째 열을 기준으로 오름차순으로 정렬합니다.</td>
        </tr>
        <tr>
            <td><b>SORTBY</b></td>
            <td>=SORTBY(array, by_array, [sort_order], ...)</td>
            <td>대응하는 범위 또는 배열의 값을 기준으로 범위 또는 배열의 내용을 정렬합니다.</td>
        </tr>
        <tr>
            <td><b>TAKE</b></td>
            <td>=TAKE(array, [rows], [columns])</td>
            <td>배열의 시작 또는 끝에서 지정한 수의 연속된 행 또는 열을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>TEXTSPLIT</b></td>
            <td>=TEXTSPLIT(text, col_delimiter, [row_delimiter], [ignore_empty], [match_mode], [pad_with])</td>
            <td>지정한 구분 기호를 사용하여 텍스트 문자열을 행과 열로 분할합니다.</td>
        </tr>
        <tr>
            <td><b>TOCOL</b></td>
            <td>=TOCOL(array, [ignore], [scan_by_column])</td>
            <td>배열 또는 범위를 단일 열로 변환합니다.</td>
        </tr>
        <tr>
            <td><b>TOROW</b></td>
            <td>=TOROW(array, [ignore], [scan_by_column])</td>
            <td>배열 또는 범위를 단일 행으로 변환합니다.</td>
        </tr>
        <tr>
            <td><b>UNIQUE</b></td>
            <td>=UNIQUE(array, [by_col], [exactly_once])</td>
            <td>범위 또는 배열에서 고유한 값 목록을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>WRAPCOLS</b></td>
            <td>=WRAPCOLS(vector, wrap_count, [pad_with])</td>
            <td>지정한 값 수 이후에 행 또는 열 벡터를 열 기준으로 2D 배열로 줄 바꿈합니다.</td>
        </tr>
        <tr>
            <td><b>WRAPROWS</b></td>
            <td>=WRAPROWS(vector, wrap_count, [pad_with])</td>
            <td>지정한 값 수 이후에 행 또는 열 벡터를 행 기준으로 2D 배열로 줄 바꿈합니다.</td>
        </tr>
    </tbody>
</table>
<br>

[스니펫 도구](https://snippet.dhtmlx.com/wux2b35b)에서 예제를 확인하십시오.
### 정규식 함수 {#regex-functions}

<table>
    <tbody>
        <tr>
            <td><b>함수</b></td>
            <td><b>수식</b></td>
            <td><b>설명</b></td>
        </tr>
        <tr>
            <td><b>REGEXREPLACE</b></td>
            <td>=REGEXREPLACE(text, regular_expression, replacement)</td>
            <td>정규 표현식을 사용하여 텍스트 문자열의 일부를 다른 텍스트 문자열로 대체합니다.</td>
        </tr>
        <tr>
            <td><b>REGEXMATCH</b></td>
            <td>=REGEXMATCH(text, regular_expression)</td>
            <td>텍스트 문자열이 정규 표현식의 패턴과 일치하면 TRUE를 반환하고, 일치하지 않으면 FALSE를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>REGEXEXTRACT</b></td>
            <td>=REGEXEXTRACT(text, regular_expression)</td>
            <td>정규 표현식의 패턴과 일치하는 문자열 부분을 반환합니다.</td>
        </tr>
    </tbody>
</table>
<br>

[스니펫 도구](https://snippet.dhtmlx.com/wux2b35b)에서 예제를 확인하십시오.

### 문자열 함수 {#string-functions}

<table>
    <tbody>
        <tr>
            <td><b>함수</b></td>
            <td><b>수식</b></td>
            <td><b>설명</b></td>
        </tr>
        <tr>
            <td><b>ARRAYTOTEXT</b><br>added in v4.3</td>
            <td>=ARRAYTOTEXT(array, [format])</td>
            <td>지정된 형식(0 - 간결 (기본값) 또는 1 - 엄격한 형식)에 따라 지정한 범위에서 텍스트 값 배열을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>CHAR</b></td>
            <td>=CHAR(number)</td>
            <td>숫자로 지정된 문자(컴퓨터에서 사용하는 문자 집합에서)를 반환합니다. 숫자는 1과 255 사이여야 합니다.</td>
        </tr>
        <tr>
            <td><b>CLEAN</b></td>
            <td>=CLEAN(text)</td>
            <td>인쇄 옵션 사용 시 인쇄되지 않는 문자를 텍스트에서 제거합니다.</td>
        </tr>
        <tr>
            <td><b>CODE</b></td>
            <td>=CODE(text)</td>
            <td>텍스트 문자열의 첫 번째 문자에 대한 숫자 코드를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>CONCATENATE</b></td>
            <td>=CONCATENATE(A1,"",B2:C3)</td>
            <td>둘 이상의 텍스트 문자열을 하나의 문자열로 결합합니다.</td>
        </tr>
        <tr>
            <td><b>DOLLAR</b></td>
            <td>=DOLLAR(number, decimals)</td>
            <td>지정한 소수점 오른쪽/왼쪽 자릿수(기본값 2)를 기준으로 통화 형식을 사용하여 숫자를 텍스트로 변환합니다.</td>
        </tr>
        <tr>
            <td><b>EXACT</b></td>
            <td>=EXACT(text1, text2)</td>
            <td>두 문자열을 비교하여 완전히 동일하면 TRUE를 반환하고, 그렇지 않으면 FALSE를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>FIND</b></td>
            <td>=FIND(find_text, within_text, [start_num])</td>
            <td>지정한 위치(기본값 1)부터 시작하여 한 텍스트 문자열 내에서 다른 텍스트 문자열의 위치(숫자)를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>FIXED</b></td>
            <td>=FIXED(number, [decimals], [no_commas])</td>
            <td>숫자를 지정된 소수 자릿수로 반올림하고, 마침표와 쉼표를 사용하는 십진수 형식으로 숫자를 포맷한 다음 결과를 텍스트로 변환합니다. <i>no_commas</i>를 1로 설정하면 반환된 텍스트에 쉼표가 포함되지 않습니다.</td>
        </tr>
        <tr>
            <td><b>JOIN</b></td>
            <td>=JOIN(separator, value1, value2,...)</td>
            <td>지정된 구분자를 사용하여 값을 연결합니다.</td>
        </tr>
        <tr>
            <td><b>LEFT</b></td>
            <td>=LEFT(text, count)</td>
            <td>지정한 문자 수를 기준으로 텍스트 문자열의 첫 번째 문자 또는 문자들을 반환합니다.<br></td>
        </tr>
        <tr>
            <td><b>LEN</b></td>
            <td>=LEN(text)</td>
            <td>지정된 문자열의 길이를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>LOWER</b></td>
            <td>=LOWER(text)</td>
            <td>지정된 문자열의 모든 문자를 소문자로 변환합니다.</td>
        </tr>
        <tr>
            <td><b>MID</b></td>
            <td>=MID(text, start, count)</td>
            <td>지정한 위치에서 시작하여 지정한 문자 수만큼 텍스트 문자열에서 특정 수의 문자를 반환합니다.<br></td>
        </tr>
        <tr>
            <td><b>NUMBERVALUE</b></td>
            <td>=NUMBERVALUE (text, [decimal_separator], [group_separator])</td>
            <td>지정된 소수점 구분자와 그룹 구분자를 사용하여 텍스트 형식의 숫자를 숫자 값으로 변환합니다.</td>
        </tr>
        <tr>
            <td><b>PROPER</b></td>
            <td>=PROPER(text)</td>
            <td>각 단어의 첫 번째 문자를 대문자로 설정하고<br> 나머지 모든 문자를 소문자로 변환합니다.</td>
        </tr>
        <tr>
            <td><b>REPLACE</b><br>added in v4.3</td>
            <td>=REPLACE(old_text, start_num, num_chars, new_text), <br><br> where: <ul> <li><i>old_text</i> - the text in which you want to replace some characters;</li> <li><i>start_num</i> - the position of the character in <i>old_text</i> that you want to replace with new_text;</li> <li><i>num_chars</i> - the number of characters to be replaced in <i>old_text</i>;</li> <li><i>new_text</i> - the text that will replace characters in <i>old_text</i>.</li> </ul></td>
            <td>지정한 문자 수를 기준으로 텍스트 문자열의 일부를 다른 텍스트 문자열로 대체합니다.</td>
        </tr>
        <tr>
            <td><b>REPT</b></td>
            <td>=REPT(text, number_times)</td>
            <td>텍스트를 지정된 횟수만큼 반복합니다.</td>
        </tr>
        <tr>
            <td><b>RIGHT</b></td>
            <td>=RIGHT(text, count)</td>
            <td>지정한 문자 수를 기준으로 텍스트 문자열의 마지막 문자 또는 문자들(가장 오른쪽)을 반환합니다.<br></td>
        </tr>
        <tr>
            <td><b>SEARCH</b></td>
            <td>=SEARCH(find_text, within_text, [start_num])</td>
            <td>지정한 위치(기본값 1)부터 시작하여 <i>within_text</i> 내에서 <i>find_text</i>의 첫 번째 문자 위치(숫자)를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>SUBSTITUTE</b></td>
            <td>=SUBSTITUTE(text, old_text, new_text, [instance_num])</td>
            <td>텍스트 문자열에서 이전 텍스트를 새 텍스트로 대체합니다. <i>instance_num</i>을 지정하면 해당 <i>old_text</i> 인스턴스만 대체되고, 그렇지 않으면 모든 인스턴스가 대체됩니다.</td>
        </tr>
        <tr>
            <td><b>T</b></td>
            <td>=T(value)</td>
            <td>텍스트 값이 주어지면 텍스트를 반환하고, 숫자, 날짜, 논리값 TRUE/FALSE에 대해서는 빈 문자열("")을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>TRIM</b></td>
            <td>=TRIM(text)</td>
            <td>단어 사이의 단일 공백을 제외하고 텍스트의 모든 공백을 제거합니다.</td>
        </tr>
        <tr>
            <td><b>UPPER</b></td>
            <td>=UPPER(text)</td>
            <td>텍스트를 대문자로 변환합니다.</td>
        </tr>
    </tbody>
</table>
<br>

[스니펫 도구](https://snippet.dhtmlx.com/wux2b35b)에서 예제를 확인하십시오.

### 기타 함수 {#other-functions}

<table>
    <tbody>
        <tr>
            <td><b>함수</b></td>
            <td><b>예시</b></td>
            <td><b>설명</b></td>
        </tr>
        <tr>
            <td><b>AND</b></td>
            <td>=AND(logical1, [logical2], ...)</td>
            <td>여러 조건이 충족되는지 여부에 따라<br> TRUE 또는 FALSE를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>CHOOSE</b></td>
            <td>=CHOOSE(index_num, value1, [value2], ...)</td>
            <td>지정한 위치 또는 인덱스를 기준으로 값 인수 목록에서 값을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>FALSE</b></td>
            <td>=FALSE()</td>
            <td>논리값 FALSE를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>IF</b></td>
            <td>=IF(condition, [value_if_true], [value_if_false])</td>
            <td>조건이 TRUE이면 한 값을 반환하고<br> FALSE이면 다른 값을 반환합니다.</td>
        </tr>
        <tr>
            <td><b>NOT</b></td>
            <td>=NOT(logical)</td>
            <td>주어진 논리값 또는 Boolean 값의 반대를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>OR</b></td>
            <td>=OR(logical1, [logical2], ...)</td>
            <td>논리 표현식 중 하나 이상이 TRUE이면 TRUE를 반환하고, 그렇지 않으면 FALSE를 반환합니다.</td>
        </tr>
        <tr>
            <td><b>TRUE</b></td>
            <td>=TRUE()</td>
            <td>논리값 TRUE를 반환합니다.</td>
        </tr>
    </tbody>
</table>
<br>

[스니펫 도구](https://snippet.dhtmlx.com/wux2b35b)에서 예제를 확인하십시오.

## 셀 수식 가져오기 {#getting-cell-formula}

v4.1부터 [`getFormula()`](api/spreadsheet_getformula_method.md) 메서드를 사용하여 셀에 적용된 수식을 검색할 수 있습니다. 이 메서드는 셀의 id를 매개변수로 받습니다.

~~~js
var formula = spreadsheet.getFormula("B2");
// -> "ABS(C2)"
~~~

## 수식 설명 팝업 {#popup-with-formula-description}

수식을 입력하면 함수와 해당 매개변수에 대한 설명이 포함된 팝업이 나타납니다.

![DHTMLX Spreadsheet formula popup showing a function description and parameters while typing](/img/formula_popup.png)

[스니펫 도구](https://snippet.dhtmlx.com/wux2b35b)에서 예제를 확인하십시오.

팝업의 기본 로케일을 수식 매개변수와 함께 수정하고 사용자 지정 로케일을 추가할 수 있습니다. [지역화](localization.md#default-locale-for-formulas) 가이드에서 자세한 내용을 확인하십시오.

## 사용자 정의 수식 {#custom-formulas}

v6.0부터 [`addFormula()`](api/spreadsheet_addformula_method.md) 메서드를 사용하여 사용자 정의 수식 함수를 등록할 수 있습니다. 등록 후에는 대문자 이름으로 모든 셀에서 해당 수식을 사용할 수 있습니다.

이 메서드는 두 개의 매개변수를 받습니다. 수식 이름과 해석된 셀 값을 인수로 받아 결과를 반환하는 동기 핸들러 함수입니다.

~~~js
spreadsheet.addFormula("DOUBLE", (value) => {
    return value * 2;
});
~~~

그 후에는 내장 함수처럼 셀에서 해당 수식을 사용할 수 있습니다.

~~~js
spreadsheet.parse([
    { cell: "A1", value: 4, format: "number" },
    { cell: "B1", value: "=DOUBLE(A1)", format: "number" }
]);
~~~

:::note
핸들러 함수는 동기적이어야 합니다. 함수 내에서 `Promise` 또는 `fetch`를 사용하는 것은 허용되지 않습니다.
:::

**관련 샘플:** [Spreadsheet. Add custom formula](https://snippet.dhtmlx.com/wvxdlahp)
