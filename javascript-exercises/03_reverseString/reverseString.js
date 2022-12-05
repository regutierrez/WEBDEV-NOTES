const reverseString = function(str) {
    let reverseStrArray =[];
    const strArray = str.split("");
    
    for (let i = 0; i < str.length; i++) reverseStrArray.push(strArray.pop());
    //console.log(reverseStrArray.join(""))
    return reverseStrArray.join("")
};

// Do not edit below this line
module.exports = reverseString;