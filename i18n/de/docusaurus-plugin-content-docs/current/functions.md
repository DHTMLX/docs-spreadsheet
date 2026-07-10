---
sidebar_label: Formeln und Funktionen
title: Formeln und Funktionen
description: In der Dokumentation erfahren Sie alles über die Formeln und Funktionen der DHTMLX JavaScript Spreadsheet-Bibliothek. Lesen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Spreadsheet herunter.
---

# Formeln und Funktionen {#formulas-and-functions}

Ab v4.0 enthält das Paket von DHTMLX Spreadsheet eine Reihe vordefinierter Formeln für verschiedene Arten von Berechnungen mit Zeichenketten und Zahlen. Die Formeln sind kompatibel mit Excel und Google Sheets.

:::note
Kleinbuchstaben in Formeln werden automatisch in Großbuchstaben umgewandelt.
:::

<iframe src="https://snippet.dhtmlx.com/wux2b35b?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Funktionen {#functions}

Nachfolgend finden Sie eine Liste aller verfügbaren Funktionen mit detaillierten Beschreibungen.

### Boolesche Operatoren {#boolean-operators}

Sie können zwei Werte mit logischen Ausdrücken vergleichen, die entweder TRUE oder FALSE zurückgeben.

| Operator | Example       | Description                                                                                              |
| :------- | :------------ | :------------------------------------------------------------------------------------------------------- |
| =        | =A1=B1        | Gibt TRUE zurück, wenn der Wert in Zelle A1 gleich dem Wert in Zelle B1 ist; andernfalls FALSE.                 |
| &lt;&gt; | =A1&lt;&gt;B1 | Gibt TRUE zurück, wenn der Wert in Zelle A1 ungleich dem Wert in Zelle B1 ist; andernfalls FALSE.             |
| &gt;     | =A1&gt;B1     | Gibt TRUE zurück, wenn der Wert in Zelle A1 größer als der Wert in Zelle B1 ist; andernfalls FALSE.             |
| &lt;     | =A1&lt;B1     | Gibt TRUE zurück, wenn der Wert in Zelle A1 kleiner als der Wert in Zelle B1 ist; andernfalls FALSE.                |
| &gt;=    | =A1&gt;=B1    | Gibt TRUE zurück, wenn der Wert in Zelle A1 größer oder gleich dem Wert in Zelle B1 ist; andernfalls FALSE. |
| &lt;=    | =A1&lt;=B1    | Gibt TRUE zurück, wenn der Wert in Zelle A1 kleiner oder gleich dem Wert in Zelle B1 ist; andernfalls FALSE.    |

Sehen Sie das Beispiel in unserem [Snippet-Tool](https://snippet.dhtmlx.com/wux2b35b).

### Datumsfunktionen {#date-functions}

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
            <td>Kombiniert drei separate Werte (Jahr, Monat und Tag) und gibt ein Datum zurück.</td>
        </tr>
        <tr>
            <td><b>DATEDIF</b></td>
            <td>=DATEDIF(start_date,end_date,unit)</td>
            <td>Gibt die Anzahl der Tage, Monate oder Jahre zwischen zwei Datumsangaben zurück.<br> Das Argument <a href="https://support.microsoft.com/en-us/office/datedif-function-25dba1a4-2812-480b-84dd-8b32a451b35c">unit</a> legt fest, welche Art von Information zurückgegeben werden soll.</td>
        </tr>
        <tr>
            <td><b>DATEVALUE</b></td>
            <td>=DATEVALUE(date_text)</td>
            <td>Konvertiert ein als Text gespeichertes Datum in eine fortlaufende Zahl.</td>
        </tr>
        <tr>
            <td><b>DAY</b></td>
            <td>=DAY(date)</td>
            <td>Gibt den Tag des Monats als Zahl zwischen 1 und 31 für ein angegebenes Datum zurück.</td>
        </tr>
        <tr>
            <td><b>DAYS</b></td>
            <td>=DAYS(end_date, start_date)</td>
            <td>Gibt die Anzahl der Tage zwischen zwei Datumsangaben zurück.</td>
        </tr>
        <tr>
            <td><b>DAYS360</b></td>
            <td>=DAYS360(start_date,end_date,[method]])</td>
            <td>Gibt die Anzahl der Tage zwischen 2 Datumsangaben zurück, basierend auf einem 360-Tage-Jahr (zwölf Monate à 30 Tage).</td>
        </tr>
        <tr>
            <td><b>EDATE</b></td>
            <td>=EDATE(start_date, months)</td>
            <td>Gibt das Datum zurück, das n Monate in der Vergangenheit oder Zukunft liegt und dabei auf denselben Tag des Monats fällt.</td>
        </tr>
        <tr>
            <td><b>EOMONTH</b></td>
            <td>=EOMONTH(start_date, months)</td>
            <td>Gibt das Datum des letzten Tages des Monats zurück, der n Monate vor oder nach dem angegebenen Startdatum liegt.</td>
        </tr>
        <tr>
            <td><b>ISOWEEKNUM</b></td>
            <td>=ISOWEEKNUM(date)</td>
            <td>Gibt die ISO-Kalenderwochennummer des Jahres für das angegebene Datum zurück.</td>
        </tr>
        <tr>
            <td><b>MONTH</b></td>
            <td>=MONTH(date)</td>
            <td>Gibt den Monat des Jahres für das angegebene Datum zurück.</td>
        </tr>
        <tr>
            <td><b>NETWORKDAYS</b></td>
            <td>=NETWORKDAYS(start_date, end_date, [holidays])</td>
            <td>Gibt die Anzahl der vollständigen Arbeitstage zwischen zwei Datumsangaben zurück. Arbeitstage schließen Wochenenden und alle in <i>holidays</i> angegebenen Datumsangaben aus.</td>
        </tr>
        <tr>
            <td><b>NETWORKDAYSINTL</b></td>
            <td>=NETWORKDAYSINTL(start_date, end_date, [weekend], [holidays])</td>
            <td>Gibt die Anzahl der vollständigen Arbeitstage zwischen zwei Datumsangaben zurück. <br>Der optionale Parameter <a href="https://support.microsoft.com/en-us/office/networkdays-intl-function-a9b26239-4f20-46a1-9ab8-4e925bfd5e28">weekend</a> legt fest, welche Wochentage als Wochenende gelten. <br><i>Wochenendtage</i> und <i>Feiertage</i> werden nicht als Arbeitstage gewertet.</td>
        </tr>
        <tr>
            <td><b>NOW</b></td>
            <td>=NOW()</td>
            <td>Gibt das aktuelle Datum zurück.</td>
        </tr>
        <tr>
            <td><b>TIMEVALUE</b><br>added in v4.3</td>
            <td>=TIMEVALUE(time_text)</td>
            <td>Gibt die Dezimalzahl der durch eine Textzeichenkette dargestellten Uhrzeit zurück.</td>
        </tr>
        <tr>
            <td><b>WEEKDAY</b></td>
            <td>=WEEKDAY(date,[return_type])</td>
            <td>Gibt den Wochentag für das angegebene Datum zurück. <br>Das Argument <a href="https://support.microsoft.com/en-us/office/weekday-function-60e44483-2ed1-439f-8bd0-e404c190949a">return_type</a> legt fest, welcher Wochentag als erster Tag gilt.</td>
        </tr>
        <tr>
            <td><b>WEEKNUM</b></td>
            <td>=WEEKNUM(date,[return_type])</td>
            <td>Gibt die Kalenderwochennummer für das angegebene Datum zurück. <br>Das Argument <a href="https://support.microsoft.com/en-us/office/weeknum-function-e5c43a03-b4ab-426c-b411-b18c13c75340">return_type</a> legt fest, welcher Wochentag als erster Tag gilt.</td>
        </tr>
        <tr>
            <td><b>WORKDAY</b></td>
            <td>=WORKDAY(start_date, days, [holidays])</td>
            <td>Gibt das Datum des nächstgelegenen Arbeitstags zurück, der n Tage in der Zukunft oder Vergangenheit liegt.<br>Arbeitstage schließen Wochenenden und alle in <i>holidays</i> angegebenen Datumsangaben aus.</td>
        </tr>
        <tr>
            <td><b>WORKDAYINTL</b></td>
            <td>=WORKDAYINTL(start_date, days, [weekend], [holidays])</td>
            <td>Gibt das Datum des nächstgelegenen Arbeitstags zurück, der n Tage in der Zukunft oder Vergangenheit liegt. <br>Der optionale Parameter <a href="https://support.microsoft.com/en-us/office/workday-intl-function-a378391c-9ba7-4678-8a39-39611a9bf81d">weekend</a> legt fest, welche Wochentage als Wochenende gelten. <br><i>Wochenendtage</i> und <i>Feiertage</i> werden nicht als Arbeitstage gewertet.</td>
        </tr>
        <tr>
            <td><b>YEAR</b></td>
            <td>=YEAR(date)</td>
            <td>Gibt das Jahr des angegebenen Datums zurück.</td>
        </tr>
        <tr>
            <td><b>YEARFRAC</b></td>
            <td>=YEARFRAC(start_date, end_date, [basis])</td>
            <td>Gibt den Jahresbruchteil zurück, der die Anzahl der ganzen Tage zwischen Startdatum und Enddatum darstellt. <br>Das optionale Argument <a href="https://support.microsoft.com/en-us/office/yearfrac-function-3844141e-c76d-4143-82b6-208454ddc6a8">basis</a> legt den Typ der zu verwendenden Tageszählbasis fest.</td>
        </tr>
    </tbody>
</table>
<br>

