// Remove unlisted keys from dictionary

// Refactor to filter out unlisted keys
const take = (dx, ...xor) => {
  const keys = Object.keys(dx);
  keys.forEach((key) => {
    if (!xor.includes(key)) {
      delete dx[key];
    }
  });
  return dx;
};

module.exports = take;
