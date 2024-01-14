// Split an array into two parts

'use strict';

const splitArray = (index, array) => {
  const begin = array.slice(0, index);
  const remainder = array.slice(index);
  return [begin, remainder];
};

module.exports = splitArray;
