function scoreOfString(s) {
    let score = 0;

    for (let i = 0; i < s.length - 1; i++) {
        const currentAscii = s.charCodeAt(i);
        const nextAscii = s.charCodeAt(i + 1);
        score += Math.abs(currentAscii - nextAscii);
    }

    return score;
}


console.log(scoreOfString("hello"));
console.log(scoreOfString("zaz"));   
