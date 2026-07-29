---
sidebar_label: 公式的默认语言环境
title: 公式的默认语言环境
description: DHTMLX Spreadsheet 公式弹窗的完整默认英语语言环境，包含所有内置公式的参数名称和描述。
---

# 公式的默认语言环境 {#default-locale-for-formulas}

您可以在 `dhx.i18n.formulas` 对象中找到 Spreadsheet 弹窗的 i18n 语言环境，其中包含公式的描述。完整的默认英语语言环境如下所示。

有关如何为公式应用自定义语言环境的说明，请参阅[本地化](localization.md#custom-locale-for-formulas)指南。

~~~jsx
const en = {
    "SUM": [
        ["Number1", "Required. The first value to sum."],
        ["Number2", "Optional. The second value to sum."],
        ["Number3", "Optional. The third value to sum."]
    ],
    "SUMIF": [
        ["Range", "Required. Range to apply criteria to."],
        ["Criteria", "Required. Criteria to apply."],
        ["Sum_range", "Optional. Range to sum. If omitted, cells in range are summed."]
    ],
    "SUMIFS": [
        ["Sum_range", "Required. The range to be summed."],
        ["Range1", "Required. The first range to evaluate."],
        ["Criteria1", "Required. The criteria to use on range1."],
        ["Range2", "Optional. The second range to evaluate."],
        ["Criteria2", "Optional. The criteria to use on range2."]
    ],
    "AVERAGE": [
        ["Number1", "Required. A number or cell reference that refers to numeric values."],
        ["Number2", "Optional. A number or cell reference that refers to numeric values."]
    ],
    "AVERAGEA": [
        ["Value1", "Required. A value or reference to a value that can be evaluated as a number."],
        ["Value2", "Optional. A value or reference to a value that can be evaluated as a number."]
    ],
    "AVERAGEIF": [
        ["Range", "Required. One or more cells, including numbers or names, arrays, or references."],
        ["Criteria", "Required. A number, expression, cell reference, or text."],
        ["Average_range", "Optional. The cells to average. When omitted, range is used."]
    ],
    "AVERAGEIFS": [
        ["Avg_rng", "Required. The range to average."],
        ["Range1", "Required. The first range to evaluate."],
        ["Criteria1", "Required. The criteria to use on range1."],
        ["Range2", "Optional. The second range to evaluate."],
        ["Criteria2", "Optional. The criteria to use on range2."]
    ],
    "COUNT": [
        ["Value1", "Required. An item, cell reference, or range."],
        ["Value2", "Optional. An item, cell reference, or range."]
    ],
    "COUNTA": [
        ["Value1", "Required. An item, cell reference, or range."],
        ["Value2", "Optional. An item, cell reference, or range."]
    ],
    "COUNTIF": [
        ["Range", "Required. The range of cells to count."],
        ["Criteria", "Required. The criteria that controls which cells should be counted."]
    ],
    "COUNTIFS": [
        ["Range1", "Required. The first range to evaluate."],
        ["Criteria1", "Required. The criteria to use on range1."],
        ["Range2", "Optional. The second range to evaluate."],
        ["Criteria2", "Optional. The criteria to use on range2."]
    ],
    "MIN": [
        ["Number1", "Required. Number, reference to numeric value, or range that contains numeric values."],
        ["Number2", "Optional. Number, reference to numeric value, or range that contains numeric values."]
    ],
    "MINIFS": [
        ["Min_range", "Required. Range of values used to determine minimum."],
        ["Range1", "Required. The first range to evaluate."],
        ["Criteria1", "Required. The criteria to use on range1."],
        ["Range2", "Optional. The second range to evaluate."],
        ["Criteria2", "Optional. The criteria to use on range2."]
    ],
    "MAX": [
        ["Number1", "Required. Number, reference to numeric value, or range that contains numeric values."],
        ["Number2", "Optional. Number, reference to numeric value, or range that contains numeric values."]
    ],
    "MAXIFS": [
        ["Max_range", "Required. Range of values used to determine maximum."],
        ["Range1", "Required. The first range to evaluate."],
        ["Criteria1", "Required. The criteria to use on range1."],
        ["Range2", "Optional. The second range to evaluate."],
        ["Criteria2", "Optional. The criteria to use on range2."]
    ],
    "SQRT": [
        ["Number", "Required. The number to get the square root of."]
    ],
    "POWER": [
        ["Number", "Required. Number to raise to a power."],
        ["Power", "Required. Power to raise number to (the exponent)."]
    ],
    "LOG": [
        ["Number", "Required. Number for which you want the logarithm."],
        ["Base", "Optional. Base of the logarithm. Defaults to 10."]
    ],
    "EXP": [
        ["Number", "Required. The power that e is raised to."]
    ],
    "PRODUCT": [
        ["Number1", "Required. The first number or range to multiply."],
        ["Number2", "Optional. The second number or range to multiply."]
    ],
    "SUMPRODUCT": [
        ["Array1", "Required. The first array or range to multiply, then add."],
        ["Array2", "Optional. The second array or range to multiply, then add."]
    ],
    "ABS": [
        ["Number", "Required. The number to get the absolute value of."]
    ],
    "RAND": [],
    "RANDBETWEEN": [
        ["Bottom", "Required. An integer representing the lower value of the range."],
        ["Top", "Required. An integer representing the upper value of the range."]
    ],
    "ROUND": [
        ["Number", "Required. The number to round."],
        ["Num_digits", "Required. The place at which number should be rounded."]
    ],
    "ROUNDUP": [
        ["Number", "Required. The number to round up."],
        ["Num_digits", "Required. The place at which number should be rounded."]
    ],
    "ROUNDDOWN": [
        ["Number", "Required. The number to round down."],
        ["Num_digits", "Required. The place at which number should be rounded."]
    ],
    "INT": [
        ["Number", "Required. The number from which you want an integer."]
    ],
    "CEILING": [
        ["Number", "Required. The number that should be rounded."],
        ["Significance", "Required. The multiple to use when rounding."]
    ],
    "FLOOR": [
        ["Number", "Required. The number that should be rounded."],
        ["Significance", "Required. The multiple to use when rounding."]
    ],
    "CONCATENATE": [
        ["Text1", "Required. The first text value to join together."],
        ["Text2", "Required. The second text value to join together."],
        ["Text3", "Optional. The third text value to join together."]
    ],
    "MID": [
        ["Text", "Required. The text to extract from."],
        ["Start_num", "Required. The location of the first character to extract."],
        ["Num_chars", "Required. The number of characters to extract."]
    ],
    "LEFT": [
        ["Text", "Required. The text from which to extract characters."],
        ["Num_chars", "Optional. The number of characters to extract, starting on the left side of text. Default = 1."]
    ],
    "RIGHT": [
        ["Text", "Required. The text from which to extract characters on the right."],
        ["Num_chars", "Optional. The number of characters to extract, starting on the right. Optional, default = 1."]
    ],
    "LOWER": [
        ["Text", "Required. The text that should be converted to lower case."]
    ],
    "UPPER": [
        ["Text", "Required. The text that should be converted to upper case."]
    ],
    "PROPER": [
        ["Text", "Required. The text that should be converted to proper case."]
    ],
    "TRIM": [
        ["Text", "Required. The text from which to remove extra space."]
    ],
    "LEN": [
        ["Text", "Required. The text for which to calculate length."]
    ],
    "SEARCH": [
        ["Find_text", "Required. The substring to find."],
        ["Within_text", "Required. The text to search within."],
        ["Start_num", "Optional. Starting position. Optional, defaults to 1."]
    ],
    "FIND": [
        ["Find_text", "Required. The substring to find."],
        ["Within_text", "Required. The text to search within."],
        ["Start_num", "Optional. The starting position in the text to search. Optional, defaults to 1."]
    ],
    "REPLACE": [
        ["Old_text", "Required. The text to replace."],
        ["Start_num", "Required. The starting location in the text to search."],
        ["Num_chars", "Required. The number of characters to replace."],
        ["New_text", "Required. The text to replace old_text with."]
    ],
    "SUBSTITUTE": [
        ["Text", "Required. The text to change."],
        ["Old_text", "Required. The text to replace."],
        ["New_text", "Required. The text to replace with."],
        ["Instance", "Optional. The instance to replace. If not supplied, all instances are replaced."]
    ],
    "NOW": [],
    "DATE": [
        ["Year", "Required. Number for year."],
        ["Month", "Required. Number for month."],
        ["Day", "Required. Number for day."]
    ],
    "TIME": [
        ["Hour", "Required. The hour for the time you wish to create."],
        ["Minute", "Required. The minute for the time you wish to create."],
        ["Second", "Required. The second for the time you wish to create."]
    ],
    "YEAR": [
        ["Date", "Required. A valid Excel date."]
    ],
    "MONTH": [
        ["Serial_number", "Required. A valid Excel date."]
    ],
    "DAY": [
        ["Date", "Required. A valid Excel date."]
    ],
    "HOUR": [
        ["Serial_number", "Required. A valid Excel time."]
    ],
    "MINUTE": [
        ["Serial_number", "Required. A valid date or time."]
    ],
    "SECOND": [
        ["Serial_number", "Required. A valid time in a format Excel recognizes."]
    ],
    "DATEDIF": [
        ["Start_date", "Required. Start date in Excel date serial number format."],
        ["End_date", "Required. End date in Excel date serial number format."],
        ["Unit", "Required. The time unit to use (years, months, or days)."]
    ],
    "INDEX": [
        ["Array", "Required. A range of cells, or an array constant."],
        ["Row_num", "Required. The row position in the reference or array."],
        ["Col_num", "Optional. The column position in the reference or array."],
        ["Area_num", "Optional. The range in reference that should be used."]
    ],
    "XMATCH": [
        ["Lookup_value", "Required. The lookup value."],
        ["Lookup_array", "Required. The array or range to search."],
        ["Match_mode", "Optional. 0 = exact match (default), -1 = exact match or next smallest, 1 = exact match or next larger, 2 = wildcard match."],
        ["Search_mode", "Optional. 1 = search from first (default), -1 = search from last, 2 = binary search ascending, -2 = binary search descending."]
    ],
    "XLOOKUP": [
        ["Lookup", "Required. The lookup value."],
        ["Lookup_array", "Required. The array or range to search."],
        ["Return_array", "Required. The array or range to return."],
        ["Not_found", "Optional. Value to return if no match found."],
        ["Match_mode", "Optional. 0 = exact match (default), -1 = exact match or next smallest, 1 = exact match or next larger, 2 = wildcard match."],
        ["Search_mode", "Optional. 1 = search from first (default), -1 = search from last, 2 = binary search ascending, -2 = binary search descending."]
    ],
    "LOOKUP": [
        ["Lookup_value", "Required. The value to search for."],
        ["Lookup_vector", "Required. The one-row, or one-column range to search."],
        ["Result_vector", "Optional. The one-row, or one-column range of results."]
    ],
    "HLOOKUP": [
        ["Lookup_value", "Required. The value to look up."],
        ["Table_array", "Required. The table from which to retrieve data."],
        ["Row_index", "Required. The row number from which to retrieve data."],
        ["Range_lookup", "Optional. A Boolean to indicate exact match or approximate match. Default = TRUE = approximate match."]
    ],
    "VLOOKUP": [
        ["Lookup_value", "Required. The value to look for in the first column of a table."],
        ["Table_array", "Required. The table from which to retrieve a value."],
        ["Column_index_num", "Required. The column in the table from which to retrieve a value."],
        ["Range_lookup", "Optional. TRUE = approximate match (default). FALSE = exact match."]
    ],
    "MATCH": [
        ["Lookup_value", "Required. The value to match in lookup_array."],
        ["Lookup_array", "Required. A range of cells or an array reference."],
        ["Match_type", "Optional. 1 = exact or next smallest (default), 0 = exact match, -1 = exact or next largest."]
    ],
    "CHOOSE": [
        ["Index_num", "Required. The value to choose. A number between 1 and 254."],
        ["Value1", "Required. The first value from which to choose."],
        ["Value2", "Optional. The second value from which to choose."]
    ],
    "ISBLANK": [
        ["Value", "Required. The value to check."]
    ],
    "ISBINARY": [
        ["Value", "Required. The value to check."]
    ],
    "ISEVEN": [
        ["Value", "Required. The numeric value to check."]
    ],
    "ISODD": [
        ["Value", "Required. The numeric value to check."]
    ],
    "ISNONTEXT": [
        ["Value", "Required. The value to check."]
    ],
    "ISNUMBER": [
        ["Value", "Required. The value to check."]
    ],
    "ISTEXT": [
        ["Value", "Required. The value to check."]
    ],
    "N": [
        ["Value", "Required. The value to convert to a number."]
    ],
    "IF": [
        ["Logical_test", "Required. A value or logical expression that can be evaluated as TRUE or FALSE."],
        ["Value_if_true", "Optional. The value to return when logical_test evaluates to TRUE."],
        ["Value_if_false", "Optional. The value to return when logical_test evaluates to FALSE."]
    ],
    "AND": [
        ["Logical1", "Required. The first condition or logical value to evaluate."],
        ["Logical2", "Optional. The second condition or logical value to evaluate."]
    ],
    "NOT": [
        ["Logical", "Required. A value or logical expression that can be evaluated as TRUE or FALSE."]
    ],
    "OR": [
        ["Logical1", "Required. The first condition or logical value to evaluate."],
        ["Logical2", "Optional. The second condition or logical value to evaluate."]
    ],
    "FALSE": [],
    "TRUE": [],
    "ACOS": [
        ["Number", "Required. The value to get the inverse cosine of. The number must be between -1 and 1 inclusive."]
    ],
    "ACOSH": [
        ["Number", "Required. Any real number equal to or greater than 1."]
    ],
    "ACOT": [
        ["Number", "Required. Number is the cotangent of the angle you want. This must be a real number."]
    ],
    "ACOTH": [
        ["Number", "Required. The absolute value of Number must be greater than 1."]
    ],
    "ADD": [
        ["Number1", "Required. The first value to sum."],
        ["Number2", "Required. The second value to sum."]
    ],
    "ARABIC": [
        ["Roman_text", "Required. The Roman numeral in text that you want to convert."]
    ],
    "ASIN": [
        ["Number", "Required. The value to get the inverse sine of. The number must be between -1 and 1 inclusive."]
    ],
    "ASINH": [
        ["Number", "Required. Any real number."]
    ],
    "ATAN": [
        ["Number", "Required. The value to get the inverse tangent of."]
    ],
    "ATAN2": [
        ["X_num", "Required. The x coordinate of the input point."],
        ["Y_num", "Required. The y coordinate of the input point."]
    ],
    "ATANH": [
        ["Number", "Required. Any real number between 1 and -1."]
    ],
    "AVEDEV": [
        ["Number1", "Required. First value or reference."],
        ["Number2", "Optional. Second value or reference."]
    ],
    "BASE": [
        ["Number", "Required. The number to convert to a given base."],
        ["Radix", "Required. The base to convert to."],
        ["Min_length", "Optional. The minimum string length to return, achieved by padding with zeros."]
    ],
    "BINOMDIST": [
        ["Number_s", "Required. The number of successes."],
        ["Trials", "Required. The number of independent trials."],
        ["Probability_s", "Required. The probability of success on each trial."],
        ["Cumulative", "Required. TRUE = cumulative distribution function, FALSE = probability mass function."]
    ],
    "BINOM.INV": [
        ["Trials", "Required. The number of Bernoulli trials."],
        ["Probability_s", "Required. The probability of a success on each trial."],
        ["Alpha", "Required. The criterion value."]
    ],
    "BINOM.DIST.RANGE": [
        ["Trials", "Required. The number of independent trials. Must be greater than or equal to 0."],
        ["Probability_s", "Required. The probability of success in each trial. Must be greater than or equal to 0 and less than or equal to 1."],
        ["Number_s", "Required. The number of successes in trials. Must be greater than or equal to 0 and less than or equal to Trials."],
        ["Number_s2", "Optional. If provided, returns the probability that the number of successful trials will fall between Number_s and number_s2. Must be greater than or equal to Number_s and less than or equal to Trials."]
    ],
    "BINOM.DIST": [
        ["Number_s", "Required. The number of successes."],
        ["Trials", "Required. The number of independent trials."],
        ["Probability_s", "Required. The probability of success on each trial."],
        ["Cumulative", "Required. TRUE = cumulative distribution function, FALSE = probability mass function."]
    ],
    "BITAND": [
        ["Number1", "Required. A positive decimal number."],
        ["Number2", "Required. A positive decimal number."]
    ],
    "BITLSHIFT": [
        ["Number", "Required. The number to be bit shifted."],
        ["Shift_amount", "Required. The amount of bits to shift, if negative shifts bits to the right instead."]
    ],
    "BITOR": [
        ["Number1", "Required. A positive decimal number."],
        ["Number2", "Required. A positive decimal number."]
    ],
    "BITRSHIFT": [
        ["Number", "Required. The number to be bit shifted."],
        ["Shift_amount", "Required. The amount of bits to shift to the right, if negative shifts bits to the left instead."]
    ],
    "BITXOR": [
        ["Number1", "Required. A positive decimal number."],
        ["Number2", "Required. A positive decimal number."]
    ],
    "COMBIN": [
        ["Number", "Required. The total number of items."],
        ["Number_chosen", "Required. The number of items in each combination."]
    ],
    "COMBINA": [
        ["Number", "Required. The total number of items."],
        ["Number_chosen", "Required. The number of items in each combination."]
    ],
    "COMPLEX": [
        ["Real_num", "Required. The real number."],
        ["I_num", "Required. The imaginary number."],
        ["Suffix", "Optional. The suffix, either \"i\" or \"j\"."]
    ],
    "CORREL": [
        ["Array1", "Required. A range of cell values."],
        ["Array2", "Required. A second range of cell values."]
    ],
    "COS": [
        ["Number", "Required. The angle in radians for which you want the cosine."]
    ],
    "COSH": [
        ["Number", "Required. The hyperbolic angle."]
    ],
    "COT": [
        ["Number", "Required. The angle provided in radians."]
    ],
    "COTH": [
        ["Number", "Required."]
    ],
    "COUNTBLANK": [
        ["Range", "Required. The range in which to count blank cells."]
    ],
    "COVAR": [
        ["Array1", "Required. The first cell range of integers."],
        ["Array2", "Required. The second cell range of integers."]
    ],
    "COVARIANCE.P": [
        ["Array1", "Required. The first cell range of integers."],
        ["Array2", "Required. The second cell range of integers."]
    ],
    "COVARIANCE.S": [
        ["Array1", "Required. The first cell range of integers."],
        ["Array2", "Required. The second cell range of integers."]
    ],
    "CSC": [
        ["Number", "Required. The angle provided in radians."]
    ],
    "CSCH": [
        ["Number", "Required."]
    ],
    "DEC2BIN": [
        ["Number", "Required. The decimal number you want to convert to binary."],
        ["Places", "Optional. Pads the resulting binary number with zeros up to the specified number of digits. If omitted returns the least number of characters required to represent the number."]
    ],
    "DEC2HEX": [
        ["Number", "Required. The decimal number you want to convert to hexadecimal."],
        ["Places", "Optional. Pads the resulting number with zeros up to the specified number of digits. If omitted returns the least number of characters required to represent the number."]
    ],
    "DEC2OCT": [
        ["Number", "Required. The decimal number you want to convert to octal."],
        ["Places", "Optional. Pads the resulting octal number with zeros up to the specified number of digits. If omitted returns the least number of characters required to represent the number."]
    ],
    "DECIMAL": [
        ["Number", "Required. A text string representing a number."],
        ["Radix", "Required. The base of the number to be converted, an integer between 2-36."]
    ],
    "DEGREES": [
        ["Angle", "Required. Angle in radians that you want to convert to degrees."]
    ],
    "DELTA": [
        ["Number1", "Required. The first number."],
        ["Number2", "Optional. The second number."]
    ],
    "DEVSQ": [
        ["Number1", "Required. First value or reference."],
        ["Number2", "Optional. Second value or reference."]
    ],
    "DIVIDE": [
        ["Number1", "Required. The number we are dividing."],
        ["Number2", "Required. The number by which we divide."]
    ],
    "EQ": [
        ["Number1", "Required. First value or reference."],
        ["Number2", "Required. Second value or reference."]
    ],
    "ERF": [
        ["Lower_limit", "Required. The lower bound for integrating ERF."],
        ["Upper_limit", "Optional. The upper bound for integrating ERF. If omitted, ERF integrates between zero and lower_limit."]
    ],
    "ERFC": [
        ["X", "Required. The lower bound for integrating ERFC."]
    ],
    "EVEN": [
        ["Number", "Required. The number to round up to an even integer."]
    ],
    "FACT": [
        ["Number", "Required. The number to get the factorial of."]
    ],
    "FACTDOUBLE": [
        ["Number", "Required. A number greater than or equal to -1."]
    ],
    "FISHER": [
        ["X", "Required. A numeric value for which you want the transformation."]
    ],
    "FISHERINV": [
        ["Y", "Required. The value for which you want to perform the inverse of the transformation."]
    ],
    "GAMMA": [
        ["Number", "Required. Returns a number."]
    ],
    "GCD": [
        ["Number1", "Required. The first number."],
        ["Number2", "Optional. The second number."]
    ],
    "GEOMEAN": [
        ["Number1", "Required. First value or reference."],
        ["Number2", "Optional. Second value or reference."]
    ],
    "GESTEP": [
        ["Number", "Required. The value to test against step."],
        ["Step", "Optional. The threshold value. If you omit a value for step, GESTEP uses zero."]
    ],
    "GT": [
        ["Number1", "Required. First value or reference."],
        ["Number2", "Required. Second value or reference."]
    ],
    "GTE": [
        ["Number1", "Required. First value or reference."],
        ["Number2", "Required. Second value or reference."]
    ],
    "HARMEAN": [
        ["Number1", "Required. First value or reference."],
        ["Number2", "Optional. Second value or reference."]
    ],
    "HEX2BIN": [
        ["Number", "Required. The hexadecimal number you want to convert to binary."],
        ["Places", "Optional. Pads the resulting binary number with zeros up to the specified number of digits. If omitted returns the least number of characters required to represent the number."]
    ],
    "HEX2DEC": [
        ["Number", "Required. The hexadecimal number you want to convert to decimal."]
    ],
    "HEX2OCT": [
        ["Number", "Required. The hexadecimal number you want to convert to octal."],
        ["Places", "Optional. Pads the resulting binary number with zeros up to the specified number of digits. If omitted returns the least number of characters required to represent the number."]
    ],
    "IMABS": [
        ["Inumber", "Required. A complex number."]
    ],
    "IMAGINARY": [
        ["Inumber", "Required. A complex number."]
    ],
    "IMCONJUGATE": [
        ["Inumber", "Required. A complex number for which you want the conjugate."]
    ],
    "IMCOS": [
        ["Inumber", "Required. A complex number for which you want the cosine."]
    ],
    "IMCOSH": [
        ["Inumber", "Required. A complex number for which you want the hyperbolic cosine."]
    ],
    "IMCOT": [],
    "IMCSC": [
        ["Inumber", "Required. A complex number for which you want the cosecant."]
    ],
    "IMCSCH": [
        ["Inumber", "Required. A complex number for which you want the hyperbolic cosecant."]
    ],
    "IMDIV": [
        ["Inumber1", "Required. The complex numerator or dividend."],
        ["Inumber2", "Required. The complex denominator or divisor."]
    ],
    "IMEXP": [
        ["Inumber", "Required. A complex number for which you want the exponential."]
    ],
    "IMLN": [
        ["Inumber", "Required. A complex number for which you want the natural logarithm."]
    ],
    "IMPOWER": [
        ["Inumber", "Required. A complex number."],
        ["Number", "Required. Power to raise number."]
    ],
    "IMPRODUCT": [
        ["Inumber1", "Required. Complex number 1."],
        ["Inumber2", "Optional. Complex number 2."]
    ],
    "IMREAL": [
        ["Inumber", "Required. A complex number."]
    ],
    "IMSEC": [
        ["Inumber", "Required. A complex number for which you want the secant."]
    ],
    "IMSECH": [
        ["Inumber", "Required. A complex number for which you want the hyperbolic secant."]
    ],
    "IMSIN": [
        ["Inumber", "Required. A complex number for which you want the sine."]
    ],
    "IMSINH": [
        ["Inumber", "Required. A complex number for which you want the hyperbolic sine."]
    ],
    "IMSQRT": [
        ["Inumber", "Required. A complex number for which you want the square root."]
    ],
    "IMSUB": [
        ["Inumber1", "Required. Complex number 1."],
        ["Inumber2", "Required. Complex number 2."]
    ],
    "IMSUM": [
        ["Inumber1", "Required. Complex number 1."],
        ["Inumber2", "Optional. Complex number 2."]
    ],
    "IMTAN": [
        ["Inumber", "Required. A complex number for which you want the tangent."]
    ],
    "LARGE": [
        ["Array", "Required. An array or range of numeric values."],
        ["K", "Required. Position as an integer, where 1 corresponds to the largest value."]
    ],
    "LN": [
        ["Number", "Required. A number to take the natural logarithm of."]
    ],
    "LOG10": [
        ["Number", "Required. Number for which you want the logarithm."]
    ],
    "LT": [
        ["Number1", "Required. First value or reference."],
        ["Number2", "Required. Second value or reference."]
    ],
    "LTE": [
        ["Number1", "Required. First value or reference."],
        ["Number2", "Required. Second value or reference."]
    ],
    "MEDIAN": [
        ["Number1", "Required. A number or cell reference that refers to numeric values."],
        ["Number2", "Optional. A number or cell reference that refers to numeric values."]
    ],
    "MINUS": [
        ["Number1", "Required. The number from which we subtract."],
        ["Number2", "Required. The number by which we subtract."]
    ],
    "MOD": [
        ["Number", "Required. The number to be divided."],
        ["Divisor", "Required. The number to divide with."]
    ],
    "MROUND": [
        ["Number", "Required. The number that should be rounded."],
        ["Significance", "Required. The multiple to use when rounding."]
    ],
    "MULTINOMIAL": [
        ["Number1, number2, ...", "Required. Number1 is required, subsequent numbers are optional. 1 to 255 values for which you want the multinomial."]
    ],
    "MULTIPLY": [
        ["Number1", "Required. The number to multiply."],
        ["Number2", "Required. The number to multiply by."]
    ],
    "NE": [
        ["Number1", "Required. First value or reference."],
        ["Number2", "Required. Second value or reference."]
    ],
    "OCT2BIN": [
        ["Number", "Required. The octal number you want to convert. Number may not contain more than 10 characters. The most significant bit of number is the sign bit. The remaining 29 bits are magnitude bits. Negative numbers are represented using two's-complement notation."],
        ["Places", "Optional. The number of characters to use. If places is omitted, OCT2BIN uses the minimum number of characters necessary. Places is useful for padding the return value with leading 0s (zeros)."]
    ],
    "OCT2DEC": [
        ["Number", "Required. The octal number you want to convert. Number may not contain more than 10 octal characters (30 bits). The most significant bit of number is the sign bit. The remaining 29 bits are magnitude bits. Negative numbers are represented using two's-complement notation."]
    ],
    "OCT2HEX": [
        ["Number", "Required. The octal number you want to convert. Number may not contain more than 10 octal characters (30 bits). The most significant bit of number is the sign bit. The remaining 29 bits are magnitude bits. Negative numbers are represented using two's-complement notation."],
        ["Places", "Optional. The number of characters to use. If places is omitted, OCT2HEX uses the minimum number of characters necessary. Places is useful for padding the return value with leading 0s (zeros)."]
    ],
    "ODD": [
        ["Number", "Required. The number to round up to an odd integer."]
    ],
    "PERCENTILE": [
        ["Array", "Required. Data values."],
        ["K", "Required. Number representing kth percentile."]
    ],
    "PERCENTILE.INC": [
        ["Array", "Required. Data values."],
        ["K", "Required. Number representing kth percentile."]
    ],
    "PERCENTILE.EXC": [
        ["Array", "Required. Data values."],
        ["K", "Required. A value between 0 and 1 that represents the k:th percentile."]
    ],
    "PERMUT": [
        ["Number", "Required. The total number of items."],
        ["Number_chosen", "Required. The number of items in each combination."]
    ],
    "PI": [],
    "POW": [
        ["Number", "Required. Number to raise to a power."],
        ["Power", "Required. Power to raise number to (the exponent)."]
    ],
    "QUARTILE": [
        ["Array", "Required. A reference containing data to analyze."],
        ["Quart", "Required. The quartile value to return."]
    ],
    "QUARTILE.INC": [
        ["Array", "Required. A reference containing data to analyze."],
        ["Quart", "Required. The quartile value to return."]
    ],
    "QUARTILE.EXC": [
        ["Array", "Required. A reference containing data to analyze."],
        ["Quart", "Required. The quartile value to return, 1-3."]
    ],
    "QUOTIENT": [
        ["Numerator", "Required. The number to be divided."],
        ["Denominator", "Required. The number to divide by."]
    ],
    "RADIANS": [
        ["Angle", "Required. Angle in degrees to convert to radians."]
    ],
    "ROMAN": [
        ["Number", "Required. Number (in Arabic numeral) you want to convert to Roman numeral."],
        ["Form", "Optional. The type of Roman numeral you want."]
    ],
    "SEC": [
        ["Number", "Required. The angle in radians for which you want the secant."]
    ],
    "SECH": [],
    "SIGN": [
        ["Number", "Required. The number to get the sign of."]
    ],
    "SIN": [
        ["Number", "Required. The angle in radians for which you want the sine."]
    ],
    "SINH": [
        ["Number", "Required. The hyperbolic angle."]
    ],
    "SMALL": [
        ["Array", "Required. An array or range of numeric values."],
        ["K", "Required. Position as an integer, where 1 corresponds to the smallest value."]
    ],
    "SQRTPI": [
        ["Number", "Required. The number by which pi is multiplied."]
    ],
    "STDEV": [
        ["Number1", "Required. First number or reference in the sample."],
        ["Number2", "Optional. Second number or reference."]
    ],
    "STDEV.S": [
        ["Number1", "Required. First number or reference in the sample."],
        ["Number2", "Optional. Second number or reference."]
    ],
    "STDEV.P": [
        ["Number1", "Required. First number or reference in the sample."],
        ["Number2", "Optional. Second number or reference."]
    ],
    "STDEVA": [
        ["Number1", "Required. First number or reference in the sample."],
        ["Number2", "Optional. Second number or reference."]
    ],
    "STDEVP": [
        ["Number1", "Required. First number or reference in the sample."],
        ["Number2", "Optional. Second number or reference."]
    ],
    "STDEVPA": [
        ["Number1", "Required. First number or reference in the sample."],
        ["Number2", "Optional. Second number or reference."]
    ],
    "STEYX": [
        ["Known_y's", "Required. An array or range of dependent data points."],
        ["Known_x's", "Required. An array or range of independent data points."]
    ],
    "SUBTOTAL": [
        ["Function_num", "Required. A number that specifies which function to use in calculating subtotals within a list. See table below for full list."],
        ["Ref1", "Required. A named range or reference to subtotal."],
        ["Ref2", "Optional. A named range or reference to subtotal."]
    ],
    "SUMSQ": [
        ["Number1", "Required. The first argument containing numeric values."],
        ["Number2", "Optional. The second argument containing numeric values."]
    ],
    "SUMX2MY2": [
        ["Array_x", "Required. The first range or array containing numeric values."],
        ["Array_y", "Required. The second range or array containing numeric values."]
    ],
    "SUMX2PY2": [
        ["Array_x", "Required. The first range or array containing numeric values."],
        ["Array_y", "Required. The second range or array containing numeric values."]
    ],
    "SUMXMY2": [
        ["Array_x", "Required. The first range or array containing numeric values."],
        ["Array_y", "Required. The second range or array containing numeric values."]
    ],
    "TAN": [
        ["Number", "Required. The angle in radians for which you want the tangent."]
    ],
    "TANH": [
        ["Number", "Required. Any real number."]
    ],
    "TRUNC": [
        ["Number", "Required. The number to truncate."],
        ["Num_digits", "Optional. The precision of the truncation (default is 0)."]
    ],
    "VAR": [
        ["Number1", "Required. First number or reference."],
        ["Number2", "Optional. Second number or reference."]
    ],
    "VAR.S": [
        ["Number1", "Required. First number or reference."],
        ["Number2", "Optional. Second number or reference."]
    ],
    "VAR.P": [
        ["Number1", "Required. First number or reference."],
        ["Number2", "Optional. Second number or reference."]
    ],
    "VARA": [
        ["Number1", "Required. First number or reference."],
        ["Number2", "Optional. Second number or reference."]
    ],
    "VARP": [
        ["Number1", "Required. First number or reference."],
        ["Number2", "Optional. Second number or reference."]
    ],
    "VARPA": [
        ["Number1", "Required. First number or reference."],
        ["Number2", "Optional. Second number or reference."]
    ],
    "WEIBULL": [
        ["X", "Required. The value at which to evaluate the function."],
        ["Alpha", "Required. A parameter to the distribution."],
        ["Beta", "Required. A parameter to the distribution."],
        ["Cumulative", "Required. Determines the form of the function."]
    ],
    "WEIBULL.DIST": [
        ["X", "Required. The value at which to evaluate the function."],
        ["Alpha", "Required. A parameter to the distribution."],
        ["Beta", "Required. A parameter to the distribution."],
        ["Cumulative", "Required. Determines the form of the function."]
    ],
    "CHAR": [
        ["Number", "Required. A number between 1 and 255."]
    ],
    "CLEAN": [
        ["Text", "Required. The text to clean."]
    ],
    "CODE": [
        ["Text", "Required. The text for which you want a numeric code."]
    ],
    "EXACT": [
        ["Text1", "Required. The first text string to compare."],
        ["Text2", "Required. The second text string to compare."]
    ],
    "FIXED": [
        ["Number", "Required. The number to round and format."],
        ["Decimals", "Optional. Number of decimals to use. Default is 2."],
        ["No_commas", "Optional. Suppress commas. TRUE = no commas, FALSE = commas. Default is FALSE."]
    ],
    "NUMBERVALUE": [
        ["Text", "Required. The text to convert to a number."],
        ["Decimal_separator", "Optional. The character for decimal values."],
        ["Group_separator", "Optional. The character for grouping by thousands."]
    ],
    "REGEXEXTRACT": [
        ["Text", "Required. The input text."],
        ["Regular_expression", "Required. The first part of text that matches this expression will be returned."]
    ],
    "REGEXMATCH": [
        ["Text", "Required. The text to be tested against the regular expression."],
        ["Regular_expression", "Required. The regular expression to test the text against."]
    ],
    "REGEXREPLACE": [
        ["Text", "Required. The text, a part of which will be replaced."],
        ["Regular_expression", "Required. The regular expression. All matching instances in text will be replaced."],
        ["Replacement", "Required. The text which will be inserted into the original text."]
    ],
    "REPT": [
        ["Text", "Required. The text to repeat."],
        ["Number_times", "Required. The number of times to repeat text."]
    ],
    "T": [
        ["Value", "Required. The value to return as text."]
    ],
    "JOIN": [
        ["Text1, text2, ...", "Text values you want to combine."]
    ],
    "ARRAYTOTEXT": [
        ["Array", "Required. The array or range to convert to text."],
        ["Format", "Optional. Output format. 0 = concise (default), and 1 = strict."]
    ],
    "DATEVALUE": [
        ["Date_text", "Required. A valid date in text format."]
    ],
    "DAYS": [
        ["End_date", "Required. The end date."],
        ["Start_date", "Required. The start date."]
    ],
    "DAYS360": [
        ["Start_date", "Required. The start date."],
        ["End_date", "Required. The end date."],
        ["Method", "Optional. Day count method. FALSE (default) = US method, TRUE = European method."]
    ],
    "EDATE": [
        ["Start_date", "Required. Start date as a valid Excel date."],
        ["Months", "Required. Number of months before or after start_date."]
    ],
    "EOMONTH": [
        ["Start_date", "Required. A date that represents the start date in a valid Excel serial number format."],
        ["Months", "Required. The number of months before or after start_date."]
    ],
    "ISOWEEKNUM": [
        ["Date", "Required. A valid Excel date in serial number format."]
    ],
    "NETWORKDAYS": [
        ["Start_date", "Required. The start date."],
        ["End_date", "Required. The end date."],
        ["Holidays", "Optional. A list of non-work days as dates."]
    ],
    "NETWORKDAYS.INTL": [
        ["Start_date", "Required. The start date."],
        ["End_date", "Required. The end date."],
        ["Weekend", "Optional. Setting for which days of the week should be considered weekends."],
        ["Holidays", "Optional. A reference to dates that should be considered non-work days."]
    ],
    "TIMEVALUE": [
        ["Time_text", "Required. A date and/or time in a text format recognized by Excel."]
    ],
    "WEEKNUM": [
        ["Serial_num", "Required. A valid Excel date in serial number format."],
        ["Return_type", "Optional. The day the week begins. Default is 1."]
    ],
    "WEEKDAY": [
        ["Serial_number", "Required. The date for which you want to get the day of week."],
        ["Return_type", "Optional. A number representing day of week mapping scheme. Default is 1."]
    ],
    "WORKDAY": [
        ["Start_date", "Required. The date from which to start."],
        ["Days", "Required. The working days before or after start_date."],
        ["Holidays", "Optional. A list dates that should be considered non-work days."]
    ],
    "WORKDAY.INTL": [
        ["Start_date", "Required. The start date."],
        ["Days", "Required. The end date."],
        ["Weekend", "Optional. Setting for which days of the week should be considered weekends."],
        ["Holidays", "Optional. A list of one or more dates that should be considered non-work days."]
    ],
    "YEARFRAC": [
        ["Start_date", "Required. The start date."],
        ["End_date", "Required. The end date."],
        ["Basis", "Optional. The type of day count basis to use (see below)."]
    ],
    "ACCRINT": [
        ["Id", "Required. Issue date of the security."],
        ["Fd", "Required. First interest date of security."],
        ["Sd", "Required. Settlement date of security."],
        ["Rate", "Required. Interest rate of security."],
        ["Par", "Required. Par value of security."],
        ["Freq", "Required. Coupon payments per year (annual = 1, semiannual = 2; quarterly = 4)."],
        ["Basis", "Optional. Day count basis (see below, default = 0)."],
        ["Calc", "Optional. Calculation method (see below, default = TRUE)."]
    ],
    "PMT": [
        ["Rate", "Required. The interest rate for the loan."],
        ["Nper", "Required. The total number of payments for the loan."],
        ["Pv", "Required. The present value, or total value of all loan payments now."],
        ["Fv", "Optional. The future value, or a cash balance you want after the last payment is made. Defaults to 0 (zero)."],
        ["Type", "Optional. When payments are due. 0 = end of period. 1 = beginning of period. Default is 0."]
    ],
    "FV": [
        ["Rate", "Required. The interest rate per period."],
        ["Nper", "Required. The total number of payment periods."],
        ["Pmt", "Required. The payment made each period. Must be entered as a negative number."],
        ["Pv", "Optional. The present value of future payments. If omitted, assumed to be zero. Must be entered as a negative number."],
        ["Type", "Optional. When payments are due. 0 = end of period, 1 = beginning of period. Default is 0."]
    ],
    "DB": [
        ["Cost", "Required. Initial cost of asset."],
        ["Salvage", "Required. Asset value at the end of the depreciation."],
        ["Life", "Required. Periods over which asset is depreciated."],
        ["Period", "Required. Period to calculation depreciation for."],
        ["Month", "Optional. Number of months in the first year. Defaults to 12."]
    ],
    "DDB": [
        ["Cost", "Required. Initial cost of asset."],
        ["Salvage", "Required. Asset value at the end of the depreciation."],
        ["Life", "Required. Periods over which asset is depreciated."],
        ["Period", "Required. Period to calculation depreciation for."],
        ["Factor", "Optional. Rate at which the balance declines. If omitted, defaults to 2."]
    ],
    "DOLLAR": [
        ["Number", "Required. The number to convert."],
        ["Decimals", "Required. The number of digits to the right of the decimal point. Default is 2."]
    ],
    "DOLLARDE": [
        ["Fractional_dollar", "Required. Dollar component in special fractional notation."],
        ["Fraction", "Required. The denominator in the fractional unit. 8 = 1/8, 16 = 1/16, 32 = 1/32, etc."]
    ],
    "DOLLARFR": [
        ["Decimal_dollar", "Required. Pricing as a normal decimal number."],
        ["Fraction", "Required. The denominator in the fractional unit. 8 = 1/8, 16 = 1/16, 32 = 1/32, etc."]
    ],
    "EFFECT": [
        ["Nominal_rate", "Required. The nominal or stated interest rate."],
        ["Npery", "Required. Number of compounding periods per year."]
    ],
    "FVSCHEDULE": [
        ["Principal", "Required. The initial investment sum."],
        ["Schedule", "Required. Schedule of interest rates, provided as range or array."]
    ],
    "IRR": [
        ["Values", "Required. Array or reference to cells that contain values."],
        ["Guess", "Optional. An estimate for expected IRR. Default is .1 (10%)."]
    ],
    "IPMT": [
        ["Rate", "Required. The interest rate per period."],
        ["Per", "Required. The payment period of interest."],
        ["Nper", "Required. The total number of payment periods."],
        ["Pv", "Required. The present value, or total value of all payments now."],
        ["Fv", "Optional. The cash balance desired after last payment is made. Defaults to 0."],
        ["Type", "Optional. When payments are due. 0 = end of period. 1 = beginning of period. Default is 0."]
    ],
    "ISPMT": [
        ["Rate", "Required. Interest rate."],
        ["Per", "Required. Period (starts with zero, not 1)."],
        ["Nper", "Required. Number of periods."],
        ["Pv", "Required. Present value."]
    ],
    "NPV": [
        ["Rate", "Required. Discount rate over one period."],
        ["Value1", "Required. First value(s) representing cash flows."],
        ["Value2", "Optional. Second value(s) representing cash flows."]
    ],
    "NOMINAL": [
        ["Effect_rate", "Required. The effective annual interest rate."],
        ["Npery", "Required. Number of compounding periods per year."]
    ],
    "NPER": [
        ["Rate", "Required. The interest rate per period."],
        ["Pmt", "Required. The payment made each period."],
        ["Pv", "Required. The present value, or total value of all payments now."],
        ["Fv", "Optional. The future value, or a cash balance you want after the last payment is made. Defaults to 0."],
        ["Type", "Optional. When payments are due. 0 = end of period. 1 = beginning of period. Default is 0."]
    ],
    "PDURATION": [
        ["Rate", "Required. Interest rate per period."],
        ["Pv", "Required. Present value of the investment."],
        ["Fv", "Required. Future value of the investment."]
    ],
    "PPMT": [
        ["Rate", "Required. The interest rate per period."],
        ["Per", "Required. The payment period of interest."],
        ["Nper", "Required. The total number of payments for the loan."],
        ["Pv", "Required. The present value, or total value of all payments now."],
        ["Fv", "Optional. The cash balance desired after last payment is made. Defaults to 0."],
        ["Type", "Optional. When payments are due. 0 = end of period. 1 = beginning of period. Default is 0."]
    ],
    "PV": [
        ["Rate", "Required. The interest rate per period."],
        ["Nper", "Required. The number of payment periods."],
        ["Pmt", "Required. The payment made each period."],
        ["Fv", "Optional. Future value. If omitted, defaults to zero."],
        ["Type", "Optional. Payment type, 0 = end of period, 1 = beginning of period. Default is 0."]
    ],
    "SYD": [
        ["Cost", "Required. Initial cost of asset."],
        ["Salvage", "Required. Asset value at the end of the depreciation."],
        ["Life", "Required. Periods over which asset is depreciated."],
        ["Period", "Required. Period to calculation depreciation for."]
    ],
    "TBILLPRICE": [
        ["Settlement", "Required. Settlement date of the security."],
        ["Maturity", "Required. Maturity date of the security."],
        ["Discount", "Required. The discount rate for the security."]
    ],
    "TBILLYIELD": [
        ["Settlement", "Required. Settlement date of the security."],
        ["Maturity", "Required. Maturity date of the security."],
        ["Price", "Required. Price per $100."]
    ],
    "UNIQUE": [
        ["Array", "Required. Range or array from which to extract unique values."],
        ["By_col", "Optional. How to compare and extract. By row = FALSE (default); by column = TRUE."],
        ["Exactly_once", "Optional. TRUE = values that occur once, FALSE = all unique values (default)."]
    ],
    "RANDARRAY": [
        ["Rows", "Optional. Row count. Default = 1."],
        ["Columns", "Optional. Column count. Default = 1."],
        ["Min", "Optional. Minimum value. Default = 0."],
        ["Max", "Optional. Maximum value. Default = 1."],
        ["Integer", "Optional. Whole numbers. Boolean, TRUE or FALSE. Default = FALSE."]
    ],
    "TOROW": [
        ["Array", "Required. The array to transform."],
        ["Ignore", "Optional. Control to ignore blanks and errors."],
        ["Scan_by_column", "Optional. Scan array by column. TRUE = by column, FALSE = by row (default)."]
    ],
    "TOCOL": [
        ["Array", "Required. The array to transform."],
        ["Ignore", "Optional. Setting to ignore blanks and errors."],
        ["Scan_by_column", "Optional. Scan array by column. TRUE = by column, FALSE = by row (default)."]
    ],
    "TEXTSPLIT": [
        ["Text", "Required. The text string to split."],
        ["Col_delimiter", "Required. The character(s) to delimit columns."],
        ["Row_delimiter", "Optional. The character(s) to delimit rows."],
        ["Ignore_empty", "Optional. Ignore empty values. TRUE = ignore, FALSE = preserve. Default is FALSE."],
        ["Match_mode", "Optional. Case-sensitivity. 0 = enabled, 1 = disabled. Default is 0."],
        ["Pad_with", "Optional. Value to pad missing values in 2d arrays."]
    ],
    "WRAPROWS": [
        ["Vector", "Required. The array or range to wrap."],
        ["Wrap_count", "Required. Max values in each row."],
        ["Pad_with", "Optional. Value to use for unfilled places."]
    ],
    "WRAPCOLS": [
        ["Vector", "Required. The array or range to wrap."],
        ["Wrap_count", "Required. Max values in each column."],
        ["Pad_with", "Optional. Value to use for unfilled places."]
    ],
    "TAKE": [
        ["Array", "Required. The source array or range."],
        ["Rows", "Optional. Number of rows to return as an integer."],
        ["Columns", "Optional. Number of columns to return as an integer."]
    ],
    "DROP": [
        ["Array", "Required. The source array or range."],
        ["Rows", "Optional. Number of rows to drop."],
        ["Columns", "Optional. Number of columns to drop."]
    ],
    "SEQUENCE": [
        ["Rows", "Required. Number of rows to return."],
        ["Columns", "Optional. Number of columns to return."],
        ["Start", "Optional. Starting value (defaults to 1)."],
        ["Step", "Optional. Increment between each value (defaults to 1)."]
    ],
    "CHOOSEROWS": [
        ["Array", "Required. The array to extract rows from."],
        ["Row_num1", "Required. The numeric index of the first row to return."],
        ["Row_num2", "Optional. The numeric index of the second row to return."]
    ],
    "CHOOSECOLS": [
        ["Array", "Required. The array to extract columns from."],
        ["Col_num1", "Required. The numeric index of the first column to return."],
        ["Col_num2", "Optional. The numeric index of the second column to return."]
    ],
    "EXPAND": [
        ["Array", "Required. The array to expand."],
        ["Rows", "Optional. The final number of rows. Default is total rows."],
        ["Columns", "Optional. The final number of columns. Default is total columns."],
        ["Pad_with", "Optional. Value to use for new cells. Default is #N/A."]
    ],
    "SORT": [
        ["Array", "Required. Range or array to sort."],
        ["Sort_index", "Optional. Column index to use for sorting. Default is 1."],
        ["Sort_order", "Optional. 1 = Ascending, -1 = Descending. Default is ascending order."],
        ["By_col", "Optional. TRUE = sort by column. FALSE = sort by row. Default is FALSE."]
    ],
    "SORTBY": [
        ["Array", "Required. Range or array to sort."],
        ["By_array", "Required. Range or array to sort by."],
        ["Sort_order", "Optional. Sort order. 1 = ascending (default), -1 = descending."],
        ["Array/order", "Optional. Additional array and sort order pairs."]
    ]
};
~~~

**相关示例**：[Spreadsheet. 本地化](https://snippet.dhtmlx.com/yn5hyyim?mode=wide)
