const removeFromArray = function(array, ...elemToDelete) {

    for (const elem of elemToDelete) {
        const index = array.indexOf(elem);

        if (index > -1) {
            array.splice(index, 1);
        }
    }
    return array;
};

//console.log(removeFromArray([1, 2, 3, 4], 1, 7) );
// Do not edit below this line
module.exports = removeFromArray;

