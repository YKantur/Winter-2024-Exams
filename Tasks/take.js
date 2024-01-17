'use strict';

// Retain only specified keys in the dictionary

const take = (sourceObject, ...keysToTake) => {
  for (const key in sourceObject) {
    if (!keysToTake.includes(key)) {
      delete sourceObject[key];
    }
  }
  return sourceObject;
};

module.exports = take;
