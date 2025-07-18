const romanToInt = (s) => {
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const current = roman[s[i]];
        const next = roman[s[i + 1]];

        if (next > current) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
}

// Test cases
console.log(romanToInt("III"));      // 3
console.log(romanToInt("IX"));       // 9
console.log(romanToInt("LVIII"));    // 58
console.log(romanToInt("MCMXCIV"));  // 1994
