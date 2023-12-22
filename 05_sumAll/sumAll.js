const sumAll = function (start, end) {
  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    return "ERROR";
  }

  if (start < 0 || end < 0) {
    return "ERROR";
  }

  let myArgs = [start, end];

  if (start > end) {
    myArgs = [end, start];
  }

  let sum = 0;

  for (let i = myArgs[0]; i <= myArgs[1]; i++) {
    sum += i;
  }

  return sum;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