Sehen Sie das Beispiel in unserem [Snippet-Tool](https://snippet.dhtmlx.com/wux2b35b).
### Finanzfunktionen {#financial-functions}

<table>
    <tbody>
        <tr>
            <td><b>Funktion</b></td>
            <td><b>Formel</b></td>
            <td><b>Beschreibung</b></td>
        </tr>
        <tr>
            <td><b>ACCRINT</b></td>
            <td> =ACCRINT(issue, id, sd, rate, par, frequency, [basis], [calc_method]), <br><br> where: <ul> <li><i>issue</i> - the issue date of the security;</li> <li><i>id</i> - the security's first interest date;</li> <li><i>sd</i> - the security's settlement date;</li> <li><i>rate</i> - the security's annual coupon rate;</li> <li><i>par</i> - the security's par value, $1,000 by default;</li> <li><i>frequency</i> - the number of coupon payments per year (1 for annual payments); </li> <li><i>basis</i> - optional, the type of day count basis to use;</li> <li><i>calc_method</i> - optional, the way to calculate the total accrued interest when the date of settlement is later than the date of first interest (<a href="https://support.microsoft.com/en-us/office/accrint-function-fe45d089-6722-4fb3-9379-e1f911d8dc74">0 or 1(default)</a>).</li></ul></td>
            <td>Gibt die aufgelaufenen Zinsen fur ein Wertpapier zuruck, das periodische Zinsen zahlt.</td>
        </tr>
        <tr>
            <td><b>BINOM.DIST</b><br>added in v4.3</td>
            <td>=BINOM.DIST(number_s, trials, probability_s, cumulative), <br><br> where: <ul> <li><i>number_s</i> - the number of successes in trials;</li> <li><i>trials</i> - the number of independent trials;</li> <li><i>probability_s</i> - the probability of success on each trial;</li> <li><i>cumulative</i> - if TRUE, then BINOM.DIST returns the cumulative distribution function; if FALSE (use 0), it returns the probability mass function.</li> </ul></td>
            <td>Gibt die Wahrscheinlichkeit einer einzelnen Binomialverteilung zuruck.</td>
        </tr>
        <tr>
            <td><b>BINOM.DIST.RANGE</b><br>added in v4.3</td>
            <td>=BINOM.DIST.RANGE(trials, probability_s, number_s, [number_s2]), <br><br> where: <ul> <li><i>trials</i> - the number of independent trials (must be ≥ 0);</li> <li><i>probability_s</i> - the probability of success in each trial (must be ≥ 0 and ≤ 1);</li> <li><i>number_s</i> - the number of successes in trials (must be ≥ 0 and ≤ <i>trials)</i>;</li> <li><i>number_s2</i> - optional. If provided, returns the probability that the number of successful trials will fall between <i>number_s</i> and <i>number_s2</i> <br>([number_s2] must be ≥ <i>number_s</i> and ≤ <i>trials</i>).</li> </ul></td>
            <td>Gibt die Wahrscheinlichkeit eines Versuchsergebnisses anhand einer Binomialverteilung zuruck.</td>
        </tr>
        <tr>
            <td><b>BINOM.INV</b><br>added in v4.3</td>
            <td>=BINOM.INV(trials, probability_s, alpha), <br><br> where: <ul> <li><i>trials</i> - the number of Bernoulli trials;</li> <li><i>probability_s</i> - the probability of success in each trial (must be ≥ 0 and ≤ 1);</li> <li><i>alpha</i> - the criterion value (must be ≥ 0 and ≤ <i>1)</i>;</li> </ul></td>
            <td>Gibt den kleinsten Wert zuruck, fur den die kumulierte Binomialverteilung grosser oder gleich einem Kriteriumswert ist.</td>
        </tr>
        <tr>
            <td><b>BITLSHIFT</b><br>added in v4.3</td>
            <td>=BITLSHIFT(number, shift_amount), <br><br> where: <ul> <li><i>number</i> - the number to be shifted (must be an integer greater than or equal to 0 </li> <li><i>shift_amount</i> - the amount of bits to shift, if negative, shifts bits to the right instead</li> </ul></td>
            <td>Gibt eine Zahl zuruck, die um die angegebene Anzahl von Bits nach links verschoben wurde.</td>
        </tr>
        <tr>
            <td><b>BITOR</b><br>added in v4.3</td>
            <td>=BITOR(number1, number2), <br><br> where: <ul> <li><i>number1</i> - a decimal number (must be greater than or equal to 0 and no larger than 2^48 - 1);</li> <li><i>number2</i> - a decimal number (must be greater than or equal to 0 and no larger than 2^48 - 1);</li> </ul></td>
            <td>Gibt eine Dezimalzahl zuruck, die das bitweise ODER zweier Zahlen darstellt.</td>
        </tr>
        <tr>
            <td><b>BITRSHIFT</b><br>added in v4.3</td>
            <td>=BITRSHIFT(number, shift_amount), <br><br> where: <ul> <li><i>number</i> - the number to be shifted (must be an integer greater than or equal to 0);</li> <li><i>shift_amount</i> - the amount of bits to shift, if negative shifts bits to the left instead;</li> </ul></td>
            <td>Gibt eine Zahl zuruck, die um die angegebene Anzahl von Bits nach rechts verschoben wurde.</td>
        </tr>
        <tr>
            <td><b>BITXOR</b><br>added in v4.3</td>
            <td>=BITXOR(number1, number2), <br><br> where: <ul> <li><i>number1</i> - a decimal number (must be greater than or equal to 0 and no larger than 2^48 - 1);</li> <li><i>number2</i> - a decimal number (must be greater than or equal to 0 and no larger than 2^48 - 1);</li> </ul></td>
            <td>Gibt eine Dezimalzahl zuruck, die das bitweise XOR zweier Zahlen darstellt.</td>
        </tr>
        <tr>
            <td><b>COMPLEX</b><br>added in v4.3</td>
            <td>=COMPLEX(real_num, i_num, [suffix]), <br><br> where: <ul> <li><i>real_num</i> - the real coefficient of the complex number;</li> <li><i>i_num</i> - the imaginary coefficient of the complex number;</li> <li><i>suffix</i> - optional ("i" by default) - the suffix for the imaginary component of the complex number; <br>(must be lowercase "i" or "j") .</li> </ul></td>
            <td>Konvertiert Real- und Imaginärkoeffizienten in eine komplexe Zahl der Form x + yi oder x + yj.</td>
        </tr>
        <tr>
            <td><b>CORREL</b><br>added in v4.3</td>
            <td>=CORREL(array1, array2), <br><br> where: <ul> <li><i>array1</i> - a range of cell values;</li> <li><i>array2</i> - a second range of cell values;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. The arrays must have equal number of data points. </ul></td>
            <td>Gibt den Korrelationskoeffizienten zweier Zellbereiche zuruck.</td>
        </tr>
        <tr>
            <td><b>COVAR</b><br>added in v4.3</td>
            <td>=COVAR(array1, array2), <br><br> where: <ul> <li><i>array1</i> - The first cell range of integers;</li> <li><i>array2</i> - The second cell range of integers;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. The arrays must have equal number of data points. </ul></td>
            <td>Gibt die Kovarianz zuruck, also den Durchschnitt der Produkte der Abweichungen fur jedes Datenpunktpaar in zwei Datensatzen.</td>
        </tr>
        <tr>
            <td><b>COVARIANCE.P</b><br>added in v4.3</td>
            <td>=COVARIANCE.P(array1, array2), <br><br> where: <ul> <li><i>array1</i> - The first cell range of integers;</li> <li><i>array2</i> - The second cell range of integers;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. The arrays must have equal number of data points. </ul></td>
            <td>Gibt die Populationkovarianz zuruck, also den Durchschnitt der Produkte der Abweichungen fur jedes Datenpunktpaar in zwei Datensatzen.</td>
        </tr>
        <tr>
            <td><b>COVARIANCE.S</b><br>added in v4.3</td>
            <td>=COVARIANCE.S(array1, array2), <br><br> where: <ul> <li><i>array1</i> - The first cell range of integers;</li> <li><i>array2</i> - The second cell range of integers;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. The arrays must have equal number of data points. </ul></td>
            <td>Gibt die Stichprobenkovarianz zuruck, also den Durchschnitt der Produkte der Abweichungen fur jedes Datenpunktpaar in zwei Datensatzen.</td>
        </tr>
        <tr>
            <td><b>DB</b></td>
            <td>=DB(cost, salvage, life, period, [month]), <br><br> where: <ul> <li><i>cost</i> - the initial cost of the asset;</li> <li><i>salvage</i> - the value of the asset at the end of the depreciation;</li> <li><i>life</i> - the number of periods over which the asset is being depreciated;</li> <li><i>period</i> - the period to calculate depreciation for;</li> <li><i>month</i> - optional, the number of months in the first year, 12 by default.</li> </ul></td>
            <td>Berechnet die Abschreibung eines Anlageguts fur einen bestimmten Zeitraum nach der geometrisch-degressiven Methode.</td>
        </tr>
        <tr>
            <td><b>DDB</b></td>
            <td>=DDB(cost, salvage, life, period, [factor]), <br><br> where: <ul> <li><i>cost</i> - the initial cost of the asset;</li> <li><i>salvage</i> - the value of the asset at the end of the depreciation;</li> <li><i>life</i> - the number of periods over which the asset is being depreciated;</li> <li><i>period</i> - the period to calculate depreciation for;</li> <li><i>factor</i> - optional, the rate at which the balance declines, 2 (the double-declining balance method) by default</li> </ul></td>
            <td>Berechnet die Abschreibung eines Anlageguts fur einen bestimmten Zeitraum nach der doppelt-degressiven Methode oder einer anderen von Ihnen angegebenen Methode.</td>
        </tr>
        <tr>
            <td><b>DEC2BIN</b><br>added in v4.3</td>
            <td>=DEC2BIN(number), <br><br> where: <ul> <li><i>number</i> - the decimal integer you want to convert (must be greater than -512 but less than 511);</li> </ul></td>
            <td>Konvertiert eine Dezimalzahl in eine Binardarstellung.</td>
        </tr>
        <tr>
            <td><b>DEC2HEX</b><br>added in v4.3</td>
            <td>=DEC2HEX(number), <br><br> where: <ul> <li><i>number</i> - the decimal integer you want to convert (must be greater than -549755813888 but less than 549755813887);</li> </ul></td>
            <td>Konvertiert eine Dezimalzahl in eine Hexadezimaldarstellung.</td>
        </tr>
        <tr>
            <td><b>DEC2OCT</b><br>added in v4.3</td>
            <td>=DEC2OCT(number), <br><br> where: <ul> <li><i>number</i> - the decimal integer you want to convert (must be greater than -536870912 but less than 536870911);</li> </ul></td>
            <td>Konvertiert eine Dezimalzahl in eine Oktaldarstellung.</td>
        </tr>
        <tr>
            <td><b>DELTA</b><br>added in v4.3</td>
            <td>=DELTA(number1, [number2]), <br><br> where: <ul> <li><i>number1</i> - the first number;</li> <li><i>number2</i> - optional, the second number. If omitted, number2 is assumed to be zero.</li> </ul></td>
            <td>Pruft zwei Zahlen auf Gleichheit. Gibt 1 zuruck, wenn number1 = number2; andernfalls 0.</td>
        </tr>
        <tr>
            <td><b>DEVSQ</b><br>added in v4.3</td>
            <td>=DEVSQ(number1, [number2], ...), <br><br> where: <ul> <li><i>number1, number2,...</i> - from 1 to 255 arguments for which you want to calculate the sum of squared deviations;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. </ul></td>
            <td>Gibt die Summe der quadrierten Abweichungen der Datenpunkte von ihrem Stichprobenmittelwert zuruck.</td>
        </tr>
        <tr>
            <td><b>DOLLARDE</b></td>
            <td>=DOLLARDE(fractional_dollar, fraction)</td>
            <td>Konvertiert einen Dollarpreis, der als Ganzzahlteil und Bruchanteil angegeben ist, in einen als Dezimalzahl dargestellten Dollarpreis.</td>
        </tr>
        <tr>
            <td><b>DOLLARFR</b></td>
            <td>=DOLLARFR(decimal_dollar, fraction)</td>
            <td>Konvertiert eine Dezimalzahl in einen Dollarpreis als Bruch.</td>
        </tr>
        <tr>
            <td><b>EFFECT</b></td>
            <td>=EFFECT(nominal_rate, npery)<br><br> <i>nominal_rate</i> must be >= 0, <i>npery</i> must be > 1.</td>
            <td>Gibt den effektiven jahrlichen Zinssatz auf Basis des nominalen jahrlichen Zinssatzes und der Anzahl der Verzinsungsperioden pro Jahr zuruck.<br> Funktioniert mit numerischen Werten. </td>
        </tr>
        <tr>
            <td><b>ERF</b><br>added in v4.3</td>
            <td>=ERF(lower_limit, [upper_limit]), <br><br> where: <ul> <li><i>lower_limit</i> - the lower bound for integrating ERF; </li> <li><i>upper_limit</i> - the upper bound for integrating ERF. If omitted, ERF integrates between 0 and lower_limit. </li> </ul> </td>
            <td>Gibt die Fehlerfunktion integriert zwischen lower_limit und upper_limit zuruck.</td>
        </tr>
        <tr>
            <td><b>ERFC</b><br>added in v4.3</td>
            <td>=ERFC(x), <br><br> where: <ul> <li><i>x</i> - the lower bound for integrating ERFC </li> </ul></td>
            <td>Gibt die komplementare ERF-Funktion integriert zwischen x und Unendlich zuruck.</td>
        </tr>
        <tr>
            <td><b>EXP</b><br>added in v4.3</td>
            <td>=EXP(number), <br><br> where: <ul> <li><i>number</i> - the power that e is raised to </li> </ul></td>
            <td>Gibt das Ergebnis der Konstanten e (gleich 2,71828182845904) potenziert mit einer Zahl zuruck.</td>
        </tr>
        <tr>
            <td><b>FISHER</b><br>added in v4.3</td>
            <td>=FISHER(x), <br><br> where: <ul> <li><i>x</i> - the value for which you want to calculate the transformation </li> </ul></td>
            <td>Berechnet die Fisher-Transformation fur einen angegebenen Wert.</td>
        </tr>
        <tr>
            <td><b>FISHERINV</b><br>added in v4.3</td>
            <td>=FISHERINV(y), <br><br> where: <ul> <li><i>y</i> - the value for which you want to perform the inverse of the transformation </li> </ul></td>
            <td>Berechnet die Umkehrung der Fisher-Transformation und gibt einen Wert zwischen -1 und +1 zuruck.</td>
        </tr>
        <tr>
            <td><b>FV</b></td>
            <td>=FV(rate, nper, pmt, [pv], [type]), <br><br> where: <ul> <li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>nper</i> - the total number of payment periods in an annuity. For monthly payments, <i>nper</i>=nper*12;</li> <li><i>pmt</i> - the payment made each period;</li> <li><i>pv</i> - optional, the present value, or the lump-sum amount that a series of future payments is worth right now, 0 by default;</li> <li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li> </ul></td>
            <td>Berechnet den zukuftigen Wert einer Investition. </td>
        </tr>
        <tr>
            <td><b>FVSCHEDULE</b></td>
            <td>=FVSCHEDULE(principal, schedule), <br><br> where: <ul> <li><i>principal</i> - the present value;</li> <li><i>schedule</i> - an array of interest rates to apply. The values in the array can be numbers or blank cells; any other value produces the error value. Blank cells are taken as zeros.</li> </ul></td>
            <td>Gibt den zukuftigen Wert eines anfanglichen Kapitals (= Barwert) nach Anwendung einer Reihe von Zinseszinssatzen zuruck.</td>
        </tr>
        <tr>
            <td><b>GAMMA</b><br>added in v4.3</td>
            <td>=GAMMA(number)<br><br> 
            If Number is a negative integer or 0, GAMMA returns the #Error value.</td>
            <td>Gibt den Wert der Gammafunktion zuruck.</td>
        </tr>
        <tr>
            <td><b>GEOMEAN</b><br>added in v4.3</td>
            <td>=GEOMEAN(number1, [number2], ...)<br><br> where: <ul> <li><i>number1, number2,...</i> - from 1 to 255 arguments for which you want to calculate the mean;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. </ul></td>
            <td>Gibt das geometrische Mittel eines Arrays oder Bereichs positiver Daten zuruck.</td>
        </tr>
        <tr>
            <td><b>GESTEP</b><br>added in v4.3</td>
            <td>=GESTEP(number, [step])<br><br> where: <ul> <li><i>number</i> - the value to test against step;</li> <li><i>step</i> - optional, the threshold value. If you omit a value for step, GESTEP uses zero;</li> </ul></td>
            <td>Gibt 1 zuruck, wenn number ≥ step; andernfalls 0 (null).</td>
        </tr>
        <tr>
            <td><b>HARMEAN</b><br>added in v4.3</td>
            <td>=HARMEAN(number1, [number2], ...)<br><br> where: <ul> <li><i>number1, number2,...</i> - from 1 to 255 arguments for which you want to calculate the mean;</li><br>Text, logical values, or empty cells are ignored. Cells with zero values are included. </ul></td>
            <td>Gibt das harmonische Mittel eines Datensatzes zuruck.</td>
        </tr>
        <tr>
            <td><b>HEX2BIN</b><br>added in v4.3</td>
            <td>=HEX2BIN(number)<br><br> where: <ul> <li><i>number</i> - the hexadecimal number you want to convert. Number can't contain more than 10 characters;</li> </ul></td>
            <td>Konvertiert eine Hexadezimalzahl in eine Binardarstellung.</td>
        </tr>
        <tr>
            <td><b>HEX2DEC</b><br>added in v4.3</td>
            <td>=HEX2DEC(number)<br><br> where: <ul> <li><i>number</i> - the hexadecimal number you want to convert. Number can't contain more than 10 characters;</li> </ul></td>
            <td>Konvertiert eine Hexadezimalzahl in eine Dezimaldarstellung.</td>
        </tr>
        <tr>
            <td><b>HEX2OCT</b><br>added in v4.3</td>
            <td>=HEX2OCT(number)<br><br> where: <ul> <li><i>number</i> - the hexadecimal number you want to convert. Number can't contain more than 10 characters;</li> </ul></td>
            <td>Konvertiert eine Hexadezimalzahl in eine Oktaldarstellung.</td>
        </tr>
        <tr>
            <td><b>IMABS</b><br>added in v4.3</td>
            <td>=IMABS(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Gibt den Absolutwert einer komplexen Zahl im Format x + yi oder x + yj zuruck.</td>
        </tr>
        <tr>
            <td><b>IMAGINARY</b><br>added in v4.3</td>
            <td>=IMAGINARY(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Gibt den Imaginärkoeffizienten einer komplexen Zahl im Format x + yi oder x + yj zuruck.</td>
        </tr>
        <tr>
            <td><b>IMCONJUGATE</b><br>added in v4.3</td>
            <td>=IMCONJUGATE(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Gibt die konjugiert komplexe Zahl einer komplexen Zahl im Format x + yi oder x + yj zuruck.</td>
        </tr>
        <tr>
            <td><b>IMCOS</b><br>added in v4.3</td>
            <td>=IMCOS(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Gibt den Kosinus einer komplexen Zahl im Format x + yi oder x + yj zuruck.</td>
        </tr>
        <tr>
            <td><b>IMCOSH</b><br>added in v4.3</td>
            <td>=IMCOSH(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Gibt den hyperbolischen Kosinus einer komplexen Zahl im Format x + yi oder x + yj zuruck.</td>
        </tr>
        <tr>
            <td><b>IMCOT</b><br>added in v4.3</td>
            <td>=IMCOT(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Gibt den Kotangens einer komplexen Zahl im Format x + yi oder x + yj zuruck.</td>
        </tr>
        <tr>
            <td><b>IMCSC</b><br>added in v4.3</td>
            <td>=IMCSC(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Gibt den Kosekans einer komplexen Zahl im Format x + yi oder x + yj zuruck.</td>
        </tr>
        <tr>
            <td><b>IMCSCH</b><br>added in v4.3</td>
            <td>=IMCSCH(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Gibt den hyperbolischen Kosekans einer komplexen Zahl im Format x + yi oder x + yj zuruck.</td>
        </tr>
        <tr>
            <td><b>IMDIV</b><br>added in v4.3</td>
            <td>=IMDIV(inumber1, inumber2)<br><br> where: <ul> <li><i>inumber1</i> - the complex numerator or dividend</li> <li><i>inumber2</i> - the complex denominator or divisor</li> </ul></td>
            <td>Gibt den Quotienten zweier komplexer Zahlen im Format x + yi oder x + yj zuruck.</td>
        </tr>
        <tr>
            <td><b>IMEXP</b><br>added in v4.3</td>
            <td>=IMEXP(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Gibt den Exponentialwert einer komplexen Zahl im Format x + yi oder x + yj zuruck.</td>
        </tr>
        <tr>
            <td><b>IMLN</b><br>added in v4.3</td>
            <td>=IMLN(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Gibt den naturlichen Logarithmus einer komplexen Zahl im Format x + yi oder x + yj zuruck.</td>
        </tr>
        <tr>
            <td><b>IMPOWER</b><br>added in v4.3</td>
            <td>=IMPOWER(inumber, number)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> <li><i>number</i> - the power to which you want to raise the complex number</li> </ul></td>
            <td>Gibt eine komplexe Zahl im Textformat x + yi oder x + yj potenziert mit einer Zahl zuruck.</td>
        </tr>
        <tr>
            <td><b>IMPRODUCT</b><br>added in v4.3</td>
            <td>=IMPRODUCT(inumber1, [inumber2], ...)<br><br> where: <ul> <li><i>inumber1, inumber2,...</i> - from 1 to 255 complex numbers to multiply</li> </ul></td>
            <td>Gibt das Produkt von 1 bis 255 komplexen Zahlen im Format x + yi oder x + yj zuruck.</td>
        </tr>
        <tr>
            <td><b>IMREAL</b><br>added in v4.3</td>
            <td>=IMREAL(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Gibt den Realkoeffizienten einer komplexen Zahl im Format x + yi oder x + yj zuruck.</td>
        </tr>
        <tr>
            <td><b>IMSEC</b><br>added in v4.3</td>
            <td>=IMSEC(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Gibt den Sekans einer komplexen Zahl im Format x + yi oder x + yj zuruck.</td>
        </tr>
        <tr>
            <td><b>IMSECH</b><br>added in v4.3</td>
            <td>=IMSECH(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Gibt den hyperbolischen Sekans einer komplexen Zahl im Format x + yi oder x + yj zuruck.</td>
        </tr>
        <tr>
            <td><b>IMSIN</b><br>added in v4.3</td>
            <td>=IMSIN(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Gibt den Sinus einer komplexen Zahl im Format x + yi oder x + yj zuruck.</td>
        </tr>
        <tr>
            <td><b>IMSINH</b><br>added in v4.3</td>
            <td>=IMSINH(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Gibt den hyperbolischen Sinus einer komplexen Zahl im Format x + yi oder x + yj zuruck.</td>
        </tr>
        <tr>
            <td><b>IMSQRT</b><br>added in v4.3</td>
            <td>=IMSQRT(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Gibt die Quadratwurzel einer komplexen Zahl im Format x + yi oder x + yj zuruck.</td>
        </tr>
        <tr>
            <td><b>IMSUB</b><br>added in v4.3</td>
            <td>=IMSUB(inumber1, inumber2)<br><br> where: <ul> <li><i>inumber1</i> - a complex number from which to subtract inumber2;</li> <li><i>inumber2</i> - the complex number to subtract from inumber1</li> </ul></td>
            <td>Gibt die Differenz zweier komplexer Zahlen im Format x + yi oder x + yj zuruck.</td>
        </tr>
        <tr>
            <td><b>IMSUM</b><br>added in v4.3</td>
            <td>=IMSUB(inumber1, [inumber2], ...)<br><br> where: <ul> <li><i>inumber1, inumber2,...</i> - from 1 to 255 complex numbers to add</li> </ul></td>
            <td>Gibt die Summe von zwei oder mehr komplexen Zahlen im Format x + yi oder x + yj zuruck.</td>
        </tr>
        <tr>
            <td><b>IMTAN</b><br>added in v4.3</td>
            <td>=IMTAN(inumber)<br><br> where: <ul> <li><i>inumber</i> - a complex number</li> </ul></td>
            <td>Gibt den Tangens einer komplexen Zahl im Format x + yi oder x + yj zuruck.</td>
        </tr>
        <tr>
            <td><b>IPMT</b></td>
            <td>=IPMT(rate, per, nper, pv, [fv], [type]), <br><br> where: <ul> <li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>per</i> - the period for which you want to find the interest and must be in the range between 1 and nper;</li> <li><i>nper</i> - the total number of payment periods in an annuity. For monthly payments, <i>nper</i>=nper*12;</li> <li><i>pv</i> - the present value, or the lump-sum amount that a series of future payments is worth right now;</li> <li><i>fv</i> - optional, the future value, 0 by default;</li> <li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li> </ul></td>
            <td>Gibt die Zinszahlung fur einen bestimmten Zeitraum einer Investition auf Basis periodischer, gleichbleibender Zahlungen und eines konstanten Zinssatzes zuruck.</td>
        </tr>
        <tr>
            <td><b>IRR</b></td>
            <td>=IRR(values, [guess]), <br><br> where: <ul> <li><i>values</i> - an array or reference to cells that contain values. The array must contain at least one positive value and one negative value;</li> <li><i>guess</i> - optional, an estimate for expected IRR, .1 (=10%) by default.</li> </ul></td>
            <td>Gibt den internen Zinsfuss (IRR) fur eine Reihe von Cashflows zuruck, die in regelmasigen Abstanden anfallen.</td>
        </tr>
        <tr>
            <td><b>ISPMT</b></td>
            <td>=ISPMT(rate, per, nper, pv), <br><br> where: <ul> <li><i>rate</i> - the interest rate for the investment. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>per</i> - the period for which you want to find the interest and must be in the range between 1 and nper;</li> <li><i>nper</i> - the total number of payment periods for the investment. For monthly payments, <i>nper</i>=nper*12;</li> <li><i>pv</i> - the present value of the investment. For a loan, pv is the loan amount.</li> </ul></td>
            <td>Berechnet die gezahlten (oder erhaltenen) Zinsen fur den angegebenen Zeitraum eines Darlehens (oder einer Investition) mit gleichmasigen Tilgungszahlungen.</td>
        </tr>
        <tr>
            <td><b>LARGE</b><br>added in v4.3</td>
            <td>=LARGE(array, k), <br><br> where: <ul> <li><i>array</i> - the array or range of data for which you want to determine the k-th largest value;</li> <li><i>k</i> - the position (from the largest) in the array or cell range of data to return.</li> </ul></td>
            <td>Gibt den k-grossten Wert in einem Array zuruck.</td>
        </tr>
        <tr>
            <td><b>MEDIAN</b><br>added in v4.3</td>
            <td>=MEDIAN(number1, [number2], ...), <br><br> where: <ul> <li><i>number1, number2,...</i> - from 1 to 255 numbers for which you want to calculate the median;</li> </ul></td>
            <td>Gibt den Median der angegebenen Zahlen zuruck.</td>
        </tr>
        <tr>
            <td><b>NOMINAL</b></td>
            <td>=NOMINAL(effect_rate, npery), <br><br><i>effect_rate</i> must be >= 0, <i>npery</i> must be > 1. </td>
            <td>Gibt den nominalen jahrlichen Zinssatz auf Basis des effektiven Zinssatzes und der Anzahl der Verzinsungsperioden pro Jahr zuruck.</td>
        </tr>
        <tr>
            <td><b>NPER</b></td>
            <td>=NPER(rate,pmt,pv,[fv],[type]), <br><br>where: <ul> <li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>pmt</i> - the payment made each period;</li> <li><i>pv</i> - the present value, or the lump-sum amount that a series of future payments is worth right now;</li> <li><i>fv</i> - optional, the future value, 0 by default;</li> <li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li> </ul></td>
            <td>Gibt die Anzahl der Perioden einer Investition auf Basis periodischer, gleichbleibender Zahlungen und eines konstanten Zinssatzes zuruck.<br></td>
        </tr>
        <tr>
            <td><b>NPV</b></td>
            <td>=NPV(rate,value1,[value2],...), <br><br> where: <ul> <li><i>rate</i> - the rate of discount over one year;</li> <li><i>value1, value2,...</i> - from 1 to 254 values representing cash flows (future payments and income).<br>Empty cells, logical values, text, or error values are ignored.</li> </ul></td>
            <td>Berechnet den Nettogegenwartswert einer Investition anhand eines Abzinsungssatzes sowie einer Reihe kunftiger Zahlungen (negative Werte) und Einnahmen (positive Werte).</td>
        </tr>
        <tr>
            <td><b>OCT2BIN</b><br>added in v4.3</td>
            <td>=OCT2BIN(number), <br><br> where: <ul> <li><i>number</i> - the octal number you want to convert. It can't contain more than 10 characters;</li></ul></td>
            <td>Konvertiert eine Oktalzahl in eine Binardarstellung.</td>
        </tr>
        <tr>
            <td><b>OCT2DEC</b><br>added in v4.3</td>
            <td>=OCT2DEC(number), <br><br> where: <ul> <li><i>number</i> - the octal number you want to convert. Number may not contain more than 10 octal characters (30 bits)</li> </ul></td>
            <td>Konvertiert eine Oktalzahl in eine Dezimaldarstellung.</td>
        </tr>
        <tr>
            <td><b>OCT2HEX</b><br>added in v4.3</td>
            <td>=OCT2HEX(number), <br><br> where: <ul> <li><i>number</i> - the octal number you want to convert. Number may not contain more than 10 octal characters (30 bits)</li> </ul></td>
            <td>Konvertiert eine Oktalzahl in eine Hexadezimaldarstellung.</td>
        </tr>
        <tr>
            <td><b>PDURATION</b></td>
            <td>=PDURATION(rate, pv, fv), <br><br>where: <ul> <li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>pv</i> - the present value of the investment;</li> <li><i>fv</i> - the desired future value of the investment.</li> </ul><br> All arguments must be positive values.</td>
            <td>Gibt die Anzahl der Perioden zuruck, die eine Investition benotigt, um einen bestimmten Wert zu erreichen.<br></td>
        </tr>
        <tr>
            <td><b>PERCENTILE</b><br>added in v4.3</td>
            <td>=PERCENTILE(array, k), <br><br> where: <ul> <li><i>array</i> - an array of data values;</li> <li><i>k</i> - the percentile value between 0 and 1, inclusive.</li> </ul></td>
            <td>Gibt das k-te Perzentil der Werte in einem Bereich zuruck.</td>
        </tr>
        <tr>
            <td><b>PERCENTILE.EXC</b><br>added in v4.3</td>
            <td>=PERCENTILE.EXC(array, k), <br><br> where: <ul> <li><i>array</i> - an array of data values;</li> <li><i>k</i> - the percentile value between 0 and 1, exclusive.</li> </ul></td>
            <td>Gibt das k-te Perzentil der Werte in einem Bereich zuruck.</td>
        </tr>
        <tr>
            <td><b>PERCENTILE.INC</b><br>added in v4.3</td>
            <td>=PERCENTILE.INC(array, k), <br><br> where: <ul> <li><i>array</i> - an array of data values;</li> <li><i>k</i> - the percentile value between 0 and 1, inclusive.</li> </ul></td>
            <td>Gibt das k-te Perzentil der Werte in einem Bereich zuruck.</td>
        </tr>
        <tr>
            <td><b>PERMUT</b><br>added in v4.3</td>
            <td>=PERMUT(number, number_chosen), <br><br> where: <ul> <li><i>number</i> - the total number of items;</li> <li><i>number_chosen</i> - the number of items in each combination.</li> </ul></td>
            <td>Gibt die Anzahl der Permutationen fur eine bestimmte Anzahl von Elementen zuruck.</td>
        </tr>
        <tr>
            <td><b>PMT</b></td>
            <td>=PMT(rate, nper, pv, [fv], [type]), <br><br> where: <ul> <li><i>rate</i> - the interest rate for the loan. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>nper</i> - the total number of months of payments for the loan. For monthly payments, <i>nper</i>=nper*12;</li> <li><i>pv</i> - the present value (or the current total amount of loan);</li> <li><i>fv</i> - optional, the future value, 0 by default;</li> <li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li> </ul></td>
            <td>Berechnet die monatliche Zahlung fur ein Darlehen auf Basis gleichbleibender Zahlungen und eines konstanten Zinssatzes.</td>
        </tr>
        <tr>
            <td><b>PPMT</b></td>
            <td>=PPMT(rate, per, nper, pv, [fv], [type]), <br><br>where: <ul><li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>per</i> - the period for which you want to find the interest and must be in the range between 1 and nper;</li> <li><i>nper</i> - the total number of payment years in an annuity. For monthly payments, <i>nper</i>=nper*12;</li> <li><i>pv</i> - the present value - the total amount that a series of future payments is worth now;</li> <li><i>fv</i> - the desired future value or a cash balance.</li> <li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li> </ul></td>
            <td>Gibt die Tilgungszahlung fur einen bestimmten Zeitraum einer Investition auf Basis periodischer, gleichbleibender Zahlungen und eines konstanten Zinssatzes zuruck. <br></td>
        </tr>
        <tr>
            <td><b>PV</b></td>
            <td>=PV(rate, nper, pmt, [fv], [type]), <br><br>where: <ul> <li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li> <li><i>nper</i> - the total number of payment years in an annuity. For monthly payments, <i>nper</i>=nper*12;</li> <li><i>pmt</i> - the payment made each period. If <i>pmt</i> is omitted, you must include the <i>fv</i> argument;</li> <li><i>fv</i> - optional, the desired future value or a cash balance.</li> <li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li> </ul></td>
            <td>Gibt den Barwert eines Darlehens oder einer Investition auf Basis eines konstanten Zinssatzes zuruck.<br></td>
        </tr>
        <tr>
            <td><b>QUARTILE</b><br>added in v4.3</td>
            <td>=QUARTILE(array, quart), <br><br> where: <ul> <li><i>array</i> - the array or cell range of numeric values;</li> <li><i>quart</i> - indicates which value to return (<a href="https://support.microsoft.com/en-us/office/quartile-function-93cf8f62-60cd-4fdb-8a92-8451041e1a2a">0-4</a>).</li> </ul></td>
            <td>Gibt das Quartil eines Datensatzes zuruck.</td>
        </tr>
        <tr>
            <td><b>QUARTILE.EXC</b><br>added in v4.3</td>
            <td>=QUARTILE(array, quart), <br><br> where: <ul> <li><i>array</i> - the array or cell range of numeric values;</li> <li><i>quart</i> - indicates which value to return (1-3).</li> </ul></td>
            <td>Gibt das Quartil des Datensatzes zuruck, basierend auf Perzentilwerten von 0..1 (exklusiv).</td>
        </tr>
        <tr>
            <td><b>QUARTILE.INC</b><br>added in v4.3</td>
            <td>=QUARTILE.INC(array, quart), <br><br> where: <ul> <li><i>array</i> - the array or cell range of numeric values;</li> <li><i>quart</i> - indicates which value to return (0-4).</li> </ul></td>
            <td>Gibt das Quartil eines Datensatzes zuruck, basierend auf Perzentilwerten von 0..1 (inklusiv).</td>
        </tr>
        <tr>
            <td><b>SIGN</b><br>added in v4.3</td>
            <td>=SIGN(number), <br><br> where: <ul> <li><i>number</i> - any real number</li> </ul></td>
            <td>Bestimmt das Vorzeichen einer Zahl. Gibt 1 zuruck, wenn die Zahl positiv ist, 0, wenn die Zahl 0 ist, und -1, wenn die Zahl negativ ist.</td>
        </tr>
        <tr>
            <td><b>SMALL</b><br>added in v4.3</td>
            <td>=SMALL(array, k), <br><br> where: <ul> <li><i>array</i> - an array or range of numeric values;</li> <li><i>k</i> - the position (from 1 - the smallest value) in the data set.</li> </ul></td>
            <td>Gibt den k-kleinsten Wert anhand seiner Position im Datensatz zuruck.</td>
        </tr>
        <tr>
            <td><b>STEYX</b><br>added in v4.3</td>
            <td>=STEYX(known_y's, known_x's), <br><br> where: <ul> <li><i>known_y's</i> - an array or range of dependent data points;</li> <li><i>known_x's</i> - an array or range of independent data points.</li> </ul><br>Text, logical values, or empty cells are ignored. Zero values are included.</td>
            <td>Gibt den Standardfehler des vorhergesagten y-Werts fur jeden x-Wert in der Regression zuruck.</td>
        </tr>
        <tr>
            <td><b>SYD</b><br>added in v4.3</td>
            <td>=SYD(cost, salvage, life, per), <br><br> where: <ul> <li><i>cost</i> - the initial cost of the asset;</li> <li><i>salvage</i> - the asset value at the end of the depreciation;</li> <li><i>life</i> - the number of periods over which the asset is depreciated;</li> <li><i>per</i> - the period and must use the same units as life.</li> </ul></td>
            <td>Gibt die Abschreibung eines Anlageguts fur einen bestimmten Zeitraum nach der Jahressummen-Methode zuruck.</td>
        </tr>
        <tr>
            <td><b>TBILLPRICE</b><br>added in v4.3</td>
            <td>=TBILLPRICE(settlement, maturity, discount), <br><br> where: <ul> <li><i>settlement</i> - the settlement date of the Treasury bill;</li> <li><i>maturity</i> - the maturity date of the Treasury bill;</li> <li><i>discount</i> - the Treasury bill's percentage discount rate.</li> </ul></td>
            <td>Gibt den Preis je $100 Nennwert fur einen Schatzwechsel zuruck.</td>
        </tr>
        <tr>
            <td><b>TBILLYIELD</b><br>added in v4.3</td>
            <td>=TBILLYIELD(settlement, maturity, pr), <br><br> where: <ul> <li><i>settlement</i> - the settlement date of the Treasury bill;</li> <li><i>maturity</i> - the maturity date of the Treasury bill;</li> <li><i>pr</i> - the Treasury bill's price per $100 face value.</li> </ul></td>
            <td>Gibt die Rendite eines Schatzwechsels zuruck.</td>
        </tr>
        <tr>
            <td><b>WEIBULL</b><br>added in v4.3</td>
            <td>=WEIBULL(x, alpha, beta, cumulative), <br><br> where: <ul> <li><i>x</i> - the value at which the function must be calculated (must be ≥ 0);</li> <li><i>alpha</i> - the alpha parameter to the distribution (must be > 0);</li> <li><i>beta</i> - the beta parameter to the distribution (must be > 0);</li> <li><i>cumulative</i> - the logical (true/false) argument which defines the type of distribution to be used. If True - Weibull cumulative distribution function, if False - Weibull probability density function </li> </ul></td>
            <td>Gibt die Weibull-Verteilung zuruck.</td>
        </tr>
        <tr>
            <td><b>WEIBULL.DIST</b><br>added in v4.3</td>
            <td>=WEIBULL(x, alpha, beta, cumulative), <br><br> where: <ul> <li><i>x</i> - the value at which the function must be calculated (must be ≥ 0);</li> <li><i>alpha</i> - the alpha parameter to the distribution (must be > 0);</li> <li><i>beta</i> - the beta parameter to the distribution (must be > 0);</li> <li><i>cumulative</i> - the logical (true/false) argument which defines the type of distribution to be used. If True - Weibull cumulative distribution function, if False - Weibull probability density function </li> </ul></td>
            <td>Gibt die Weibull-Verteilung zuruck.</td>
        </tr>
    </tbody>
</table>

Sehen Sie sich das Beispiel in unserem [Snippet-Tool](https://snippet.dhtmlx.com/wux2b35b) an.
### Informationsfunktionen {#information-functions}

<table>
    <tbody>
        <tr>
            <td><b>Funktion</b></td>
            <td><b>Formel</b></td>
            <td><b>Beschreibung</b></td>
        </tr>
        <tr>
            <td><b>ISBINARY</b></td>
            <td>=ISBINARY(value)</td>
            <td>Gibt TRUE zurück, wenn der Wert binär ist; andernfalls wird FALSE zurückgegeben.</td>
        </tr>
        <tr>
            <td><b>ISBLANK</b></td>
            <td>=ISBLANK(A1)</td>
            <td>Gibt TRUE zurück, wenn eine Zelle leer ist; andernfalls wird FALSE zurückgegeben.</td>
        </tr>
        <tr>
            <td><b>ISEVEN</b></td>
            <td>=ISEVEN(number)</td>
            <td>Gibt TRUE zurück, wenn eine Zahl gerade ist, oder FALSE, wenn die Zahl ungerade ist. <br>Funktioniert mit ganzen Zahlen.</td>
        </tr>
        <tr>
            <td><b>ISNONTEXT</b></td>
            <td>=ISNONTEXT(value)</td>
            <td>Gibt TRUE zurück, wenn eine Zelle einen beliebigen Wert außer Text enthält; andernfalls wird FALSE zurückgegeben.</td>
        </tr>
        <tr>
            <td><b>ISNUMBER</b></td>
            <td>=ISNUMBER(value)</td>
            <td>Gibt TRUE zurück, wenn eine Zelle eine Zahl enthält; andernfalls wird FALSE zurückgegeben.</td>
        </tr>
        <tr>
            <td><b>ISODD</b></td>
            <td>=ISODD(number)</td>
            <td>Gibt TRUE zurück, wenn eine Zahl ungerade ist, oder FALSE, wenn die Zahl gerade ist. <br>Funktioniert mit ganzen Zahlen.</td>
        </tr>
        <tr>
            <td><b>ISTEXT</b></td>
            <td>=ISTEXT(value)</td>
            <td>Gibt TRUE zurück, wenn ein Wert Text ist; andernfalls wird FALSE zurückgegeben.</td>
        </tr>
        <tr>
            <td><b>N</b></td>
            <td>=N(value)</td>
            <td>Gibt einen in eine Zahl konvertierten Wert zurück.</td>
        </tr>
    </tbody>
</table>
<br>

Sehen Sie sich das Beispiel in unserem [Snippet-Tool](https://snippet.dhtmlx.com/wux2b35b) an.

### Nachschlagefunktionen {#lookup-functions}

<table>
    <tbody>
        <tr>
            <td><b>Funktion</b></td>
            <td><b>Formel</b></td>
            <td><b>Beschreibung</b></td>
        </tr>
        <tr>
            <td><b>HLOOKUP</b><br>added in v4.3</td>
            <td>=HLOOKUP(lookup_value, table_array, row_index, [range_lookup]), <br><br> where: <ul> <li><i>lookup_value</i> - the value to search for;</li> <li><i>table_array</i> - the table from which to retrieve a value;</li> <li><i>column_index_num</i> - the row number in the table from which to retrieve a value;</li> <li><i>range_lookup</i> -  optional (1 by default):<br>0 - exact match, 1 - approximate match</li> </ul></td>
            <td>Sucht einen Wert in einer horizontalen Tabelle.</td>
        </tr>
        <tr>
            <td><b>INDEX</b><br>added in v4.3</td>
            <td>=INDEX(array, row_num, [column_num]), <br><br> where: <ul> <li><i>array</i> - a range of cells or an array constant;</li> <li><i>row_num</i> - the row position in the reference or array;</li> <li><i>column_num</i> - optional, the column position in the reference or array.</li> </ul></td>
            <td>Gibt den Wert an einer bestimmten Position in einem Bereich oder Array zurück.</td>
        </tr>
        <tr>
            <td><b>LOOKUP</b><br>added in v4.3</td>
            <td>=LOOKUP(lookup_value, lookup_vector, [result_vector]), <br><br> where: <ul> <li><i>lookup_value</i> - the value to search for;</li> <li><i>lookup_vector</i> - the one-row, or one-column range to search;</li> <li><i>result_vector</i> - optional, the one-row, or one-column range of results.</li> </ul></td>
            <td>Sucht einen Wert in einem einzeiligen oder einspaltigen Bereich und gibt einen Wert aus der gleichen Position in einem anderen einzeiligen oder einspaltigen Bereich zurück.</td>
        </tr>
        <tr>
            <td><b>MATCH</b><br>added in v4.3</td>
            <td>=MATCH(lookup_value, lookup_array, [match_type]), <br><br> where: <ul> <li><i>lookup_value</i> - the value that you want to match in <i>lookup_array</i>;</li> <li><i>lookup_array</i> - the range of cells;</li> <li><i>match_type</i> - optional (1 by default):<br>1- finds the largest value that is less than or equal to <i>lookup_value</i><br>0 - finds the value that is exactly equal to <i>lookup_value</i><br>-1 - finds the smallest value that is greater than or equal to <i>lookup_value</i></li> </ul></td>
            <td>Sucht ein bestimmtes Element in einem Zellbereich und gibt die relative Position dieses Elements im Bereich zurück.</td>
        </tr>
        <tr>
            <td><b>VLOOKUP</b><br>added in v4.3</td>
            <td>=VLOOKUP(lookup_value, table_array, column_index_num, [range_lookup]), <br><br> where: <ul> <li><i>lookup_value</i> - the value to search for in the first column of a table;</li> <li><i>table_array</i> - the table from which to retrieve a value;</li> <li><i>column_index_num</i> - the column number in the table from which to retrieve a value;</li> <li><i>range_lookup</i> -  optional (1 by default):<br>0 - exact match, 1 - approximate match</li> </ul></td>
            <td>Sucht einen Wert in einer vertikalen Tabelle anhand der ersten Spalte.</td>
        </tr>
        <tr>
            <td><b>XLOOKUP</b><br>added in v4.3</td>
            <td>=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode]), <br><br> where: <ul> <li><i>lookup_value</i> - the value to search for;</li> <li><i>lookup_array</i> - the array or range to search;</li> <li><i>return_array</i> - the array or range to return;</li> <li><i>if_not_found</i> - optional, if a valid match is not found, returns the [if_not_found] text you supply;</li> <li><i>match_mode</i> -  optional (0 by default):<br>0 - Exact match<br>-1 - Exact match. If not found, returns the next smaller item<br>1 - Exact match. If not found, returns the next larger item</li> </ul></td>
            <td>Durchsucht einen Bereich oder ein Array und gibt das Element zurück, das der ersten gefundenen Übereinstimmung entspricht. Wenn keine Übereinstimmung gefunden wird, kann XLOOKUP den nächstliegenden (ungefähren) Treffer zurückgeben.</td>
        </tr>
        <tr>
            <td><b>XMATCH</b><br>added in v4.3</td>
            <td>=XMATCH(lookup_value, lookup_array, [match_mode]), <br><br> where: <ul> <li><i>lookup_value</i> - the value that you want to match in <i>lookup_array</i>;</li> <li><i>lookup_array</i> - the range of cells;</li> <li><i>match_mode</i> - optional, 0 - exact match (default), -1 - exact match or next smallest, 1 - exact match or next larger</li> </ul></td>
            <td>Führt eine Suche durch und gibt eine Position in vertikalen oder horizontalen Bereichen zurück.</td>
        </tr>
    </tbody>
</table>
<br>
### Mathematische Funktionen {#math-functions}

<table> 
    <tbody>
        <tr>
            <td><b>ABS</b></td>
            <td>Gibt den absoluten Wert einer Zahl zurück. Der absolute Wert einer Zahl ist immer positiv.</td>
        </tr>
        <tr>
            <td><b>ACOS</b></td>
            <td>Gibt den Arkuskosinus (inversen Kosinus) einer Zahl zurück. Der Arkuskosinus ist der Winkel, dessen Kosinus <i>number</i> ist. Die Zahl muss zwischen -1 und 1 (einschließlich) liegen. Der zurückgegebene Winkel wird in Radiant im Bereich von 0 (null) bis pi angegeben.</td>
        </tr>
        <tr>
            <td><b>ACOSH</b></td>
            <td>Gibt den inversen hyperbolischen Kosinus einer Zahl zurück. Die Zahl muss größer oder gleich 1 sein.</td>
        </tr>
        <tr>
            <td><b>ACOT</b></td>
            <td>Gibt den Hauptwert des Arkuskotangens (inversen Kotangens) einer Zahl zurück. Der zurückgegebene Winkel wird in Radiant im Bereich von 0 (null) bis pi angegeben.</td>
        </tr>
        <tr>
            <td><b>ACOTH</b></td>
            <td>Gibt den inversen hyperbolischen Kotangens einer Zahl zurück. Der absolute Wert der Zahl muss größer als 1 sein.</td>
        </tr>
        <tr>
            <td><b>ADD</b></td>
            <td>Gibt die Summe zweier Werte zurück. <br>Leere Zellen, logische Werte wie TRUE oder Text werden ignoriert.</td>
        </tr>
        <tr>
            <td><b>ARABIC</b></td>
            <td>Konvertiert eine römische Zahl in eine arabische Zahl.</td>
        </tr>
        <tr>
            <td><b>ASIN</b></td>
            <td>Gibt den Arkussinus (inversen Sinus) einer Zahl zurück. Der Arkussinus ist der Winkel, dessen Sinus <i>number</i> ist. Die Zahl muss zwischen -1 und 1 (einschließlich) liegen. Der zurückgegebene Winkel wird in Radiant im Bereich von -pi/2 bis pi/2 angegeben.</td>
        </tr>
        <tr>
            <td><b>ASINH</b></td>
            <td>Gibt den inversen hyperbolischen Sinus einer Zahl zurück. Der inverse hyperbolische Sinus ist der Wert, dessen hyperbolischer Sinus <i>number</i> ist. Arbeitet mit reellen Zahlen.</td>
        </tr>
        <tr>
            <td><b>ATAN</b></td>
            <td>Gibt den Arkustangens (inversen Tangens) einer Zahl zurück. Der Arkustangens ist der Winkel, dessen Tangens <i>number</i> ist. Der zurückgegebene Winkel wird in Radiant im Bereich von -pi/2 bis pi/2 angegeben. Arbeitet mit dem Tangens des gewünschten Winkels.</td>
        </tr>
        <tr>
            <td><b>ATAN2</b></td>
            <td>Gibt den Arkustangens der (x,y)-Koordinaten zurück. Der Arkustangens wird in Radiant zwischen -pi und pi (ausschließlich -pi) zurückgegeben.</td>
        </tr>
        <tr>
            <td><b>ATANH</b></td>
            <td>Gibt den inversen hyperbolischen Tangens einer Zahl zurück. Die Zahl muss zwischen -1 und 1 liegen (ausschließlich -1 und 1). Arbeitet mit reellen Zahlen.</td>
        </tr>
        <tr>
            <td><b>AVEDEV</b><br>added in v4.3</td>
            <td>Gibt den Durchschnitt der absoluten Abweichungen der Datenpunkte von ihrem Mittelwert zurück.<br> Leere Zellen, logische Werte, Text oder Fehlerwerte im Array oder Bezug werden ignoriert. Zellen mit dem Wert 0 werden einbezogen.</td>
        </tr>
        <tr>
            <td><b>AVERAGE</b></td>
            <td>Berechnet den Durchschnitt (arithmetisches Mittel) einer Gruppe von Zahlen. <br>Logische Werte, leere Zellen und Zellen mit Text im Array oder Bezug werden ignoriert. <br>Zellen mit dem Wert null werden jedoch einbezogen.</td>
        </tr>
        <tr>
            <td><b>AVERAGEA</b><br>added in v4.3</td>
            <td>Berechnet den Durchschnitt (arithmetisches Mittel) der Werte in der Argumentliste. <br>Argumente können Folgendes sein: Zahlen; Namen, Arrays oder Bezüge, die Zahlen enthalten; Textdarstellungen von Zahlen oder logische Werte wie TRUE und FALSE in einem Bezug.<br>Leere Zellen und Textwerte im Array oder Bezug werden ignoriert.</td>
        </tr>
        <tr>
            <td><b>AVERAGEIF</b><br>added in v6.0</td>
            <td>Gibt den Durchschnitt (arithmetisches Mittel) aller Zellen in einem Bereich zurück, die eine bestimmte Bedingung erfüllen. <br>Erwartet zwei erforderliche Argumente (den auszuwertenden Bereich und das Kriterium) sowie ein optionales Argument (den zu mittelnden Zellbereich, sofern er vom ausgewerteten Bereich abweicht).</td>
        </tr>
        <tr>
            <td><b>AVERAGEIFS</b><br>added in v6.0</td>
            <td>Gibt den Durchschnitt (arithmetisches Mittel) aller Zellen zurück, die mehrere Bedingungen erfüllen. <br>Erwartet einen erforderlichen Mittelwertbereich, gefolgt von einem oder mehreren Paaren aus Bedingungsbereich und Kriteriumsargument.</td>
        </tr>
        <tr>
            <td><b>BASE</b></td>
            <td>Konvertiert eine Zahl in die angegebene Basis (Radix). <br>Die Zahl muss eine ganze Zahl sein, die größer oder gleich 0 und kleiner als 2^53 ist.<br>Die Basisradix gibt an, in welche Basis die Zahl konvertiert werden soll. Sie muss eine ganze Zahl von 2 bis 36 (einschließlich) sein.</td>
        </tr>
        <tr>
            <td><b>BITAND</b><br>added in v4.3</td>
            <td>Gibt ein bitweises "AND" zweier Zahlen zurück.<br>Die Zahl muss eine ganze Zahl sein, die größer oder gleich 0 und kleiner als (2^48)-1 ist.</td>
        </tr>
        <tr>
            <td><b>CEILING</b></td>
            <td>Gibt eine Zahl zurück, die auf die nächste ganze Zahl oder das nächste Vielfache der angegebenen Signifikanz aufgerundet wurde.</td>
        </tr>
        <tr>
            <td><b>COMBIN</b></td>
            <td>Gibt die Anzahl der Kombinationen für zwei gegebene ganzzahlige Zahlen zurück: die Anzahl der Elemente (<i>number</i>) und die Anzahl der Elemente in jeder Kombination (<i>number_chosen</i>): <ul><li><i>number</i> muss größer oder gleich null sein; außerdem muss sie größer oder gleich number_chosen sein;</li><li><i>number_chosen</i> muss größer oder gleich null sein.</li></ul></td>
        </tr>
        <tr>
            <td><b>COMBINA</b></td>
            <td>Gibt die Anzahl der Kombinationen für zwei gegebene ganzzahlige Zahlen zurück und berücksichtigt dabei Wiederholungen. Die Zahlen sind: die Anzahl der Elemente (<i>number</i>) und die Anzahl der Elemente in jeder Kombination (<i>number_chosen</i>): <ul><li><i>number</i> muss größer oder gleich null sein; außerdem muss sie größer oder gleich number_chosen sein;</li><li><i>number_chosen</i> muss größer oder gleich null sein.</li></ul></td>
        </tr>
        <tr>
            <td><b>COS</b></td>
            <td>Gibt den Kosinus eines in Radiant angegebenen Winkels zurück.</td>
        </tr>
        <tr>
            <td><b>COSH</b></td>
            <td>Gibt den hyperbolischen Kosinus einer reellen Zahl zurück.</td>
        </tr>
        <tr>
            <td><b>CSC</b></td>
            <td>Gibt den Kosekans eines in Radiant angegebenen Winkels zurück.</td>
        </tr>
        <tr>
            <td><b>CSCH</b></td>
            <td>Gibt den hyperbolischen Kosekans eines in Radiant angegebenen Winkels zurück.</td>
        </tr>
        <tr>
            <td><b>COT</b></td>
            <td>Gibt den Kotangens eines in Radiant angegebenen Winkels zurück.</td>
        </tr>
        <tr>
            <td><b>COTH</b></td>
            <td>Gibt den hyperbolischen Kotangens eines hyperbolischen Winkels zurück.</td>
        </tr>
        <tr>
            <td><b>COUNT</b></td>
            <td>Zählt die Anzahl der Zellen, die Zahlen enthalten, sowie Zahlen in der Argumentliste.<br> Leere Zellen, logische Werte, Text oder Fehlerwerte im Array oder Bezug werden nicht gezählt.</td>
        </tr>
        <tr>
            <td><b>COUNTA</b></td>
            <td>Zählt die Anzahl der Zellen, die Zahlen, Text, logische Werte, Fehlerwerte und leeren Text ("") enthalten; Zellen mit dem Wert null werden ausgeschlossen. <br>Die Funktion zählt keine leeren Zellen.</td>
        </tr>
        <tr>
            <td><b>COUNTBLANK</b></td>
            <td>Gibt die Anzahl der leeren Zellen in einem angegebenen Bereich zurück. <br>Zellen mit dem Wert null werden nicht gezählt.</td>
        </tr>
        <tr>
            <td><b>COUNTIF</b><br>added in v6.0</td>
            <td>Zählt die Anzahl der Zellen in einem Bereich, die die angegebene Bedingung erfüllen. <br>Erwartet zwei Argumente: den auszuwertenden Zellbereich und das Kriterium, das festlegt, welche Zellen gezählt werden.</td>
        </tr>
        <tr>
            <td><b>COUNTIFS</b><br>added in v6.0</td>
            <td>Zählt die Anzahl der Zellen, die mehrere Bedingungen erfüllen. <br>Erwartet ein oder mehrere Paare aus Bereich und Kriteriumsargument; es werden nur Zellen gezählt, die alle Bedingungen erfüllen.</td>
        </tr>
        <tr>
            <td><b>DECIMAL</b></td>
            <td>Konvertiert eine Textdarstellung einer Zahl in einer gegebenen Basis (Radix) in eine Dezimalzahl.<br>Die Basisradix muss eine ganze Zahl von 2 bis 36 (einschließlich) sein.</td>
        </tr>
        <tr>
            <td><b>DEGREES</b></td>
            <td>Konvertiert Radiant in Grad.</td>
        </tr>
        <tr>
            <td><b>DIVIDE</b></td>
            <td>Gibt das Ergebnis der Division einer Zahl durch eine andere zurück.</td>
        </tr>
        <tr>
            <td><b>EQ</b></td>
            <td>Gibt TRUE zurück, wenn das erste Argument gleich dem zweiten ist; andernfalls FALSE.</td>
        </tr>
        <tr>
            <td><b>EVEN</b></td>
            <td>Gibt eine Zahl zurück, die auf die nächste gerade ganze Zahl aufgerundet wurde.</td>
        </tr>
        <tr>
            <td><b>FACT</b></td>
            <td>Gibt die Fakultät einer Zahl zurück. Die Zahl muss von 1 bis n reichen. Ist die Zahl keine ganze Zahl, wird sie abgeschnitten.</td>
        </tr>
        <tr>
            <td><b>FACTDOUBLE</b></td>
            <td>Gibt die Doppelfakultät einer Zahl zurück. Die Zahl muss von 1 bis n reichen. Ist die Zahl keine ganze Zahl, wird sie abgeschnitten.</td>
        </tr>
        <tr>
            <td><b>FLOOR</b></td>
            <td>Rundet eine Zahl auf das nächste Vielfache der angegebenen Signifikanz in Richtung null ab. Die Signifikanz muss von 1 bis n reichen.<br>Ist das Vorzeichen der Zahl positiv, wird der Wert in Richtung null abgerundet. Ist das Vorzeichen der Zahl negativ, wird der Wert von null weg abgerundet.</td>
        </tr>
        <tr>
            <td><b>GCD</b></td>
            <td>Gibt den größten gemeinsamen Teiler von zwei oder mehr ganzen Zahlen zurück. Die Funktion akzeptiert 1 bis 255 numerische Werte, bei denen es sich um ganze Zahlen handeln sollte. Ist ein Wert keine ganze Zahl, wird er abgeschnitten.</td>
        </tr>
        <tr>
            <td><b>GT</b></td>
            <td>Gibt TRUE zurück, wenn das erste Argument größer als das zweite ist; andernfalls FALSE.</td>
        </tr>
        <tr>
            <td><b>GTE</b></td>
            <td>Gibt TRUE zurück, wenn das erste Argument größer oder gleich dem zweiten ist; andernfalls FALSE.</td>
        </tr>
        <tr>
            <td><b>INT</b></td>
            <td>Gibt eine Zahl zurück, die auf die nächste ganze Zahl abgerundet wurde.</td>
        </tr>
        <tr>
            <td><b>LN</b></td>
            <td>Gibt den natürlichen Logarithmus einer positiven reellen Zahl zurück.</td>
        </tr>
        <tr>
            <td><b>LOG</b></td>
            <td>Gibt den Logarithmus einer positiven reellen Zahl zur angegebenen Basis zurück. Wird die Basis weggelassen, wird 10 angenommen.</td>
        </tr>
        <tr>
            <td><b>LOG10</b></td>
            <td>Gibt den dekadischen Logarithmus (Basis 10) einer positiven reellen Zahl zurück.</td>
        </tr>
        <tr>
            <td><b>LT</b></td>
            <td>Gibt TRUE zurück, wenn das erste Argument kleiner als das zweite ist; andernfalls FALSE.</td>
        </tr>
        <tr>
            <td><b>LTE</b></td>
            <td>Gibt TRUE zurück, wenn das erste Argument kleiner oder gleich dem zweiten ist; andernfalls FALSE.</td>
        </tr>
        <tr>
            <td><b>MAX</b></td>
            <td>Gibt den größten Wert in einer Menge von Werten zurück. <br>Die Funktion ignoriert leere Zellen, die logischen Werte TRUE und FALSE sowie Textwerte. Enthalten die Argumente keine Zahlen, gibt MAX den Wert 0 (null) zurück.</td>
        </tr>
        <tr>
            <td><b>MAXIFS</b><br>added in v6.0</td>
            <td>Gibt den Maximalwert der Zellen zurück, die durch eine bestimmte Menge von Bedingungen angegeben werden. <br>Erwartet einen erforderlichen Maximalbereich, gefolgt von einem oder mehreren Paaren aus Bedingungsbereich und Kriteriumsargument.</td>
        </tr>
        <tr>
            <td><b>MIN</b></td>
            <td>Gibt den kleinsten Wert in einer Menge von Werten zurück. <br>Leere Zellen, logische Werte oder Text im Array oder Bezug werden ignoriert. Enthalten die Argumente keine Zahlen, gibt MIN den Wert 0 (null) zurück.</td>
        </tr>
        <tr>
            <td><b>MINIFS</b><br>added in v6.0</td>
            <td>Gibt den Minimalwert der Zellen zurück, die durch eine bestimmte Menge von Bedingungen angegeben werden. <br>Erwartet einen erforderlichen Minimalbereich, gefolgt von einem oder mehreren Paaren aus Bedingungsbereich und Kriteriumsargument.</td>
        </tr>
        <tr>
            <td><b>MINUS</b></td>
            <td>Gibt die Differenz zweier Zahlen zurück.</td>
        </tr>
        <tr>
            <td><b>MOD</b></td>
            <td>Gibt den Rest zurück, der nach der Division einer Zahl durch den Divisor verbleibt. Das Ergebnis hat dasselbe Vorzeichen wie der Divisor.</td>
        </tr>
        <tr>
            <td><b>MROUND</b></td>
            <td>Gibt eine Zahl zurück, die auf das nächste Vielfache der angegebenen Signifikanz gerundet wurde. Die Werte von <i>number</i> und <i>multiple</i> müssen dasselbe Vorzeichen haben.</td>
        </tr>
        <tr>
            <td><b>MULTINOMIAL</b></td>
            <td>Gibt das Verhältnis der Fakultät einer Summe von Werten zum Produkt der Fakultäten zurück. Die Funktion akzeptiert 1 bis 255 numerische Werte, die größer oder gleich 0 sein müssen.</td>
        </tr>
        <tr>
            <td><b>MULTIPLY</b></td>
            <td>Gibt das Ergebnis der Multiplikation zweier Zahlen zurück.</td>
        </tr>
        <tr>
            <td><b>NE</b></td>
            <td>Gibt TRUE zurück, wenn das erste Argument ungleich dem zweiten ist; andernfalls FALSE.</td>
        </tr>
        <tr>
            <td><b>ODD</b></td>
            <td>Gibt eine Zahl zurück, die auf die nächste ungerade ganze Zahl aufgerundet wurde.</td>
        </tr>
        <tr>
            <td><b>PI</b></td>
            <td>Gibt die Zahl 3,14159265358979 zurück (die mathematische Konstante Pi, genau auf 15 Stellen).</td>
        </tr>
        <tr>
            <td><b>POW</b></td>
            <td>Gibt das Ergebnis einer mit einer bestimmten Potenz potenzierten Zahl zurück. <br>Arbeitet mit reellen Zahlen.</td>
        </tr>
        <tr>
            <td><b>POWER</b></td>
            <td>Gibt das Ergebnis einer mit einer bestimmten Potenz potenzierten Zahl zurück. <br>Arbeitet mit reellen Zahlen.</td>
        </tr>
        <tr>
            <td><b>PRODUCT</b></td>
            <td>Multipliziert alle als Argumente übergebenen Zahlen und gibt das Produkt zurück.<br>
Es werden nur Zahlen im Array oder Bezug multipliziert. Leere Zellen, logische Werte und Text im Array oder Bezug werden ignoriert.</td>
        </tr>
        <tr>
            <td><b>QUOTIENT</b></td>
            <td>Gibt das Ergebnis der ganzzahligen Division ohne Rest zurück. <br>Arbeitet mit reellen Zahlen.</td>
        </tr>
        <tr>
            <td><b>RADIANS</b></td>
            <td>Konvertiert Grad in Radiant.</td>
        </tr>
        <tr>
            <td><b>RAND</b></td>
            <td>Gibt eine Zufallszahl zurück, die größer oder gleich 0 und kleiner als 1 ist. <br>Gibt bei jeder Neuberechnung der Tabelle eine neue Zufallszahl zurück.</td>
        </tr>
        <tr>
            <td><b>RANDBETWEEN</b></td>
            <td>Gibt eine Zufallszahl zwischen zwei angegebenen Zahlen zurück.<br>Gibt bei jeder Neuberechnung der Tabelle eine neue Zufallszahl zurück.</td>
        </tr>
        <tr>
            <td><b>ROMAN</b></td>
            <td>Konvertiert eine arabische Zahl in eine römische Zahl.</td>
        </tr>
        <tr>
            <td><b>ROUND</b></td>
            <td>Gibt eine Zahl zurück, die auf eine angegebene Anzahl von Stellen gerundet wurde.</td>
        </tr>
        <tr>
            <td><b>ROUNDDOWN</b></td>
            <td>Gibt eine Zahl zurück, die auf eine angegebene Anzahl von Stellen abgerundet wurde.</td>
        </tr>
        <tr>
            <td><b>ROUNDUP</b></td>
            <td>Gibt eine Zahl zurück, die auf eine angegebene Anzahl von Stellen aufgerundet wurde.</td>
        </tr>
        <tr>
            <td><b>SEC</b></td>
            <td>Gibt den Sekans eines in Radiant angegebenen Winkels zurück.<br>Arbeitet mit numerischen Werten.</td>
        </tr>
        <tr>
            <td><b>SECH</b></td>
            <td>Gibt den hyperbolischen Sekans eines in Radiant angegebenen Winkels zurück.<br>Arbeitet mit numerischen Werten.</td>
        </tr>
        <tr>
            <td><b>SIN</b></td>
            <td>Gibt den Sinus eines in Radiant angegebenen Winkels zurück.</td>
        </tr>
        <tr>
            <td><b>SINH</b></td>
            <td>Gibt den hyperbolischen Sinus einer reellen Zahl zurück.</td>
        </tr>
        <tr>
            <td><b>SQRT</b></td>
            <td>Gibt die positive Quadratwurzel einer Zahl zurück.</td>
        </tr>
        <tr>
            <td><b>SQRTPI</b></td>
            <td>Gibt die Quadratwurzel einer mit Pi multiplizierten Zahl zurück. Die Zahl muss größer oder gleich 0 sein.</td>
        </tr>
        <tr>
            <td><b>STDEV</b></td>
            <td>Berechnet die Standardabweichung auf Grundlage von Daten, die eine Stichprobe der Grundgesamtheit darstellen. <br>Die Standardabweichung ist ein Maß dafür, wie weit die Werte um den Durchschnittswert (Mittelwert) gestreut sind.<br>Leere Zellen, logische Werte, Text oder Fehlerwerte im Array oder Bezug werden ignoriert.</td>
        </tr>
        <tr>
            <td><b>STDEVA</b></td>
            <td>Berechnet die Standardabweichung auf Grundlage einer Stichprobe. <br>Die Standardabweichung ist ein Maß dafür, wie weit die Werte um den Durchschnittswert (Mittelwert) gestreut sind.<br>Leere Zellen und Textwerte im Array oder Bezug werden ignoriert.</td>
        </tr>
        <tr>
            <td><b>STDEVP</b></td>
            <td>Berechnet die Standardabweichung auf Grundlage der gesamten Grundgesamtheit der Zahlen. <br>Die Standardabweichung ist ein Maß dafür, wie weit die Werte um den Durchschnittswert (Mittelwert) gestreut sind.<br>Leere Zellen, logische Werte, Text oder Fehlerwerte im Array oder Bezug werden ignoriert.</td>
        </tr>
        <tr>
            <td><b>STDEVPA</b></td>
            <td>Berechnet die Standardabweichung auf Grundlage der gesamten als Argumente angegebenen Grundgesamtheit, einschließlich Text (wird als 0 ausgewertet) und logischer Werte (TRUE wird als 1, FALSE als 0 ausgewertet). <br>Die Standardabweichung ist ein Maß dafür, wie weit die Werte um den Durchschnittswert (Mittelwert) gestreut sind.<br>Ist ein Argument ein Array oder Bezug, werden nur Werte in diesem Array oder Bezug verwendet. Leere Zellen und Textwerte im Array oder Bezug werden ignoriert.<br> Fehlerwerte verursachen Fehler.</td>
        </tr>
        <tr>
            <td><b>STDEV.S</b><br>added in v4.3</td>
            <td>Schätzt die Standardabweichung auf Grundlage einer Stichprobe (logische Werte und Text in der Stichprobe werden ignoriert). <br>Die Standardabweichung ist ein Maß dafür, wie weit die Werte um den Durchschnittswert (Mittelwert) gestreut sind.<br>Ist ein Argument ein Array oder Bezug, werden nur Werte in diesem Array oder Bezug verwendet. Leere Zellen, logische Werte, Text oder Fehlerwerte im Array oder Bezug werden ignoriert.<br> Fehlerwerte verursachen Fehler.</td>
        </tr>
        <tr>
            <td><b>SUBTOTAL</b></td>
            <td>Gibt ein Teilergebnis in einer Liste oder Datenbank zurück.</td>
        </tr>
        <tr>
            <td><b>SUM</b></td>
            <td>Gibt die Summe der angegebenen Werte zurück. <br>Leere Zellen, logische Werte wie TRUE oder Text werden ignoriert.</td>
        </tr>
        <tr>
            <td><b>SUMIF</b><br>added in v6.0</td>
            <td>Addiert die Zellen in einem Bereich, die eine bestimmte Bedingung erfüllen. <br>Erwartet zwei erforderliche Argumente (den auszuwertenden Bereich und das Kriterium) sowie ein optionales Argument (den zu summierenden Zellbereich, sofern er vom ausgewerteten Bereich abweicht).</td>
        </tr>
        <tr>
            <td><b>SUMIFS</b><br>added in v6.0</td>
            <td>Addiert die Zellen in einem Bereich, die mehrere Bedingungen erfüllen. <br>Erwartet einen erforderlichen Summenbereich, gefolgt von einem oder mehreren Paaren aus Bedingungsbereich und Kriteriumsargument; in die Summe werden nur Zellen einbezogen, die alle Bedingungen erfüllen.</td>
        </tr>
        <tr>
            <td><b>SUMPRODUCT</b></td>
            <td>Multipliziert Zellbereiche oder Arrays und gibt die Summe der Produkte zurück. <br>Für gültige Produkte werden nur Zahlen multipliziert. <br>Leere Zellen, logische Werte und Text werden ignoriert. <br>Array-Einträge, die nicht numerisch sind, werden als null behandelt.</td>
        </tr>
        <tr>
            <td><b>SUMSQ</b></td>
            <td>Gibt die Summe der Quadrate der Argumente zurück. <br>Leere Zellen, logische Werte, Text oder Fehlerwerte im Array oder Bezug werden ignoriert.</td>
        </tr>
        <tr>
            <td><b>SUMX2MY2</b></td>
            <td>Gibt die Summe der Differenz der Quadrate entsprechender Werte in zwei Arrays zurück.<br>Die Argumente sollten entweder Zahlen oder Namen, Arrays oder Bezüge sein, die Zahlen enthalten.<br>Leere Zellen, logische Werte, Text oder Fehlerwerte im Array oder Bezug werden ignoriert. Nullwerte werden einbezogen.</td>
        </tr>
        <tr>
            <td><b>SUMX2PY2</b></td>
            <td>Gibt die Summe der Summe der Quadrate entsprechender Werte in zwei Arrays zurück.<br>Die Argumente sollten entweder Zahlen oder Namen, Arrays oder Bezüge sein, die Zahlen enthalten.<br>Leere Zellen, logische Werte, Text oder Fehlerwerte im Array oder Bezug werden ignoriert. Nullwerte werden einbezogen.</td>
        </tr>
        <tr>
            <td><b>SUMXMY2</b></td>
            <td>Gibt die Summe der Quadrate der Differenzen entsprechender Werte in zwei Arrays zurück.<br>Die Argumente sollten entweder Zahlen oder Namen, Arrays oder Bezüge sein, die Zahlen enthalten.<br>Leere Zellen, logische Werte, Text oder Fehlerwerte im Array oder Bezug werden ignoriert. Nullwerte werden einbezogen.</td>
        </tr>
        <tr>
            <td><b>TAN</b></td>
            <td>Gibt den Tangens eines in Radiant angegebenen Winkels zurück.</td>
        </tr>
        <tr>
            <td><b>TANH</b></td>
            <td>Gibt den hyperbolischen Tangens einer reellen Zahl zurück.</td>
        </tr>
        <tr>
            <td><b>TRUNC</b></td>
            <td>Schneidet eine Zahl auf eine ganze Zahl ab, indem der Nachkommateil der Zahl entfernt wird.</td>
        </tr>
        <tr>
            <td><b>VAR</b></td>
            <td>Gibt die Varianz auf Grundlage einer Stichprobe zurück.<br>Leere Zellen, logische Werte, Text oder Fehlerwerte im Array oder Bezug werden ignoriert.</td>
        </tr>
        <tr>
            <td><b>VARA</b></td>
            <td>Gibt die Varianz auf Grundlage einer Stichprobe der Grundgesamtheit zurück, einschließlich Text (wird als 0 ausgewertet) und logischer Werte (TRUE wird als 1, FALSE als 0 ausgewertet).<br>Leere Zellen und Textwerte im Array oder Bezug werden ignoriert.</td>
        </tr>
        <tr>
            <td><b>VARP</b></td>
            <td>Gibt die Varianz einer Grundgesamtheit auf Grundlage der gesamten Grundgesamtheit der Zahlen zurück.<br>Leere Zellen, logische Werte, Text oder Fehlerwerte im Array oder Bezug werden ignoriert.</td>
        </tr>
        <tr>
            <td><b>VARPA</b></td>
            <td>Gibt die Varianz einer Grundgesamtheit auf Grundlage der gesamten Grundgesamtheit zurück, einschließlich Text (wird als 0 ausgewertet) und logischer Werte (TRUE wird als 1, FALSE als 0 ausgewertet).<br>Leere Zellen und Textwerte im Array oder Bezug werden ignoriert.</td>
        </tr>
        <tr>
            <td><b>VAR.S</b><br>added in v4.3</td>
            <td>Gibt die Varianz auf Grundlage einer Stichprobe zurück (logische Werte und Text in der Stichprobe werden ignoriert).<br>Leere Zellen, logische Werte, Text oder Fehlerwerte im Array oder Bezug werden ignoriert.</td>
        </tr>
    </tbody>
</table>
<br>

Das Beispiel finden Sie in unserem [Snippet-Tool](https://snippet.dhtmlx.com/wux2b35b).
### Array-Funktionen {#array-functions}

Die folgenden Array-Funktionen wurden in v6.0 hinzugefügt.

<table>
    <tbody>
        <tr>
            <td><b>Funktion</b></td>
            <td><b>Formel</b></td>
            <td><b>Beschreibung</b></td>
        </tr>
        <tr>
            <td><b>CHOOSECOLS</b></td>
            <td>=CHOOSECOLS(array, col_num1, [col_num2], ...)</td>
            <td>Gibt die angegebenen Spalten aus einem Array oder Bereich zurück.</td>
        </tr>
        <tr>
            <td><b>CHOOSEROWS</b></td>
            <td>=CHOOSEROWS(array, row_num1, [row_num2], ...)</td>
            <td>Gibt die angegebenen Zeilen aus einem Array oder Bereich zurück.</td>
        </tr>
        <tr>
            <td><b>DROP</b></td>
            <td>=DROP(array, [rows], [columns])</td>
            <td>Entfernt eine bestimmte Anzahl von Zeilen oder Spalten vom Anfang oder Ende eines Arrays.</td>
        </tr>
        <tr>
            <td><b>EXPAND</b></td>
            <td>=EXPAND(array, [rows], [columns], [pad_with])</td>
            <td>Erweitert oder füllt ein Array auf die angegebenen Zeilen- und Spaltendimensionen auf.</td>
        </tr>
        <tr>
            <td><b>RANDARRAY</b></td>
            <td>=RANDARRAY([rows], [columns], [min], [max], [integer])</td>
            <td>Gibt standardmäßig ein Array mit Zufallszahlen zwischen 0 und 1 zurück. Sie können die Anzahl der zu füllenden Zeilen und Spalten, Minimal- und Maximalwerte sowie angeben, ob ganze Zahlen oder Dezimalwerte zurückgegeben werden sollen.</td>
        </tr>
        <tr>
            <td><b>SEQUENCE</b></td>
            <td>=SEQUENCE(rows, [columns], [start], [step])</td>
            <td>Erzeugt eine Liste aufeinanderfolgender Zahlen in einem Array, z. B. 1, 2, 3, 4.</td>
        </tr>
        <tr>
            <td><b>SORT</b></td>
            <td>=SORT(array, [sort_index], [sort_order], [by_col])</td>
            <td>Sortiert den Inhalt eines Bereichs oder Arrays. Standardmäßig wird nach der ersten Spalte in aufsteigender Reihenfolge sortiert.</td>
        </tr>
        <tr>
            <td><b>SORTBY</b></td>
            <td>=SORTBY(array, by_array, [sort_order], ...)</td>
            <td>Sortiert den Inhalt eines Bereichs oder Arrays anhand der Werte in einem entsprechenden Bereich oder Array.</td>
        </tr>
        <tr>
            <td><b>TAKE</b></td>
            <td>=TAKE(array, [rows], [columns])</td>
            <td>Gibt eine bestimmte Anzahl aufeinanderfolgender Zeilen oder Spalten vom Anfang oder Ende eines Arrays zurück.</td>
        </tr>
        <tr>
            <td><b>TEXTSPLIT</b></td>
            <td>=TEXTSPLIT(text, col_delimiter, [row_delimiter], [ignore_empty], [match_mode], [pad_with])</td>
            <td>Teilt eine Textzeichenfolge anhand der angegebenen Trennzeichen in Zeilen und Spalten auf.</td>
        </tr>
        <tr>
            <td><b>TOCOL</b></td>
            <td>=TOCOL(array, [ignore], [scan_by_column])</td>
            <td>Konvertiert ein Array oder einen Bereich in eine einzelne Spalte.</td>
        </tr>
        <tr>
            <td><b>TOROW</b></td>
            <td>=TOROW(array, [ignore], [scan_by_column])</td>
            <td>Konvertiert ein Array oder einen Bereich in eine einzelne Zeile.</td>
        </tr>
        <tr>
            <td><b>UNIQUE</b></td>
            <td>=UNIQUE(array, [by_col], [exactly_once])</td>
            <td>Gibt eine Liste eindeutiger Werte aus einem Bereich oder Array zurück.</td>
        </tr>
        <tr>
            <td><b>WRAPCOLS</b></td>
            <td>=WRAPCOLS(vector, wrap_count, [pad_with])</td>
            <td>Bricht einen Zeilen- oder Spaltenvektor nach einer bestimmten Anzahl von Werten spaltenweise in ein 2D-Array um.</td>
        </tr>
        <tr>
            <td><b>WRAPROWS</b></td>
            <td>=WRAPROWS(vector, wrap_count, [pad_with])</td>
            <td>Bricht einen Zeilen- oder Spaltenvektor nach einer bestimmten Anzahl von Werten zeilenweise in ein 2D-Array um.</td>
        </tr>
    </tbody>
</table>
<br>

Das Beispiel finden Sie in unserem [Snippet-Tool](https://snippet.dhtmlx.com/wux2b35b).
### Regex-Funktionen {#regex-functions}

<table>
    <tbody>
        <tr>
            <td><b>Funktion</b></td>
            <td><b>Formel</b></td>
            <td><b>Beschreibung</b></td>
        </tr>
        <tr>
            <td><b>REGEXREPLACE</b></td>
            <td>=REGEXREPLACE(text, regular_expression, replacement)</td>
            <td>Ersetzt einen Teil einer Textzeichenfolge durch eine andere Zeichenfolge mithilfe regulärer Ausdrücke.</td>
        </tr>
        <tr>
            <td><b>REGEXMATCH</b></td>
            <td>=REGEXMATCH(text, regular_expression)</td>
            <td>Gibt TRUE zurück, wenn eine Textzeichenfolge dem Muster des regulären Ausdrucks entspricht, andernfalls FALSE.</td>
        </tr>
        <tr>
            <td><b>REGEXEXTRACT</b></td>
            <td>=REGEXEXTRACT(text, regular_expression)</td>
            <td>Gibt den Teil der Zeichenfolge zurück, der dem Muster des regulären Ausdrucks entspricht.</td>
        </tr>
    </tbody>
</table>
<br>

Sehen Sie sich das Beispiel in unserem [Snippet-Tool](https://snippet.dhtmlx.com/wux2b35b) an.

### Zeichenfolgenfunktionen {#string-functions}

<table>
    <tbody>
        <tr>
            <td><b>Funktion</b></td>
            <td><b>Formel</b></td>
            <td><b>Beschreibung</b></td>
        </tr>
        <tr>
            <td><b>ARRAYTOTEXT</b><br>added in v4.3</td>
            <td>=ARRAYTOTEXT(array, [format])</td>
            <td>Gibt ein Array von Textwerten aus einem beliebigen angegebenen Bereich zurück, basierend auf dem angegebenen Format (0 - kompakt (Standard) oder 1 - striktes Format).</td>
        </tr>
        <tr>
            <td><b>CHAR</b></td>
            <td>=CHAR(number)</td>
            <td>Gibt das Zeichen zurück (aus dem von Ihrem Computer verwendeten Zeichensatz), das durch eine Zahl angegeben wird. Die Zahl muss zwischen 1 und 255 liegen.</td>
        </tr>
        <tr>
            <td><b>CLEAN</b></td>
            <td>=CLEAN(text)</td>
            <td>Entfernt Zeichen aus dem Text, die beim Drucken nicht angezeigt werden.</td>
        </tr>
        <tr>
            <td><b>CODE</b></td>
            <td>=CODE(text)</td>
            <td>Gibt einen numerischen Code für das erste Zeichen einer Textzeichenfolge zurück.</td>
        </tr>
        <tr>
            <td><b>CONCATENATE</b></td>
            <td>=CONCATENATE(A1,"",B2:C3)</td>
            <td>Verknüpft zwei oder mehr Textzeichenfolgen zu einer einzigen Zeichenfolge.</td>
        </tr>
        <tr>
            <td><b>DOLLAR</b></td>
            <td>=DOLLAR(number, decimals)</td>
            <td>Konvertiert eine Zahl in Text im Währungsformat, basierend auf der angegebenen Anzahl von Stellen rechts/links des Dezimalzeichens (standardmäßig 2).</td>
        </tr>
        <tr>
            <td><b>EXACT</b></td>
            <td>=EXACT(text1, text2)</td>
            <td>Vergleicht zwei Zeichenfolgen und gibt TRUE zurück, wenn sie identisch sind; andernfalls wird FALSE zurückgegeben.</td>
        </tr>
        <tr>
            <td><b>FIND</b></td>
            <td>=FIND(find_text, within_text, [start_num])</td>
            <td>Gibt die Position (als Zahl) einer Textzeichenfolge innerhalb einer anderen zurück, beginnend an der angegebenen Position (standardmäßig 1).</td>
        </tr>
        <tr>
            <td><b>FIXED</b></td>
            <td>=FIXED(number, [decimals], [no_commas])</td>
            <td>Rundet eine Zahl auf die angegebene Anzahl von Dezimalstellen, formatiert sie im Dezimalformat mit Punkt und Kommas und konvertiert das Ergebnis in Text. Wenn <i>no_commas</i> auf 1 gesetzt ist, enthält der zurückgegebene Text keine Kommas.</td>
        </tr>
        <tr>
            <td><b>JOIN</b></td>
            <td>=JOIN(separator, value1, value2,...)</td>
            <td>Verknüpft Werte mithilfe eines angegebenen Trennzeichens.</td>
        </tr>
        <tr>
            <td><b>LEFT</b></td>
            <td>=LEFT(text, count)</td>
            <td>Gibt das erste Zeichen oder die ersten Zeichen einer Textzeichenfolge zurück,<br> basierend auf der angegebenen Zeichenanzahl.</td>
        </tr>
        <tr>
            <td><b>LEN</b></td>
            <td>=LEN(text)</td>
            <td>Gibt die Länge der angegebenen Zeichenfolge zurück.</td>
        </tr>
        <tr>
            <td><b>LOWER</b></td>
            <td>=LOWER(text)</td>
            <td>Konvertiert alle Buchstaben der angegebenen Zeichenfolge in Kleinbuchstaben.</td>
        </tr>
        <tr>
            <td><b>MID</b></td>
            <td>=MID(text, start, count)</td>
            <td>Gibt eine bestimmte Anzahl von Zeichen aus einer Textzeichenfolge zurück,<br> beginnend an der angegebenen Position, basierend auf der<br>angegebenen Zeichenanzahl.</td>
        </tr>
        <tr>
            <td><b>NUMBERVALUE</b></td>
            <td>=NUMBERVALUE (text, [decimal_separator], [group_separator])</td>
            <td>Konvertiert eine Zahl im Textformat mithilfe der angegebenen Dezimal- und Gruppentrennzeichen in einen numerischen Wert.</td>
        </tr>
        <tr>
            <td><b>PROPER</b></td>
            <td>=PROPER(text)</td>
            <td>Setzt das erste Zeichen jedes Wortes auf Großbuchstaben<br>und konvertiert alle anderen Zeichen in Kleinbuchstaben.</td>
        </tr>
        <tr>
            <td><b>REPLACE</b><br>added in v4.3</td>
            <td>=REPLACE(old_text, start_num, num_chars, new_text), <br><br> where: <ul> <li><i>old_text</i> - the text in which you want to replace some characters;</li> <li><i>start_num</i> - the position of the character in <i>old_text</i> that you want to replace with new_text;</li> <li><i>num_chars</i> - the number of characters to be replaced in <i>old_text</i>;</li> <li><i>new_text</i> - the text that will replace characters in <i>old_text</i>.</li> </ul></td>
            <td>Ersetzt einen Teil einer Textzeichenfolge basierend auf der angegebenen Zeichenanzahl durch eine andere Textzeichenfolge.</td>
        </tr>
        <tr>
            <td><b>REPT</b></td>
            <td>=REPT(text, number_times)</td>
            <td>Wiederholt Text eine angegebene Anzahl von Malen.</td>
        </tr>
        <tr>
            <td><b>RIGHT</b></td>
            <td>=RIGHT(text, count)</td>
            <td>Gibt das letzte Zeichen oder die letzten Zeichen (ganz rechts) einer Textzeichenfolge zurück, <br>basierend auf der angegebenen Zeichenanzahl.</td>
        </tr>
        <tr>
            <td><b>SEARCH</b></td>
            <td>=SEARCH(find_text, within_text, [start_num])</td>
            <td>Gibt die Position (als Zahl) des ersten Zeichens von <i>find_text</i> innerhalb von <i>within_text</i> zurück, beginnend an der angegebenen Position (standardmäßig 1).</td>
        </tr>
        <tr>
            <td><b>SUBSTITUTE</b></td>
            <td>=SUBSTITUTE(text, old_text, new_text, [instance_num])</td>
            <td>Ersetzt alten Text durch neuen Text in einer Textzeichenfolge. Wenn <i>instance_num</i> angegeben wird, wird nur dieses Vorkommen von <i>old_text</i> ersetzt; andernfalls werden alle Vorkommen ersetzt.</td>
        </tr>
        <tr>
            <td><b>T</b></td>
            <td>=T(value)</td>
            <td>Gibt Text zurück, wenn ein Textwert übergeben wird, und eine leere Zeichenfolge ("") für Zahlen, Datumsangaben sowie die logischen Werte TRUE/FALSE.</td>
        </tr>
        <tr>
            <td><b>TRIM</b></td>
            <td>=TRIM(text)</td>
            <td>Entfernt alle Leerzeichen aus dem Text, mit Ausnahme einzelner Leerzeichen zwischen Wörtern.</td>
        </tr>
        <tr>
            <td><b>UPPER</b></td>
            <td>=UPPER(text)</td>
            <td>Konvertiert Text in Großbuchstaben.</td>
        </tr>
    </tbody>
</table>
<br>

Sehen Sie sich das Beispiel in unserem [Snippet-Tool](https://snippet.dhtmlx.com/wux2b35b) an.

### Weitere Funktionen {#other-functions}

<table>
    <tbody>
        <tr>
            <td><b>Funktion</b></td>
            <td><b>Beispiel</b></td>
            <td><b>Beschreibung</b></td>
        </tr>
        <tr>
            <td><b>AND</b></td>
            <td>=AND(logical1, [logical2], ...)</td>
            <td>Gibt TRUE oder FALSE zurück, je nachdem,<br> ob mehrere Bedingungen erfüllt sind oder nicht.</td>
        </tr>
        <tr>
            <td><b>CHOOSE</b></td>
            <td>=CHOOSE(index_num, value1, [value2], ...)</td>
            <td>Gibt einen Wert aus der Liste der Wertargumente basierend auf einer angegebenen Position oder einem Index zurück.</td>
        </tr>
        <tr>
            <td><b>FALSE</b></td>
            <td>=FALSE()</td>
            <td>Gibt den logischen Wert FALSE zurück.</td>
        </tr>
        <tr>
            <td><b>IF</b></td>
            <td>=IF(condition, [value_if_true], [value_if_false])</td>
            <td>Gibt einen Wert zurück, wenn eine Bedingung TRUE ist,<br> und einen anderen Wert, wenn sie FALSE ist.</td>
        </tr>
        <tr>
            <td><b>NOT</b></td>
            <td>=NOT(logical)</td>
            <td>Gibt das Gegenteil eines logischen oder booleschen Wertes zurück.</td>
        </tr>
        <tr>
            <td><b>OR</b></td>
            <td>=OR(logical1, [logical2], ...)</td>
            <td>Gibt TRUE zurück, wenn mindestens einer der logischen Ausdrücke TRUE ist; andernfalls FALSE.</td>
        </tr>
        <tr>
            <td><b>TRUE</b></td>
            <td>=TRUE()</td>
            <td>Gibt den logischen Wert TRUE zurück.</td>
        </tr>
    </tbody>
</table>
<br>

Sehen Sie sich das Beispiel in unserem [Snippet-Tool](https://snippet.dhtmlx.com/wux2b35b) an.

## Zellenformel abrufen {#getting-cell-formula}

Ab v4.1 können Sie die auf eine Zelle angewendete Formel mit der Methode [`getFormula()`](api/spreadsheet_getformula_method.md) abrufen. Die Methode nimmt die ID der Zelle als Parameter entgegen:

~~~js
var formula = spreadsheet.getFormula("B2");
// -> "ABS(C2)"
~~~

## Popup mit Formelbeschreibung {#popup-with-formula-description}

Wenn Sie eine Formel eingeben, wird ein Popup mit einer Beschreibung der Funktion und ihrer Parameter angezeigt.

![DHTMLX Spreadsheet formula popup showing a function description and parameters while typing](/img/formula_popup.png)

Sehen Sie sich das Beispiel in unserem [Snippet-Tool](https://snippet.dhtmlx.com/wux2b35b) an.

Sie können die Standard-Locale für das Popup mit Formelparametern anpassen und eine benutzerdefinierte Locale hinzufügen. Details finden Sie im Leitfaden zur [Lokalisierung](localization.md#default-locale-for-formulas).

## Benutzerdefinierte Formeln {#custom-formulas}

Ab v6.0 können Sie benutzerdefinierte Formelfunktionen mit der Methode [`addFormula()`](api/spreadsheet_addformula_method.md) registrieren. Nach der Registrierung ist die Formel in jeder Zelle unter ihrem Namen in Großbuchstaben verfügbar.

Die Methode nimmt zwei Parameter entgegen: den Formelnamen und eine synchrone Handler-Funktion, die die aufgelösten Zellwerte als Argumente erhält und das Ergebnis zurückgibt:

~~~js
spreadsheet.addFormula("DOUBLE", (value) => {
    return value * 2;
});
~~~

Anschließend können Sie die Formel in Zellen wie jede integrierte Funktion verwenden:

~~~js
spreadsheet.parse([
    { cell: "A1", value: 4, format: "number" },
    { cell: "B1", value: "=DOUBLE(A1)", format: "number" }
]);
~~~

:::note
Die Handler-Funktion muss synchron sein. Die Verwendung von `Promise` oder `fetch` innerhalb der Funktion ist nicht zulässig.
:::

**Verwandtes Beispiel:** [Spreadsheet. Benutzerdefinierte Formel hinzufügen](https://snippet.dhtmlx.com/wvxdlahp)
