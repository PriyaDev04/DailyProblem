//Given a string s, reverse only the alphabetical letters, keeping the positions of special characters and digits unchanged.
//Input:  "a-bC-dEf-ghIj"
//Output: "j-Ih-gfE-dCba"


function reverseOnlyLetters(s) {
    const letters = s.match(/[a-zA-Z]/g);
    let result = '';

    for (let char of s) {
        if (/[a-zA-Z]/.test(char)) {
            result += letters.pop();
        } else {
            result += char;
        }
    }

    return result;
}
console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));


console.log(reverseOnlyLetters("Test1ng=code-Q!"));

