//Array1 => element -> int, Array2 => elemtn -> int, Array1.length = Array2.length + 1
function findMissingElement(array1, array2) {
    let counter1 = 0;
    let counter2 = 0;
    for (i = 0; i < array2.length; i++) {
        counter1 += array1[i];
        counter2 += array2[i];
    }
    counter1 += array1.at(-1);
    return counter1 - counter2;
};

console.log(findMissingElement([1, 2, 3, 4, 5], [2, 3, 1, 5]));