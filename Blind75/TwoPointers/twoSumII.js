/**
 * 167. Two Sum II - Input Array Is Sorted
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 *
 * Two pointer approach — O(n) time, O(1) space
 * Since the array is sorted, we can use a left and right pointer.
 * If the sum is too large, move right pointer left.
 * If the sum is too small, move left pointer right.
 *
 * @param {number[]} numbers - sorted array of integers
 * @param {number} target
 * @return {number[]} - 1-indexed positions
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [-1, -1];
};
