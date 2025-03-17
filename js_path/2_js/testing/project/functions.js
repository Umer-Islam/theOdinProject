const capitalize = (inputString) => {
  const output = inputString[0].toUpperCase();
  inputString = output + inputString.slice(1, inputString.length);
  console.log(inputString);
  return inputString;
};
// capitalize("Hello");
const reverseString = (inputString) => {
  const reverseString = inputString.split("").reverse().join("");
  return reverseString;
};
const calculator = (firstNumber, secondNumber, OperatorAsString) => {
  if (
    OperatorAsString !== "+" ||
    OperatorAsString !== "-" ||
    OperatorAsString !== "/" ||
    OperatorAsString !== "*"
  )
    if (OperatorAsString === "+") {
      return firstNumber + secondNumber;
    }
  if (OperatorAsString === "-") {
    return firstNumber - secondNumber;
  }
  if (OperatorAsString === "/") {
    return firstNumber / secondNumber;
  }
  if (OperatorAsString === "*") {
    return firstNumber * secondNumber;
  }
};
const arrayAnalysis = (array) => {
  //return array, look at odin project
  return {
    average: ar,
  };
};
console.log(calculator(2, 2, "+"));
module.exports = {
  capitalize,
  reverseString,
  calculator,
  arrayAnalysis,
};
