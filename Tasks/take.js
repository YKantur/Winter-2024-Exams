// Filter dictionary keys, retaining only the specified ones
const take = (dx, ...xor) => {
  // Iterate through the keys and remove those not in the specified list
  Object.keys(dx).forEach((key) => {
    if (!xor.includes(key)) {
      delete dx[key];
    }
  });
  return dx;
};

module.exports = take;
