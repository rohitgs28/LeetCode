/**
 * 11. Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 *
 * Medium | Two Pointers
 *
 * Given n non-negative integers a1, a2, ..., an where each represents
 * a point at coordinate (i, ai). n vertical lines are drawn such that
 * the two endpoints of the line i are at (i, ai) and (i, 0).
 * Find two lines that together with the x-axis form a container that
 * holds the most water.
 *
 * Time:  O(n)
 * Space: O(1)
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const width = right - left;
    const h = Math.min(height[left], height[right]);
    max = Math.max(max, width * h);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};
