const classLister = styleObject => (...classList) => {
  const generateClassString = (list, myClass) => {
    let output = list;
    if (output) {
      output += ' '; // appends a space if list is not empty
    }
    if (Array.isArray(myClass)) {
      output += myClass.reduce(generateClassString, ''); // recursion to deal with Arrays
    } else if (/\s/.test(myClass)) {
      output += myClass.split(' ').reduce(generateClassString, '');
    } else if (styleObject[myClass]) {
      output += styleObject[myClass];
      // append styleObject['myClass'] value to the list if it is defined in styleObject
    } else if (typeof myClass === 'string') {
      output += myClass; // append 'myClass' directly to the list
    }

    return output;
  };
  return { className: classList.reduce(generateClassString, '') };
};

export default classLister;
