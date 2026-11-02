---
sidebar_label: Хелпер AwaitRedraw
title: Хелпер AwaitRedraw
description: Выполните код после того, как DHTMLX Spreadsheet завершит отрисовку, с помощью хелпера dhx.awaitRedraw, для методов API, которые срабатывают только после отображения компонента на странице.
---

# Хелпер AwaitRedraw {#awaitredraw-helper}

Некоторые методы API DHTMLX Spreadsheet вступают в силу только после того, как компонент отрендерен на странице. В некоторых случаях это может занять некоторое время, поэтому необходимо дождаться завершения рендеринга браузером перед выполнением следующего фрагмента кода.

Для таких случаев можно использовать хелпер `dhx.awaitRedraw`. Он отслеживает цикл рендеринга и выполняет ваш код сразу после завершения рендеринга Spreadsheet.

~~~js
dhx.awaitRedraw().then(() => {
    // ваш код здесь
});
~~~

Например, используйте `awaitRedraw` внутри `afterDataLoaded`, чтобы убедиться, что значение ячейки доступно перед его чтением:

~~~js
spreadsheet.events.on("afterDataLoaded", () => {
    dhx.awaitRedraw().then(() => {
        const value = spreadsheet.getValue("A1");
        console.log(value);
    });
});
~~~
