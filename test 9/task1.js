const sort_by_frequency = (arr) => {
    const count = {};

    for(const i of arr) {
        if(i in count) {
            count[i] += 1;
        } else {
            count[i] = 1;
        }
    }
    
    const newArr = [];

    for(const key in count) {
        newArr.push({ [key]: count[key]})
    }

    const result = [];

    for(const obj of newArr.sort((a, b) => Object.values(b)[0] - Object.values(a)[0])) {
        const key = Object.keys(obj)[0];
        for(let x = obj[key]; x > 0; x--) {
            result.push(parseInt(key));
        }
    }

    return result;
}

// Task 1: Sorting by Frequency
// Write a function sort_by_frequency(lst) that returns the list sorted by frequency of elements 
// (most frequent first). If two numbers have the same frequency, keep the smaller number first.

// Test Cases:

console.log(sort_by_frequency([4,4,1,2,2,3,3,3])) // [3,3,3,2,2,4,4,1]
console.log(sort_by_frequency([10,20,10,30,20,10])) // [10,10,10,20,20,30]
console.log(sort_by_frequency([])) // []