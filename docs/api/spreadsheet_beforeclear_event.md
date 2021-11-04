---
sidebar_label: beforeClear
title: beforeClear event
description: You can learn about the beforeClear event in the documentation of the DHTMLX JavaScript Spreadsheet library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Spreadsheet.
---

# beforeClear

@short: fires before a spreadsheet is cleared

@signature: {`beforeClear: () => void | boolean;`}

@returns:
Return `false` to prevent clearing a spreadsheet; otherwise, `true`.

@example:
spreadsheet.events.on("beforeClear", function(){
	console.log("A spreadsheet will be cleared");
    return false;
});

@descr:

@changelog: added in v4.2
