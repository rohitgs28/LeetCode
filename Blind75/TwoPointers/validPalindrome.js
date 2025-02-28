/**
 * Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 * Difficulty: Easy
 *
 * A phrase is a palindrome if, after converting all uppercase letters into
 * lowercase letters and removing all non-alphanumeric characters, it reads
 * the same forward and backward.
 *
 * Approach: Two pointers from both ends, skip non-alphanumeric chars.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) - no extra string allocation
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;

  const isAlphanumeric = (char) => /[a-zA-Z0-9]/.test(char);

  while (left < right) {
    // skip non-alphanumeric from left
    while (left < right && !isAlphanumeric(s[left])) left++;
    // skip non-alphanumeric from right
    while (left < right && !isAlphanumeric(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

    left++;
    right--;
  }

  return true;
};

module.exports = { isPalindrome };
