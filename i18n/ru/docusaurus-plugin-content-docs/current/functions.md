---
sidebar_label: Формулы и функции
title: Формулы и функции
description: В документации вы можете узнать о формулах и функциях библиотеки DHTMLX JavaScript Spreadsheet. Изучайте руководства разработчика и справочник АПИ, просматривайте примеры кода и живые демо, а также загрузите бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
---

# Формулы и функции {#formulas-and-functions}

Начиная с версии v4.0, пакет DHTMLX Spreadsheet включает набор предустановленных формул для различных типов вычислений со строками и числами. Формулы совместимы с Excel и Google Sheets.

:::note
Строчные буквы в формулах автоматически преобразуются в верхний регистр.
:::

<iframe src="https://snippet.dhtmlx.com/wux2b35b?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Функции {#functions}

Ниже приведён список всех доступных функций с подробными описаниями.

### Булевы операторы {#boolean-operators}

Вы можете сравнивать два значения с помощью логических выражений, которые возвращают TRUE или FALSE.

| Operator | Example       | Description                                                                                              |
| :------- | :------------ | :------------------------------------------------------------------------------------------------------- |
| =        | =A1=B1        | Возвращает TRUE, если значение в ячейке A1 равно значению в ячейке B1; иначе — FALSE.                   |
| &lt;&gt; | =A1&lt;&gt;B1 | Возвращает TRUE, если значение в ячейке A1 не равно значению в ячейке B1; иначе — FALSE.                |
| &gt;     | =A1&gt;B1     | Возвращает TRUE, если значение в ячейке A1 больше значения в ячейке B1; иначе — FALSE.                  |
| &lt;     | =A1&lt;B1     | Возвращает TRUE, если значение в ячейке A1 меньше значения в ячейке B1; иначе — FALSE.                  |
| &gt;=    | =A1&gt;=B1    | Возвращает TRUE, если значение в ячейке A1 больше или равно значению в ячейке B1; иначе — FALSE.        |
| &lt;=    | =A1&lt;=B1    | Возвращает TRUE, если значение в ячейке A1 меньше или равно значению в ячейке B1; иначе — FALSE.        |

Посмотрите пример в нашем [инструменте для сниппетов](https://snippet.dhtmlx.com/wux2b35b).

### Функции даты {#date-functions}

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
            <td>Объединяет три отдельных значения (год, месяц и день) и возвращает дату.</td>
        </tr>
        <tr>
            <td><b>DATEDIF</b></td>
            <td>=DATEDIF(start_date,end_date,unit)</td>
            <td>Возвращает количество дней, месяцев или лет между двумя датами.<br> Аргумент <a href="https://support.microsoft.com/en-us/office/datedif-function-25dba1a4-2812-480b-84dd-8b32a451b35c">unit</a> определяет тип возвращаемой информации.</td>
        </tr>
        <tr>
            <td><b>DATEVALUE</b></td>
            <td>=DATEVALUE(date_text)</td>
            <td>Преобразует дату, хранящуюся в виде текста, в порядковый номер.</td>
        </tr>
        <tr>
            <td><b>DAY</b></td>
            <td>=DAY(date)</td>
            <td>Возвращает день месяца в виде числа от 1 до 31 для указанной даты.</td>
        </tr>
        <tr>
            <td><b>DAYS</b></td>
            <td>=DAYS(end_date, start_date)</td>
            <td>Возвращает количество дней между двумя датами.</td>
        </tr>
        <tr>
            <td><b>DAYS360</b></td>
            <td>=DAYS360(start_date,end_date,[method]])</td>
            <td>Возвращает количество дней между двумя датами на основе 360-дневного года (двенадцать 30-дневных месяцев).</td>
        </tr>
        <tr>
            <td><b>EDATE</b></td>
            <td>=EDATE(start_date, months)</td>
            <td>Возвращает дату того же числа месяца, на n месяцев в прошлом или будущем.</td>
        </tr>
        <tr>
            <td><b>EOMONTH</b></td>
            <td>=EOMONTH(start_date, months)</td>
            <td>Возвращает дату последнего дня месяца, на n месяцев раньше или позже указанной начальной даты.</td>
        </tr>
        <tr>
            <td><b>ISOWEEKNUM</b></td>
            <td>=ISOWEEKNUM(date)</td>
            <td>Возвращает номер ISO-недели года для указанной даты.</td>
        </tr>
        <tr>
            <td><b>MONTH</b></td>
            <td>=MONTH(date)</td>
            <td>Возвращает месяц года для указанной даты.</td>
        </tr>
        <tr>
            <td><b>NETWORKDAYS</b></td>
            <td>=NETWORKDAYS(start_date, end_date, [holidays])</td>
            <td>Возвращает количество полных рабочих дней между двумя датами. Рабочие дни не включают выходные и даты, указанные в <i>holidays</i>.</td>
        </tr>
        <tr>
            <td><b>NETWORKDAYSINTL</b></td>
            <td>=NETWORKDAYSINTL(start_date, end_date, [weekend], [holidays])</td>
            <td>Возвращает количество полных рабочих дней между двумя датами. <br>Необязательный параметр <a href="https://support.microsoft.com/en-us/office/networkdays-intl-function-a9b26239-4f20-46a1-9ab8-4e925bfd5e28">weekend</a> определяет, какие дни недели считаются выходными. <br><i>Выходные дни</i> и <i>праздники</i> не считаются рабочими днями.</td>
        </tr>
        <tr>
            <td><b>NOW</b></td>
            <td>=NOW()</td>
            <td>Возвращает текущую дату.</td>
        </tr>
        <tr>
            <td><b>TIMEVALUE</b><br>added in v4.3</td>
            <td>=TIMEVALUE(time_text)</td>
            <td>Возвращает десятичное число, представляющее время, заданное текстовой строкой.</td>
        </tr>
        <tr>
            <td><b>WEEKDAY</b></td>
            <td>=WEEKDAY(date,[return_type])</td>
            <td>Возвращает день недели для указанной даты. <br>Аргумент <a href="https://support.microsoft.com/en-us/office/weekday-function-60e44483-2ed1-439f-8bd0-e404c190949a">return_type</a> определяет, какой день недели считается первым.</td>
        </tr>
        <tr>
            <td><b>WEEKNUM</b></td>
            <td>=WEEKNUM(date,[return_type])</td>
            <td>Возвращает номер недели для указанной даты. <br>Аргумент <a href="https://support.microsoft.com/en-us/office/weeknum-function-e5c43a03-b4ab-426c-b411-b18c13c75340">return_type</a> определяет, какой день недели считается первым.</td>
        </tr>
        <tr>
            <td><b>WORKDAY</b></td>
            <td>=WORKDAY(start_date, days, [holidays])</td>
            <td>Возвращает дату ближайшего рабочего дня через n дней в будущем или прошлом.<br>Рабочие дни не включают выходные и даты, указанные в <i>holidays</i>.</td>
        </tr>
        <tr>
            <td><b>WORKDAYINTL</b></td>
            <td>=WORKDAYINTL(start_date, days, [weekend], [holidays])</td>
            <td>Возвращает дату ближайшего рабочего дня через n дней в будущем или прошлом. <br>Необязательный параметр <a href="https://support.microsoft.com/en-us/office/workday-intl-function-a378391c-9ba7-4678-8a39-39611a9bf81d">weekend</a> определяет, какие дни недели считаются выходными. <br><i>Выходные дни</i> и <i>праздники</i> не считаются рабочими днями.</td>
        </tr>
        <tr>
            <td><b>YEAR</b></td>
            <td>=YEAR(date)</td>
            <td>Возвращает год для указанной даты.</td>
        </tr>
        <tr>
            <td><b>YEARFRAC</b></td>
            <td>=YEARFRAC(start_date, end_date, [basis])</td>
            <td>Возвращает долю года между двумя датами. <br>Необязательный аргумент <a href="https://support.microsoft.com/en-us/office/yearfrac-function-3844141e-c76d-4143-82b6-208454ddc6a8">basis</a> определяет тип используемой базы подсчёта дней.</td>
        </tr>
    </tbody>
</table>
<br>

