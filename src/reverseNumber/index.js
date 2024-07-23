/**
 * @param {number} x
 * @return {number}
 */

function isWithin32BitRange(number) {
  const INT_32_MIN = -2147483648;
  const INT_32_MAX = 2147483647;

  return number >= INT_32_MIN && number <= INT_32_MAX;
}

var reverse = function (x) {
  if (isWithin32BitRange(x)) {
    let str = x.toString();
    let isNegative = false;
    const reversed = [];

    if (str[0] === "-") {
      isNegative = true;
      str = str.substring(1);
    }

    console.log(str);

    for (let i = str.length; i > 0; i--) {
      reversed.push(str[i - 1]);
    }

    const numberTeste = isNegative
      ? -Number(reversed.join(""))
      : Number(reversed.join(""));

    return isWithin32BitRange(numberTeste) ? numberTeste : 0;
  } else {
    return 0;
  }
};

console.log(reverse(1534236469));
