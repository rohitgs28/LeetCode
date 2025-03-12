
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const count = new Map();

    for (let char of s) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    for (let char of t) {
        if (!count.has(char) || count.get(char) === 0) {
            return false;
        }
        count.set(char, count.get(char) - 1);
    }

    return true;
}

console.log(isAnagram("racecar", "carrace")); // Output: true
console.log(isAnagram("jar", "jam")); // Output: false
