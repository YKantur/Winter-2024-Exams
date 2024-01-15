'use strict';

// Copy only listed values from dict

const filterObjectKeys = (inputObject, ...allowedKeys) => {
  for (const key of Object.keys(inputObject)) {
    if (!allowedKeys.includes(key)) {
      delete inputObject[key];
    }
  }
  return inputObject;
};

module.exports = filterObjectKeys;
