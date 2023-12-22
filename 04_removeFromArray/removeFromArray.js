const removeFromArray = function (array, ...removables) {
  return array.filter((num) => !removables.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
