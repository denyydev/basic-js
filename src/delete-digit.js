const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const result = [];
  const split = n.toString().split("");

  split.forEach((n, index) => {
    const newNumber = [
      ...split.slice(0, index),
      ...split.slice(index + 1).join(""),
    ];
    result.push(Number(newNumber.join("")));
  });

  return Math.max(...result);
}

module.exports = {
  deleteDigit,
};
