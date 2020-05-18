console.log("function isEven");
function isEven(number) {
    // if (number % 2 === 0) {
    //     return true;
    // }
    // else {
    //     return false;
    // }

    return number % 2 === 0;
}

isEven(4);
isEven(21);
isEven(68);
isEven(333);

// ************************************************
console.log("function factorial");
function factorial(value) {
    var total = 1;
    for (var i = 1; i <= value; i++) {
        // total = total * i;
        total *= i;
    }
    return total;
}

// factorial(4) 4 x 3 x 2 x 1 = 24
factorial(5);
factorial(2);
factorial(10);
factorial(0);


// ************************************************
console.log("function kebabToSnake");
function kebabToSnake(str) {
    // replace all '-' with '_'s
    // return str
    var newStr = str.replace(/-/g, "_");

    return newStr;
}

