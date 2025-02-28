/**
 * Encode and Decode Strings
 * https://leetcode.com/problems/encode-and-decode-strings/
 * Difficulty: Medium
 *
 * Design an algorithm to encode a list of strings to a single string.
 * The encoded string is then sent over the network and is decoded back
 * to the original list of strings.
 *
 * Approach: Length-prefix encoding — prepend each string with its length
 * and a delimiter so we can reliably decode without ambiguity.
 *
 * Time Complexity: O(n) for both encode and decode
 * Space Complexity: O(n)
 */

/**
 * Encodes a list of strings to a single string.
 * Format: "length#string" for each word
 *
 * @param {string[]} strs
 * @return {string}
 */
const encode = (strs) => {
  return strs.map(s => `${s.length}#${s}`).join('');
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
const decode = (s) => {
  const result = [];
  let i = 0;

  while (i < s.length) {
    // find the delimiter
    let j = i;
    while (s[j] !== '#') j++;

    const len = parseInt(s.slice(i, j));
    const word = s.slice(j + 1, j + 1 + len);

    result.push(word);
    i = j + 1 + len;
  }

  return result;
};

module.exports = { encode, decode };
