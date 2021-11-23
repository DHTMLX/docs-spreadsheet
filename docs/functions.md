---
sidebar_label: Work with functions
title: Functions
description: You can learn about the functions of the DHTMLX JavaScript Spreadsheet library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# Work with functions

Starting from v4.0, the package of DHTMLX Spreadsheet includes a set of predefined formulas that can be used for different types of calculations of strings and numbers. The formulas are compatible with Excel and Google Sheets.

<iframe src="https://snippet.dhtmlx.com/wux2b35b?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>

## Functions

Here's a list of all the available functions with detailed descriptions.

### Boolean operators

You can compare two values via using logical expressions that in any given case will only return either TRUE or FALSE.

| Operator | Example       | Description                                                                                              |
| :------- | :------------ | :------------------------------------------------------------------------------------------------------- |
| =        | =A1=B1        | Returns TRUE if the value in cell A1 is equal to the value in cell B1; otherwise, FALSE.                 |
| &lt;&gt; | =A1&lt;&gt;B1 | Returns TRUE if the value in cell A1 is not equal to the value in cell B1; otherwise, FALSE.             |
| &gt;     | =A1&gt;B1     | Returns TRUE if the value in cell A1 is greater than the value in cell B1; otherwise, FALSE.             |
| &lt;     | =A1&lt;B1     | Returns TRUE if the value in cell A1 is less than the value in cell B1; otherwise, FALSE.                |
| &gt;=    | =A1&gt;=B1    | Returns TRUE if the value in cell A1 is greater than or equal to the value in cell B1; otherwise, FALSE. |
| &lt;=    | =A1&lt;=B1    | Returns TRUE if the value in cell A1 is less than or equal to the value in cell B1; otherwise, FALSE.    |

Check the example in our [snippet tool](https://snippet.dhtmlx.com/wux2b35b).

### Date functions

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
			<td>Combines three separate values (year, month, and day) and returns a date.</td>
		</tr>
		<tr>
			<td><b>DATEDIF</b></td>
			<td>=DATEDIF(start_date,end_date,unit)</td>
			<td>Returns the number of days, months, or years between two dates.<br> The <a href="https://support.microsoft.com/en-us/office/datedif-function-25dba1a4-2812-480b-84dd-8b32a451b35c">unit</a> argument is used to define which type of information you want returned.</td>
		</tr>
		<tr>
			<td><b>DATEVALUE</b></td>
			<td>=DATEVALUE(date_text)</td>
			<td>Converts a date that is stored as text to a serial number.</td>
		</tr>
		<tr>
			<td><b>DAY</b></td>
			<td>=DAY(date)</td>
			<td>Returns the day of the month as a number between 1 to 31 from a specified date.</td>
		</tr>
		<tr>
			<td><b>DAYS</b></td>
			<td>=DAYS(end_date, start_date)</td>
			<td>Returns the number of days between two dates.</td>
		</tr>
		<tr>
			<td><b>DAYS360</b></td>
			<td>=DAYS360(start_date,end_date,[method]])</td>
			<td>Returns the number of days between 2 dates, based on a 360-day year (twelve 30-days months).</td>
		</tr>
		<tr>
			<td><b>EDATE</b></td>
			<td>=EDATE(start_date, months)</td>
			<td>Returns the date on the same date of the month, n months in the past or future.</td>
		</tr>
		<tr>
			<td><b>EOMONTH</b></td>
			<td>=EOMONTH(start_date, months)</td>
			<td>Returns the date for the last day of the month, n months before or after the specified start date.</td>
		</tr>
		<tr>
			<td><b>ISOWEEKNUM</b></td>
			<td>=ISOWEEKNUM(date)</td>
			<td>Returns the number of the ISO week number of the year for the specified date.</td>
		</tr>
		<tr>
			<td><b>MONTH</b></td>
			<td>=MONTH(date)</td>
			<td>Returns the month of the year of the specified date.</td>
		</tr>
		<tr>
			<td><b>NETWORKDAYS</b></td>
			<td>=NETWORKDAYS(start_date, end_date, [holidays])</td>
			<td>Returns the number of whole working days between two dates. Working days exclude weekends and any dates specified in <i>holidays</i>.</td>
		</tr>
		<tr>
			<td><b>NETWORKDAYSINTL</b></td>
			<td>=NETWORKDAYSINTL(start_date, end_date, [weekend], [holidays])</td>
			<td>Returns the number of whole working days between two dates. <br>The optional <a href="https://support.microsoft.com/en-us/office/networkdays-intl-function-a9b26239-4f20-46a1-9ab8-4e925bfd5e28">weekend</a> parameter is used to specify which days of the week are considered weekends. <br><i>Weekend days</i> and <i>holidays</i> are not considered as workdays.</td>
		</tr>
		<tr>
			<td><b>NOW</b></td>
			<td>=NOW()</td>
			<td>Returns the current date.</td>
		</tr>
		<tr>
			<td><b>WEEKDAY</b></td>
			<td>=WEEKDAY(date,[return_type])</td>
			<td>Returns the day of the week for the specified date. <br>The <a href="https://support.microsoft.com/en-us/office/weekday-function-60e44483-2ed1-439f-8bd0-e404c190949a">return_type</a> argument is used to define which day of the week is considered the first day.</td>
		</tr>
		<tr>
			<td><b>WEEKNUM</b></td>
			<td>=WEEKNUM(date,[return_type])</td>
			<td>Returns the week number for the specified date. <br>The <a href="https://support.microsoft.com/en-us/office/weeknum-function-e5c43a03-b4ab-426c-b411-b18c13c75340">return_type</a> argument is used to define which day of the week is considered the first day.</td>
		</tr>
		<tr>
			<td><b>WORKDAY</b></td>
			<td>=WORKDAY(start_date, days, [holidays])</td>
			<td>Returns the date of the nearest working day n days in the future or past.<br>Working days exclude weekends and any dates specified in <i>holidays</i>.</td>
		</tr>
		<tr>
			<td><b>WORKDAYINTL</b></td>
			<td>=WORKDAYINTL(start_date, days, [weekend], [holidays])</td>
			<td>Returns the date of the nearest working day n days in the future or past. <br>The optional <a href="https://support.microsoft.com/en-us/office/workday-intl-function-a378391c-9ba7-4678-8a39-39611a9bf81d">weekend</a> parameter is used to specify which days of the week are considered weekends. <br><i>Weekend days</i> and <i>holidays</i> are not considered as workdays.</td>
		</tr>
		<tr>
			<td><b>YEAR</b></td>
			<td>=YEAR(date)</td>
			<td>Returns the year of the specified date.</td>
		</tr>
		<tr>
			<td><b>YEARFRAC</b></td>
			<td>=YEARFRAC(start_date, end_date, [basis])</td>
			<td>Returns the year of the specified date. <br>The optional <a href="https://support.microsoft.com/en-us/office/yearfrac-function-3844141e-c76d-4143-82b6-208454ddc6a8">basis</a> argument is used to define the type of day count basis.</td>
		</tr>
    </tbody>
