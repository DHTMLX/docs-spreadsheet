---
sidebar_label: formatAliases
title: JavaScript Spreadsheet - formatAliases Config
description: changetext
---

# formatAliases

@short: defines the list of number formats

@signature:

@type: array

@example:
var spreadsheet = new dhx.Spreadsheet(document.body, {
    formats:[
    	alias: formatAliases | string;
		mask: string;
		name?: string;
		example?: string;
    }
);

@descr:

The default number formats are the following:

- *common* ("")
- *currency* ("$#,##0.00")
- *number* ("#,##0.00")
- *percent* (#,##0.00%)

**Related articles**

@todo: move to "formats" page

todo: check