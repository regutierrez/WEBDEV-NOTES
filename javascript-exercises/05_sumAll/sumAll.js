const sumAll = function( int_a, int_b) {
    let sum = 0;
    if (!Number.isInteger(int_a) || !Number.isInteger(int_b)) return "ERROR";
    if (int_a < 0 || int_b < 0) return "ERROR";
    if (int_a > int_b) {
        int_high = int_a;
        int_low = int_b;
    } else {
        int_high = int_b;
        int_low = int_a;       
    }
    for (i = int_low; i <= int_high; i++) {
        sum += i;
    }
    return sum;
/*
loop from int1 to int4, increment by 1
add int1 to sum
*/
};
//console.log(sumAll(123, 1));
// Do not edit below this line
module.exports = sumAll;

