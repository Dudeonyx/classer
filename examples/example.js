/* eslint-disable no-console */
const classLister = require('../lib').default;

const sampleStyleObject = {
  App: 'App_App__3TjUG',
  'd-flex-c': 'App_d-flex-c__xpDp1',
};
const classes = classLister(sampleStyleObject);

const stringOfClasses = classes('App', 'bold', 'app', 'myRedDiv', 'd-flex-c');

// classes === 'function'
console.log(classes);
// stringOfClasses === App_App__3TjUG App_d-flex-c__xpDp1'
console.log(stringOfClasses);
