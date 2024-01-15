// Find an intersection of two dictionaries

const findIntersection = (object_1, object_2) => {
  const firstKeys = Object.keys(object_1);
  for (const attributeName of firstKeys) {
    if (object_1[attributeName] !== object_2[attributeName]) {
      delete object_1[attributeName];
    }
  }
  return object_1;
};

module.exports = findIntersection;
