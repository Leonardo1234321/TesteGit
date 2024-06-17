function range(start, end, step=1) {
    let arrayBody = [];
    if (start <= end) {
        for (i = start+step; i <= end; i += step) {
            arrayBody.push(i);
        };
    }
    else if (start > end) {
        for (i = start+step; i >= end; i += step) {
            arrayBody.push(i);
        };
    }
    let finalArray = [start, ...arrayBody];
    return finalArray;
};
console.log(range(5, 2, -2));

function sum(numbers) {
    let total = 0;
    for (let numbs of numbers) {
        total += numbs;
    };
    return total;
};
console.log(sum(range(1,10)));