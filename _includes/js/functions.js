/* Bad */
function createMenu(title, body, buttonText, cancellable) { ... }
createMenu(`Foo`, `Bar`, `Baz`, true);

/* Good */
function createMenu({ title, body, buttonText, cancellable }) { ...  }
createMenu({
    title: `Foo`,
    body: `Bar`,
    buttonText: `Baz`,
    cancellable: true
});

/* Bad */
function addToDate(date, month) { ... }
// It's hard to tell from the function name what is added
addToDate(new Date(), 1);

/* Good */
function addMonthToDate(month, date) { ... }
addMonthToDate(1, new Date());
