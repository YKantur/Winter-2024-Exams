'use strict';

// Retain only specified keys in the dictionary

const take = (sourceObject, ...keysToTake) => {
  let newObject = {};
  for (const key in sourceObject) {
    if (keysToTake.includes(key)) {
      newObject[key] = sourceObject[key];
    }
  }
  return newObject;
};

module.exports = take;
