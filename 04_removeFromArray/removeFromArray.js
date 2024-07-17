const removeFromArray = function(array, ...args)
{
// Create a blank new array.
let newArray = [];
// Iterate through the array passed in.
array.forEach((item) => {
    if (!args.includes(item)) {
        newArray.push(item);
    }
})

return newArray;
};
// Check if the current item is mentioned in args.

// If it is not, then add it (push) to the new array.

// return the new array.
// Do not edit below this line
module.exports = removeFromArray;
