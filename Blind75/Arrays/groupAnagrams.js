function groupAnagrams(strs) {
    let map = new Map();
    
    for (let str of strs) {
        let sorted = str.split('').sort().join('');
        if (!map.has(sorted)) {
            map.set(sorted, []);
        }
        map.get(sorted).push(str);
    }
    
    return Array.from(map.values());
}

// Example test cases
console.log(groupAnagrams(["act","pots","tops","cat","stop","hat"]));
// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

console.log(groupAnagrams(["x"]));
// Output: [["x"]]

console.log(groupAnagrams([""]));
// Output: [[""]]
