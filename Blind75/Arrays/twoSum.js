function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return []; // This should never be reached due to the problem guarantee
}

// Example test cases
console.log(twoSum([3, 4, 5, 6], 7)); // Output: [0, 1]
console.log(twoSum([4, 5, 6], 10));   // Output: [0, 2]
console.log(twoSum([5, 5], 10));      // Output: [0, 1]

