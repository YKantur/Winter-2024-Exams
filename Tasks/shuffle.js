'use strict';

// Shuffle an array

const shuffleArray = (arr) => {
  return arr.sort(() => Math.random());
};

module.exports = shuffleArray;
