const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const addition =
    options.addition !== undefined ? String(options.addition) : "";
  const additionSeparator = options.additionSeparator || "|";
  const separator = options.separator || "+";

  const add = [...Array(additionRepeatTimes)]
    .map(() => addition)
    .join(additionSeparator);

  return [...Array(repeatTimes)].map(() => str + add).join(separator);
}

module.exports = {
  repeater,
};
