const object_intersection = (obj1, obj2) => {
    const result = {};

    for(const key in obj1) {
        if(key in obj1 && key in obj2) {
            result[key] = obj1[key] + obj2[key];
        }
    }

    return result;
}

// Task 4: Intersection of Two Dictionaries
// Write a function dict_intersection(d1, d2) that returns a dictionary containing keys that appear in both dictionaries, with their values summed.
// Test Cases:

console.log(object_intersection({"a":1,"b":2},{"b":3,"c":4})) // {"b":5}
console.log(object_intersection({"x":10},{"y":5})) // {}