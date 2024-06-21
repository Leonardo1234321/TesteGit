let Array = [1,2,3];

function arrayToList(array, index=0) {
    if (index == array.length - 1) {
        return  { value: array[index],
                  rest: null
                };
    }
    else {
        return  {
                value: array[index],
                rest: arrayToList(array, index+1)
                };
    };
};
function listToArray(list) {
    let array = []
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
};
function nth(list, index=0) {
    let iterator = 0;
    for (let node = list; node; node = node.rest) {
        if (index === iterator) {
            return node.value;
        }
        else {
            iterator += 1
        };
    };
    throw new Error("list Index out of range")
};
let list = arrayToList([1,2,3,4,5,6,7,8,9]);
console.log(list);
let array2 = listToArray(list);
console.log(array2);

console.log(nth(list, 0))
