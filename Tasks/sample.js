'use strict';
// Get one random element from an array

const getRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

module.exports = getRandomElement;
