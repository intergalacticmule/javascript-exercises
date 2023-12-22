const repeatString = function (string, num) {
  let myString = "";
  if (num >= 0) {
    for (let i = 0; i < num; i++) {
      myString += string;
    }
    return myString;
  }
  return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
