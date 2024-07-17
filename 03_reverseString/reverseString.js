const reverseString = function(string) {
    // Split the string into an array of individual letters.
    let splitString = string.split("")

    // Reverse the array.
    let reversedArray = splitString.reverse()

    // Join the characters in the array.
    let reversedString = reversedArray.join("")

    // Return the final result.
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

