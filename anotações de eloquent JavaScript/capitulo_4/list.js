
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
let list = arrayToList([1,2,3,4,5,6,7,8,9])
console.log(list)
function listToArray(list, array=[]) {
    array.push(list.value);
    if (list.rest != null) {
        return listToArray(list.rest, array)
    } else {
        return array;
    };
};

let array = listToArray(list);
console.log(array);

function prepend(list, element) {
    return {value: element, rest: list};
};

list = prepend(list, "3");
console.log(list)

function nth(list, index=0, iterator=0) {
    if (iterator === index) {
        return list.value;
    }
    else if (iterator < index && list.rest === null) {
        throw new Error("list Index out of range");
    }
    else if (iterator < index) {
        iterator += 1;
        return nth(list.rest, index, iterator);
    }
    else if (iterator > index) {
        throw new Error("iterator beyond index");
    };
};

console.log(nth(list, 1, 2))