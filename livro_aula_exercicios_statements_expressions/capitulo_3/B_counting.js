/*function countBs(strg = "") {
    let result = 0;
    for (let i = 0; i < strg.length; i ++) {
        if (strg[i] === "B") {
            result ++;
        }
    }
    return result;
};
console.log(countBs("BBBBBB"));
console.log(countBs("B"));
console.log(countBs("BB"));
console.log(countBs(""));
console.log(countBs());
console.log(countBs("The Bees Hive love to eat Beans and lots of jellybeans with green Beans"));
*/

/*segundo código

function countChar(strg="", char) {
    if (typeof char !== 'string') {
        char = "";
    };
    let result = 0;
    for (let i = 0; i < strg.length; i++) {
        if (strg[i] === char) {
            result += 1;
        };
    };
    return result;
}
console.log(countChar("bbbbbbb", "b"));
console.log(countChar("bbbbbbb", 5));
console.log(countChar("asjlhdfopuheuhwaoudnolfnalsd", "a"));
*/

function countChar(char) {
    if (typeof char === 'string') {
        return (strg) => {
            let result = 0;
            for (let i = 0; i < strg.length; i ++) {
                if (strg[i] === char) {
                    result ++;
                };
            };
            return result;
        };
    } else {
        return;
    }
};

const count_b = countChar("b");
const count_a = countChar("a");
console.log(count_b("bbbbbbb"))
console.log(count_a("aaa"))
