/* **************** Function printReverse ************************** */
console.log("**********");
console.log("Function printReverse");
//takes an array as an argument
//prints out the elements in reverse order

function printReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
printReverse([1, 2, 3, 4]);
printReverse(["a", "b", "c", "d"]);

/* **************** function isUniform ************************** */
console.log("**********");
console.log("function isUniform");
//takes an array as an argument
//returns true if all elements in the array are identical
function isUniform(arr) {
    var first = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false;
        }
    }
    return true;
}
isUniform([1, 1, 1, 1]);  //true
isUniform([2, 1, 1, 1]);  //false
isUniform(["a", "b", "c"]); //false
isUniform(["b", "b", "b", "b"]); //true

/* **************** function sumArray ************************** */
console.log("**********");
console.log("function sumArray");
//takes an array as an argument
//returns the sum of all number in the array
function sumArray(arr) {
    var total = 0;
    arr.forEach(function (element) {
        total += element;
    })
    return total;
}
sumArray([1, 2, 3, 4]);   //10
sumArray([10, 3, 10, 4]); //27
sumArray([-5, 100]);    //95

/* **************** function max ************************** */
console.log("**********");
console.log("function max");
//takes an array of numbers as an argument
//returns maximum number in the array
function max(arr) {
    var maxValue = [0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    return maxValue;
}
max([1, 2, 3]);      //3
max([10, 3, 10, 4]); //10
max([-5, 52, 100]);  //100