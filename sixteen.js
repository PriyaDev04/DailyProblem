let str = "my name is priya";

let result = str
    .split(" ")
    .map(word => {
        return word
            .split("")
            .map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
            .join("");
    })
    .join(" ");

console.log(result);  // Output: "My NaMe Is PrIyA"