</table>
<br>

Check the example in our [snippet tool](https://snippet.dhtmlx.com/wux2b35b).

### Financial functions

<table>
	<tbody>
		<tr>
			<td><b>Function</b></td>
			<td><b>Formula</b></td>
			<td><b>Description</b></td>
		</tr>
		<tr>
			<td><b>ACCRINT</b></td>
			<td>=ACCRINT(issue, id, sd, rate, par, frequency, [basis], [calc_method]), <br><br> where:
			<ul>
				<li><i>issue</i> - the issue date of the security;</li>
				<li><i>id</i> - the security's first interest date;</li>
				<li><i>sd</i> - the security's settlement date;</li>
				<li><i>rate</i> - the security's annual coupon rate;</li>
				<li><i>par</i> - the security's par value, $1,000 by default;</li>
				<li><i>frequency</i> - the number of coupon payments per year (1 for annual payments); </li>
				<li><i>basis</i> - optional, the type of day count basis to use;</li>
				<li><i>calc_method</i> - optional, the way to calculate the total accrued interest when the date of settlement is later than the date of first interest (<a href="https://support.microsoft.com/en-us/office/accrint-function-fe45d089-6722-4fb3-9379-e1f911d8dc74">0 or 1(default)</a>).</li>
			</ul></td>
			<td>Returns the accrued interest for a security that pays periodic interest.</td>
		</tr>
		<tr>
			<td><b>DB</b></td>
			<td>=DB(cost, salvage, life, period, [month]), <br><br> where:
			<ul>
				<li><i>cost</i> - the initial cost of the asset;</li>
				<li><i>salvage</i> - the value of the asset at the end of the depreciation;</li>
				<li><i>life</i> - the number of periods over which the asset is being depreciated;</li>
				<li><i>period</i> - the period to calculate depreciation for;</li>
				<li><i>month</i> - optional, the number of months in the first year, 12 by default.</li>
			</ul></td>
			<td>Calculates the depreciation of an asset for a specified period using the fixed-declining balance method.</td>
		</tr>
		<tr>
			<td><b>DDB</b></td>
			<td>=DDB(cost, salvage, life, period, [factor]), <br><br> where:
			<ul>
				<li><i>cost</i> - the initial cost of the asset;</li>
				<li><i>salvage</i> - the value of the asset at the end of the depreciation;</li>
				<li><i>life</i> - the number of periods over which the asset is being depreciated;</li>
				<li><i>period</i> - the period to calculate depreciation for;</li>
				<li><i>factor</i> - optional, the rate at which the balance declines, 2 (the double-declining balance method) by default</li>
			</ul></td>
			<td>Calculates the depreciation of an asset for a specified period using the double-declining balance method or another method you specify.</td>
		</tr>
		<tr>
			<td><b>DOLLARDE</b></td>
			<td>=DOLLARDE(fractional_dollar, fraction)</td>
			<td>Converts a dollar price specified as an integer part and a fraction part into a dollar price displayed as a decimal number.</td>
		</tr>
		<tr>
			<td><b>DOLLARFR</b></td>
			<td>=DOLLARFR(decimal_dollar, fraction)</td>
			<td>Converts a decimal number into fractional dollar number.</td>
		</tr>
		<tr>
			<td><b>EFFECT</b></td>
			<td>=EFFECT(nominal_rate, npery)<br><br> <i>nominal_rate</i> must be >= 0, <i>npery</i> must be > 1.</td>
			<td>Returns the effective annual interest rate on the base of the nominal annual interest rate and the number of compounding periods per year you specify.<br> Works with numeric values. </td>
		</tr>
		<tr>
			<td><b>FV</b></td>
			<td>=FV(rate, nper, pmt, [pv], [type]), <br><br> where:
			<ul>
				<li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li>
				<li><i>nper</i> - the total number of payment periods in an annuity. For monthly payments, <i>nper</i>=nper*12;</li>
				<li><i>pmt</i> - the payment made each period;</li>
				<li><i>pv</i> - optional, the present value, or the lump-sum amount that a series of future payments is worth right now, 0 by default;</li>
				<li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li>
			</ul></td>
			<td>Calculates the future value of an investment. </td>
		</tr>
		<tr>
			<td><b>FVSCHEDULE</b></td>
			<td>=FVSCHEDULE(principal, schedule), <br><br> where:
			<ul>
				<li><i>principal</i> - the present value;</li>
				<li><i>schedule</i> - an array of interest rates to apply. The values in the array can be numbers or blank cells; any other value produces the error value. Blank cells are taken as zeros.</li>
			</ul></td>
			<td>Returns the future value of an initial principal (=present value) after applying a series of compound interest rates.</td>
		</tr>
		<tr>
			<td><b>IPMT</b></td>
			<td>=IPMT(rate, per, nper, pv, [fv], [type]), <br><br> where:
			<ul>
				<li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li>
				<li><i>per</i> - the period for which you want to find the interest and must be in the range between 1 and nper;</li>
				<li><i>nper</i> - the total number of payment periods in an annuity. For monthly payments, <i>nper</i>=nper*12;</li>
				<li><i>pv</i> - the present value, or the lump-sum amount that a series of future payments is worth right now;</li>
				<li><i>fv</i> - optional, the future value, 0 by default;</li>
				<li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li>
			</ul></td>
			<td>Returns the interest payment for a given period for an investment based on periodic, constant payments and a constant interest rate.</td>
		</tr>
		<tr>
			<td><b>IRR</b></td>
			<td>=IRR(values, [guess]), <br><br> where:
			<ul>
				<li><i>values</i> - an array or reference to cells that contain values. The array must contain at least one positive value and one negative value;</li>
				<li><i>guess</i> - optional, an estimate for expected IRR, .1 (=10%) by default.</li>
			</ul></td>
			<td>Returns the internal rate of return (IRR) for a series of cash flows that occur at regular intervals.</td>
		</tr>
		<tr>
			<td><b>ISPMT</b></td>
			<td>=ISPMT(rate, per, nper, pv), <br><br> where:
			<ul>
				<li><i>rate</i> - the interest rate for the investment. For monthly payments, <i>rate</i>  =  rate/12;</li>
				<li><i>per</i> - the period for which you want to find the interest and must be in the range between 1 and nper;</li>
				<li><i>nper</i> - the total number of payment periods for the investment. For monthly payments, <i>nper</i>=nper*12;</li>
				<li><i>pv</i> - the present value of the investment. For a loan, pv is the loan amount.</li>
			</ul></td>
			<td>Calculates the interest paid (or received) for the specified period of a loan (or investment) with even principal payments.</td>
		</tr>
		<tr>
			<td><b>NOMINAL</b></td>
			<td>=NOMINAL(effect_rate, npery), <br><br><i>effect_rate</i> must be >= 0, <i>npery</i> must be > 1. </td>
			<td>Returns the nominal annual interest rate on the base of the effective rate and the number of compounding periods per year you specify.</td>
		</tr>
		<tr>
			<td><b>NPER</b></td>
			<td>=NPER(rate,pmt,pv,[fv],[type]), <br><br>where:
			<ul>
				<li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li>
				<li><i>pmt</i> - the payment made each period;</li>
				<li><i>pv</i> - the present value, or the lump-sum amount that a series of future payments is worth right now;</li>
				<li><i>fv</i> - optional, the future value, 0 by default;</li>
				<li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li>
			</ul></td>
			<td>Returns the number of periods for an investment based on periodic, constant payments and a constant interest rate.<br></td>
		</tr>
		<tr>
			<td><b>NPV</b></td>
			<td>=NPV(rate,value1,[value2],...), <br><br> where:
			<ul>
				<li><i>rate</i> - the rate of discount over one year;</li>
				<li><i>value1, value2</i> - from 1 to 254 values representing cash flows (future payments and income).<br>Empty cells, logical values, text, or error values are ignored.</li>
			</ul></td>
			<td>Calculates the net present value of an investment by using a discount rate and a series of future payments (negative values) and income (positive values).</td>
		</tr>
		<tr>
			<td><b>PDURATION</b></td>
			<td>=PDURATION(rate, pv, fv), <br><br>where:
			<ul>
				<li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li>
				<li><i>pv</i> - the present value of the investment;</li>
				<li><i>fv</i> - the desired future value of the investment.</li>
			</ul><br> All arguments must be positive values.</td>
			<td>Returns the number of periods required by an investment to reach a specified value.<br></td>
		</tr>
		<tr>
			<td><b>PMT</b></td>
			<td>=PMT(rate, nper, pv, [fv], [type]), <br><br> where:
			<ul>
				<li><i>rate</i> - the interest rate for the loan. For monthly payments, <i>rate</i>  =  rate/12;</li>
				<li><i>nper</i> - the total number of months of payments for the loan. For monthly payments, <i>nper</i>=nper*12;</li>
				<li><i>pv</i> - the present value (or the current total amount of loan);</li>
				<li><i>fv</i> - optional, the future value, 0 by default;</li>
				<li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li>
			</ul></td>
			<td>Calculates the monthly payment for a loan based on constant payments and a constant interest rate.</td>
		</tr>
		<tr>
			<td><b>PPMT</b></td>
			<td>=PPMT(rate, per, nper, pv, [fv], [type]), <br><br>where:
			<ul>
				<li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li>
				<li><i>per</i> - the period for which you want to find the interest and must be in the range between 1 and nper;</li>
				<li><i>nper</i> - the total number of payment years in an annuity. For monthly payments, <i>nper</i>=nper*12;</li>
				<li><i>pv</i> - the present value - the total amount that a series of future payments is worth now;</li>
				<li><i>fv</i> - the desired future value or a cash balance.</li>
				<li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li>
			</ul></td>
			<td>Returns the payment on the principal for a specified period for an investment based on periodic, constant payments and a constant interest rate.<br></td>
		</tr>
		<tr>
			<td><b>PV</b></td>
			<td>=PV(rate, nper, pmt, [fv], [type]), <br><br>where:
			<ul>
				<li><i>rate</i> - the interest rate per period. For monthly payments, <i>rate</i>  =  rate/12;</li>
				<li><i>nper</i> - the total number of payment years in an annuity. For monthly payments, <i>nper</i>=nper*12;</li>
				<li><i>pmt</i> - the payment made each period. If <i>pmt</i> is omitted, you must include the <i>fv</i> argument;</li>
				<li><i>fv</i> - optional, the desired future value or a cash balance.</li>
				<li><i>type</i> - optional, 0(default) - the payments are due at the end of the period, 1 - at the beginning of the period.</li>
			</ul></td>
			<td>Returns the present value of a loan or an investment, based on a constant interest rate.<br></td>
		</tr>
    </tbody>
</table>

Check the example in our [snippet tool](https://snippet.dhtmlx.com/wux2b35b).

### Information functions

<table>
	<tbody>
		<tr>
			<td><b>Function</b></td>
			<td><b>Formula</b></td>
			<td><b>Description</b></td>
		</tr>
		<tr>
			<td><b>ISBINARY</b></td>
			<td>=ISBINARY(value)</td>
			<td>Returns TRUE if the value is binary; otherwise, returns FALSE.</td>
		</tr>
		<tr>
			<td><b>ISBLANK</b></td>
			<td>=ISBLANK(A1)</td>
			<td>Returns TRUE if a cell is empty; otherwise, returns FALSE.</td>
		</tr>
		<tr>
			<td><b>ISEVEN</b></td>
			<td>=ISEVEN(number)</td>
			<td>Returns TRUE if a number is even, or FALSE if number is odd. <br>Works with integer numbers.</td>
		</tr>
		<tr>
			<td><b>ISNONTEXT</b></td>
			<td>=ISNONTEXT(value)</td>
			<td>Returns TRUE if a cell contains any value except text; otherwise, returns FALSE.</td>
		</tr>
		<tr>
			<td><b>ISNUMBER</b></td>
			<td>=ISNUMBER(value)</td>
			<td>Returns TRUE if a cell contains a number; otherwise, returns FALSE.</td>
		</tr>
		<tr>
			<td><b>ISODD</b></td>
			<td>=ISODD(number)</td>
			<td>Returns TRUE if a number is odd, or FALSE if number is even. <br>Works with integer numbers.</td>
		</tr>
		<tr>
			<td><b>ISTEXT</b></td>
			<td>=ISTEXT(value)</td>
			<td>Returns TRUE if a value is text; otherwise, returns FALSE.</td>
		</tr>
		<tr>
			<td><b>N</b></td>
			<td>=N(value)</td>
			<td>Returns a value converted to a number.</td>
		</tr>
    </tbody>
</table>
<br>

Check the example in our [snippet tool](https://snippet.dhtmlx.com/wux2b35b).

### Math functions

<table> 
	<tbody>
        <tr>
			<td><b>ABS</b></td>
			<td>Returns the absolute value of a number. The absolute value of a number is always positive.</td>
		</tr>
		<tr>
			<td><b>ACOS</b></td>
			<td>Returns the arccosine, or inverse cosine, of a number. The arccosine is the angle whose cosine is <i>number</i>. The number must be from -1 to 1, inclusive. The returned angle is given in radians in the range 0 (zero) to pi.</td>
		</tr>
		<tr>
			<td><b>ACOSH</b></td>
			<td>Returns the inverse hyperbolic cosine of a number. The number must be greater than or equal to 1.</td>
		</tr>
		<tr>
			<td><b>ACOT</b></td>
			<td>Returns the principal value of the arc-cotangent, or inverse cotangent, of a number. The returned angle is given in radians in the range 0 (zero) to pi.</td>
		</tr>
		<tr>
			<td><b>ACOTH</b></td>
			<td>Returns the inverse hyperbolic cotangent of a number. The absolute value of the number must be greater than 1.</td>
		</tr>
		<tr>
			<td><b>ADD</b></td>
			<td>Returns the sum of two values. <br>Empty cells, logical values like TRUE, or text are ignored.</td>
		</tr>
		<tr>
			<td><b>ARABIC</b></td>
			<td>Converts a Roman numeral to an Arabic numeral.</td>
		</tr>
		<tr>
			<td><b>ASIN</b></td>
			<td>Returns the arcsine, or inverse sine, of a number. The arcsine is the angle whose sine is <i>number</i>. The number must be from -1 to 1, inclusive. The returned angle is given in radians in the range -pi/2 to pi/2.</td>
		</tr>
		<tr>
			<td><b>ASINH</b></td>
			<td>Returns the inverse hyperbolic sine of a number. The inverse hyperbolic sine is the value whose hyperbolic sine is <i>number</i>. Works with real numbers.</td>
		</tr>
		<tr>
			<td><b>ATAN</b></td>
			<td>Returns the arctangent, or inverse tangent, of a number. The arctangent is the angle whose tangent is <i>number</i>. The returned angle is given in radians in the range -pi/2 to pi/2. Works with the tangent of the angle you want.</td>
		</tr>
		<tr>
			<td><b>ATAN2</b></td>
			<td>Returns the arctangent of (x,y) coordinates. The arctangent is returned in radians between -pi and pi, excluding -pi.</td>
		</tr>
		<tr>
			<td><b>ATANH</b></td>
			<td>Returns the inverse hyperbolic tangent of a number. Number must be between -1 and 1 (excluding -1 and 1). Works with real numbers.</td>
		</tr>
        <tr>
			<td><b>AVERAGE</b></td>
			<td>Calculates the average (arithmetic mean) of a group of numbers. <br>The function ignores logical values, empty cells and cells that contain text. <br>However, cells with the value zero are included.</td>
		</tr>
		<tr>
			<td><b>BASE</b></td>
			<td>Converts a number into the supplied base (radix). <br>The number should be an integer and greater than or equal to 0 and less than 2^53.<br>The base radix is what we want to convert the number into. It must be an integer from 2 to 36, inclusive.</td>
		</tr>
		<tr>
			<td><b>CEILING</b></td>
			<td>Returns a number rounded up to the nearest integer or to the nearest multiple of the specified significance.</td>
		</tr>
		<tr>
			<td><b>COMBIN</b></td>
			<td>Returns the number of combinations for two given integer numbers: the number of items (<i>number</i>) and the number of items in each combination (<i>number_chosen</i>): <ul><li><i>number</i> should be greater than or equal to zero; also, it should be greater than or equal to the number_chosen;</li><li><i>number_chosen</i> must be greater than or equal to zero.</li></ul></td>
		</tr>
		<tr>
			<td><b>COMBINA</b></td>
			<td>Returns the number of combinations for two given integer numbers and includes repetitions. The numbers are: the number of items (<i>number</i>) and the number of items in each combination (<i>number_chosen</i>): <ul><li><i>number</i> should be greater than or equal to zero; also, it should be greater than or equal to the number_chosen;</li><li><i>number_chosen</i> must be greater than or equal to zero.</li></ul></td>
		</tr>
		<tr>
			<td><b>COS</b></td>
			<td>Returns the cosine of an angle specified in radians.</td>
		</tr>
		<tr>
			<td><b>COSH</b></td>
			<td>Returns the hyperbolic cosine of a real number.</td>
		</tr>
		<tr>
			<td><b>CSC</b></td>
			<td>Returns the cosecant of an angle specified in radians.</td>
		</tr>
		<tr>
			<td><b>CSCH</b></td>
			<td>Return the hyperbolic cosecant of an angle specified in radians.</td>
		</tr>
		<tr>
			<td><b>COT</b></td>
			<td>Returns the cotangent of the an angle specified in radians.</td>
		</tr>
		<tr>
			<td><b>COTH</b></td>
			<td>Returns the hyperbolic cotangent of a hyperbolic angle.</td>
		</tr>
        <tr>
			<td><b>COUNT</b></td>
			<td>Counts the number of cells that contain numbers, and counts numbers within the list of arguments.<br> Empty cells, logical values, text, or error values in the array or reference are not counted.</td>
		</tr>
        <tr>
			<td><b>COUNTA</b></td>
			<td>Counts the number of cells that contain numbers, text, logical values, error values, and empty text (""); cells with zero values are excluded. <br>The function does not count empty cells.</td>
		</tr>
        <tr>
			<td><b>COUNTBLANK</b></td>
			<td>Returns the number of empty cells from a specified range. <br>Cells with zero values are not counted.</td>
		</tr>
		<tr>
			<td><b>DECIMAL</b></td>
			<td>Converts a text representation of a number in a given base (radix) into a decimal number.<br>The base radix must be an integer from 2 to 36, inclusive.</td>
		</tr>
		<tr>
			<td><b>DEGREES</b></td>
			<td>Converts radians into degrees.</td>
		</tr>
		<tr>
			<td><b>DIVIDE</b></td>
			<td>Returns the result of dividing one number by another.</td>
		</tr>
		<tr>
			<td><b>EQ</b></td>
			<td>Returns TRUE if the first argument is equal to the second; otherwise FALSE.</td>
		</tr>
        <tr>
			<td><b>EVEN</b></td>
			<td>Returns a number rounded up to the nearest even integer.</td>
		</tr>
		<tr>
			<td><b>FACT</b></td>
			<td>Returns the factorial of a number. The number must be from 1 to n. If number is not an integer, it is truncated.</td>
		</tr>
		<tr>
			<td><b>FACTDOUBLE</b></td>
			<td>Returns the double factorial of a number. The number must be from 1 to n. If number is not an integer, it is truncated.</td>
		</tr>
		<tr>
			<td><b>FLOOR</b></td>
			<td>Rounds number down, toward zero, to the nearest multiple of the specified significance. The significant must be from 1 to n.<br>If the sign of number is positive, a value is rounded down and adjusted toward zero. If the sign of number is negative, a value is rounded down and adjusted away from zero.</td>
		</tr>
		<tr>
			<td><b>GCD</b></td>
			<td>Returns the greatest common divisor of two or more integers. The function takes from 1 to 255 numeric values which are expected to be integers. If any value is not an integer, it is truncated.</td>
		</tr>
		<tr>
			<td><b>GT</b></td>
			<td>Returns TRUE if the first argument is greater than the second; otherwise FALSE.</td>
		</tr>
		<tr>
			<td><b>GTE</b></td>
			<td>Returns TRUE if the first argument is greater than or equal to the second; otherwise FALSE. </td>
		</tr>
        <tr>
			<td><b>INT</b></td>
			<td>Returns a number rounded down to the nearest integer.</td>
		</tr>
		<tr>
			<td><b>LN</b></td>
			<td>Returns the natural logarithm of a positive real number.</td>
		</tr>
		<tr>
			<td><b>LOG</b></td>
			<td>Returns the logarithm of a positive real number to the base you specify. If base is omitted, it is assumed to be 10.</td>
		</tr>
		<tr>
			<td><b>LOG10</b></td>
			<td>Returns the base-10 logarithm of a positive real number.</td>
		</tr>
		<tr>
			<td><b>LT</b></td>
			<td>Returns TRUE if the first argument is less than the second; otherwise FALSE.</td>
		</tr>
		<tr>
			<td><b>LTE</b></td>
			<td>Returns TRUE if the first argument is less than or equal to the second; otherwise FALSE.</td>
		</tr>
        <tr>
			<td><b>MAX</b></td>
			<td>Returns the largest value in a set of values. <br>The function ignores empty cells, the logical values TRUE and FALSE, and text values. If the arguments contain no numbers, MAX returns 0 (zero).</td>
		</tr>
        <tr>
			<td><b>MIN</b></td>
			<td>Returns the smallest number in a set of values. <br>Empty cells, logical values, or text in the array or reference are ignored. If the arguments contain no numbers, MIN returns 0 (zero).</td>
		</tr>
		<tr>
			<td><b>MINUS</b></td>
			<td>Returns the difference of two numbers.</td>
		</tr>
		<tr>
			<td><b>MOD</b></td>
			<td>Returns the remainder after number is divided by divisor. The result has the same sign as divisor.</td>
		</tr>
		<tr>
			<td><b>MROUND</b></td>
			<td>Returns a number rounded to the nearest multiple of the specified significance. The values of <i>number</i> and <i>multiple</i> must have the same sign.</td>
		</tr>
		<tr>
			<td><b>MULTINOMIAL</b></td>
			<td>Returns the ratio of the factorial of a sum of values to the product of factorials. The function takes from 1 to 255 numeric values which must be greater than or equal to 0.</td>
		</tr>
		<tr>
			<td><b>MULTIPLY</b></td>
			<td>Returns the result of multiplying two numbers.</td>
		</tr>
		<tr>
			<td><b>NE</b></td>
			<td>Returns TRUE if the first argument is not equal to the second; otherwise FALSE.</td>
		</tr>
        <tr>
			<td><b>ODD</b></td>
			<td>Returns a number rounded up to the nearest odd integer.</td>
		</tr>
        <tr>
			<td><b>PI</b></td>
			<td>Returns the number 3.14159265358979 (the mathematical constant pi, accurate to 15 digits).</td>
		</tr>
		<tr>
			<td><b>POW</b></td>
			<td>Returns the result of a number raised to a given power. <br>Works with real numbers.</td>
		</tr>
        <tr>
			<td><b>POWER</b></td>
			<td>Returns the result of a number raised to a given power. <br>Works with real numbers.</td>
		</tr>
        <tr>
			<td><b>PRODUCT</b></td>
			<td>Multiplies all the numbers given as arguments and returns the product.<br>
Only numbers in the array or reference are multiplied. Empty cells, logical values, and text in the array or reference are ignored.</td>
		</tr>
        <tr>
			<td><b>QUOTIENT</b></td>
			<td>Returns the result of integer division without the remainder. <br>Works with real numbers.</td>
		</tr>
		<tr>
			<td><b>RADIANS</b></td>
			<td>Converts degrees to radians.</td>
		</tr>
        <tr>
			<td><b>RAND</b></td>
			<td>Returns a random number that is greater than or equal to 0 and less than 1. <br>Returns a new random number each time your spreadsheet recalculates. </td>
		</tr>
		<tr>
			<td><b>RANDBETWEEN</b></td>
			<td>Returns a random number between two specified numbers.<br>Returns a new random number each time your spreadsheet recalculates. </td>
		</tr>
		<tr>
			<td><b>ROMAN</b></td>
			<td>Converts an arabic numeral to roman.</td>
		</tr>
        <tr>
			<td><b>ROUND</b></td>
			<td>Returns a number rounded to a specified number of digits.</td>
		</tr>
        <tr>
			<td><b>ROUNDDOWN</b></td>
			<td>Returns a number rounded down to a specified number of digits.</td>
		</tr>
        <tr>
			<td><b>ROUNDUP</b></td>
			<td>Returns a number rounded up to a specified number of digits.</td>
		</tr>
		<tr>
			<td><b>SEC</b></td>
			<td>Returns the secant of an angle specified in radians.<br>Works with numeric values.</td>
		</tr>
		<tr>
			<td><b>SECH</b></td>
			<td>Returns the hyperbolic secant of an angle specified in radians.<br>Works with numeric values.</td>
		</tr>
		<tr>
			<td><b>SIN</b></td>
			<td>Returns the sine of an angle specified in radians.</td>
		</tr>
		<tr>
			<td><b>SINH</b></td>
			<td>Returns the hyperbolic sine of a real number.</td>
		</tr>
        <tr>
			<td><b>SQRT</b></td>
			<td>Returns a positive square root of a number.</td>
		</tr>
		<tr>
			<td><b>SQRTPI</b></td>
			<td>Returns the square root of a number multiplied by pi. The number must be greater than or equal to 0.</td>
		</tr>
		<tr>
			<td><b>STDEV</b></td>
			<td>Calculates standard deviation based on data that represents a sample of population. <br>The standard deviation is a measure of how widely values are dispersed from the average value (the mean).<br>Empty cells, logical values, text, or error values in the array or reference are ignored.</td>
		</tr>
		<tr>
			<td><b>STDEVA</b></td>
			<td>Calculates standard deviation based on a sample. <br>The standard deviation is a measure of how widely values are dispersed from the average value (the mean).<br>Empty cells, logical values, text, or error values in the array or reference are ignored.</td>
		</tr>
        <tr>
			<td><b>STDEVP</b></td>
			<td>Calculates standard deviation based on the entire population of numbers. <br>The standard deviation is a measure of how widely values are dispersed from the average value (the mean).<br>Empty cells, logical values, text, or error values in the array or reference are ignored.</td>
		</tr>
		<tr>
			<td><b>STDEVPA</b></td>
			<td>Calculates standard deviation based on the entire population given as arguments, including text (evaluate as 0) and logical values (evaluate as 1 for TRUE, and as 0 for FALSE). <br>The standard deviation is a measure of how widely values are dispersed from the average value (the mean).<br>If an argument is an array or reference, only values in that array or reference are used. Empty cells and text values in the array or reference are ignored.<br> Error values cause errors.</td>
		</tr>
		<tr>
			<td><b>SUBTOTAL</b></td>
			<td>Returns a subtotal in a list or database.</td>
		</tr>
        <tr>
			<td><b>SUM</b></td>
			<td>Returns the sum of supplied values. <br>Empty cells, logical values like TRUE, or text are ignored.</td>
		</tr>
        <tr>
			<td><b>SUMPRODUCT</b></td>
			<td>Multiplies range of cells or arrays and returns the sum of products. <br>For valid products only numbers are multiplied. <br>Empty cells, logical values, and text are ignored. <br>Treats array entries that are not numeric as if they were zeros.</td>
		</tr>
        <tr>
			<td><b>SUMSQ</b></td>
			<td>Returns the sum of the squares of the arguments. <br>Empty cells, logical values, text, or error values in the array or reference are ignored.</td>
		</tr>
		<tr>
			<td><b>SUMX2MY2</b></td>
			<td>Returns the sum of the difference of squares of corresponding values in two arrays.<br>The arguments should be either numbers or names, arrays, or references that contain numbers.<br>Empty cells, logical values, text, or error values in the array or reference are ignored. Zero values are included.</td>
		</tr>
		<tr>
			<td><b>SUMX2PY2</b></td>
			<td>Returns the sum of the sum of squares of corresponding values in two arrays.<br>The arguments should be either numbers or names, arrays, or references that contain numbers.<br>Empty cells, logical values, text, or error values in the array or reference are ignored. Zero values are included.</td>
		</tr>
		<tr>
			<td><b>SUMXMY2</b></td>
			<td>Returns the sum of squares of differences of corresponding values in two arrays.<br>The arguments should be either numbers or names, arrays, or references that contain numbers.<br>Empty cells, logical values, text, or error values in the array or reference are ignored. Zero values are included.</td>
		</tr>
		<tr>
			<td><b>TAN</b></td>
			<td>Returns the tangent of an angle specified in radians.</td>
		</tr>
		<tr>
			<td><b>TANH</b></td>
			<td>Returns the hyperbolic tangent of a real number.</td>
		</tr>
        <tr>
			<td><b>TRUNC</b></td>
			<td>Truncates a number to an integer by removing the fractional part of the number.</td>
		</tr>
		<tr>
			<td><b>VAR</b></td>
			<td>Returns the variance based on a sample.<br>Empty cells, logical values, text, or error values in the array or reference are ignored.</td>
		</tr>
		<tr>
			<td><b>VARA</b></td>
			<td>Returns the variance based on a sample of the population, including text (evaluate as 0) and logical values (evaluate as 1 for TRUE, and as 0 for FALSE).<br>Empty cells and text values in the array or reference are ignored.</td>
		</tr>
        <tr>
			<td><b>VARP</b></td>
			<td>Returns the variance of a population based on an entire population of numbers.<br>Empty cells, logical values, text, or error values in the array or reference are ignored.</td>
		</tr>
		<tr>
			<td><b>VARPA</b></td>
			<td>Returns the variance of a population based on an entire population, including text (evaluate as 0) and logical values (evaluate as 1 for TRUE, and as 0 for FALSE).<br>Empty cells and text values in the array or reference are ignored.</td>
		</tr>
    </tbody>
</table>
<br>

Check the example in our [snippet tool](https://snippet.dhtmlx.com/wux2b35b).

### Regex functions

<table>
	<tbody>
		<tr>
			<td><b>Function</b></td>
			<td><b>Formula</b></td>
			<td><b>Description</b></td>
		</tr>
		<tr>
			<td><b>REGEXREPLACE</b></td>
			<td>=REGEXREPLACE(text, regular_expression, replacement)</td>
			<td>Replaces a part of a text string with a different text string using regular expressions.</td>
		</tr>
		<tr>
			<td><b>REGEXMATCH</b></td>
			<td>=REGEXMATCH(text, regular_expression)</td>
			<td>Returns TRUE if a text string matches the pattern in the regular expression and FALSE if it doesn't.</td>
		</tr>
		<tr>
			<td><b>REGEXEXTRACT</b></td>
			<td>=REGEXEXTRACT(text, regular_expression)</td>
			<td>Returns the part of the string that matches the pattern in the regular expression.</td>
		</tr>
    </tbody>
</table>
<br>

Check the example in our [snippet tool](https://snippet.dhtmlx.com/wux2b35b).

### String functions

<table>
	<tbody>
		<tr>
			<td><b>Function</b></td>
			<td><b>Formula</b></td>
			<td><b>Description</b></td>
		</tr>
		<tr>
			<td><b>CHAR</b></td>
			<td>=CHAR(number)</td>
			<td>Returns the character (from the character set used by your computer) specified by a number. Number must be between 1 and 255. </td>
		</tr>
		<tr>
			<td><b>CLEAN</b></td>
			<td>=CLEAN(text)</td>
			<td>Removes characters, which are not printed when you use the print option, from the text.</td>
		</tr>
		<tr>
			<td><b>CODE</b></td>
			<td>=CODE(text)</td>
			<td>Returns a numeric code for the first character in a text string.</td>
		</tr>
        <tr>
			<td><b>CONCATENATE</b></td>
			<td>=CONCATENATE(A1,"",B2:C3)</td>
			<td>Joins two or more text strings into one string.</td>
		</tr>
		<tr>
			<td><b>DOLLAR</b></td>
			<td>=DOLLAR(number, decimals)</td>
			<td>Converts a number to text using the currency format, based on the number of digits to the right/left of the decimal point you specify (by default, 2).</td>
		</tr>
		<tr>
			<td><b>EXACT</b></td>
			<td>=EXACT(text1, text2)</td>
			<td>Compares two strings and returns TRUE if they are exactly the same; otherwise, returns FALSE.</td>
		</tr>
		<tr>
			<td><b>FIND</b></td>
			<td>=FIND(find_text, within_text, [start_num])</td>
			<td>Returns the position (as a number) of one text string inside another, starting at the position you specify (by default, 1).</td>
		</tr>
		<tr>
			<td><b>FIXED</b></td>
			<td>=FIXED(number, [decimals], [no_commas])</td>
			<td>Rounds a number to the specified number of decimals, formats the number in decimal format using a period and commas, and converts the result to text. If <i>no_commas</i> is set to 1, the returned text won't include commas.</td>
		</tr>
		<tr>
			<td><b>JOIN</b></td>
			<td>=JOIN(separator, value1, value2,...)</td>
			<td>Concatenates values using a specified separator.</td>
		</tr>
        <tr>
			<td><b>LEFT</b></td>
			<td>=LEFT(text, count)</td>
			<td>Returns the first character or characters in a text string,<br> based on the number of characters you specify.</td>
		</tr>
        <tr>
			<td><b>LEN</b></td>
			<td>=LEN(text)</td>
			<td>Returns the length of the specified string.</td>
		</tr>
        <tr>
			<td><b>LOWER</b></td>
			<td>=LOWER(text)</td>
			<td>Converts all letters in the specified string to lowercase.</td>
		</tr>
        <tr>
			<td><b>MID</b></td>
			<td>=MID(text, start, count)</td>
			<td>Returns a specific number of characters from a text string,<br> starting at the position you specify, based on the number <br>of characters you specify.</td>
		</tr>
		<tr>
			<td><b>NUMBERVALUE</b></td>
			<td>Converts a number in text format to numeric value, using specified decimal and group separators.</td>
		</tr>
        <tr>
			<td><b>PROPER</b></td>
			<td>=PROPER(text)</td>
			<td>Sets the first character in each word to uppercase <br>and converts all other characters to lowercase.</td>
		</tr>
		<tr>
			<td><b>REPT</b></td>
			<td>=REPT(text, number_times)</td>
			<td>Repeats text a specified number of times.</td>
		</tr>
        <tr>
			<td><b>RIGHT</b></td>
			<td>=RIGHT(text, count)</td>
			<td>Returns the last character or characters (rightmost) in a text string, <br>based on the number of characters you specify.</td>
		</tr>
		<tr>
			<td><b>SEARCH</b></td>
			<td>=SEARCH(find_text, within_text, [start_num])</td>
			<td>Returns the position (as a number) of the first character of <i>find_text</i> inside <i>within_text</i>, starting at the position you specify (by default, 1).</td>
		</tr>
		<tr>
			<td><b>SUBSTITUTE</b></td>
			<td>=SUBSTITUTE(text, old_text, new_text, [instance_num])</td>
			<td>Replaces old text with new text in a text string. If you specify <i>instance_num</i>, only that instance of <i>old_text</i> is replaced; otherwise, all instances are replaced.</td>
		</tr>
		<tr>
			<td><b>T</b></td>
			<td>=T(value)</td>
			<td> returns text when given a text value and an empty string ("") for numbers, dates, and the logical TRUE/FALSE values.</td>
		</tr>
        <tr>
			<td><b>TRIM</b></td>
			<td>=TRIM(text)</td>
			<td>Removes all spaces from text except for single spaces between words.</td>
		</tr>
        <tr>
			<td><b>UPPER</b></td>
			<td>=UPPER(text)</td>
			<td>Converts text to uppercase.</td>
		</tr>
    </tbody>
</table>
<br>

Check the example in our [snippet tool](https://snippet.dhtmlx.com/wux2b35b).

### Other functions

<table>
	<tbody>
		<tr>
			<td><b>Function</b></td>
			<td><b>Example</b></td>
			<td><b>Description</b></td>
		</tr>
		<tr>
			<td><b>AND</b></td>
			<td>=AND(logical1, [logical2], ...)</td>
			<td>Returns either TRUE or FALSE depending on<br> whether multiple conditions are met or not.</td>
		</tr>
		<tr>
			<td><b>CHOOSE</b></td>
			<td>=CHOOSE(index_num, value1, [value2], ...)</td>
			<td>Returns a value from the list of value arguments based on a position or index you specify.</td>
		</tr>
		<tr>
			<td><b>FALSE</b></td>
			<td>=FALSE()</td>
			<td>Returns the logical value FALSE.</td>
		</tr>
		<tr>
			<td><b>IF</b></td>
			<td>=IF(condition, [value_if_true], [value_if_false])</td>
			<td>Returns one value if a condition is TRUE<br> and another value if it's FALSE.</td>
		</tr>
		<tr>
			<td><b>NOT</b></td>
			<td>=NOT(logical)</td>
			<td>Returns the opposite of a given logical or Boolean value.</td>
		</tr>
		<tr>
			<td><b>OR</b></td>
			<td>=OR(logical1, [logical2], ...)</td>
			<td>Returns TRUE if at least one of the logical expressions is TRUE; otherwise, FALSE.</td>
		</tr>
		<tr>
			<td><b>TRUE</b></td>
			<td>=TRUE()</td>
			<td>Returns the logical value TRUE.</td>
		</tr>
    </tbody>
</table>
<br>

Check the example in our [snippet tool](https://snippet.dhtmlx.com/wux2b35b).

## Getting cell formula

Starting with v4.1, you can get the formula applied to a cell via the [getFormula()](api/spreadsheet_getformula_method.md) method. The method takes the id of the cell as a parameter:

~~~js
var formula = spreadsheet.getFormula("B2");
// -> "ABS(C2)"
~~~