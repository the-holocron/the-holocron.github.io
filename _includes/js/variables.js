/* Bad */
const yyyymmdstr = moment().format(`YYYY/MM/DD`);
getUserInfo();
getCustomerRecord();
setTimeout(blastOff, 86400000);
const Car = {
    carMake: `Honda`,
    carColor: `Blue`
};

/* Good */
const currentDate = moment().format(`YYYY/MM/DD`);
getUser();
const MILLISECONDS_IN_A_DAY = 86400000;
setTimeout(blastOff, MILLISECONDS_IN_A_DAY);
const Car = {
    make: `Honda`,
    model: `Accord`,
    color: `Blue`
};
