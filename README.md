# CSS Module Class Lister

[![Build Status](https://travis-ci.org/Dudeonyx/classer.svg?branch=master)](https://travis-ci.org/Dudeonyx/classer) [![dependencies Status](https://david-dm.org/Dudeonyx/classer/status.svg)](https://david-dm.org/Dudeonyx/classer) [![devDependencies Status](https://david-dm.org/Dudeonyx/classer/dev-status.svg)](https://david-dm.org/Dudeonyx/classer?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Add multiple classes from CSS module style objects** ✨

Adding multiple classes from CSS module style objects has never been easier and as readable

# Installation

    npm install classer

# Usage

```javascript
import React from 'react';
import styles from './mystyles.module.css';
import classer from 'classer';

// console.log(styles);
// sample console output =>
// {
//   App: 'App_App__3TjUG',
//   'd-flex-c': 'App_d-flex-c__xpDp1',
// };

const classes = classer(styles); // Can be any name, doesn't have to be classes

const App = props => {
  return (
    <div {...classes('App', 'bold', 'd-flex-c')}>
      <p>Blah Blah Blah</p>
    </div>
  );
};

export default App;
```

~~Note: 'bold' is ignored since it is not defined in styles.module.css~~

Edit: As of version 1.1.0 undefined classes are kept and added but obviously without the hash

This results in:

```html
<div class="App_App__3TjUG bold App_d-flex-c__xpDp1"><p>Blah Blah Blah</p></div>
```

**Note:** The created function accepts multiple individual strings, arrays and spaced strings or a mixture of these as valid input.
Eg. All the different argument formats below are valid.

```javascript
const classes = classer(styles);  // Can be any name, doesn't have to be classes

const App = (props) => {
    return (
      <div {...classes( 'App', 'bold', 'd-flex-c' )}>
      OR
      <div {...classes( 'App bold d-flex-c' )}>
      OR
      <div {...classes( ['App', 'bold', 'd-flex-c'] )}>
      OR
      <div {...classes( ['App', 'bold'], 'd-flex-c') }>
      OR
      <div {...classes( ['App'], 'bold d-flex-c') }>
      OR
      <div {...classes( ['App bold'], 'd-flex-c') }>
```

It can be used for conditional classes by having your condition statement generate an array of classes which you use as the argument for your classes(or whatever you name it) function.

E.g.

```javascript
let conditionalClasses = [];
if (condition) {
  conditionalClasses.push('a-class', 'b-class');
} else {
  conditionalClasses.push('b-class', 'c-class');
}
```

**OR**

```javascript
let conditionalClasses = [];
if (condition) {
  conditionalClasses = ['a-class', 'b-class'];
} else {
  conditionalClasses = ['b-class', 'c-class'];
}
```

Then use conditionalClasses like this:

```javascript
const App = props => {
  return (
    <div {...classes(conditionalClasses)}>
      <p>Blah Blah Blah</p>
    </div>
  );
};
```

# License

MIT © Dinesh Pandiyan
