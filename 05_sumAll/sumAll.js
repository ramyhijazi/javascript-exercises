const sumAll = function (num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
  if (num1 < 0 || num2 < 0) return "ERROR";
  if (num1 > num2) {
    const temp = num1;
    num1 = num2;
    num2 = temp;
  }
  let sum = 0;
  let array = [];
  while (num1 !== num2 + 1) {
    array.push(num1);
    num1 += 1;
  }

  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  console.log(array);
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
