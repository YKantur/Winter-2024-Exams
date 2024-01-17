'use strict';

// Copy only listed values from dict

const filterObjectKeys = (inputObject, ...allowedKeys) => {
  let outputObject = inputObject;
  for (const key of Object.keys(outputObject)) {
    if (!allowedKeys.includes(key)) {
      delete outputObject[key];
    }
  }
  return outputObject;
};

module.exports = filterObjectKeys;
