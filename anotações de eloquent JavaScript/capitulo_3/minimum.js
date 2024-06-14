const minimum = function(a, b) {
    if (b === undefined) {
        return a;
    } else if (a <= b) {
        return a;
    } else {
        return b;
    }
};
console.log(minimum(5, 3));
console.log(minimum(3, 5));
console.log(minimum(934, 1));
console.log(minimum(5));