function reverseWords(string) {
    let array = string.split(' ');
    array.reverse();
    array = array.join(' ');
    return array;
};
console.log(reverseWords("The quick brown fox"));