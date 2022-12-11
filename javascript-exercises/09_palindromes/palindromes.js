const palindromes = function (str) {
    let str_new = str.replace(/[^a-zA-Z0-9]/g, ""); 
    let strLowerCase = str_new.toLowerCase(); 

    let strReverse = strLowerCase.split("").reverse().join("");

    if (strReverse == strLowerCase) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
