function areAnagrams(palavra1, palavra2) {
    if (palavra1.length != palavra2.length) {
        return false;
    }
    let strvalue1 = 0;
    let strvalue2 = 0;
    for (let i = 0; i < palavra1.length; i++) {
        strvalue1 += palavra1.charCodeAt(i);
        strvalue2 += palavra2.charCodeAt(i);
    }
    if (strvalue1 === strvalue2) {
        return true;
        
    }  else {
        
        return false;
    }
}
console.log(areAnagrams("listen", "silent"));