Посмотрите пример в нашем [инструменте для сниппетов](https://snippet.dhtmlx.com/wux2b35b).
### Финансовые функции {#financial-functions}

<table>
    <tbody>
        <tr>
            <td><b>Функция</b></td>
            <td><b>Формула</b></td>
            <td><b>Описание</b></td>
        </tr>
        <tr>
            <td><b>ACCRINT</b></td>
            <td> =ACCRINT(issue, id, sd, rate, par, frequency, [basis], [calc_method]), <br><br> where: <ul> <li><i>issue</i> - the issue date of the security;</li> <li><i>id</i> - the security's first interest date;</li> <li><i>sd</i> - the security's settlement date;</li> <li><i>rate</i> - the security's annual coupon rate;</li> <li><i>par</i> - the security's par value, $1,000 by default;</li> <li><i>frequency</i> - the number of coupon payments per year (1 for annual payments); </li> <li><i>basis</i> - optional, the type of day count basis to use;</li> <li><i>calc_method</i> - optional, the way to calculate the total accrued interest when the date of settlement is later than the date of first interest (<a href="https://support.microsoft.com/en-us/office/accrint-function-fe45d089-6722-4fb3-9379-e1f911d8dc74">0 or 1(default)</a>).</li></ul></td>
            <td>Возвращает накопленный процент по ценной бумаге с периодической выплатой процентов.</td>
        </tr>
        <tr>
            <td><b>BINOM.DIST</b><br>added in v4.3</td>
            <td>=BINOM.DIST(number_s, trials, probability_s, cumulative), <br><br> where: <ul> <li><i>number_s</i> - the number of successes in trials;</li> <li><i>trials</i> - the number of independent trials;</li> <li><i>probability_s</i> - the probability of success on each trial;</li> <li><i>cumulative</i> - if TRUE, then BINOM.DIST returns the cumulative distribution function; if FALSE (use 0), it returns the probability mass function.</li> </ul></td>
            <td>Возвращает вероятность биномиального распределения для отдельного члена.</td>
        </tr>
        <tr>
            <td><b>BINOM.DIST.RANGE</b><br>added in v4.3</td>
            <td>=BINOM.DIST.RANGE(trials, probability_s, number_s, [number_s2]), <br><br> where: <ul> <li><i>trials</i> - the number of independent trials (must be ≥ 0);</li> <li><i>probability_s</i> - the probability of success in each trial (must be ≥ 0 and ≤ 1);</li> <li><i>number_s</i> - the number of successes in trials (must be ≥ 0 and ≤ <i>trials)</i>;</li> <li><i>number_s2</i> - optional. If provided, returns the probability that the number of successful trials will fall between <i>number_s</i> and <i>number_s2</i> <br>([number_s2] must be ≥ <i>number_s</i> and ≤ <i>trials</i>).</li> </ul></td>
            <td>Возвращает вероятность результата испытания с использованием биномиального распределения.</td>
        </tr>
        <tr>
            <td><b>BINOM.INV</b><br>added in v4.3</td>
            <td>=BINOM.INV(trials, probability_s, alpha), <br><br> where: <ul> <li><i>trials</i> - the number of Bernoulli trials;</li> <li><i>probability_s</i> - the probability of success in each trial (must be ≥ 0 and ≤ 1);</li> <li><i>alpha</i> - the criterion value (must be ≥ 0 and ≤ <i>1)</i>;</li> </ul></td>
            <td>Возвращает наименьшее значение, при котором кумулятивное биномиальное распределение больше или равно заданному критерию.</td>
        </tr>
        <tr>
            <td><b>BITLSHIFT</b><br>added in v4.3</td>
            <td>=BITLSHIFT(number, shift_amount), <br><br> where: <ul> <li><i>number</i> - the number to be shifted (must be an integer greater than or equal to 0 </li> <li><i>shift_amount</i> - the amount of bits to shift, if negative, shifts bits to the right instead</li> </ul></td>
            <td>Возвращает число, сдвинутое влево на указанное количество бит.</td>
        </tr>
        <tr>
            <td><b>BITOR</b><br>added in v4.3</td>
            <td>=BITOR(number1, number2), <br><br> where: <ul> <li><i>number1</i> - a decimal number (must be greater than or equal to 0 and no larger than 2^48 - 1);</li> <li><i>number2</i> - a decimal number (must be greater than or equal to 0 and no larger than 2^48 - 1);</li> </ul></td>
            <td>Возвращает десятичное число, представляющее побитовое ИЛИ двух чисел.</td>
        </tr>
        <tr>
            <td><b>BITRSHIFT</b><br>added in v4.3</td>
            <td>=BITRSHIFT(number, shift_amount), <br><br> where: <ul> <li><i>number</i> - the number to be shifted (must be an integer greater than or equal to 0);</li> <li><i>shift_amount</i> - the amount of bits to shift, if negative shifts bits to the left instead;</li> </ul></td>
            <td>Возвращает число, сдвинутое вправо на указанное количество бит.</td>
        </tr>
        <tr>
            <td><b>BITXOR</b><br>added in v4.3</td>
            <td>=BITXOR(number1, number2), <br><br> where: <ul> <li><i>number1</i> - a decimal number (must be greater than or equal to 0 and no larger than 2^48 - 1);</li> <li><i>number2</i> - a decimal number (must be greater than or equal to 0 and no larger than 2^48 - 1);</li> </ul></td>
            <td>Возвращает десятичное число, представляющее побитовое исключающее ИЛИ двух чисел.</td>
        </tr>
        <tr>
            <td><b>COMPLEX</b><br>added in v4.3</td>
            <td>=COMPLEX(real_num, i_num, [suffix]), <br><br> where: <ul> <li><i>real_num</i> - the real coefficient of the complex number;</li> <li><i>i_num</i> - the imaginary coefficient of the complex number;</li> <li><i>suffix</i> - optional ("i" by default) - the suffix for the imaginary component of the complex number; <br>(must be lowercase "i" or "j") .</li> </ul></td>
            <td>Преобразует вещественный и мнимый коэффициенты в комплексное число вида x + yi или x + yj.</td>
        </tr>
        <tr>
            <td><b>CORREL</b><br>added in v4.3</td>
            <td>=CORREL(array1, array2), <br><br> where: <ul> <li><i>array1</i> - a range of cell values;</li> <li><i>array2</i> - a second range of cell values;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. The arrays must have equal number of data points. </ul></td>
            <td>Возвращает коэффициент корреляции двух диапазонов ячеек.</td>
        </tr>
        <tr>
            <td><b>COVAR</b><br>added in v4.3</td>
            <td>=COVAR(array1, array2), <br><br> where: <ul> <li><i>array1</i> - The first cell range of integers;</li> <li><i>array2</i> - The second cell range of integers;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. The arrays must have equal number of data points. </ul></td>
            <td>Возвращает ковариацию — среднее произведений отклонений для каждой пары точек данных в двух наборах данных.</td>
        </tr>
        <tr>
            <td><b>COVARIANCE.P</b><br>added in v4.3</td>
            <td>=COVARIANCE.P(array1, array2), <br><br> where: <ul> <li><i>array1</i> - The first cell range of integers;</li> <li><i>array2</i> - The second cell range of integers;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. The arrays must have equal number of data points. </ul></td>
            <td>Возвращает генеральную ковариацию — среднее произведений отклонений для каждой пары точек данных в двух наборах данных.</td>
        </tr>
        <tr>
            <td><b>COVARIANCE.S</b><br>added in v4.3</td>
            <td>=COVARIANCE.S(array1, array2), <br><br> where: <ul> <li><i>array1</i> - The first cell range of integers;</li> <li><i>array2</i> - The second cell range of integers;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. The arrays must have equal number of data points. </ul></td>
            <td>Возвращает выборочную ковариацию — среднее произведений отклонений для каждой пары точек данных в двух наборах данных.</td>
        </tr>
        <tr>
            <td><b>DB</b></td>
            <td>=DB(cost, salvage, life, period, [month]), <br><br> where: <ul> <li><i>cost</i> - the initial cost of the asset;</li> <li><i>salvage</i> - the value of the asset at the end of the depreciation;</li> <li><i>life</i> - the number of periods over which the asset is being depreciated;</li> <li><i>period</i> - the period to calculate depreciation for;</li> <li><i>month</i> - optional, the number of months in the first year, 12 by default.</li> </ul></td>
            <td>Вычисляет амортизацию актива за указанный период методом фиксированного убывающего остатка.</td>
        </tr>
        <tr>
            <td><b>DDB</b></td>
            <td>=DDB(cost, salvage, life, period, [factor]), <br><br> where: <ul> <li><i>cost</i> - the initial cost of the asset;</li> <li><i>salvage</i> - the value of the asset at the end of the depreciation;</li> <li><i>life</i> - the number of periods over which the asset is being depreciated;</li> <li><i>period</i> - the period to calculate depreciation for;</li> <li><i>factor</i> - optional, the rate at which the balance declines, 2 (the double-declining balance method) by default</li> </ul></td>
            <td>Вычисляет амортизацию актива за указанный период методом двойного убывающего остатка или другим указанным методом.</td>
        </tr>
        <tr>
            <td><b>DEC2BIN</b><br>added in v4.3</td>
            <td>=DEC2BIN(number), <br><br> where: <ul> <li><i>number</i> - the decimal integer you want to convert (must be greater than -512 but less than 511);</li> </ul></td>
            <td>Преобразует десятичное число в двоичное.</td>
        </tr>
        <tr>
            <td><b>DEC2HEX</b><br>added in v4.3</td>
            <td>=DEC2HEX(number), <br><br> where: <ul> <li><i>number</i> - the decimal integer you want to convert (must be greater than -549755813888 but less than 549755813887);</li> </ul></td>
            <td>Преобразует десятичное число в шестнадцатеричное.</td>
        </tr>
        <tr>
            <td><b>DEC2OCT</b><br>added in v4.3</td>
            <td>=DEC2OCT(number), <br><br> where: <ul> <li><i>number</i> - the decimal integer you want to convert (must be greater than -536870912 but less than 536870911);</li> </ul></td>
            <td>Преобразует десятичное число в восьмеричное.</td>
        </tr>
        <tr>
            <td><b>DELTA</b><br>added in v4.3</td>
            <td>=DELTA(number1, [number2]), <br><br> where: <ul> <li><i>number1</i> - the first number;</li> <li><i>number2</i> - optional, the second number. If omitted, number2 is assumed to be zero.</li> </ul></td>
            <td>Проверяет равенство двух чисел. Возвращает 1, если number1 = number2; в противном случае возвращает 0.</td>
        </tr>
        <tr>
            <td><b>DEVSQ</b><br>added in v4.3</td>
            <td>=DEVSQ(number1, [number2], ...), <br><br> where: <ul> <li><i>number1, number2,...</i> - from 1 to 255 arguments for which you want to calculate the sum of squared deviations;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. </ul></td>
            <td>Возвращает сумму квадратов отклонений точек данных от их выборочного среднего.</td>
        </tr>
        <tr>
            <td><b>DOLLARDE</b></td>
            <td>=DOLLARDE(fractional_dollar, fraction)</td>
            <td>Преобразует цену в долларах, заданную в виде целой части и дробной части, в цену в долларах, отображаемую как десятичное число.</td>
        </tr>
        <tr>
            <td><b>DOLLARFR</b></td>
            <td>=DOLLARFR(decimal_dollar, fraction)</td>
            <td>Преобразует десятичное число в дробное значение в долларах.</td>
        </tr>
        <tr>
            <td><b>EFFECT</b></td>
            <td>=EFFECT(nominal_rate, npery)<br><br> <i>nominal_rate</i> must be >= 0, <i>npery</i> must be > 1.</td>
            <td>Возвращает эффективную годовую процентную ставку на основе номинальной годовой процентной ставки и указанного количества периодов начисления сложных процентов в год.<br> Работает с числовыми значениями. </td>
        </tr>
        <tr>
            <td><b>ERF</b><br>added in v4.3</td>
            <td>=ERF(lower_limit, [upper_limit]), <br><br> where: <ul> <li><i>lower_limit</i> - the lower bound for integrating ERF; </li> <li><i>upper_limit</i> - the upper bound for integrating ERF. If omitted, ERF integrates between 0 and lower_limit. </li> </ul> </td>
            <td>Возвращает функцию ошибок, проинтегрированную между lower_limit и upper_limit.</td>
        </tr>
        <tr>
            <td><b>ERFC</b><br>added in v4.3</td>
            <td>=ERFC(x), <br><br> where: <ul> <li><i>x</i> - the lower bound for integrating ERFC </li> </ul></td>
            <td>Возвращает дополнительную функцию ERF, проинтегрированную от x до бесконечности.</td>
        </tr>
        <tr>
            <td><b>EXP</b><br>added in v4.3</td>
            <td>=EXP(number), <br><br> where: <ul> <li><i>number</i> - the power that e is raised to </li> </ul></td>
            <td>Возвращает результат возведения константы e (равной 2.71828182845904) в указанную степень.</td>
        </tr>
        <tr>
            <td><b>FISHER</b><br>added in v4.3</td>
            <td>=FISHER(x), <br><br> where: <ul> <li><i>x</i> - the value for which you want to calculate the transformation </li> </ul></td>
            <td>Вычисляет преобразование Фишера для заданного значения.</td>
        </tr>
        <tr>
            <td><b>FISHERINV</b><br>added in v4.3</td>
            <td>=FISHERINV(y), <br><br> where: <ul> <li><i>y</i> - the value for which you want to perform the inverse of the transformation </li> </ul></td>
            <td>Вычисляет обратное преобразование Фишера и возвращает значение в диапазоне от -1 до +1.</td>
        </tr>
        <tr>
            <td><b>FV</b></td>
            <td>=FV(rate, nper, pmt, [pv], [type]), <br><br> where: <ul> <li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>nper</i> - the total number of payment periods in an annuity. For monthly payments, <i>nper</i>=nper*12;</li> <li><i>pmt</i> - the payment made each period;</li> <li><i>pv</i> - optional, the present value, or the lump-sum amount that a series of future payments is worth right now, 0 by default;</li> <li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li> </ul></td>
            <td>Вычисляет будущую стоимость инвестиции. </td>
        </tr>
        <tr>
            <td><b>FVSCHEDULE</b></td>
            <td>=FVSCHEDULE(principal, schedule), <br><br> where: <ul> <li><i>principal</i> - the present value;</li> <li><i>schedule</i> - an array of interest rates to apply. The values in the array can be numbers or blank cells; any other value produces the error value. Blank cells are taken as zeros.</li> </ul></td>
            <td>Возвращает будущую стоимость начального капитала (= текущей стоимости) после применения ряда ставок сложных процентов.</td>
        </tr>
        <tr>
            <td><b>GAMMA</b><br>added in v4.3</td>
            <td>=GAMMA(number)<br><br> 
            If Number is a negative integer or 0, GAMMA returns the #Error value.</td>
            <td>Возвращает значение гамма-функции.</td>
        </tr>
        <tr>
            <td><b>GEOMEAN</b><br>added in v4.3</td>
            <td>=GEOMEAN(number1, [number2], ...)<br><br> where: <ul> <li><i>number1, number2,...</i> - from 1 to 255 arguments for which you want to calculate the mean;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. </ul></td>
            <td>Возвращает среднее геометрическое массива или диапазона положительных данных.</td>
        </tr>
        <tr>
            <td><b>GESTEP</b><br>added in v4.3</td>
            <td>=GESTEP(number, [step])<br><br> where: <ul> <li><i>number</i> - the value to test against step;</li> <li><i>step</i> - optional, the threshold value. If you omit a value for step, GESTEP uses zero;</li> </ul></td>
            <td>Возвращает 1, если number ≥ step; в противном случае возвращает 0 (ноль).</td>
        </tr>
        <tr>
            <td><b>HARMEAN</b><br>added in v4.3</td>
            <td>=HARMEAN(number1, [number2], ...)<br><br> where: <ul> <li><i>number1, number2,...</i> - from 1 to 255 arguments for which you want to calculate the mean;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. </ul></td>
            <td>Возвращает среднее гармоническое набора данных.</td>
        </tr>
        <tr>
            <td><b>HEX2BIN</b><br>added in v4.3</td>
            <td>=HEX2BIN(number)<br><br> where: <ul> <li><i>number</i> - the hexadecimal number you want to convert. Number can't contain more than 10 characters;</li> </ul></td>
            <td>Преобразует шестнадцатеричное число в двоичное.</td>
        </tr>
        <tr>
            <td><b>HEX2DEC</b><br>added in v4.3</td>
            <td>=HEX2DEC(number)<br><br> where: <ul> <li><i>number</i> - the hexadecimal number you want to convert. Number can't contain more than 10 characters;</li> </ul></td>
            <td>Преобразует шестнадцатеричное число в десятичное.</td>
        </tr>
        <tr>
            <td><b>HEX2OCT</b><br>added in v4.3</td>
            <td>=HEX2OCT(number)<br><br> where: <ul> <li><i>number</i> - the hexadecimal number you want to convert. Number can't contain more than 10 characters;</li> </ul></td>
            <td>Преобразует шестнадцатеричное число в восьмеричное.</td>
        </tr>
        <tr>
            <td><b>IMABS</b><br>added in v4.3</td>
            <td>=IMABS(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Возвращает абсолютное значение комплексного числа в формате x + yi или x + yj.</td>
        </tr>
        <tr>
            <td><b>IMAGINARY</b><br>added in v4.3</td>
            <td>=IMAGINARY(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Возвращает мнимый коэффициент комплексного числа в формате x + yi или x + yj.</td>
        </tr>
        <tr>
            <td><b>IMCONJUGATE</b><br>added in v4.3</td>
            <td>=IMCONJUGATE(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Возвращает комплексно-сопряжённое число для комплексного числа в формате x + yi или x + yj.</td>
        </tr>
        <tr>
            <td><b>IMCOS</b><br>added in v4.3</td>
            <td>=IMCOS(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Возвращает косинус комплексного числа в формате x + yi или x + yj.</td>
        </tr>
        <tr>
            <td><b>IMCOSH</b><br>added in v4.3</td>
            <td>=IMCOSH(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Возвращает гиперболический косинус комплексного числа в формате x + yi или x + yj.</td>
        </tr>
        <tr>
            <td><b>IMCOT</b><br>added in v4.3</td>
            <td>=IMCOT(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Возвращает котангенс комплексного числа в формате x + yi или x + yj.</td>
        </tr>
        <tr>
            <td><b>IMCSC</b><br>added in v4.3</td>
            <td>=IMCSC(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Возвращает косеканс комплексного числа в формате x + yi или x + yj.</td>
        </tr>
        <tr>
            <td><b>IMCSCH</b><br>added in v4.3</td>
            <td>=IMCSCH(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Возвращает гиперболический косеканс комплексного числа в формате x + yi или x + yj.</td>
        </tr>
        <tr>
            <td><b>IMDIV</b><br>added in v4.3</td>
            <td>=IMDIV(inumber1, inumber2)<br><br> where: <ul> <li><i>inumber1</i> - the complex numerator or dividend</li> <li><i>inumber2</i> - the complex denominator or divisor</li> </ul></td>
            <td>Возвращает частное двух комплексных чисел в формате x + yi или x + yj.</td>
        </tr>
        <tr>
            <td><b>IMEXP</b><br>added in v4.3</td>
            <td>=IMEXP(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Возвращает экспоненту комплексного числа в формате x + yi или x + yj.</td>
        </tr>
        <tr>
            <td><b>IMLN</b><br>added in v4.3</td>
            <td>=IMLN(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Возвращает натуральный логарифм комплексного числа в формате x + yi или x + yj.</td>
        </tr>
        <tr>
            <td><b>IMPOWER</b><br>added in v4.3</td>
            <td>=IMPOWER(inumber, number)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> <li><i>number</i> - the power to which you want to raise the complex number</li> </ul></td>
            <td>Возвращает комплексное число в текстовом формате x + yi или x + yj, возведённое в степень.</td>
        </tr>
        <tr>
            <td><b>IMPRODUCT</b><br>added in v4.3</td>
            <td>=IMPRODUCT(inumber1, [inumber2], ...)<br><br> where: <ul> <li><i>inumber1, inumber2,...</i> - from 1 to 255 complex numbers to multiply</li> </ul></td>
            <td>Возвращает произведение от 1 до 255 комплексных чисел в формате x + yi или x + yj.</td>
        </tr>
        <tr>
            <td><b>IMREAL</b><br>added in v4.3</td>
            <td>=IMREAL(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Возвращает вещественный коэффициент комплексного числа в формате x + yi или x + yj.</td>
        </tr>
        <tr>
            <td><b>IMSEC</b><br>added in v4.3</td>
            <td>=IMSEC(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Возвращает секанс комплексного числа в формате x + yi или x + yj.</td>
        </tr>
        <tr>
            <td><b>IMSECH</b><br>added in v4.3</td>
            <td>=IMSECH(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Возвращает гиперболический секанс комплексного числа в формате x + yi или x + yj.</td>
        </tr>
        <tr>
            <td><b>IMSIN</b><br>added in v4.3</td>
            <td>=IMSIN(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Возвращает синус комплексного числа в формате x + yi или x + yj.</td>
        </tr>
        <tr>
            <td><b>IMSINH</b><br>added in v4.3</td>
            <td>=IMSINH(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Возвращает гиперболический синус комплексного числа в формате x + yi или x + yj.</td>
        </tr>
        <tr>
            <td><b>IMSQRT</b><br>added in v4.3</td>
            <td>=IMSQRT(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Возвращает квадратный корень из комплексного числа в формате x + yi или x + yj.</td>
        </tr>
        <tr>
            <td><b>IMSUB</b><br>added in v4.3</td>
            <td>=IMSUB(inumber1, inumber2)<br><br> where: <ul> <li><i>inumber1</i> - a complex number from which to subtract inumber2;</li> <li><i>inumber2</i> - the complex number to subtract from inumber1</li> </ul></td>
            <td>Возвращает разность двух комплексных чисел в формате x + yi или x + yj.</td>
        </tr>
        <tr>
            <td><b>IMSUM</b><br>added in v4.3</td>
            <td>=IMSUB(inumber1, [inumber2], ...)<br><br> where: <ul> <li><i>inumber1, inumber2,...</i> - from 1 to 255 complex numbers to add</li> </ul></td>
            <td>Возвращает сумму двух или более комплексных чисел в формате x + yi или x + yj.</td>
        </tr>
        <tr>
            <td><b>IMTAN</b><br>added in v4.3</td>
            <td>=IMTAN(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Возвращает тангенс комплексного числа в формате x + yi или x + yj.</td>
        </tr>
        <tr>
            <td><b>IPMT</b></td>
            <td>=IPMT(rate, per, nper, pv, [fv], [type]), <br><br> where: <ul> <li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>per</i> - the period for which you want to find the interest and must be in the range between 1 and nper;</li> <li><i>nper</i> - the total number of payment periods in an annuity. For monthly payments, <i>nper</i>=nper*12;</li> <li><i>pv</i> - the present value, or the lump-sum amount that a series of future payments is worth right now;</li> <li><i>fv</i> - optional, the future value, 0 by default;</li> <li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li> </ul></td>
            <td>Возвращает сумму процентных выплат за заданный период для инвестиции с равными периодическими платежами и постоянной процентной ставкой.</td>
        </tr>
        <tr>
            <td><b>IRR</b></td>
            <td>=IRR(values, [guess]), <br><br> where: <ul> <li><i>values</i> - an array or reference to cells that contain values. The array must contain at least one positive value and one negative value;</li> <li><i>guess</i> - optional, an estimate for expected IRR, .1 (=10%) by default.</li> </ul></td>
            <td>Возвращает внутреннюю норму доходности (ВНД) для ряда денежных потоков, возникающих через равные промежутки времени.</td>
        </tr>
        <tr>
            <td><b>ISPMT</b></td>
            <td>=ISPMT(rate, per, nper, pv), <br><br> where: <ul> <li><i>rate</i> - the interest rate for the investment. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>per</i> - the period for which you want to find the interest and must be in the range between 1 and nper;</li> <li><i>nper</i> - the total number of payment periods for the investment. For monthly payments, <i>nper</i>=nper*12;</li> <li><i>pv</i> - the present value of the investment. For a loan, pv is the loan amount.</li> </ul></td>
            <td>Вычисляет сумму выплаченных (или полученных) процентов за указанный период займа (или инвестиции) с равными выплатами основного долга.</td>
        </tr>
        <tr>
            <td><b>LARGE</b><br>added in v4.3</td>
            <td>=LARGE(array, k), <br><br> where: <ul> <li><i>array</i> - the array or range of data for which you want to determine the k-th largest value;</li> <li><i>k</i> - the position (from the largest) in the array or cell range of data to return.</li> </ul></td>
            <td>Возвращает k-е наибольшее значение в массиве.</td>
        </tr>
        <tr>
            <td><b>MEDIAN</b><br>added in v4.3</td>
            <td>=MEDIAN(number1, [number2], ...), <br><br> where: <ul> <li><i>number1, number2,...</i> - from 1 to 255 numbers for which you want to calculate the median;</li> </ul></td>
            <td>Возвращает медиану заданных чисел.</td>
        </tr>
        <tr>
            <td><b>NOMINAL</b></td>
            <td>=NOMINAL(effect_rate, npery), <br><br><i>effect_rate</i> must be >= 0, <i>npery</i> must be > 1. </td>
            <td>Возвращает номинальную годовую процентную ставку на основе эффективной ставки и указанного количества периодов начисления сложных процентов в год.</td>
        </tr>
        <tr>
            <td><b>NPER</b></td>
            <td>=NPER(rate,pmt,pv,[fv],[type]), <br><br>where: <ul> <li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>pmt</i> - the payment made each period;</li> <li><i>pv</i> - the present value, or the lump-sum amount that a series of future payments is worth right now;</li> <li><i>fv</i> - optional, the future value, 0 by default;</li> <li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li> </ul></td>
            <td>Возвращает количество периодов для инвестиции с равными периодическими платежами и постоянной процентной ставкой.<br></td>
        </tr>
        <tr>
            <td><b>NPV</b></td>
            <td>=NPV(rate,value1,[value2],...), <br><br> where: <ul> <li><i>rate</i> - the rate of discount over one year;</li> <li><i>value1, value2,...</i> - from 1 to 254 values representing cash flows (future payments and income).<br>Empty cells, logical values, text, or error values are ignored.</li> </ul></td>
            <td>Вычисляет чистую приведённую стоимость инвестиции, используя ставку дисконтирования, ряд будущих платежей (отрицательные значения) и доходов (положительные значения).</td>
        </tr>
        <tr>
            <td><b>OCT2BIN</b><br>added in v4.3</td>
            <td>=OCT2BIN(number), <br><br> where: <ul> <li><i>number</i> - the octal number you want to convert. It can't contain more than 10 characters;</li></ul></td>
            <td>Преобразует восьмеричное число в двоичное.</td>
        </tr>
        <tr>
            <td><b>OCT2DEC</b><br>added in v4.3</td>
            <td>=OCT2DEC(number), <br><br> where: <ul> <li><i>number</i> - the octal number you want to convert. Number may not contain more than 10 octal characters (30 bits)</li> </ul></td>
            <td>Преобразует восьмеричное число в десятичное.</td>
        </tr>
        <tr>
            <td><b>OCT2HEX</b><br>added in v4.3</td>
            <td>=OCT2HEX(number), <br><br> where: <ul> <li><i>number</i> - the octal number you want to convert. Number may not contain more than 10 octal characters (30 bits)</li> </ul></td>
            <td>Преобразует восьмеричное число в шестнадцатеричное.</td>
        </tr>
        <tr>
            <td><b>PDURATION</b></td>
            <td>=PDURATION(rate, pv, fv), <br><br>where: <ul> <li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>pv</i> - the present value of the investment;</li> <li><i>fv</i> - the desired future value of the investment.</li> </ul><br> All arguments must be positive values.</td>
            <td>Возвращает количество периодов, необходимых инвестиции для достижения заданной стоимости.<br></td>
        </tr>
        <tr>
            <td><b>PERCENTILE</b><br>added in v4.3</td>
            <td>=PERCENTILE(array, k), <br><br> where: <ul> <li><i>array</i> - an array of data values;</li> <li><i>k</i> - the percentile value between 0 and 1, inclusive.</li> </ul></td>
            <td>Возвращает k-й процентиль значений в диапазоне.</td>
        </tr>
        <tr>
            <td><b>PERCENTILE.EXC</b><br>added in v4.3</td>
            <td>=PERCENTILE.EXC(array, k), <br><br> where: <ul> <li><i>array</i> - an array of data values;</li> <li><i>k</i> - the percentile value between 0 and 1, exclusive.</li> </ul></td>
            <td>Возвращает k-й процентиль значений в диапазоне.</td>
        </tr>
        <tr>
            <td><b>PERCENTILE.INC</b><br>added in v4.3</td>
            <td>=PERCENTILE.INC(array, k), <br><br> where: <ul> <li><i>array</i> - an array of data values;</li> <li><i>k</i> - the percentile value between 0 and 1, inclusive.</li> </ul></td>
            <td>Возвращает k-й процентиль значений в диапазоне.</td>
        </tr>
        <tr>
            <td><b>PERMUT</b><br>added in v4.3</td>
            <td>=PERMUT(number, number_chosen), <br><br> where: <ul> <li><i>number</i> - the total number of items;</li> <li><i>number_chosen</i> - the number of items in each combination.</li> </ul></td>
            <td>Возвращает количество перестановок для заданного числа элементов.</td>
        </tr>
        <tr>
            <td><b>PMT</b></td>
            <td>=PMT(rate, nper, pv, [fv], [type]), <br><br> where: <ul> <li><i>rate</i> - the interest rate for the loan. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>nper</i> - the total number of months of payments for the loan. For monthly payments, <i>nper</i>=nper*12;</li> <li><i>pv</i> - the present value (or the current total amount of loan);</li> <li><i>fv</i> - optional, the future value, 0 by default;</li> <li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li> </ul></td>
            <td>Вычисляет ежемесячный платёж по займу с постоянными выплатами и постоянной процентной ставкой.</td>
        </tr>
        <tr>
            <td><b>PPMT</b></td>
            <td>=PPMT(rate, per, nper, pv, [fv], [type]), <br><br>where: <ul><li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>per</i> - the period for which you want to find the interest and must be in the range between 1 and nper;</li> <li><i>nper</i> - the total number of payment years in an annuity. For monthly payments, <i>nper</i>=nper*12;</li> <li><i>pv</i> - the present value - the total amount that a series of future payments is worth now;</li> <li><i>fv</i> - the desired future value or a cash balance.</li> <li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li> </ul></td>
            <td>Возвращает выплату по основному долгу за указанный период для инвестиции с равными периодическими платежами и постоянной процентной ставкой. <br></td>
        </tr>
        <tr>
            <td><b>PV</b></td>
            <td>=PV(rate, nper, pmt, [fv], [type]), <br><br>where: <ul> <li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>nper</i> - the total number of payment years in an annuity. For monthly payments, <i>nper</i>=nper*12;</li> <li><i>pmt</i> - the payment made each period. If <i>pmt</i> is omitted, you must include the <i>fv</i> argument;</li> <li><i>fv</i> - optional, the desired future value or a cash balance.</li> <li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li> </ul></td>
            <td>Возвращает текущую стоимость займа или инвестиции на основе постоянной процентной ставки.<br></td>
        </tr>
        <tr>
            <td><b>QUARTILE</b><br>added in v4.3</td>
            <td>=QUARTILE(array, quart), <br><br> where: <ul> <li><i>array</i> - the array or cell range of numeric values;</li> <li><i>quart</i> - indicates which value to return (<a href="https://support.microsoft.com/en-us/office/quartile-function-93cf8f62-60cd-4fdb-8a92-8451041e1a2a">0-4</a>).</li> </ul></td>
            <td>Возвращает квартиль набора данных.</td>
        </tr>
        <tr>
            <td><b>QUARTILE.EXC</b><br>added in v4.3</td>
            <td>=QUARTILE(array, quart), <br><br> where: <ul> <li><i>array</i> - the array or cell range of numeric values;</li> <li><i>quart</i> - indicates which value to return (1-3).</li> </ul></td>
            <td>Возвращает квартиль набора данных на основе значений процентиля от 0 до 1 (не включая границы).</td>
        </tr>
        <tr>
            <td><b>QUARTILE.INC</b><br>added in v4.3</td>
            <td>=QUARTILE.INC(array, quart), <br><br> where: <ul> <li><i>array</i> - the array or cell range of numeric values;</li> <li><i>quart</i> - indicates which value to return (0-4).</li> </ul></td>
            <td>Возвращает квартиль набора данных на основе значений процентиля от 0 до 1 (включая границы).</td>
        </tr>
        <tr>
            <td><b>SIGN</b><br>added in v4.3</td>
            <td>=SIGN(number), <br><br> where: <ul> <li><i>number</i> - any real number</li> </ul></td>
            <td>Определяет знак числа. Возвращает 1, если число положительное, 0 (ноль), если число равно 0, и -1, если число отрицательное.</td>
        </tr>
        <tr>
            <td><b>SMALL</b><br>added in v4.3</td>
            <td>=SMALL(array, k), <br><br> where: <ul> <li><i>array</i> - an array or range of numeric values;</li> <li><i>k</i> - the position (from 1 - the smallest value) in the data set.</li> </ul></td>
            <td>Возвращает k-е наименьшее значение по его позиции в наборе данных.</td>
        </tr>
        <tr>
            <td><b>STEYX</b><br>added in v4.3</td>
            <td>=STEYX(known_y's, known_x's), <br><br> where: <ul> <li><i>known_y's</i> - an array or range of dependent data points;</li> <li><i>known_x's</i> - an array or range of independent data points.</li> </ul><br>Text, logical values, or empty cells are ignored. Zero values are included.</td>
            <td>Возвращает стандартную ошибку предсказанного значения y для каждого x в регрессии.</td>
        </tr>
        <tr>
            <td><b>SYD</b><br>added in v4.3</td>
            <td>=SYD(cost, salvage, life, per), <br><br> where: <ul> <li><i>cost</i> - the initial cost of the asset;</li> <li><i>salvage</i> - the asset value at the end of the depreciation;</li> <li><i>life</i> - the number of periods over which the asset is depreciated;</li> <li><i>per</i> - the period and must use the same units as life.</li> </ul></td>
            <td>Возвращает амортизацию актива за указанный период методом суммы чисел лет срока службы.</td>
        </tr>
        <tr>
            <td><b>TBILLPRICE</b><br>added in v4.3</td>
            <td>=TBILLPRICE(settlement, maturity, discount), <br><br> where: <ul> <li><i>settlement</i> - the settlement date of the Treasury bill;</li> <li><i>maturity</i> - the maturity date of the Treasury bill;</li> <li><i>discount</i> - the Treasury bill's percentage discount rate.</li> </ul></td>
            <td>Возвращает цену казначейского векселя на $100 номинальной стоимости.</td>
        </tr>
        <tr>
            <td><b>TBILLYIELD</b><br>added in v4.3</td>
            <td>=TBILLYIELD(settlement, maturity, pr), <br><br> where: <ul> <li><i>settlement</i> - the settlement date of the Treasury bill;</li> <li><i>maturity</i> - the maturity date of the Treasury bill;</li> <li><i>pr</i> - the Treasury bill's price per $100 face value.</li> </ul></td>
            <td>Возвращает доходность казначейского векселя.</td>
        </tr>
        <tr>
            <td><b>WEIBULL</b><br>added in v4.3</td>
            <td>=WEIBULL(x, alpha, beta, cumulative), <br><br> where: <ul> <li><i>x</i> - the value at which the function must be calculated (must be ≥ 0);</li> <li><i>alpha</i> - the alpha parameter to the distribution (must be > 0);</li> <li><i>beta</i> - the beta parameter to the distribution (must be > 0);</li> <li><i>cumulative</i> - the logical (true/false) argument which defines the type of distribution to be used. If True - Weibull cumulative distribution function, if False - Weibull probability density function </li> </ul></td>
            <td>Возвращает распределение Вейбулла.</td>
        </tr>
        <tr>
            <td><b>WEIBULL.DIST</b><br>added in v4.3</td>
            <td>=WEIBULL(x, alpha, beta, cumulative), <br><br> where: <ul> <li><i>x</i> - the value at which the function must be calculated (must be ≥ 0);</li> <li><i>alpha</i> - the alpha parameter to the distribution (must be > 0);</li> <li><i>beta</i> - the beta parameter to the distribution (must be > 0);</li> <li><i>cumulative</i> - the logical (true/false) argument which defines the type of distribution to be used. If True - Weibull cumulative distribution function, if False - Weibull probability density function </li> </ul></td>
            <td>Возвращает распределение Вейбулла.</td>
        </tr>
    </tbody>
</table>

Ознакомьтесь с примером в нашем [инструменте для сниппетов](https://snippet.dhtmlx.com/wux2b35b).
### Информационные функции {#information-functions}

<table>
    <tbody>
        <tr>
            <td><b>Функция</b></td>
            <td><b>Формула</b></td>
            <td><b>Описание</b></td>
        </tr>
        <tr>
            <td><b>ISBINARY</b></td>
            <td>=ISBINARY(value)</td>
            <td>Возвращает TRUE, если значение является двоичным; в противном случае возвращает FALSE.</td>
        </tr>
        <tr>
            <td><b>ISBLANK</b></td>
            <td>=ISBLANK(A1)</td>
            <td>Возвращает TRUE, если ячейка пуста; в противном случае возвращает FALSE.</td>
        </tr>
        <tr>
            <td><b>ISEVEN</b></td>
            <td>=ISEVEN(number)</td>
            <td>Возвращает TRUE, если число чётное, или FALSE, если число нечётное. <br>Работает с целыми числами.</td>
        </tr>
        <tr>
            <td><b>ISNONTEXT</b></td>
            <td>=ISNONTEXT(value)</td>
            <td>Возвращает TRUE, если ячейка содержит любое значение, кроме текста; в противном случае возвращает FALSE.</td>
        </tr>
        <tr>
            <td><b>ISNUMBER</b></td>
            <td>=ISNUMBER(value)</td>
            <td>Возвращает TRUE, если ячейка содержит число; в противном случае возвращает FALSE.</td>
        </tr>
        <tr>
            <td><b>ISODD</b></td>
            <td>=ISODD(number)</td>
            <td>Возвращает TRUE, если число нечётное, или FALSE, если число чётное. <br>Работает с целыми числами.</td>
        </tr>
        <tr>
            <td><b>ISTEXT</b></td>
            <td>=ISTEXT(value)</td>
            <td>Возвращает TRUE, если значение является текстом; в противном случае возвращает FALSE.</td>
        </tr>
        <tr>
            <td><b>N</b></td>
            <td>=N(value)</td>
            <td>Возвращает значение, преобразованное в число.</td>
        </tr>
    </tbody>
</table>
<br>

Проверьте пример в нашем [инструменте сниппетов](https://snippet.dhtmlx.com/wux2b35b).

### Функции поиска {#lookup-functions}

<table>
    <tbody>
        <tr>
            <td><b>Функция</b></td>
            <td><b>Формула</b></td>
            <td><b>Описание</b></td>
        </tr>
        <tr>
            <td><b>HLOOKUP</b><br>добавлено в v4.3</td>
            <td>=HLOOKUP(lookup_value, table_array, row_index, [range_lookup]), <br><br> где: <ul> <li><i>lookup_value</i> - искомое значение;</li> <li><i>table_array</i> - таблица, из которой извлекается значение;</li> <li><i>column_index_num</i> - номер строки в таблице, из которой извлекается значение;</li> <li><i>range_lookup</i> - необязательный (1 по умолчанию):<br>0 - точное совпадение, 1 - приблизительное совпадение</li> </ul></td>
            <td>Выполняет поиск значения в горизонтальной таблице</td>
        </tr>
        <tr>
            <td><b>INDEX</b><br>добавлено в v4.3</td>
            <td>=INDEX(array, row_num, [column_num]), <br><br> где: <ul> <li><i>array</i> - диапазон ячеек или массив-константа;</li> <li><i>row_num</i> - позиция строки в ссылке или массиве;</li> <li><i>column_num</i> - необязательный, позиция столбца в ссылке или массиве.</li> </ul></td>
            <td>Возвращает значение по указанной позиции в диапазоне или массиве.</td>
        </tr>
        <tr>
            <td><b>LOOKUP</b><br>добавлено в v4.3</td>
            <td>=LOOKUP(lookup_value, lookup_vector, [result_vector]), <br><br> где: <ul> <li><i>lookup_value</i> - искомое значение;</li> <li><i>lookup_vector</i> - диапазон из одной строки или одного столбца для поиска;</li> <li><i>result_vector</i> - необязательный, диапазон результатов из одной строки или одного столбца.</li> </ul></td>
            <td>Выполняет поиск значения в диапазоне из одного столбца или одной строки и возвращает значение из той же позиции другого диапазона из одного столбца или одной строки.</td>
        </tr>
        <tr>
            <td><b>MATCH</b><br>добавлено в v4.3</td>
            <td>=MATCH(lookup_value, lookup_array, [match_type]), <br><br> где: <ul> <li><i>lookup_value</i> - значение, которое нужно найти в <i>lookup_array</i>;</li> <li><i>lookup_array</i> - диапазон ячеек;</li> <li><i>match_type</i> - необязательный (1 по умолчанию):<br>1 - находит наибольшее значение, меньшее или равное <i>lookup_value</i><br>0 - находит значение, точно равное <i>lookup_value</i><br>-1 - находит наименьшее значение, большее или равное <i>lookup_value</i></li> </ul></td>
            <td>Ищет указанный элемент в диапазоне ячеек и возвращает относительную позицию этого элемента в диапазоне.</td>
        </tr>
        <tr>
            <td><b>VLOOKUP</b><br>добавлено в v4.3</td>
            <td>=VLOOKUP(lookup_value, table_array, column_index_num, [range_lookup]), <br><br> где: <ul> <li><i>lookup_value</i> - искомое значение в первом столбце таблицы;</li> <li><i>table_array</i> - таблица, из которой извлекается значение;</li> <li><i>column_index_num</i> - номер столбца в таблице, из которого извлекается значение;</li> <li><i>range_lookup</i> - необязательный (1 по умолчанию):<br>0 - точное совпадение, 1 - приблизительное совпадение</li> </ul></td>
            <td>Выполняет поиск значения в вертикальной таблице по совпадению в первом столбце</td>
        </tr>
        <tr>
            <td><b>XLOOKUP</b><br>добавлено в v4.3</td>
            <td>=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode]), <br><br> где: <ul> <li><i>lookup_value</i> - искомое значение;</li> <li><i>lookup_array</i> - массив или диапазон для поиска;</li> <li><i>return_array</i> - массив или диапазон для возврата значений;</li> <li><i>if_not_found</i> - необязательный, если совпадение не найдено, возвращает указанный текст [if_not_found];</li> <li><i>match_mode</i> - необязательный (0 по умолчанию):<br>0 - точное совпадение<br>-1 - точное совпадение; если не найдено, возвращает следующий меньший элемент<br>1 - точное совпадение; если не найдено, возвращает следующий больший элемент</li> </ul></td>
            <td>Выполняет поиск в диапазоне или массиве и возвращает элемент, соответствующий первому найденному совпадению. Если совпадение не найдено, XLOOKUP может вернуть ближайшее (приблизительное) совпадение.</td>
        </tr>
        <tr>
            <td><b>XMATCH</b><br>добавлено в v4.3</td>
            <td>=XMATCH(lookup_value, lookup_array, [match_mode]), <br><br> где: <ul> <li><i>lookup_value</i> - значение, которое нужно найти в <i>lookup_array</i>;</li> <li><i>lookup_array</i> - диапазон ячеек;</li> <li><i>match_mode</i> - необязательный, 0 - точное совпадение (по умолчанию), -1 - точное совпадение или следующее меньшее, 1 - точное совпадение или следующее большее</li> </ul></td>
            <td>Выполняет поиск и возвращает позицию в вертикальных или горизонтальных диапазонах.</td>
        </tr>
    </tbody>
</table>
<br>

### Математические функции {#math-functions}

<table> 
    <tbody>
        <tr>
            <td><b>ABS</b></td>
            <td>Возвращает абсолютное значение числа. Абсолютное значение числа всегда положительно.</td>
        </tr>
        <tr>
            <td><b>ACOS</b></td>
            <td>Возвращает арккосинус числа. Арккосинус — это угол, косинус которого равен <i>number</i>. Число должно быть в диапазоне от -1 до 1 включительно. Возвращаемый угол задаётся в радианах в диапазоне от 0 (нуля) до pi.</td>
        </tr>
        <tr>
            <td><b>ACOSH</b></td>
            <td>Возвращает обратный гиперболический косинус числа. Число должно быть больше или равно 1.</td>
        </tr>
        <tr>
            <td><b>ACOT</b></td>
            <td>Возвращает главное значение арккотангенса числа. Возвращаемый угол задаётся в радианах в диапазоне от 0 (нуля) до pi.</td>
        </tr>
        <tr>
            <td><b>ACOTH</b></td>
            <td>Возвращает обратный гиперболический котангенс числа. Абсолютное значение числа должно быть больше 1.</td>
        </tr>
        <tr>
            <td><b>ADD</b></td>
            <td>Возвращает сумму двух значений. <br>Пустые ячейки, логические значения TRUE и текст игнорируются.</td>
        </tr>
        <tr>
            <td><b>ARABIC</b></td>
            <td>Преобразует римское число в арабское.</td>
        </tr>
        <tr>
            <td><b>ASIN</b></td>
            <td>Возвращает арксинус числа. Арксинус — это угол, синус которого равен <i>number</i>. Число должно быть в диапазоне от -1 до 1 включительно. Возвращаемый угол задаётся в радианах в диапазоне от -pi/2 до pi/2.</td>
        </tr>
        <tr>
            <td><b>ASINH</b></td>
            <td>Возвращает обратный гиперболический синус числа. Обратный гиперболический синус — это значение, гиперболический синус которого равен <i>number</i>. Работает с вещественными числами.</td>
        </tr>
        <tr>
            <td><b>ATAN</b></td>
            <td>Возвращает арктангенс числа. Арктангенс — это угол, тангенс которого равен <i>number</i>. Возвращаемый угол задаётся в радианах в диапазоне от -pi/2 до pi/2. Работает с тангенсом искомого угла.</td>
        </tr>
        <tr>
            <td><b>ATAN2</b></td>
            <td>Возвращает арктангенс для координат (x,y). Арктангенс возвращается в радианах в диапазоне от -pi до pi, исключая -pi.</td>
        </tr>
        <tr>
            <td><b>ATANH</b></td>
            <td>Возвращает обратный гиперболический тангенс числа. Число должно быть в диапазоне от -1 до 1 (исключая -1 и 1). Работает с вещественными числами.</td>
        </tr>
        <tr>
            <td><b>AVEDEV</b><br>added in v4.3</td>
            <td>Возвращает среднее абсолютных отклонений точек данных от их среднего значения.<br> Пустые ячейки, логические значения, текст и значения ошибок в массиве или ссылке игнорируются. Ячейки с нулевым значением учитываются.</td>
        </tr>
        <tr>
            <td><b>AVERAGE</b></td>
            <td>Вычисляет среднее арифметическое группы чисел. <br>Логические значения, пустые ячейки и ячейки, содержащие текст в массиве или ссылке, игнорируются. <br>Однако ячейки с нулевым значением учитываются.</td>
        </tr>
        <tr>
            <td><b>AVERAGEA</b><br>added in v4.3</td>
            <td>Вычисляет среднее арифметическое значений из списка аргументов. <br>Аргументами могут быть: числа; имена, массивы или ссылки, содержащие числа; текстовые представления чисел; логические значения, такие как TRUE и FALSE, в ссылке.<br>Пустые ячейки и текстовые значения в массиве или ссылке игнорируются.</td>
        </tr>
        <tr>
            <td><b>AVERAGEIF</b><br>added in v6.0</td>
            <td>Возвращает среднее арифметическое всех ячеек в диапазоне, удовлетворяющих заданному условию. <br>Принимает два обязательных аргумента (диапазон для оценки и критерий) и один необязательный аргумент (диапазон ячеек для усреднения, если он отличается от оцениваемого диапазона).</td>
        </tr>
        <tr>
            <td><b>AVERAGEIFS</b><br>added in v6.0</td>
            <td>Возвращает среднее арифметическое всех ячеек, удовлетворяющих нескольким условиям. <br>Принимает обязательный диапазон усреднения, за которым следует одна или несколько пар аргументов "диапазон условия" и "критерий".</td>
        </tr>
        <tr>
            <td><b>BASE</b></td>
            <td>Преобразует число в заданное основание (систему счисления). <br>Число должно быть целым, больше или равным 0 и меньше 2^53.<br>Основание системы счисления — это основание, в которое нужно преобразовать число. Оно должно быть целым числом от 2 до 36 включительно.</td>
        </tr>
        <tr>
            <td><b>BITAND</b><br>added in v4.3</td>
            <td>Возвращает побитовое "И" двух чисел.<br>Число должно быть целым, больше или равным 0 и меньше (2^48)-1.</td>
        </tr>
        <tr>
            <td><b>CEILING</b></td>
            <td>Возвращает число, округлённое вверх до ближайшего целого или до ближайшего кратного указанному значению точности.</td>
        </tr>
        <tr>
            <td><b>COMBIN</b></td>
            <td>Возвращает количество сочетаний для двух заданных целых чисел: количества элементов (<i>number</i>) и количества элементов в каждом сочетании (<i>number_chosen</i>): <ul><li><i>number</i> должно быть больше или равно нулю; также оно должно быть больше или равно number_chosen;</li><li><i>number_chosen</i> должно быть больше или равно нулю.</li></ul></td>
        </tr>
        <tr>
            <td><b>COMBINA</b></td>
            <td>Возвращает количество сочетаний для двух заданных целых чисел с учётом повторений. Числами являются: количество элементов (<i>number</i>) и количество элементов в каждом сочетании (<i>number_chosen</i>): <ul><li><i>number</i> должно быть больше или равно нулю; также оно должно быть больше или равно number_chosen;</li><li><i>number_chosen</i> должно быть больше или равно нулю.</li></ul></td>
        </tr>
        <tr>
            <td><b>COS</b></td>
            <td>Возвращает косинус угла, заданного в радианах.</td>
        </tr>
        <tr>
            <td><b>COSH</b></td>
            <td>Возвращает гиперболический косинус вещественного числа.</td>
        </tr>
        <tr>
            <td><b>CSC</b></td>
            <td>Возвращает косеканс угла, заданного в радианах.</td>
        </tr>
        <tr>
            <td><b>CSCH</b></td>
            <td>Возвращает гиперболический косеканс угла, заданного в радианах.</td>
        </tr>
        <tr>
            <td><b>COT</b></td>
            <td>Возвращает котангенс угла, заданного в радианах.</td>
        </tr>
        <tr>
            <td><b>COTH</b></td>
            <td>Возвращает гиперболический котангенс гиперболического угла.</td>
        </tr>
        <tr>
            <td><b>COUNT</b></td>
            <td>Подсчитывает количество ячеек, содержащих числа, а также числа в списке аргументов.<br> Пустые ячейки, логические значения, текст и значения ошибок в массиве или ссылке не учитываются.</td>
        </tr>
        <tr>
            <td><b>COUNTA</b></td>
            <td>Подсчитывает количество ячеек, содержащих числа, текст, логические значения, значения ошибок и пустые строки (""); ячейки с нулевым значением исключаются. <br>Функция не учитывает пустые ячейки.</td>
        </tr>
        <tr>
            <td><b>COUNTBLANK</b></td>
            <td>Возвращает количество пустых ячеек в указанном диапазоне. <br>Ячейки с нулевым значением не учитываются.</td>
        </tr>
        <tr>
            <td><b>COUNTIF</b><br>added in v6.0</td>
            <td>Подсчитывает количество ячеек в диапазоне, удовлетворяющих заданному условию. <br>Принимает два аргумента: диапазон ячеек для оценки и критерий, определяющий, какие ячейки следует подсчитывать.</td>
        </tr>
        <tr>
            <td><b>COUNTIFS</b><br>added in v6.0</td>
            <td>Подсчитывает количество ячеек, удовлетворяющих нескольким условиям. <br>Принимает одну или несколько пар аргументов "диапазон" и "критерий"; учитываются только ячейки, удовлетворяющие всем условиям.</td>
        </tr>
        <tr>
            <td><b>DECIMAL</b></td>
            <td>Преобразует текстовое представление числа в заданном основании (системе счисления) в десятичное число.<br>Основание системы счисления должно быть целым числом от 2 до 36 включительно.</td>
        </tr>
        <tr>
            <td><b>DEGREES</b></td>
            <td>Преобразует радианы в градусы.</td>
        </tr>
        <tr>
            <td><b>DIVIDE</b></td>
            <td>Возвращает результат деления одного числа на другое.</td>
        </tr>
        <tr>
            <td><b>EQ</b></td>
            <td>Возвращает TRUE, если первый аргумент равен второму; иначе FALSE.</td>
        </tr>
        <tr>
            <td><b>EVEN</b></td>
            <td>Возвращает число, округлённое вверх до ближайшего чётного целого.</td>
        </tr>
        <tr>
            <td><b>FACT</b></td>
            <td>Возвращает факториал числа. Число должно быть от 1 до n. Если число не является целым, оно усекается.</td>
        </tr>
        <tr>
            <td><b>FACTDOUBLE</b></td>
            <td>Возвращает двойной факториал числа. Число должно быть от 1 до n. Если число не является целым, оно усекается.</td>
        </tr>
        <tr>
            <td><b>FLOOR</b></td>
            <td>Округляет число вниз, к нулю, до ближайшего кратного указанному значению точности. Значение точности должно быть от 1 до n.<br>Если знак числа положительный, значение округляется вниз в сторону нуля. Если знак числа отрицательный, значение округляется вниз в сторону от нуля.</td>
        </tr>
        <tr>
            <td><b>GCD</b></td>
            <td>Возвращает наибольший общий делитель двух или более целых чисел. Функция принимает от 1 до 255 числовых значений, которые должны быть целыми числами. Если какое-либо значение не является целым, оно усекается.</td>
        </tr>
        <tr>
            <td><b>GT</b></td>
            <td>Возвращает TRUE, если первый аргумент больше второго; иначе FALSE.</td>
        </tr>
        <tr>
            <td><b>GTE</b></td>
            <td>Возвращает TRUE, если первый аргумент больше второго или равен ему; иначе FALSE. </td>
        </tr>
        <tr>
            <td><b>INT</b></td>
            <td>Возвращает число, округлённое вниз до ближайшего целого.</td>
        </tr>
        <tr>
            <td><b>LN</b></td>
            <td>Возвращает натуральный логарифм положительного вещественного числа.</td>
        </tr>
        <tr>
            <td><b>LOG</b></td>
            <td>Возвращает логарифм положительного вещественного числа по указанному основанию. Если основание не указано, предполагается значение 10.</td>
        </tr>
        <tr>
            <td><b>LOG10</b></td>
            <td>Возвращает десятичный логарифм положительного вещественного числа.</td>
        </tr>
        <tr>
            <td><b>LT</b></td>
            <td>Возвращает TRUE, если первый аргумент меньше второго; иначе FALSE.</td>
        </tr>
        <tr>
            <td><b>LTE</b></td>
            <td>Возвращает TRUE, если первый аргумент меньше второго или равен ему; иначе FALSE.</td>
        </tr>
        <tr>
            <td><b>MAX</b></td>
            <td>Возвращает наибольшее значение в наборе значений. <br>Функция игнорирует пустые ячейки, логические значения TRUE и FALSE, а также текстовые значения. Если аргументы не содержат чисел, MAX возвращает 0 (нуль).</td>
        </tr>
        <tr>
            <td><b>MAXIFS</b><br>added in v6.0</td>
            <td>Возвращает максимальное значение среди ячеек, заданных набором условий. <br>Принимает обязательный диапазон максимума, за которым следует одна или несколько пар аргументов "диапазон условия" и "критерий".</td>
        </tr>
        <tr>
            <td><b>MIN</b></td>
            <td>Возвращает наименьшее число в наборе значений. <br>Пустые ячейки, логические значения и текст в массиве или ссылке игнорируются. Если аргументы не содержат чисел, MIN возвращает 0 (нуль).</td>
        </tr>
        <tr>
            <td><b>MINIFS</b><br>added in v6.0</td>
            <td>Возвращает минимальное значение среди ячеек, заданных набором условий. <br>Принимает обязательный диапазон минимума, за которым следует одна или несколько пар аргументов "диапазон условия" и "критерий".</td>
        </tr>
        <tr>
            <td><b>MINUS</b></td>
            <td>Возвращает разность двух чисел.</td>
        </tr>
        <tr>
            <td><b>MOD</b></td>
            <td>Возвращает остаток от деления числа на делитель. Результат имеет тот же знак, что и делитель.</td>
        </tr>
        <tr>
            <td><b>MROUND</b></td>
            <td>Возвращает число, округлённое до ближайшего кратного указанному значению точности. Значения <i>number</i> и <i>multiple</i> должны иметь одинаковый знак.</td>
        </tr>
        <tr>
            <td><b>MULTINOMIAL</b></td>
            <td>Возвращает отношение факториала суммы значений к произведению факториалов. Функция принимает от 1 до 255 числовых значений, которые должны быть больше или равны 0.</td>
        </tr>
        <tr>
            <td><b>MULTIPLY</b></td>
            <td>Возвращает результат умножения двух чисел.</td>
        </tr>
        <tr>
            <td><b>NE</b></td>
            <td>Возвращает TRUE, если первый аргумент не равен второму; иначе FALSE.</td>
        </tr>
        <tr>
            <td><b>ODD</b></td>
            <td>Возвращает число, округлённое вверх до ближайшего нечётного целого.</td>
        </tr>
        <tr>
            <td><b>PI</b></td>
            <td>Возвращает число 3.14159265358979 (математическую константу пи с точностью до 15 знаков).</td>
        </tr>
        <tr>
            <td><b>POW</b></td>
            <td>Возвращает результат возведения числа в заданную степень. <br>Работает с вещественными числами.</td>
        </tr>
        <tr>
            <td><b>POWER</b></td>
            <td>Возвращает результат возведения числа в заданную степень. <br>Работает с вещественными числами.</td>
        </tr>
        <tr>
            <td><b>PRODUCT</b></td>
            <td>Перемножает все числа, переданные в качестве аргументов, и возвращает произведение.<br>
Перемножаются только числа в массиве или ссылке. Пустые ячейки, логические значения и текст в массиве или ссылке игнорируются.</td>
        </tr>
        <tr>
            <td><b>QUOTIENT</b></td>
            <td>Возвращает результат целочисленного деления без остатка. <br>Работает с вещественными числами.</td>
        </tr>
        <tr>
            <td><b>RADIANS</b></td>
            <td>Преобразует градусы в радианы.</td>
        </tr>
        <tr>
            <td><b>RAND</b></td>
            <td>Возвращает случайное число, большее или равное 0 и меньшее 1. <br>Возвращает новое случайное число при каждом пересчёте таблицы. </td>
        </tr>
        <tr>
            <td><b>RANDBETWEEN</b></td>
            <td>Возвращает случайное число между двумя указанными числами.<br>Возвращает новое случайное число при каждом пересчёте таблицы. </td>
        </tr>
        <tr>
            <td><b>ROMAN</b></td>
            <td>Преобразует арабское число в римское.</td>
        </tr>
        <tr>
            <td><b>ROUND</b></td>
            <td>Возвращает число, округлённое до указанного количества цифр.</td>
        </tr>
        <tr>
            <td><b>ROUNDDOWN</b></td>
            <td>Возвращает число, округлённое вниз до указанного количества цифр.</td>
        </tr>
        <tr>
            <td><b>ROUNDUP</b></td>
            <td>Возвращает число, округлённое вверх до указанного количества цифр.</td>
        </tr>
        <tr>
            <td><b>SEC</b></td>
            <td>Возвращает секанс угла, заданного в радианах.<br>Работает с числовыми значениями.</td>
        </tr>
        <tr>
            <td><b>SECH</b></td>
            <td>Возвращает гиперболический секанс угла, заданного в радианах.<br>Работает с числовыми значениями.</td>
        </tr>
        <tr>
            <td><b>SIN</b></td>
            <td>Возвращает синус угла, заданного в радианах.</td>
        </tr>
        <tr>
            <td><b>SINH</b></td>
            <td>Возвращает гиперболический синус вещественного числа.</td>
        </tr>
        <tr>
            <td><b>SQRT</b></td>
            <td>Возвращает положительный квадратный корень числа.</td>
        </tr>
        <tr>
            <td><b>SQRTPI</b></td>
            <td>Возвращает квадратный корень числа, умноженного на pi. Число должно быть больше или равно 0.</td>
        </tr>
        <tr>
            <td><b>STDEV</b></td>
            <td>Вычисляет стандартное отклонение на основе данных, представляющих выборку из генеральной совокупности. <br>Стандартное отклонение — это мера разброса значений относительно среднего значения (среднего арифметического).<br>Пустые ячейки, логические значения, текст и значения ошибок в массиве или ссылке игнорируются.</td>
        </tr>
        <tr>
            <td><b>STDEVA</b></td>
            <td>Вычисляет стандартное отклонение на основе выборки. <br>Стандартное отклонение — это мера разброса значений относительно среднего значения (среднего арифметического).<br>Пустые ячейки и текстовые значения в массиве или ссылке игнорируются.</td>
        </tr>
        <tr>
            <td><b>STDEVP</b></td>
            <td>Вычисляет стандартное отклонение на основе всей генеральной совокупности чисел. <br>Стандартное отклонение — это мера разброса значений относительно среднего значения (среднего арифметического).<br>Пустые ячейки, логические значения, текст и значения ошибок в массиве или ссылке игнорируются.</td>
        </tr>
        <tr>
            <td><b>STDEVPA</b></td>
            <td>Вычисляет стандартное отклонение на основе всей генеральной совокупности, переданной в качестве аргументов, включая текст (оценивается как 0) и логические значения (оцениваются как 1 для TRUE и как 0 для FALSE). <br>Стандартное отклонение — это мера разброса значений относительно среднего значения (среднего арифметического).<br>Если аргумент является массивом или ссылкой, используются только значения этого массива или ссылки. Пустые ячейки и текстовые значения в массиве или ссылке игнорируются.<br> Значения ошибок приводят к ошибкам.</td>
        </tr>
        <tr>
            <td><b>STDEV.S</b><br>added in v4.3</td>
            <td>Оценивает стандартное отклонение на основе выборки (логические значения и текст в выборке игнорируются). <br>Стандартное отклонение — это мера разброса значений относительно среднего значения (среднего арифметического).<br>Если аргумент является массивом или ссылкой, используются только значения этого массива или ссылки. Пустые ячейки, логические значения, текст и значения ошибок в массиве или ссылке игнорируются.<br> Значения ошибок приводят к ошибкам.</td>
        </tr>
        <tr>
            <td><b>SUBTOTAL</b></td>
            <td>Возвращает промежуточный итог в списке или базе данных.</td>
        </tr>
        <tr>
            <td><b>SUM</b></td>
            <td>Возвращает сумму переданных значений. <br>Пустые ячейки, логические значения TRUE и текст игнорируются.</td>
        </tr>
        <tr>
            <td><b>SUMIF</b><br>added in v6.0</td>
            <td>Суммирует ячейки в диапазоне, удовлетворяющие заданному условию. <br>Принимает два обязательных аргумента (диапазон для оценки и критерий) и один необязательный аргумент (диапазон ячеек для суммирования, если он отличается от оцениваемого диапазона).</td>
        </tr>
        <tr>
            <td><b>SUMIFS</b><br>added in v6.0</td>
            <td>Суммирует ячейки в диапазоне, удовлетворяющие нескольким условиям. <br>Принимает обязательный диапазон суммирования, за которым следует одна или несколько пар аргументов "диапазон условия" и "критерий"; в сумму включаются только ячейки, удовлетворяющие всем условиям.</td>
        </tr>
        <tr>
            <td><b>SUMPRODUCT</b></td>
            <td>Перемножает диапазоны ячеек или массивы и возвращает сумму произведений. <br>Для получения корректных произведений перемножаются только числа. <br>Пустые ячейки, логические значения и текст игнорируются. <br>Нечисловые элементы массива обрабатываются как нули.</td>
        </tr>
        <tr>
            <td><b>SUMSQ</b></td>
            <td>Возвращает сумму квадратов аргументов. <br>Пустые ячейки, логические значения, текст и значения ошибок в массиве или ссылке игнорируются.</td>
        </tr>
        <tr>
            <td><b>SUMX2MY2</b></td>
            <td>Возвращает сумму разностей квадратов соответствующих значений в двух массивах.<br>Аргументы должны быть числами, именами, массивами или ссылками, содержащими числа.<br>Пустые ячейки, логические значения, текст и значения ошибок в массиве или ссылке игнорируются. Нулевые значения учитываются.</td>
        </tr>
        <tr>
            <td><b>SUMX2PY2</b></td>
            <td>Возвращает сумму сумм квадратов соответствующих значений в двух массивах.<br>Аргументы должны быть числами, именами, массивами или ссылками, содержащими числа.<br>Пустые ячейки, логические значения, текст и значения ошибок в массиве или ссылке игнорируются. Нулевые значения учитываются.</td>
        </tr>
        <tr>
            <td><b>SUMXMY2</b></td>
            <td>Возвращает сумму квадратов разностей соответствующих значений в двух массивах.<br>Аргументы должны быть числами, именами, массивами или ссылками, содержащими числа.<br>Пустые ячейки, логические значения, текст и значения ошибок в массиве или ссылке игнорируются. Нулевые значения учитываются.</td>
        </tr>
        <tr>
            <td><b>TAN</b></td>
            <td>Возвращает тангенс угла, заданного в радианах.</td>
        </tr>
        <tr>
            <td><b>TANH</b></td>
            <td>Возвращает гиперболический тангенс вещественного числа.</td>
        </tr>
        <tr>
            <td><b>TRUNC</b></td>
            <td>Усекает число до целого, отбрасывая дробную часть.</td>
        </tr>
        <tr>
            <td><b>VAR</b></td>
            <td>Возвращает дисперсию на основе выборки.<br>Пустые ячейки, логические значения, текст и значения ошибок в массиве или ссылке игнорируются.</td>
        </tr>
        <tr>
            <td><b>VARA</b></td>
            <td>Возвращает дисперсию на основе выборки из генеральной совокупности, включая текст (оценивается как 0) и логические значения (оцениваются как 1 для TRUE и как 0 для FALSE).<br>Пустые ячейки и текстовые значения в массиве или ссылке игнорируются.</td>
        </tr>
        <tr>
            <td><b>VARP</b></td>
            <td>Возвращает дисперсию генеральной совокупности на основе всех чисел совокупности.<br>Пустые ячейки, логические значения, текст и значения ошибок в массиве или ссылке игнорируются.</td>
        </tr>
        <tr>
            <td><b>VARPA</b></td>
            <td>Возвращает дисперсию генеральной совокупности на основе всей совокупности, включая текст (оценивается как 0) и логические значения (оцениваются как 1 для TRUE и как 0 для FALSE).<br>Пустые ячейки и текстовые значения в массиве или ссылке игнорируются.</td>
        </tr>
        <tr>
            <td><b>VAR.S</b><br>added in v4.3</td>
            <td>Возвращает дисперсию на основе выборки (логические значения и текст в выборке игнорируются).<br>Пустые ячейки, логические значения, текст и значения ошибок в массиве или ссылке игнорируются.</td>
        </tr>
    </tbody>
</table>
<br>

Ознакомьтесь с примером в нашем [инструменте для сниппетов](https://snippet.dhtmlx.com/wux2b35b).
### Функции массивов {#array-functions}

Следующие функции массивов были добавлены в v6.0.

<table>
    <tbody>
        <tr>
            <td><b>Функция</b></td>
            <td><b>Формула</b></td>
            <td><b>Описание</b></td>
        </tr>
        <tr>
            <td><b>CHOOSECOLS</b></td>
            <td>=CHOOSECOLS(array, col_num1, [col_num2], ...)</td>
            <td>Возвращает указанные столбцы из массива или диапазона.</td>
        </tr>
        <tr>
            <td><b>CHOOSEROWS</b></td>
            <td>=CHOOSEROWS(array, row_num1, [row_num2], ...)</td>
            <td>Возвращает указанные строки из массива или диапазона.</td>
        </tr>
        <tr>
            <td><b>DROP</b></td>
            <td>=DROP(array, [rows], [columns])</td>
            <td>Удаляет указанное количество строк или столбцов с начала или конца массива.</td>
        </tr>
        <tr>
            <td><b>EXPAND</b></td>
            <td>=EXPAND(array, [rows], [columns], [pad_with])</td>
            <td>Расширяет или дополняет массив до заданных размеров по строкам и столбцам.</td>
        </tr>
        <tr>
            <td><b>RANDARRAY</b></td>
            <td>=RANDARRAY([rows], [columns], [min], [max], [integer])</td>
            <td>По умолчанию возвращает массив случайных чисел от 0 до 1. Можно задать количество строк и столбцов для заполнения, минимальное и максимальное значения, а также указать, возвращать целые или десятичные числа.</td>
        </tr>
        <tr>
            <td><b>SEQUENCE</b></td>
            <td>=SEQUENCE(rows, [columns], [start], [step])</td>
            <td>Генерирует список последовательных чисел в массиве, например 1, 2, 3, 4.</td>
        </tr>
        <tr>
            <td><b>SORT</b></td>
            <td>=SORT(array, [sort_index], [sort_order], [by_col])</td>
            <td>Сортирует содержимое диапазона или массива. По умолчанию выполняет сортировку по первому столбцу в порядке возрастания.</td>
        </tr>
        <tr>
            <td><b>SORTBY</b></td>
            <td>=SORTBY(array, by_array, [sort_order], ...)</td>
            <td>Сортирует содержимое диапазона или массива на основе значений из соответствующего диапазона или массива.</td>
        </tr>
        <tr>
            <td><b>TAKE</b></td>
            <td>=TAKE(array, [rows], [columns])</td>
            <td>Возвращает указанное количество смежных строк или столбцов с начала или конца массива.</td>
        </tr>
        <tr>
            <td><b>TEXTSPLIT</b></td>
            <td>=TEXTSPLIT(text, col_delimiter, [row_delimiter], [ignore_empty], [match_mode], [pad_with])</td>
            <td>Разбивает текстовую строку на строки и столбцы с использованием указанных разделителей.</td>
        </tr>
        <tr>
            <td><b>TOCOL</b></td>
            <td>=TOCOL(array, [ignore], [scan_by_column])</td>
            <td>Преобразует массив или диапазон в один столбец.</td>
        </tr>
        <tr>
            <td><b>TOROW</b></td>
            <td>=TOROW(array, [ignore], [scan_by_column])</td>
            <td>Преобразует массив или диапазон в одну строку.</td>
        </tr>
        <tr>
            <td><b>UNIQUE</b></td>
            <td>=UNIQUE(array, [by_col], [exactly_once])</td>
            <td>Возвращает список уникальных значений из диапазона или массива.</td>
        </tr>
        <tr>
            <td><b>WRAPCOLS</b></td>
            <td>=WRAPCOLS(vector, wrap_count, [pad_with])</td>
            <td>Преобразует вектор строки или столбца в двумерный массив по столбцам после указанного количества значений.</td>
        </tr>
        <tr>
            <td><b>WRAPROWS</b></td>
            <td>=WRAPROWS(vector, wrap_count, [pad_with])</td>
            <td>Преобразует вектор строки или столбца в двумерный массив по строкам после указанного количества значений.</td>
        </tr>
    </tbody>
</table>
<br>

Ознакомьтесь с примером в нашем [инструменте для сниппетов](https://snippet.dhtmlx.com/wux2b35b).
### Функции регулярных выражений {#regex-functions}

<table>
    <tbody>
        <tr>
            <td><b>Функция</b></td>
            <td><b>Формула</b></td>
            <td><b>Описание</b></td>
        </tr>
        <tr>
            <td><b>REGEXREPLACE</b></td>
            <td>=REGEXREPLACE(text, regular_expression, replacement)</td>
            <td>Заменяет часть текстовой строки другой строкой с использованием регулярных выражений.</td>
        </tr>
        <tr>
            <td><b>REGEXMATCH</b></td>
            <td>=REGEXMATCH(text, regular_expression)</td>
            <td>Возвращает TRUE, если текстовая строка соответствует шаблону регулярного выражения, и FALSE в противном случае.</td>
        </tr>
        <tr>
            <td><b>REGEXEXTRACT</b></td>
            <td>=REGEXEXTRACT(text, regular_expression)</td>
            <td>Возвращает часть строки, соответствующую шаблону регулярного выражения.</td>
        </tr>
    </tbody>
</table>
<br>

Проверьте пример в нашем [инструменте для сниппетов](https://snippet.dhtmlx.com/wux2b35b).

### Строковые функции {#string-functions}

<table>
    <tbody>
        <tr>
            <td><b>Функция</b></td>
            <td><b>Формула</b></td>
            <td><b>Описание</b></td>
        </tr>
        <tr>
            <td><b>ARRAYTOTEXT</b><br>добавлено в v4.3</td>
            <td>=ARRAYTOTEXT(array, [format])</td>
            <td>Возвращает массив текстовых значений из указанного диапазона в зависимости от заданного формата (0 - краткий (по умолчанию) или 1 - строгий формат).</td>
        </tr>
        <tr>
            <td><b>CHAR</b></td>
            <td>=CHAR(number)</td>
            <td>Возвращает символ (из набора символов вашего компьютера), соответствующий заданному числу. Число должно быть в диапазоне от 1 до 255.</td>
        </tr>
        <tr>
            <td><b>CLEAN</b></td>
            <td>=CLEAN(text)</td>
            <td>Удаляет из текста символы, которые не отображаются при печати.</td>
        </tr>
        <tr>
            <td><b>CODE</b></td>
            <td>=CODE(text)</td>
            <td>Возвращает числовой код первого символа в текстовой строке.</td>
        </tr>
        <tr>
            <td><b>CONCATENATE</b></td>
            <td>=CONCATENATE(A1,"",B2:C3)</td>
            <td>Объединяет две или более текстовых строки в одну.</td>
        </tr>
        <tr>
            <td><b>DOLLAR</b></td>
            <td>=DOLLAR(number, decimals)</td>
            <td>Преобразует число в текст в денежном формате с указанным количеством знаков справа/слева от десятичной точки (по умолчанию — 2).</td>
        </tr>
        <tr>
            <td><b>EXACT</b></td>
            <td>=EXACT(text1, text2)</td>
            <td>Сравнивает две строки и возвращает TRUE, если они полностью совпадают; в противном случае возвращает FALSE.</td>
        </tr>
        <tr>
            <td><b>FIND</b></td>
            <td>=FIND(find_text, within_text, [start_num])</td>
            <td>Возвращает позицию (в виде числа) одной текстовой строки внутри другой, начиная с указанной позиции (по умолчанию — 1).</td>
        </tr>
        <tr>
            <td><b>FIXED</b></td>
            <td>=FIXED(number, [decimals], [no_commas])</td>
            <td>Округляет число до указанного количества знаков после запятой, форматирует его в десятичном формате с точкой и запятыми и преобразует результат в текст. Если параметр <i>no_commas</i> равен 1, возвращаемый текст не будет содержать запятых.</td>
        </tr>
        <tr>
            <td><b>JOIN</b></td>
            <td>=JOIN(separator, value1, value2,...)</td>
            <td>Объединяет значения с помощью указанного разделителя.</td>
        </tr>
        <tr>
            <td><b>LEFT</b></td>
            <td>=LEFT(text, count)</td>
            <td>Возвращает первый символ или первые символы текстовой строки<br> в соответствии с указанным количеством символов.</td>
        </tr>
        <tr>
            <td><b>LEN</b></td>
            <td>=LEN(text)</td>
            <td>Возвращает длину указанной строки.</td>
        </tr>
        <tr>
            <td><b>LOWER</b></td>
            <td>=LOWER(text)</td>
            <td>Преобразует все буквы указанной строки в нижний регистр.</td>
        </tr>
        <tr>
            <td><b>MID</b></td>
            <td>=MID(text, start, count)</td>
            <td>Возвращает указанное количество символов из текстовой строки,<br> начиная с заданной позиции, в соответствии с<br>указанным количеством символов.</td>
        </tr>
        <tr>
            <td><b>NUMBERVALUE</b></td>
            <td>=NUMBERVALUE (text, [decimal_separator], [group_separator])</td>
            <td>Преобразует число в текстовом формате в числовое значение с использованием указанных разделителей целой и дробной частей.</td>
        </tr>
        <tr>
            <td><b>PROPER</b></td>
            <td>=PROPER(text)</td>
            <td>Делает первую букву каждого слова прописной<br>и преобразует все остальные символы в строчные.</td>
        </tr>
        <tr>
            <td><b>REPLACE</b><br>добавлено в v4.3</td>
            <td>=REPLACE(old_text, start_num, num_chars, new_text), <br><br> где: <ul> <li><i>old_text</i> - текст, в котором нужно заменить символы;</li> <li><i>start_num</i> - позиция символа в <i>old_text</i>, начиная с которой выполняется замена на new_text;</li> <li><i>num_chars</i> - количество символов в <i>old_text</i>, которые нужно заменить;</li> <li><i>new_text</i> - текст, который заменит символы в <i>old_text</i>.</li> </ul></td>
            <td>Заменяет часть текстовой строки другой строкой в соответствии с указанным количеством символов.</td>
        </tr>
        <tr>
            <td><b>REPT</b></td>
            <td>=REPT(text, number_times)</td>
            <td>Повторяет текст заданное количество раз.</td>
        </tr>
        <tr>
            <td><b>RIGHT</b></td>
            <td>=RIGHT(text, count)</td>
            <td>Возвращает последний символ или последние символы (крайние правые) текстовой строки<br>в соответствии с указанным количеством символов.</td>
        </tr>
        <tr>
            <td><b>SEARCH</b></td>
            <td>=SEARCH(find_text, within_text, [start_num])</td>
            <td>Возвращает позицию (в виде числа) первого символа <i>find_text</i> внутри <i>within_text</i>, начиная с указанной позиции (по умолчанию — 1).</td>
        </tr>
        <tr>
            <td><b>SUBSTITUTE</b></td>
            <td>=SUBSTITUTE(text, old_text, new_text, [instance_num])</td>
            <td>Заменяет старый текст новым в текстовой строке. Если указан параметр <i>instance_num</i>, заменяется только соответствующее вхождение <i>old_text</i>; в противном случае заменяются все вхождения.</td>
        </tr>
        <tr>
            <td><b>T</b></td>
            <td>=T(value)</td>
            <td>Возвращает текст, если передано текстовое значение, и пустую строку ("") для чисел, дат и логических значений TRUE/FALSE.</td>
        </tr>
        <tr>
            <td><b>TRIM</b></td>
            <td>=TRIM(text)</td>
            <td>Удаляет все пробелы из текста, кроме одиночных пробелов между словами.</td>
        </tr>
        <tr>
            <td><b>UPPER</b></td>
            <td>=UPPER(text)</td>
            <td>Преобразует текст в верхний регистр.</td>
        </tr>
    </tbody>
</table>
<br>

Проверьте пример в нашем [инструменте для сниппетов](https://snippet.dhtmlx.com/wux2b35b).

### Прочие функции {#other-functions}

<table>
    <tbody>
        <tr>
            <td><b>Функция</b></td>
            <td><b>Пример</b></td>
            <td><b>Описание</b></td>
        </tr>
        <tr>
            <td><b>AND</b></td>
            <td>=AND(logical1, [logical2], ...)</td>
            <td>Возвращает TRUE или FALSE в зависимости от того,<br> выполняются ли несколько условий одновременно.</td>
        </tr>
        <tr>
            <td><b>CHOOSE</b></td>
            <td>=CHOOSE(index_num, value1, [value2], ...)</td>
            <td>Возвращает значение из списка аргументов по указанной позиции или индексу.</td>
        </tr>
        <tr>
            <td><b>FALSE</b></td>
            <td>=FALSE()</td>
            <td>Возвращает логическое значение FALSE.</td>
        </tr>
        <tr>
            <td><b>IF</b></td>
            <td>=IF(condition, [value_if_true], [value_if_false])</td>
            <td>Возвращает одно значение, если условие равно TRUE,<br> и другое значение, если оно равно FALSE.</td>
        </tr>
        <tr>
            <td><b>NOT</b></td>
            <td>=NOT(logical)</td>
            <td>Возвращает противоположное логическое или булево значение.</td>
        </tr>
        <tr>
            <td><b>OR</b></td>
            <td>=OR(logical1, [logical2], ...)</td>
            <td>Возвращает TRUE, если хотя бы одно из логических выражений равно TRUE; в противном случае возвращает FALSE.</td>
        </tr>
        <tr>
            <td><b>TRUE</b></td>
            <td>=TRUE()</td>
            <td>Возвращает логическое значение TRUE.</td>
        </tr>
    </tbody>
</table>
<br>

Проверьте пример в нашем [инструменте для сниппетов](https://snippet.dhtmlx.com/wux2b35b).

## Получение формулы ячейки {#getting-cell-formula}

Начиная с версии v4.1, можно получить формулу, применённую к ячейке, с помощью метода [`getFormula()`](api/spreadsheet_getformula_method.md). Метод принимает идентификатор ячейки в качестве параметра:

~~~js
var formula = spreadsheet.getFormula("B2");
// -> "ABS(C2)"
~~~

## Всплывающее окно с описанием формулы {#popup-with-formula-description}

При вводе формулы появляется всплывающее окно с описанием функции и её параметров.

![DHTMLX Spreadsheet formula popup showing a function description and parameters while typing](/img/formula_popup.png)

Проверьте пример в нашем [инструменте для сниппетов](https://snippet.dhtmlx.com/wux2b35b).

Вы можете изменить локаль по умолчанию для всплывающего окна с параметрами формулы и добавить пользовательскую локаль. Подробнее — в руководстве по [Локализации](localization.md#default-locale-for-formulas).

## Пользовательские формулы {#custom-formulas}

Начиная с версии v6.0, можно регистрировать пользовательские функции формул с помощью метода [`addFormula()`](api/spreadsheet_addformula_method.md). После регистрации формула становится доступна в любой ячейке по имени в верхнем регистре.

Метод принимает два параметра: имя формулы и синхронную функцию-обработчик, которая получает разрешённые значения ячеек в качестве аргументов и возвращает результат:

~~~js
spreadsheet.addFormula("DOUBLE", (value) => {
    return value * 2;
});
~~~

После этого формулу можно использовать в ячейках так же, как любую встроенную функцию:

~~~js
spreadsheet.parse([
    { cell: "A1", value: 4, format: "number" },
    { cell: "B1", value: "=DOUBLE(A1)", format: "number" }
]);
~~~

:::note
Функция-обработчик должна быть синхронной. Использование `Promise` или `fetch` внутри функции не допускается.
:::

**Связанный пример:** [Spreadsheet. Добавление пользовательской формулы](https://snippet.dhtmlx.com/wvxdlahp)
