/**
 * 347. Top K Frequent Elements
 * https://leetcode.com/problems/top-k-frequent-elements/
 *
 * Given an integer array nums and an integer k, return the k most
 * frequent elements. Answer may be returned in any order.
 *
 * Must be better than O(n log n) time complexity.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const freqMap = new Map();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Bucket sort: index = frequency, value = list of numbers with that frequency
  const buckets = new Array(nums.length + 1);
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  for (const [num, freq] of freqMap) {
    buckets[freq].push(num);
  }

  // Collect top k from highest frequency buckets
  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    for (const num of buckets[i]) {
      result.push(num);
      if (result.length === k) break;
    }
  }

  return result;
};

// Test cases
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
console.log(topKFrequent([1], 1)); // [1]
console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2)); // [-1, 2]
