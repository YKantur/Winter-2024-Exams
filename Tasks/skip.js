// Return an array without listed values

const skip = (inputArray, ...valuesToRemove) => {
  return inputArray.filter((element) => !valuesToRemove.includes(element));
};

module.exports = skip;
