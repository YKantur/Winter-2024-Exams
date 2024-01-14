'use strict';

// Shuffle an array

const shuffleArray = (arr) => {
  arr.sort(() => Math.random() - 0.5);
  return arr;
};

module.exports = shuffleArray;
