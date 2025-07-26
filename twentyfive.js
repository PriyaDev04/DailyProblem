// Find All Duplicates in an Array

// let arr=[4, 3, 2, 7, 8, 2, 3, 1]

function findDuplicates(arr) {
    const seen = {};
    const duplicates = new Set();

    for (let num of arr) {
        if (seen[num]) {
            duplicates.add(num);
        } else {
            seen[num] = true;
        }
    }

    return Array.from(duplicates);
}

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDuplicates([1, 2, 3, 4, 5]));
console.log(findDuplicates([5, 5, 5, 5]));

