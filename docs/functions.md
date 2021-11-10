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

### String functions

<table>
	<tbody>
        <tr>
			<td><b>CONCATENATE(A1,"",B2:C3)</b></td>
			<td>Joins two or more text strings into one string.</td>
		</tr>
        <tr>
			<td><b>LEFT(text, count)</b></td>
			<td>Returns the first character or characters in a text string,<br> based on the number of characters you specify.</td>
		</tr>
        <tr>
			<td><b>LEN(text)</b></td>
			<td>Returns the length of the specified string.</td>
		</tr>
        <tr>
			<td><b>LOWER(text)</b></td>
			<td>Converts all letters in the specified string to lowercase.</td>
		</tr>
        <tr>
			<td><b>MID(text, start, count)</b></td>
			<td>Returns a specific number of characters from a text string,<br> starting at the position you specify, based on the number <br>of characters you specify.</td>
		</tr>
        <tr>
			<td><b>PROPER(text)</b></td>
			<td>Sets the first character in each word to uppercase <br>and converts all other characters to lowercase.</td>
		</tr>
        <tr>
			<td><b>RIGHT(text, count)</b></td>
			<td>Returns the last character or characters (rightmost) in a text string, <br>based on the number of characters you specify.</td>
		</tr>
        <tr>
			<td><b>TRIM(text)</b></td>
			<td>Removes all spaces from text except for single spaces between words.</td>
		</tr>
        <tr>
			<td><b>UPPER(text)</b></td>
			<td>Converts text to uppercase.</td>
		</tr>
    </tbody>
</table>
<br>

### Boolean operators

From v4.2, you can compare two values via using logical expressions that in any given case will only return either TRUE or FALSE.

| Operator | Example       | Description                                                                                              |
| :------- | :------------ | :------------------------------------------------------------------------------------------------------- |
| =        | =A1=B1        | Returns TRUE if the value in cell A1 is equal to the value in cell B1; otherwise, FALSE.                 |
| &lt;&gt; | =A1&lt;&gt;B1 | Returns TRUE if the value in cell A1 is not equal to the value in cell B1; otherwise, FALSE.             |
| &gt;     | =A1&gt;B1     | Returns TRUE if the value in cell A1 is greater than the value in cell B1; otherwise, FALSE.             |
| &lt;     | =A1&lt;B1     | Returns TRUE if the value in cell A1 is less than the value in cell B1; otherwise, FALSE.                |
| &gt;=    | =A1&gt;=B1    | Returns TRUE if the value in cell A1 is greater than or equal to the value in cell B1; otherwise, FALSE. |
| &lt;=    | =A1&lt;=B1    | Returns TRUE if the value in cell A1 is less than or equal to the value in cell B1; otherwise, FALSE.    |

## Getting cell formula

Starting with v4.1, you can get the formula applied to a cell via the [getFormula()](api/spreadsheet_getformula_method.md) method. The method takes the id of the cell as a parameter:

~~~js
var formula = spreadsheet.getFormula("B2");
// -> "ABS(C2)"
~~~
