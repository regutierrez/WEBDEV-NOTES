const fibonacci = function(intNum) {
    if (intNum < 0) return "OOPS";
    fibArray = [1,1];
    let fibNumber = 0;
    for (let index = 1; index < intNum - 1; index++) {
        fibNumber = fibArray[index] + fibArray[index - 1];
        if (!fibArray[index + 1]) fibArray.push(fibNumber);
    };

    return fibArray[fibArray.length - 1];
};

//console.log(fibonacci(6));
// Do not edit below this line
module.exports = fibonacci;
