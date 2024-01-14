'use strict';

// Sum all number values in dict

// Step 2 (modified)
// Replace forEach with a regular loop for simplicity

const count = (obj) => {
  let sum = 0;

  // Iterate over the values and sum up the number values
  const values = Object.values(obj);
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (typeof value === 'number') sum += value;
  }

  return sum;
};

module.exports = count;
