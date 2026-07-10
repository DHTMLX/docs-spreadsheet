---
sidebar_label: Хелпер AwaitRedraw
title: Хелпер AwaitRedraw
description: Вы можете изучить хелпер AwaitRedraw в документации библиотеки DHTMLX JavaScript Spreadsheet. Просматривайте руководства разработчика и справочник API, изучайте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Spreadsheet.
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
