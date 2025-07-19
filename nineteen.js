const firstUniqueChar = (str) => {
    const count = {};

    // Step 1: Count frequency
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }

    // Step 2: Find first character with count 1
    for (let char of str) {
        if (count[char] === 1) {
            return char;
        }
    }

    return null;
};


console.log(firstUniqueChar("ppriya"));
console.log(firstUniqueChar("llakkshmi"));

