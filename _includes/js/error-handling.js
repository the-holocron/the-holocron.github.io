/* Bad */
try {
    functionThatMightThrow();
} catch (e) { }

/* Good */
try {
  functionThatMightThrow();
} catch (error) {
    // One option (more noisy than console.log):
    console.error(error);
    // Another option:
    notifyUserOfError(error);
    // Another option:
    reportErrorToService(error);
    // OR do all three!
}

/* Bad */
getData()
    .then(data => {
        functionThatMightThrow(data);
    })
    .catch(error => {
        console.log(error);
    });

/* Good */
getData()
    .then(data => {
        functionThatMightThrow(data);
    })
    .catch(error => {
        // One option (more noisy than console.log):
        console.error(error);
        // Another option:
        notifyUserOfError(error);
        // Another option:
        reportErrorToService(error);
        // OR do all three!
    });
