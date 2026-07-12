---
sidebar_label: 公式与函数
title: 公式与函数
description: 您可以在本文档中了解 DHTMLX JavaScript Spreadsheet 库的公式与函数。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Spreadsheet 的免费 30 天评估版本。
---

# 公式与函数 {#formulas-and-functions}

从 v4.0 起，DHTMLX Spreadsheet 软件包内置了一组预定义公式，可用于对字符串和数字进行各类计算。这些公式与 Excel 和 Google Sheets 兼容。

:::note
公式中的小写字母会自动转换为大写字母。
:::

<iframe src="https://snippet.dhtmlx.com/wux2b35b?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 函数 {#functions}

以下列出了所有可用函数及其详细说明。

### 布尔运算符 {#boolean-operators}

您可以使用逻辑表达式比较两个值，表达式返回 TRUE 或 FALSE。

| Operator | Example       | Description                                                                                              |
| :------- | :------------ | :------------------------------------------------------------------------------------------------------- |
| =        | =A1=B1        | 若单元格 A1 的值等于单元格 B1 的值，则返回 TRUE；否则返回 FALSE。                 |
| &lt;&gt; | =A1&lt;&gt;B1 | 若单元格 A1 的值不等于单元格 B1 的值，则返回 TRUE；否则返回 FALSE。             |
| &gt;     | =A1&gt;B1     | 若单元格 A1 的值大于单元格 B1 的值，则返回 TRUE；否则返回 FALSE。             |
| &lt;     | =A1&lt;B1     | 若单元格 A1 的值小于单元格 B1 的值，则返回 TRUE；否则返回 FALSE。                |
| &gt;=    | =A1&gt;=B1    | 若单元格 A1 的值大于或等于单元格 B1 的值，则返回 TRUE；否则返回 FALSE。 |
| &lt;=    | =A1&lt;=B1    | 若单元格 A1 的值小于或等于单元格 B1 的值，则返回 TRUE；否则返回 FALSE。    |

请在我们的[在线示例工具](https://snippet.dhtmlx.com/wux2b35b)中查看示例。

### 日期函数 {#date-functions}

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
            <td>将年、月、日三个独立值合并并返回一个日期。</td>
        </tr>
        <tr>
            <td><b>DATEDIF</b></td>
            <td>=DATEDIF(start_date,end_date,unit)</td>
            <td>返回两个日期之间的天数、月数或年数。<br> <a href="https://support.microsoft.com/en-us/office/datedif-function-25dba1a4-2812-480b-84dd-8b32a451b35c">unit</a> 参数用于指定返回信息的类型。</td>
        </tr>
        <tr>
            <td><b>DATEVALUE</b></td>
            <td>=DATEVALUE(date_text)</td>
            <td>将以文本形式存储的日期转换为序列号。</td>
        </tr>
        <tr>
            <td><b>DAY</b></td>
            <td>=DAY(date)</td>
            <td>从指定日期中返回该月中的日期数，范围为 1 到 31。</td>
        </tr>
        <tr>
            <td><b>DAYS</b></td>
            <td>=DAYS(end_date, start_date)</td>
            <td>返回两个日期之间的天数。</td>
        </tr>
        <tr>
            <td><b>DAYS360</b></td>
            <td>=DAYS360(start_date,end_date,[method]])</td>
            <td>基于 360 天年（即 12 个 30 天月）计算两个日期之间的天数。</td>
        </tr>
        <tr>
            <td><b>EDATE</b></td>
            <td>=EDATE(start_date, months)</td>
            <td>返回距起始日期之前或之后 n 个月的同一天日期。</td>
        </tr>
        <tr>
            <td><b>EOMONTH</b></td>
            <td>=EOMONTH(start_date, months)</td>
            <td>返回指定起始日期之前或之后 n 个月的最后一天日期。</td>
        </tr>
        <tr>
            <td><b>ISOWEEKNUM</b></td>
            <td>=ISOWEEKNUM(date)</td>
            <td>返回指定日期在当年中对应的 ISO 周编号。</td>
        </tr>
        <tr>
            <td><b>MONTH</b></td>
            <td>=MONTH(date)</td>
            <td>返回指定日期所在的月份。</td>
        </tr>
        <tr>
            <td><b>NETWORKDAYS</b></td>
            <td>=NETWORKDAYS(start_date, end_date, [holidays])</td>
            <td>返回两个日期之间完整工作日的天数。工作日不包括周末以及 <i>holidays</i> 中指定的任何日期。</td>
        </tr>
        <tr>
            <td><b>NETWORKDAYSINTL</b></td>
            <td>=NETWORKDAYSINTL(start_date, end_date, [weekend], [holidays])</td>
            <td>返回两个日期之间完整工作日的天数。<br>可选的 <a href="https://support.microsoft.com/en-us/office/networkdays-intl-function-a9b26239-4f20-46a1-9ab8-4e925bfd5e28">weekend</a> 参数用于指定一周中哪些天视为周末。<br><i>周末</i>和<i>节假日</i>不计入工作日。</td>
        </tr>
        <tr>
            <td><b>NOW</b></td>
            <td>=NOW()</td>
            <td>返回当前日期。</td>
        </tr>
        <tr>
            <td><b>TIMEVALUE</b><br>added in v4.3</td>
            <td>=TIMEVALUE(time_text)</td>
            <td>返回文本字符串所表示时间的十进制数值。</td>
        </tr>
        <tr>
            <td><b>WEEKDAY</b></td>
            <td>=WEEKDAY(date,[return_type])</td>
            <td>返回指定日期对应的星期几。<br><a href="https://support.microsoft.com/en-us/office/weekday-function-60e44483-2ed1-439f-8bd0-e404c190949a">return_type</a> 参数用于指定将一周的哪一天视为第一天。</td>
        </tr>
        <tr>
            <td><b>WEEKNUM</b></td>
            <td>=WEEKNUM(date,[return_type])</td>
            <td>返回指定日期所在的周编号。<br><a href="https://support.microsoft.com/en-us/office/weeknum-function-e5c43a03-b4ab-426c-b411-b18c13c75340">return_type</a> 参数用于指定将一周的哪一天视为第一天。</td>
        </tr>
        <tr>
            <td><b>WORKDAY</b></td>
            <td>=WORKDAY(start_date, days, [holidays])</td>
            <td>返回距起始日期之前或之后 n 个工作日的最近工作日日期。<br>工作日不包括周末以及 <i>holidays</i> 中指定的任何日期。</td>
        </tr>
        <tr>
            <td><b>WORKDAYINTL</b></td>
            <td>=WORKDAYINTL(start_date, days, [weekend], [holidays])</td>
            <td>返回距起始日期之前或之后 n 个工作日的最近工作日日期。<br>可选的 <a href="https://support.microsoft.com/en-us/office/workday-intl-function-a378391c-9ba7-4678-8a39-39611a9bf81d">weekend</a> 参数用于指定一周中哪些天视为周末。<br><i>周末</i>和<i>节假日</i>不计入工作日。</td>
        </tr>
        <tr>
            <td><b>YEAR</b></td>
            <td>=YEAR(date)</td>
            <td>返回指定日期的年份。</td>
        </tr>
        <tr>
            <td><b>YEARFRAC</b></td>
            <td>=YEARFRAC(start_date, end_date, [basis])</td>
            <td>返回指定日期的年份。<br>可选的 <a href="https://support.microsoft.com/en-us/office/yearfrac-function-3844141e-c76d-4143-82b6-208454ddc6a8">basis</a> 参数用于指定日期计算基准类型。</td>
        </tr>
    </tbody>
</table>
<br>

