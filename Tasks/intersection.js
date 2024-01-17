'use strict';

// Find an intersection of two dictionaries

const findIntersection = (object1, object2) => {
  let copyObject1 = object1;
  const firstKeys = Object.keys(copyObject1);
  for (const attributeName of firstKeys) {
    if (copyObject1[attributeName] !== object2[attributeName]) {
      delete copyObject1[attributeName];
    }
  }
  return copyObject1;
};

module.exports = findIntersection;
