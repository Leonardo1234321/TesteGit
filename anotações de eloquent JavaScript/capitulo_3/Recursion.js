function isEven(x) {
    if (x === 0) {
        return true;
    }
    else if (x > 1) {
        return isEven(x - 2);
    }
    else  {
        return false;
    }
    
    
};
console.log(isEven(900));