请在我们的[在线示例工具](https://snippet.dhtmlx.com/wux2b35b)中查看示例。
### 财务函数 {#financial-functions}

<table>
    <tbody>
        <tr>
            <td><b>函数</b></td>
            <td><b>公式</b></td>
            <td><b>描述</b></td>
        </tr>
        <tr>
            <td><b>ACCRINT</b></td>
            <td> =ACCRINT(issue, id, sd, rate, par, frequency, [basis], [calc_method]), <br><br> where: <ul> <li><i>issue</i> - the issue date of the security;</li> <li><i>id</i> - the security's first interest date;</li> <li><i>sd</i> - the security's settlement date;</li> <li><i>rate</i> - the security's annual coupon rate;</li> <li><i>par</i> - the security's par value, $1,000 by default;</li> <li><i>frequency</i> - the number of coupon payments per year (1 for annual payments); </li> <li><i>basis</i> - optional, the type of day count basis to use;</li> <li><i>calc_method</i> - optional, the way to calculate the total accrued interest when the date of settlement is later than the date of first interest (<a href="https://support.microsoft.com/en-us/office/accrint-function-fe45d089-6722-4fb3-9379-e1f911d8dc74">0 or 1(default)</a>).</li></ul></td>
            <td>返回定期付息证券的应计利息。</td>
        </tr>
        <tr>
            <td><b>BINOM.DIST</b><br>added in v4.3</td>
            <td>=BINOM.DIST(number_s, trials, probability_s, cumulative), <br><br> where: <ul> <li><i>number_s</i> - the number of successes in trials;</li> <li><i>trials</i> - the number of independent trials;</li> <li><i>probability_s</i> - the probability of success on each trial;</li> <li><i>cumulative</i> - if TRUE, then BINOM.DIST returns the cumulative distribution function; if FALSE (use 0), it returns the probability mass function.</li> </ul></td>
            <td>返回单项二项分布的概率值。</td>
        </tr>
        <tr>
            <td><b>BINOM.DIST.RANGE</b><br>added in v4.3</td>
            <td>=BINOM.DIST.RANGE(trials, probability_s, number_s, [number_s2]), <br><br> where: <ul> <li><i>trials</i> - the number of independent trials (must be ≥ 0);</li> <li><i>probability_s</i> - the probability of success in each trial (must be ≥ 0 and ≤ 1);</li> <li><i>number_s</i> - the number of successes in trials (must be ≥ 0 and ≤ <i>trials)</i>;</li> <li><i>number_s2</i> - optional. If provided, returns the probability that the number of successful trials will fall between <i>number_s</i> and <i>number_s2</i> <br>([number_s2] must be ≥ <i>number_s</i> and ≤ <i>trials</i>).</li> </ul></td>
            <td>使用二项分布返回试验结果的概率。</td>
        </tr>
        <tr>
            <td><b>BINOM.INV</b><br>added in v4.3</td>
            <td>=BINOM.INV(trials, probability_s, alpha), <br><br> where: <ul> <li><i>trials</i> - the number of Bernoulli trials;</li> <li><i>probability_s</i> - the probability of success in each trial (must be ≥ 0 and ≤ 1);</li> <li><i>alpha</i> - the criterion value (must be ≥ 0 and ≤ <i>1)</i>;</li> </ul></td>
            <td>返回使累积二项分布大于或等于临界值的最小值。</td>
        </tr>
        <tr>
            <td><b>BITLSHIFT</b><br>added in v4.3</td>
            <td>=BITLSHIFT(number, shift_amount), <br><br> where: <ul> <li><i>number</i> - the number to be shifted (must be an integer greater than or equal to 0 </li> <li><i>shift_amount</i> - the amount of bits to shift, if negative, shifts bits to the right instead</li> </ul></td>
            <td>返回向左移动指定位数后的数字。</td>
        </tr>
        <tr>
            <td><b>BITOR</b><br>added in v4.3</td>
            <td>=BITOR(number1, number2), <br><br> where: <ul> <li><i>number1</i> - a decimal number (must be greater than or equal to 0 and no larger than 2^48 - 1);</li> <li><i>number2</i> - a decimal number (must be greater than or equal to 0 and no larger than 2^48 - 1);</li> </ul></td>
            <td>返回表示两个数字按位 OR 运算结果的十进制数。</td>
        </tr>
        <tr>
            <td><b>BITRSHIFT</b><br>added in v4.3</td>
            <td>=BITRSHIFT(number, shift_amount), <br><br> where: <ul> <li><i>number</i> - the number to be shifted (must be an integer greater than or equal to 0);</li> <li><i>shift_amount</i> - the amount of bits to shift, if negative shifts bits to the left instead;</li> </ul></td>
            <td>返回向右移动指定位数后的数字。</td>
        </tr>
        <tr>
            <td><b>BITXOR</b><br>added in v4.3</td>
            <td>=BITXOR(number1, number2), <br><br> where: <ul> <li><i>number1</i> - a decimal number (must be greater than or equal to 0 and no larger than 2^48 - 1);</li> <li><i>number2</i> - a decimal number (must be greater than or equal to 0 and no larger than 2^48 - 1);</li> </ul></td>
            <td>返回表示两个数字按位 XOR 运算结果的十进制数。</td>
        </tr>
        <tr>
            <td><b>COMPLEX</b><br>added in v4.3</td>
            <td>=COMPLEX(real_num, i_num, [suffix]), <br><br> where: <ul> <li><i>real_num</i> - the real coefficient of the complex number;</li> <li><i>i_num</i> - the imaginary coefficient of the complex number;</li> <li><i>suffix</i> - optional ("i" by default) - the suffix for the imaginary component of the complex number; <br>(must be lowercase "i" or "j") .</li> </ul></td>
            <td>将实部系数和虚部系数转换为 x + yi 或 x + yj 形式的复数。</td>
        </tr>
        <tr>
            <td><b>CORREL</b><br>added in v4.3</td>
            <td>=CORREL(array1, array2), <br><br> where: <ul> <li><i>array1</i> - a range of cell values;</li> <li><i>array2</i> - a second range of cell values;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. The arrays must have equal number of data points. </ul></td>
            <td>返回两个单元格区域的相关系数。</td>
        </tr>
        <tr>
            <td><b>COVAR</b><br>added in v4.3</td>
            <td>=COVAR(array1, array2), <br><br> where: <ul> <li><i>array1</i> - The first cell range of integers;</li> <li><i>array2</i> - The second cell range of integers;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. The arrays must have equal number of data points. </ul></td>
            <td>返回协方差，即两个数据集中每对数据点偏差乘积的平均值。</td>
        </tr>
        <tr>
            <td><b>COVARIANCE.P</b><br>added in v4.3</td>
            <td>=COVARIANCE.P(array1, array2), <br><br> where: <ul> <li><i>array1</i> - The first cell range of integers;</li> <li><i>array2</i> - The second cell range of integers;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. The arrays must have equal number of data points. </ul></td>
            <td>返回总体协方差，即两个数据集中每对数据点偏差乘积的平均值。</td>
        </tr>
        <tr>
            <td><b>COVARIANCE.S</b><br>added in v4.3</td>
            <td>=COVARIANCE.S(array1, array2), <br><br> where: <ul> <li><i>array1</i> - The first cell range of integers;</li> <li><i>array2</i> - The second cell range of integers;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. The arrays must have equal number of data points. </ul></td>
            <td>返回样本协方差，即两个数据集中每对数据点偏差乘积的平均值。</td>
        </tr>
        <tr>
            <td><b>DB</b></td>
            <td>=DB(cost, salvage, life, period, [month]), <br><br> where: <ul> <li><i>cost</i> - the initial cost of the asset;</li> <li><i>salvage</i> - the value of the asset at the end of the depreciation;</li> <li><i>life</i> - the number of periods over which the asset is being depreciated;</li> <li><i>period</i> - the period to calculate depreciation for;</li> <li><i>month</i> - optional, the number of months in the first year, 12 by default.</li> </ul></td>
            <td>使用固定余额递减法计算指定期间内资产的折旧值。</td>
        </tr>
        <tr>
            <td><b>DDB</b></td>
            <td>=DDB(cost, salvage, life, period, [factor]), <br><br> where: <ul> <li><i>cost</i> - the initial cost of the asset;</li> <li><i>salvage</i> - the value of the asset at the end of the depreciation;</li> <li><i>life</i> - the number of periods over which the asset is being depreciated;</li> <li><i>period</i> - the period to calculate depreciation for;</li> <li><i>factor</i> - optional, the rate at which the balance declines, 2 (the double-declining balance method) by default</li> </ul></td>
            <td>使用双倍余额递减法或其他指定方法计算指定期间内资产的折旧值。</td>
        </tr>
        <tr>
            <td><b>DEC2BIN</b><br>added in v4.3</td>
            <td>=DEC2BIN(number), <br><br> where: <ul> <li><i>number</i> - the decimal integer you want to convert (must be greater than -512 but less than 511);</li> </ul></td>
            <td>将十进制数转换为二进制数。</td>
        </tr>
        <tr>
            <td><b>DEC2HEX</b><br>added in v4.3</td>
            <td>=DEC2HEX(number), <br><br> where: <ul> <li><i>number</i> - the decimal integer you want to convert (must be greater than -549755813888 but less than 549755813887);</li> </ul></td>
            <td>将十进制数转换为十六进制数。</td>
        </tr>
        <tr>
            <td><b>DEC2OCT</b><br>added in v4.3</td>
            <td>=DEC2OCT(number), <br><br> where: <ul> <li><i>number</i> - the decimal integer you want to convert (must be greater than -536870912 but less than 536870911);</li> </ul></td>
            <td>将十进制数转换为八进制数。</td>
        </tr>
        <tr>
            <td><b>DELTA</b><br>added in v4.3</td>
            <td>=DELTA(number1, [number2]), <br><br> where: <ul> <li><i>number1</i> - the first number;</li> <li><i>number2</i> - optional, the second number. If omitted, number2 is assumed to be zero.</li> </ul></td>
            <td>测试两个数字是否相等。若 number1 = number2 则返回 1；否则返回 0。</td>
        </tr>
        <tr>
            <td><b>DEVSQ</b><br>added in v4.3</td>
            <td>=DEVSQ(number1, [number2], ...), <br><br> where: <ul> <li><i>number1, number2,...</i> - from 1 to 255 arguments for which you want to calculate the sum of squared deviations;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. </ul></td>
            <td>返回数据点与其样本均值之间偏差的平方和。</td>
        </tr>
        <tr>
            <td><b>DOLLARDE</b></td>
            <td>=DOLLARDE(fractional_dollar, fraction)</td>
            <td>将以整数部分和分数部分表示的美元价格转换为以小数表示的美元价格。</td>
        </tr>
        <tr>
            <td><b>DOLLARFR</b></td>
            <td>=DOLLARFR(decimal_dollar, fraction)</td>
            <td>将十进制数表示的美元价格转换为分数形式的美元价格。</td>
        </tr>
        <tr>
            <td><b>EFFECT</b></td>
            <td>=EFFECT(nominal_rate, npery)<br><br> <i>nominal_rate</i> must be >= 0, <i>npery</i> must be > 1.</td>
            <td>根据给定的名义年利率和每年的复利计算期数，返回有效年利率。<br> 仅适用于数值。 </td>
        </tr>
        <tr>
            <td><b>ERF</b><br>added in v4.3</td>
            <td>=ERF(lower_limit, [upper_limit]), <br><br> where: <ul> <li><i>lower_limit</i> - the lower bound for integrating ERF; </li> <li><i>upper_limit</i> - the upper bound for integrating ERF. If omitted, ERF integrates between 0 and lower_limit. </li> </ul> </td>
            <td>返回在 lower_limit 与 upper_limit 之间积分的误差函数值。</td>
        </tr>
        <tr>
            <td><b>ERFC</b><br>added in v4.3</td>
            <td>=ERFC(x), <br><br> where: <ul> <li><i>x</i> - the lower bound for integrating ERFC </li> </ul></td>
            <td>返回在 x 到无穷大之间积分的互补误差函数值。</td>
        </tr>
        <tr>
            <td><b>EXP</b><br>added in v4.3</td>
            <td>=EXP(number), <br><br> where: <ul> <li><i>number</i> - the power that e is raised to </li> </ul></td>
            <td>返回常数 e（等于 2.71828182845904）的指定次幂的值。</td>
        </tr>
        <tr>
            <td><b>FISHER</b><br>added in v4.3</td>
            <td>=FISHER(x), <br><br> where: <ul> <li><i>x</i> - the value for which you want to calculate the transformation </li> </ul></td>
            <td>计算给定值的 Fisher 变换。</td>
        </tr>
        <tr>
            <td><b>FISHERINV</b><br>added in v4.3</td>
            <td>=FISHERINV(y), <br><br> where: <ul> <li><i>y</i> - the value for which you want to perform the inverse of the transformation </li> </ul></td>
            <td>计算 Fisher 变换的反变换，返回介于 -1 与 +1 之间的值。</td>
        </tr>
        <tr>
            <td><b>FV</b></td>
            <td>=FV(rate, nper, pmt, [pv], [type]), <br><br> where: <ul> <li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>nper</i> - the total number of payment periods in an annuity. For monthly payments, <i>nper</i>=nper*12;</li> <li><i>pmt</i> - the payment made each period;</li> <li><i>pv</i> - optional, the present value, or the lump-sum amount that a series of future payments is worth right now, 0 by default;</li> <li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li> </ul></td>
            <td>计算投资的终值。</td>
        </tr>
        <tr>
            <td><b>FVSCHEDULE</b></td>
            <td>=FVSCHEDULE(principal, schedule), <br><br> where: <ul> <li><i>principal</i> - the present value;</li> <li><i>schedule</i> - an array of interest rates to apply. The values in the array can be numbers or blank cells; any other value produces the error value. Blank cells are taken as zeros.</li> </ul></td>
            <td>返回初始本金（即现值）在应用一系列复利利率后的终值。</td>
        </tr>
        <tr>
            <td><b>GAMMA</b><br>added in v4.3</td>
            <td>=GAMMA(number)<br><br> 
            If Number is a negative integer or 0, GAMMA returns the #Error value.</td>
            <td>返回 Gamma 函数的值。</td>
        </tr>
        <tr>
            <td><b>GEOMEAN</b><br>added in v4.3</td>
            <td>=GEOMEAN(number1, [number2], ...)<br><br> where: <ul> <li><i>number1, number2,...</i> - from 1 to 255 arguments for which you want to calculate the mean;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. </ul></td>
            <td>返回一组正数数组或区域的几何平均值。</td>
        </tr>
        <tr>
            <td><b>GESTEP</b><br>added in v4.3</td>
            <td>=GESTEP(number, [step])<br><br> where: <ul> <li><i>number</i> - the value to test against step;</li> <li><i>step</i> - optional, the threshold value. If you omit a value for step, GESTEP uses zero;</li> </ul></td>
            <td>若 number ≥ step 则返回 1；否则返回 0。</td>
        </tr>
        <tr>
            <td><b>HARMEAN</b><br>added in v4.3</td>
            <td>=HARMEAN(number1, [number2], ...)<br><br> where: <ul> <li><i>number1, number2,...</i> - from 1 to 255 arguments for which you want to calculate the mean;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. </ul></td>
            <td>返回数据集的调和平均值。</td>
        </tr>
        <tr>
            <td><b>HEX2BIN</b><br>added in v4.3</td>
            <td>=HEX2BIN(number)<br><br> where: <ul> <li><i>number</i> - the hexadecimal number you want to convert. Number can't contain more than 10 characters;</li> </ul></td>
            <td>将十六进制数转换为二进制数。</td>
        </tr>
        <tr>
            <td><b>HEX2DEC</b><br>added in v4.3</td>
            <td>=HEX2DEC(number)<br><br> where: <ul> <li><i>number</i> - the hexadecimal number you want to convert. Number can't contain more than 10 characters;</li> </ul></td>
            <td>将十六进制数转换为十进制数。</td>
        </tr>
        <tr>
            <td><b>HEX2OCT</b><br>added in v4.3</td>
            <td>=HEX2OCT(number)<br><br> where: <ul> <li><i>number</i> - the hexadecimal number you want to convert. Number can't contain more than 10 characters;</li> </ul></td>
            <td>将十六进制数转换为八进制数。</td>
        </tr>
        <tr>
            <td><b>IMABS</b><br>added in v4.3</td>
            <td>=IMABS(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>返回 x + yi 或 x + yj 格式复数的绝对值。</td>
        </tr>
        <tr>
            <td><b>IMAGINARY</b><br>added in v4.3</td>
            <td>=IMAGINARY(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>返回 x + yi 或 x + yj 格式复数的虚部系数。</td>
        </tr>
        <tr>
            <td><b>IMCONJUGATE</b><br>added in v4.3</td>
            <td>=IMCONJUGATE(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>返回 x + yi 或 x + yj 格式复数的共轭复数。</td>
        </tr>
        <tr>
            <td><b>IMCOS</b><br>added in v4.3</td>
            <td>=IMCOS(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>返回 x + yi 或 x + yj 格式复数的余弦值。</td>
        </tr>
        <tr>
            <td><b>IMCOSH</b><br>added in v4.3</td>
            <td>=IMCOSH(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>返回 x + yi 或 x + yj 格式复数的双曲余弦值。</td>
        </tr>
        <tr>
            <td><b>IMCOT</b><br>added in v4.3</td>
            <td>=IMCOT(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>返回 x + yi 或 x + yj 格式复数的余切值。</td>
        </tr>
        <tr>
            <td><b>IMCSC</b><br>added in v4.3</td>
            <td>=IMCSC(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>返回 x + yi 或 x + yj 格式复数的余割值。</td>
        </tr>
        <tr>
            <td><b>IMCSCH</b><br>added in v4.3</td>
            <td>=IMCSCH(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>返回 x + yi 或 x + yj 格式复数的双曲余割值。</td>
        </tr>
        <tr>
            <td><b>IMDIV</b><br>added in v4.3</td>
            <td>=IMDIV(inumber1, inumber2)<br><br> where: <ul> <li><i>inumber1</i> - the complex numerator or dividend</li> <li><i>inumber2</i> - the complex denominator or divisor</li> </ul></td>
            <td>返回 x + yi 或 x + yj 格式两个复数的商。</td>
        </tr>
        <tr>
            <td><b>IMEXP</b><br>added in v4.3</td>
            <td>=IMEXP(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>返回 x + yi 或 x + yj 格式复数的指数值。</td>
        </tr>
        <tr>
            <td><b>IMLN</b><br>added in v4.3</td>
            <td>=IMLN(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>返回 x + yi 或 x + yj 格式复数的自然对数值。</td>
        </tr>
        <tr>
            <td><b>IMPOWER</b><br>added in v4.3</td>
            <td>=IMPOWER(inumber, number)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> <li><i>number</i> - the power to which you want to raise the complex number</li> </ul></td>
            <td>返回以 x + yi 或 x + yj 文本格式表示的复数的指定次幂。</td>
        </tr>
        <tr>
            <td><b>IMPRODUCT</b><br>added in v4.3</td>
            <td>=IMPRODUCT(inumber1, [inumber2], ...)<br><br> where: <ul> <li><i>inumber1, inumber2,...</i> - from 1 to 255 complex numbers to multiply</li> </ul></td>
            <td>返回 x + yi 或 x + yj 格式的 1 至 255 个复数的乘积。</td>
        </tr>
        <tr>
            <td><b>IMREAL</b><br>added in v4.3</td>
            <td>=IMREAL(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>返回 x + yi 或 x + yj 格式复数的实部系数。</td>
        </tr>
        <tr>
            <td><b>IMSEC</b><br>added in v4.3</td>
            <td>=IMSEC(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>返回 x + yi 或 x + yj 格式复数的正割值。</td>
        </tr>
        <tr>
            <td><b>IMSECH</b><br>added in v4.3</td>
            <td>=IMSECH(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>返回 x + yi 或 x + yj 格式复数的双曲正割值。</td>
        </tr>
        <tr>
            <td><b>IMSIN</b><br>added in v4.3</td>
            <td>=IMSIN(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>返回 x + yi 或 x + yj 格式复数的正弦值。</td>
        </tr>
        <tr>
            <td><b>IMSINH</b><br>added in v4.3</td>
            <td>=IMSINH(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>返回 x + yi 或 x + yj 格式复数的双曲正弦值。</td>
        </tr>
        <tr>
            <td><b>IMSQRT</b><br>added in v4.3</td>
            <td>=IMSQRT(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>返回 x + yi 或 x + yj 格式复数的平方根。</td>
        </tr>
        <tr>
            <td><b>IMSUB</b><br>added in v4.3</td>
            <td>=IMSUB(inumber1, inumber2)<br><br> where: <ul> <li><i>inumber1</i> - a complex number from which to subtract inumber2;</li> <li><i>inumber2</i> - the complex number to subtract from inumber1</li> </ul></td>
            <td>返回 x + yi 或 x + yj 格式两个复数的差。</td>
        </tr>
        <tr>
            <td><b>IMSUM</b><br>added in v4.3</td>
            <td>=IMSUB(inumber1, [inumber2], ...)<br><br> where: <ul> <li><i>inumber1, inumber2,...</i> - from 1 to 255 complex numbers to add</li> </ul></td>
            <td>返回 x + yi 或 x + yj 格式两个或多个复数的和。</td>
        </tr>
        <tr>
            <td><b>IMTAN</b><br>added in v4.3</td>
            <td>=IMTAN(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>返回 x + yi 或 x + yj 格式复数的正切值。</td>
        </tr>
        <tr>
            <td><b>IPMT</b></td>
            <td>=IPMT(rate, per, nper, pv, [fv], [type]), <br><br> where: <ul> <li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>per</i> - the period for which you want to find the interest and must be in the range between 1 and nper;</li> <li><i>nper</i> - the total number of payment periods in an annuity. For monthly payments, <i>nper</i>=nper*12;</li> <li><i>pv</i> - the present value, or the lump-sum amount that a series of future payments is worth right now;</li> <li><i>fv</i> - optional, the future value, 0 by default;</li> <li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li> </ul></td>
            <td>返回基于定期、固定付款及固定利率的投资在给定期间内的利息偿还额。</td>
        </tr>
        <tr>
            <td><b>IRR</b></td>
            <td>=IRR(values, [guess]), <br><br> where: <ul> <li><i>values</i> - an array or reference to cells that contain values. The array must contain at least one positive value and one negative value;</li> <li><i>guess</i> - optional, an estimate for expected IRR, .1 (=10%) by default.</li> </ul></td>
            <td>返回一系列定期现金流的内部收益率（IRR）。</td>
        </tr>
        <tr>
            <td><b>ISPMT</b></td>
            <td>=ISPMT(rate, per, nper, pv), <br><br> where: <ul> <li><i>rate</i> - the interest rate for the investment. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>per</i> - the period for which you want to find the interest and must be in the range between 1 and nper;</li> <li><i>nper</i> - the total number of payment periods for the investment. For monthly payments, <i>nper</i>=nper*12;</li> <li><i>pv</i> - the present value of the investment. For a loan, pv is the loan amount.</li> </ul></td>
            <td>计算等额本金贷款（或投资）在指定期间内支付（或收取）的利息。</td>
        </tr>
        <tr>
            <td><b>LARGE</b><br>added in v4.3</td>
            <td>=LARGE(array, k), <br><br> where: <ul> <li><i>array</i> - the array or range of data for which you want to determine the k-th largest value;</li> <li><i>k</i> - the position (from the largest) in the array or cell range of data to return.</li> </ul></td>
            <td>返回数组中第 k 个最大值。</td>
        </tr>
        <tr>
            <td><b>MEDIAN</b><br>added in v4.3</td>
            <td>=MEDIAN(number1, [number2], ...), <br><br> where: <ul> <li><i>number1, number2,...</i> - from 1 to 255 numbers for which you want to calculate the median;</li> </ul></td>
            <td>返回给定数字的中位数。</td>
        </tr>
        <tr>
            <td><b>NOMINAL</b></td>
            <td>=NOMINAL(effect_rate, npery), <br><br><i>effect_rate</i> must be >= 0, <i>npery</i> must be > 1. </td>
            <td>根据给定的有效利率和每年的复利计算期数，返回名义年利率。</td>
        </tr>
        <tr>
            <td><b>NPER</b></td>
            <td>=NPER(rate,pmt,pv,[fv],[type]), <br><br>where: <ul> <li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>pmt</i> - the payment made each period;</li> <li><i>pv</i> - the present value, or the lump-sum amount that a series of future payments is worth right now;</li> <li><i>fv</i> - optional, the future value, 0 by default;</li> <li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li> </ul></td>
            <td>返回基于定期、固定付款及固定利率的投资的付款期数。<br></td>
        </tr>
        <tr>
            <td><b>NPV</b></td>
            <td>=NPV(rate,value1,[value2],...), <br><br> where: <ul> <li><i>rate</i> - the rate of discount over one year;</li> <li><i>value1, value2,...</i> - from 1 to 254 values representing cash flows (future payments and income).<br>Empty cells, logical values, text, or error values are ignored.</li> </ul></td>
            <td>使用折现率及一系列未来支出（负值）和收益（正值）计算投资的净现值。</td>
        </tr>
        <tr>
            <td><b>OCT2BIN</b><br>added in v4.3</td>
            <td>=OCT2BIN(number), <br><br> where: <ul> <li><i>number</i> - the octal number you want to convert. It can't contain more than 10 characters;</li></ul></td>
            <td>将八进制数转换为二进制数。</td>
        </tr>
        <tr>
            <td><b>OCT2DEC</b><br>added in v4.3</td>
            <td>=OCT2DEC(number), <br><br> where: <ul> <li><i>number</i> - the octal number you want to convert. Number may not contain more than 10 octal characters (30 bits)</li> </ul></td>
            <td>将八进制数转换为十进制数。</td>
        </tr>
        <tr>
            <td><b>OCT2HEX</b><br>added in v4.3</td>
            <td>=OCT2HEX(number), <br><br> where: <ul> <li><i>number</i> - the octal number you want to convert. Number may not contain more than 10 octal characters (30 bits)</li> </ul></td>
            <td>将八进制数转换为十六进制数。</td>
        </tr>
        <tr>
            <td><b>PDURATION</b></td>
            <td>=PDURATION(rate, pv, fv), <br><br>where: <ul> <li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>pv</i> - the present value of the investment;</li> <li><i>fv</i> - the desired future value of the investment.</li> </ul><br> All arguments must be positive values.</td>
            <td>返回投资达到指定价值所需的期数。<br></td>
        </tr>
        <tr>
            <td><b>PERCENTILE</b><br>added in v4.3</td>
            <td>=PERCENTILE(array, k), <br><br> where: <ul> <li><i>array</i> - an array of data values;</li> <li><i>k</i> - the percentile value between 0 and 1, inclusive.</li> </ul></td>
            <td>返回区域中数值的第 k 个百分位数。</td>
        </tr>
        <tr>
            <td><b>PERCENTILE.EXC</b><br>added in v4.3</td>
            <td>=PERCENTILE.EXC(array, k), <br><br> where: <ul> <li><i>array</i> - an array of data values;</li> <li><i>k</i> - the percentile value between 0 and 1, exclusive.</li> </ul></td>
            <td>返回区域中数值的第 k 个百分位数。</td>
        </tr>
        <tr>
            <td><b>PERCENTILE.INC</b><br>added in v4.3</td>
            <td>=PERCENTILE.INC(array, k), <br><br> where: <ul> <li><i>array</i> - an array of data values;</li> <li><i>k</i> - the percentile value between 0 and 1, inclusive.</li> </ul></td>
            <td>返回区域中数值的第 k 个百分位数。</td>
        </tr>
        <tr>
            <td><b>PERMUT</b><br>added in v4.3</td>
            <td>=PERMUT(number, number_chosen), <br><br> where: <ul> <li><i>number</i> - the total number of items;</li> <li><i>number_chosen</i> - the number of items in each combination.</li> </ul></td>
            <td>返回给定数量元素的排列数。</td>
        </tr>
        <tr>
            <td><b>PMT</b></td>
            <td>=PMT(rate, nper, pv, [fv], [type]), <br><br> where: <ul> <li><i>rate</i> - the interest rate for the loan. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>nper</i> - the total number of months of payments for the loan. For monthly payments, <i>nper</i>=nper*12;</li> <li><i>pv</i> - the present value (or the current total amount of loan);</li> <li><i>fv</i> - optional, the future value, 0 by default;</li> <li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li> </ul></td>
            <td>根据固定付款额和固定利率计算贷款的每月还款额。</td>
        </tr>
        <tr>
            <td><b>PPMT</b></td>
            <td>=PPMT(rate, per, nper, pv, [fv], [type]), <br><br>where: <ul><li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>per</i> - the period for which you want to find the interest and must be in the range between 1 and nper;</li> <li><i>nper</i> - the total number of payment years in an annuity. For monthly payments, <i>nper</i>=nper*12;</li> <li><i>pv</i> - the present value - the total amount that a series of future payments is worth now;</li> <li><i>fv</i> - the desired future value or a cash balance.</li> <li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li> </ul></td>
            <td>返回基于定期、固定付款及固定利率的投资在指定期间内的本金偿还额。<br></td>
        </tr>
        <tr>
            <td><b>PV</b></td>
            <td>=PV(rate, nper, pmt, [fv], [type]), <br><br>where: <ul> <li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>nper</i> - the total number of payment years in an annuity. For monthly payments, <i>nper</i>=nper*12;</li> <li><i>pmt</i> - the payment made each period. If <i>pmt</i> is omitted, you must include the <i>fv</i> argument;</li> <li><i>fv</i> - optional, the desired future value or a cash balance.</li> <li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li> </ul></td>
            <td>返回基于固定利率的贷款或投资的现值。<br></td>
        </tr>
        <tr>
            <td><b>QUARTILE</b><br>added in v4.3</td>
            <td>=QUARTILE(array, quart), <br><br> where: <ul> <li><i>array</i> - the array or cell range of numeric values;</li> <li><i>quart</i> - indicates which value to return (<a href="https://support.microsoft.com/en-us/office/quartile-function-93cf8f62-60cd-4fdb-8a92-8451041e1a2a">0-4</a>).</li> </ul></td>
            <td>返回数据集的四分位数。</td>
        </tr>
        <tr>
            <td><b>QUARTILE.EXC</b><br>added in v4.3</td>
            <td>=QUARTILE(array, quart), <br><br> where: <ul> <li><i>array</i> - the array or cell range of numeric values;</li> <li><i>quart</i> - indicates which value to return (1-3).</li> </ul></td>
            <td>根据 0 到 1 之间（不含端点）的百分位值，返回数据集的四分位数。</td>
        </tr>
        <tr>
            <td><b>QUARTILE.INC</b><br>added in v4.3</td>
            <td>=QUARTILE.INC(array, quart), <br><br> where: <ul> <li><i>array</i> - the array or cell range of numeric values;</li> <li><i>quart</i> - indicates which value to return (0-4).</li> </ul></td>
            <td>根据 0 到 1 之间（含端点）的百分位值，返回数据集的四分位数。</td>
        </tr>
        <tr>
            <td><b>SIGN</b><br>added in v4.3</td>
            <td>=SIGN(number), <br><br> where: <ul> <li><i>number</i> - any real number</li> </ul></td>
            <td>返回数字的符号。若数字为正数则返回 1，若为 0 则返回 0，若为负数则返回 -1。</td>
        </tr>
        <tr>
            <td><b>SMALL</b><br>added in v4.3</td>
            <td>=SMALL(array, k), <br><br> where: <ul> <li><i>array</i> - an array or range of numeric values;</li> <li><i>k</i> - the position (from 1 - the smallest value) in the data set.</li> </ul></td>
            <td>返回数据集中按位置排列的第 k 个最小值。</td>
        </tr>
        <tr>
            <td><b>STEYX</b><br>added in v4.3</td>
            <td>=STEYX(known_y's, known_x's), <br><br> where: <ul> <li><i>known_y's</i> - an array or range of dependent data points;</li> <li><i>known_x's</i> - an array or range of independent data points.</li> </ul><br>Text, logical values, or empty cells are ignored. Zero values are included.</td>
            <td>返回回归中每个 x 对应的预测 y 值的标准误差。</td>
        </tr>
        <tr>
            <td><b>SYD</b><br>added in v4.3</td>
            <td>=SYD(cost, salvage, life, per), <br><br> where: <ul> <li><i>cost</i> - the initial cost of the asset;</li> <li><i>salvage</i> - the asset value at the end of the depreciation;</li> <li><i>life</i> - the number of periods over which the asset is depreciated;</li> <li><i>per</i> - the period and must use the same units as life.</li> </ul></td>
            <td>返回资产在指定期间内按年数总和法计算的折旧值。</td>
        </tr>
        <tr>
            <td><b>TBILLPRICE</b><br>added in v4.3</td>
            <td>=TBILLPRICE(settlement, maturity, discount), <br><br> where: <ul> <li><i>settlement</i> - the settlement date of the Treasury bill;</li> <li><i>maturity</i> - the maturity date of the Treasury bill;</li> <li><i>discount</i> - the Treasury bill's percentage discount rate.</li> </ul></td>
            <td>返回国库券每 $100 面值的价格。</td>
        </tr>
        <tr>
            <td><b>TBILLYIELD</b><br>added in v4.3</td>
            <td>=TBILLYIELD(settlement, maturity, pr), <br><br> where: <ul> <li><i>settlement</i> - the settlement date of the Treasury bill;</li> <li><i>maturity</i> - the maturity date of the Treasury bill;</li> <li><i>pr</i> - the Treasury bill's price per $100 face value.</li> </ul></td>
            <td>返回国库券的收益率。</td>
        </tr>
        <tr>
            <td><b>WEIBULL</b><br>added in v4.3</td>
            <td>=WEIBULL(x, alpha, beta, cumulative), <br><br> where: <ul> <li><i>x</i> - the value at which the function must be calculated (must be ≥ 0);</li> <li><i>alpha</i> - the alpha parameter to the distribution (must be > 0);</li> <li><i>beta</i> - the beta parameter to the distribution (must be > 0);</li> <li><i>cumulative</i> - the logical (true/false) argument which defines the type of distribution to be used. If True - Weibull cumulative distribution function, if False - Weibull probability density function </li> </ul></td>
            <td>返回威布尔分布。</td>
        </tr>
        <tr>
            <td><b>WEIBULL.DIST</b><br>added in v4.3</td>
            <td>=WEIBULL(x, alpha, beta, cumulative), <br><br> where: <ul> <li><i>x</i> - the value at which the function must be calculated (must be ≥ 0);</li> <li><i>alpha</i> - the alpha parameter to the distribution (must be > 0);</li> <li><i>beta</i> - the beta parameter to the distribution (must be > 0);</li> <li><i>cumulative</i> - the logical (true/false) argument which defines the type of distribution to be used. If True - Weibull cumulative distribution function, if False - Weibull probability density function </li> </ul></td>
            <td>返回威布尔分布。</td>
        </tr>
    </tbody>
</table>

请在我们的[代码片段工具](https://snippet.dhtmlx.com/wux2b35b)中查看示例。
### 信息函数 {#information-functions}

<table>
    <tbody>
        <tr>
            <td><b>函数</b></td>
            <td><b>公式</b></td>
            <td><b>描述</b></td>
        </tr>
        <tr>
            <td><b>ISBINARY</b></td>
            <td>=ISBINARY(value)</td>
            <td>如果值为二进制，则返回 TRUE；否则返回 FALSE。</td>
        </tr>
        <tr>
            <td><b>ISBLANK</b></td>
            <td>=ISBLANK(A1)</td>
            <td>如果单元格为空，则返回 TRUE；否则返回 FALSE。</td>
        </tr>
        <tr>
            <td><b>ISEVEN</b></td>
            <td>=ISEVEN(number)</td>
            <td>如果数字为偶数，则返回 TRUE；如果数字为奇数，则返回 FALSE。<br>仅适用于整数。</td>
        </tr>
        <tr>
            <td><b>ISNONTEXT</b></td>
            <td>=ISNONTEXT(value)</td>
            <td>如果单元格包含文本以外的任何值，则返回 TRUE；否则返回 FALSE。</td>
        </tr>
        <tr>
            <td><b>ISNUMBER</b></td>
            <td>=ISNUMBER(value)</td>
            <td>如果单元格包含数字，则返回 TRUE；否则返回 FALSE。</td>
        </tr>
        <tr>
            <td><b>ISODD</b></td>
            <td>=ISODD(number)</td>
            <td>如果数字为奇数，则返回 TRUE；如果数字为偶数，则返回 FALSE。<br>仅适用于整数。</td>
        </tr>
        <tr>
            <td><b>ISTEXT</b></td>
            <td>=ISTEXT(value)</td>
            <td>如果值为文本，则返回 TRUE；否则返回 FALSE。</td>
        </tr>
        <tr>
            <td><b>N</b></td>
            <td>=N(value)</td>
            <td>返回转换为数字的值。</td>
        </tr>
    </tbody>
</table>
<br>

在我们的[示例工具](https://snippet.dhtmlx.com/wux2b35b)中查看示例。

### 查找函数 {#lookup-functions}

<table>
    <tbody>
        <tr>
            <td><b>函数</b></td>
            <td><b>公式</b></td>
            <td><b>描述</b></td>
        </tr>
        <tr>
            <td><b>HLOOKUP</b><br>added in v4.3</td>
            <td>=HLOOKUP(lookup_value, table_array, row_index, [range_lookup]), <br><br> where: <ul> <li><i>lookup_value</i> - the value to search for;</li> <li><i>table_array</i> - the table from which to retrieve a value;</li> <li><i>column_index_num</i> - the row number in the table from which to retrieve a value;</li> <li><i>range_lookup</i> -  optional (1 by default):<br>0 - exact match, 1 - approximate match</li> </ul></td>
            <td>在水平表格中查找某个值</td>
        </tr>
        <tr>
            <td><b>INDEX</b><br>added in v4.3</td>
            <td>=INDEX(array, row_num, [column_num]), <br><br> where: <ul> <li><i>array</i> - a range of cells or an array constant;</li> <li><i>row_num</i> - the row position in the reference or array;</li> <li><i>column_num</i> - optional, the column position in the reference or array.</li> </ul></td>
            <td>返回区域或数组中指定位置的值。</td>
        </tr>
        <tr>
            <td><b>LOOKUP</b><br>added in v4.3</td>
            <td>=LOOKUP(lookup_value, lookup_vector, [result_vector]), <br><br> where: <ul> <li><i>lookup_value</i> - the value to search for;</li> <li><i>lookup_vector</i> - the one-row, or one-column range to search;</li> <li><i>result_vector</i> - optional, the one-row, or one-column range of results.</li> </ul></td>
            <td>在单列或单行区域中查找某个值，并返回另一个单列或单行区域中相同位置的值。</td>
        </tr>
        <tr>
            <td><b>MATCH</b><br>added in v4.3</td>
            <td>=MATCH(lookup_value, lookup_array, [match_type]), <br><br> where: <ul> <li><i>lookup_value</i> - the value that you want to match in <i>lookup_array</i>;</li> <li><i>lookup_array</i> - the range of cells;</li> <li><i>match_type</i> - optional (1 by default):<br>1- finds the largest value that is less than or equal to <i>lookup_value</i><br>0 - finds the value that is exactly equal to <i>lookup_value</i><br>-1 - finds the smallest value that is greater than or equal to <i>lookup_value</i></li> </ul></td>
            <td>在单元格区域中搜索指定项，然后返回该项在区域中的相对位置。</td>
        </tr>
        <tr>
            <td><b>VLOOKUP</b><br>added in v4.3</td>
            <td>=VLOOKUP(lookup_value, table_array, column_index_num, [range_lookup]), <br><br> where: <ul> <li><i>lookup_value</i> - the value to search for in the first column of a table;</li> <li><i>table_array</i> - the table from which to retrieve a value;</li> <li><i>column_index_num</i> - the column number in the table from which to retrieve a value;</li> <li><i>range_lookup</i> -  optional (1 by default):<br>0 - exact match, 1 - approximate match</li> </ul></td>
            <td>在垂直表格中通过匹配第一列来查找某个值</td>
        </tr>
        <tr>
            <td><b>XLOOKUP</b><br>added in v4.3</td>
            <td>=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode]), <br><br> where: <ul> <li><i>lookup_value</i> - the value to search for;</li> <li><i>lookup_array</i> - the array or range to search;</li> <li><i>return_array</i> - the array or range to return;</li> <li><i>if_not_found</i> - optional, if a valid match is not found, returns the [if_not_found] text you supply;</li> <li><i>match_mode</i> -  optional (0 by default):<br>0 - Exact match<br>-1 - Exact match. If not found, returns the next smaller item<br>1 - Exact match. If not found, returns the next larger item</li> </ul></td>
            <td>在区域或数组中进行搜索，并返回与第一个匹配项对应的值。如果不存在匹配项，XLOOKUP 可以返回最接近的（近似）匹配结果。</td>
        </tr>
        <tr>
            <td><b>XMATCH</b><br>added in v4.3</td>
            <td>=XMATCH(lookup_value, lookup_array, [match_mode]), <br><br> where: <ul> <li><i>lookup_value</i> - the value that you want to match in <i>lookup_array</i>;</li> <li><i>lookup_array</i> - the range of cells;</li> <li><i>match_mode</i> - optional, 0 - exact match (default), -1 - exact match or next smallest, 1 - exact match or next larger</li> </ul></td>
            <td>执行查找并返回在垂直或水平区域中的位置。</td>
        </tr>
    </tbody>
</table>
<br>

### 数学函数 {#math-functions}

<table> 
    <tbody>
        <tr>
            <td><b>ABS</b></td>
            <td>返回数字的绝对值。数字的绝对值始终为正数。</td>
        </tr>
        <tr>
            <td><b>ACOS</b></td>
            <td>返回数字的反余弦值（即反三角余弦）。反余弦是余弦值为 <i>number</i> 的角度。数字必须在 -1 到 1 之间（含端点）。返回的角度以弧度表示，范围为 0（零）到 pi。</td>
        </tr>
        <tr>
            <td><b>ACOSH</b></td>
            <td>返回数字的反双曲余弦值。数字必须大于或等于 1。</td>
        </tr>
        <tr>
            <td><b>ACOT</b></td>
            <td>返回数字的反余切主值（即反三角余切）。返回的角度以弧度表示，范围为 0（零）到 pi。</td>
        </tr>
        <tr>
            <td><b>ACOTH</b></td>
            <td>返回数字的反双曲余切值。数字的绝对值必须大于 1。</td>
        </tr>
        <tr>
            <td><b>ADD</b></td>
            <td>返回两个值的和。<br>空单元格、逻辑值（如 TRUE）或文本将被忽略。</td>
        </tr>
        <tr>
            <td><b>ARABIC</b></td>
            <td>将罗马数字转换为阿拉伯数字。</td>
        </tr>
        <tr>
            <td><b>ASIN</b></td>
            <td>返回数字的反正弦值（即反三角正弦）。反正弦是正弦值为 <i>number</i> 的角度。数字必须在 -1 到 1 之间（含端点）。返回的角度以弧度表示，范围为 -pi/2 到 pi/2。</td>
        </tr>
        <tr>
            <td><b>ASINH</b></td>
            <td>返回数字的反双曲正弦值。反双曲正弦是双曲正弦值为 <i>number</i> 的数值。适用于实数。</td>
        </tr>
        <tr>
            <td><b>ATAN</b></td>
            <td>返回数字的反正切值（即反三角正切）。反正切是正切值为 <i>number</i> 的角度。返回的角度以弧度表示，范围为 -pi/2 到 pi/2。适用于目标角度的正切值。</td>
        </tr>
        <tr>
            <td><b>ATAN2</b></td>
            <td>返回坐标 (x,y) 的反正切值。返回值以弧度表示，范围为 -pi 到 pi（不含 -pi）。</td>
        </tr>
        <tr>
            <td><b>ATANH</b></td>
            <td>返回数字的反双曲正切值。数字必须在 -1 到 1 之间（不含 -1 和 1）。适用于实数。</td>
        </tr>
        <tr>
            <td><b>AVEDEV</b><br>added in v4.3</td>
            <td>返回数据点与其均值的绝对偏差的平均值。<br>数组或引用中的空单元格、逻辑值、文本或错误值将被忽略。值为 0 的单元格会被计入。</td>
        </tr>
        <tr>
            <td><b>AVERAGE</b></td>
            <td>计算一组数字的平均值（算术平均数）。<br>数组或引用中的逻辑值、空单元格以及包含文本的单元格将被忽略。<br>但值为零的单元格会被计入。</td>
        </tr>
        <tr>
            <td><b>AVERAGEA</b><br>added in v4.3</td>
            <td>计算参数列表中所有值的平均值（算术平均数）。<br>参数可以是：数字；包含数字的名称、数组或引用；数字的文本表示形式；或引用中的逻辑值（如 TRUE 和 FALSE）。<br>数组或引用中的空单元格和文本值将被忽略。</td>
        </tr>
        <tr>
            <td><b>AVERAGEIF</b><br>added in v6.0</td>
            <td>返回满足给定条件的区域内所有单元格的平均值（算术平均数）。<br>接受两个必需参数（要计算的区域和条件）以及一个可选参数（若与计算区域不同，则为要求平均值的单元格区域）。</td>
        </tr>
        <tr>
            <td><b>AVERAGEIFS</b><br>added in v6.0</td>
            <td>返回满足多个条件的所有单元格的平均值（算术平均数）。<br>接受一个必需的平均值区域参数，后跟一对或多对条件区域与条件参数。</td>
        </tr>
        <tr>
            <td><b>BASE</b></td>
            <td>将数字转换为指定的进制（基数）。<br>数字必须为整数，且大于或等于 0 且小于 2^53。<br>基数是要将数字转换成的进制，必须为 2 到 36 之间的整数（含端点）。</td>
        </tr>
        <tr>
            <td><b>BITAND</b><br>added in v4.3</td>
            <td>返回两个数字的按位"与"运算结果。<br>数字必须为整数，且大于或等于 0 且小于 (2^48)-1。</td>
        </tr>
        <tr>
            <td><b>CEILING</b></td>
            <td>将数字向上舍入到最接近的整数，或最接近指定有效位数的倍数。</td>
        </tr>
        <tr>
            <td><b>COMBIN</b></td>
            <td>返回两个给定整数的组合数：项目总数（<i>number</i>）和每个组合中的项目数（<i>number_chosen</i>）：<ul><li><i>number</i> 必须大于或等于零，且大于或等于 number_chosen；</li><li><i>number_chosen</i> 必须大于或等于零。</li></ul></td>
        </tr>
        <tr>
            <td><b>COMBINA</b></td>
            <td>返回两个给定整数（允许重复）的组合数。参数为：项目总数（<i>number</i>）和每个组合中的项目数（<i>number_chosen</i>）：<ul><li><i>number</i> 必须大于或等于零，且大于或等于 number_chosen；</li><li><i>number_chosen</i> 必须大于或等于零。</li></ul></td>
        </tr>
        <tr>
            <td><b>COS</b></td>
            <td>返回以弧度表示的角度的余弦值。</td>
        </tr>
        <tr>
            <td><b>COSH</b></td>
            <td>返回实数的双曲余弦值。</td>
        </tr>
        <tr>
            <td><b>CSC</b></td>
            <td>返回以弧度表示的角度的余割值。</td>
        </tr>
        <tr>
            <td><b>CSCH</b></td>
            <td>返回以弧度表示的角度的双曲余割值。</td>
        </tr>
        <tr>
            <td><b>COT</b></td>
            <td>返回以弧度表示的角度的余切值。</td>
        </tr>
        <tr>
            <td><b>COTH</b></td>
            <td>返回双曲角度的双曲余切值。</td>
        </tr>
        <tr>
            <td><b>COUNT</b></td>
            <td>统计包含数字的单元格数量，以及参数列表中数字的个数。<br>数组或引用中的空单元格、逻辑值、文本或错误值不会被计入。</td>
        </tr>
        <tr>
            <td><b>COUNTA</b></td>
            <td>统计包含数字、文本、逻辑值、错误值及空文本（""）的单元格数量；值为零的单元格不计入。<br>该函数不计入空单元格。</td>
        </tr>
        <tr>
            <td><b>COUNTBLANK</b></td>
            <td>返回指定区域中空单元格的数量。<br>值为零的单元格不计入。</td>
        </tr>
        <tr>
            <td><b>COUNTIF</b><br>added in v6.0</td>
            <td>统计区域内满足给定条件的单元格数量。<br>接受两个参数：要计算的单元格区域和定义哪些单元格需要计入的条件。</td>
        </tr>
        <tr>
            <td><b>COUNTIFS</b><br>added in v6.0</td>
            <td>统计满足多个条件的单元格数量。<br>接受一对或多对区域与条件参数；只有满足所有条件的单元格才会被计入。</td>
        </tr>
        <tr>
            <td><b>DECIMAL</b></td>
            <td>将给定进制（基数）的数字文本表示形式转换为十进制数字。<br>基数必须为 2 到 36 之间的整数（含端点）。</td>
        </tr>
        <tr>
            <td><b>DEGREES</b></td>
            <td>将弧度转换为度。</td>
        </tr>
        <tr>
            <td><b>DIVIDE</b></td>
            <td>返回一个数除以另一个数的结果。</td>
        </tr>
        <tr>
            <td><b>EQ</b></td>
            <td>若第一个参数等于第二个参数，则返回 TRUE；否则返回 FALSE。</td>
        </tr>
        <tr>
            <td><b>EVEN</b></td>
            <td>返回数字向上舍入到最接近的偶数整数的结果。</td>
        </tr>
        <tr>
            <td><b>FACT</b></td>
            <td>返回数字的阶乘。数字必须在 1 到 n 之间。如果数字不是整数，则截断小数部分。</td>
        </tr>
        <tr>
            <td><b>FACTDOUBLE</b></td>
            <td>返回数字的双阶乘。数字必须在 1 到 n 之间。如果数字不是整数，则截断小数部分。</td>
        </tr>
        <tr>
            <td><b>FLOOR</b></td>
            <td>将数字向下舍入（趋向零）到最接近指定有效位数倍数的值。有效位数必须在 1 到 n 之间。<br>若数字为正数，则向下舍入并趋向零；若数字为负数，则向下舍入并远离零。</td>
        </tr>
        <tr>
            <td><b>GCD</b></td>
            <td>返回两个或多个整数的最大公约数。该函数接受 1 到 255 个数值，这些值应为整数。若某个值不是整数，则截断小数部分。</td>
        </tr>
        <tr>
            <td><b>GT</b></td>
            <td>若第一个参数大于第二个参数，则返回 TRUE；否则返回 FALSE。</td>
        </tr>
        <tr>
            <td><b>GTE</b></td>
            <td>若第一个参数大于或等于第二个参数，则返回 TRUE；否则返回 FALSE。</td>
        </tr>
        <tr>
            <td><b>INT</b></td>
            <td>返回数字向下舍入到最接近整数的结果。</td>
        </tr>
        <tr>
            <td><b>LN</b></td>
            <td>返回正实数的自然对数。</td>
        </tr>
        <tr>
            <td><b>LOG</b></td>
            <td>返回正实数以指定底数的对数。若省略底数，则默认为 10。</td>
        </tr>
        <tr>
            <td><b>LOG10</b></td>
            <td>返回正实数以 10 为底的对数。</td>
        </tr>
        <tr>
            <td><b>LT</b></td>
            <td>若第一个参数小于第二个参数，则返回 TRUE；否则返回 FALSE。</td>
        </tr>
        <tr>
            <td><b>LTE</b></td>
            <td>若第一个参数小于或等于第二个参数，则返回 TRUE；否则返回 FALSE。</td>
        </tr>
        <tr>
            <td><b>MAX</b></td>
            <td>返回一组值中的最大值。<br>该函数忽略空单元格、逻辑值 TRUE 和 FALSE 以及文本值。若参数中不包含数字，MAX 返回 0（零）。</td>
        </tr>
        <tr>
            <td><b>MAXIFS</b><br>added in v6.0</td>
            <td>返回满足一组给定条件的单元格中的最大值。<br>接受一个必需的最大值区域参数，后跟一对或多对条件区域与条件参数。</td>
        </tr>
        <tr>
            <td><b>MIN</b></td>
            <td>返回一组值中的最小值。<br>数组或引用中的空单元格、逻辑值或文本将被忽略。若参数中不包含数字，MIN 返回 0（零）。</td>
        </tr>
        <tr>
            <td><b>MINIFS</b><br>added in v6.0</td>
            <td>返回满足一组给定条件的单元格中的最小值。<br>接受一个必需的最小值区域参数，后跟一对或多对条件区域与条件参数。</td>
        </tr>
        <tr>
            <td><b>MINUS</b></td>
            <td>返回两个数字的差值。</td>
        </tr>
        <tr>
            <td><b>MOD</b></td>
            <td>返回数字除以除数后的余数。结果与除数的符号相同。</td>
        </tr>
        <tr>
            <td><b>MROUND</b></td>
            <td>返回数字舍入到最接近指定有效位数倍数的结果。<i>number</i> 和 <i>multiple</i> 的值必须具有相同的符号。</td>
        </tr>
        <tr>
            <td><b>MULTINOMIAL</b></td>
            <td>返回一组值的和的阶乘与各值阶乘之积的比值。该函数接受 1 到 255 个数值，这些值必须大于或等于 0。</td>
        </tr>
        <tr>
            <td><b>MULTIPLY</b></td>
            <td>返回两个数字相乘的结果。</td>
        </tr>
        <tr>
            <td><b>NE</b></td>
            <td>若第一个参数不等于第二个参数，则返回 TRUE；否则返回 FALSE。</td>
        </tr>
        <tr>
            <td><b>ODD</b></td>
            <td>返回数字向上舍入到最接近的奇数整数的结果。</td>
        </tr>
        <tr>
            <td><b>PI</b></td>
            <td>返回数字 3.14159265358979（数学常数 pi，精确到 15 位）。</td>
        </tr>
        <tr>
            <td><b>POW</b></td>
            <td>返回数字的指定次幂的结果。<br>适用于实数。</td>
        </tr>
        <tr>
            <td><b>POWER</b></td>
            <td>返回数字的指定次幂的结果。<br>适用于实数。</td>
        </tr>
        <tr>
            <td><b>PRODUCT</b></td>
            <td>将所有以参数形式给出的数字相乘并返回乘积。<br>
只有数组或引用中的数字才会参与相乘。数组或引用中的空单元格、逻辑值和文本将被忽略。</td>
        </tr>
        <tr>
            <td><b>QUOTIENT</b></td>
            <td>返回整除的结果（不含余数）。<br>适用于实数。</td>
        </tr>
        <tr>
            <td><b>RADIANS</b></td>
            <td>将度转换为弧度。</td>
        </tr>
        <tr>
            <td><b>RAND</b></td>
            <td>返回一个大于或等于 0 且小于 1 的随机数。<br>每次重新计算电子表格时都会返回一个新的随机数。</td>
        </tr>
        <tr>
            <td><b>RANDBETWEEN</b></td>
            <td>返回两个指定数字之间的随机数。<br>每次重新计算电子表格时都会返回一个新的随机数。</td>
        </tr>
        <tr>
            <td><b>ROMAN</b></td>
            <td>将阿拉伯数字转换为罗马数字。</td>
        </tr>
        <tr>
            <td><b>ROUND</b></td>
            <td>返回数字舍入到指定位数的结果。</td>
        </tr>
        <tr>
            <td><b>ROUNDDOWN</b></td>
            <td>返回数字向下舍入到指定位数的结果。</td>
        </tr>
        <tr>
            <td><b>ROUNDUP</b></td>
            <td>返回数字向上舍入到指定位数的结果。</td>
        </tr>
        <tr>
            <td><b>SEC</b></td>
            <td>返回以弧度表示的角度的正割值。<br>适用于数值。</td>
        </tr>
        <tr>
            <td><b>SECH</b></td>
            <td>返回以弧度表示的角度的双曲正割值。<br>适用于数值。</td>
        </tr>
        <tr>
            <td><b>SIN</b></td>
            <td>返回以弧度表示的角度的正弦值。</td>
        </tr>
        <tr>
            <td><b>SINH</b></td>
            <td>返回实数的双曲正弦值。</td>
        </tr>
        <tr>
            <td><b>SQRT</b></td>
            <td>返回数字的正平方根。</td>
        </tr>
        <tr>
            <td><b>SQRTPI</b></td>
            <td>返回数字与 pi 的乘积的平方根。数字必须大于或等于 0。</td>
        </tr>
        <tr>
            <td><b>STDEV</b></td>
            <td>基于代表总体样本的数据计算标准差。<br>标准差衡量数值相对于平均值（均值）的分散程度。<br>数组或引用中的空单元格、逻辑值、文本或错误值将被忽略。</td>
        </tr>
        <tr>
            <td><b>STDEVA</b></td>
            <td>基于样本计算标准差。<br>标准差衡量数值相对于平均值（均值）的分散程度。<br>数组或引用中的空单元格和文本值将被忽略。</td>
        </tr>
        <tr>
            <td><b>STDEVP</b></td>
            <td>基于全部数字总体计算标准差。<br>标准差衡量数值相对于平均值（均值）的分散程度。<br>数组或引用中的空单元格、逻辑值、文本或错误值将被忽略。</td>
        </tr>
        <tr>
            <td><b>STDEVPA</b></td>
            <td>基于以参数形式给出的全部总体（包含文本（计为 0）和逻辑值（TRUE 计为 1，FALSE 计为 0））计算标准差。<br>标准差衡量数值相对于平均值（均值）的分散程度。<br>若参数为数组或引用，则只使用其中的值。数组或引用中的空单元格和文本值将被忽略。<br>错误值会导致错误。</td>
        </tr>
        <tr>
            <td><b>STDEV.S</b><br>added in v4.3</td>
            <td>基于样本估算标准差（忽略样本中的逻辑值和文本）。<br>标准差衡量数值相对于平均值（均值）的分散程度。<br>若参数为数组或引用，则只使用其中的值。数组或引用中的空单元格、逻辑值、文本或错误值将被忽略。<br>错误值会导致错误。</td>
        </tr>
        <tr>
            <td><b>SUBTOTAL</b></td>
            <td>返回列表或数据库中的分类汇总值。</td>
        </tr>
        <tr>
            <td><b>SUM</b></td>
            <td>返回所提供值的总和。<br>空单元格、逻辑值（如 TRUE）或文本将被忽略。</td>
        </tr>
        <tr>
            <td><b>SUMIF</b><br>added in v6.0</td>
            <td>将区域内满足指定条件的单元格相加。<br>接受两个必需参数（要计算的区域和条件）以及一个可选参数（若与计算区域不同，则为要求和的单元格区域）。</td>
        </tr>
        <tr>
            <td><b>SUMIFS</b><br>added in v6.0</td>
            <td>将区域内满足多个条件的单元格相加。<br>接受一个必需的求和区域参数，后跟一对或多对条件区域与条件参数；只有满足所有条件的单元格才会被计入求和。</td>
        </tr>
        <tr>
            <td><b>SUMPRODUCT</b></td>
            <td>将单元格区域或数组相乘并返回乘积之和。<br>只有数字才参与有效乘积的计算。<br>空单元格、逻辑值和文本将被忽略。<br>非数值型数组元素视为零处理。</td>
        </tr>
        <tr>
            <td><b>SUMSQ</b></td>
            <td>返回各参数的平方和。<br>数组或引用中的空单元格、逻辑值、文本或错误值将被忽略。</td>
        </tr>
        <tr>
            <td><b>SUMX2MY2</b></td>
            <td>返回两个数组中对应值的平方差之和。<br>参数应为数字，或包含数字的名称、数组或引用。<br>数组或引用中的空单元格、逻辑值、文本或错误值将被忽略。零值会被计入。</td>
        </tr>
        <tr>
            <td><b>SUMX2PY2</b></td>
            <td>返回两个数组中对应值的平方和之和。<br>参数应为数字，或包含数字的名称、数组或引用。<br>数组或引用中的空单元格、逻辑值、文本或错误值将被忽略。零值会被计入。</td>
        </tr>
        <tr>
            <td><b>SUMXMY2</b></td>
            <td>返回两个数组中对应值之差的平方和。<br>参数应为数字，或包含数字的名称、数组或引用。<br>数组或引用中的空单元格、逻辑值、文本或错误值将被忽略。零值会被计入。</td>
        </tr>
        <tr>
            <td><b>TAN</b></td>
            <td>返回以弧度表示的角度的正切值。</td>
        </tr>
        <tr>
            <td><b>TANH</b></td>
            <td>返回实数的双曲正切值。</td>
        </tr>
        <tr>
            <td><b>TRUNC</b></td>
            <td>通过移除数字的小数部分将其截断为整数。</td>
        </tr>
        <tr>
            <td><b>VAR</b></td>
            <td>返回基于样本的方差。<br>数组或引用中的空单元格、逻辑值、文本或错误值将被忽略。</td>
        </tr>
        <tr>
            <td><b>VARA</b></td>
            <td>返回基于总体样本的方差，包含文本（计为 0）和逻辑值（TRUE 计为 1，FALSE 计为 0）。<br>数组或引用中的空单元格和文本值将被忽略。</td>
        </tr>
        <tr>
            <td><b>VARP</b></td>
            <td>返回基于全部数字总体的总体方差。<br>数组或引用中的空单元格、逻辑值、文本或错误值将被忽略。</td>
        </tr>
        <tr>
            <td><b>VARPA</b></td>
            <td>返回基于全部总体的总体方差，包含文本（计为 0）和逻辑值（TRUE 计为 1，FALSE 计为 0）。<br>数组或引用中的空单元格和文本值将被忽略。</td>
        </tr>
        <tr>
            <td><b>VAR.S</b><br>added in v4.3</td>
            <td>返回基于样本的方差（忽略样本中的逻辑值和文本）。<br>数组或引用中的空单元格、逻辑值、文本或错误值将被忽略。</td>
        </tr>
    </tbody>
</table>
<br>

请在我们的[代码示例工具](https://snippet.dhtmlx.com/wux2b35b)中查看示例。
### 数组函数 {#array-functions}

以下数组函数已在 v6.0 中添加。

<table>
    <tbody>
        <tr>
            <td><b>函数</b></td>
            <td><b>公式</b></td>
            <td><b>描述</b></td>
        </tr>
        <tr>
            <td><b>CHOOSECOLS</b></td>
            <td>=CHOOSECOLS(array, col_num1, [col_num2], ...)</td>
            <td>从数组或区域中返回指定的列。</td>
        </tr>
        <tr>
            <td><b>CHOOSEROWS</b></td>
            <td>=CHOOSEROWS(array, row_num1, [row_num2], ...)</td>
            <td>从数组或区域中返回指定的行。</td>
        </tr>
        <tr>
            <td><b>DROP</b></td>
            <td>=DROP(array, [rows], [columns])</td>
            <td>从数组的起始或末尾移除指定数量的行或列。</td>
        </tr>
        <tr>
            <td><b>EXPAND</b></td>
            <td>=EXPAND(array, [rows], [columns], [pad_with])</td>
            <td>将数组扩展或填充至指定的行数和列数。</td>
        </tr>
        <tr>
            <td><b>RANDARRAY</b></td>
            <td>=RANDARRAY([rows], [columns], [min], [max], [integer])</td>
            <td>默认返回一个由 0 到 1 之间的随机数组成的数组。可以指定要填充的行数和列数、最小值和最大值，以及是否返回整数或小数。</td>
        </tr>
        <tr>
            <td><b>SEQUENCE</b></td>
            <td>=SEQUENCE(rows, [columns], [start], [step])</td>
            <td>在数组中生成一组连续数字序列，例如 1、2、3、4。</td>
        </tr>
        <tr>
            <td><b>SORT</b></td>
            <td>=SORT(array, [sort_index], [sort_order], [by_col])</td>
            <td>对区域或数组的内容进行排序。默认按第一列升序排列。</td>
        </tr>
        <tr>
            <td><b>SORTBY</b></td>
            <td>=SORTBY(array, by_array, [sort_order], ...)</td>
            <td>根据对应区域或数组中的值，对区域或数组的内容进行排序。</td>
        </tr>
        <tr>
            <td><b>TAKE</b></td>
            <td>=TAKE(array, [rows], [columns])</td>
            <td>从数组的起始或末尾返回指定数量的连续行或列。</td>
        </tr>
        <tr>
            <td><b>TEXTSPLIT</b></td>
            <td>=TEXTSPLIT(text, col_delimiter, [row_delimiter], [ignore_empty], [match_mode], [pad_with])</td>
            <td>使用指定的分隔符将文本字符串拆分为行和列。</td>
        </tr>
        <tr>
            <td><b>TOCOL</b></td>
            <td>=TOCOL(array, [ignore], [scan_by_column])</td>
            <td>将数组或区域转换为单列。</td>
        </tr>
        <tr>
            <td><b>TOROW</b></td>
            <td>=TOROW(array, [ignore], [scan_by_column])</td>
            <td>将数组或区域转换为单行。</td>
        </tr>
        <tr>
            <td><b>UNIQUE</b></td>
            <td>=UNIQUE(array, [by_col], [exactly_once])</td>
            <td>从区域或数组中返回唯一值列表。</td>
        </tr>
        <tr>
            <td><b>WRAPCOLS</b></td>
            <td>=WRAPCOLS(vector, wrap_count, [pad_with])</td>
            <td>在达到指定数量的值后，按列将行或列向量折叠为二维数组。</td>
        </tr>
        <tr>
            <td><b>WRAPROWS</b></td>
            <td>=WRAPROWS(vector, wrap_count, [pad_with])</td>
            <td>在达到指定数量的值后，按行将行或列向量折叠为二维数组。</td>
        </tr>
    </tbody>
</table>
<br>

请参阅我们[代码示例工具](https://snippet.dhtmlx.com/wux2b35b)中的示例。
### 正则表达式函数 {#regex-functions}

<table>
    <tbody>
        <tr>
            <td><b>函数</b></td>
            <td><b>公式</b></td>
            <td><b>描述</b></td>
        </tr>
        <tr>
            <td><b>REGEXREPLACE</b></td>
            <td>=REGEXREPLACE(text, regular_expression, replacement)</td>
            <td>使用正则表达式将文本字符串的一部分替换为另一个文本字符串。</td>
        </tr>
        <tr>
            <td><b>REGEXMATCH</b></td>
            <td>=REGEXMATCH(text, regular_expression)</td>
            <td>若文本字符串与正则表达式中的模式匹配，则返回 TRUE；否则返回 FALSE。</td>
        </tr>
        <tr>
            <td><b>REGEXEXTRACT</b></td>
            <td>=REGEXEXTRACT(text, regular_expression)</td>
            <td>返回字符串中与正则表达式模式匹配的部分。</td>
        </tr>
    </tbody>
</table>
<br>

请参阅我们[代码示例工具](https://snippet.dhtmlx.com/wux2b35b)中的示例。

### 字符串函数 {#string-functions}

<table>
    <tbody>
        <tr>
            <td><b>函数</b></td>
            <td><b>公式</b></td>
            <td><b>描述</b></td>
        </tr>
        <tr>
            <td><b>ARRAYTOTEXT</b><br>added in v4.3</td>
            <td>=ARRAYTOTEXT(array, [format])</td>
            <td>根据指定的格式（0 - 简洁格式（默认）或 1 - 严格格式），从任意指定范围返回文本值数组。</td>
        </tr>
        <tr>
            <td><b>CHAR</b></td>
            <td>=CHAR(number)</td>
            <td>返回由数字指定的字符（来自计算机所用字符集）。数字必须在 1 到 255 之间。</td>
        </tr>
        <tr>
            <td><b>CLEAN</b></td>
            <td>=CLEAN(text)</td>
            <td>从文本中删除使用打印选项时不会打印出来的字符。</td>
        </tr>
        <tr>
            <td><b>CODE</b></td>
            <td>=CODE(text)</td>
            <td>返回文本字符串中第一个字符的数字代码。</td>
        </tr>
        <tr>
            <td><b>CONCATENATE</b></td>
            <td>=CONCATENATE(A1,"",B2:C3)</td>
            <td>将两个或多个文本字符串合并为一个字符串。</td>
        </tr>
        <tr>
            <td><b>DOLLAR</b></td>
            <td>=DOLLAR(number, decimals)</td>
            <td>使用货币格式将数字转换为文本，根据您指定的小数点右侧/左侧位数（默认为 2）进行格式化。</td>
        </tr>
        <tr>
            <td><b>EXACT</b></td>
            <td>=EXACT(text1, text2)</td>
            <td>比较两个字符串，若完全相同则返回 TRUE；否则返回 FALSE。</td>
        </tr>
        <tr>
            <td><b>FIND</b></td>
            <td>=FIND(find_text, within_text, [start_num])</td>
            <td>返回一个文本字符串在另一个文本字符串中的位置（以数字表示），从您指定的位置开始搜索（默认为 1）。</td>
        </tr>
        <tr>
            <td><b>FIXED</b></td>
            <td>=FIXED(number, [decimals], [no_commas])</td>
            <td>将数字四舍五入到指定的小数位数，使用句点和逗号以十进制格式对数字进行格式化，并将结果转换为文本。若 <i>no_commas</i> 设置为 1，则返回的文本不包含逗号。</td>
        </tr>
        <tr>
            <td><b>JOIN</b></td>
            <td>=JOIN(separator, value1, value2,...)</td>
            <td>使用指定的分隔符连接多个值。</td>
        </tr>
        <tr>
            <td><b>LEFT</b></td>
            <td>=LEFT(text, count)</td>
            <td>根据您指定的字符数，返回文本字符串中的第一个或前几个字符。</td>
        </tr>
        <tr>
            <td><b>LEN</b></td>
            <td>=LEN(text)</td>
            <td>返回指定字符串的长度。</td>
        </tr>
        <tr>
            <td><b>LOWER</b></td>
            <td>=LOWER(text)</td>
            <td>将指定字符串中的所有字母转换为小写。</td>
        </tr>
        <tr>
            <td><b>MID</b></td>
            <td>=MID(text, start, count)</td>
            <td>从文本字符串中返回指定数量的字符，<br> 从您指定的位置开始，根据您指定的<br>字符数提取。</td>
        </tr>
        <tr>
            <td><b>NUMBERVALUE</b></td>
            <td>=NUMBERVALUE (text, [decimal_separator], [group_separator])</td>
            <td>使用指定的小数分隔符和千位分隔符，将文本格式的数字转换为数值。</td>
        </tr>
        <tr>
            <td><b>PROPER</b></td>
            <td>=PROPER(text)</td>
            <td>将每个单词的第一个字符设置为大写，<br>并将所有其他字符转换为小写。</td>
        </tr>
        <tr>
            <td><b>REPLACE</b><br>added in v4.3</td>
            <td>=REPLACE(old_text, start_num, num_chars, new_text), <br><br> where: <ul> <li><i>old_text</i> - the text in which you want to replace some characters;</li> <li><i>start_num</i> - the position of the character in <i>old_text</i> that you want to replace with new_text;</li> <li><i>num_chars</i> - the number of characters to be replaced in <i>old_text</i>;</li> <li><i>new_text</i> - the text that will replace characters in <i>old_text</i>.</li> </ul></td>
            <td>根据您指定的字符数，将文本字符串的一部分替换为另一个文本字符串。</td>
        </tr>
        <tr>
            <td><b>REPT</b></td>
            <td>=REPT(text, number_times)</td>
            <td>将文本重复指定的次数。</td>
        </tr>
        <tr>
            <td><b>RIGHT</b></td>
            <td>=RIGHT(text, count)</td>
            <td>根据您指定的字符数，返回文本字符串中最后一个或最右侧的几个字符。</td>
        </tr>
        <tr>
            <td><b>SEARCH</b></td>
            <td>=SEARCH(find_text, within_text, [start_num])</td>
            <td>返回 <i>find_text</i> 在 <i>within_text</i> 中第一个字符的位置（以数字表示），从您指定的位置开始搜索（默认为 1）。</td>
        </tr>
        <tr>
            <td><b>SUBSTITUTE</b></td>
            <td>=SUBSTITUTE(text, old_text, new_text, [instance_num])</td>
            <td>将文本字符串中的旧文本替换为新文本。若指定了 <i>instance_num</i>，则仅替换该实例的 <i>old_text</i>；否则替换所有实例。</td>
        </tr>
        <tr>
            <td><b>T</b></td>
            <td>=T(value)</td>
            <td>当给定文本值时返回文本，当给定数字、日期及逻辑值 TRUE/FALSE 时返回空字符串 ("")。</td>
        </tr>
        <tr>
            <td><b>TRIM</b></td>
            <td>=TRIM(text)</td>
            <td>删除文本中除单词间单个空格之外的所有空格。</td>
        </tr>
        <tr>
            <td><b>UPPER</b></td>
            <td>=UPPER(text)</td>
            <td>将文本转换为大写。</td>
        </tr>
    </tbody>
</table>
<br>

请参阅我们[代码示例工具](https://snippet.dhtmlx.com/wux2b35b)中的示例。

### 其他函数 {#other-functions}

<table>
    <tbody>
        <tr>
            <td><b>函数</b></td>
            <td><b>示例</b></td>
            <td><b>描述</b></td>
        </tr>
        <tr>
            <td><b>AND</b></td>
            <td>=AND(logical1, [logical2], ...)</td>
            <td>根据是否满足多个条件，<br>返回 TRUE 或 FALSE。</td>
        </tr>
        <tr>
            <td><b>CHOOSE</b></td>
            <td>=CHOOSE(index_num, value1, [value2], ...)</td>
            <td>根据您指定的位置或索引，从值参数列表中返回一个值。</td>
        </tr>
        <tr>
            <td><b>FALSE</b></td>
            <td>=FALSE()</td>
            <td>返回逻辑值 FALSE。</td>
        </tr>
        <tr>
            <td><b>IF</b></td>
            <td>=IF(condition, [value_if_true], [value_if_false])</td>
            <td>当条件为 TRUE 时返回一个值，<br>当条件为 FALSE 时返回另一个值。</td>
        </tr>
        <tr>
            <td><b>NOT</b></td>
            <td>=NOT(logical)</td>
            <td>返回给定逻辑值或布尔值的相反值。</td>
        </tr>
        <tr>
            <td><b>OR</b></td>
            <td>=OR(logical1, [logical2], ...)</td>
            <td>若至少有一个逻辑表达式为 TRUE，则返回 TRUE；否则返回 FALSE。</td>
        </tr>
        <tr>
            <td><b>TRUE</b></td>
            <td>=TRUE()</td>
            <td>返回逻辑值 TRUE。</td>
        </tr>
    </tbody>
</table>
<br>

请参阅我们[代码示例工具](https://snippet.dhtmlx.com/wux2b35b)中的示例。

## 获取单元格公式 {#getting-cell-formula}

从 v4.1 起，您可以使用 [`getFormula()`](api/spreadsheet_getformula_method.md) 方法获取应用于单元格的公式。该方法以单元格 id 作为参数：

~~~js
var formula = spreadsheet.getFormula("B2");
// -> "ABS(C2)"
~~~

## 公式描述弹出框 {#popup-with-formula-description}

当您输入公式时，会出现一个包含函数描述及其参数说明的弹出框。

![DHTMLX Spreadsheet formula popup showing a function description and parameters while typing](/img/formula_popup.png)

请参阅我们[代码示例工具](https://snippet.dhtmlx.com/wux2b35b)中的示例。

您可以修改公式参数弹出框的默认语言环境并添加自定义语言环境。详情请参阅[本地化](localization.md#default-locale-for-formulas)指南。

## 自定义公式 {#custom-formulas}

从 v6.0 起，您可以使用 [`addFormula()`](api/spreadsheet_addformula_method.md) 方法注册自定义公式函数。注册后，该公式即可在任意单元格中通过其大写名称使用。

该方法接受两个参数：公式名称和一个同步处理函数，该函数接收解析后的单元格值作为参数并返回结果：

~~~js
spreadsheet.addFormula("DOUBLE", (value) => {
    return value * 2;
});
~~~

之后，您可以像使用任何内置函数一样在单元格中使用该公式：

~~~js
spreadsheet.parse([
    { cell: "A1", value: 4, format: "number" },
    { cell: "B1", value: "=DOUBLE(A1)", format: "number" }
]);
~~~

:::note
处理函数必须是同步的。不允许在函数内部使用 `Promise` 或 `fetch`。
:::

**相关示例：** [Spreadsheet. 添加自定义公式](https://snippet.dhtmlx.com/wvxdlahp)
