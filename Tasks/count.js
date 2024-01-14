// Sum all number values in dict

// Step 2
// Remove unnecessary variable assignment and curly braces

const count = (obj) => {
  let sum = 0;

  // Iterate over the keys and sum up the number values
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (typeof value === 'number') sum += value;
  });

  return sum;
};

module.exports = count;
