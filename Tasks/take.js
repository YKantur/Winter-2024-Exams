'use strict';

// Retain only specified keys in the dictionary

const take = (dx, ...xor) => {
  for (const key in dx) {
    if (!xor.includes(key)) {
      delete dx[key];
    }
  }
  return dx;
};

module.exports = take;
