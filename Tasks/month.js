'use strict';

// Get month number

const MONTHS = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];

const getMonthNumber = (inputString) => {
  const lowerCaseInput = inputString.toLowerCase();
  for (let i = 0; i < MONTHS.length; i++) {
    if (lowerCaseInput.startsWith(MONTHS[i])) return i + 1;
  }
  return -1;
};

module.exports = getMonthNumber;
