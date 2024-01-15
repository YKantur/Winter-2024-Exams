'use strict';

// Copy only listed values from dict

const filterObjectKeys = (inputObject, ...allowedKeys) => {
  Object.keys(inputObject).forEach((key) => {
    if (!allowedKeys.includes(key)) {
      delete inputObject[key];
    }
  });
  return inputObject;
};

module.exports = filterObjectKeys;
