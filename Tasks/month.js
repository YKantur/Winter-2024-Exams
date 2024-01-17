'use strict';

// Get month number

const MONTHS = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];

const getMonthNumber = (inputString) => {
  const lowerCaseInput = inputString.toLowerCase();
  for (const index of MONTHS.keys()) {
    if (lowerCaseInput.startsWith(MONTHS[index])) return index + 1;
  }
  return -1;
};

module.exports = getMonthNumber;
