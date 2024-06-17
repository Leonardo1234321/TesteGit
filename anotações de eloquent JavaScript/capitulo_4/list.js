let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};
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
